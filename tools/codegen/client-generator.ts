/**
 * Client method generator
 * 
 * Generates TypeScript client methods from OpenAPI specification
 */

import { OpenApiSpec, Operation, getJsonRpcMethodName, extractMethodName } from './openapi-parser';
import { toCamelCase, toPascalCase } from './utils';

export interface ClientMethod {
  name: string;
  rpcMethod: string;
  requestType: string;
  responseType: string;
  description?: string;
  parameters: Parameter[];
}

export interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description?: string;
}

export interface ClientGeneratorOptions {
  includeDescriptions?: boolean;
  generateHelpers?: boolean;
  groupByCategory?: boolean;
}

/**
 * Generate client methods from OpenAPI specification
 */
export async function generateClient(
  spec: OpenApiSpec,
  options: ClientGeneratorOptions = {}
): Promise<Record<string, string>> {
  const files: Record<string, string> = {};
  
  // Generate method groups
  const methodGroups = extractMethodGroups(spec);
  
  // Generate method files for each group
  for (const [groupName, methods] of Object.entries(methodGroups)) {
    const methodsCode = generateMethodsForGroup(methods, options);
    files[`methods/${groupName}.ts`] = methodsCode;
  }
  
  // Generate main client file (already exists, but could be updated)
  // files['client.ts'] = generateMainClient(methodGroups, options);
  
  return files;
}

/**
 * Extract method groups from OpenAPI specification
 */
function extractMethodGroups(spec: OpenApiSpec): Record<string, ClientMethod[]> {
  const groups: Record<string, ClientMethod[]> = {
    blocks: [],
    transactions: [],
    accounts: [],
    network: [],
  };
  
  for (const [path, pathItem] of Object.entries(spec.paths)) {
    for (const [httpMethod, operation] of Object.entries(pathItem)) {
      if (!operation || typeof operation !== 'object') continue;
      
      const method = extractClientMethod(path, operation as Operation);
      if (method) {
        const group = categorizeMethod(method.name, method.rpcMethod);
        groups[group].push(method);
      }
    }
  }
  
  return groups;
}

/**
 * Extract client method from OpenAPI operation
 */
function extractClientMethod(path: string, operation: Operation): ClientMethod | null {
  const methodName = extractMethodName(operation.operationId, path);
  const rpcMethod = getJsonRpcMethodName(operation, path);
  
  if (!methodName || !rpcMethod) return null;
  
  const parameters = extractParameters(operation);
  
  // Map RPC methods to their actual generated type names
  const typeMapping: Record<string, { request: string; response: string }> = {
    'block': { request: 'RpcBlockRequest', response: 'RpcBlockResponse' },
    'chunk': { request: 'RpcChunkRequest', response: 'RpcChunkResponse' },
    'tx': { request: 'RpcTransactionStatusRequest', response: 'RpcTransactionResponse' },
    'EXPERIMENTAL_tx_status': { request: 'RpcTransactionStatusRequest', response: 'RpcTransactionResponse' },
    'broadcast_tx_async': { request: 'RpcSendTransactionRequest', response: 'RpcTransactionResponse' },
    'broadcast_tx_commit': { request: 'RpcSendTransactionRequest', response: 'RpcTransactionResponse' },
    'send_tx': { request: 'RpcSendTransactionRequest', response: 'RpcTransactionResponse' },
    'EXPERIMENTAL_receipt': { request: 'RpcReceiptRequest', response: 'RpcReceiptResponse' },
    'query': { request: 'RpcQueryRequest', response: 'RpcQueryResponse' },
    'status': { request: 'RpcStatusRequest', response: 'RpcStatusResponse' },
    'network_info': { request: 'RpcNetworkInfoRequest', response: 'RpcNetworkInfoResponse' },
    'validators': { request: 'RpcValidatorRequest', response: 'RpcValidatorResponse' },
    'gas_price': { request: 'RpcGasPriceRequest', response: 'RpcGasPriceResponse' },
    'health': { request: 'RpcHealthRequest', response: 'RpcHealthResponse' },
  };
  
  const mapping = typeMapping[rpcMethod] || typeMapping[rpcMethod.replace('EXPERIMENTAL_', '')];
  const requestType = mapping?.request || `Rpc${toPascalCase(rpcMethod.replace('EXPERIMENTAL_', ''))}Request`;
  const responseType = mapping?.response || `Rpc${toPascalCase(rpcMethod.replace('EXPERIMENTAL_', ''))}Response`;
  
  return {
    name: toCamelCase(methodName),
    rpcMethod,
    requestType,
    responseType,
    description: operation.description || operation.summary,
    parameters,
  };
}

/**
 * Extract parameters from OpenAPI operation
 */
function extractParameters(operation: Operation): Parameter[] {
  const parameters: Parameter[] = [];
  
  if (operation.parameters) {
    for (const param of operation.parameters) {
      parameters.push({
        name: toCamelCase(param.name),
        type: mapSchemaTypeToTypeScript(param.schema),
        required: param.required || false,
        description: param.description,
      });
    }
  }
  
  return parameters;
}

/**
 * Map schema type to TypeScript type
 */
function mapSchemaTypeToTypeScript(schema: any): string {
  if (!schema) return 'unknown';
  
  if (schema.type === 'string') return 'string';
  if (schema.type === 'number' || schema.type === 'integer') return 'number';
  if (schema.type === 'boolean') return 'boolean';
  if (schema.type === 'array') {
    const itemType = mapSchemaTypeToTypeScript(schema.items);
    return `${itemType}[]`;
  }
  if (schema.type === 'object') return 'Record<string, unknown>';
  if (schema.enum) {
    return schema.enum.map((value: any) => `'${value}'`).join(' | ');
  }
  
  return 'unknown';
}

/**
 * Categorize method by name and RPC method
 */
function categorizeMethod(methodName: string, rpcMethod: string): string {
  const blockKeywords = ['block', 'chunk'];
  const transactionKeywords = ['tx', 'transaction', 'broadcast', 'send'];
  const accountKeywords = ['account', 'key', 'state', 'contract', 'query'];
  const networkKeywords = ['status', 'genesis', 'protocol', 'gas', 'network'];
  
  const lowerName = methodName.toLowerCase();
  const lowerRpc = rpcMethod.toLowerCase();
  
  if (blockKeywords.some(keyword => lowerName.includes(keyword) || lowerRpc.includes(keyword))) {
    return 'blocks';
  }
  if (transactionKeywords.some(keyword => lowerName.includes(keyword) || lowerRpc.includes(keyword))) {
    return 'transactions';
  }
  if (accountKeywords.some(keyword => lowerName.includes(keyword) || lowerRpc.includes(keyword))) {
    return 'accounts';
  }
  if (networkKeywords.some(keyword => lowerName.includes(keyword) || lowerRpc.includes(keyword))) {
    return 'network';
  }
  
  return 'network';
}

/**
 * Generate methods for a specific group
 */
function generateMethodsForGroup(methods: ClientMethod[], options: ClientGeneratorOptions): string {
  const imports = new Set<string>();
  const methodCode: string[] = [];
  
  // Add type imports
  methods.forEach(method => {
    imports.add(method.requestType);
    imports.add(method.responseType);
    imports.add(`${method.requestType}Schema`);
    imports.add(`${method.responseType}Schema`);
  });
  
  // Generate method implementations
  methods.forEach(method => {
    const code = generateMethodImplementation(method, options);
    methodCode.push(code);
  });
  
  const importList = Array.from(imports).sort().join(',\n  ');
  const groupName = methods[0] ? categorizeMethod(methods[0].name, methods[0].rpcMethod) : 'unknown';
  const className = `${toPascalCase(groupName)}Methods`;
  
  return `/**
 * ${toPascalCase(groupName)}-related methods for NEAR JSON-RPC client
 */

import {
  ${importList}
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class ${className} {
  constructor(private client: NearJsonRpcClient) {}

${methodCode.join('\n\n')}
}
`;
}

/**
 * Generate method implementation
 */
function generateMethodImplementation(method: ClientMethod, options: ClientGeneratorOptions): string {
  const requestSchema = `${method.requestType}Schema`;
  const responseSchema = `${method.responseType}Schema`;
  
  let description = '';
  if (options.includeDescriptions && method.description) {
    description = `  /**\n   * ${method.description}\n   */\n`;
  }
  
  return `${description}  async ${method.name}(params: ${method.requestType}): Promise<${method.responseType}> {
    const validatedParams = ${requestSchema}.parse(params);
    return this.client.makeRequest('${method.rpcMethod}', validatedParams, ${responseSchema});
  }`;
}

/**
 * Generate main client file (optional, as it already exists)
 */
function generateMainClient(methodGroups: Record<string, ClientMethod[]>, options: ClientGeneratorOptions): string {
  const imports: string[] = [];
  const properties: string[] = [];
  const initializations: string[] = [];
  
  for (const groupName of Object.keys(methodGroups)) {
    const className = `${toPascalCase(groupName)}Methods`;
    imports.push(`import { ${className} } from './methods/${groupName}';`);
    properties.push(`  public readonly ${groupName}: ${className};`);
    initializations.push(`    this.${groupName} = new ${className}(this);`);
  }
  
  return `/**
 * NEAR Protocol JSON-RPC Client
 */

import { z } from 'zod';
import { JsonRpcRequest, JsonRpcResponse } from '@near-js/jsonrpc-types';
import { NearJsonRpcError, NetworkError, ValidationError } from './errors';
${imports.join('\n')}

export interface NearJsonRpcClientOptions {
  baseUrl: string;
  apiKey?: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

export class NearJsonRpcClient {
  private readonly baseUrl: string;
  private readonly apiKey?: string;
  private readonly timeout: number;
  private readonly retries: number;
  private readonly retryDelay: number;
  private requestId: number = 0;

  // Method groups
${properties.join('\n')}

  constructor(options: NearJsonRpcClientOptions | string) {
    if (typeof options === 'string') {
      this.baseUrl = options;
      this.timeout = 30000;
      this.retries = 3;
      this.retryDelay = 1000;
    } else {
      this.baseUrl = options.baseUrl;
      this.apiKey = options.apiKey;
      this.timeout = options.timeout ?? 30000;
      this.retries = options.retries ?? 3;
      this.retryDelay = options.retryDelay ?? 1000;
    }

    // Initialize method groups
${initializations.join('\n')}
  }

  // ... rest of the client implementation
}
`;
}
