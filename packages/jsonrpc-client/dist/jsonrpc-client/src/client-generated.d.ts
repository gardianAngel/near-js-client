/**
 * Generated NEAR Protocol JSON-RPC Client
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */
import { GeneratedMethods } from './methods/generated';
export interface NearJsonRpcClientConfig {
    endpoint: string;
    headers?: Record<string, string>;
    timeout?: number;
}
export declare class NearJsonRpcClient {
    private endpoint;
    private headers;
    private timeout;
    readonly methods: GeneratedMethods;
    constructor(config: NearJsonRpcClientConfig);
    request<T = any>(method: string, params?: any): Promise<T>;
    private httpRequest;
    private convertToSnakeCase;
    private convertToCamelCase;
    private generateId;
}
