/**
 * NEAR Protocol JSON-RPC Client
 * 
 * Main client class that provides type-safe methods for all NEAR JSON-RPC endpoints
 */

import { z } from 'zod';
import { JsonRpcRequest, JsonRpcResponse } from '@near-js/jsonrpc-types';
import { NearJsonRpcError, NetworkError, ValidationError } from './errors';
import { BlockMethods } from './methods/blocks';
import { TransactionMethods } from './methods/transactions';
import { AccountMethods } from './methods/accounts';
import { NetworkMethods } from './methods/network';

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
  public readonly blocks: BlockMethods;
  public readonly transactions: TransactionMethods;
  public readonly accounts: AccountMethods;
  public readonly network: NetworkMethods;

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
    this.blocks = new BlockMethods(this);
    this.transactions = new TransactionMethods(this);
    this.accounts = new AccountMethods(this);
    this.network = new NetworkMethods(this);
  }

  /**
   * Make a JSON-RPC request with type validation
   * CRITICAL: Always use '/' as path, not the OpenAPI spec paths
   * Converts camelCase input to snake_case for API and snake_case response to camelCase
   */
  async makeRequest<T>(
    method: string,
    params: unknown,
    responseSchema: z.ZodSchema<T>
  ): Promise<T> {
    // Convert camelCase input to snake_case for the API
    const snakeCaseParams = this.transformKeysToSnakeCase(params);
    
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method,
      params: snakeCaseParams,
      id: ++this.requestId,
    };

    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt <= this.retries; attempt++) {
      try {
        const response = await this.executeRequest(request);
        
        if (response.error) {
          throw new NearJsonRpcError(
            response.error.message,
            response.error.code,
            response.error.data
          );
        }

        if (response.result === undefined) {
          throw new NearJsonRpcError('No result in response', -32603);
        }

        try {
          // Convert snake_case response to camelCase for JS developers
          const camelCaseResult = this.transformKeysToCamelCase(response.result);
          return responseSchema.parse(camelCaseResult);
        } catch (parseError) {
          if (parseError instanceof z.ZodError) {
            throw new ValidationError(
              `Response validation failed: ${parseError.message}`,
              parseError.errors
            );
          }
          throw parseError;
        }
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        
        if (attempt === this.retries) {
          break;
        }
        
        // Only retry on network errors
        if (error instanceof NetworkError) {
          await this.delay(this.retryDelay * Math.pow(2, attempt));
          continue;
        }
        
        // Don't retry on validation or RPC errors
        throw error;
      }
    }

    throw lastError;
  }

  private async executeRequest(request: JsonRpcRequest): Promise<JsonRpcResponse> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(`${this.baseUrl}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKey && { 'Authorization': `Bearer ${this.apiKey}` }),
        },
        body: JSON.stringify(request),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new NetworkError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status
        );
      }

      const data = await response.json();
      return data as JsonRpcResponse;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new NetworkError('Request timeout', 0);
        }
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
          throw new NetworkError('Network error', 0);
        }
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Transform object keys from camelCase to snake_case recursively
   */
  private transformKeysToSnakeCase(obj: unknown): unknown {
    if (Array.isArray(obj)) {
      return obj.map(item => this.transformKeysToSnakeCase(item));
    }
    
    if (obj && typeof obj === 'object' && obj.constructor === Object) {
      const result: Record<string, unknown> = {};
      
      for (const [key, value] of Object.entries(obj)) {
        const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
        result[snakeKey] = this.transformKeysToSnakeCase(value);
      }
      
      return result;
    }
    
    return obj;
  }

  /**
   * Transform object keys from snake_case to camelCase recursively
   */
  private transformKeysToCamelCase(obj: unknown): unknown {
    if (Array.isArray(obj)) {
      return obj.map(item => this.transformKeysToCamelCase(item));
    }
    
    if (obj && typeof obj === 'object' && obj.constructor === Object) {
      const result: Record<string, unknown> = {};
      
      for (const [key, value] of Object.entries(obj)) {
        const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
        result[camelKey] = this.transformKeysToCamelCase(value);
      }
      
      return result;
    }
    
    return obj;
  }

  /**
   * Get the base URL of the client
   */
  getBaseUrl(): string {
    return this.baseUrl;
  }

  /**
   * Check if the client has an API key configured
   */
  hasApiKey(): boolean {
    return !!this.apiKey;
  }
}
