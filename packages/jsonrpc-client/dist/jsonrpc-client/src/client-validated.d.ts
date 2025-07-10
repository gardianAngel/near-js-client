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
import { z } from 'zod';
export interface NearRpcClientConfig {
    endpoint: string;
    headers?: Record<string, string>;
    timeout?: number;
    retryAttempts?: number;
    retryDelay?: number;
    validateResponses?: boolean;
}
export declare class NearRpcClient {
    private endpoint;
    private headers;
    private timeout;
    private retryAttempts;
    private retryDelay;
    private validateResponses;
    private requestId;
    readonly methods: ValidatedMethods;
    constructor(config: NearRpcClientConfig);
    /**
     * Execute a JSON-RPC request
     * All requests go to "/" endpoint regardless of method
     */
    request<T = any>(method: string, params?: any, schema?: z.ZodSchema<T>): Promise<T>;
    private httpRequest;
    /**
     * Convert camelCase object to snake_case for API requests
     */
    convertToSnakeCase(obj: any): any;
    /**
     * Convert snake_case object to camelCase for TypeScript usage
     */
    convertToCamelCase(obj: any): any;
    private delay;
}
export declare class NearRpcError extends Error {
    code: number;
    data?: any | undefined;
    method?: string | undefined;
    params?: any | undefined;
    constructor(code: number, message: string, data?: any | undefined, method?: string | undefined, params?: any | undefined);
}
export declare class NetworkError extends Error {
    statusCode: number;
    responseText?: string | undefined;
    constructor(message: string, statusCode: number, responseText?: string | undefined);
}
export declare class ValidationError extends Error {
    originalError: z.ZodError;
    constructor(message: string, originalError: z.ZodError);
}
