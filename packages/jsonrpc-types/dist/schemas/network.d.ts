/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
import { z } from 'zod';
export declare const CatchupStatusViewSchema: z.ZodObject<{
    blocksToCatchup: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    shardSyncStatus: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    syncBlockHash: z.ZodOptional<z.ZodUnknown>;
    syncBlockHeight: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    blocksToCatchup?: unknown[] | undefined;
    shardSyncStatus?: Record<string, unknown> | undefined;
    syncBlockHash?: unknown;
    syncBlockHeight?: number | undefined;
}, {
    blocksToCatchup?: unknown[] | undefined;
    shardSyncStatus?: Record<string, unknown> | undefined;
    syncBlockHash?: unknown;
    syncBlockHeight?: number | undefined;
}>;
export declare const CurrentEpochValidatorInfoSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
    isSlashed: z.ZodOptional<z.ZodBoolean>;
    numExpectedBlocks: z.ZodOptional<z.ZodNumber>;
    numExpectedChunks: z.ZodOptional<z.ZodNumber>;
    numExpectedChunksPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numExpectedEndorsements: z.ZodOptional<z.ZodNumber>;
    numExpectedEndorsementsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numProducedBlocks: z.ZodOptional<z.ZodNumber>;
    numProducedChunks: z.ZodOptional<z.ZodNumber>;
    numProducedChunksPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numProducedEndorsements: z.ZodOptional<z.ZodNumber>;
    numProducedEndorsementsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    publicKey: z.ZodOptional<z.ZodUnknown>;
    shards: z.ZodArray<z.ZodUnknown, "many">;
    shardsEndorsed: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    stake: z.ZodString;
}, "strip", z.ZodTypeAny, {
    stake: string;
    shards: unknown[];
    publicKey?: unknown;
    accountId?: unknown;
    isSlashed?: boolean | undefined;
    numExpectedBlocks?: number | undefined;
    numExpectedChunks?: number | undefined;
    numExpectedChunksPerShard?: number[] | undefined;
    numExpectedEndorsements?: number | undefined;
    numExpectedEndorsementsPerShard?: number[] | undefined;
    numProducedBlocks?: number | undefined;
    numProducedChunks?: number | undefined;
    numProducedChunksPerShard?: number[] | undefined;
    numProducedEndorsements?: number | undefined;
    numProducedEndorsementsPerShard?: number[] | undefined;
    shardsEndorsed?: unknown[] | undefined;
}, {
    stake: string;
    shards: unknown[];
    publicKey?: unknown;
    accountId?: unknown;
    isSlashed?: boolean | undefined;
    numExpectedBlocks?: number | undefined;
    numExpectedChunks?: number | undefined;
    numExpectedChunksPerShard?: number[] | undefined;
    numExpectedEndorsements?: number | undefined;
    numExpectedEndorsementsPerShard?: number[] | undefined;
    numProducedBlocks?: number | undefined;
    numProducedChunks?: number | undefined;
    numProducedChunksPerShard?: number[] | undefined;
    numProducedEndorsements?: number | undefined;
    numProducedEndorsementsPerShard?: number[] | undefined;
    shardsEndorsed?: unknown[] | undefined;
}>;
export declare const DetailedDebugStatusSchema: z.ZodObject<{
    blockProductionDelayMillis: z.ZodOptional<z.ZodNumber>;
    catchupStatus: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    currentHeadStatus: z.ZodOptional<z.ZodUnknown>;
    currentHeaderHeadStatus: z.ZodOptional<z.ZodUnknown>;
    networkInfo: z.ZodOptional<z.ZodUnknown>;
    syncStatus: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    blockProductionDelayMillis?: number | undefined;
    catchupStatus?: unknown[] | undefined;
    currentHeadStatus?: unknown;
    currentHeaderHeadStatus?: unknown;
    networkInfo?: unknown;
    syncStatus?: string | undefined;
}, {
    blockProductionDelayMillis?: number | undefined;
    catchupStatus?: unknown[] | undefined;
    currentHeadStatus?: unknown;
    currentHeaderHeadStatus?: unknown;
    networkInfo?: unknown;
    syncStatus?: string | undefined;
}>;
export declare const ExecutionStatusViewSchema: z.ZodUnknown;
export declare const FinalExecutionStatusSchema: z.ZodUnknown;
export declare const GenesisConfigSchema: z.ZodObject<{
    avgHiddenValidatorSeatsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    blockProducerKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    chainId: z.ZodOptional<z.ZodString>;
    chunkProducerAssignmentChangesLimit: z.ZodOptional<z.ZodNumber>;
    chunkProducerKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    chunkValidatorOnlyKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    dynamicResharding: z.ZodOptional<z.ZodBoolean>;
    epochLength: z.ZodOptional<z.ZodNumber>;
    fishermenThreshold: z.ZodOptional<z.ZodString>;
    gasLimit: z.ZodOptional<z.ZodNumber>;
    gasPriceAdjustmentRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    genesisHeight: z.ZodOptional<z.ZodNumber>;
    genesisTime: z.ZodOptional<z.ZodString>;
    maxGasPrice: z.ZodOptional<z.ZodString>;
    maxInflationRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxKickoutStakePerc: z.ZodOptional<z.ZodNumber>;
    minGasPrice: z.ZodOptional<z.ZodString>;
    minimumStakeDivisor: z.ZodOptional<z.ZodNumber>;
    minimumStakeRatio: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    minimumValidatorsPerShard: z.ZodOptional<z.ZodNumber>;
    numBlockProducerSeats: z.ZodOptional<z.ZodNumber>;
    numBlockProducerSeatsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numBlocksPerYear: z.ZodOptional<z.ZodNumber>;
    numChunkOnlyProducerSeats: z.ZodOptional<z.ZodNumber>;
    numChunkProducerSeats: z.ZodOptional<z.ZodNumber>;
    numChunkValidatorSeats: z.ZodOptional<z.ZodNumber>;
    onlineMaxThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    onlineMinThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolRewardRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolTreasuryAccount: z.ZodOptional<z.ZodUnknown>;
    protocolUpgradeStakeThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolVersion: z.ZodOptional<z.ZodNumber>;
    shardLayout: z.ZodOptional<z.ZodUnknown>;
    shuffleShardAssignmentForChunkProducers: z.ZodOptional<z.ZodBoolean>;
    targetValidatorMandatesPerShard: z.ZodOptional<z.ZodNumber>;
    totalSupply: z.ZodOptional<z.ZodString>;
    transactionValidityPeriod: z.ZodOptional<z.ZodNumber>;
    useProductionConfig: z.ZodOptional<z.ZodBoolean>;
    validators: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    validators: unknown[];
    chainId?: string | undefined;
    protocolVersion?: number | undefined;
    totalSupply?: string | undefined;
    genesisHeight?: number | undefined;
    genesisTime?: string | undefined;
    epochLength?: number | undefined;
    maxGasPrice?: string | undefined;
    minGasPrice?: string | undefined;
    maxInflationRate?: number[] | undefined;
    onlineMinThreshold?: number[] | undefined;
    onlineMaxThreshold?: number[] | undefined;
    numBlockProducerSeats?: number | undefined;
    numBlockProducerSeatsPerShard?: number[] | undefined;
    avgHiddenValidatorSeatsPerShard?: number[] | undefined;
    dynamicResharding?: boolean | undefined;
    protocolUpgradeStakeThreshold?: number[] | undefined;
    gasLimit?: number | undefined;
    blockProducerKickoutThreshold?: number | undefined;
    chunkProducerKickoutThreshold?: number | undefined;
    gasPriceAdjustmentRate?: number[] | undefined;
    chunkProducerAssignmentChangesLimit?: number | undefined;
    chunkValidatorOnlyKickoutThreshold?: number | undefined;
    fishermenThreshold?: string | undefined;
    maxKickoutStakePerc?: number | undefined;
    minimumStakeDivisor?: number | undefined;
    minimumStakeRatio?: number[] | undefined;
    minimumValidatorsPerShard?: number | undefined;
    numBlocksPerYear?: number | undefined;
    numChunkOnlyProducerSeats?: number | undefined;
    numChunkProducerSeats?: number | undefined;
    numChunkValidatorSeats?: number | undefined;
    protocolRewardRate?: number[] | undefined;
    protocolTreasuryAccount?: unknown;
    shardLayout?: unknown;
    shuffleShardAssignmentForChunkProducers?: boolean | undefined;
    targetValidatorMandatesPerShard?: number | undefined;
    transactionValidityPeriod?: number | undefined;
    useProductionConfig?: boolean | undefined;
}, {
    validators: unknown[];
    chainId?: string | undefined;
    protocolVersion?: number | undefined;
    totalSupply?: string | undefined;
    genesisHeight?: number | undefined;
    genesisTime?: string | undefined;
    epochLength?: number | undefined;
    maxGasPrice?: string | undefined;
    minGasPrice?: string | undefined;
    maxInflationRate?: number[] | undefined;
    onlineMinThreshold?: number[] | undefined;
    onlineMaxThreshold?: number[] | undefined;
    numBlockProducerSeats?: number | undefined;
    numBlockProducerSeatsPerShard?: number[] | undefined;
    avgHiddenValidatorSeatsPerShard?: number[] | undefined;
    dynamicResharding?: boolean | undefined;
    protocolUpgradeStakeThreshold?: number[] | undefined;
    gasLimit?: number | undefined;
    blockProducerKickoutThreshold?: number | undefined;
    chunkProducerKickoutThreshold?: number | undefined;
    gasPriceAdjustmentRate?: number[] | undefined;
    chunkProducerAssignmentChangesLimit?: number | undefined;
    chunkValidatorOnlyKickoutThreshold?: number | undefined;
    fishermenThreshold?: string | undefined;
    maxKickoutStakePerc?: number | undefined;
    minimumStakeDivisor?: number | undefined;
    minimumStakeRatio?: number[] | undefined;
    minimumValidatorsPerShard?: number | undefined;
    numBlocksPerYear?: number | undefined;
    numChunkOnlyProducerSeats?: number | undefined;
    numChunkProducerSeats?: number | undefined;
    numChunkValidatorSeats?: number | undefined;
    protocolRewardRate?: number[] | undefined;
    protocolTreasuryAccount?: unknown;
    shardLayout?: unknown;
    shuffleShardAssignmentForChunkProducers?: boolean | undefined;
    targetValidatorMandatesPerShard?: number | undefined;
    transactionValidityPeriod?: number | undefined;
    useProductionConfig?: boolean | undefined;
}>;
export declare const GenesisConfigRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const JsonRpcRequestForEXPERIMENTALGenesisConfigSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_genesis_config"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "EXPERIMENTAL_genesis_config";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "EXPERIMENTAL_genesis_config";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForEXPERIMENTALProtocolConfigSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_protocol_config"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "EXPERIMENTAL_protocol_config";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "EXPERIMENTAL_protocol_config";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForEXPERIMENTALValidatorsOrderedSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_validators_ordered"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "EXPERIMENTAL_validators_ordered";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "EXPERIMENTAL_validators_ordered";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForNetworkInfoSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["network_info"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "network_info";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "network_info";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForStatusSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["status"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "status";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "status";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForValidatorsSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["validators"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "validators";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "validators";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcResponseForArrayOfValidatorStakeViewAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseForGenesisConfigAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseForRpcNetworkInfoResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseForRpcProtocolConfigResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseForRpcStatusResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseForRpcValidatorResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const NetworkInfoViewSchema: z.ZodObject<{
    connectedPeers: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    knownProducers: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    numConnectedPeers: z.ZodOptional<z.ZodNumber>;
    peerMaxCount: z.ZodOptional<z.ZodNumber>;
    tier1AccountsData: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    tier1AccountsKeys: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    tier1Connections: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    knownProducers?: unknown[] | undefined;
    peerMaxCount?: number | undefined;
    tier1Connections?: unknown[] | undefined;
    tier1AccountsKeys?: unknown[] | undefined;
    tier1AccountsData?: unknown[] | undefined;
    connectedPeers?: unknown[] | undefined;
    numConnectedPeers?: number | undefined;
}, {
    knownProducers?: unknown[] | undefined;
    peerMaxCount?: number | undefined;
    tier1Connections?: unknown[] | undefined;
    tier1AccountsKeys?: unknown[] | undefined;
    tier1AccountsData?: unknown[] | undefined;
    connectedPeers?: unknown[] | undefined;
    numConnectedPeers?: number | undefined;
}>;
export declare const NextEpochValidatorInfoSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
    publicKey: z.ZodOptional<z.ZodUnknown>;
    shards: z.ZodArray<z.ZodUnknown, "many">;
    stake: z.ZodString;
}, "strip", z.ZodTypeAny, {
    stake: string;
    shards: unknown[];
    publicKey?: unknown;
    accountId?: unknown;
}, {
    stake: string;
    shards: unknown[];
    publicKey?: unknown;
    accountId?: unknown;
}>;
export declare const RpcNetworkInfoRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcNetworkInfoResponseSchema: z.ZodObject<{
    activePeers: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    knownProducers: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    numActivePeers: z.ZodOptional<z.ZodNumber>;
    peerMaxCount: z.ZodOptional<z.ZodNumber>;
    receivedBytesPerSec: z.ZodOptional<z.ZodNumber>;
    sentBytesPerSec: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    activePeers?: unknown[] | undefined;
    knownProducers?: unknown[] | undefined;
    numActivePeers?: number | undefined;
    peerMaxCount?: number | undefined;
    sentBytesPerSec?: number | undefined;
    receivedBytesPerSec?: number | undefined;
}, {
    activePeers?: unknown[] | undefined;
    knownProducers?: unknown[] | undefined;
    numActivePeers?: number | undefined;
    peerMaxCount?: number | undefined;
    sentBytesPerSec?: number | undefined;
    receivedBytesPerSec?: number | undefined;
}>;
export declare const RpcProtocolConfigRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcProtocolConfigResponseSchema: z.ZodObject<{
    avgHiddenValidatorSeatsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    blockProducerKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    chainId: z.ZodOptional<z.ZodString>;
    chunkProducerKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    chunkValidatorOnlyKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    dynamicResharding: z.ZodOptional<z.ZodBoolean>;
    epochLength: z.ZodOptional<z.ZodNumber>;
    fishermenThreshold: z.ZodOptional<z.ZodString>;
    gasLimit: z.ZodOptional<z.ZodNumber>;
    gasPriceAdjustmentRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    genesisHeight: z.ZodOptional<z.ZodNumber>;
    genesisTime: z.ZodOptional<z.ZodString>;
    maxGasPrice: z.ZodOptional<z.ZodString>;
    maxInflationRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxKickoutStakePerc: z.ZodOptional<z.ZodNumber>;
    minGasPrice: z.ZodOptional<z.ZodString>;
    minimumStakeDivisor: z.ZodOptional<z.ZodNumber>;
    minimumStakeRatio: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    minimumValidatorsPerShard: z.ZodOptional<z.ZodNumber>;
    numBlockProducerSeats: z.ZodOptional<z.ZodNumber>;
    numBlockProducerSeatsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numBlocksPerYear: z.ZodOptional<z.ZodNumber>;
    onlineMaxThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    onlineMinThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolRewardRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolTreasuryAccount: z.ZodOptional<z.ZodUnknown>;
    protocolUpgradeStakeThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolVersion: z.ZodOptional<z.ZodNumber>;
    runtimeConfig: z.ZodOptional<z.ZodUnknown>;
    shardLayout: z.ZodOptional<z.ZodUnknown>;
    shuffleShardAssignmentForChunkProducers: z.ZodOptional<z.ZodBoolean>;
    targetValidatorMandatesPerShard: z.ZodOptional<z.ZodNumber>;
    transactionValidityPeriod: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    chainId?: string | undefined;
    protocolVersion?: number | undefined;
    genesisHeight?: number | undefined;
    genesisTime?: string | undefined;
    epochLength?: number | undefined;
    maxGasPrice?: string | undefined;
    minGasPrice?: string | undefined;
    maxInflationRate?: number[] | undefined;
    runtimeConfig?: unknown;
    onlineMinThreshold?: number[] | undefined;
    onlineMaxThreshold?: number[] | undefined;
    numBlockProducerSeats?: number | undefined;
    numBlockProducerSeatsPerShard?: number[] | undefined;
    avgHiddenValidatorSeatsPerShard?: number[] | undefined;
    dynamicResharding?: boolean | undefined;
    protocolUpgradeStakeThreshold?: number[] | undefined;
    gasLimit?: number | undefined;
    blockProducerKickoutThreshold?: number | undefined;
    chunkProducerKickoutThreshold?: number | undefined;
    gasPriceAdjustmentRate?: number[] | undefined;
    chunkValidatorOnlyKickoutThreshold?: number | undefined;
    fishermenThreshold?: string | undefined;
    maxKickoutStakePerc?: number | undefined;
    minimumStakeDivisor?: number | undefined;
    minimumStakeRatio?: number[] | undefined;
    minimumValidatorsPerShard?: number | undefined;
    numBlocksPerYear?: number | undefined;
    protocolRewardRate?: number[] | undefined;
    protocolTreasuryAccount?: unknown;
    shardLayout?: unknown;
    shuffleShardAssignmentForChunkProducers?: boolean | undefined;
    targetValidatorMandatesPerShard?: number | undefined;
    transactionValidityPeriod?: number | undefined;
}, {
    chainId?: string | undefined;
    protocolVersion?: number | undefined;
    genesisHeight?: number | undefined;
    genesisTime?: string | undefined;
    epochLength?: number | undefined;
    maxGasPrice?: string | undefined;
    minGasPrice?: string | undefined;
    maxInflationRate?: number[] | undefined;
    runtimeConfig?: unknown;
    onlineMinThreshold?: number[] | undefined;
    onlineMaxThreshold?: number[] | undefined;
    numBlockProducerSeats?: number | undefined;
    numBlockProducerSeatsPerShard?: number[] | undefined;
    avgHiddenValidatorSeatsPerShard?: number[] | undefined;
    dynamicResharding?: boolean | undefined;
    protocolUpgradeStakeThreshold?: number[] | undefined;
    gasLimit?: number | undefined;
    blockProducerKickoutThreshold?: number | undefined;
    chunkProducerKickoutThreshold?: number | undefined;
    gasPriceAdjustmentRate?: number[] | undefined;
    chunkValidatorOnlyKickoutThreshold?: number | undefined;
    fishermenThreshold?: string | undefined;
    maxKickoutStakePerc?: number | undefined;
    minimumStakeDivisor?: number | undefined;
    minimumStakeRatio?: number[] | undefined;
    minimumValidatorsPerShard?: number | undefined;
    numBlocksPerYear?: number | undefined;
    protocolRewardRate?: number[] | undefined;
    protocolTreasuryAccount?: unknown;
    shardLayout?: unknown;
    shuffleShardAssignmentForChunkProducers?: boolean | undefined;
    targetValidatorMandatesPerShard?: number | undefined;
    transactionValidityPeriod?: number | undefined;
}>;
export declare const RpcStatusRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcStatusResponseSchema: z.ZodObject<{
    chainId: z.ZodOptional<z.ZodString>;
    detailedDebugStatus: z.ZodOptional<z.ZodUnknown>;
    genesisHash: z.ZodOptional<z.ZodUnknown>;
    latestProtocolVersion: z.ZodOptional<z.ZodNumber>;
    nodeKey: z.ZodOptional<z.ZodUnknown>;
    nodePublicKey: z.ZodOptional<z.ZodUnknown>;
    protocolVersion: z.ZodOptional<z.ZodNumber>;
    rpcAddr: z.ZodOptional<z.ZodString>;
    syncInfo: z.ZodOptional<z.ZodUnknown>;
    uptimeSec: z.ZodOptional<z.ZodNumber>;
    validatorAccountId: z.ZodOptional<z.ZodUnknown>;
    validatorPublicKey: z.ZodOptional<z.ZodUnknown>;
    validators: z.ZodArray<z.ZodUnknown, "many">;
    version: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    validators: unknown[];
    chainId?: string | undefined;
    genesisHash?: unknown;
    latestProtocolVersion?: number | undefined;
    nodeKey?: unknown;
    nodePublicKey?: unknown;
    protocolVersion?: number | undefined;
    rpcAddr?: string | undefined;
    syncInfo?: unknown;
    uptimeSec?: number | undefined;
    validatorAccountId?: unknown;
    validatorPublicKey?: unknown;
    version?: unknown;
    detailedDebugStatus?: unknown;
}, {
    validators: unknown[];
    chainId?: string | undefined;
    genesisHash?: unknown;
    latestProtocolVersion?: number | undefined;
    nodeKey?: unknown;
    nodePublicKey?: unknown;
    protocolVersion?: number | undefined;
    rpcAddr?: string | undefined;
    syncInfo?: unknown;
    uptimeSec?: number | undefined;
    validatorAccountId?: unknown;
    validatorPublicKey?: unknown;
    version?: unknown;
    detailedDebugStatus?: unknown;
}>;
export declare const RpcValidatorRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcValidatorResponseSchema: z.ZodObject<{
    currentFishermen: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    currentProposals: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    currentValidators: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    epochHeight: z.ZodOptional<z.ZodNumber>;
    epochStartHeight: z.ZodOptional<z.ZodNumber>;
    nextFishermen: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    nextValidators: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    prevEpochKickout: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    epochStartHeight?: number | undefined;
    currentFishermen?: unknown[] | undefined;
    currentProposals?: unknown[] | undefined;
    currentValidators?: unknown[] | undefined;
    epochHeight?: number | undefined;
    nextFishermen?: unknown[] | undefined;
    nextValidators?: unknown[] | undefined;
    prevEpochKickout?: unknown[] | undefined;
}, {
    epochStartHeight?: number | undefined;
    currentFishermen?: unknown[] | undefined;
    currentProposals?: unknown[] | undefined;
    currentValidators?: unknown[] | undefined;
    epochHeight?: number | undefined;
    nextFishermen?: unknown[] | undefined;
    nextValidators?: unknown[] | undefined;
    prevEpochKickout?: unknown[] | undefined;
}>;
export declare const RpcValidatorsOrderedRequestSchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    blockId?: unknown;
}, {
    blockId?: unknown;
}>;
export declare const SlashedValidatorSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
    isDoubleSign: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    accountId?: unknown;
    isDoubleSign?: boolean | undefined;
}, {
    accountId?: unknown;
    isDoubleSign?: boolean | undefined;
}>;
export declare const StatusSyncInfoSchema: z.ZodObject<{
    earliestBlockHash: z.ZodOptional<z.ZodUnknown>;
    earliestBlockHeight: z.ZodOptional<z.ZodNumber>;
    earliestBlockTime: z.ZodOptional<z.ZodString>;
    epochId: z.ZodOptional<z.ZodUnknown>;
    epochStartHeight: z.ZodOptional<z.ZodNumber>;
    latestBlockHash: z.ZodOptional<z.ZodUnknown>;
    latestBlockHeight: z.ZodOptional<z.ZodNumber>;
    latestBlockTime: z.ZodOptional<z.ZodString>;
    latestStateRoot: z.ZodOptional<z.ZodUnknown>;
    syncing: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    syncing: boolean;
    earliestBlockHash?: unknown;
    earliestBlockHeight?: number | undefined;
    earliestBlockTime?: string | undefined;
    epochId?: unknown;
    epochStartHeight?: number | undefined;
    latestBlockHash?: unknown;
    latestBlockHeight?: number | undefined;
    latestBlockTime?: string | undefined;
    latestStateRoot?: unknown;
}, {
    syncing: boolean;
    earliestBlockHash?: unknown;
    earliestBlockHeight?: number | undefined;
    earliestBlockTime?: string | undefined;
    epochId?: unknown;
    epochStartHeight?: number | undefined;
    latestBlockHash?: unknown;
    latestBlockHeight?: number | undefined;
    latestBlockTime?: string | undefined;
    latestStateRoot?: unknown;
}>;
export declare const ValidatorInfoSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountId?: unknown;
}, {
    accountId?: unknown;
}>;
export declare const ValidatorKickoutReasonSchema: z.ZodUnknown;
export declare const ValidatorKickoutViewSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
    reason: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    accountId?: unknown;
    reason?: unknown;
}, {
    accountId?: unknown;
    reason?: unknown;
}>;
export declare const ValidatorStakeViewSchema: z.ZodUnknown;
export declare const ValidatorStakeViewV1Schema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
    publicKey: z.ZodOptional<z.ZodUnknown>;
    stake: z.ZodString;
}, "strip", z.ZodTypeAny, {
    stake: string;
    publicKey?: unknown;
    accountId?: unknown;
}, {
    stake: string;
    publicKey?: unknown;
    accountId?: unknown;
}>;
