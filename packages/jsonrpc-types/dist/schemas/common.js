"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnownProducerViewSchema = exports.JsonRpcResponseForRpcSplitStorageInfoResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcQueryResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcLightClientExecutionProofResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcGasPriceResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcCongestionLevelResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcClientConfigResponseAndRpcErrorSchema = exports.JsonRpcResponseForNullableRpcHealthResponseAndRpcErrorSchema = exports.JsonRpcResponseForCryptoHashAndRpcErrorSchema = exports.JsonRpcResponseForArrayOfRangeOfUint64AndRpcErrorSchema = exports.JsonRpcRequestForQuerySchema = exports.JsonRpcRequestForLightClientProofSchema = exports.JsonRpcRequestForHealthSchema = exports.JsonRpcRequestForGasPriceSchema = exports.JsonRpcRequestForClientConfigSchema = exports.JsonRpcRequestForChangesSchema = exports.JsonRpcRequestForEXPERIMENTALSplitStorageInfoSchema = exports.JsonRpcRequestForEXPERIMENTALMaintenanceWindowsSchema = exports.JsonRpcRequestForEXPERIMENTALLightClientProofSchema = exports.JsonRpcRequestForEXPERIMENTALCongestionLevelSchema = exports.JsonRpcRequestForEXPERIMENTALChangesSchema = exports.HostErrorSchema = exports.GCConfigSchema = exports.FunctionCallPermissionSchema = exports.FunctionCallErrorSchema = exports.FinalitySchema = exports.FinalExecutionOutcomeViewSchema = exports.FeeSchema = exports.ExternalStorageLocationSchema = exports.ExternalStorageConfigSchema = exports.ExtCostsConfigViewSchema = exports.ExecutionOutcomeWithIdViewSchema = exports.ExecutionOutcomeViewSchema = exports.ExecutionMetadataViewSchema = exports.EpochSyncConfigSchema = exports.EpochIdSchema = exports.DurationAsStdSchemaProviderSchema = exports.DumpConfigSchema = exports.DirectionSchema = exports.DataReceiverViewSchema = exports.CryptoHashSchema = exports.CostGasUsedSchema = exports.CongestionInfoViewSchema = exports.CongestionControlConfigViewSchema = exports.CompilationErrorSchema = exports.CallResultSchema = exports.BandwidthRequestsV1Schema = exports.BandwidthRequestsSchema = exports.BandwidthRequestBitmapSchema = exports.BandwidthRequestSchema = void 0;
exports.VersionSchema = exports.VMKindSchema = exports.VMConfigViewSchema = exports.TrackedShardsConfigSchema = exports.Tier1ProxyViewSchema = exports.SyncConfigSchema = exports.SyncConcurrencySchema = exports.SyncCheckpointSchema = exports.StorageUsageConfigViewSchema = exports.StorageGetModeSchema = exports.StorageErrorSchema = exports.SignatureSchema = exports.ShardUIdSchema = exports.ShardLayoutV2Schema = exports.ShardLayoutV1Schema = exports.ShardLayoutV0Schema = exports.ShardLayoutSchema = exports.ShardIdSchema = exports.RuntimeFeesConfigViewSchema = exports.RuntimeConfigViewSchema = exports.RpcSplitStorageInfoResponseSchema = exports.RpcSplitStorageInfoRequestSchema = exports.RpcRequestValidationErrorKindSchema = exports.RpcQueryResponseSchema = exports.RpcQueryRequestSchema = exports.RpcPeerInfoSchema = exports.RpcMaintenanceWindowsRequestSchema = exports.RpcLightClientExecutionProofResponseSchema = exports.RpcLightClientExecutionProofRequestSchema = exports.RpcKnownProducerSchema = exports.RpcHealthResponseSchema = exports.RpcHealthRequestSchema = exports.RpcGasPriceResponseSchema = exports.RpcGasPriceRequestSchema = exports.RpcErrorSchema = exports.RpcCongestionLevelResponseSchema = exports.RpcCongestionLevelRequestSchema = exports.RpcClientConfigResponseSchema = exports.RpcClientConfigRequestSchema = exports.RangeOfUint64Schema = exports.PrepareErrorSchema = exports.PeerInfoViewSchema = exports.PeerIdSchema = exports.MutableConfigValueSchema = exports.MissingTrieValueContextSchema = exports.MissingTrieValueSchema = exports.MethodResolveErrorSchema = exports.MerklePathItemSchema = exports.LogSummaryStyleSchema = exports.LimitConfigSchema = void 0;
exports.WitnessConfigViewSchema = exports.WasmTrapSchema = void 0;
const zod_1 = require("zod");
exports.BandwidthRequestSchema = zod_1.z.object({
    requestedValuesBitmap: zod_1.z.unknown().optional(),
    toShard: zod_1.z.number().optional()
});
exports.BandwidthRequestBitmapSchema = zod_1.z.object({
    data: zod_1.z.array(zod_1.z.number())
});
exports.BandwidthRequestsSchema = zod_1.z.unknown();
exports.BandwidthRequestsV1Schema = zod_1.z.object({
    requests: zod_1.z.array(zod_1.z.unknown())
});
exports.CallResultSchema = zod_1.z.object({
    logs: zod_1.z.array(zod_1.z.string()),
    result: zod_1.z.array(zod_1.z.number())
});
exports.CompilationErrorSchema = zod_1.z.unknown();
exports.CongestionControlConfigViewSchema = zod_1.z.object({
    allowedShardOutgoingGas: zod_1.z.number().optional(),
    maxCongestionIncomingGas: zod_1.z.number().optional(),
    maxCongestionMemoryConsumption: zod_1.z.number().optional(),
    maxCongestionMissedChunks: zod_1.z.number().optional(),
    maxCongestionOutgoingGas: zod_1.z.number().optional(),
    maxOutgoingGas: zod_1.z.number().optional(),
    maxTxGas: zod_1.z.number().optional(),
    minOutgoingGas: zod_1.z.number().optional(),
    minTxGas: zod_1.z.number().optional(),
    outgoingReceiptsBigSizeLimit: zod_1.z.number().optional(),
    outgoingReceiptsUsualSizeLimit: zod_1.z.number().optional(),
    rejectTxCongestionThreshold: zod_1.z.number().optional()
});
exports.CongestionInfoViewSchema = zod_1.z.object({
    allowedShard: zod_1.z.number().optional(),
    bufferedReceiptsGas: zod_1.z.string().optional(),
    delayedReceiptsGas: zod_1.z.string().optional(),
    receiptBytes: zod_1.z.number().optional()
});
exports.CostGasUsedSchema = zod_1.z.object({
    cost: zod_1.z.string(),
    costCategory: zod_1.z.string().optional(),
    gasUsed: zod_1.z.string().optional()
});
exports.CryptoHashSchema = zod_1.z.string();
exports.DataReceiverViewSchema = zod_1.z.object({
    dataId: zod_1.z.unknown().optional(),
    receiverId: zod_1.z.unknown().optional()
});
exports.DirectionSchema = zod_1.z.enum(['Left', 'Right']);
exports.DumpConfigSchema = zod_1.z.object({
    credentialsFile: zod_1.z.string().optional(),
    iterationDelay: zod_1.z.unknown().optional(),
    location: zod_1.z.unknown(),
    restartDumpForShards: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.DurationAsStdSchemaProviderSchema = zod_1.z.object({
    nanos: zod_1.z.number(),
    secs: zod_1.z.number()
});
exports.EpochIdSchema = zod_1.z.unknown();
exports.EpochSyncConfigSchema = zod_1.z.object({
    disableEpochSyncForBootstrapping: zod_1.z.boolean().optional(),
    epochSyncHorizon: zod_1.z.number().optional(),
    ignoreEpochSyncNetworkRequests: zod_1.z.boolean().optional(),
    timeoutForEpochSync: zod_1.z.unknown().optional()
});
exports.ExecutionMetadataViewSchema = zod_1.z.object({
    gasProfile: zod_1.z.array(zod_1.z.unknown()).optional(),
    version: zod_1.z.number()
});
exports.ExecutionOutcomeViewSchema = zod_1.z.object({
    executorId: zod_1.z.unknown().optional(),
    gasBurnt: zod_1.z.number().optional(),
    logs: zod_1.z.array(zod_1.z.string()),
    metadata: zod_1.z.unknown().optional(),
    receiptIds: zod_1.z.array(zod_1.z.unknown()).optional(),
    status: zod_1.z.unknown(),
    tokensBurnt: zod_1.z.string().optional()
});
exports.ExecutionOutcomeWithIdViewSchema = zod_1.z.object({
    blockHash: zod_1.z.unknown().optional(),
    id: zod_1.z.unknown(),
    outcome: zod_1.z.unknown(),
    proof: zod_1.z.array(zod_1.z.unknown())
});
exports.ExtCostsConfigViewSchema = zod_1.z.object({
    altBn128G1MultiexpBase: zod_1.z.number().optional(),
    altBn128G1MultiexpElement: zod_1.z.number().optional(),
    altBn128G1SumBase: zod_1.z.number().optional(),
    altBn128G1SumElement: zod_1.z.number().optional(),
    altBn128PairingCheckBase: zod_1.z.number().optional(),
    altBn128PairingCheckElement: zod_1.z.number().optional(),
    base: zod_1.z.number(),
    bls12381G1MultiexpBase: zod_1.z.number().optional(),
    bls12381G1MultiexpElement: zod_1.z.number().optional(),
    bls12381G2MultiexpBase: zod_1.z.number().optional(),
    bls12381G2MultiexpElement: zod_1.z.number().optional(),
    bls12381MapFp2ToG2Base: zod_1.z.number().optional(),
    bls12381MapFp2ToG2Element: zod_1.z.number().optional(),
    bls12381MapFpToG1Base: zod_1.z.number().optional(),
    bls12381MapFpToG1Element: zod_1.z.number().optional(),
    bls12381P1DecompressBase: zod_1.z.number().optional(),
    bls12381P1DecompressElement: zod_1.z.number().optional(),
    bls12381P1SumBase: zod_1.z.number().optional(),
    bls12381P1SumElement: zod_1.z.number().optional(),
    bls12381P2DecompressBase: zod_1.z.number().optional(),
    bls12381P2DecompressElement: zod_1.z.number().optional(),
    bls12381P2SumBase: zod_1.z.number().optional(),
    bls12381P2SumElement: zod_1.z.number().optional(),
    bls12381PairingBase: zod_1.z.number().optional(),
    bls12381PairingElement: zod_1.z.number().optional(),
    contractCompileBase: zod_1.z.number().optional(),
    contractCompileBytes: zod_1.z.number().optional(),
    contractLoadingBase: zod_1.z.number().optional(),
    contractLoadingBytes: zod_1.z.number().optional(),
    ecrecoverBase: zod_1.z.number().optional(),
    ed25519VerifyBase: zod_1.z.number().optional(),
    ed25519VerifyByte: zod_1.z.number().optional(),
    keccak256Base: zod_1.z.number().optional(),
    keccak256Byte: zod_1.z.number().optional(),
    keccak512Base: zod_1.z.number().optional(),
    keccak512Byte: zod_1.z.number().optional(),
    logBase: zod_1.z.number().optional(),
    logByte: zod_1.z.number().optional(),
    promiseAndBase: zod_1.z.number().optional(),
    promiseAndPerPromise: zod_1.z.number().optional(),
    promiseReturn: zod_1.z.number().optional(),
    readCachedTrieNode: zod_1.z.number().optional(),
    readMemoryBase: zod_1.z.number().optional(),
    readMemoryByte: zod_1.z.number().optional(),
    readRegisterBase: zod_1.z.number().optional(),
    readRegisterByte: zod_1.z.number().optional(),
    ripemd160Base: zod_1.z.number().optional(),
    ripemd160Block: zod_1.z.number().optional(),
    sha256Base: zod_1.z.number().optional(),
    sha256Byte: zod_1.z.number().optional(),
    storageHasKeyBase: zod_1.z.number().optional(),
    storageHasKeyByte: zod_1.z.number().optional(),
    storageIterCreateFromByte: zod_1.z.number().optional(),
    storageIterCreatePrefixBase: zod_1.z.number().optional(),
    storageIterCreatePrefixByte: zod_1.z.number().optional(),
    storageIterCreateRangeBase: zod_1.z.number().optional(),
    storageIterCreateToByte: zod_1.z.number().optional(),
    storageIterNextBase: zod_1.z.number().optional(),
    storageIterNextKeyByte: zod_1.z.number().optional(),
    storageIterNextValueByte: zod_1.z.number().optional(),
    storageLargeReadOverheadBase: zod_1.z.number().optional(),
    storageLargeReadOverheadByte: zod_1.z.number().optional(),
    storageReadBase: zod_1.z.number().optional(),
    storageReadKeyByte: zod_1.z.number().optional(),
    storageReadValueByte: zod_1.z.number().optional(),
    storageRemoveBase: zod_1.z.number().optional(),
    storageRemoveKeyByte: zod_1.z.number().optional(),
    storageRemoveRetValueByte: zod_1.z.number().optional(),
    storageWriteBase: zod_1.z.number().optional(),
    storageWriteEvictedByte: zod_1.z.number().optional(),
    storageWriteKeyByte: zod_1.z.number().optional(),
    storageWriteValueByte: zod_1.z.number().optional(),
    touchingTrieNode: zod_1.z.number().optional(),
    utf16DecodingBase: zod_1.z.number().optional(),
    utf16DecodingByte: zod_1.z.number().optional(),
    utf8DecodingBase: zod_1.z.number().optional(),
    utf8DecodingByte: zod_1.z.number().optional(),
    validatorStakeBase: zod_1.z.number().optional(),
    validatorTotalStakeBase: zod_1.z.number().optional(),
    writeMemoryBase: zod_1.z.number().optional(),
    writeMemoryByte: zod_1.z.number().optional(),
    writeRegisterBase: zod_1.z.number().optional(),
    writeRegisterByte: zod_1.z.number().optional(),
    yieldCreateBase: zod_1.z.number().optional(),
    yieldCreateByte: zod_1.z.number().optional(),
    yieldResumeBase: zod_1.z.number().optional(),
    yieldResumeByte: zod_1.z.number().optional()
});
exports.ExternalStorageConfigSchema = zod_1.z.object({
    externalStorageFallbackThreshold: zod_1.z.number().optional(),
    location: zod_1.z.unknown(),
    numConcurrentRequests: zod_1.z.number().optional(),
    numConcurrentRequestsDuringCatchup: zod_1.z.number().optional()
});
exports.ExternalStorageLocationSchema = zod_1.z.unknown();
exports.FeeSchema = zod_1.z.object({
    execution: zod_1.z.number(),
    sendNotSir: zod_1.z.number().optional(),
    sendSir: zod_1.z.number().optional()
});
exports.FinalExecutionOutcomeViewSchema = zod_1.z.object({
    receiptsOutcome: zod_1.z.array(zod_1.z.unknown()).optional(),
    status: zod_1.z.unknown(),
    transaction: zod_1.z.unknown(),
    transactionOutcome: zod_1.z.unknown().optional()
});
exports.FinalitySchema = zod_1.z.enum(['optimistic', 'near-final', 'final']);
exports.FunctionCallErrorSchema = zod_1.z.unknown();
exports.FunctionCallPermissionSchema = zod_1.z.object({
    allowance: zod_1.z.string().optional(),
    methodNames: zod_1.z.array(zod_1.z.string()).optional(),
    receiverId: zod_1.z.string().optional()
});
exports.GCConfigSchema = zod_1.z.object({
    gcBlocksLimit: zod_1.z.number().optional(),
    gcForkCleanStep: zod_1.z.number().optional(),
    gcNumEpochsToKeep: zod_1.z.number().optional(),
    gcStepPeriod: zod_1.z.unknown().optional()
});
exports.HostErrorSchema = zod_1.z.unknown();
exports.JsonRpcRequestForEXPERIMENTALChangesSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_changes']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForEXPERIMENTALCongestionLevelSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_congestion_level']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForEXPERIMENTALLightClientProofSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_light_client_proof']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForEXPERIMENTALMaintenanceWindowsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_maintenance_windows']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForEXPERIMENTALSplitStorageInfoSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_split_storage_info']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForChangesSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['changes']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForClientConfigSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['client_config']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForGasPriceSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['gas_price']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForHealthSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['health']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForLightClientProofSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['light_client_proof']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForQuerySchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['query']),
    params: zod_1.z.unknown()
});
exports.JsonRpcResponseForArrayOfRangeOfUint64AndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForCryptoHashAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForNullableRpcHealthResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcClientConfigResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcCongestionLevelResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcGasPriceResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcLightClientExecutionProofResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcQueryResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcSplitStorageInfoResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.KnownProducerViewSchema = zod_1.z.object({
    accountId: zod_1.z.unknown().optional(),
    nextHops: zod_1.z.array(zod_1.z.unknown()).optional(),
    peerId: zod_1.z.unknown().optional()
});
exports.LimitConfigSchema = zod_1.z.object({
    accountIdValidityRulesVersion: zod_1.z.unknown().optional(),
    initialMemoryPages: zod_1.z.number().optional(),
    maxActionsPerReceipt: zod_1.z.number().optional(),
    maxArgumentsLength: zod_1.z.number().optional(),
    maxContractSize: zod_1.z.number().optional(),
    maxFunctionsNumberPerContract: zod_1.z.number().optional(),
    maxGasBurnt: zod_1.z.number().optional(),
    maxLengthMethodName: zod_1.z.number().optional(),
    maxLengthReturnedData: zod_1.z.number().optional(),
    maxLengthStorageKey: zod_1.z.number().optional(),
    maxLengthStorageValue: zod_1.z.number().optional(),
    maxLocalsPerContract: zod_1.z.number().optional(),
    maxMemoryPages: zod_1.z.number().optional(),
    maxNumberBytesMethodNames: zod_1.z.number().optional(),
    maxNumberInputDataDependencies: zod_1.z.number().optional(),
    maxNumberLogs: zod_1.z.number().optional(),
    maxNumberRegisters: zod_1.z.number().optional(),
    maxPromisesPerFunctionCallAction: zod_1.z.number().optional(),
    maxReceiptSize: zod_1.z.number().optional(),
    maxRegisterSize: zod_1.z.number().optional(),
    maxStackHeight: zod_1.z.number().optional(),
    maxTotalLogLength: zod_1.z.number().optional(),
    maxTotalPrepaidGas: zod_1.z.number().optional(),
    maxTransactionSize: zod_1.z.number().optional(),
    maxYieldPayloadSize: zod_1.z.number().optional(),
    perReceiptStorageProofSizeLimit: zod_1.z.number().optional(),
    registersMemoryLimit: zod_1.z.number().optional(),
    yieldTimeoutLengthInBlocks: zod_1.z.number().optional()
});
exports.LogSummaryStyleSchema = zod_1.z.enum(['plain', 'colored']);
exports.MerklePathItemSchema = zod_1.z.object({
    direction: zod_1.z.unknown(),
    hash: zod_1.z.unknown()
});
exports.MethodResolveErrorSchema = zod_1.z.enum(['MethodEmptyName', 'MethodNotFound', 'MethodInvalidSignature']);
exports.MissingTrieValueSchema = zod_1.z.object({
    context: zod_1.z.unknown(),
    hash: zod_1.z.unknown()
});
exports.MissingTrieValueContextSchema = zod_1.z.unknown();
exports.MutableConfigValueSchema = zod_1.z.string();
exports.PeerIdSchema = zod_1.z.unknown();
exports.PeerInfoViewSchema = zod_1.z.object({
    accountId: zod_1.z.unknown().optional(),
    addr: zod_1.z.string(),
    archival: zod_1.z.boolean(),
    blockHash: zod_1.z.unknown().optional(),
    connectionEstablishedTimeMillis: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    isHighestBlockInvalid: zod_1.z.boolean().optional(),
    isOutboundPeer: zod_1.z.boolean().optional(),
    lastTimePeerRequestedMillis: zod_1.z.number().optional(),
    lastTimeReceivedMessageMillis: zod_1.z.number().optional(),
    nonce: zod_1.z.number(),
    peerId: zod_1.z.unknown().optional(),
    receivedBytesPerSec: zod_1.z.number().optional(),
    sentBytesPerSec: zod_1.z.number().optional(),
    trackedShards: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.PrepareErrorSchema = zod_1.z.unknown();
exports.RangeOfUint64Schema = zod_1.z.object({
    end: zod_1.z.number(),
    start: zod_1.z.number()
});
exports.RpcClientConfigRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcClientConfigResponseSchema = zod_1.z.object({
    archive: zod_1.z.boolean(),
    blockFetchHorizon: zod_1.z.number().optional(),
    blockHeaderFetchHorizon: zod_1.z.number().optional(),
    blockProductionTrackingDelay: zod_1.z.array(zod_1.z.number()).optional(),
    catchupStepPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    chainId: zod_1.z.string().optional(),
    chunkDistributionNetwork: zod_1.z.unknown().optional(),
    chunkRequestRetryPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    chunkWaitMult: zod_1.z.array(zod_1.z.number()).optional(),
    clientBackgroundMigrationThreads: zod_1.z.number().optional(),
    doomslugStepPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    enableMultilineLogging: zod_1.z.boolean().optional(),
    enableStatisticsExport: zod_1.z.boolean().optional(),
    epochLength: zod_1.z.number().optional(),
    epochSync: zod_1.z.unknown().optional(),
    expectedShutdown: zod_1.z.unknown().optional(),
    gc: zod_1.z.unknown(),
    headerSyncExpectedHeightPerSecond: zod_1.z.number().optional(),
    headerSyncInitialTimeout: zod_1.z.array(zod_1.z.number()).optional(),
    headerSyncProgressTimeout: zod_1.z.array(zod_1.z.number()).optional(),
    headerSyncStallBanTimeout: zod_1.z.array(zod_1.z.number()).optional(),
    logSummaryPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    logSummaryStyle: zod_1.z.unknown().optional(),
    maxBlockProductionDelay: zod_1.z.array(zod_1.z.number()).optional(),
    maxBlockWaitDelay: zod_1.z.array(zod_1.z.number()).optional(),
    maxGasBurntView: zod_1.z.number().optional(),
    minBlockProductionDelay: zod_1.z.array(zod_1.z.number()).optional(),
    minNumPeers: zod_1.z.number().optional(),
    numBlockProducerSeats: zod_1.z.number().optional(),
    orphanStateWitnessMaxSize: zod_1.z.number().optional(),
    orphanStateWitnessPoolSize: zod_1.z.number().optional(),
    produceChunkAddTransactionsTimeLimit: zod_1.z.string().optional(),
    produceEmptyBlocks: zod_1.z.boolean().optional(),
    reshardingConfig: zod_1.z.unknown().optional(),
    rpcAddr: zod_1.z.string().optional(),
    saveInvalidWitnesses: zod_1.z.boolean().optional(),
    saveLatestWitnesses: zod_1.z.boolean().optional(),
    saveTrieChanges: zod_1.z.boolean().optional(),
    saveTxOutcomes: zod_1.z.boolean().optional(),
    skipSyncWait: zod_1.z.boolean().optional(),
    stateSync: zod_1.z.unknown().optional(),
    stateSyncEnabled: zod_1.z.boolean().optional(),
    stateSyncExternalBackoff: zod_1.z.array(zod_1.z.number()).optional(),
    stateSyncExternalTimeout: zod_1.z.array(zod_1.z.number()).optional(),
    stateSyncP2pTimeout: zod_1.z.array(zod_1.z.number()).optional(),
    stateSyncRetryBackoff: zod_1.z.array(zod_1.z.number()).optional(),
    syncCheckPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    syncHeightThreshold: zod_1.z.number().optional(),
    syncMaxBlockRequests: zod_1.z.number().optional(),
    syncStepPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    trackedShardsConfig: zod_1.z.unknown().optional(),
    transactionPoolSizeLimit: zod_1.z.number().optional(),
    transactionRequestHandlerThreads: zod_1.z.number().optional(),
    trieViewerStateSizeLimit: zod_1.z.number().optional(),
    ttlAccountIdRouter: zod_1.z.array(zod_1.z.number()).optional(),
    txRoutingHeightHorizon: zod_1.z.number().optional(),
    version: zod_1.z.unknown(),
    viewClientThreads: zod_1.z.number().optional(),
    viewClientThrottlePeriod: zod_1.z.array(zod_1.z.number()).optional()
});
exports.RpcCongestionLevelRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcCongestionLevelResponseSchema = zod_1.z.object({
    congestionLevel: zod_1.z.number().optional()
});
exports.RpcErrorSchema = zod_1.z.object({
    cause: zod_1.z.unknown().optional(),
    code: zod_1.z.number(),
    data: zod_1.z.unknown().optional(),
    message: zod_1.z.string(),
    name: zod_1.z.unknown().optional()
});
exports.RpcGasPriceRequestSchema = zod_1.z.object({
    blockId: zod_1.z.unknown().optional()
});
exports.RpcGasPriceResponseSchema = zod_1.z.object({
    gasPrice: zod_1.z.string().optional()
});
exports.RpcHealthRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcHealthResponseSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcKnownProducerSchema = zod_1.z.object({
    accountId: zod_1.z.unknown().optional(),
    addr: zod_1.z.string().optional(),
    peerId: zod_1.z.unknown().optional()
});
exports.RpcLightClientExecutionProofRequestSchema = zod_1.z.object({
    lightClientHead: zod_1.z.unknown().optional()
});
exports.RpcLightClientExecutionProofResponseSchema = zod_1.z.object({
    blockHeaderLite: zod_1.z.unknown().optional(),
    blockProof: zod_1.z.array(zod_1.z.unknown()).optional(),
    outcomeProof: zod_1.z.unknown().optional(),
    outcomeRootProof: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.RpcMaintenanceWindowsRequestSchema = zod_1.z.object({
    accountId: zod_1.z.unknown().optional()
});
exports.RpcPeerInfoSchema = zod_1.z.object({
    accountId: zod_1.z.unknown().optional(),
    addr: zod_1.z.string().optional(),
    id: zod_1.z.unknown()
});
exports.RpcQueryRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcQueryResponseSchema = zod_1.z.object({
    blockHash: zod_1.z.unknown().optional(),
    blockHeight: zod_1.z.number().optional()
});
exports.RpcRequestValidationErrorKindSchema = zod_1.z.unknown();
exports.RpcSplitStorageInfoRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcSplitStorageInfoResponseSchema = zod_1.z.object({
    coldHeadHeight: zod_1.z.number().optional(),
    finalHeadHeight: zod_1.z.number().optional(),
    headHeight: zod_1.z.number().optional(),
    hotDbKind: zod_1.z.string().optional()
});
exports.RuntimeConfigViewSchema = zod_1.z.object({
    accountCreationConfig: zod_1.z.unknown().optional(),
    congestionControlConfig: zod_1.z.unknown().optional(),
    storageAmountPerByte: zod_1.z.string().optional(),
    transactionCosts: zod_1.z.unknown().optional(),
    wasmConfig: zod_1.z.unknown().optional(),
    witnessConfig: zod_1.z.unknown().optional()
});
exports.RuntimeFeesConfigViewSchema = zod_1.z.object({
    actionCreationConfig: zod_1.z.unknown().optional(),
    actionReceiptCreationConfig: zod_1.z.unknown().optional(),
    burntGasReward: zod_1.z.array(zod_1.z.number()).optional(),
    dataReceiptCreationConfig: zod_1.z.unknown().optional(),
    pessimisticGasPriceInflationRatio: zod_1.z.array(zod_1.z.number()).optional(),
    storageUsageConfig: zod_1.z.unknown().optional()
});
exports.ShardIdSchema = zod_1.z.number();
exports.ShardLayoutSchema = zod_1.z.unknown();
exports.ShardLayoutV0Schema = zod_1.z.object({
    numShards: zod_1.z.number().optional(),
    version: zod_1.z.number()
});
exports.ShardLayoutV1Schema = zod_1.z.object({
    boundaryAccounts: zod_1.z.array(zod_1.z.unknown()).optional(),
    shardsSplitMap: zod_1.z.array(zod_1.z.array(zod_1.z.unknown())).optional(),
    toParentShardMap: zod_1.z.array(zod_1.z.unknown()).optional(),
    version: zod_1.z.number()
});
exports.ShardLayoutV2Schema = zod_1.z.object({
    boundaryAccounts: zod_1.z.array(zod_1.z.unknown()).optional(),
    idToIndexMap: zod_1.z.record(zod_1.z.unknown()).optional(),
    indexToIdMap: zod_1.z.record(zod_1.z.unknown()).optional(),
    shardIds: zod_1.z.array(zod_1.z.unknown()).optional(),
    shardsParentMap: zod_1.z.record(zod_1.z.unknown()).optional(),
    shardsSplitMap: zod_1.z.record(zod_1.z.unknown()).optional(),
    version: zod_1.z.number()
});
exports.ShardUIdSchema = zod_1.z.object({
    shardId: zod_1.z.number().optional(),
    version: zod_1.z.number()
});
exports.SignatureSchema = zod_1.z.string();
exports.StorageErrorSchema = zod_1.z.unknown();
exports.StorageGetModeSchema = zod_1.z.enum(['FlatStorage', 'Trie']);
exports.StorageUsageConfigViewSchema = zod_1.z.object({
    numBytesAccount: zod_1.z.number().optional(),
    numExtraBytesRecord: zod_1.z.number().optional()
});
exports.SyncCheckpointSchema = zod_1.z.enum(['genesis', 'earliest_available']);
exports.SyncConcurrencySchema = zod_1.z.object({
    apply: zod_1.z.number(),
    applyDuringCatchup: zod_1.z.number().optional(),
    peerDownloads: zod_1.z.number().optional(),
    perShard: zod_1.z.number().optional()
});
exports.SyncConfigSchema = zod_1.z.unknown();
exports.Tier1ProxyViewSchema = zod_1.z.object({
    addr: zod_1.z.string(),
    peerId: zod_1.z.unknown().optional()
});
exports.TrackedShardsConfigSchema = zod_1.z.unknown();
exports.VMConfigViewSchema = zod_1.z.object({
    discardCustomSections: zod_1.z.boolean().optional(),
    ethImplicitAccounts: zod_1.z.boolean().optional(),
    extCosts: zod_1.z.unknown().optional(),
    fixContractLoadingCost: zod_1.z.boolean().optional(),
    globalContractHostFns: zod_1.z.boolean().optional(),
    growMemCost: zod_1.z.number().optional(),
    implicitAccountCreation: zod_1.z.boolean().optional(),
    limitConfig: zod_1.z.unknown().optional(),
    reftypesBulkMemory: zod_1.z.boolean().optional(),
    regularOpCost: zod_1.z.number().optional(),
    saturatingFloatToInt: zod_1.z.boolean().optional(),
    storageGetMode: zod_1.z.unknown().optional(),
    vmKind: zod_1.z.unknown().optional()
});
exports.VMKindSchema = zod_1.z.unknown();
exports.VersionSchema = zod_1.z.object({
    build: zod_1.z.string(),
    commit: zod_1.z.string(),
    rustcVersion: zod_1.z.string().optional(),
    version: zod_1.z.string()
});
exports.WasmTrapSchema = zod_1.z.unknown();
exports.WitnessConfigViewSchema = zod_1.z.object({
    combinedTransactionsSizeLimit: zod_1.z.number().optional(),
    mainStorageProofSizeSoftLimit: zod_1.z.number().optional(),
    newTransactionsValidationStateSizeSoftLimit: zod_1.z.number().optional()
});
