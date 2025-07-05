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
     * Get transaction status and details
     */
    async getTransaction(params) {
        const validatedParams = jsonrpc_types_1.TransactionQuerySchema.parse(params);
        return this.client.makeRequest('tx', validatedParams, jsonrpc_types_1.TransactionResponseSchema);
    }
    /**
     * Send a signed transaction
     */
    async sendTransaction(params) {
        const validatedParams = jsonrpc_types_1.SendTransactionRequestSchema.parse(params);
        return this.client.makeRequest('send_tx', validatedParams, jsonrpc_types_1.SendTransactionResponseSchema);
    }
    /**
     * Broadcast a signed transaction (async)
     */
    async broadcastTransaction(params) {
        const validatedParams = jsonrpc_types_1.BroadcastTransactionRequestSchema.parse(params);
        return this.client.makeRequest('broadcast_tx_async', validatedParams, jsonrpc_types_1.BroadcastTransactionResponseSchema);
    }
    /**
     * Broadcast a signed transaction and wait for commit
     */
    async broadcastTransactionCommit(params) {
        const validatedParams = jsonrpc_types_1.BroadcastTransactionRequestSchema.parse(params);
        return this.client.makeRequest('broadcast_tx_commit', validatedParams, jsonrpc_types_1.TransactionResponseSchema);
    }
    /**
     * Get transaction by hash with sender ID
     */
    async getTransactionByHash(transactionHash, senderId) {
        return this.getTransaction({ transactionHash, senderId });
    }
    /**
     * Get transaction status only
     */
    async getTransactionStatus(transactionHash, senderId) {
        return this.getTransaction({
            transactionHash,
            senderId,
            waitUntil: 'NONE'
        });
    }
    /**
     * Wait for transaction to be included in a block
     */
    async waitForTransaction(transactionHash, senderId) {
        return this.getTransaction({
            transactionHash,
            senderId,
            waitUntil: 'INCLUDED_FINAL'
        });
    }
    /**
     * Wait for transaction to be fully executed
     */
    async waitForTransactionExecution(transactionHash, senderId) {
        return this.getTransaction({
            transactionHash,
            senderId,
            waitUntil: 'EXECUTED'
        });
    }
}
exports.TransactionMethods = TransactionMethods;
