"use strict";
/**
 * Transaction-related methods for NEAR JSON-RPC client
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionMethods = void 0;
const jsonrpc_types_1 = require("@near-js/jsonrpc-types");
class TransactionMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Get transaction status
     */
    async txStatus(params) {
        return this.client.makeRequest('EXPERIMENTAL_tx_status', params, jsonrpc_types_1.z.any());
    }
    /**
     * Broadcast transaction asynchronously
     */
    async broadcastTxAsync(params) {
        return this.client.makeRequest('broadcast_tx_async', params, jsonrpc_types_1.z.any());
    }
    /**
     * Broadcast transaction and wait for commit
     */
    async broadcastTxCommit(params) {
        return this.client.makeRequest('broadcast_tx_commit', params, jsonrpc_types_1.z.any());
    }
    /**
     * Send transaction
     */
    async sendTx(params) {
        return this.client.makeRequest('send_tx', params, jsonrpc_types_1.z.any());
    }
    /**
     * Get transaction details
     */
    async tx(params) {
        return this.client.makeRequest('tx', params, jsonrpc_types_1.z.any());
    }
}
exports.TransactionMethods = TransactionMethods;
