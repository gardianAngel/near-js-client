/**
 * Transactions-related methods for NEAR JSON-RPC client
 */

import {
  RpcBroadcasttxasyncRequest,
  RpcBroadcasttxasyncRequestSchema,
  RpcBroadcasttxasyncResponse,
  RpcBroadcasttxasyncResponseSchema,
  RpcBroadcasttxcommitRequest,
  RpcBroadcasttxcommitRequestSchema,
  RpcBroadcasttxcommitResponse,
  RpcBroadcasttxcommitResponseSchema,
  RpcEXPERIMENTALtxstatusRequest,
  RpcEXPERIMENTALtxstatusRequestSchema,
  RpcEXPERIMENTALtxstatusResponse,
  RpcEXPERIMENTALtxstatusResponseSchema,
  RpcSendtxRequest,
  RpcSendtxRequestSchema,
  RpcSendtxResponse,
  RpcSendtxResponseSchema,
  RpcTxRequest,
  RpcTxRequestSchema,
  RpcTxResponse,
  RpcTxResponseSchema
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class TransactionsMethods {
  constructor(private client: NearJsonRpcClient) {}

  async txstatus(params: RpcEXPERIMENTALtxstatusRequest): Promise<RpcEXPERIMENTALtxstatusResponse> {
    const validatedParams = RpcEXPERIMENTALtxstatusRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALtxstatus', validatedParams, RpcEXPERIMENTALtxstatusResponseSchema);
  }

  async broadcasttxasync(params: RpcBroadcasttxasyncRequest): Promise<RpcBroadcasttxasyncResponse> {
    const validatedParams = RpcBroadcasttxasyncRequestSchema.parse(params);
    return this.client.makeRequest('Broadcasttxasync', validatedParams, RpcBroadcasttxasyncResponseSchema);
  }

  async broadcasttxcommit(params: RpcBroadcasttxcommitRequest): Promise<RpcBroadcasttxcommitResponse> {
    const validatedParams = RpcBroadcasttxcommitRequestSchema.parse(params);
    return this.client.makeRequest('Broadcasttxcommit', validatedParams, RpcBroadcasttxcommitResponseSchema);
  }

  async sendtx(params: RpcSendtxRequest): Promise<RpcSendtxResponse> {
    const validatedParams = RpcSendtxRequestSchema.parse(params);
    return this.client.makeRequest('Sendtx', validatedParams, RpcSendtxResponseSchema);
  }

  async tx(params: RpcTxRequest): Promise<RpcTxResponse> {
    const validatedParams = RpcTxRequestSchema.parse(params);
    return this.client.makeRequest('Tx', validatedParams, RpcTxResponseSchema);
  }
}
