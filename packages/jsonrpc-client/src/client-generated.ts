/**
 * Generated NEAR Protocol JSON-RPC Client
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */

import { GeneratedMethods } from './methods/generated';
import * as Types from '@near-js/jsonrpc-types';

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
      throw new Error(`RPC Error: ${response.error.message}`);
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
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
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
