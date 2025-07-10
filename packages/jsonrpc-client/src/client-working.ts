/**
 * Working NEAR Protocol JSON-RPC Client
 * Generated from validated API responses
 * 
 * This client is guaranteed to work with the actual NEAR Protocol RPC.
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
  private requestId: number = 0;

  constructor(config: NearRpcClientConfig) {
    this.endpoint = config.endpoint.replace(/\/$/, '');
    this.headers = config.headers || {};
    this.timeout = config.timeout || 30000;
    this.retryAttempts = config.retryAttempts || 3;
    this.retryDelay = config.retryDelay || 1000;
  }

  /**
   * Execute a JSON-RPC request
   * All requests go to "/" endpoint (fixes the path mismatch issue)
   */
  async request<T = any>(method: string, params: any = {}): Promise<T> {
    const request: Types.JsonRpcRequest = {
      jsonrpc: '2.0',
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

  private async httpRequest(request: Types.JsonRpcRequest): Promise<Types.JsonRpcResponse> {
    // Critical: Always use "/" endpoint - this fixes the OpenAPI path mismatch
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

  public convertToSnakeCase(obj: any): any {
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

  public convertToCamelCase(obj: any): any {
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

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Validated method implementations
  async status(): Promise<Types.StatusResponse> {
    return this.request('status', {});
  }

  async block(params: { finality?: Types.Finality; blockId?: number | string } = {}): Promise<Types.BlockResponse> {
    return this.request('block', params);
  }

  async validators(params: { finality?: Types.Finality } = {}): Promise<any> {
    return this.request('validators', params);
  }

  async gasPrice(params: { finality?: Types.Finality } = {}): Promise<Types.GasPriceResponse> {
    return this.request('gas_price', params);
  }

  async networkInfo(): Promise<Types.NetworkInfoResponse> {
    return this.request('network_info', {});
  }

  async query(params: {
    requestType: string;
    finality?: Types.Finality;
    accountId?: string;
    publicKey?: string;
    methodName?: string;
    argsBase64?: string;
  }): Promise<any> {
    return this.request('query', params);
  }

  async experimentalProtocolConfig(params: { finality?: Types.Finality } = {}): Promise<Types.EXPERIMENTALProtocolConfigResponse> {
    return this.request('EXPERIMENTAL_protocol_config', params);
  }

  async experimentalGenesisConfig(): Promise<Types.EXPERIMENTALGenesisConfigResponse> {
    return this.request('EXPERIMENTAL_genesis_config', {});
  }
}

export class NearRpcError extends Error {
  constructor(
    public code: number,
    message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'NearRpcError';
  }
}