/**
 * Generated types for NEAR Protocol JSON-RPC
 */

import { AccountId, CryptoHash, PublicKey, ShardId, BlockStatusView, AccountInfo, PeerInfoView, KnownProducerView, AccountDataView, RpcPeerInfo, RpcKnownProducer, SlashedValidator, ValidatorStakeViewV1 } from './common';

export interface CatchupStatusView {
  blocksToCatchup?: BlockStatusView[];
  shardSyncStatus?: Record<string, unknown>;
  syncBlockHash?: CryptoHash;
  syncBlockHeight?: number;
}

export interface CurrentEpochValidatorInfo {
  accountId?: AccountId;
  isSlashed?: boolean;
  numExpectedBlocks?: number;
  numExpectedChunks?: number;
  numExpectedChunksPerShard?: number[];
  numExpectedEndorsements?: number;
  numExpectedEndorsementsPerShard?: number[];
  numProducedBlocks?: number;
  numProducedChunks?: number;
  numProducedChunksPerShard?: number[];
  numProducedEndorsements?: number;
  numProducedEndorsementsPerShard?: number[];
  publicKey?: PublicKey;
  shards: ShardId[];
  shardsEndorsed?: ShardId[];
  stake: string;
}

export interface DetailedDebugStatus {
  blockProductionDelayMillis?: number;
  catchupStatus?: CatchupStatusView[];
  currentHeadStatus?: BlockStatusView;
  currentHeaderHeadStatus?: BlockStatusView;
  networkInfo?: NetworkInfoView;
  syncStatus?: string;
}

export type ExecutionStatusView = unknown;

export type FinalExecutionStatus = unknown;

export interface GenesisConfig {
  avgHiddenValidatorSeatsPerShard?: number[];
  blockProducerKickoutThreshold?: number;
  chainId?: string;
  chunkProducerAssignmentChangesLimit?: number;
  chunkProducerKickoutThreshold?: number;
  chunkValidatorOnlyKickoutThreshold?: number;
  dynamicResharding?: boolean;
  epochLength?: number;
  fishermenThreshold?: string;
  gasLimit?: number;
  gasPriceAdjustmentRate?: number[];
  genesisHeight?: number;
  genesisTime?: string;
  maxGasPrice?: string;
  maxInflationRate?: number[];
  maxKickoutStakePerc?: number;
  minGasPrice?: string;
  minimumStakeDivisor?: number;
  minimumStakeRatio?: number[];
  minimumValidatorsPerShard?: number;
  numBlockProducerSeats?: number;
  numBlockProducerSeatsPerShard?: number[];
  numBlocksPerYear?: number;
  numChunkOnlyProducerSeats?: number;
  numChunkProducerSeats?: number;
  numChunkValidatorSeats?: number;
  onlineMaxThreshold?: number[];
  onlineMinThreshold?: number[];
  protocolRewardRate?: number[];
  protocolTreasuryAccount?: unknown;
  protocolUpgradeStakeThreshold?: number[];
  protocolVersion?: number;
  shardLayout?: unknown;
  shuffleShardAssignmentForChunkProducers?: boolean;
  targetValidatorMandatesPerShard?: number;
  totalSupply?: string;
  transactionValidityPeriod?: number;
  useProductionConfig?: boolean;
  validators: AccountInfo[];
}

export interface GenesisConfigRequest {

}

export interface JsonRpcRequestForEXPERIMENTALGenesisConfig {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_genesis_config';
  params: GenesisConfigRequest;
}

export interface JsonRpcRequestForEXPERIMENTALProtocolConfig {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_protocol_config';
  params: RpcProtocolConfigRequest;
}

export interface JsonRpcRequestForEXPERIMENTALValidatorsOrdered {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_validators_ordered';
  params: RpcValidatorsOrderedRequest;
}

export interface JsonRpcRequestForNetworkInfo {
  id: string;
  jsonrpc: string;
  method: 'network_info';
  params: RpcNetworkInfoRequest;
}

export interface JsonRpcRequestForStatus {
  id: string;
  jsonrpc: string;
  method: 'status';
  params: RpcStatusRequest;
}

export interface JsonRpcRequestForValidators {
  id: string;
  jsonrpc: string;
  method: 'validators';
  params: RpcValidatorRequest;
}

export interface JsonRpcResponseForArrayOfValidatorStakeViewAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForGenesisConfigAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForRpcNetworkInfoResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForRpcProtocolConfigResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForRpcStatusResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForRpcValidatorResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface NetworkInfoView {
  connectedPeers?: PeerInfoView[];
  knownProducers?: KnownProducerView[];
  numConnectedPeers?: number;
  peerMaxCount?: number;
  tier1AccountsData?: AccountDataView[];
  tier1AccountsKeys?: PublicKey[];
  tier1Connections?: PeerInfoView[];
}

export interface NextEpochValidatorInfo {
  accountId?: AccountId;
  publicKey?: PublicKey;
  shards: ShardId[];
  stake: string;
}

export interface RpcNetworkInfoRequest {

}

export interface RpcNetworkInfoResponse {
  activePeers?: RpcPeerInfo[];
  knownProducers?: RpcKnownProducer[];
  numActivePeers?: number;
  peerMaxCount?: number;
  receivedBytesPerSec?: number;
  sentBytesPerSec?: number;
}

export interface RpcProtocolConfigRequest {

}

export interface RpcProtocolConfigResponse {
  avgHiddenValidatorSeatsPerShard?: number[];
  blockProducerKickoutThreshold?: number;
  chainId?: string;
  chunkProducerKickoutThreshold?: number;
  chunkValidatorOnlyKickoutThreshold?: number;
  dynamicResharding?: boolean;
  epochLength?: number;
  fishermenThreshold?: string;
  gasLimit?: number;
  gasPriceAdjustmentRate?: number[];
  genesisHeight?: number;
  genesisTime?: string;
  maxGasPrice?: string;
  maxInflationRate?: number[];
  maxKickoutStakePerc?: number;
  minGasPrice?: string;
  minimumStakeDivisor?: number;
  minimumStakeRatio?: number[];
  minimumValidatorsPerShard?: number;
  numBlockProducerSeats?: number;
  numBlockProducerSeatsPerShard?: number[];
  numBlocksPerYear?: number;
  onlineMaxThreshold?: number[];
  onlineMinThreshold?: number[];
  protocolRewardRate?: number[];
  protocolTreasuryAccount?: unknown;
  protocolUpgradeStakeThreshold?: number[];
  protocolVersion?: number;
  runtimeConfig?: unknown;
  shardLayout?: unknown;
  shuffleShardAssignmentForChunkProducers?: boolean;
  targetValidatorMandatesPerShard?: number;
  transactionValidityPeriod?: number;
}

export interface RpcStatusRequest {

}

export interface RpcStatusResponse {
  chainId?: string;
  detailedDebugStatus?: unknown;
  genesisHash?: unknown;
  latestProtocolVersion?: number;
  nodeKey?: unknown;
  nodePublicKey?: unknown;
  protocolVersion?: number;
  rpcAddr?: string;
  syncInfo?: unknown;
  uptimeSec?: number;
  validatorAccountId?: unknown;
  validatorPublicKey?: unknown;
  validators: ValidatorInfo[];
  version: unknown;
}

export interface RpcValidatorRequest {

}

export interface RpcValidatorResponse {
  currentFishermen?: ValidatorStakeViewV1[];
  currentProposals?: ValidatorStakeViewV1[];
  currentValidators?: CurrentEpochValidatorInfo[];
  epochHeight?: number;
  epochStartHeight?: number;
  nextFishermen?: ValidatorStakeViewV1[];
  nextValidators?: NextEpochValidatorInfo[];
  prevEpochKickout?: ValidatorKickoutView[];
}

export interface RpcValidatorsOrderedRequest {
  blockId?: unknown;
}

// SlashedValidator is now defined in common.ts

export interface StatusSyncInfo {
  earliestBlockHash?: unknown;
  earliestBlockHeight?: number;
  earliestBlockTime?: string;
  epochId?: unknown;
  epochStartHeight?: number;
  latestBlockHash?: CryptoHash;
  latestBlockHeight?: number;
  latestBlockTime?: string;
  latestStateRoot?: CryptoHash;
  syncing: boolean;
}

export interface ValidatorInfo {
  accountId?: AccountId;
}

export type ValidatorKickoutReason = unknown;

export interface ValidatorKickoutView {
  accountId?: AccountId;
  reason: ValidatorKickoutReason;
}

// ValidatorStakeView is now defined in common.ts

// ValidatorStakeViewV1 is now defined in common.ts

// Type aliases for client compatibility
export type RpcEXPERIMENTALGenesisConfigRequest = GenesisConfigRequest;
export type RpcEXPERIMENTALGenesisConfigResponse = GenesisConfig;
export type RpcEXPERIMENTALProtocolConfigRequest = RpcProtocolConfigRequest;
export type RpcEXPERIMENTALProtocolConfigResponse = RpcProtocolConfigResponse;
export type RpcEXPERIMENTALValidatorsOrderedRequest = RpcValidatorsOrderedRequest;
export type RpcEXPERIMENTALValidatorsOrderedResponse = ValidatorStakeViewV1[];
// These types already exist with correct names
