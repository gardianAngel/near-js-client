/**
 * Accounts-related methods for NEAR JSON-RPC client
 */
import { QueryResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class AccountsMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    query(params: QueryQuery): Promise<QueryResponse>;
}
