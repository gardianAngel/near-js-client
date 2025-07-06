"use strict";
/**
 * Network-related methods for NEAR JSON-RPC client
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkMethods = void 0;
const jsonrpc_types_1 = require("@near-js/jsonrpc-types");
class NetworkMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Get network status
     */
    async status() {
        return this.client.makeRequest('status', {}, jsonrpc_types_1.z.any());
    }
    /**
     * Get network info
     */
    async networkInfo() {
        return this.client.makeRequest('network_info', {}, jsonrpc_types_1.z.any());
    }
    /**
     * Get current validators
     */
    async validators(params = {}) {
        return this.client.makeRequest('validators', params, jsonrpc_types_1.z.any());
    }
    /**
     * Get gas price
     */
    async gasPrice(params = {}) {
        return this.client.makeRequest('gas_price', params, jsonrpc_types_1.z.any());
    }
    /**
     * Get protocol config
     */
    async protocolConfig(params = {}) {
        return this.client.makeRequest('EXPERIMENTAL_protocol_config', params, jsonrpc_types_1.z.any());
    }
    /**
     * Get genesis config
     */
    async genesisConfig() {
        return this.client.makeRequest('EXPERIMENTAL_genesis_config', {}, jsonrpc_types_1.z.any());
    }
}
exports.NetworkMethods = NetworkMethods;
