"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcEXPERIMENTALValidatorsOrderedResponseSchema = exports.RpcEXPERIMENTALValidatorsOrderedRequestSchema = exports.RpcEXPERIMENTALProtocolConfigResponseSchema = exports.RpcEXPERIMENTALProtocolConfigRequestSchema = exports.RpcEXPERIMENTALGenesisConfigResponseSchema = exports.RpcEXPERIMENTALGenesisConfigRequestSchema = exports.ValidatorStakeViewV1Schema = exports.ValidatorStakeViewSchema = exports.ValidatorKickoutViewSchema = exports.ValidatorKickoutReasonSchema = exports.ValidatorInfoSchema = exports.StatusSyncInfoSchema = exports.SlashedValidatorSchema = exports.RpcValidatorsOrderedRequestSchema = exports.RpcValidatorResponseSchema = exports.RpcValidatorRequestSchema = exports.RpcStatusResponseSchema = exports.RpcStatusRequestSchema = exports.RpcProtocolConfigResponseSchema = exports.RpcProtocolConfigRequestSchema = exports.RpcNetworkInfoResponseSchema = exports.RpcNetworkInfoRequestSchema = exports.NextEpochValidatorInfoSchema = exports.NetworkInfoViewSchema = exports.JsonRpcResponseForRpcValidatorResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcStatusResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcProtocolConfigResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcNetworkInfoResponseAndRpcErrorSchema = exports.JsonRpcResponseForGenesisConfigAndRpcErrorSchema = exports.JsonRpcResponseForArrayOfValidatorStakeViewAndRpcErrorSchema = exports.JsonRpcRequestForValidatorsSchema = exports.JsonRpcRequestForStatusSchema = exports.JsonRpcRequestForNetworkInfoSchema = exports.JsonRpcRequestForEXPERIMENTALValidatorsOrderedSchema = exports.JsonRpcRequestForEXPERIMENTALProtocolConfigSchema = exports.JsonRpcRequestForEXPERIMENTALGenesisConfigSchema = exports.GenesisConfigRequestSchema = exports.GenesisConfigSchema = exports.FinalExecutionStatusSchema = exports.ExecutionStatusViewSchema = exports.DetailedDebugStatusSchema = exports.CurrentEpochValidatorInfoSchema = exports.CatchupStatusViewSchema = void 0;
const zod_1 = require("zod");
exports.CatchupStatusViewSchema = zod_1.z.object({
    blocksToCatchup: zod_1.z.array(zod_1.z.unknown()).optional(),
    shardSyncStatus: zod_1.z.record(zod_1.z.unknown()).optional(),
    syncBlockHash: zod_1.z.unknown().optional(),
    syncBlockHeight: zod_1.z.number().optional()
});
exports.CurrentEpochValidatorInfoSchema = zod_1.z.object({
    accountId: zod_1.z.unknown().optional(),
    isSlashed: zod_1.z.boolean().optional(),
    numExpectedBlocks: zod_1.z.number().optional(),
    numExpectedChunks: zod_1.z.number().optional(),
    numExpectedChunksPerShard: zod_1.z.array(zod_1.z.number()).optional(),
    numExpectedEndorsements: zod_1.z.number().optional(),
    numExpectedEndorsementsPerShard: zod_1.z.array(zod_1.z.number()).optional(),
    numProducedBlocks: zod_1.z.number().optional(),
    numProducedChunks: zod_1.z.number().optional(),
    numProducedChunksPerShard: zod_1.z.array(zod_1.z.number()).optional(),
    numProducedEndorsements: zod_1.z.number().optional(),
    numProducedEndorsementsPerShard: zod_1.z.array(zod_1.z.number()).optional(),
    publicKey: zod_1.z.unknown().optional(),
    shards: zod_1.z.array(zod_1.z.unknown()),
    shardsEndorsed: zod_1.z.array(zod_1.z.unknown()).optional(),
    stake: zod_1.z.string()
});
exports.DetailedDebugStatusSchema = zod_1.z.object({
    blockProductionDelayMillis: zod_1.z.number().optional(),
    catchupStatus: zod_1.z.array(zod_1.z.unknown()).optional(),
    currentHeadStatus: zod_1.z.unknown().optional(),
    currentHeaderHeadStatus: zod_1.z.unknown().optional(),
    networkInfo: zod_1.z.unknown().optional(),
    syncStatus: zod_1.z.string().optional()
});
exports.ExecutionStatusViewSchema = zod_1.z.unknown();
exports.FinalExecutionStatusSchema = zod_1.z.unknown();
exports.GenesisConfigSchema = zod_1.z.object({
    avgHiddenValidatorSeatsPerShard: zod_1.z.array(zod_1.z.number()).optional(),
    blockProducerKickoutThreshold: zod_1.z.number().optional(),
    chainId: zod_1.z.string().optional(),
    chunkProducerAssignmentChangesLimit: zod_1.z.number().optional(),
    chunkProducerKickoutThreshold: zod_1.z.number().optional(),
    chunkValidatorOnlyKickoutThreshold: zod_1.z.number().optional(),
    dynamicResharding: zod_1.z.boolean().optional(),
    epochLength: zod_1.z.number().optional(),
    fishermenThreshold: zod_1.z.string().optional(),
    gasLimit: zod_1.z.number().optional(),
    gasPriceAdjustmentRate: zod_1.z.array(zod_1.z.number()).optional(),
    genesisHeight: zod_1.z.number().optional(),
    genesisTime: zod_1.z.string().optional(),
    maxGasPrice: zod_1.z.string().optional(),
    maxInflationRate: zod_1.z.array(zod_1.z.number()).optional(),
    maxKickoutStakePerc: zod_1.z.number().optional(),
    minGasPrice: zod_1.z.string().optional(),
    minimumStakeDivisor: zod_1.z.number().optional(),
    minimumStakeRatio: zod_1.z.array(zod_1.z.number()).optional(),
    minimumValidatorsPerShard: zod_1.z.number().optional(),
    numBlockProducerSeats: zod_1.z.number().optional(),
    numBlockProducerSeatsPerShard: zod_1.z.array(zod_1.z.number()).optional(),
    numBlocksPerYear: zod_1.z.number().optional(),
    numChunkOnlyProducerSeats: zod_1.z.number().optional(),
    numChunkProducerSeats: zod_1.z.number().optional(),
    numChunkValidatorSeats: zod_1.z.number().optional(),
    onlineMaxThreshold: zod_1.z.array(zod_1.z.number()).optional(),
    onlineMinThreshold: zod_1.z.array(zod_1.z.number()).optional(),
    protocolRewardRate: zod_1.z.array(zod_1.z.number()).optional(),
    protocolTreasuryAccount: zod_1.z.unknown().optional(),
    protocolUpgradeStakeThreshold: zod_1.z.array(zod_1.z.number()).optional(),
    protocolVersion: zod_1.z.number().optional(),
    shardLayout: zod_1.z.unknown().optional(),
    shuffleShardAssignmentForChunkProducers: zod_1.z.boolean().optional(),
    targetValidatorMandatesPerShard: zod_1.z.number().optional(),
    totalSupply: zod_1.z.string().optional(),
    transactionValidityPeriod: zod_1.z.number().optional(),
    useProductionConfig: zod_1.z.boolean().optional(),
    validators: zod_1.z.array(zod_1.z.unknown())
});
exports.GenesisConfigRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.JsonRpcRequestForEXPERIMENTALGenesisConfigSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_genesis_config']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForEXPERIMENTALProtocolConfigSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_protocol_config']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForEXPERIMENTALValidatorsOrderedSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_validators_ordered']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForNetworkInfoSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['network_info']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForStatusSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['status']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForValidatorsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['validators']),
    params: zod_1.z.unknown()
});
exports.JsonRpcResponseForArrayOfValidatorStakeViewAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForGenesisConfigAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcNetworkInfoResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcProtocolConfigResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcStatusResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcValidatorResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.NetworkInfoViewSchema = zod_1.z.object({
    connectedPeers: zod_1.z.array(zod_1.z.unknown()).optional(),
    knownProducers: zod_1.z.array(zod_1.z.unknown()).optional(),
    numConnectedPeers: zod_1.z.number().optional(),
    peerMaxCount: zod_1.z.number().optional(),
    tier1AccountsData: zod_1.z.array(zod_1.z.unknown()).optional(),
    tier1AccountsKeys: zod_1.z.array(zod_1.z.unknown()).optional(),
    tier1Connections: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.NextEpochValidatorInfoSchema = zod_1.z.object({
    accountId: zod_1.z.unknown().optional(),
    publicKey: zod_1.z.unknown().optional(),
    shards: zod_1.z.array(zod_1.z.unknown()),
    stake: zod_1.z.string()
});
exports.RpcNetworkInfoRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcNetworkInfoResponseSchema = zod_1.z.object({
    activePeers: zod_1.z.array(zod_1.z.unknown()).optional(),
    knownProducers: zod_1.z.array(zod_1.z.unknown()).optional(),
    numActivePeers: zod_1.z.number().optional(),
    peerMaxCount: zod_1.z.number().optional(),
    receivedBytesPerSec: zod_1.z.number().optional(),
    sentBytesPerSec: zod_1.z.number().optional()
});
exports.RpcProtocolConfigRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcProtocolConfigResponseSchema = zod_1.z.object({
    avgHiddenValidatorSeatsPerShard: zod_1.z.array(zod_1.z.number()).optional(),
    blockProducerKickoutThreshold: zod_1.z.number().optional(),
    chainId: zod_1.z.string().optional(),
    chunkProducerKickoutThreshold: zod_1.z.number().optional(),
    chunkValidatorOnlyKickoutThreshold: zod_1.z.number().optional(),
    dynamicResharding: zod_1.z.boolean().optional(),
    epochLength: zod_1.z.number().optional(),
    fishermenThreshold: zod_1.z.string().optional(),
    gasLimit: zod_1.z.number().optional(),
    gasPriceAdjustmentRate: zod_1.z.array(zod_1.z.number()).optional(),
    genesisHeight: zod_1.z.number().optional(),
    genesisTime: zod_1.z.string().optional(),
    maxGasPrice: zod_1.z.string().optional(),
    maxInflationRate: zod_1.z.array(zod_1.z.number()).optional(),
    maxKickoutStakePerc: zod_1.z.number().optional(),
    minGasPrice: zod_1.z.string().optional(),
    minimumStakeDivisor: zod_1.z.number().optional(),
    minimumStakeRatio: zod_1.z.array(zod_1.z.number()).optional(),
    minimumValidatorsPerShard: zod_1.z.number().optional(),
    numBlockProducerSeats: zod_1.z.number().optional(),
    numBlockProducerSeatsPerShard: zod_1.z.array(zod_1.z.number()).optional(),
    numBlocksPerYear: zod_1.z.number().optional(),
    onlineMaxThreshold: zod_1.z.array(zod_1.z.number()).optional(),
    onlineMinThreshold: zod_1.z.array(zod_1.z.number()).optional(),
    protocolRewardRate: zod_1.z.array(zod_1.z.number()).optional(),
    protocolTreasuryAccount: zod_1.z.unknown().optional(),
    protocolUpgradeStakeThreshold: zod_1.z.array(zod_1.z.number()).optional(),
    protocolVersion: zod_1.z.number().optional(),
    runtimeConfig: zod_1.z.unknown().optional(),
    shardLayout: zod_1.z.unknown().optional(),
    shuffleShardAssignmentForChunkProducers: zod_1.z.boolean().optional(),
    targetValidatorMandatesPerShard: zod_1.z.number().optional(),
    transactionValidityPeriod: zod_1.z.number().optional()
});
exports.RpcStatusRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcStatusResponseSchema = zod_1.z.object({
    chainId: zod_1.z.string().optional(),
    detailedDebugStatus: zod_1.z.unknown().optional(),
    genesisHash: zod_1.z.unknown().optional(),
    latestProtocolVersion: zod_1.z.number().optional(),
    nodeKey: zod_1.z.unknown().optional(),
    nodePublicKey: zod_1.z.unknown().optional(),
    protocolVersion: zod_1.z.number().optional(),
    rpcAddr: zod_1.z.string().optional(),
    syncInfo: zod_1.z.unknown().optional(),
    uptimeSec: zod_1.z.number().optional(),
    validatorAccountId: zod_1.z.unknown().optional(),
    validatorPublicKey: zod_1.z.unknown().optional(),
    validators: zod_1.z.array(zod_1.z.unknown()),
    version: zod_1.z.unknown()
});
exports.RpcValidatorRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcValidatorResponseSchema = zod_1.z.object({
    currentFishermen: zod_1.z.array(zod_1.z.unknown()).optional(),
    currentProposals: zod_1.z.array(zod_1.z.unknown()).optional(),
    currentValidators: zod_1.z.array(zod_1.z.unknown()).optional(),
    epochHeight: zod_1.z.number().optional(),
    epochStartHeight: zod_1.z.number().optional(),
    nextFishermen: zod_1.z.array(zod_1.z.unknown()).optional(),
    nextValidators: zod_1.z.array(zod_1.z.unknown()).optional(),
    prevEpochKickout: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.RpcValidatorsOrderedRequestSchema = zod_1.z.object({
    blockId: zod_1.z.unknown().optional()
});
exports.SlashedValidatorSchema = zod_1.z.object({
    accountId: zod_1.z.unknown().optional(),
    isDoubleSign: zod_1.z.boolean().optional()
});
exports.StatusSyncInfoSchema = zod_1.z.object({
    earliestBlockHash: zod_1.z.unknown().optional(),
    earliestBlockHeight: zod_1.z.number().optional(),
    earliestBlockTime: zod_1.z.string().optional(),
    epochId: zod_1.z.unknown().optional(),
    epochStartHeight: zod_1.z.number().optional(),
    latestBlockHash: zod_1.z.unknown().optional(),
    latestBlockHeight: zod_1.z.number().optional(),
    latestBlockTime: zod_1.z.string().optional(),
    latestStateRoot: zod_1.z.unknown().optional(),
    syncing: zod_1.z.boolean()
});
exports.ValidatorInfoSchema = zod_1.z.object({
    accountId: zod_1.z.unknown().optional()
});
exports.ValidatorKickoutReasonSchema = zod_1.z.unknown();
exports.ValidatorKickoutViewSchema = zod_1.z.object({
    accountId: zod_1.z.unknown().optional(),
    reason: zod_1.z.unknown()
});
exports.ValidatorStakeViewSchema = zod_1.z.unknown();
exports.ValidatorStakeViewV1Schema = zod_1.z.object({
    accountId: zod_1.z.unknown().optional(),
    publicKey: zod_1.z.unknown().optional(),
    stake: zod_1.z.string()
});
// Schema aliases for client compatibility
exports.RpcEXPERIMENTALGenesisConfigRequestSchema = exports.GenesisConfigRequestSchema;
exports.RpcEXPERIMENTALGenesisConfigResponseSchema = exports.GenesisConfigSchema;
exports.RpcEXPERIMENTALProtocolConfigRequestSchema = exports.RpcProtocolConfigRequestSchema;
exports.RpcEXPERIMENTALProtocolConfigResponseSchema = exports.RpcProtocolConfigResponseSchema;
exports.RpcEXPERIMENTALValidatorsOrderedRequestSchema = exports.RpcValidatorsOrderedRequestSchema;
exports.RpcEXPERIMENTALValidatorsOrderedResponseSchema = zod_1.z.array(exports.ValidatorStakeViewV1Schema);
