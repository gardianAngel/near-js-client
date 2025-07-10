/**
 * NEAR Protocol JSON-RPC Client
 *
 * Production-ready TypeScript client with proper RPC path behavior
 */
import * as Types from '../../jsonrpc-types/src/types/validated-real-improved';
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
    private request;
    private httpRequest;
    private convertToCamelCase;
    private convertToSnakeCase;
    private delay;
    status(): Promise<Types.StatusResponse>;
    block(params?: {
        finality?: Types.Finality;
        block_id?: string;
    }): Promise<Types.BlockResponse>;
    gasPrice(params?: {
        finality?: Types.Finality;
    }): Promise<Types.GasPriceResponse>;
    networkInfo(): Promise<Types.NetworkInfoResponse>;
    query(params: any): Promise<Types.QueryResponse>;
    validators(params?: {
        finality?: Types.Finality;
    }): Promise<any>;
    experimentalProtocolConfig(params?: {
        finality?: Types.Finality;
    }): Promise<Types.EXPERIMENTALProtocolConfigResponse>;
    experimentalGenesisConfig(): Promise<Types.EXPERIMENTALGenesisConfigResponse>;
    viewAccount(accountId: string): Promise<any>;
    viewAccessKeyList(accountId: string): Promise<any>;
    viewState(accountId: string, prefix?: string): Promise<any>;
    callFunction(accountId: string, methodName: string, args?: any): Promise<any>;
    transaction(transactionHash: string, senderId: string): Promise<any>;
    receipts(receiptIds: string[]): Promise<any>;
    broadcastTxAsync(signedTransaction: string): Promise<any>;
    broadcastTxCommit(signedTransaction: string): Promise<any>;
}
export declare class NearRpcError extends Error {
    code: number;
    data?: any;
    constructor(code: number, message: string, data?: any);
}
export declare class NetworkError extends Error {
    cause?: Error;
    constructor(message: string, cause?: Error);
}
export type { StatusResponse, BlockResponse, GasPriceResponse, NetworkInfoResponse, QueryResponse, EXPERIMENTALProtocolConfigResponse, EXPERIMENTALGenesisConfigResponse, Finality, AccountId, PublicKey, CryptoHash, BlockHeight, BlockHash } from '../../jsonrpc-types/src/types/validated-real-improved';
