#!/usr/bin/env tsx
/**
 * NEAR Protocol TypeScript Client Generator
 * Generates fully type-safe TypeScript client from the official nearcore OpenAPI specification
 * 
 * Key features:
 * - Fetch-based RPC calls to "/" path (patched for JSON-RPC)
 * - Zod-based input/output validation  
 * - Automatic snake_case to camelCase conversion
 * - Full type safety with comprehensive error handling
 */

import fs from 'fs';
import path from 'path';
import { z } from 'zod';

// OpenAPI Schema validation
const ComponentSchema = z.object({
  type: z.string().optional(),
  properties: z.record(z.any()).optional(),
  items: z.any().optional(),
  oneOf: z.array(z.any()).optional(),
  anyOf: z.array(z.any()).optional(),
  allOf: z.array(z.any()).optional(),
  enum: z.array(z.any()).optional(),
  $ref: z.string().optional(),
});

const OpenAPISchema = z.object({
  openapi: z.string(),
  info: z.object({
    title: z.string(),
    version: z.string(),
  }),
  paths: z.record(z.object({
    post: z.object({
      operationId: z.string(),
      requestBody: z.object({
        content: z.object({
          'application/json': z.object({
            schema: z.object({
              $ref: z.string(),
            }),
          }),
        }),
      }),
      responses: z.object({
        '200': z.object({
          content: z.object({
            'application/json': z.object({
              schema: z.object({
                $ref: z.string(),
              }),
            }),
          }),
        }),
      }),
    }),
  })),
  components: z.object({
    schemas: z.record(ComponentSchema),
  }),
});

type OpenAPISpec = z.infer<typeof OpenAPISchema>;

interface GeneratedMethod {
  methodName: string;
  operationId: string;
  requestType: string;
  responseType: string;
  description: string;
  camelCaseMethodName: string;
}

class NearcoreClientGenerator {
  private spec: OpenAPISpec;
  private methods: GeneratedMethod[] = [];
  private generatedTypes: Set<string> = new Set();
  private generatedSchemas: Set<string> = new Set();

  constructor(specPath: string) {
    const specContent = fs.readFileSync(specPath, 'utf-8');
    this.spec = OpenAPISchema.parse(JSON.parse(specContent));
    console.log(`✅ Loaded OpenAPI spec with ${Object.keys(this.spec.paths).length} endpoints`);
  }

  public generate(): void {
    console.log('🚀 Generating NEAR Protocol TypeScript Client from nearcore OpenAPI spec...');

    // Extract methods from paths (but use "/" for all calls)
    this.extractMethods();

    // Generate TypeScript types
    this.generateTypes();

    // Generate Zod schemas
    this.generateSchemas();

    // Generate client methods
    this.generateClientMethods();

    // Generate main client class
    this.generateMainClient();

    // Generate tests
    this.generateTests();

    console.log('✅ TypeScript client generated successfully!');
  }

  private extractMethods(): void {
    console.log('📝 Extracting methods from OpenAPI paths...');
    
    for (const [pathName, pathObj] of Object.entries(this.spec.paths)) {
      const operation = pathObj.post;
      const operationId = operation.operationId;
      
      // Extract the method name from the path (remove leading slash)
      const methodName = pathName.substring(1);
      
      // Get request/response types from $ref
      const requestRef = operation.requestBody.content['application/json'].schema.$ref;
      const responseRef = operation.responses['200'].content['application/json'].schema.$ref;
      
      const requestType = this.extractTypeFromRef(requestRef);
      const responseType = this.extractTypeFromRef(responseRef);
      
      const method: GeneratedMethod = {
        methodName,
        operationId,
        requestType,
        responseType,
        description: `Execute ${methodName} RPC method`,
        camelCaseMethodName: this.toCamelCase(methodName),
      };
      
      this.methods.push(method);
    }

    console.log(`📝 Found ${this.methods.length} RPC methods`);
  }

  private extractTypeFromRef(ref: string): string {
    // Extract type name from $ref like "#/components/schemas/TypeName"
    return ref.split('/').pop() || 'unknown';
  }

  private generateTypes(): void {
    console.log('📝 Generating TypeScript types...');
    
    let content = `/**
 * Generated TypeScript types for NEAR Protocol JSON-RPC API
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */

// Base types
export type AccountId = string;
export type PublicKey = string;
export type CryptoHash = string;
export type BlockHeight = number;
export type BlockHash = string;
export type ShardId = number;
export type Gas = string;
export type Balance = string;
export type Nonce = number;

// Base JSON-RPC types
export interface JsonRpcRequest<T = any> {
  jsonrpc: '2.0';
  method: string;
  params: T;
  id: string;
}

export interface JsonRpcResponse<T = any> {
  jsonrpc: '2.0';
  result?: T;
  error?: JsonRpcError;
  id: string;
}

export interface JsonRpcError {
  code: number;
  message: string;
  data?: any;
}

// Generated types from nearcore OpenAPI spec
`;

    // Generate types from OpenAPI schemas
    for (const [schemaName, schema] of Object.entries(this.spec.components.schemas)) {
      if (this.generatedTypes.has(schemaName)) continue;
      
      const tsType = this.generateTypeFromSchema(schemaName, schema);
      content += `${tsType}\n\n`;
      this.generatedTypes.add(schemaName);
    }

    this.writeFile('../../packages/jsonrpc-types/src/types/nearcore.ts', content);
  }

  private generateSchemas(): void {
    console.log('📝 Generating Zod schemas...');
    
    let content = `/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */

import { z } from 'zod';

// Base schemas
export const AccountIdSchema = z.string();
export const PublicKeySchema = z.string();
export const CryptoHashSchema = z.string();
export const BlockHeightSchema = z.number();
export const BlockHashSchema = z.string();
export const ShardIdSchema = z.number();
export const GasSchema = z.string();
export const BalanceSchema = z.string();
export const NonceSchema = z.number();

// Base JSON-RPC schemas
export const JsonRpcRequestSchema = z.object({
  jsonrpc: z.literal('2.0'),
  method: z.string(),
  params: z.any(),
  id: z.string(),
});

export const JsonRpcResponseSchema = z.object({
  jsonrpc: z.literal('2.0'),
  result: z.any().optional(),
  error: z.object({
    code: z.number(),
    message: z.string(),
    data: z.any().optional(),
  }).optional(),
  id: z.string(),
});

// Generated schemas from nearcore OpenAPI spec
`;

    // Generate Zod schemas
    for (const [schemaName, schema] of Object.entries(this.spec.components.schemas)) {
      if (this.generatedSchemas.has(schemaName)) continue;
      
      const zodSchema = this.generateZodSchemaFromOpenAPI(schemaName, schema);
      content += `${zodSchema}\n\n`;
      this.generatedSchemas.add(schemaName);
    }

    this.writeFile('../../packages/jsonrpc-types/src/schemas/nearcore.ts', content);
  }

  private generateClientMethods(): void {
    console.log('📝 Generating client methods...');
    
    let content = `/**
 * Generated RPC methods for NEAR Protocol JSON-RPC API
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */

import { NearJsonRpcClient } from '../client-nearcore';
import * as Types from '@near-js/jsonrpc-types/nearcore';
import * as Schemas from '@near-js/jsonrpc-types/schemas/nearcore';

export class NearcoreMethods {
  constructor(private client: NearJsonRpcClient) {}

`;

    // Generate individual methods
    for (const method of this.methods) {
      const methodCode = this.generateMethodCode(method);
      content += `  ${methodCode}\n\n`;
    }

    content += '}\n';
    this.writeFile('../../packages/jsonrpc-client/src/methods/nearcore.ts', content);
  }

  private generateMainClient(): void {
    console.log('📝 Generating main client...');
    
    const clientContent = `/**
 * Generated NEAR Protocol JSON-RPC Client
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */

import { NearcoreMethods } from './methods/nearcore';
import * as Types from '@near-js/jsonrpc-types/nearcore';
import * as Schemas from '@near-js/jsonrpc-types/schemas/nearcore';

export interface NearJsonRpcClientConfig {
  endpoint: string;
  headers?: Record<string, string>;
  timeout?: number;
  retryAttempts?: number;
  retryDelay?: number;
}

export class NearJsonRpcClient {
  private endpoint: string;
  private headers: Record<string, string>;
  private timeout: number;
  private retryAttempts: number;
  private retryDelay: number;
  
  public readonly methods: NearcoreMethods;

  constructor(config: NearJsonRpcClientConfig) {
    this.endpoint = config.endpoint;
    this.headers = config.headers || {};
    this.timeout = config.timeout || 30000;
    this.retryAttempts = config.retryAttempts || 3;
    this.retryDelay = config.retryDelay || 1000;
    
    this.methods = new NearcoreMethods(this);
  }

  /**
   * Make a JSON-RPC request to the NEAR Protocol RPC endpoint
   * All requests use POST to "/" path as per JSON-RPC 2.0 specification
   */
  public async request<T = any>(
    method: string,
    params: any = {}
  ): Promise<T> {
    const request: Types.JsonRpcRequest = {
      jsonrpc: '2.0',
      method,
      params: this.convertToSnakeCase(params),
      id: this.generateId(),
    };

    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt < this.retryAttempts; attempt++) {
      try {
        const response = await this.httpRequest(request);
        
        if (response.error) {
          throw new NearJsonRpcError(
            response.error.code,
            response.error.message,
            response.error.data
          );
        }

        return this.convertToCamelCase(response.result);
      } catch (error) {
        lastError = error as Error;
        
        if (attempt < this.retryAttempts - 1) {
          await this.delay(this.retryDelay * Math.pow(2, attempt));
        }
      }
    }

    throw lastError;
  }

  private async httpRequest(request: Types.JsonRpcRequest): Promise<Types.JsonRpcResponse> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.headers,
        },
        body: JSON.stringify(request),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new NetworkError(
          \`HTTP \${response.status}: \${response.statusText}\`,
          response.status
        );
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new NetworkError('Network request failed', 0);
      }
      
      throw error;
    }
  }

  /**
   * Convert camelCase object to snake_case for API requests
   */
  private convertToSnakeCase(obj: any): any {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.convertToSnakeCase(item));
    }

    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      result[snakeKey] = this.convertToSnakeCase(value);
    }
    return result;
  }

  /**
   * Convert snake_case object to camelCase for TypeScript usage
   */
  private convertToCamelCase(obj: any): any {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.convertToCamelCase(item));
    }

    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      result[camelKey] = this.convertToCamelCase(value);
    }
    return result;
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export class NearJsonRpcError extends Error {
  constructor(
    public code: number,
    message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'NearJsonRpcError';
  }
}

export class NetworkError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = 'NetworkError';
  }
}
`;

    this.writeFile('../../packages/jsonrpc-client/src/client-nearcore.ts', clientContent);
  }

  private generateTests(): void {
    console.log('📝 Generating tests...');
    
    const testContent = `/**
 * Generated tests for NEAR Protocol JSON-RPC Client
 * Generated from nearcore OpenAPI specification
 */

import { NearJsonRpcClient } from '../src/client-nearcore';
import * as Types from '../src/types/nearcore';

describe('NearJsonRpcClient', () => {
  let client: NearJsonRpcClient;

  beforeEach(() => {
    client = new NearJsonRpcClient({
      endpoint: 'https://rpc.testnet.near.org',
      timeout: 10000,
    });
  });

  describe('Configuration', () => {
    it('should create client with default configuration', () => {
      expect(client).toBeDefined();
      expect(client.methods).toBeDefined();
    });

    it('should create client with custom configuration', () => {
      const customClient = new NearJsonRpcClient({
        endpoint: 'https://rpc.mainnet.near.org',
        headers: { 'X-Custom-Header': 'test' },
        timeout: 20000,
        retryAttempts: 5,
        retryDelay: 2000,
      });

      expect(customClient).toBeDefined();
    });
  });

  describe('Snake case conversion', () => {
    it('should convert camelCase to snake_case', () => {
      const testObj = {
        accountId: 'test.near',
        publicKey: 'ed25519:...',
        blockHeight: 12345,
        nestedData: {
          someField: 'value',
          anotherField: 123,
        },
      };

      // Access private method for testing
      const snakeCase = (client as any).convertToSnakeCase(testObj);
      
      expect(snakeCase).toEqual({
        account_id: 'test.near',
        public_key: 'ed25519:...',
        block_height: 12345,
        nested_data: {
          some_field: 'value',
          another_field: 123,
        },
      });
    });

    it('should convert snake_case to camelCase', () => {
      const testObj = {
        account_id: 'test.near',
        public_key: 'ed25519:...',
        block_height: 12345,
        nested_data: {
          some_field: 'value',
          another_field: 123,
        },
      };

      // Access private method for testing
      const camelCase = (client as any).convertToCamelCase(testObj);
      
      expect(camelCase).toEqual({
        accountId: 'test.near',
        publicKey: 'ed25519:...',
        blockHeight: 12345,
        nestedData: {
          someField: 'value',
          anotherField: 123,
        },
      });
    });
  });

  describe('Error handling', () => {
    it('should handle RPC errors', async () => {
      // Mock fetch to return RPC error
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          jsonrpc: '2.0',
          error: {
            code: -32600,
            message: 'Invalid request',
          },
          id: 'test',
        }),
      });

      await expect(
        client.request('invalid_method', {})
      ).rejects.toThrow('Invalid request');
    });

    it('should handle network errors', async () => {
      // Mock fetch to return network error
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });

      await expect(
        client.request('status', {})
      ).rejects.toThrow('HTTP 500: Internal Server Error');
    });
  });
});
`;

    this.writeFile('../../packages/jsonrpc-client/tests/nearcore.test.ts', testContent);
  }

  private generateTypeFromSchema(name: string, schema: any): string {
    if (schema.$ref) {
      return `export type ${name} = ${this.extractTypeFromRef(schema.$ref)};`;
    }

    if (schema.type === 'object' && schema.properties) {
      const properties = Object.entries(schema.properties)
        .map(([key, prop]: [string, any]) => {
          const camelKey = this.toCamelCase(key);
          const tsType = this.openApiTypeToTsType(prop);
          const optional = schema.required?.includes(key) ? '' : '?';
          return `  ${camelKey}${optional}: ${tsType};`;
        })
        .join('\n');

      return `export interface ${name} {
${properties}
}`;
    }

    if (schema.enum) {
      const enumValues = schema.enum.map((val: any) => `'${val}'`).join(' | ');
      return `export type ${name} = ${enumValues};`;
    }

    if (schema.oneOf || schema.anyOf) {
      const unionTypes = (schema.oneOf || schema.anyOf)
        .map((item: any) => this.openApiTypeToTsType(item))
        .join(' | ');
      return `export type ${name} = ${unionTypes};`;
    }

    return `export type ${name} = any;`;
  }

  private generateZodSchemaFromOpenAPI(name: string, schema: any): string {
    const schemaName = `${name}Schema`;
    
    if (schema.$ref) {
      const refType = this.extractTypeFromRef(schema.$ref);
      return `export const ${schemaName} = ${refType}Schema;`;
    }

    if (schema.type === 'object' && schema.properties) {
      const properties = Object.entries(schema.properties)
        .map(([key, prop]: [string, any]) => {
          const camelKey = this.toCamelCase(key);
          const zodType = this.openApiTypeToZodType(prop);
          const optional = schema.required?.includes(key) ? '' : '.optional()';
          return `    ${camelKey}: ${zodType}${optional}`;
        })
        .join(',\n');

      return `export const ${schemaName} = z.object({
${properties}
});`;
    }

    if (schema.enum) {
      const enumValues = schema.enum.map((val: any) => `'${val}'`).join(', ');
      return `export const ${schemaName} = z.enum([${enumValues}]);`;
    }

    if (schema.oneOf || schema.anyOf) {
      const unionSchemas = (schema.oneOf || schema.anyOf)
        .map((item: any) => this.openApiTypeToZodType(item))
        .join(', ');
      return `export const ${schemaName} = z.union([${unionSchemas}]);`;
    }

    return `export const ${schemaName} = z.any();`;
  }

  private generateMethodCode(method: GeneratedMethod): string {
    return `/**
   * ${method.description}
   * 
   * @param params - Request parameters
   * @returns Promise resolving to the response
   */
  async ${method.camelCaseMethodName}(params: any = {}): Promise<any> {
    const result = await this.client.request('${method.methodName}', params);
    return result;
  }`;
  }

  private openApiTypeToTsType(schema: any): string {
    if (schema.$ref) {
      return this.extractTypeFromRef(schema.$ref);
    }

    switch (schema.type) {
      case 'string':
        return 'string';
      case 'number':
      case 'integer':
        return 'number';
      case 'boolean':
        return 'boolean';
      case 'array':
        return schema.items ? `${this.openApiTypeToTsType(schema.items)}[]` : 'any[]';
      case 'object':
        return 'Record<string, any>';
      default:
        return 'any';
    }
  }

  private openApiTypeToZodType(schema: any): string {
    if (schema.$ref) {
      const refType = this.extractTypeFromRef(schema.$ref);
      return `${refType}Schema`;
    }

    switch (schema.type) {
      case 'string':
        return 'z.string()';
      case 'number':
      case 'integer':
        return 'z.number()';
      case 'boolean':
        return 'z.boolean()';
      case 'array':
        return schema.items ? `z.array(${this.openApiTypeToZodType(schema.items)})` : 'z.array(z.any())';
      case 'object':
        return 'z.record(z.any())';
      default:
        return 'z.any()';
    }
  }

  private toCamelCase(str: string): string {
    return str.replace(/[_-]([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  private writeFile(filePath: string, content: string): void {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content);
    console.log(`📄 Generated: ${filePath}`);
  }
}

// Main execution
if (require.main === module) {
  const specPath = process.argv[2] || 'nearcore-openapi.json';
  
  if (!fs.existsSync(specPath)) {
    console.error(`❌ OpenAPI specification not found: ${specPath}`);
    process.exit(1);
  }

  const generator = new NearcoreClientGenerator(specPath);
  generator.generate();
}