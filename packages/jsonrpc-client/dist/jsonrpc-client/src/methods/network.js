"use strict";
/**
 * Network-related methods for NEAR JSON-RPC client
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkMethods = exports.ProtocolConfigSchema = exports.GasEstimateSchema = exports.GenesisConfigSchema = exports.NetworkStatusSchema = void 0;
const zod_1 = require("zod");
// Network status types and schemas
exports.NetworkStatusSchema = zod_1.z.object({
    chainId: zod_1.z.string(),
    rpcAddr: zod_1.z.string(),
    syncInfo: zod_1.z.object({
        latestBlockHash: zod_1.z.string(),
        latestBlockHeight: zod_1.z.number(),
        latestBlockTime: zod_1.z.string(),
        latestStateRoot: zod_1.z.string(),
        syncing: zod_1.z.boolean(),
    }),
    validators: zod_1.z.array(zod_1.z.object({
        accountId: zod_1.z.string(),
        isSlashed: zod_1.z.boolean(),
    })),
});
exports.GenesisConfigSchema = zod_1.z.object({
    protocolVersion: zod_1.z.number(),
    genesisTime: zod_1.z.string(),
    chainId: zod_1.z.string(),
    genesisHeight: zod_1.z.number(),
    numBlockProducerSeats: zod_1.z.number(),
    numBlockProducerSeatsPerShard: zod_1.z.array(zod_1.z.number()),
    avgHiddenValidatorSeatsPerShard: zod_1.z.array(zod_1.z.number()),
    dynamicResharding: zod_1.z.boolean(),
    protocolUpgradeStakeThreshold: zod_1.z.array(zod_1.z.number()),
    epochLength: zod_1.z.number(),
    gasLimit: zod_1.z.number(),
    minGasPrice: zod_1.z.string(),
    maxGasPrice: zod_1.z.string(),
    blockProducerKickoutThreshold: zod_1.z.number(),
    chunkProducerKickoutThreshold: zod_1.z.number(),
    onlineMinThreshold: zod_1.z.array(zod_1.z.number()),
    onlineMaxThreshold: zod_1.z.array(zod_1.z.number()),
    gasPriceAdjustmentRate: zod_1.z.array(zod_1.z.number()),
    runtimeConfig: zod_1.z.object({
        storageAmountPerByte: zod_1.z.string(),
        transactionCosts: zod_1.z.object({
            actionCreationConfig: zod_1.z.record(zod_1.z.unknown()),
            actionReceiptCreationConfig: zod_1.z.record(zod_1.z.unknown()),
            dataReceiptCreationConfig: zod_1.z.record(zod_1.z.unknown()),
            burnt_gas_reward: zod_1.z.array(zod_1.z.number()),
            pessimistic_gas_price_inflation_ratio: zod_1.z.array(zod_1.z.number()),
        }),
    }),
    validators: zod_1.z.array(zod_1.z.object({
        accountId: zod_1.z.string(),
        publicKey: zod_1.z.string(),
        amount: zod_1.z.string(),
    })),
});
exports.GasEstimateSchema = zod_1.z.object({
    gasUsed: zod_1.z.number(),
});
exports.ProtocolConfigSchema = zod_1.z.object({
    protocolVersion: zod_1.z.number(),
    genesisTime: zod_1.z.string(),
    chainId: zod_1.z.string(),
    genesisHeight: zod_1.z.number(),
    numBlockProducerSeats: zod_1.z.number(),
    numBlockProducerSeatsPerShard: zod_1.z.array(zod_1.z.number()),
    avgHiddenValidatorSeatsPerShard: zod_1.z.array(zod_1.z.number()),
    dynamicResharding: zod_1.z.boolean(),
    protocolUpgradeStakeThreshold: zod_1.z.array(zod_1.z.number()),
    epochLength: zod_1.z.number(),
    gasLimit: zod_1.z.number(),
    minGasPrice: zod_1.z.string(),
    maxGasPrice: zod_1.z.string(),
    blockProducerKickoutThreshold: zod_1.z.number(),
    chunkProducerKickoutThreshold: zod_1.z.number(),
    onlineMinThreshold: zod_1.z.array(zod_1.z.number()),
    onlineMaxThreshold: zod_1.z.array(zod_1.z.number()),
    gasPriceAdjustmentRate: zod_1.z.array(zod_1.z.number()),
    runtimeConfig: zod_1.z.record(zod_1.z.unknown()),
});
class NetworkMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Get network status information
     */
    async getNetworkStatus() {
        return this.client.makeRequest('status', [], exports.NetworkStatusSchema);
    }
    /**
     * Get genesis configuration
     */
    async getGenesisConfig() {
        return this.client.makeRequest('EXPERIMENTAL_genesis_config', [], exports.GenesisConfigSchema);
    }
    /**
     * Get protocol configuration
     */
    async getProtocolConfig(params) {
        return this.client.makeRequest('EXPERIMENTAL_protocol_config', params || {}, exports.ProtocolConfigSchema);
    }
    /**
     * Estimate gas price
     */
    async estimateGasPrice(params) {
        return this.client.makeRequest('gas_price', params, exports.GasEstimateSchema);
    }
    /**
     * Get current gas price
     */
    async getGasPrice() {
        const result = await this.client.makeRequest('gas_price', [null], zod_1.z.string());
        return result;
    }
    /**
     * Get network info
     */
    async getNetworkInfo() {
        const status = await this.getNetworkStatus();
        return {
            chainId: status.chainId,
            latestBlockHeight: status.syncInfo.latestBlockHeight,
            latestBlockHash: status.syncInfo.latestBlockHash,
            syncing: status.syncInfo.syncing,
        };
    }
    /**
     * Check if node is syncing
     */
    async isSyncing() {
        const status = await this.getNetworkStatus();
        return status.syncInfo.syncing;
    }
    /**
     * Get latest block height
     */
    async getLatestBlockHeight() {
        const status = await this.getNetworkStatus();
        return status.syncInfo.latestBlockHeight;
    }
    /**
     * Get chain ID
     */
    async getChainId() {
        const status = await this.getNetworkStatus();
        return status.chainId;
    }
    /**
     * Get validators
     */
    async getValidators() {
        const status = await this.getNetworkStatus();
        return status.validators;
    }
}
exports.NetworkMethods = NetworkMethods;
