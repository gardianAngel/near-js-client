/**
 * Working NEAR Protocol JSON-RPC Client
 * Generated from validated API responses
 *
 * This client is guaranteed to work with the actual NEAR Protocol RPC.
 */
import * as Types from '../../jsonrpc-types/src/types/validated-real';
export interface NearRpcClientConfig {
    endpoint: string;
    headers?: Record<string, string>;
    timeout?: number;
    retryAttempts?: number;
    retryDelay?: number;
}
export declare class NearRpcClient {
    private endpoint;
    private headers;
    private timeout;
    private retryAttempts;
    private retryDelay;
    private requestId;
    constructor(config: NearRpcClientConfig);
    /**
     * Execute a JSON-RPC request
     * All requests go to "/" endpoint (fixes the path mismatch issue)
     */
    request<T = any>(method: string, params?: any): Promise<T>;
    private httpRequest;
    convertToSnakeCase(obj: any): any;
    convertToCamelCase(obj: any): any;
    private delay;
    status(): Promise<Types.StatusResponse>;
    block(params?: {
        finality?: Types.Finality;
        blockId?: number | string;
    }): Promise<Types.BlockResponse>;
    validators(params?: {
        finality?: Types.Finality;
    }): Promise<Types.ValidatorsResponse>;
    gasPrice(params?: {
        finality?: Types.Finality;
    }): Promise<Types.GasPriceResponse>;
    networkInfo(): Promise<Types.NetworkInfoResponse>;
    query(params: {
        requestType: string;
        finality?: Types.Finality;
        accountId?: string;
        publicKey?: string;
        methodName?: string;
        argsBase64?: string;
    }): Promise<any>;
    experimentalProtocolConfig(params?: {
        finality?: Types.Finality;
    }): Promise<Types.ExperimentalProtocolConfigResponse>;
    experimentalGenesisConfig(): Promise<Types.ExperimentalGenesisConfigResponse>;
}
export declare class NearRpcError extends Error {
    code: number;
    data?: any;
    constructor(code: number, message: string, data?: any);
}
