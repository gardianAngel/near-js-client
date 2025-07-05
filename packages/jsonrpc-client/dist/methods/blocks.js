"use strict";
/**
 * Block-related methods for NEAR JSON-RPC client
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockMethods = void 0;
const jsonrpc_types_1 = require("@near-js/jsonrpc-types");
class BlockMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Get block information
     */
    async getBlock(params) {
        const validatedParams = jsonrpc_types_1.BlockQuerySchema.parse(params);
        return this.client.makeRequest('block', validatedParams, jsonrpc_types_1.BlockResponseSchema);
    }
    /**
     * Get chunk information
     */
    async getChunk(params) {
        const validatedParams = jsonrpc_types_1.ChunkQuerySchema.parse(params);
        return this.client.makeRequest('chunk', validatedParams, jsonrpc_types_1.ChunkResponseSchema);
    }
    /**
     * Get block changes
     */
    async getBlockChanges(params) {
        const validatedParams = jsonrpc_types_1.BlockChangesQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTAL_changes_in_block', validatedParams, jsonrpc_types_1.BlockChangesResponseSchema);
    }
    /**
     * Get latest block
     */
    async getLatestBlock() {
        return this.getBlock({ finality: 'final' });
    }
    /**
     * Get block by height
     */
    async getBlockByHeight(height) {
        return this.getBlock({ blockId: height });
    }
    /**
     * Get block by hash
     */
    async getBlockByHash(hash) {
        return this.getBlock({ blockId: hash });
    }
}
exports.BlockMethods = BlockMethods;
