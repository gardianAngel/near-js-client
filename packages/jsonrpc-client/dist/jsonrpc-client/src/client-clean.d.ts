/**
 * Clean NEAR Protocol RPC Client
 * Fixed issues:
 * 1. No redundant method groupings (client.accounts.getAccount)
 * 2. Direct method names (block not getLatestBlock)
 * 3. Proper error handling
 * 4. Clean TypeScript implementation
 */
import * as Types from '../../jsonrpc-types/src/types/validated-real-improved';
export interface NearRpcClientConfig {
    endpoint: string;
    headers?: Record<string, string>;
    timeout?: number;
    retryAttempts?: number;
    retryDelay?: number;
}
export declare class NearRpcError extends Error {
    code: number;
    data?: any | undefined;
    constructor(code: number, message: string, data?: any | undefined);
}
export declare class NetworkError extends Error {
    cause?: Error | undefined;
    constructor(message: string, cause?: Error | undefined);
}
export declare class NearRpcClient {
    private endpoint;
    private headers;
    private timeout;
    private retryAttempts;
    private retryDelay;
    private requestId;
    constructor(config: NearRpcClientConfig);
    private request;
    private httpRequest;
    convertToSnakeCase(obj: any): any;
    convertToCamelCase(obj: any): any;
    private delay;
    status(): Promise<Types.StatusResponse>;
    block(params?: {
        finality?: Types.Finality;
        blockId?: number | string;
    }): Promise<Types.BlockResponse>;
    gasPrice(params?: {
        finality?: Types.Finality;
    }): Promise<Types.GasPriceResponse>;
    networkInfo(): Promise<Types.NetworkInfoResponse>;
    query(params: {
        requestType: string;
        finality?: Types.Finality;
        blockId?: number | string;
        accountId?: string;
        methodName?: string;
        args?: string;
        prefix?: string;
    }): Promise<any>;
    validators(params?: {
        finality?: Types.Finality;
    }): Promise<any>;
    experimentalProtocolConfig(params?: {
        finality?: Types.Finality;
    }): Promise<Types.EXPERIMENTALProtocolConfigResponse>;
    experimentalGenesisConfig(): Promise<Types.EXPERIMENTALGenesisConfigResponse>;
    viewAccount(accountId: string): Promise<Types.ViewAccountResponse>;
    viewAccessKeyList(accountId: string): Promise<Types.AccessKeyListResponse>;
    viewState(accountId: string, prefix?: string): Promise<Types.ViewStateResponse>;
    callFunction(accountId: string, methodName: string, args?: any): Promise<any>;
}
