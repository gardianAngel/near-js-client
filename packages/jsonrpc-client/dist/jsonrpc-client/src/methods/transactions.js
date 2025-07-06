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
    async txstatus(params) {
        const validatedParams = jsonrpc_types_1.TxstatusQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALtxstatus', validatedParams, jsonrpc_types_1.TxstatusResponseSchema);
    }
    async broadcasttxasync(params) {
        const validatedParams = jsonrpc_types_1.BroadcasttxasyncQuerySchema.parse(params);
        return this.client.makeRequest('Broadcasttxasync', validatedParams, jsonrpc_types_1.BroadcasttxasyncResponseSchema);
    }
    async broadcasttxcommit(params) {
        const validatedParams = jsonrpc_types_1.BroadcasttxcommitQuerySchema.parse(params);
        return this.client.makeRequest('Broadcasttxcommit', validatedParams, jsonrpc_types_1.BroadcasttxcommitResponseSchema);
    }
    async sendtx(params) {
        const validatedParams = jsonrpc_types_1.SendtxQuerySchema.parse(params);
        return this.client.makeRequest('Sendtx', validatedParams, jsonrpc_types_1.SendtxResponseSchema);
    }
    async tx(params) {
        const validatedParams = jsonrpc_types_1.TxQuerySchema.parse(params);
        return this.client.makeRequest('Tx', validatedParams, jsonrpc_types_1.TxResponseSchema);
    }
}
exports.TransactionsMethods = TransactionsMethods;
