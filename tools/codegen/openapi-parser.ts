/**
 * OpenAPI specification parser for NEAR Protocol JSON-RPC
 * 
 * Fetches and parses the OpenAPI spec from NEAR's repository
 */

import { transformKeys } from './utils';

export interface OpenApiSpec {
  openapi: string;
  info: {
    title: string;
    version: string;
    description?: string;
  };
  paths: Record<string, PathItem>;
  components?: {
    schemas?: Record<string, Schema>;
  };
}

export interface PathItem {
  get?: Operation;
  post?: Operation;
  put?: Operation;
  delete?: Operation;
  options?: Operation;
  head?: Operation;
  patch?: Operation;
  trace?: Operation;
}

export interface Operation {
  operationId?: string;
  summary?: string;
  description?: string;
  parameters?: Parameter[];
  requestBody?: RequestBody;
  responses: Record<string, Response>;
  tags?: string[];
}

export interface Parameter {
  name: string;
  in: 'query' | 'header' | 'path' | 'cookie';
  required?: boolean;
  schema: Schema;
  description?: string;
}

export interface RequestBody {
  description?: string;
  content: Record<string, MediaType>;
  required?: boolean;
}

export interface MediaType {
  schema: Schema;
  examples?: Record<string, unknown>;
}

export interface Response {
  description: string;
  content?: Record<string, MediaType>;
  headers?: Record<string, Header>;
}

export interface Header {
  description?: string;
  schema: Schema;
}

export interface Schema {
  type?: string;
  format?: string;
  items?: Schema;
  properties?: Record<string, Schema>;
  required?: string[];
  enum?: unknown[];
  anyOf?: Schema[];
  oneOf?: Schema[];
  allOf?: Schema[];
  $ref?: string;
  description?: string;
  example?: unknown;
  default?: unknown;
  nullable?: boolean;
  additionalProperties?: boolean | Schema;
}

// NEAR Protocol OpenAPI spec URL
const OPENAPI_SPEC_URL = 'https://raw.githubusercontent.com/near/nearcore/master/chain/jsonrpc/openapi/rpc_light_client.json';

/**
 * Fetch OpenAPI specification from NEAR Protocol repository
 */
export async function fetchOpenApiSpec(): Promise<OpenApiSpec> {
  try {
    const response = await fetch(OPENAPI_SPEC_URL);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch OpenAPI spec: ${response.status} ${response.statusText}`);
    }
    
    const spec = await response.json();
    
    // Transform snake_case keys to camelCase
    const transformedSpec = transformKeys(spec);
    
    // Validate basic structure
    const validatedSpec = transformedSpec as any;
    if (!validatedSpec.openapi || !validatedSpec.info || !validatedSpec.paths) {
      throw new Error('Invalid OpenAPI specification structure');
    }
    
    return transformedSpec as OpenApiSpec;
    
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch or parse OpenAPI spec: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Extract method name from operation ID or path
 */
export function extractMethodName(operationId?: string, path?: string): string {
  if (operationId) {
    return operationId.replace(/^EXPERIMENTAL_/, '');
  }
  
  if (path) {
    // Remove leading slash and convert to camelCase
    return path.replace(/^\//, '').replace(/[_-]([a-z])/g, (_, letter) => letter.toUpperCase());
  }
  
  return 'unknown';
}

/**
 * Get JSON-RPC method name from OpenAPI operation
 */
export function getJsonRpcMethodName(operation: Operation, path: string): string {
  // NEAR JSON-RPC methods often use the path as the method name
  // Remove leading slash and handle special cases
  const pathMethod = path.replace(/^\//, '');
  
  // Handle experimental methods
  if (pathMethod.startsWith('EXPERIMENTAL_')) {
    return pathMethod;
  }
  
  // Map common paths to JSON-RPC methods
  const methodMap: Record<string, string> = {
    'block': 'block',
    'chunk': 'chunk',
    'tx': 'tx',
    'broadcast_tx_async': 'broadcast_tx_async',
    'broadcast_tx_commit': 'broadcast_tx_commit',
    'query': 'query',
    'status': 'status',
    'gas_price': 'gas_price',
    'send_tx': 'send_tx',
  };
  
  return methodMap[pathMethod] || pathMethod;
}

/**
 * Check if a schema represents a simple type
 */
export function isSimpleType(schema: Schema): boolean {
  if (!schema.type) return false;
  
  const simpleTypes = ['string', 'number', 'integer', 'boolean'];
  return simpleTypes.includes(schema.type);
}

/**
 * Check if a schema represents an array
 */
export function isArrayType(schema: Schema): boolean {
  return schema.type === 'array';
}

/**
 * Check if a schema represents an object
 */
export function isObjectType(schema: Schema): boolean {
  return schema.type === 'object' || !!schema.properties;
}

/**
 * Resolve schema reference
 */
export function resolveSchemaRef(ref: string, spec: OpenApiSpec): Schema | null {
  if (!ref.startsWith('#/components/schemas/')) {
    return null;
  }
  
  const schemaName = ref.replace('#/components/schemas/', '');
  return spec.components?.schemas?.[schemaName] || null;
}

/**
 * Get all schema references in the spec
 */
export function getAllSchemaRefs(spec: OpenApiSpec): string[] {
  const refs = new Set<string>();
  
  function extractRefs(obj: unknown): void {
    if (typeof obj === 'object' && obj !== null) {
      for (const [key, value] of Object.entries(obj)) {
        if (key === '$ref' && typeof value === 'string') {
          refs.add(value);
        } else {
          extractRefs(value);
        }
      }
    }
  }
  
  extractRefs(spec);
  return Array.from(refs);
}

/**
 * Get schema name from reference
 */
export function getSchemaNameFromRef(ref: string): string {
  return ref.replace('#/components/schemas/', '');
}
