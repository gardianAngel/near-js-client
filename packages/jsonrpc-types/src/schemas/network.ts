/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';

export const CatchupStatusViewSchema = z.object({
  blocksToCatchup: z.array(z.unknown()).optional(),
  shardSyncStatus: z.record(z.unknown()).optional(),
  syncBlockHash: z.unknown().optional(),
  syncBlockHeight: z.number().optional()
});

export const CurrentEpochValidatorInfoSchema = z.object({
  accountId: z.unknown().optional(),
  isSlashed: z.boolean().optional(),
  numExpectedBlocks: z.number().optional(),
  numExpectedChunks: z.number().optional(),
  numExpectedChunksPerShard: z.array(z.number()).optional(),
  numExpectedEndorsements: z.number().optional(),
  numExpectedEndorsementsPerShard: z.array(z.number()).optional(),
  numProducedBlocks: z.number().optional(),
  numProducedChunks: z.number().optional(),
  numProducedChunksPerShard: z.array(z.number()).optional(),
  numProducedEndorsements: z.number().optional(),
  numProducedEndorsementsPerShard: z.array(z.number()).optional(),
  publicKey: z.unknown().optional(),
  shards: z.array(z.unknown()),
  shardsEndorsed: z.array(z.unknown()).optional(),
  stake: z.string()
});

export const DetailedDebugStatusSchema = z.object({
  blockProductionDelayMillis: z.number().optional(),
  catchupStatus: z.array(z.unknown()).optional(),
  currentHeadStatus: z.unknown().optional(),
  currentHeaderHeadStatus: z.unknown().optional(),
  networkInfo: z.unknown().optional(),
  syncStatus: z.string().optional()
});

export const ExecutionStatusViewSchema = z.unknown();

export const FinalExecutionStatusSchema = z.unknown();

export const GenesisConfigSchema = z.object({
  avgHiddenValidatorSeatsPerShard: z.array(z.number()).optional(),
  blockProducerKickoutThreshold: z.number().optional(),
  chainId: z.string().optional(),
  chunkProducerAssignmentChangesLimit: z.number().optional(),
  chunkProducerKickoutThreshold: z.number().optional(),
  chunkValidatorOnlyKickoutThreshold: z.number().optional(),
  dynamicResharding: z.boolean().optional(),
  epochLength: z.number().optional(),
  fishermenThreshold: z.string().optional(),
  gasLimit: z.number().optional(),
  gasPriceAdjustmentRate: z.array(z.number()).optional(),
  genesisHeight: z.number().optional(),
  genesisTime: z.string().optional(),
  maxGasPrice: z.string().optional(),
  maxInflationRate: z.array(z.number()).optional(),
  maxKickoutStakePerc: z.number().optional(),
  minGasPrice: z.string().optional(),
  minimumStakeDivisor: z.number().optional(),
  minimumStakeRatio: z.array(z.number()).optional(),
  minimumValidatorsPerShard: z.number().optional(),
  numBlockProducerSeats: z.number().optional(),
  numBlockProducerSeatsPerShard: z.array(z.number()).optional(),
  numBlocksPerYear: z.number().optional(),
  numChunkOnlyProducerSeats: z.number().optional(),
  numChunkProducerSeats: z.number().optional(),
  numChunkValidatorSeats: z.number().optional(),
  onlineMaxThreshold: z.array(z.number()).optional(),
  onlineMinThreshold: z.array(z.number()).optional(),
  protocolRewardRate: z.array(z.number()).optional(),
  protocolTreasuryAccount: z.unknown().optional(),
  protocolUpgradeStakeThreshold: z.array(z.number()).optional(),
  protocolVersion: z.number().optional(),
  shardLayout: z.unknown().optional(),
  shuffleShardAssignmentForChunkProducers: z.boolean().optional(),
  targetValidatorMandatesPerShard: z.number().optional(),
  totalSupply: z.string().optional(),
  transactionValidityPeriod: z.number().optional(),
  useProductionConfig: z.boolean().optional(),
  validators: z.array(z.unknown())
});

export const GenesisConfigRequestSchema = z.record(z.unknown());

export const JsonRpcRequestForEXPERIMENTALGenesisConfigSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_genesis_config']),
  params: z.unknown()
});

export const JsonRpcRequestForEXPERIMENTALProtocolConfigSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_protocol_config']),
  params: z.unknown()
});

export const JsonRpcRequestForEXPERIMENTALValidatorsOrderedSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_validators_ordered']),
  params: z.unknown()
});

export const JsonRpcRequestForNetworkInfoSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['network_info']),
  params: z.unknown()
});

export const JsonRpcRequestForStatusSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['status']),
  params: z.unknown()
});

export const JsonRpcRequestForValidatorsSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['validators']),
  params: z.unknown()
});

export const JsonRpcResponseForArrayOfValidatorStakeViewAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForGenesisConfigAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcNetworkInfoResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcProtocolConfigResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcStatusResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcValidatorResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const NetworkInfoViewSchema = z.object({
  connectedPeers: z.array(z.unknown()).optional(),
  knownProducers: z.array(z.unknown()).optional(),
  numConnectedPeers: z.number().optional(),
  peerMaxCount: z.number().optional(),
  tier1AccountsData: z.array(z.unknown()).optional(),
  tier1AccountsKeys: z.array(z.unknown()).optional(),
  tier1Connections: z.array(z.unknown()).optional()
});

export const NextEpochValidatorInfoSchema = z.object({
  accountId: z.unknown().optional(),
  publicKey: z.unknown().optional(),
  shards: z.array(z.unknown()),
  stake: z.string()
});

export const RpcNetworkInfoRequestSchema = z.record(z.unknown());

export const RpcNetworkInfoResponseSchema = z.object({
  activePeers: z.array(z.unknown()).optional(),
  knownProducers: z.array(z.unknown()).optional(),
  numActivePeers: z.number().optional(),
  peerMaxCount: z.number().optional(),
  receivedBytesPerSec: z.number().optional(),
  sentBytesPerSec: z.number().optional()
});

export const RpcProtocolConfigRequestSchema = z.record(z.unknown());

export const RpcProtocolConfigResponseSchema = z.object({
  avgHiddenValidatorSeatsPerShard: z.array(z.number()).optional(),
  blockProducerKickoutThreshold: z.number().optional(),
  chainId: z.string().optional(),
  chunkProducerKickoutThreshold: z.number().optional(),
  chunkValidatorOnlyKickoutThreshold: z.number().optional(),
  dynamicResharding: z.boolean().optional(),
  epochLength: z.number().optional(),
  fishermenThreshold: z.string().optional(),
  gasLimit: z.number().optional(),
  gasPriceAdjustmentRate: z.array(z.number()).optional(),
  genesisHeight: z.number().optional(),
  genesisTime: z.string().optional(),
  maxGasPrice: z.string().optional(),
  maxInflationRate: z.array(z.number()).optional(),
  maxKickoutStakePerc: z.number().optional(),
  minGasPrice: z.string().optional(),
  minimumStakeDivisor: z.number().optional(),
  minimumStakeRatio: z.array(z.number()).optional(),
  minimumValidatorsPerShard: z.number().optional(),
  numBlockProducerSeats: z.number().optional(),
  numBlockProducerSeatsPerShard: z.array(z.number()).optional(),
  numBlocksPerYear: z.number().optional(),
  onlineMaxThreshold: z.array(z.number()).optional(),
  onlineMinThreshold: z.array(z.number()).optional(),
  protocolRewardRate: z.array(z.number()).optional(),
  protocolTreasuryAccount: z.unknown().optional(),
  protocolUpgradeStakeThreshold: z.array(z.number()).optional(),
  protocolVersion: z.number().optional(),
  runtimeConfig: z.unknown().optional(),
  shardLayout: z.unknown().optional(),
  shuffleShardAssignmentForChunkProducers: z.boolean().optional(),
  targetValidatorMandatesPerShard: z.number().optional(),
  transactionValidityPeriod: z.number().optional()
});

export const RpcStatusRequestSchema = z.record(z.unknown());

export const RpcStatusResponseSchema = z.object({
  chainId: z.string().optional(),
  detailedDebugStatus: z.unknown().optional(),
  genesisHash: z.unknown().optional(),
  latestProtocolVersion: z.number().optional(),
  nodeKey: z.unknown().optional(),
  nodePublicKey: z.unknown().optional(),
  protocolVersion: z.number().optional(),
  rpcAddr: z.string().optional(),
  syncInfo: z.unknown().optional(),
  uptimeSec: z.number().optional(),
  validatorAccountId: z.unknown().optional(),
  validatorPublicKey: z.unknown().optional(),
  validators: z.array(z.unknown()),
  version: z.unknown()
});

export const RpcValidatorRequestSchema = z.record(z.unknown());

export const RpcValidatorResponseSchema = z.object({
  currentFishermen: z.array(z.unknown()).optional(),
  currentProposals: z.array(z.unknown()).optional(),
  currentValidators: z.array(z.unknown()).optional(),
  epochHeight: z.number().optional(),
  epochStartHeight: z.number().optional(),
  nextFishermen: z.array(z.unknown()).optional(),
  nextValidators: z.array(z.unknown()).optional(),
  prevEpochKickout: z.array(z.unknown()).optional()
});

export const RpcValidatorsOrderedRequestSchema = z.object({
  blockId: z.unknown().optional()
});

export const SlashedValidatorSchema = z.object({
  accountId: z.unknown().optional(),
  isDoubleSign: z.boolean().optional()
});

export const StatusSyncInfoSchema = z.object({
  earliestBlockHash: z.unknown().optional(),
  earliestBlockHeight: z.number().optional(),
  earliestBlockTime: z.string().optional(),
  epochId: z.unknown().optional(),
  epochStartHeight: z.number().optional(),
  latestBlockHash: z.unknown().optional(),
  latestBlockHeight: z.number().optional(),
  latestBlockTime: z.string().optional(),
  latestStateRoot: z.unknown().optional(),
  syncing: z.boolean()
});

export const ValidatorInfoSchema = z.object({
  accountId: z.unknown().optional()
});

export const ValidatorKickoutReasonSchema = z.unknown();

export const ValidatorKickoutViewSchema = z.object({
  accountId: z.unknown().optional(),
  reason: z.unknown()
});

export const ValidatorStakeViewSchema = z.unknown();

export const ValidatorStakeViewV1Schema = z.object({
  accountId: z.unknown().optional(),
  publicKey: z.unknown().optional(),
  stake: z.string()
});
