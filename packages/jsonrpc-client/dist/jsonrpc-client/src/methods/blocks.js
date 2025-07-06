"use strict";
/**
 * Blocks-related methods for NEAR JSON-RPC client
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlocksMethods = void 0;
const jsonrpc_types_1 = require("@near-js/jsonrpc-types");
class BlocksMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    async changesinblock(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALchangesinblockRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALchangesinblock', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALchangesinblockResponseSchema);
    }
    async lightclientblockproof(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALlightclientblockproofRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALlightclientblockproof', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALlightclientblockproofResponseSchema);
    }
    async block(params) {
        const validatedParams = jsonrpc_types_1.RpcBlockRequestSchema.parse(params);
        return this.client.makeRequest('Block', validatedParams, jsonrpc_types_1.RpcBlockResponseSchema);
    }
    async chunk(params) {
        const validatedParams = jsonrpc_types_1.RpcChunkRequestSchema.parse(params);
        return this.client.makeRequest('Chunk', validatedParams, jsonrpc_types_1.RpcChunkResponseSchema);
    }
    async nextlightclientblock(params) {
        const validatedParams = jsonrpc_types_1.RpcNextlightclientblockRequestSchema.parse(params);
        return this.client.makeRequest('Nextlightclientblock', validatedParams, jsonrpc_types_1.RpcNextlightclientblockResponseSchema);
    }
}
exports.BlocksMethods = BlocksMethods;
