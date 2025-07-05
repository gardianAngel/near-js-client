/**
 * NEAR Protocol JSON-RPC Client
 *
 * Main client class that provides type-safe methods for all NEAR JSON-RPC endpoints
 */
import { z } from 'zod';
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
export declare class NearJsonRpcClient {
    private readonly baseUrl;
    private readonly apiKey?;
    private readonly timeout;
    private readonly retries;
    private readonly retryDelay;
    private requestId;
    readonly blocks: BlockMethods;
    readonly transactions: TransactionMethods;
    readonly accounts: AccountMethods;
    readonly network: NetworkMethods;
    constructor(options: NearJsonRpcClientOptions | string);
    /**
     * Make a JSON-RPC request with type validation
     * CRITICAL: Always use '/' as path, not the OpenAPI spec paths
     */
    makeRequest<T>(method: string, params: unknown, responseSchema: z.ZodSchema<T>): Promise<T>;
    private executeRequest;
    private delay;
    /**
     * Get the base URL of the client
     */
    getBaseUrl(): string;
    /**
     * Check if the client has an API key configured
     */
    hasApiKey(): boolean;
}
