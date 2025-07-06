"use strict";
/**
 * Accounts-related methods for NEAR JSON-RPC client
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsMethods = void 0;
const jsonrpc_types_1 = require("@near-js/jsonrpc-types");
class AccountsMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    async query(params) {
        const validatedParams = jsonrpc_types_1.RpcQueryRequestSchema.parse(params);
        return this.client.makeRequest('Query', validatedParams, jsonrpc_types_1.RpcQueryResponseSchema);
    }
}
exports.AccountsMethods = AccountsMethods;
