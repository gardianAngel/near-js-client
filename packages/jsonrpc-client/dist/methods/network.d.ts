/**
 * Network-related methods for NEAR JSON-RPC client
 */
import { z } from 'zod';
import type { NearJsonRpcClient } from '../client';
export declare const NetworkStatusSchema: z.ZodObject<{
    chainId: z.ZodString;
    rpcAddr: z.ZodString;
    syncInfo: z.ZodObject<{
        latestBlockHash: z.ZodString;
        latestBlockHeight: z.ZodNumber;
        latestBlockTime: z.ZodString;
        latestStateRoot: z.ZodString;
        syncing: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        latestBlockHash: string;
        latestBlockHeight: number;
        latestBlockTime: string;
        latestStateRoot: string;
        syncing: boolean;
    }, {
        latestBlockHash: string;
        latestBlockHeight: number;
        latestBlockTime: string;
        latestStateRoot: string;
        syncing: boolean;
    }>;
    validators: z.ZodArray<z.ZodObject<{
        accountId: z.ZodString;
        isSlashed: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        accountId: string;
        isSlashed: boolean;
    }, {
        accountId: string;
        isSlashed: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    chainId: string;
    rpcAddr: string;
    syncInfo: {
        latestBlockHash: string;
        latestBlockHeight: number;
        latestBlockTime: string;
        latestStateRoot: string;
        syncing: boolean;
    };
    validators: {
        accountId: string;
        isSlashed: boolean;
    }[];
}, {
    chainId: string;
    rpcAddr: string;
    syncInfo: {
        latestBlockHash: string;
        latestBlockHeight: number;
        latestBlockTime: string;
        latestStateRoot: string;
        syncing: boolean;
    };
    validators: {
        accountId: string;
        isSlashed: boolean;
    }[];
}>;
export declare const GenesisConfigSchema: z.ZodObject<{
    protocolVersion: z.ZodNumber;
    genesisTime: z.ZodString;
    chainId: z.ZodString;
    genesisHeight: z.ZodNumber;
    numBlockProducerSeats: z.ZodNumber;
    numBlockProducerSeatsPerShard: z.ZodArray<z.ZodNumber, "many">;
    avgHiddenValidatorSeatsPerShard: z.ZodArray<z.ZodNumber, "many">;
    dynamicResharding: z.ZodBoolean;
    protocolUpgradeStakeThreshold: z.ZodArray<z.ZodNumber, "many">;
    epochLength: z.ZodNumber;
    gasLimit: z.ZodNumber;
    minGasPrice: z.ZodString;
    maxGasPrice: z.ZodString;
    blockProducerKickoutThreshold: z.ZodNumber;
    chunkProducerKickoutThreshold: z.ZodNumber;
    onlineMinThreshold: z.ZodArray<z.ZodNumber, "many">;
    onlineMaxThreshold: z.ZodArray<z.ZodNumber, "many">;
    gasPriceAdjustmentRate: z.ZodArray<z.ZodNumber, "many">;
    runtimeConfig: z.ZodObject<{
        storageAmountPerByte: z.ZodString;
        transactionCosts: z.ZodObject<{
            actionCreationConfig: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            actionReceiptCreationConfig: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            dataReceiptCreationConfig: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            burnt_gas_reward: z.ZodArray<z.ZodNumber, "many">;
            pessimistic_gas_price_inflation_ratio: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            actionCreationConfig: Record<string, unknown>;
            actionReceiptCreationConfig: Record<string, unknown>;
            dataReceiptCreationConfig: Record<string, unknown>;
            burnt_gas_reward: number[];
            pessimistic_gas_price_inflation_ratio: number[];
        }, {
            actionCreationConfig: Record<string, unknown>;
            actionReceiptCreationConfig: Record<string, unknown>;
            dataReceiptCreationConfig: Record<string, unknown>;
            burnt_gas_reward: number[];
            pessimistic_gas_price_inflation_ratio: number[];
        }>;
    }, "strip", z.ZodTypeAny, {
        storageAmountPerByte: string;
        transactionCosts: {
            actionCreationConfig: Record<string, unknown>;
            actionReceiptCreationConfig: Record<string, unknown>;
            dataReceiptCreationConfig: Record<string, unknown>;
            burnt_gas_reward: number[];
            pessimistic_gas_price_inflation_ratio: number[];
        };
    }, {
        storageAmountPerByte: string;
        transactionCosts: {
            actionCreationConfig: Record<string, unknown>;
            actionReceiptCreationConfig: Record<string, unknown>;
            dataReceiptCreationConfig: Record<string, unknown>;
            burnt_gas_reward: number[];
            pessimistic_gas_price_inflation_ratio: number[];
        };
    }>;
    validators: z.ZodArray<z.ZodObject<{
        accountId: z.ZodString;
        publicKey: z.ZodString;
        amount: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        accountId: string;
        publicKey: string;
        amount: string;
    }, {
        accountId: string;
        publicKey: string;
        amount: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    gasLimit: number;
    chainId: string;
    validators: {
        accountId: string;
        publicKey: string;
        amount: string;
    }[];
    protocolVersion: number;
    genesisTime: string;
    genesisHeight: number;
    numBlockProducerSeats: number;
    numBlockProducerSeatsPerShard: number[];
    avgHiddenValidatorSeatsPerShard: number[];
    dynamicResharding: boolean;
    protocolUpgradeStakeThreshold: number[];
    epochLength: number;
    minGasPrice: string;
    maxGasPrice: string;
    blockProducerKickoutThreshold: number;
    chunkProducerKickoutThreshold: number;
    onlineMinThreshold: number[];
    onlineMaxThreshold: number[];
    gasPriceAdjustmentRate: number[];
    runtimeConfig: {
        storageAmountPerByte: string;
        transactionCosts: {
            actionCreationConfig: Record<string, unknown>;
            actionReceiptCreationConfig: Record<string, unknown>;
            dataReceiptCreationConfig: Record<string, unknown>;
            burnt_gas_reward: number[];
            pessimistic_gas_price_inflation_ratio: number[];
        };
    };
}, {
    gasLimit: number;
    chainId: string;
    validators: {
        accountId: string;
        publicKey: string;
        amount: string;
    }[];
    protocolVersion: number;
    genesisTime: string;
    genesisHeight: number;
    numBlockProducerSeats: number;
    numBlockProducerSeatsPerShard: number[];
    avgHiddenValidatorSeatsPerShard: number[];
    dynamicResharding: boolean;
    protocolUpgradeStakeThreshold: number[];
    epochLength: number;
    minGasPrice: string;
    maxGasPrice: string;
    blockProducerKickoutThreshold: number;
    chunkProducerKickoutThreshold: number;
    onlineMinThreshold: number[];
    onlineMaxThreshold: number[];
    gasPriceAdjustmentRate: number[];
    runtimeConfig: {
        storageAmountPerByte: string;
        transactionCosts: {
            actionCreationConfig: Record<string, unknown>;
            actionReceiptCreationConfig: Record<string, unknown>;
            dataReceiptCreationConfig: Record<string, unknown>;
            burnt_gas_reward: number[];
            pessimistic_gas_price_inflation_ratio: number[];
        };
    };
}>;
export declare const GasEstimateSchema: z.ZodObject<{
    gasUsed: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    gasUsed: number;
}, {
    gasUsed: number;
}>;
export declare const ProtocolConfigSchema: z.ZodObject<{
    protocolVersion: z.ZodNumber;
    genesisTime: z.ZodString;
    chainId: z.ZodString;
    genesisHeight: z.ZodNumber;
    numBlockProducerSeats: z.ZodNumber;
    numBlockProducerSeatsPerShard: z.ZodArray<z.ZodNumber, "many">;
    avgHiddenValidatorSeatsPerShard: z.ZodArray<z.ZodNumber, "many">;
    dynamicResharding: z.ZodBoolean;
    protocolUpgradeStakeThreshold: z.ZodArray<z.ZodNumber, "many">;
    epochLength: z.ZodNumber;
    gasLimit: z.ZodNumber;
    minGasPrice: z.ZodString;
    maxGasPrice: z.ZodString;
    blockProducerKickoutThreshold: z.ZodNumber;
    chunkProducerKickoutThreshold: z.ZodNumber;
    onlineMinThreshold: z.ZodArray<z.ZodNumber, "many">;
    onlineMaxThreshold: z.ZodArray<z.ZodNumber, "many">;
    gasPriceAdjustmentRate: z.ZodArray<z.ZodNumber, "many">;
    runtimeConfig: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    gasLimit: number;
    chainId: string;
    protocolVersion: number;
    genesisTime: string;
    genesisHeight: number;
    numBlockProducerSeats: number;
    numBlockProducerSeatsPerShard: number[];
    avgHiddenValidatorSeatsPerShard: number[];
    dynamicResharding: boolean;
    protocolUpgradeStakeThreshold: number[];
    epochLength: number;
    minGasPrice: string;
    maxGasPrice: string;
    blockProducerKickoutThreshold: number;
    chunkProducerKickoutThreshold: number;
    onlineMinThreshold: number[];
    onlineMaxThreshold: number[];
    gasPriceAdjustmentRate: number[];
    runtimeConfig: Record<string, unknown>;
}, {
    gasLimit: number;
    chainId: string;
    protocolVersion: number;
    genesisTime: string;
    genesisHeight: number;
    numBlockProducerSeats: number;
    numBlockProducerSeatsPerShard: number[];
    avgHiddenValidatorSeatsPerShard: number[];
    dynamicResharding: boolean;
    protocolUpgradeStakeThreshold: number[];
    epochLength: number;
    minGasPrice: string;
    maxGasPrice: string;
    blockProducerKickoutThreshold: number;
    chunkProducerKickoutThreshold: number;
    onlineMinThreshold: number[];
    onlineMaxThreshold: number[];
    gasPriceAdjustmentRate: number[];
    runtimeConfig: Record<string, unknown>;
}>;
export type NetworkStatus = z.infer<typeof NetworkStatusSchema>;
export type GenesisConfig = z.infer<typeof GenesisConfigSchema>;
export type GasEstimate = z.infer<typeof GasEstimateSchema>;
export type ProtocolConfig = z.infer<typeof ProtocolConfigSchema>;
export declare class NetworkMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    /**
     * Get network status information
     */
    getNetworkStatus(): Promise<NetworkStatus>;
    /**
     * Get genesis configuration
     */
    getGenesisConfig(): Promise<GenesisConfig>;
    /**
     * Get protocol configuration
     */
    getProtocolConfig(params?: {
        blockId?: string | number;
    }): Promise<ProtocolConfig>;
    /**
     * Estimate gas price
     */
    estimateGasPrice(params: {
        blockId?: string | number;
    }): Promise<GasEstimate>;
    /**
     * Get current gas price
     */
    getGasPrice(): Promise<string>;
    /**
     * Get network info
     */
    getNetworkInfo(): Promise<{
        chainId: string;
        latestBlockHeight: number;
        latestBlockHash: string;
        syncing: boolean;
    }>;
    /**
     * Check if node is syncing
     */
    isSyncing(): Promise<boolean>;
    /**
     * Get latest block height
     */
    getLatestBlockHeight(): Promise<number>;
    /**
     * Get chain ID
     */
    getChainId(): Promise<string>;
    /**
     * Get validators
     */
    getValidators(): Promise<Array<{
        accountId: string;
        isSlashed: boolean;
    }>>;
}
