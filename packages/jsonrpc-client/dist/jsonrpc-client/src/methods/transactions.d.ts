/**
 * Transactions-related methods for NEAR JSON-RPC client
 */
import { RpcBroadcasttxasyncRequest, RpcBroadcasttxasyncResponse, RpcBroadcasttxcommitRequest, RpcBroadcasttxcommitResponse, RpcEXPERIMENTALtxstatusRequest, RpcEXPERIMENTALtxstatusResponse, RpcSendtxRequest, RpcSendtxResponse, RpcTxRequest, RpcTxResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class TransactionsMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    txstatus(params: RpcEXPERIMENTALtxstatusRequest): Promise<RpcEXPERIMENTALtxstatusResponse>;
    broadcasttxasync(params: RpcBroadcasttxasyncRequest): Promise<RpcBroadcasttxasyncResponse>;
    broadcasttxcommit(params: RpcBroadcasttxcommitRequest): Promise<RpcBroadcasttxcommitResponse>;
    sendtx(params: RpcSendtxRequest): Promise<RpcSendtxResponse>;
    tx(params: RpcTxRequest): Promise<RpcTxResponse>;
}
