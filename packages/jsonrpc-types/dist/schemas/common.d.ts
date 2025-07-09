/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
import { z } from 'zod';
export declare const BandwidthRequestSchema: z.ZodObject<{
    requestedValuesBitmap: z.ZodOptional<z.ZodUnknown>;
    toShard: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    requestedValuesBitmap?: unknown;
    toShard?: number | undefined;
}, {
    requestedValuesBitmap?: unknown;
    toShard?: number | undefined;
}>;
export declare const BandwidthRequestBitmapSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    data: number[];
}, {
    data: number[];
}>;
export declare const BandwidthRequestsSchema: z.ZodUnknown;
export declare const BandwidthRequestsV1Schema: z.ZodObject<{
    requests: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    requests: unknown[];
}, {
    requests: unknown[];
}>;
export declare const CallResultSchema: z.ZodObject<{
    logs: z.ZodArray<z.ZodString, "many">;
    result: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    logs: string[];
    result: number[];
}, {
    logs: string[];
    result: number[];
}>;
export declare const CompilationErrorSchema: z.ZodUnknown;
export declare const CongestionControlConfigViewSchema: z.ZodObject<{
    allowedShardOutgoingGas: z.ZodOptional<z.ZodNumber>;
    maxCongestionIncomingGas: z.ZodOptional<z.ZodNumber>;
    maxCongestionMemoryConsumption: z.ZodOptional<z.ZodNumber>;
    maxCongestionMissedChunks: z.ZodOptional<z.ZodNumber>;
    maxCongestionOutgoingGas: z.ZodOptional<z.ZodNumber>;
    maxOutgoingGas: z.ZodOptional<z.ZodNumber>;
    maxTxGas: z.ZodOptional<z.ZodNumber>;
    minOutgoingGas: z.ZodOptional<z.ZodNumber>;
    minTxGas: z.ZodOptional<z.ZodNumber>;
    outgoingReceiptsBigSizeLimit: z.ZodOptional<z.ZodNumber>;
    outgoingReceiptsUsualSizeLimit: z.ZodOptional<z.ZodNumber>;
    rejectTxCongestionThreshold: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    allowedShardOutgoingGas?: number | undefined;
    maxCongestionIncomingGas?: number | undefined;
    maxCongestionMemoryConsumption?: number | undefined;
    maxCongestionMissedChunks?: number | undefined;
    maxCongestionOutgoingGas?: number | undefined;
    maxOutgoingGas?: number | undefined;
    maxTxGas?: number | undefined;
    minOutgoingGas?: number | undefined;
    minTxGas?: number | undefined;
    outgoingReceiptsBigSizeLimit?: number | undefined;
    outgoingReceiptsUsualSizeLimit?: number | undefined;
    rejectTxCongestionThreshold?: number | undefined;
}, {
    allowedShardOutgoingGas?: number | undefined;
    maxCongestionIncomingGas?: number | undefined;
    maxCongestionMemoryConsumption?: number | undefined;
    maxCongestionMissedChunks?: number | undefined;
    maxCongestionOutgoingGas?: number | undefined;
    maxOutgoingGas?: number | undefined;
    maxTxGas?: number | undefined;
    minOutgoingGas?: number | undefined;
    minTxGas?: number | undefined;
    outgoingReceiptsBigSizeLimit?: number | undefined;
    outgoingReceiptsUsualSizeLimit?: number | undefined;
    rejectTxCongestionThreshold?: number | undefined;
}>;
export declare const CongestionInfoViewSchema: z.ZodObject<{
    allowedShard: z.ZodOptional<z.ZodNumber>;
    bufferedReceiptsGas: z.ZodOptional<z.ZodString>;
    delayedReceiptsGas: z.ZodOptional<z.ZodString>;
    receiptBytes: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    allowedShard?: number | undefined;
    bufferedReceiptsGas?: string | undefined;
    delayedReceiptsGas?: string | undefined;
    receiptBytes?: number | undefined;
}, {
    allowedShard?: number | undefined;
    bufferedReceiptsGas?: string | undefined;
    delayedReceiptsGas?: string | undefined;
    receiptBytes?: number | undefined;
}>;
export declare const CostGasUsedSchema: z.ZodObject<{
    cost: z.ZodString;
    costCategory: z.ZodOptional<z.ZodString>;
    gasUsed: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    cost: string;
    costCategory?: string | undefined;
    gasUsed?: string | undefined;
}, {
    cost: string;
    costCategory?: string | undefined;
    gasUsed?: string | undefined;
}>;
export declare const CryptoHashSchema: z.ZodString;
export declare const DataReceiverViewSchema: z.ZodObject<{
    dataId: z.ZodOptional<z.ZodUnknown>;
    receiverId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    dataId?: unknown;
    receiverId?: unknown;
}, {
    dataId?: unknown;
    receiverId?: unknown;
}>;
export declare const DirectionSchema: z.ZodEnum<["Left", "Right"]>;
export declare const DumpConfigSchema: z.ZodObject<{
    credentialsFile: z.ZodOptional<z.ZodString>;
    iterationDelay: z.ZodOptional<z.ZodUnknown>;
    location: z.ZodUnknown;
    restartDumpForShards: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    credentialsFile?: string | undefined;
    iterationDelay?: unknown;
    location?: unknown;
    restartDumpForShards?: unknown[] | undefined;
}, {
    credentialsFile?: string | undefined;
    iterationDelay?: unknown;
    location?: unknown;
    restartDumpForShards?: unknown[] | undefined;
}>;
export declare const DurationAsStdSchemaProviderSchema: z.ZodObject<{
    nanos: z.ZodNumber;
    secs: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    nanos: number;
    secs: number;
}, {
    nanos: number;
    secs: number;
}>;
export declare const EpochIdSchema: z.ZodUnknown;
export declare const EpochSyncConfigSchema: z.ZodObject<{
    disableEpochSyncForBootstrapping: z.ZodOptional<z.ZodBoolean>;
    epochSyncHorizon: z.ZodOptional<z.ZodNumber>;
    ignoreEpochSyncNetworkRequests: z.ZodOptional<z.ZodBoolean>;
    timeoutForEpochSync: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    disableEpochSyncForBootstrapping?: boolean | undefined;
    epochSyncHorizon?: number | undefined;
    ignoreEpochSyncNetworkRequests?: boolean | undefined;
    timeoutForEpochSync?: unknown;
}, {
    disableEpochSyncForBootstrapping?: boolean | undefined;
    epochSyncHorizon?: number | undefined;
    ignoreEpochSyncNetworkRequests?: boolean | undefined;
    timeoutForEpochSync?: unknown;
}>;
export declare const ExecutionMetadataViewSchema: z.ZodObject<{
    gasProfile: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: number;
    gasProfile?: unknown[] | undefined;
}, {
    version: number;
    gasProfile?: unknown[] | undefined;
}>;
export declare const ExecutionOutcomeViewSchema: z.ZodObject<{
    executorId: z.ZodOptional<z.ZodUnknown>;
    gasBurnt: z.ZodOptional<z.ZodNumber>;
    logs: z.ZodArray<z.ZodString, "many">;
    metadata: z.ZodOptional<z.ZodUnknown>;
    receiptIds: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    status: z.ZodUnknown;
    tokensBurnt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    logs: string[];
    status?: unknown;
    executorId?: unknown;
    gasBurnt?: number | undefined;
    metadata?: unknown;
    receiptIds?: unknown[] | undefined;
    tokensBurnt?: string | undefined;
}, {
    logs: string[];
    status?: unknown;
    executorId?: unknown;
    gasBurnt?: number | undefined;
    metadata?: unknown;
    receiptIds?: unknown[] | undefined;
    tokensBurnt?: string | undefined;
}>;
export declare const ExecutionOutcomeWithIdViewSchema: z.ZodObject<{
    blockHash: z.ZodOptional<z.ZodUnknown>;
    id: z.ZodUnknown;
    outcome: z.ZodUnknown;
    proof: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    proof: unknown[];
    blockHash?: unknown;
    id?: unknown;
    outcome?: unknown;
}, {
    proof: unknown[];
    blockHash?: unknown;
    id?: unknown;
    outcome?: unknown;
}>;
export declare const ExtCostsConfigViewSchema: z.ZodObject<{
    altBn128G1MultiexpBase: z.ZodOptional<z.ZodNumber>;
    altBn128G1MultiexpElement: z.ZodOptional<z.ZodNumber>;
    altBn128G1SumBase: z.ZodOptional<z.ZodNumber>;
    altBn128G1SumElement: z.ZodOptional<z.ZodNumber>;
    altBn128PairingCheckBase: z.ZodOptional<z.ZodNumber>;
    altBn128PairingCheckElement: z.ZodOptional<z.ZodNumber>;
    base: z.ZodNumber;
    bls12381G1MultiexpBase: z.ZodOptional<z.ZodNumber>;
    bls12381G1MultiexpElement: z.ZodOptional<z.ZodNumber>;
    bls12381G2MultiexpBase: z.ZodOptional<z.ZodNumber>;
    bls12381G2MultiexpElement: z.ZodOptional<z.ZodNumber>;
    bls12381MapFp2ToG2Base: z.ZodOptional<z.ZodNumber>;
    bls12381MapFp2ToG2Element: z.ZodOptional<z.ZodNumber>;
    bls12381MapFpToG1Base: z.ZodOptional<z.ZodNumber>;
    bls12381MapFpToG1Element: z.ZodOptional<z.ZodNumber>;
    bls12381P1DecompressBase: z.ZodOptional<z.ZodNumber>;
    bls12381P1DecompressElement: z.ZodOptional<z.ZodNumber>;
    bls12381P1SumBase: z.ZodOptional<z.ZodNumber>;
    bls12381P1SumElement: z.ZodOptional<z.ZodNumber>;
    bls12381P2DecompressBase: z.ZodOptional<z.ZodNumber>;
    bls12381P2DecompressElement: z.ZodOptional<z.ZodNumber>;
    bls12381P2SumBase: z.ZodOptional<z.ZodNumber>;
    bls12381P2SumElement: z.ZodOptional<z.ZodNumber>;
    bls12381PairingBase: z.ZodOptional<z.ZodNumber>;
    bls12381PairingElement: z.ZodOptional<z.ZodNumber>;
    contractCompileBase: z.ZodOptional<z.ZodNumber>;
    contractCompileBytes: z.ZodOptional<z.ZodNumber>;
    contractLoadingBase: z.ZodOptional<z.ZodNumber>;
    contractLoadingBytes: z.ZodOptional<z.ZodNumber>;
    ecrecoverBase: z.ZodOptional<z.ZodNumber>;
    ed25519VerifyBase: z.ZodOptional<z.ZodNumber>;
    ed25519VerifyByte: z.ZodOptional<z.ZodNumber>;
    keccak256Base: z.ZodOptional<z.ZodNumber>;
    keccak256Byte: z.ZodOptional<z.ZodNumber>;
    keccak512Base: z.ZodOptional<z.ZodNumber>;
    keccak512Byte: z.ZodOptional<z.ZodNumber>;
    logBase: z.ZodOptional<z.ZodNumber>;
    logByte: z.ZodOptional<z.ZodNumber>;
    promiseAndBase: z.ZodOptional<z.ZodNumber>;
    promiseAndPerPromise: z.ZodOptional<z.ZodNumber>;
    promiseReturn: z.ZodOptional<z.ZodNumber>;
    readCachedTrieNode: z.ZodOptional<z.ZodNumber>;
    readMemoryBase: z.ZodOptional<z.ZodNumber>;
    readMemoryByte: z.ZodOptional<z.ZodNumber>;
    readRegisterBase: z.ZodOptional<z.ZodNumber>;
    readRegisterByte: z.ZodOptional<z.ZodNumber>;
    ripemd160Base: z.ZodOptional<z.ZodNumber>;
    ripemd160Block: z.ZodOptional<z.ZodNumber>;
    sha256Base: z.ZodOptional<z.ZodNumber>;
    sha256Byte: z.ZodOptional<z.ZodNumber>;
    storageHasKeyBase: z.ZodOptional<z.ZodNumber>;
    storageHasKeyByte: z.ZodOptional<z.ZodNumber>;
    storageIterCreateFromByte: z.ZodOptional<z.ZodNumber>;
    storageIterCreatePrefixBase: z.ZodOptional<z.ZodNumber>;
    storageIterCreatePrefixByte: z.ZodOptional<z.ZodNumber>;
    storageIterCreateRangeBase: z.ZodOptional<z.ZodNumber>;
    storageIterCreateToByte: z.ZodOptional<z.ZodNumber>;
    storageIterNextBase: z.ZodOptional<z.ZodNumber>;
    storageIterNextKeyByte: z.ZodOptional<z.ZodNumber>;
    storageIterNextValueByte: z.ZodOptional<z.ZodNumber>;
    storageLargeReadOverheadBase: z.ZodOptional<z.ZodNumber>;
    storageLargeReadOverheadByte: z.ZodOptional<z.ZodNumber>;
    storageReadBase: z.ZodOptional<z.ZodNumber>;
    storageReadKeyByte: z.ZodOptional<z.ZodNumber>;
    storageReadValueByte: z.ZodOptional<z.ZodNumber>;
    storageRemoveBase: z.ZodOptional<z.ZodNumber>;
    storageRemoveKeyByte: z.ZodOptional<z.ZodNumber>;
    storageRemoveRetValueByte: z.ZodOptional<z.ZodNumber>;
    storageWriteBase: z.ZodOptional<z.ZodNumber>;
    storageWriteEvictedByte: z.ZodOptional<z.ZodNumber>;
    storageWriteKeyByte: z.ZodOptional<z.ZodNumber>;
    storageWriteValueByte: z.ZodOptional<z.ZodNumber>;
    touchingTrieNode: z.ZodOptional<z.ZodNumber>;
    utf16DecodingBase: z.ZodOptional<z.ZodNumber>;
    utf16DecodingByte: z.ZodOptional<z.ZodNumber>;
    utf8DecodingBase: z.ZodOptional<z.ZodNumber>;
    utf8DecodingByte: z.ZodOptional<z.ZodNumber>;
    validatorStakeBase: z.ZodOptional<z.ZodNumber>;
    validatorTotalStakeBase: z.ZodOptional<z.ZodNumber>;
    writeMemoryBase: z.ZodOptional<z.ZodNumber>;
    writeMemoryByte: z.ZodOptional<z.ZodNumber>;
    writeRegisterBase: z.ZodOptional<z.ZodNumber>;
    writeRegisterByte: z.ZodOptional<z.ZodNumber>;
    yieldCreateBase: z.ZodOptional<z.ZodNumber>;
    yieldCreateByte: z.ZodOptional<z.ZodNumber>;
    yieldResumeBase: z.ZodOptional<z.ZodNumber>;
    yieldResumeByte: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    base: number;
    altBn128G1MultiexpBase?: number | undefined;
    altBn128G1MultiexpElement?: number | undefined;
    altBn128G1SumBase?: number | undefined;
    altBn128G1SumElement?: number | undefined;
    altBn128PairingCheckBase?: number | undefined;
    altBn128PairingCheckElement?: number | undefined;
    bls12381G1MultiexpBase?: number | undefined;
    bls12381G1MultiexpElement?: number | undefined;
    bls12381G2MultiexpBase?: number | undefined;
    bls12381G2MultiexpElement?: number | undefined;
    bls12381MapFp2ToG2Base?: number | undefined;
    bls12381MapFp2ToG2Element?: number | undefined;
    bls12381MapFpToG1Base?: number | undefined;
    bls12381MapFpToG1Element?: number | undefined;
    bls12381P1DecompressBase?: number | undefined;
    bls12381P1DecompressElement?: number | undefined;
    bls12381P1SumBase?: number | undefined;
    bls12381P1SumElement?: number | undefined;
    bls12381P2DecompressBase?: number | undefined;
    bls12381P2DecompressElement?: number | undefined;
    bls12381P2SumBase?: number | undefined;
    bls12381P2SumElement?: number | undefined;
    bls12381PairingBase?: number | undefined;
    bls12381PairingElement?: number | undefined;
    contractCompileBase?: number | undefined;
    contractCompileBytes?: number | undefined;
    contractLoadingBase?: number | undefined;
    contractLoadingBytes?: number | undefined;
    ecrecoverBase?: number | undefined;
    ed25519VerifyBase?: number | undefined;
    ed25519VerifyByte?: number | undefined;
    keccak256Base?: number | undefined;
    keccak256Byte?: number | undefined;
    keccak512Base?: number | undefined;
    keccak512Byte?: number | undefined;
    logBase?: number | undefined;
    logByte?: number | undefined;
    promiseAndBase?: number | undefined;
    promiseAndPerPromise?: number | undefined;
    promiseReturn?: number | undefined;
    readCachedTrieNode?: number | undefined;
    readMemoryBase?: number | undefined;
    readMemoryByte?: number | undefined;
    readRegisterBase?: number | undefined;
    readRegisterByte?: number | undefined;
    ripemd160Base?: number | undefined;
    ripemd160Block?: number | undefined;
    sha256Base?: number | undefined;
    sha256Byte?: number | undefined;
    storageHasKeyBase?: number | undefined;
    storageHasKeyByte?: number | undefined;
    storageIterCreateFromByte?: number | undefined;
    storageIterCreatePrefixBase?: number | undefined;
    storageIterCreatePrefixByte?: number | undefined;
    storageIterCreateRangeBase?: number | undefined;
    storageIterCreateToByte?: number | undefined;
    storageIterNextBase?: number | undefined;
    storageIterNextKeyByte?: number | undefined;
    storageIterNextValueByte?: number | undefined;
    storageLargeReadOverheadBase?: number | undefined;
    storageLargeReadOverheadByte?: number | undefined;
    storageReadBase?: number | undefined;
    storageReadKeyByte?: number | undefined;
    storageReadValueByte?: number | undefined;
    storageRemoveBase?: number | undefined;
    storageRemoveKeyByte?: number | undefined;
    storageRemoveRetValueByte?: number | undefined;
    storageWriteBase?: number | undefined;
    storageWriteEvictedByte?: number | undefined;
    storageWriteKeyByte?: number | undefined;
    storageWriteValueByte?: number | undefined;
    touchingTrieNode?: number | undefined;
    utf16DecodingBase?: number | undefined;
    utf16DecodingByte?: number | undefined;
    utf8DecodingBase?: number | undefined;
    utf8DecodingByte?: number | undefined;
    validatorStakeBase?: number | undefined;
    validatorTotalStakeBase?: number | undefined;
    writeMemoryBase?: number | undefined;
    writeMemoryByte?: number | undefined;
    writeRegisterBase?: number | undefined;
    writeRegisterByte?: number | undefined;
    yieldCreateBase?: number | undefined;
    yieldCreateByte?: number | undefined;
    yieldResumeBase?: number | undefined;
    yieldResumeByte?: number | undefined;
}, {
    base: number;
    altBn128G1MultiexpBase?: number | undefined;
    altBn128G1MultiexpElement?: number | undefined;
    altBn128G1SumBase?: number | undefined;
    altBn128G1SumElement?: number | undefined;
    altBn128PairingCheckBase?: number | undefined;
    altBn128PairingCheckElement?: number | undefined;
    bls12381G1MultiexpBase?: number | undefined;
    bls12381G1MultiexpElement?: number | undefined;
    bls12381G2MultiexpBase?: number | undefined;
    bls12381G2MultiexpElement?: number | undefined;
    bls12381MapFp2ToG2Base?: number | undefined;
    bls12381MapFp2ToG2Element?: number | undefined;
    bls12381MapFpToG1Base?: number | undefined;
    bls12381MapFpToG1Element?: number | undefined;
    bls12381P1DecompressBase?: number | undefined;
    bls12381P1DecompressElement?: number | undefined;
    bls12381P1SumBase?: number | undefined;
    bls12381P1SumElement?: number | undefined;
    bls12381P2DecompressBase?: number | undefined;
    bls12381P2DecompressElement?: number | undefined;
    bls12381P2SumBase?: number | undefined;
    bls12381P2SumElement?: number | undefined;
    bls12381PairingBase?: number | undefined;
    bls12381PairingElement?: number | undefined;
    contractCompileBase?: number | undefined;
    contractCompileBytes?: number | undefined;
    contractLoadingBase?: number | undefined;
    contractLoadingBytes?: number | undefined;
    ecrecoverBase?: number | undefined;
    ed25519VerifyBase?: number | undefined;
    ed25519VerifyByte?: number | undefined;
    keccak256Base?: number | undefined;
    keccak256Byte?: number | undefined;
    keccak512Base?: number | undefined;
    keccak512Byte?: number | undefined;
    logBase?: number | undefined;
    logByte?: number | undefined;
    promiseAndBase?: number | undefined;
    promiseAndPerPromise?: number | undefined;
    promiseReturn?: number | undefined;
    readCachedTrieNode?: number | undefined;
    readMemoryBase?: number | undefined;
    readMemoryByte?: number | undefined;
    readRegisterBase?: number | undefined;
    readRegisterByte?: number | undefined;
    ripemd160Base?: number | undefined;
    ripemd160Block?: number | undefined;
    sha256Base?: number | undefined;
    sha256Byte?: number | undefined;
    storageHasKeyBase?: number | undefined;
    storageHasKeyByte?: number | undefined;
    storageIterCreateFromByte?: number | undefined;
    storageIterCreatePrefixBase?: number | undefined;
    storageIterCreatePrefixByte?: number | undefined;
    storageIterCreateRangeBase?: number | undefined;
    storageIterCreateToByte?: number | undefined;
    storageIterNextBase?: number | undefined;
    storageIterNextKeyByte?: number | undefined;
    storageIterNextValueByte?: number | undefined;
    storageLargeReadOverheadBase?: number | undefined;
    storageLargeReadOverheadByte?: number | undefined;
    storageReadBase?: number | undefined;
    storageReadKeyByte?: number | undefined;
    storageReadValueByte?: number | undefined;
    storageRemoveBase?: number | undefined;
    storageRemoveKeyByte?: number | undefined;
    storageRemoveRetValueByte?: number | undefined;
    storageWriteBase?: number | undefined;
    storageWriteEvictedByte?: number | undefined;
    storageWriteKeyByte?: number | undefined;
    storageWriteValueByte?: number | undefined;
    touchingTrieNode?: number | undefined;
    utf16DecodingBase?: number | undefined;
    utf16DecodingByte?: number | undefined;
    utf8DecodingBase?: number | undefined;
    utf8DecodingByte?: number | undefined;
    validatorStakeBase?: number | undefined;
    validatorTotalStakeBase?: number | undefined;
    writeMemoryBase?: number | undefined;
    writeMemoryByte?: number | undefined;
    writeRegisterBase?: number | undefined;
    writeRegisterByte?: number | undefined;
    yieldCreateBase?: number | undefined;
    yieldCreateByte?: number | undefined;
    yieldResumeBase?: number | undefined;
    yieldResumeByte?: number | undefined;
}>;
export declare const ExternalStorageConfigSchema: z.ZodObject<{
    externalStorageFallbackThreshold: z.ZodOptional<z.ZodNumber>;
    location: z.ZodUnknown;
    numConcurrentRequests: z.ZodOptional<z.ZodNumber>;
    numConcurrentRequestsDuringCatchup: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    location?: unknown;
    externalStorageFallbackThreshold?: number | undefined;
    numConcurrentRequests?: number | undefined;
    numConcurrentRequestsDuringCatchup?: number | undefined;
}, {
    location?: unknown;
    externalStorageFallbackThreshold?: number | undefined;
    numConcurrentRequests?: number | undefined;
    numConcurrentRequestsDuringCatchup?: number | undefined;
}>;
export declare const ExternalStorageLocationSchema: z.ZodUnknown;
export declare const FeeSchema: z.ZodObject<{
    execution: z.ZodNumber;
    sendNotSir: z.ZodOptional<z.ZodNumber>;
    sendSir: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    execution: number;
    sendNotSir?: number | undefined;
    sendSir?: number | undefined;
}, {
    execution: number;
    sendNotSir?: number | undefined;
    sendSir?: number | undefined;
}>;
export declare const FinalExecutionOutcomeViewSchema: z.ZodObject<{
    receiptsOutcome: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    status: z.ZodUnknown;
    transaction: z.ZodUnknown;
    transactionOutcome: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    status?: unknown;
    receiptsOutcome?: unknown[] | undefined;
    transaction?: unknown;
    transactionOutcome?: unknown;
}, {
    status?: unknown;
    receiptsOutcome?: unknown[] | undefined;
    transaction?: unknown;
    transactionOutcome?: unknown;
}>;
export declare const FinalitySchema: z.ZodEnum<["optimistic", "near-final", "final"]>;
export declare const FunctionCallErrorSchema: z.ZodUnknown;
export declare const FunctionCallPermissionSchema: z.ZodObject<{
    allowance: z.ZodOptional<z.ZodString>;
    methodNames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    receiverId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    receiverId?: string | undefined;
    allowance?: string | undefined;
    methodNames?: string[] | undefined;
}, {
    receiverId?: string | undefined;
    allowance?: string | undefined;
    methodNames?: string[] | undefined;
}>;
export declare const GCConfigSchema: z.ZodObject<{
    gcBlocksLimit: z.ZodOptional<z.ZodNumber>;
    gcForkCleanStep: z.ZodOptional<z.ZodNumber>;
    gcNumEpochsToKeep: z.ZodOptional<z.ZodNumber>;
    gcStepPeriod: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    gcBlocksLimit?: number | undefined;
    gcForkCleanStep?: number | undefined;
    gcNumEpochsToKeep?: number | undefined;
    gcStepPeriod?: unknown;
}, {
    gcBlocksLimit?: number | undefined;
    gcForkCleanStep?: number | undefined;
    gcNumEpochsToKeep?: number | undefined;
    gcStepPeriod?: unknown;
}>;
export declare const HostErrorSchema: z.ZodUnknown;
export declare const JsonRpcRequestForEXPERIMENTALChangesSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_changes"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_changes";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_changes";
    params?: unknown;
}>;
export declare const JsonRpcRequestForEXPERIMENTALCongestionLevelSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_congestion_level"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_congestion_level";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_congestion_level";
    params?: unknown;
}>;
export declare const JsonRpcRequestForEXPERIMENTALLightClientProofSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_light_client_proof"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_light_client_proof";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_light_client_proof";
    params?: unknown;
}>;
export declare const JsonRpcRequestForEXPERIMENTALMaintenanceWindowsSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_maintenance_windows"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_maintenance_windows";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_maintenance_windows";
    params?: unknown;
}>;
export declare const JsonRpcRequestForEXPERIMENTALSplitStorageInfoSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_split_storage_info"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_split_storage_info";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_split_storage_info";
    params?: unknown;
}>;
export declare const JsonRpcRequestForChangesSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["changes"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "changes";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "changes";
    params?: unknown;
}>;
export declare const JsonRpcRequestForClientConfigSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["client_config"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "client_config";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "client_config";
    params?: unknown;
}>;
export declare const JsonRpcRequestForGasPriceSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["gas_price"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "gas_price";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "gas_price";
    params?: unknown;
}>;
export declare const JsonRpcRequestForHealthSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["health"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "health";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "health";
    params?: unknown;
}>;
export declare const JsonRpcRequestForLightClientProofSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["light_client_proof"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "light_client_proof";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "light_client_proof";
    params?: unknown;
}>;
export declare const JsonRpcRequestForQuerySchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["query"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "query";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "query";
    params?: unknown;
}>;
export declare const JsonRpcResponseForArrayOfRangeOfUint64AndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseForCryptoHashAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseForNullableRpcHealthResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseForRpcClientConfigResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseForRpcCongestionLevelResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseForRpcGasPriceResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseForRpcLightClientExecutionProofResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseForRpcQueryResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseForRpcSplitStorageInfoResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const KnownProducerViewSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
    nextHops: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    peerId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountId?: unknown;
    nextHops?: unknown[] | undefined;
    peerId?: unknown;
}, {
    accountId?: unknown;
    nextHops?: unknown[] | undefined;
    peerId?: unknown;
}>;
export declare const LimitConfigSchema: z.ZodObject<{
    accountIdValidityRulesVersion: z.ZodOptional<z.ZodUnknown>;
    initialMemoryPages: z.ZodOptional<z.ZodNumber>;
    maxActionsPerReceipt: z.ZodOptional<z.ZodNumber>;
    maxArgumentsLength: z.ZodOptional<z.ZodNumber>;
    maxContractSize: z.ZodOptional<z.ZodNumber>;
    maxFunctionsNumberPerContract: z.ZodOptional<z.ZodNumber>;
    maxGasBurnt: z.ZodOptional<z.ZodNumber>;
    maxLengthMethodName: z.ZodOptional<z.ZodNumber>;
    maxLengthReturnedData: z.ZodOptional<z.ZodNumber>;
    maxLengthStorageKey: z.ZodOptional<z.ZodNumber>;
    maxLengthStorageValue: z.ZodOptional<z.ZodNumber>;
    maxLocalsPerContract: z.ZodOptional<z.ZodNumber>;
    maxMemoryPages: z.ZodOptional<z.ZodNumber>;
    maxNumberBytesMethodNames: z.ZodOptional<z.ZodNumber>;
    maxNumberInputDataDependencies: z.ZodOptional<z.ZodNumber>;
    maxNumberLogs: z.ZodOptional<z.ZodNumber>;
    maxNumberRegisters: z.ZodOptional<z.ZodNumber>;
    maxPromisesPerFunctionCallAction: z.ZodOptional<z.ZodNumber>;
    maxReceiptSize: z.ZodOptional<z.ZodNumber>;
    maxRegisterSize: z.ZodOptional<z.ZodNumber>;
    maxStackHeight: z.ZodOptional<z.ZodNumber>;
    maxTotalLogLength: z.ZodOptional<z.ZodNumber>;
    maxTotalPrepaidGas: z.ZodOptional<z.ZodNumber>;
    maxTransactionSize: z.ZodOptional<z.ZodNumber>;
    maxYieldPayloadSize: z.ZodOptional<z.ZodNumber>;
    perReceiptStorageProofSizeLimit: z.ZodOptional<z.ZodNumber>;
    registersMemoryLimit: z.ZodOptional<z.ZodNumber>;
    yieldTimeoutLengthInBlocks: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    accountIdValidityRulesVersion?: unknown;
    initialMemoryPages?: number | undefined;
    maxActionsPerReceipt?: number | undefined;
    maxArgumentsLength?: number | undefined;
    maxContractSize?: number | undefined;
    maxFunctionsNumberPerContract?: number | undefined;
    maxGasBurnt?: number | undefined;
    maxLengthMethodName?: number | undefined;
    maxLengthReturnedData?: number | undefined;
    maxLengthStorageKey?: number | undefined;
    maxLengthStorageValue?: number | undefined;
    maxLocalsPerContract?: number | undefined;
    maxMemoryPages?: number | undefined;
    maxNumberBytesMethodNames?: number | undefined;
    maxNumberInputDataDependencies?: number | undefined;
    maxNumberLogs?: number | undefined;
    maxNumberRegisters?: number | undefined;
    maxPromisesPerFunctionCallAction?: number | undefined;
    maxReceiptSize?: number | undefined;
    maxRegisterSize?: number | undefined;
    maxStackHeight?: number | undefined;
    maxTotalLogLength?: number | undefined;
    maxTotalPrepaidGas?: number | undefined;
    maxTransactionSize?: number | undefined;
    maxYieldPayloadSize?: number | undefined;
    perReceiptStorageProofSizeLimit?: number | undefined;
    registersMemoryLimit?: number | undefined;
    yieldTimeoutLengthInBlocks?: number | undefined;
}, {
    accountIdValidityRulesVersion?: unknown;
    initialMemoryPages?: number | undefined;
    maxActionsPerReceipt?: number | undefined;
    maxArgumentsLength?: number | undefined;
    maxContractSize?: number | undefined;
    maxFunctionsNumberPerContract?: number | undefined;
    maxGasBurnt?: number | undefined;
    maxLengthMethodName?: number | undefined;
    maxLengthReturnedData?: number | undefined;
    maxLengthStorageKey?: number | undefined;
    maxLengthStorageValue?: number | undefined;
    maxLocalsPerContract?: number | undefined;
    maxMemoryPages?: number | undefined;
    maxNumberBytesMethodNames?: number | undefined;
    maxNumberInputDataDependencies?: number | undefined;
    maxNumberLogs?: number | undefined;
    maxNumberRegisters?: number | undefined;
    maxPromisesPerFunctionCallAction?: number | undefined;
    maxReceiptSize?: number | undefined;
    maxRegisterSize?: number | undefined;
    maxStackHeight?: number | undefined;
    maxTotalLogLength?: number | undefined;
    maxTotalPrepaidGas?: number | undefined;
    maxTransactionSize?: number | undefined;
    maxYieldPayloadSize?: number | undefined;
    perReceiptStorageProofSizeLimit?: number | undefined;
    registersMemoryLimit?: number | undefined;
    yieldTimeoutLengthInBlocks?: number | undefined;
}>;
export declare const LogSummaryStyleSchema: z.ZodEnum<["plain", "colored"]>;
export declare const MerklePathItemSchema: z.ZodObject<{
    direction: z.ZodUnknown;
    hash: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    direction?: unknown;
    hash?: unknown;
}, {
    direction?: unknown;
    hash?: unknown;
}>;
export declare const MethodResolveErrorSchema: z.ZodEnum<["MethodEmptyName", "MethodNotFound", "MethodInvalidSignature"]>;
export declare const MissingTrieValueSchema: z.ZodObject<{
    context: z.ZodUnknown;
    hash: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    hash?: unknown;
    context?: unknown;
}, {
    hash?: unknown;
    context?: unknown;
}>;
export declare const MissingTrieValueContextSchema: z.ZodUnknown;
export declare const MutableConfigValueSchema: z.ZodString;
export declare const PeerIdSchema: z.ZodUnknown;
export declare const PeerInfoViewSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
    addr: z.ZodString;
    archival: z.ZodBoolean;
    blockHash: z.ZodOptional<z.ZodUnknown>;
    connectionEstablishedTimeMillis: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    isHighestBlockInvalid: z.ZodOptional<z.ZodBoolean>;
    isOutboundPeer: z.ZodOptional<z.ZodBoolean>;
    lastTimePeerRequestedMillis: z.ZodOptional<z.ZodNumber>;
    lastTimeReceivedMessageMillis: z.ZodOptional<z.ZodNumber>;
    nonce: z.ZodNumber;
    peerId: z.ZodOptional<z.ZodUnknown>;
    receivedBytesPerSec: z.ZodOptional<z.ZodNumber>;
    sentBytesPerSec: z.ZodOptional<z.ZodNumber>;
    trackedShards: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    addr: string;
    archival: boolean;
    nonce: number;
    blockHash?: unknown;
    accountId?: unknown;
    peerId?: unknown;
    connectionEstablishedTimeMillis?: number | undefined;
    height?: number | undefined;
    isHighestBlockInvalid?: boolean | undefined;
    isOutboundPeer?: boolean | undefined;
    lastTimePeerRequestedMillis?: number | undefined;
    lastTimeReceivedMessageMillis?: number | undefined;
    receivedBytesPerSec?: number | undefined;
    sentBytesPerSec?: number | undefined;
    trackedShards?: unknown[] | undefined;
}, {
    addr: string;
    archival: boolean;
    nonce: number;
    blockHash?: unknown;
    accountId?: unknown;
    peerId?: unknown;
    connectionEstablishedTimeMillis?: number | undefined;
    height?: number | undefined;
    isHighestBlockInvalid?: boolean | undefined;
    isOutboundPeer?: boolean | undefined;
    lastTimePeerRequestedMillis?: number | undefined;
    lastTimeReceivedMessageMillis?: number | undefined;
    receivedBytesPerSec?: number | undefined;
    sentBytesPerSec?: number | undefined;
    trackedShards?: unknown[] | undefined;
}>;
export declare const PrepareErrorSchema: z.ZodUnknown;
export declare const RangeOfUint64Schema: z.ZodObject<{
    end: z.ZodNumber;
    start: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    end: number;
    start: number;
}, {
    end: number;
    start: number;
}>;
export declare const RpcClientConfigRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcClientConfigResponseSchema: z.ZodObject<{
    archive: z.ZodBoolean;
    blockFetchHorizon: z.ZodOptional<z.ZodNumber>;
    blockHeaderFetchHorizon: z.ZodOptional<z.ZodNumber>;
    blockProductionTrackingDelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    catchupStepPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    chainId: z.ZodOptional<z.ZodString>;
    chunkDistributionNetwork: z.ZodOptional<z.ZodUnknown>;
    chunkRequestRetryPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    chunkWaitMult: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    clientBackgroundMigrationThreads: z.ZodOptional<z.ZodNumber>;
    doomslugStepPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    enableMultilineLogging: z.ZodOptional<z.ZodBoolean>;
    enableStatisticsExport: z.ZodOptional<z.ZodBoolean>;
    epochLength: z.ZodOptional<z.ZodNumber>;
    epochSync: z.ZodOptional<z.ZodUnknown>;
    expectedShutdown: z.ZodOptional<z.ZodUnknown>;
    gc: z.ZodUnknown;
    headerSyncExpectedHeightPerSecond: z.ZodOptional<z.ZodNumber>;
    headerSyncInitialTimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    headerSyncProgressTimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    headerSyncStallBanTimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    logSummaryPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    logSummaryStyle: z.ZodOptional<z.ZodUnknown>;
    maxBlockProductionDelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxBlockWaitDelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxGasBurntView: z.ZodOptional<z.ZodNumber>;
    minBlockProductionDelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    minNumPeers: z.ZodOptional<z.ZodNumber>;
    numBlockProducerSeats: z.ZodOptional<z.ZodNumber>;
    orphanStateWitnessMaxSize: z.ZodOptional<z.ZodNumber>;
    orphanStateWitnessPoolSize: z.ZodOptional<z.ZodNumber>;
    produceChunkAddTransactionsTimeLimit: z.ZodOptional<z.ZodString>;
    produceEmptyBlocks: z.ZodOptional<z.ZodBoolean>;
    reshardingConfig: z.ZodOptional<z.ZodUnknown>;
    rpcAddr: z.ZodOptional<z.ZodString>;
    saveInvalidWitnesses: z.ZodOptional<z.ZodBoolean>;
    saveLatestWitnesses: z.ZodOptional<z.ZodBoolean>;
    saveTrieChanges: z.ZodOptional<z.ZodBoolean>;
    saveTxOutcomes: z.ZodOptional<z.ZodBoolean>;
    skipSyncWait: z.ZodOptional<z.ZodBoolean>;
    stateSync: z.ZodOptional<z.ZodUnknown>;
    stateSyncEnabled: z.ZodOptional<z.ZodBoolean>;
    stateSyncExternalBackoff: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    stateSyncExternalTimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    stateSyncP2pTimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    stateSyncRetryBackoff: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    syncCheckPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    syncHeightThreshold: z.ZodOptional<z.ZodNumber>;
    syncMaxBlockRequests: z.ZodOptional<z.ZodNumber>;
    syncStepPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    trackedShardsConfig: z.ZodOptional<z.ZodUnknown>;
    transactionPoolSizeLimit: z.ZodOptional<z.ZodNumber>;
    transactionRequestHandlerThreads: z.ZodOptional<z.ZodNumber>;
    trieViewerStateSizeLimit: z.ZodOptional<z.ZodNumber>;
    ttlAccountIdRouter: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    txRoutingHeightHorizon: z.ZodOptional<z.ZodNumber>;
    version: z.ZodUnknown;
    viewClientThreads: z.ZodOptional<z.ZodNumber>;
    viewClientThrottlePeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    archive: boolean;
    version?: unknown;
    blockFetchHorizon?: number | undefined;
    blockHeaderFetchHorizon?: number | undefined;
    blockProductionTrackingDelay?: number[] | undefined;
    catchupStepPeriod?: number[] | undefined;
    chainId?: string | undefined;
    chunkDistributionNetwork?: unknown;
    chunkRequestRetryPeriod?: number[] | undefined;
    chunkWaitMult?: number[] | undefined;
    clientBackgroundMigrationThreads?: number | undefined;
    doomslugStepPeriod?: number[] | undefined;
    enableMultilineLogging?: boolean | undefined;
    enableStatisticsExport?: boolean | undefined;
    epochLength?: number | undefined;
    epochSync?: unknown;
    expectedShutdown?: unknown;
    gc?: unknown;
    headerSyncExpectedHeightPerSecond?: number | undefined;
    headerSyncInitialTimeout?: number[] | undefined;
    headerSyncProgressTimeout?: number[] | undefined;
    headerSyncStallBanTimeout?: number[] | undefined;
    logSummaryPeriod?: number[] | undefined;
    logSummaryStyle?: unknown;
    maxBlockProductionDelay?: number[] | undefined;
    maxBlockWaitDelay?: number[] | undefined;
    maxGasBurntView?: number | undefined;
    minBlockProductionDelay?: number[] | undefined;
    minNumPeers?: number | undefined;
    numBlockProducerSeats?: number | undefined;
    orphanStateWitnessMaxSize?: number | undefined;
    orphanStateWitnessPoolSize?: number | undefined;
    produceChunkAddTransactionsTimeLimit?: string | undefined;
    produceEmptyBlocks?: boolean | undefined;
    reshardingConfig?: unknown;
    rpcAddr?: string | undefined;
    saveInvalidWitnesses?: boolean | undefined;
    saveLatestWitnesses?: boolean | undefined;
    saveTrieChanges?: boolean | undefined;
    saveTxOutcomes?: boolean | undefined;
    skipSyncWait?: boolean | undefined;
    stateSync?: unknown;
    stateSyncEnabled?: boolean | undefined;
    stateSyncExternalBackoff?: number[] | undefined;
    stateSyncExternalTimeout?: number[] | undefined;
    stateSyncP2pTimeout?: number[] | undefined;
    stateSyncRetryBackoff?: number[] | undefined;
    syncCheckPeriod?: number[] | undefined;
    syncHeightThreshold?: number | undefined;
    syncMaxBlockRequests?: number | undefined;
    syncStepPeriod?: number[] | undefined;
    trackedShardsConfig?: unknown;
    transactionPoolSizeLimit?: number | undefined;
    transactionRequestHandlerThreads?: number | undefined;
    trieViewerStateSizeLimit?: number | undefined;
    ttlAccountIdRouter?: number[] | undefined;
    txRoutingHeightHorizon?: number | undefined;
    viewClientThreads?: number | undefined;
    viewClientThrottlePeriod?: number[] | undefined;
}, {
    archive: boolean;
    version?: unknown;
    blockFetchHorizon?: number | undefined;
    blockHeaderFetchHorizon?: number | undefined;
    blockProductionTrackingDelay?: number[] | undefined;
    catchupStepPeriod?: number[] | undefined;
    chainId?: string | undefined;
    chunkDistributionNetwork?: unknown;
    chunkRequestRetryPeriod?: number[] | undefined;
    chunkWaitMult?: number[] | undefined;
    clientBackgroundMigrationThreads?: number | undefined;
    doomslugStepPeriod?: number[] | undefined;
    enableMultilineLogging?: boolean | undefined;
    enableStatisticsExport?: boolean | undefined;
    epochLength?: number | undefined;
    epochSync?: unknown;
    expectedShutdown?: unknown;
    gc?: unknown;
    headerSyncExpectedHeightPerSecond?: number | undefined;
    headerSyncInitialTimeout?: number[] | undefined;
    headerSyncProgressTimeout?: number[] | undefined;
    headerSyncStallBanTimeout?: number[] | undefined;
    logSummaryPeriod?: number[] | undefined;
    logSummaryStyle?: unknown;
    maxBlockProductionDelay?: number[] | undefined;
    maxBlockWaitDelay?: number[] | undefined;
    maxGasBurntView?: number | undefined;
    minBlockProductionDelay?: number[] | undefined;
    minNumPeers?: number | undefined;
    numBlockProducerSeats?: number | undefined;
    orphanStateWitnessMaxSize?: number | undefined;
    orphanStateWitnessPoolSize?: number | undefined;
    produceChunkAddTransactionsTimeLimit?: string | undefined;
    produceEmptyBlocks?: boolean | undefined;
    reshardingConfig?: unknown;
    rpcAddr?: string | undefined;
    saveInvalidWitnesses?: boolean | undefined;
    saveLatestWitnesses?: boolean | undefined;
    saveTrieChanges?: boolean | undefined;
    saveTxOutcomes?: boolean | undefined;
    skipSyncWait?: boolean | undefined;
    stateSync?: unknown;
    stateSyncEnabled?: boolean | undefined;
    stateSyncExternalBackoff?: number[] | undefined;
    stateSyncExternalTimeout?: number[] | undefined;
    stateSyncP2pTimeout?: number[] | undefined;
    stateSyncRetryBackoff?: number[] | undefined;
    syncCheckPeriod?: number[] | undefined;
    syncHeightThreshold?: number | undefined;
    syncMaxBlockRequests?: number | undefined;
    syncStepPeriod?: number[] | undefined;
    trackedShardsConfig?: unknown;
    transactionPoolSizeLimit?: number | undefined;
    transactionRequestHandlerThreads?: number | undefined;
    trieViewerStateSizeLimit?: number | undefined;
    ttlAccountIdRouter?: number[] | undefined;
    txRoutingHeightHorizon?: number | undefined;
    viewClientThreads?: number | undefined;
    viewClientThrottlePeriod?: number[] | undefined;
}>;
export declare const RpcCongestionLevelRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcCongestionLevelResponseSchema: z.ZodObject<{
    congestionLevel: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    congestionLevel?: number | undefined;
}, {
    congestionLevel?: number | undefined;
}>;
export declare const RpcErrorSchema: z.ZodObject<{
    cause: z.ZodOptional<z.ZodUnknown>;
    code: z.ZodNumber;
    data: z.ZodOptional<z.ZodUnknown>;
    message: z.ZodString;
    name: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    code: number;
    message: string;
    data?: unknown;
    cause?: unknown;
    name?: unknown;
}, {
    code: number;
    message: string;
    data?: unknown;
    cause?: unknown;
    name?: unknown;
}>;
export declare const RpcGasPriceRequestSchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    blockId?: unknown;
}, {
    blockId?: unknown;
}>;
export declare const RpcGasPriceResponseSchema: z.ZodObject<{
    gasPrice: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    gasPrice?: string | undefined;
}, {
    gasPrice?: string | undefined;
}>;
export declare const RpcHealthRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcHealthResponseSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcKnownProducerSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
    addr: z.ZodOptional<z.ZodString>;
    peerId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountId?: unknown;
    peerId?: unknown;
    addr?: string | undefined;
}, {
    accountId?: unknown;
    peerId?: unknown;
    addr?: string | undefined;
}>;
export declare const RpcLightClientExecutionProofRequestSchema: z.ZodObject<{
    lightClientHead: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    lightClientHead?: unknown;
}, {
    lightClientHead?: unknown;
}>;
export declare const RpcLightClientExecutionProofResponseSchema: z.ZodObject<{
    blockHeaderLite: z.ZodOptional<z.ZodUnknown>;
    blockProof: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    outcomeProof: z.ZodOptional<z.ZodUnknown>;
    outcomeRootProof: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    blockHeaderLite?: unknown;
    blockProof?: unknown[] | undefined;
    outcomeProof?: unknown;
    outcomeRootProof?: unknown[] | undefined;
}, {
    blockHeaderLite?: unknown;
    blockProof?: unknown[] | undefined;
    outcomeProof?: unknown;
    outcomeRootProof?: unknown[] | undefined;
}>;
export declare const RpcMaintenanceWindowsRequestSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountId?: unknown;
}, {
    accountId?: unknown;
}>;
export declare const RpcPeerInfoSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
    addr: z.ZodOptional<z.ZodString>;
    id: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id?: unknown;
    accountId?: unknown;
    addr?: string | undefined;
}, {
    id?: unknown;
    accountId?: unknown;
    addr?: string | undefined;
}>;
export declare const RpcQueryRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcQueryResponseSchema: z.ZodObject<{
    blockHash: z.ZodOptional<z.ZodUnknown>;
    blockHeight: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    blockHash?: unknown;
    blockHeight?: number | undefined;
}, {
    blockHash?: unknown;
    blockHeight?: number | undefined;
}>;
export declare const RpcRequestValidationErrorKindSchema: z.ZodUnknown;
export declare const RpcSplitStorageInfoRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcSplitStorageInfoResponseSchema: z.ZodObject<{
    coldHeadHeight: z.ZodOptional<z.ZodNumber>;
    finalHeadHeight: z.ZodOptional<z.ZodNumber>;
    headHeight: z.ZodOptional<z.ZodNumber>;
    hotDbKind: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    coldHeadHeight?: number | undefined;
    finalHeadHeight?: number | undefined;
    headHeight?: number | undefined;
    hotDbKind?: string | undefined;
}, {
    coldHeadHeight?: number | undefined;
    finalHeadHeight?: number | undefined;
    headHeight?: number | undefined;
    hotDbKind?: string | undefined;
}>;
export declare const RuntimeConfigViewSchema: z.ZodObject<{
    accountCreationConfig: z.ZodOptional<z.ZodUnknown>;
    congestionControlConfig: z.ZodOptional<z.ZodUnknown>;
    storageAmountPerByte: z.ZodOptional<z.ZodString>;
    transactionCosts: z.ZodOptional<z.ZodUnknown>;
    wasmConfig: z.ZodOptional<z.ZodUnknown>;
    witnessConfig: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountCreationConfig?: unknown;
    congestionControlConfig?: unknown;
    storageAmountPerByte?: string | undefined;
    transactionCosts?: unknown;
    wasmConfig?: unknown;
    witnessConfig?: unknown;
}, {
    accountCreationConfig?: unknown;
    congestionControlConfig?: unknown;
    storageAmountPerByte?: string | undefined;
    transactionCosts?: unknown;
    wasmConfig?: unknown;
    witnessConfig?: unknown;
}>;
export declare const RuntimeFeesConfigViewSchema: z.ZodObject<{
    actionCreationConfig: z.ZodOptional<z.ZodUnknown>;
    actionReceiptCreationConfig: z.ZodOptional<z.ZodUnknown>;
    burntGasReward: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    dataReceiptCreationConfig: z.ZodOptional<z.ZodUnknown>;
    pessimisticGasPriceInflationRatio: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    storageUsageConfig: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    actionCreationConfig?: unknown;
    actionReceiptCreationConfig?: unknown;
    burntGasReward?: number[] | undefined;
    dataReceiptCreationConfig?: unknown;
    pessimisticGasPriceInflationRatio?: number[] | undefined;
    storageUsageConfig?: unknown;
}, {
    actionCreationConfig?: unknown;
    actionReceiptCreationConfig?: unknown;
    burntGasReward?: number[] | undefined;
    dataReceiptCreationConfig?: unknown;
    pessimisticGasPriceInflationRatio?: number[] | undefined;
    storageUsageConfig?: unknown;
}>;
export declare const ShardIdSchema: z.ZodNumber;
export declare const ShardLayoutSchema: z.ZodUnknown;
export declare const ShardLayoutV0Schema: z.ZodObject<{
    numShards: z.ZodOptional<z.ZodNumber>;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: number;
    numShards?: number | undefined;
}, {
    version: number;
    numShards?: number | undefined;
}>;
export declare const ShardLayoutV1Schema: z.ZodObject<{
    boundaryAccounts: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    shardsSplitMap: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodUnknown, "many">, "many">>;
    toParentShardMap: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: number;
    boundaryAccounts?: unknown[] | undefined;
    shardsSplitMap?: unknown[][] | undefined;
    toParentShardMap?: unknown[] | undefined;
}, {
    version: number;
    boundaryAccounts?: unknown[] | undefined;
    shardsSplitMap?: unknown[][] | undefined;
    toParentShardMap?: unknown[] | undefined;
}>;
export declare const ShardLayoutV2Schema: z.ZodObject<{
    boundaryAccounts: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    idToIndexMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    indexToIdMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    shardIds: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    shardsParentMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    shardsSplitMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: number;
    boundaryAccounts?: unknown[] | undefined;
    shardsSplitMap?: Record<string, unknown> | undefined;
    idToIndexMap?: Record<string, unknown> | undefined;
    indexToIdMap?: Record<string, unknown> | undefined;
    shardIds?: unknown[] | undefined;
    shardsParentMap?: Record<string, unknown> | undefined;
}, {
    version: number;
    boundaryAccounts?: unknown[] | undefined;
    shardsSplitMap?: Record<string, unknown> | undefined;
    idToIndexMap?: Record<string, unknown> | undefined;
    indexToIdMap?: Record<string, unknown> | undefined;
    shardIds?: unknown[] | undefined;
    shardsParentMap?: Record<string, unknown> | undefined;
}>;
export declare const ShardUIdSchema: z.ZodObject<{
    shardId: z.ZodOptional<z.ZodNumber>;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: number;
    shardId?: number | undefined;
}, {
    version: number;
    shardId?: number | undefined;
}>;
export declare const SignatureSchema: z.ZodString;
export declare const StorageErrorSchema: z.ZodUnknown;
export declare const StorageGetModeSchema: z.ZodEnum<["FlatStorage", "Trie"]>;
export declare const StorageUsageConfigViewSchema: z.ZodObject<{
    numBytesAccount: z.ZodOptional<z.ZodNumber>;
    numExtraBytesRecord: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    numBytesAccount?: number | undefined;
    numExtraBytesRecord?: number | undefined;
}, {
    numBytesAccount?: number | undefined;
    numExtraBytesRecord?: number | undefined;
}>;
export declare const SyncCheckpointSchema: z.ZodEnum<["genesis", "earliest_available"]>;
export declare const SyncConcurrencySchema: z.ZodObject<{
    apply: z.ZodNumber;
    applyDuringCatchup: z.ZodOptional<z.ZodNumber>;
    peerDownloads: z.ZodOptional<z.ZodNumber>;
    perShard: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    apply: number;
    applyDuringCatchup?: number | undefined;
    peerDownloads?: number | undefined;
    perShard?: number | undefined;
}, {
    apply: number;
    applyDuringCatchup?: number | undefined;
    peerDownloads?: number | undefined;
    perShard?: number | undefined;
}>;
export declare const SyncConfigSchema: z.ZodUnknown;
export declare const Tier1ProxyViewSchema: z.ZodObject<{
    addr: z.ZodString;
    peerId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    addr: string;
    peerId?: unknown;
}, {
    addr: string;
    peerId?: unknown;
}>;
export declare const TrackedShardsConfigSchema: z.ZodUnknown;
export declare const VMConfigViewSchema: z.ZodObject<{
    discardCustomSections: z.ZodOptional<z.ZodBoolean>;
    ethImplicitAccounts: z.ZodOptional<z.ZodBoolean>;
    extCosts: z.ZodOptional<z.ZodUnknown>;
    fixContractLoadingCost: z.ZodOptional<z.ZodBoolean>;
    globalContractHostFns: z.ZodOptional<z.ZodBoolean>;
    growMemCost: z.ZodOptional<z.ZodNumber>;
    implicitAccountCreation: z.ZodOptional<z.ZodBoolean>;
    limitConfig: z.ZodOptional<z.ZodUnknown>;
    reftypesBulkMemory: z.ZodOptional<z.ZodBoolean>;
    regularOpCost: z.ZodOptional<z.ZodNumber>;
    saturatingFloatToInt: z.ZodOptional<z.ZodBoolean>;
    storageGetMode: z.ZodOptional<z.ZodUnknown>;
    vmKind: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    discardCustomSections?: boolean | undefined;
    ethImplicitAccounts?: boolean | undefined;
    extCosts?: unknown;
    fixContractLoadingCost?: boolean | undefined;
    globalContractHostFns?: boolean | undefined;
    growMemCost?: number | undefined;
    implicitAccountCreation?: boolean | undefined;
    limitConfig?: unknown;
    reftypesBulkMemory?: boolean | undefined;
    regularOpCost?: number | undefined;
    saturatingFloatToInt?: boolean | undefined;
    storageGetMode?: unknown;
    vmKind?: unknown;
}, {
    discardCustomSections?: boolean | undefined;
    ethImplicitAccounts?: boolean | undefined;
    extCosts?: unknown;
    fixContractLoadingCost?: boolean | undefined;
    globalContractHostFns?: boolean | undefined;
    growMemCost?: number | undefined;
    implicitAccountCreation?: boolean | undefined;
    limitConfig?: unknown;
    reftypesBulkMemory?: boolean | undefined;
    regularOpCost?: number | undefined;
    saturatingFloatToInt?: boolean | undefined;
    storageGetMode?: unknown;
    vmKind?: unknown;
}>;
export declare const VMKindSchema: z.ZodUnknown;
export declare const VersionSchema: z.ZodObject<{
    build: z.ZodString;
    commit: z.ZodString;
    rustcVersion: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
}, "strip", z.ZodTypeAny, {
    version: string;
    build: string;
    commit: string;
    rustcVersion?: string | undefined;
}, {
    version: string;
    build: string;
    commit: string;
    rustcVersion?: string | undefined;
}>;
export declare const WasmTrapSchema: z.ZodUnknown;
export declare const WitnessConfigViewSchema: z.ZodObject<{
    combinedTransactionsSizeLimit: z.ZodOptional<z.ZodNumber>;
    mainStorageProofSizeSoftLimit: z.ZodOptional<z.ZodNumber>;
    newTransactionsValidationStateSizeSoftLimit: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    combinedTransactionsSizeLimit?: number | undefined;
    mainStorageProofSizeSoftLimit?: number | undefined;
    newTransactionsValidationStateSizeSoftLimit?: number | undefined;
}, {
    combinedTransactionsSizeLimit?: number | undefined;
    mainStorageProofSizeSoftLimit?: number | undefined;
    newTransactionsValidationStateSizeSoftLimit?: number | undefined;
}>;
