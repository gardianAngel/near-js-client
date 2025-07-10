/**
 * Accounts-related methods for NEAR JSON-RPC client
 */
import { RpcQueryRequest, RpcQueryResponse, AccountView, AccountId } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class AccountsMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    query(params: RpcQueryRequest): Promise<RpcQueryResponse>;
    viewAccount(params: {
        account_id: AccountId;
    }): Promise<AccountView>;
}
