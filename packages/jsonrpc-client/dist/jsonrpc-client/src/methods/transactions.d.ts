/**
 * Transactions-related methods for NEAR JSON-RPC client
 */
import { RpcBroadcastTxAsyncRequest, RpcBroadcastTxAsyncResponse, RpcBroadcastTxCommitRequest, RpcBroadcastTxCommitResponse, RpcEXPERIMENTALTxStatusRequest, RpcEXPERIMENTALTxStatusResponse, RpcSendTxRequest, RpcSendTxResponse, RpcTransactionResponse, RpcTransactionStatusRequest } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class TransactionsMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    txStatus(params: RpcEXPERIMENTALTxStatusRequest): Promise<RpcEXPERIMENTALTxStatusResponse>;
    broadcastTxAsync(params: RpcBroadcastTxAsyncRequest): Promise<RpcBroadcastTxAsyncResponse>;
    broadcastTxCommit(params: RpcBroadcastTxCommitRequest): Promise<RpcBroadcastTxCommitResponse>;
    sendTx(params: RpcSendTxRequest): Promise<RpcSendTxResponse>;
    tx(params: RpcTransactionStatusRequest): Promise<RpcTransactionResponse>;
    transaction(params: {
        transactionHash: string;
        senderId: string;
    }): Promise<RpcTransactionResponse>;
}
