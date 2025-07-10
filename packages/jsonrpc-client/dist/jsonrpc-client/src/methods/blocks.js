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
    async changesInBlock(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALChangesInBlockRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALChangesInBlock', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALChangesInBlockResponseSchema);
    }
    async lightClientBlockProof(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALLightClientBlockProofRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALLightClientBlockProof', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALLightClientBlockProofResponseSchema);
    }
    async block(params) {
        const validatedParams = jsonrpc_types_1.RpcBlockRequestSchema.parse(params);
        return this.client.makeRequest('block', validatedParams, jsonrpc_types_1.RpcBlockResponseSchema);
    }
    async chunk(params) {
        const validatedParams = jsonrpc_types_1.RpcChunkRequestSchema.parse(params);
        return this.client.makeRequest('chunk', validatedParams, jsonrpc_types_1.RpcChunkResponseSchema);
    }
    async nextLightClientBlock(params) {
        const validatedParams = jsonrpc_types_1.RpcNextLightClientBlockRequestSchema.parse(params);
        return this.client.makeRequest('nextLightClientBlock', validatedParams, jsonrpc_types_1.RpcNextLightClientBlockResponseSchema);
    }
    async getLatestBlock() {
        return this.client.makeRequest('block', { finality: 'final' }, jsonrpc_types_1.RpcBlockResponseSchema);
    }
}
exports.BlocksMethods = BlocksMethods;
