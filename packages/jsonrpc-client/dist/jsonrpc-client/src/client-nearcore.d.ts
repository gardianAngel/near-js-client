/**
 * Generated NEAR Protocol JSON-RPC Client
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */
import { NearcoreMethods } from './methods/nearcore';
export interface NearJsonRpcClientConfig {
    endpoint: string;
    headers?: Record<string, string>;
    timeout?: number;
    retryAttempts?: number;
    retryDelay?: number;
}
export declare class NearJsonRpcClient {
    private endpoint;
    private headers;
    private timeout;
    private retryAttempts;
    private retryDelay;
    readonly methods: NearcoreMethods;
    constructor(config: NearJsonRpcClientConfig);
    /**
     * Make a JSON-RPC request to the NEAR Protocol RPC endpoint
     * All requests use POST to "/" path as per JSON-RPC 2.0 specification
     */
    request<T = any>(method: string, params?: any): Promise<T>;
    private httpRequest;
    /**
     * Convert camelCase object to snake_case for API requests
     */
    private convertToSnakeCase;
    /**
     * Convert snake_case object to camelCase for TypeScript usage
     */
    private convertToCamelCase;
    private generateId;
    private delay;
}
export declare class NearJsonRpcError extends Error {
    code: number;
    data?: any | undefined;
    constructor(code: number, message: string, data?: any | undefined);
}
export declare class NetworkError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
