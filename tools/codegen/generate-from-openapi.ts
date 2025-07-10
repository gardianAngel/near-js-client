#!/usr/bin/env tsx
/**
 * NEAR Protocol TypeScript Client Generator
 * Generates fully type-safe TypeScript client from OpenAPI specification
 */

import fs from 'fs';
import path from 'path';
import { z } from 'zod';

// OpenAPI Schema validation
const OpenAPISchema = z.object({
  openapi: z.string(),
  info: z.object({
    title: z.string(),
    version: z.string(),
    description: z.string(),
  }),
  servers: z.array(z.object({
    url: z.string(),
    description: z.string(),
  })),
  paths: z.record(z.any()),
  components: z.object({
    schemas: z.record(z.any()),
  }),
});

type OpenAPISpec = z.infer<typeof OpenAPISchema>;

interface GeneratedMethod {
  name: string;
  camelName: string;
  params: string;
  returns: string;
  description: string;
  section: string;
}

class NearTypeScriptClientGenerator {
  private spec: OpenAPISpec;
  private generatedTypes: Set<string> = new Set();
  private methods: GeneratedMethod[] = [];

  constructor(specPath: string) {
    const specContent = fs.readFileSync(specPath, 'utf-8');
    this.spec = OpenAPISchema.parse(JSON.parse(specContent));
  }

  public generate(): void {
    console.log('🚀 Generating NEAR Protocol TypeScript Client...');

    // Extract methods from OpenAPI spec
    this.extractMethods();

    // Generate TypeScript types
    this.generateTypes();

    // Generate Zod schemas
    this.generateSchemas();

    // Generate client methods
    this.generateClientMethods();

    // Generate main client class
    this.generateMainClient();

    console.log('✅ TypeScript client generated successfully!');
  }

  private extractMethods(): void {
    const schemas = this.spec.components.schemas;
    
    for (const [schemaName, schema] of Object.entries(schemas)) {
      if (schemaName.endsWith('Params') || schemaName.endsWith('Result')) {
        const baseName = schemaName.replace(/(Params|Result)$/, '');
        const methodName = this.camelToSnake(baseName);
        
        if (!this.methods.find(m => m.name === methodName)) {
          const method: GeneratedMethod = {
            name: methodName,
            camelName: baseName,
            params: `${baseName}Params`,
            returns: `${baseName}Result`,
            description: `Execute ${methodName} RPC method`,
            section: this.getMethodSection(methodName),
          };
          
          this.methods.push(method);
        }
      }
    }

    console.log(`📝 Found ${this.methods.length} RPC methods`);
  }

  private generateTypes(): void {
    const typesContent = this.generateTypesFile();
    this.writeFile('packages/jsonrpc-types/src/types/generated.ts', typesContent);
  }

  private generateSchemas(): void {
    const schemasContent = this.generateSchemasFile();
    this.writeFile('packages/jsonrpc-types/src/schemas/generated.ts', schemasContent);
  }

  private generateClientMethods(): void {
    const methodsContent = this.generateMethodsFile();
    this.writeFile('packages/jsonrpc-client/src/methods/generated.ts', methodsContent);
  }

  private generateMainClient(): void {
    const clientContent = this.generateClientFile();
    this.writeFile('packages/jsonrpc-client/src/client-generated.ts', clientContent);
  }

  private generateTypesFile(): string {
    let content = `/**
 * Generated TypeScript types for NEAR Protocol JSON-RPC API
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */

export type AccountId = string;
export type PublicKey = string;
export type CryptoHash = string;
export type BlockHeight = number;
export type Gas = string;
export type Balance = string;

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

// Generated types from OpenAPI spec
`;

    // Generate types from OpenAPI schemas
    for (const [schemaName, schema] of Object.entries(this.spec.components.schemas)) {
      if (schemaName.startsWith('JsonRpc')) continue; // Skip base types
      
      const tsType = this.generateTypeFromSchema(schemaName, schema);
      content += `${tsType}\n\n`;
    }

    return content;
  }

  private generateSchemasFile(): string {
    let content = `/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */

import { z } from 'zod';

// Base schemas
export const AccountIdSchema = z.string();
export const PublicKeySchema = z.string();
export const CryptoHashSchema = z.string();
export const BlockHeightSchema = z.number();
export const GasSchema = z.string();
export const BalanceSchema = z.string();

// Generated schemas from OpenAPI spec
`;

    // Generate Zod schemas
    for (const [schemaName, schema] of Object.entries(this.spec.components.schemas)) {
      if (schemaName.startsWith('JsonRpc')) continue; // Skip base types
      
      const zodSchema = this.generateZodSchemaFromOpenAPI(schemaName, schema);
      content += `${zodSchema}\n\n`;
    }

    return content;
  }

  private generateMethodsFile(): string {
    let content = `/**
 * Generated RPC methods for NEAR Protocol JSON-RPC API
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */

import { NearJsonRpcClient } from '../client-generated';
import * as Types from '../../jsonrpc-types/src/types/generated';
import * as Schemas from '../../jsonrpc-types/src/schemas/generated';

export class GeneratedMethods {
  constructor(private client: NearJsonRpcClient) {}

`;

    // Generate methods
    for (const method of this.methods) {
      const methodCode = this.generateMethodCode(method);
      content += `  ${methodCode}\n\n`;
    }

    content += '}\n';
    return content;
  }

  private generateClientFile(): string {
    return `/**
 * Generated NEAR Protocol JSON-RPC Client
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */

import { GeneratedMethods } from './methods/generated';
import * as Types from '../jsonrpc-types/src/types/generated';

export interface NearJsonRpcClientConfig {
  endpoint: string;
  headers?: Record<string, string>;
  timeout?: number;
}

export class NearJsonRpcClient {
  private endpoint: string;
  private headers: Record<string, string>;
  private timeout: number;
  
  public readonly methods: GeneratedMethods;

  constructor(config: NearJsonRpcClientConfig) {
    this.endpoint = config.endpoint;
    this.headers = config.headers || {};
    this.timeout = config.timeout || 30000;
    this.methods = new GeneratedMethods(this);
  }

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

    const response = await this.httpRequest(request);
    
    if (response.error) {
      throw new Error(\`RPC Error: \${response.error.message}\`);
    }

    return this.convertToCamelCase(response.result);
  }

  private async httpRequest(request: Types.JsonRpcRequest): Promise<Types.JsonRpcResponse> {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
      },
      body: JSON.stringify(request),
      signal: AbortSignal.timeout(this.timeout),
    });

    if (!response.ok) {
      throw new Error(\`HTTP Error: \${response.status} \${response.statusText}\`);
    }

    return response.json();
  }

  private convertToSnakeCase(obj: any): any {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(this.convertToSnakeCase.bind(this));
    }

    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      result[snakeKey] = this.convertToSnakeCase(value);
    }
    return result;
  }

  private convertToCamelCase(obj: any): any {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(this.convertToCamelCase.bind(this));
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
}
`;
  }

  private generateTypeFromSchema(name: string, schema: any): string {
    const typeName = name;
    
    if (schema.type === 'object' && schema.properties) {
      const properties = Object.entries(schema.properties)
        .map(([key, prop]: [string, any]) => {
          const camelKey = this.snakeToCamel(key);
          const tsType = this.openApiTypeToTsType(prop);
          const required = schema.required?.includes(key) ? '' : '?';
          return `  ${camelKey}${required}: ${tsType};`;
        })
        .join('\n');

      return `export interface ${typeName} {
${properties}
}`;
    }

    return `export type ${typeName} = any;`;
  }

  private generateZodSchemaFromOpenAPI(name: string, schema: any): string {
    const schemaName = `${name}Schema`;
    
    if (schema.type === 'object' && schema.properties) {
      const properties = Object.entries(schema.properties)
        .map(([key, prop]: [string, any]) => {
          const camelKey = this.snakeToCamel(key);
          const zodType = this.openApiTypeToZodType(prop);
          const optional = schema.required?.includes(key) ? '' : '.optional()';
          return `    ${camelKey}: ${zodType}${optional}`;
        })
        .join(',\n');

      return `export const ${schemaName} = z.object({
${properties}
});`;
    }

    return `export const ${schemaName} = z.any();`;
  }

  private generateMethodCode(method: GeneratedMethod): string {
    return `/**
   * ${method.description}
   */
  async ${this.snakeToCamel(method.name)}(params: Types.${method.params}): Promise<Types.${method.returns}> {
    const result = await this.client.request('${method.name}', params);
    return Schemas.${method.returns}Schema.parse(result);
  }`;
  }

  private openApiTypeToTsType(schema: any): string {
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

  private snakeToCamel(str: string): string {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  private camelToSnake(str: string): string {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
  }

  private getMethodSection(methodName: string): string {
    if (methodName.includes('access_key')) return 'access-keys';
    if (methodName.includes('account') || methodName.includes('view_')) return 'contracts';
    if (methodName.includes('block') || methodName.includes('chunk')) return 'block-chunk';
    if (methodName.includes('gas')) return 'gas';
    if (methodName.includes('protocol') || methodName.includes('genesis')) return 'protocol';
    if (methodName.includes('network') || methodName.includes('status') || methodName.includes('validators')) return 'network';
    if (methodName.includes('tx') || methodName.includes('broadcast')) return 'transactions';
    return 'unknown';
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
  const specPath = process.argv[2] || 'scripts/near-rpc-openapi.json';
  
  if (!fs.existsSync(specPath)) {
    console.error(`❌ OpenAPI specification not found: ${specPath}`);
    process.exit(1);
  }

  const generator = new NearTypeScriptClientGenerator(specPath);
  generator.generate();
}