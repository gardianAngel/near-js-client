/**
 * Accounts-related methods for NEAR JSON-RPC client
 */

import {
  RpcQueryRequest,
  RpcQueryRequestSchema,
  RpcQueryResponse,
  RpcQueryResponseSchema
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class AccountsMethods {
  constructor(private client: NearJsonRpcClient) {}

  async query(params: RpcQueryRequest): Promise<RpcQueryResponse> {
    const validatedParams = RpcQueryRequestSchema.parse(params);
    return this.client.makeRequest('query', validatedParams, RpcQueryResponseSchema);
  }
}
