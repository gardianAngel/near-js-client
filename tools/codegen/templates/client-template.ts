/**
 * Client method template
 * 
 * Template for generating client method implementations
 */

export interface ClientMethodTemplate {
  name: string;
  rpcMethod: string;
  requestType: string;
  responseType: string;
  description?: string;
  validation?: boolean;
  async?: boolean;
  parameters?: ParameterTemplate[];
}

export interface ParameterTemplate {
  name: string;
  type: string;
  required?: boolean;
  description?: string;
  validation?: string;
}

/**
 * Generate client method implementation
 */
export function generateClientMethod(template: ClientMethodTemplate): string {
  const {
    name,
    rpcMethod,
    requestType,
    responseType,
    description,
    validation = true,
    async: isAsync = true,
  } = template;
  
  let result = '';
  
  // Add method documentation
  if (description) {
    result += `  /**\n   * ${description}\n   */\n`;
  }
  
  // Add method signature
  const asyncKeyword = isAsync ? 'async ' : '';
  const returnType = isAsync ? `Promise<${responseType}>` : responseType;
  
  result += `  ${asyncKeyword}${name}(params: ${requestType}): ${returnType} {\n`;
  
  // Add validation
  if (validation) {
    const schemaName = `${requestType.replace('Request', 'Query')}Schema`;
    result += `    const validatedParams = ${schemaName}.parse(params);\n`;
    result += `    return this.client.makeRequest('${rpcMethod}', validatedParams, ${responseType}Schema);\n`;
  } else {
    result += `    return this.client.makeRequest('${rpcMethod}', params, ${responseType}Schema);\n`;
  }
  
  result += '  }\n';
  
  return result;
}

/**
 * Generate client class template
 */
export function generateClientClass(
  className: string,
  methods: ClientMethodTemplate[],
  description?: string
): string {
  let result = '';
  
  // Add class documentation
  if (description) {
    result += `/**\n * ${description}\n */\n`;
  }
  
  // Add class declaration
  result += `export class ${className} {\n`;
  result += '  constructor(private client: NearJsonRpcClient) {}\n\n';
  
  // Add methods
  methods.forEach(method => {
    result += generateClientMethod(method) + '\n';
  });
  
  result += '}\n';
  
  return result;
}

/**
 * Generate method group file
 */
export function generateMethodGroup(
  groupName: string,
  methods: ClientMethodTemplate[],
  imports: string[] = []
): string {
  const className = `${groupName.charAt(0).toUpperCase() + groupName.slice(1)}Methods`;
  const description = `${groupName.charAt(0).toUpperCase() + groupName.slice(1)}-related methods for NEAR JSON-RPC client`;
  
  let result = `/**\n * ${description}\n */\n\n`;
  
  // Add imports
  if (imports.length > 0) {
    result += imports.join('\n') + '\n\n';
  }
  
  // Add default imports
  result += `import type { NearJsonRpcClient } from '../client';\n\n`;
  
  // Add class
  result += generateClientClass(className, methods, description);
  
  return result;
}

/**
 * Common client method templates
 */
export const COMMON_METHOD_TEMPLATES = {
  block: {
    name: 'getBlock',
    rpcMethod: 'block',
    requestType: 'BlockQuery',
    responseType: 'BlockResponse',
    description: 'Get block information',
  } as ClientMethodTemplate,
  
  transaction: {
    name: 'getTransaction',
    rpcMethod: 'tx',
    requestType: 'TransactionQuery',
    responseType: 'TransactionResponse',
    description: 'Get transaction status and details',
  } as ClientMethodTemplate,
  
  account: {
    name: 'getAccount',
    rpcMethod: 'query',
    requestType: 'AccountQuery',
    responseType: 'AccountResponse',
    description: 'Get account information',
  } as ClientMethodTemplate,
  
  networkStatus: {
    name: 'getNetworkStatus',
    rpcMethod: 'status',
    requestType: 'Record<string, never>',
    responseType: 'NetworkStatusResponse',
    description: 'Get network status information',
  } as ClientMethodTemplate,
};

/**
 * Generate helper methods
 */
export function generateHelperMethods(groupName: string): string {
  const helpers: Record<string, string> = {
    blocks: `
  /**
   * Get latest block
   */
  async getLatestBlock(): Promise<BlockResponse> {
    return this.getBlock({ finality: 'final' });
  }

  /**
   * Get block by height
   */
  async getBlockByHeight(height: number): Promise<BlockResponse> {
    return this.getBlock({ blockId: height });
  }

  /**
   * Get block by hash
   */
  async getBlockByHash(hash: string): Promise<BlockResponse> {
    return this.getBlock({ blockId: hash });
  }`,
    
    transactions: `
  /**
   * Get transaction by hash with sender ID
   */
  async getTransactionByHash(transactionHash: string, senderId: string): Promise<TransactionResponse> {
    return this.getTransaction({ transactionHash, senderId });
  }

  /**
   * Wait for transaction to be included in a block
   */
  async waitForTransaction(transactionHash: string, senderId: string): Promise<TransactionResponse> {
    return this.getTransaction({ 
      transactionHash, 
      senderId, 
      waitUntil: 'INCLUDED_FINAL' 
    });
  }`,
    
    accounts: `
  /**
   * Get account by ID with finality
   */
  async getAccountById(accountId: string, finality: 'final' | 'optimistic' = 'final'): Promise<AccountResponse> {
    return this.getAccount({ accountId, finality });
  }

  /**
   * Check if account exists
   */
  async accountExists(accountId: string): Promise<boolean> {
    try {
      await this.getAccount({ accountId, finality: 'final' });
      return true;
    } catch (error) {
      if (error instanceof Error && error.message.includes('does not exist')) {
        return false;
      }
      throw error;
    }
  }`,
    
    network: `
  /**
   * Get network info
   */
  async getNetworkInfo(): Promise<{
    chainId: string;
    latestBlockHeight: number;
    latestBlockHash: string;
    syncing: boolean;
  }> {
    const status = await this.getNetworkStatus();
    return {
      chainId: status.chainId,
      latestBlockHeight: status.syncInfo.latestBlockHeight,
      latestBlockHash: status.syncInfo.latestBlockHash,
      syncing: status.syncInfo.syncing,
    };
  }

  /**
   * Check if node is syncing
   */
  async isSyncing(): Promise<boolean> {
    const status = await this.getNetworkStatus();
    return status.syncInfo.syncing;
  }`,
  };
  
  return helpers[groupName] || '';
}
