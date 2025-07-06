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
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALtxstatusRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALtxstatus', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALtxstatusResponseSchema);
    }
    async broadcasttxasync(params) {
        const validatedParams = jsonrpc_types_1.RpcBroadcasttxasyncRequestSchema.parse(params);
        return this.client.makeRequest('Broadcasttxasync', validatedParams, jsonrpc_types_1.RpcBroadcasttxasyncResponseSchema);
    }
    async broadcasttxcommit(params) {
        const validatedParams = jsonrpc_types_1.RpcBroadcasttxcommitRequestSchema.parse(params);
        return this.client.makeRequest('Broadcasttxcommit', validatedParams, jsonrpc_types_1.RpcBroadcasttxcommitResponseSchema);
    }
    async sendtx(params) {
        const validatedParams = jsonrpc_types_1.RpcSendtxRequestSchema.parse(params);
        return this.client.makeRequest('Sendtx', validatedParams, jsonrpc_types_1.RpcSendtxResponseSchema);
    }
    async tx(params) {
        const validatedParams = jsonrpc_types_1.RpcTxRequestSchema.parse(params);
        return this.client.makeRequest('Tx', validatedParams, jsonrpc_types_1.RpcTxResponseSchema);
    }
}
exports.TransactionsMethods = TransactionsMethods;
