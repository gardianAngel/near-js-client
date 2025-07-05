"use strict";
/**
 * Account-related methods for NEAR JSON-RPC client
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountMethods = void 0;
const jsonrpc_types_1 = require("@near-js/jsonrpc-types");
class AccountMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Get account information
     */
    async getAccount(params) {
        const validatedParams = jsonrpc_types_1.AccountQuerySchema.parse(params);
        return this.client.makeRequest('query', {
            request_type: 'view_account',
            ...validatedParams,
        }, jsonrpc_types_1.AccountResponseSchema);
    }
    /**
     * Get access key information
     */
    async getAccessKey(params) {
        const validatedParams = jsonrpc_types_1.AccessKeyQuerySchema.parse(params);
        return this.client.makeRequest('query', {
            request_type: 'view_access_key',
            ...validatedParams,
        }, jsonrpc_types_1.AccessKeyResponseSchema);
    }
    /**
     * Get all access keys for an account
     */
    async getAccessKeyList(params) {
        const validatedParams = jsonrpc_types_1.AccessKeyListQuerySchema.parse(params);
        return this.client.makeRequest('query', {
            request_type: 'view_access_key_list',
            ...validatedParams,
        }, jsonrpc_types_1.AccessKeyListResponseSchema);
    }
    /**
     * Get contract code
     */
    async getCode(params) {
        const validatedParams = jsonrpc_types_1.CodeQuerySchema.parse(params);
        return this.client.makeRequest('query', {
            request_type: 'view_code',
            ...validatedParams,
        }, jsonrpc_types_1.CodeResponseSchema);
    }
    /**
     * Get contract state
     */
    async getContractState(params) {
        const validatedParams = jsonrpc_types_1.ContractStateQuerySchema.parse(params);
        return this.client.makeRequest('query', {
            request_type: 'view_state',
            ...validatedParams,
        }, jsonrpc_types_1.ContractStateResponseSchema);
    }
    /**
     * Get contract state changes
     */
    async getContractStateChanges(params) {
        const validatedParams = jsonrpc_types_1.ContractStateChangesQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTAL_changes', {
            changes_type: 'data_changes',
            ...validatedParams,
        }, jsonrpc_types_1.ContractStateChangesResponseSchema);
    }
    /**
     * Get account by ID with finality
     */
    async getAccountById(accountId, finality = 'final') {
        return this.getAccount({ accountId, finality });
    }
    /**
     * Check if account exists
     */
    async accountExists(accountId) {
        try {
            await this.getAccount({ accountId, finality: 'final' });
            return true;
        }
        catch (error) {
            if (error instanceof Error && error.message.includes('does not exist')) {
                return false;
            }
            throw error;
        }
    }
    /**
     * Get account balance
     */
    async getAccountBalance(accountId) {
        const account = await this.getAccount({ accountId, finality: 'final' });
        return account.amount;
    }
    /**
     * Get account storage usage
     */
    async getAccountStorageUsage(accountId) {
        const account = await this.getAccount({ accountId, finality: 'final' });
        return account.storageUsage;
    }
    /**
     * Get all access keys for an account by ID
     */
    async getAccessKeysById(accountId) {
        return this.getAccessKeyList({ accountId, finality: 'final' });
    }
    /**
     * Get specific access key by account ID and public key
     */
    async getAccessKeyById(accountId, publicKey) {
        return this.getAccessKey({ accountId, publicKey, finality: 'final' });
    }
}
exports.AccountMethods = AccountMethods;
