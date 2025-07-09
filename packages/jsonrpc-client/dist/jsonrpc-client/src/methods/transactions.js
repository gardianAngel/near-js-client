"use strict";
/**
 * Transactions-related methods for NEAR JSON-RPC client
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsMethods = void 0;
const jsonrpc_types_1 = require("@near-js/jsonrpc-types");
class TransactionsMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    async txStatus(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALTxStatusRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALTxStatus', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALTxStatusResponseSchema);
    }
    async broadcastTxAsync(params) {
        const validatedParams = jsonrpc_types_1.RpcBroadcastTxAsyncRequestSchema.parse(params);
        return this.client.makeRequest('broadcastTxAsync', validatedParams, jsonrpc_types_1.RpcBroadcastTxAsyncResponseSchema);
    }
    async broadcastTxCommit(params) {
        const validatedParams = jsonrpc_types_1.RpcBroadcastTxCommitRequestSchema.parse(params);
        return this.client.makeRequest('broadcastTxCommit', validatedParams, jsonrpc_types_1.RpcBroadcastTxCommitResponseSchema);
    }
    async sendTx(params) {
        const validatedParams = jsonrpc_types_1.RpcSendTxRequestSchema.parse(params);
        return this.client.makeRequest('sendTx', validatedParams, jsonrpc_types_1.RpcSendTxResponseSchema);
    }
    async tx(params) {
        const validatedParams = jsonrpc_types_1.RpcTransactionStatusRequestSchema.parse(params);
        return this.client.makeRequest('tx', validatedParams, jsonrpc_types_1.RpcTransactionResponseSchema);
    }
}
exports.TransactionsMethods = TransactionsMethods;
