"use strict";
/**
 * Simple RPC methods for NEAR Protocol
 *
 * Basic implementations of common NEAR RPC methods using direct JSON-RPC calls.
 * This approach uses the client's makeRequest method which handles snake_case/camelCase conversion.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleMethods = void 0;
class SimpleMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Get network status
     */
    async status(params = {}) {
        return this.client.makeRequest('status', params);
    }
    /**
     * Get latest block
     */
    async block(params = {}) {
        return this.client.makeRequest('block', params);
    }
    /**
     * Get transaction status
     */
    async txStatus(params) {
        return this.client.makeRequest('EXPERIMENTAL_tx_status', params);
    }
    /**
     * View account details
     */
    async viewAccount(params) {
        return this.client.makeRequest('query', {
            request_type: 'view_account',
            ...params
        });
    }
    /**
     * Get gas price
     */
    async gasPrice(params = {}) {
        return this.client.makeRequest('gas_price', params);
    }
    /**
     * Broadcast transaction (async)
     */
    async broadcastTxAsync(params) {
        return this.client.makeRequest('broadcast_tx_async', params);
    }
    /**
     * Broadcast transaction (commit)
     */
    async broadcastTxCommit(params) {
        return this.client.makeRequest('broadcast_tx_commit', params);
    }
    /**
     * Send transaction
     */
    async sendTx(params) {
        return this.client.makeRequest('send_tx', params);
    }
}
exports.SimpleMethods = SimpleMethods;
