/**
 * Transactions-related methods for NEAR JSON-RPC client
 */

import {
  RpcBroadcastTxAsyncRequest,
  RpcBroadcastTxAsyncRequestSchema,
  RpcBroadcastTxAsyncResponse,
  RpcBroadcastTxAsyncResponseSchema,
  RpcBroadcastTxCommitRequest,
  RpcBroadcastTxCommitRequestSchema,
  RpcBroadcastTxCommitResponse,
  RpcBroadcastTxCommitResponseSchema,
  RpcEXPERIMENTALTxStatusRequest,
  RpcEXPERIMENTALTxStatusRequestSchema,
  RpcEXPERIMENTALTxStatusResponse,
  RpcEXPERIMENTALTxStatusResponseSchema,
  RpcSendTxRequest,
  RpcSendTxRequestSchema,
  RpcSendTxResponse,
  RpcSendTxResponseSchema,
  RpcTransactionResponse,
  RpcTransactionResponseSchema,
  RpcTransactionStatusRequest,
  RpcTransactionStatusRequestSchema
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class TransactionsMethods {
  constructor(private client: NearJsonRpcClient) {}

  async txStatus(params: RpcEXPERIMENTALTxStatusRequest): Promise<RpcEXPERIMENTALTxStatusResponse> {
    const validatedParams = RpcEXPERIMENTALTxStatusRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALTxStatus', validatedParams, RpcEXPERIMENTALTxStatusResponseSchema);
  }

  async broadcastTxAsync(params: RpcBroadcastTxAsyncRequest): Promise<RpcBroadcastTxAsyncResponse> {
    const validatedParams = RpcBroadcastTxAsyncRequestSchema.parse(params);
    return this.client.makeRequest('broadcastTxAsync', validatedParams, RpcBroadcastTxAsyncResponseSchema);
  }

  async broadcastTxCommit(params: RpcBroadcastTxCommitRequest): Promise<RpcBroadcastTxCommitResponse> {
    const validatedParams = RpcBroadcastTxCommitRequestSchema.parse(params);
    return this.client.makeRequest('broadcastTxCommit', validatedParams, RpcBroadcastTxCommitResponseSchema);
  }

  async sendTx(params: RpcSendTxRequest): Promise<RpcSendTxResponse> {
    const validatedParams = RpcSendTxRequestSchema.parse(params);
    return this.client.makeRequest('sendTx', validatedParams, RpcSendTxResponseSchema);
  }

  async tx(params: RpcTransactionStatusRequest): Promise<RpcTransactionResponse> {
    const validatedParams = RpcTransactionStatusRequestSchema.parse(params);
    return this.client.makeRequest('tx', validatedParams, RpcTransactionResponseSchema);
  }
}
