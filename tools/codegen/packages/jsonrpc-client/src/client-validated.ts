/**
 * Validated NEAR Protocol JSON-RPC Client
 * 
 * This client properly handles the path mismatch between OpenAPI specification
 * and actual JSON-RPC implementation. All requests go to "/" endpoint.
 * 
 * Features:
 * - Fetch-based HTTP requests
 * - Automatic snake_case ↔ camelCase conversion
 * - Comprehensive error handling with retries
 * - Runtime validation with Zod
 * - Full TypeScript type safety
 */

import { ValidatedMethods } from './methods/validated';
import * as Types from '@near-js/jsonrpc-types/types/validated';
import * as Schemas from '@near-js/jsonrpc-types/schemas/validated';
import { z } from 'zod';

export interface NearRpcClientConfig {
  endpoint: string;
  headers?: Record<string, string>;
  timeout?: number;
  retryAttempts?: number;
  retryDelay?: number;
  validateResponses?: boolean;
}

export class NearRpcClient {
  private endpoint: string;
  private headers: Record<string, string>;
  private timeout: number;
  private retryAttempts: number;
  private retryDelay: number;
  private validateResponses: boolean;
  private requestId: number = 0;
  
  public readonly methods: ValidatedMethods;

  constructor(config: NearRpcClientConfig) {
    this.endpoint = config.endpoint.replace(/\/$/, ''); // Remove trailing slash
    this.headers = config.headers || {};
    this.timeout = config.timeout || 30000;
    this.retryAttempts = config.retryAttempts || 3;
    this.retryDelay = config.retryDelay || 1000;
    this.validateResponses = config.validateResponses ?? true;
    
    this.methods = new ValidatedMethods(this);
  }

  /**
   * Execute a JSON-RPC request
   * All requests go to "/" endpoint regardless of method
   */
  public async request<T = any>(
    method: string,
    params: any = {},
    schema?: z.ZodSchema<T>
  ): Promise<T> {
    const request: Types.JsonRpcRequest = {
      jsonrpc: '2.0',
      method,
      params: this.convertToSnakeCase(params),
      id: ++this.requestId,
    };

    // Validate request
    if (this.validateResponses) {
      Schemas.JsonRpcRequestSchema.parse(request);
    }

    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt < this.retryAttempts; attempt++) {
      try {
        const response = await this.httpRequest(request);
        
        if (response.error) {
          throw new NearRpcError(
            response.error.code,
            response.error.message,
            response.error.data,
            method,
            params
          );
        }

        if (!response.result) {
          throw new NearRpcError(
            -32603,
            'No result in response',
            response,
            method,
            params
          );
        }

        const result = this.convertToCamelCase(response.result);
        
        // Validate response if schema provided
        if (schema && this.validateResponses) {
          return schema.parse(result);
        }
        
        return result;
      } catch (error) {
        lastError = error as Error;
        
        // Don't retry on validation errors or RPC errors
        if (error instanceof z.ZodError || error instanceof NearRpcError) {
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
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      // Always use "/" endpoint - this is the key fix for the path mismatch
      const response = await fetch(`${this.endpoint}/`, {
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
          `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          await response.text()
        );
      }

      const jsonResponse = await response.json();
      
      // Validate response structure
      if (this.validateResponses) {
        Schemas.JsonRpcResponseSchema.parse(jsonResponse);
      }
      
      return jsonResponse;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof DOMException && error.name === 'AbortError') {
        throw new NetworkError('Request timeout', 408, `Request timed out after ${this.timeout}ms`);
      }
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new NetworkError('Network request failed', 0, error.message);
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

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export class NearRpcError extends Error {
  constructor(
    public code: number,
    message: string,
    public data?: any,
    public method?: string,
    public params?: any
  ) {
    super(message);
    this.name = 'NearRpcError';
  }
}

export class NetworkError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public responseText?: string
  ) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public originalError: z.ZodError
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}
