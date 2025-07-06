/**
 * Account-related methods for NEAR JSON-RPC client
 */
import type { NearJsonRpcClient } from '../client';
export declare class AccountMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    /**
     * Get account information
     */
    viewAccount(params: {
        account_id: string;
        block_id?: string | number;
        finality?: 'final' | 'optimistic';
    }): Promise<any>;
    /**
     * Get account access keys
     */
    viewAccessKeyList(params: {
        account_id: string;
        block_id?: string | number;
        finality?: 'final' | 'optimistic';
    }): Promise<any>;
    /**
     * Get specific access key
     */
    viewAccessKey(params: {
        account_id: string;
        public_key: string;
        block_id?: string | number;
        finality?: 'final' | 'optimistic';
    }): Promise<any>;
    /**
     * Call contract view method
     */
    viewFunction(params: {
        account_id: string;
        method_name: string;
        args_base64?: string;
        block_id?: string | number;
        finality?: 'final' | 'optimistic';
    }): Promise<any>;
    /**
     * Get contract state
     */
    viewState(params: {
        account_id: string;
        prefix_base64?: string;
        block_id?: string | number;
        finality?: 'final' | 'optimistic';
    }): Promise<any>;
}
