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
    async viewAccount(params) {
        return this.client.makeRequest('query', {
            request_type: 'view_account',
            ...params
        }, jsonrpc_types_1.z.any());
    }
    /**
     * Get account access keys
     */
    async viewAccessKeyList(params) {
        return this.client.makeRequest('query', {
            request_type: 'view_access_key_list',
            ...params
        }, jsonrpc_types_1.z.any());
    }
    /**
     * Get specific access key
     */
    async viewAccessKey(params) {
        return this.client.makeRequest('query', {
            request_type: 'view_access_key',
            ...params
        }, jsonrpc_types_1.z.any());
    }
    /**
     * Call contract view method
     */
    async viewFunction(params) {
        return this.client.makeRequest('query', {
            request_type: 'call_function',
            ...params
        }, jsonrpc_types_1.z.any());
    }
    /**
     * Get contract state
     */
    async viewState(params) {
        return this.client.makeRequest('query', {
            request_type: 'view_state',
            ...params
        }, jsonrpc_types_1.z.any());
    }
}
exports.AccountMethods = AccountMethods;
