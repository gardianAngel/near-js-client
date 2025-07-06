/**
 * Accounts-related methods for NEAR JSON-RPC client
 */

import {
  QueryQuerySchema,
  QueryRequest,
  QueryResponse,
  QueryResponseSchema
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class AccountsMethods {
  constructor(private client: NearJsonRpcClient) {}

  async query(params: QueryQuery): Promise<QueryResponse> {
    const validatedParams = QueryQuerySchema.parse(params);
    return this.client.makeRequest('Query', validatedParams, QueryResponseSchema);
  }
}
