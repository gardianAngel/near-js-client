/**
 * NEAR Protocol JSON-RPC Client
 *
 * Main client class that provides type-safe methods for all NEAR JSON-RPC endpoints
 */
import { z } from 'zod';
import { SimpleMethods } from './methods/simple';
export interface NearJsonRpcClientOptions {
    baseUrl: string;
    apiKey?: string;
    timeout?: number;
    retries?: number;
    retryDelay?: number;
}
export declare class NearJsonRpcClient {
    private readonly baseUrl;
    private readonly apiKey?;
    private readonly timeout;
    private readonly retries;
    private readonly retryDelay;
    private requestId;
    readonly rpc: SimpleMethods;
    constructor(options: NearJsonRpcClientOptions | string);
    /**
     * Make a JSON-RPC request with type validation
     * CRITICAL: Always use '/' as path, not the OpenAPI spec paths
     * Converts camelCase input to snake_case for API and snake_case response to camelCase
     */
    makeRequest<T = any>(method: string, params: unknown, responseSchema?: z.ZodSchema<T>): Promise<T>;
    private executeRequest;
    private delay;
    /**
     * Transform object keys from camelCase to snake_case recursively
     */
    private transformKeysToSnakeCase;
    /**
     * Transform object keys from snake_case to camelCase recursively
     */
    private transformKeysToCamelCase;
    /**
     * Get the base URL of the client
     */
    getBaseUrl(): string;
    /**
     * Check if the client has an API key configured
     */
    hasApiKey(): boolean;
}
