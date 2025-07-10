/**
 * NEAR Protocol JSON-RPC Client
 * 
 * Production-ready TypeScript client with proper RPC path behavior
 */

import * as Types from '../../jsonrpc-types/src/types/validated-real-improved';

export interface NearRpcClientConfig {
  endpoint: string;
  headers?: Record<string, string>;
  timeout?: number;
  retryAttempts?: number;
  retryDelay?: number;
}

export class NearRpcClient {
  private endpoint: string;
  private headers: Record<string, string>;
  private timeout: number;
  private retryAttempts: number;
  private retryDelay: number;
  private requestId: number;

  constructor(config: NearRpcClientConfig) {
    this.endpoint = config.endpoint.replace(/\/$/, '');
    this.headers = config.headers || {};
    this.timeout = config.timeout || 30000;
    this.retryAttempts = config.retryAttempts || 3;
    this.retryDelay = config.retryDelay || 1000;
    this.requestId = 0;
  }

  private async request<T>(method: string, params: any = {}): Promise<T> {
    const request = {
      jsonrpc: '2.0' as const,
      method,
      params: this.convertToSnakeCase(params),
      id: ++this.requestId,
    };

    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt < this.retryAttempts; attempt++) {
      try {
        const response = await this.httpRequest(request);
        
        if (response.error) {
          throw new NearRpcError(response.error.code, response.error.message, response.error.data);
        }

        return this.convertToCamelCase(response.result);
      } catch (error) {
        lastError = error as Error;
        
        if (error instanceof NearRpcError) {
          throw error;
        }
        
        if (attempt < this.retryAttempts - 1) {
          await this.delay(this.retryDelay * Math.pow(2, attempt));
        }
      }
    }

    throw lastError;
  }

  private async httpRequest(request: any): Promise<any> {
    // CRITICAL: Always use "/" endpoint - fixes OpenAPI path mismatch
    const response = await fetch(`${this.endpoint}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  }

  private convertToCamelCase(obj: any): any {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.convertToCamelCase(item));
    }

    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      let camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      
      // Fix specific cases for proper TypeScript naming
      camelKey = camelKey.replace(/hash$/, 'Hash');
      camelKey = camelKey.replace(/id$/, 'Id');
      camelKey = camelKey.replace(/key$/, 'Key');
      
      result[camelKey] = this.convertToCamelCase(value);
    }
    return result;
  }

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

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Core RPC Methods
  async status(): Promise<Types.StatusResponse> {
    return this.request('status', {});
  }

  async block(params: { finality?: Types.Finality; block_id?: string } = {}): Promise<Types.BlockResponse> {
    return this.request('block', params);
  }

  async gasPrice(params: { finality?: Types.Finality } = {}): Promise<Types.GasPriceResponse> {
    return this.request('gas_price', params);
  }

  async networkInfo(): Promise<Types.NetworkInfoResponse> {
    return this.request('network_info', {});
  }

  async query(params: any): Promise<Types.QueryResponse> {
    return this.request('query', params);
  }

  async validators(params: { finality?: Types.Finality } = {}): Promise<any> {
    return this.request('validators', params);
  }

  async experimentalProtocolConfig(params: { finality?: Types.Finality } = {}): Promise<Types.EXPERIMENTALProtocolConfigResponse> {
    return this.request('EXPERIMENTAL_protocol_config', params);
  }

  async experimentalGenesisConfig(): Promise<Types.EXPERIMENTALGenesisConfigResponse> {
    return this.request('EXPERIMENTAL_genesis_config', {});
  }

  // Convenience methods
  async viewAccount(accountId: string): Promise<Types.ViewAccountResponse> {
    return this.query({
      request_type: 'view_account',
      account_id: accountId,
      finality: 'final'
    });
  }

  async viewAccessKeyList(accountId: string): Promise<Types.AccessKeyListResponse> {
    return this.query({
      request_type: 'view_access_key_list',
      account_id: accountId,
      finality: 'final'
    });
  }

  async viewState(accountId: string, prefix: string = ''): Promise<Types.ViewStateResponse> {
    return this.query({
      request_type: 'view_state',
      account_id: accountId,
      prefix,
      finality: 'final'
    });
  }

  async callFunction(accountId: string, methodName: string, args: any = {}): Promise<any> {
    return this.query({
      request_type: 'call_function',
      account_id: accountId,
      method_name: methodName,
      args_base64: Buffer.from(JSON.stringify(args)).toString('base64'),
      finality: 'final'
    });
  }

  async transaction(transactionHash: string, senderId: string): Promise<any> {
    return this.request('tx', {
      transaction_hash: transactionHash,
      sender_id: senderId
    });
  }

  async receipts(receiptIds: string[]): Promise<any> {
    return this.request('receipts', {
      receipt_ids: receiptIds
    });
  }

  async broadcastTxAsync(signedTransaction: string): Promise<Types.BroadcastTxAsyncResponse> {
    return this.request('broadcast_tx_async', {
      signed_tx_base64: signedTransaction
    });
  }

  async broadcastTxCommit(signedTransaction: string): Promise<Types.BroadcastTxCommitResponse> {
    return this.request('broadcast_tx_commit', {
      signed_tx_base64: signedTransaction
    });
  }
}

export class NearRpcError extends Error {
  public code: number;
  public data?: any;

  constructor(code: number, message: string, data?: any) {
    super(message);
    this.name = 'NearRpcError';
    this.code = code;
    this.data = data;
  }
}

export class NetworkError extends Error {
  public cause?: Error;

  constructor(message: string, cause?: Error) {
    super(message);
    this.name = 'NetworkError';
    this.cause = cause;
  }
}

// Export types for convenience
export type { 
  StatusResponse,
  BlockResponse,
  GasPriceResponse,
  NetworkInfoResponse,
  QueryResponse,
  ViewAccountResponse,
  AccessKeyListResponse,
  ViewStateResponse,
  BroadcastTxAsyncResponse,
  BroadcastTxCommitResponse,
  EXPERIMENTALProtocolConfigResponse,
  EXPERIMENTALGenesisConfigResponse,
  Finality,
  AccountId,
  PublicKey,
  CryptoHash,
  BlockHeight,
  BlockHash
} from '../../jsonrpc-types/src/types/validated-real-improved';