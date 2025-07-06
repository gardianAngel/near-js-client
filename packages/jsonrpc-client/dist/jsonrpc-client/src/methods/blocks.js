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
     * Get block details
     */
    async block(params) {
        return this.client.makeRequest('block', params, jsonrpc_types_1.z.any());
    }
    /**
     * Get latest block
     */
    async getLatestBlock() {
        return this.client.makeRequest('block', { finality: 'final' }, jsonrpc_types_1.z.any());
    }
    /**
     * Get block changes
     */
    async blockChanges(params) {
        return this.client.makeRequest('EXPERIMENTAL_changes_in_block', params, jsonrpc_types_1.z.any());
    }
    /**
     * Get chunk details
     */
    async chunk(params) {
        return this.client.makeRequest('chunk', params, jsonrpc_types_1.z.any());
    }
}
exports.BlockMethods = BlockMethods;
