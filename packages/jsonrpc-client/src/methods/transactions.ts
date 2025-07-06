/**
 * Transactions-related methods for NEAR JSON-RPC client
 */

import {
  BroadcasttxasyncQuerySchema,
  BroadcasttxasyncRequest,
  BroadcasttxasyncResponse,
  BroadcasttxasyncResponseSchema,
  BroadcasttxcommitQuerySchema,
  BroadcasttxcommitRequest,
  BroadcasttxcommitResponse,
  BroadcasttxcommitResponseSchema,
  SendtxQuerySchema,
  SendtxRequest,
  SendtxResponse,
  SendtxResponseSchema,
  TxQuerySchema,
  TxRequest,
  TxResponse,
  TxResponseSchema,
  TxstatusQuerySchema,
  TxstatusRequest,
  TxstatusResponse,
  TxstatusResponseSchema
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class TransactionsMethods {
  constructor(private client: NearJsonRpcClient) {}

  async txstatus(params: TxstatusQuery): Promise<TxstatusResponse> {
    const validatedParams = TxstatusQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALtxstatus', validatedParams, TxstatusResponseSchema);
  }

  async broadcasttxasync(params: BroadcasttxasyncQuery): Promise<BroadcasttxasyncResponse> {
    const validatedParams = BroadcasttxasyncQuerySchema.parse(params);
    return this.client.makeRequest('Broadcasttxasync', validatedParams, BroadcasttxasyncResponseSchema);
  }

  async broadcasttxcommit(params: BroadcasttxcommitQuery): Promise<BroadcasttxcommitResponse> {
    const validatedParams = BroadcasttxcommitQuerySchema.parse(params);
    return this.client.makeRequest('Broadcasttxcommit', validatedParams, BroadcasttxcommitResponseSchema);
  }

  async sendtx(params: SendtxQuery): Promise<SendtxResponse> {
    const validatedParams = SendtxQuerySchema.parse(params);
    return this.client.makeRequest('Sendtx', validatedParams, SendtxResponseSchema);
  }

  async tx(params: TxQuery): Promise<TxResponse> {
    const validatedParams = TxQuerySchema.parse(params);
    return this.client.makeRequest('Tx', validatedParams, TxResponseSchema);
  }
}
