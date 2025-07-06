/**
 * Transactions-related methods for NEAR JSON-RPC client
 */
import { BroadcasttxasyncResponse, BroadcasttxcommitResponse, SendtxResponse, TxResponse, TxstatusResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class TransactionsMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    txstatus(params: TxstatusQuery): Promise<TxstatusResponse>;
    broadcasttxasync(params: BroadcasttxasyncQuery): Promise<BroadcasttxasyncResponse>;
    broadcasttxcommit(params: BroadcasttxcommitQuery): Promise<BroadcasttxcommitResponse>;
    sendtx(params: SendtxQuery): Promise<SendtxResponse>;
    tx(params: TxQuery): Promise<TxResponse>;
}
