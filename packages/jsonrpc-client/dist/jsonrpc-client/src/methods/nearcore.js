"use strict";
/**
 * Generated RPC methods for NEAR Protocol JSON-RPC API
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NearcoreMethods = void 0;
class NearcoreMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Execute EXPERIMENTAL_changes RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALChanges(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_changes', params);
        return result;
    }
    /**
     * Execute EXPERIMENTAL_changes_in_block RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALChangesInBlock(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_changes_in_block', params);
        return result;
    }
    /**
     * Execute EXPERIMENTAL_congestion_level RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALCongestionLevel(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_congestion_level', params);
        return result;
    }
    /**
     * Execute EXPERIMENTAL_genesis_config RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALGenesisConfig(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_genesis_config', params);
        return result;
    }
    /**
     * Execute EXPERIMENTAL_light_client_block_proof RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALLightClientBlockProof(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_light_client_block_proof', params);
        return result;
    }
    /**
     * Execute EXPERIMENTAL_light_client_proof RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALLightClientProof(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_light_client_proof', params);
        return result;
    }
    /**
     * Execute EXPERIMENTAL_maintenance_windows RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALMaintenanceWindows(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_maintenance_windows', params);
        return result;
    }
    /**
     * Execute EXPERIMENTAL_protocol_config RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALProtocolConfig(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_protocol_config', params);
        return result;
    }
    /**
     * Execute EXPERIMENTAL_receipt RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALReceipt(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_receipt', params);
        return result;
    }
    /**
     * Execute EXPERIMENTAL_split_storage_info RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALSplitStorageInfo(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_split_storage_info', params);
        return result;
    }
    /**
     * Execute EXPERIMENTAL_tx_status RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALTxStatus(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_tx_status', params);
        return result;
    }
    /**
     * Execute EXPERIMENTAL_validators_ordered RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async EXPERIMENTALValidatorsOrdered(params = {}) {
        const result = await this.client.request('EXPERIMENTAL_validators_ordered', params);
        return result;
    }
    /**
     * Execute block RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async block(params = {}) {
        const result = await this.client.request('block', params);
        return result;
    }
    /**
     * Execute broadcast_tx_async RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async broadcastTxAsync(params = {}) {
        const result = await this.client.request('broadcast_tx_async', params);
        return result;
    }
    /**
     * Execute broadcast_tx_commit RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async broadcastTxCommit(params = {}) {
        const result = await this.client.request('broadcast_tx_commit', params);
        return result;
    }
    /**
     * Execute changes RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async changes(params = {}) {
        const result = await this.client.request('changes', params);
        return result;
    }
    /**
     * Execute chunk RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async chunk(params = {}) {
        const result = await this.client.request('chunk', params);
        return result;
    }
    /**
     * Execute client_config RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async clientConfig(params = {}) {
        const result = await this.client.request('client_config', params);
        return result;
    }
    /**
     * Execute gas_price RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async gasPrice(params = {}) {
        const result = await this.client.request('gas_price', params);
        return result;
    }
    /**
     * Execute health RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async health(params = {}) {
        const result = await this.client.request('health', params);
        return result;
    }
    /**
     * Execute light_client_proof RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async lightClientProof(params = {}) {
        const result = await this.client.request('light_client_proof', params);
        return result;
    }
    /**
     * Execute network_info RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async networkInfo(params = {}) {
        const result = await this.client.request('network_info', params);
        return result;
    }
    /**
     * Execute next_light_client_block RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async nextLightClientBlock(params = {}) {
        const result = await this.client.request('next_light_client_block', params);
        return result;
    }
    /**
     * Execute query RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async query(params = {}) {
        const result = await this.client.request('query', params);
        return result;
    }
    /**
     * Execute send_tx RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async sendTx(params = {}) {
        const result = await this.client.request('send_tx', params);
        return result;
    }
    /**
     * Execute status RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async status(params = {}) {
        const result = await this.client.request('status', params);
        return result;
    }
    /**
     * Execute tx RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async tx(params = {}) {
        const result = await this.client.request('tx', params);
        return result;
    }
    /**
     * Execute validators RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    async validators(params = {}) {
        const result = await this.client.request('validators', params);
        return result;
    }
}
exports.NearcoreMethods = NearcoreMethods;
