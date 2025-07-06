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
        const validatedParams = jsonrpc_types_1.ChangesinblockQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALchangesinblock', validatedParams, jsonrpc_types_1.ChangesinblockResponseSchema);
    }
    async lightclientblockproof(params) {
        const validatedParams = jsonrpc_types_1.LightclientblockproofQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALlightclientblockproof', validatedParams, jsonrpc_types_1.LightclientblockproofResponseSchema);
    }
    async block(params) {
        const validatedParams = jsonrpc_types_1.BlockQuerySchema.parse(params);
        return this.client.makeRequest('Block', validatedParams, jsonrpc_types_1.BlockResponseSchema);
    }
    async chunk(params) {
        const validatedParams = jsonrpc_types_1.ChunkQuerySchema.parse(params);
        return this.client.makeRequest('Chunk', validatedParams, jsonrpc_types_1.ChunkResponseSchema);
    }
    async nextlightclientblock(params) {
        const validatedParams = jsonrpc_types_1.NextlightclientblockQuerySchema.parse(params);
        return this.client.makeRequest('Nextlightclientblock', validatedParams, jsonrpc_types_1.NextlightclientblockResponseSchema);
    }
}
exports.BlocksMethods = BlocksMethods;
