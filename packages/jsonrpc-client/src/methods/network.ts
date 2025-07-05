/**
 * Network-related methods for NEAR JSON-RPC client
 */

import { z } from 'zod';
import type { NearJsonRpcClient } from '../client';

// Network status types and schemas
export const NetworkStatusSchema = z.object({
  chainId: z.string(),
  rpcAddr: z.string(),
  syncInfo: z.object({
    latestBlockHash: z.string(),
    latestBlockHeight: z.number(),
    latestBlockTime: z.string(),
    latestStateRoot: z.string(),
    syncing: z.boolean(),
  }),
  validators: z.array(z.object({
    accountId: z.string(),
    isSlashed: z.boolean(),
  })),
});

export const GenesisConfigSchema = z.object({
  protocolVersion: z.number(),
  genesisTime: z.string(),
  chainId: z.string(),
  genesisHeight: z.number(),
  numBlockProducerSeats: z.number(),
  numBlockProducerSeatsPerShard: z.array(z.number()),
  avgHiddenValidatorSeatsPerShard: z.array(z.number()),
  dynamicResharding: z.boolean(),
  protocolUpgradeStakeThreshold: z.array(z.number()),
  epochLength: z.number(),
  gasLimit: z.number(),
  minGasPrice: z.string(),
  maxGasPrice: z.string(),
  blockProducerKickoutThreshold: z.number(),
  chunkProducerKickoutThreshold: z.number(),
  onlineMinThreshold: z.array(z.number()),
  onlineMaxThreshold: z.array(z.number()),
  gasPriceAdjustmentRate: z.array(z.number()),
  runtimeConfig: z.object({
    storageAmountPerByte: z.string(),
    transactionCosts: z.object({
      actionCreationConfig: z.record(z.unknown()),
      actionReceiptCreationConfig: z.record(z.unknown()),
      dataReceiptCreationConfig: z.record(z.unknown()),
      burnt_gas_reward: z.array(z.number()),
      pessimistic_gas_price_inflation_ratio: z.array(z.number()),
    }),
  }),
  validators: z.array(z.object({
    accountId: z.string(),
    publicKey: z.string(),
    amount: z.string(),
  })),
});

export const GasEstimateSchema = z.object({
  gasUsed: z.number(),
});

export const ProtocolConfigSchema = z.object({
  protocolVersion: z.number(),
  genesisTime: z.string(),
  chainId: z.string(),
  genesisHeight: z.number(),
  numBlockProducerSeats: z.number(),
  numBlockProducerSeatsPerShard: z.array(z.number()),
  avgHiddenValidatorSeatsPerShard: z.array(z.number()),
  dynamicResharding: z.boolean(),
  protocolUpgradeStakeThreshold: z.array(z.number()),
  epochLength: z.number(),
  gasLimit: z.number(),
  minGasPrice: z.string(),
  maxGasPrice: z.string(),
  blockProducerKickoutThreshold: z.number(),
  chunkProducerKickoutThreshold: z.number(),
  onlineMinThreshold: z.array(z.number()),
  onlineMaxThreshold: z.array(z.number()),
  gasPriceAdjustmentRate: z.array(z.number()),
  runtimeConfig: z.record(z.unknown()),
});

export type NetworkStatus = z.infer<typeof NetworkStatusSchema>;
export type GenesisConfig = z.infer<typeof GenesisConfigSchema>;
export type GasEstimate = z.infer<typeof GasEstimateSchema>;
export type ProtocolConfig = z.infer<typeof ProtocolConfigSchema>;

export class NetworkMethods {
  constructor(private client: NearJsonRpcClient) {}

  /**
   * Get network status information
   */
  async getNetworkStatus(): Promise<NetworkStatus> {
    return this.client.makeRequest('status', [], NetworkStatusSchema);
  }

  /**
   * Get genesis configuration
   */
  async getGenesisConfig(): Promise<GenesisConfig> {
    return this.client.makeRequest('EXPERIMENTAL_genesis_config', [], GenesisConfigSchema);
  }

  /**
   * Get protocol configuration
   */
  async getProtocolConfig(params?: { blockId?: string | number }): Promise<ProtocolConfig> {
    return this.client.makeRequest('EXPERIMENTAL_protocol_config', params || {}, ProtocolConfigSchema);
  }

  /**
   * Estimate gas price
   */
  async estimateGasPrice(params: { blockId?: string | number }): Promise<GasEstimate> {
    return this.client.makeRequest('gas_price', params, GasEstimateSchema);
  }

  /**
   * Get current gas price
   */
  async getGasPrice(): Promise<string> {
    const result = await this.client.makeRequest('gas_price', [null], z.string());
    return result;
  }

  /**
   * Get network info
   */
  async getNetworkInfo(): Promise<{
    chainId: string;
    latestBlockHeight: number;
    latestBlockHash: string;
    syncing: boolean;
  }> {
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
  async isSyncing(): Promise<boolean> {
    const status = await this.getNetworkStatus();
    return status.syncInfo.syncing;
  }

  /**
   * Get latest block height
   */
  async getLatestBlockHeight(): Promise<number> {
    const status = await this.getNetworkStatus();
    return status.syncInfo.latestBlockHeight;
  }

  /**
   * Get chain ID
   */
  async getChainId(): Promise<string> {
    const status = await this.getNetworkStatus();
    return status.chainId;
  }

  /**
   * Get validators
   */
  async getValidators(): Promise<Array<{ accountId: string; isSlashed: boolean }>> {
    const status = await this.getNetworkStatus();
    return status.validators;
  }
}
