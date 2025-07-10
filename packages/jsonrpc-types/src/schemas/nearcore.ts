/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */

import { z } from 'zod';

// Base schemas
export const AccountIdSchema = z.string();
export const PublicKeySchema = z.string();
export const CryptoHashSchema = z.string();
export const BlockHeightSchema = z.number();
export const BlockHashSchema = z.string();
export const ShardIdSchema = z.number();
export const GasSchema = z.string();
export const BalanceSchema = z.string();
export const NonceSchema = z.number();

// Base JSON-RPC schemas
export const JsonRpcRequestSchema = z.object({
  jsonrpc: z.literal('2.0'),
  method: z.string(),
  params: z.any(),
  id: z.string(),
});

export const JsonRpcResponseSchema = z.object({
  jsonrpc: z.literal('2.0'),
  result: z.any().optional(),
  error: z.object({
    code: z.number(),
    message: z.string(),
    data: z.any().optional(),
  }).optional(),
  id: z.string(),
});

// Generated schemas from nearcore OpenAPI spec
export const AccessKeySchema = z.object({
    nonce: z.number().optional(),
    permission: z.any().optional()
});

export const AccessKeyCreationConfigViewSchema = z.object({
    fullAccessCost: z.any().optional(),
    functionCallCost: z.any().optional(),
    functionCallCostPerByte: z.any().optional()
});

export const AccessKeyInfoViewSchema = z.object({
    accessKey: AccessKeyViewSchema.optional(),
    publicKey: PublicKeySchema.optional()
});

export const AccessKeyListSchema = z.object({
    keys: z.array(AccessKeyInfoViewSchema).optional()
});

export const AccessKeyPermissionSchema = z.union([z.record(z.any()), z.string()]);

export const AccessKeyPermissionViewSchema = z.union([z.string(), z.record(z.any())]);

export const AccessKeyViewSchema = z.object({
    nonce: z.number().optional(),
    permission: AccessKeyPermissionViewSchema.optional()
});

export const AccountCreationConfigViewSchema = z.object({
    minAllowedTopLevelAccountLength: z.number().optional(),
    registrarAccountId: z.any().optional()
});

export const AccountDataViewSchema = z.object({
    accountKey: PublicKeySchema.optional(),
    peerId: PublicKeySchema.optional(),
    proxies: z.array(Tier1ProxyViewSchema).optional(),
    timestamp: z.string().optional()
});

export const AccountIdSchema = z.any();

export const AccountIdValidityRulesVersionSchema = z.any();

export const AccountInfoSchema = z.object({
    accountId: AccountIdSchema.optional(),
    amount: z.string().optional(),
    publicKey: PublicKeySchema.optional()
});

export const AccountViewSchema = z.object({
    amount: z.string().optional(),
    codeHash: CryptoHashSchema.optional(),
    globalContractAccountId: z.any().optional(),
    globalContractHash: z.any().optional(),
    locked: z.string().optional(),
    storagePaidAt: z.number().optional(),
    storageUsage: z.number().optional()
});

export const AccountWithPublicKeySchema = z.object({
    accountId: AccountIdSchema.optional(),
    publicKey: PublicKeySchema.optional()
});

export const ActionSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ActionCreationConfigViewSchema = z.object({
    addKeyCost: z.any().optional(),
    createAccountCost: z.any().optional(),
    delegateCost: z.any().optional(),
    deleteAccountCost: z.any().optional(),
    deleteKeyCost: z.any().optional(),
    deployContractCost: z.any().optional(),
    deployContractCostPerByte: z.any().optional(),
    functionCallCost: z.any().optional(),
    functionCallCostPerByte: z.any().optional(),
    stakeCost: z.any().optional(),
    transferCost: z.any().optional()
});

export const ActionErrorSchema = z.object({
    index: z.number().optional(),
    kind: z.any().optional()
});

export const ActionErrorKindSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ActionViewSchema = z.union([z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ActionsValidationErrorSchema = z.union([z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.string(), z.record(z.any())]);

export const AddKeyActionSchema = z.object({
    accessKey: z.any().optional(),
    publicKey: z.any().optional()
});

export const BandwidthRequestSchema = z.object({
    requestedValuesBitmap: z.any().optional(),
    toShard: z.number().optional()
});

export const BandwidthRequestBitmapSchema = z.object({
    data: z.array(z.number()).optional()
});

export const BandwidthRequestsSchema = z.union([z.record(z.any())]);

export const BandwidthRequestsV1Schema = z.object({
    requests: z.array(BandwidthRequestSchema).optional()
});

export const BlockHeaderInnerLiteViewSchema = z.object({
    blockMerkleRoot: CryptoHashSchema.optional(),
    epochId: CryptoHashSchema.optional(),
    height: z.number().optional(),
    nextBpHash: CryptoHashSchema.optional(),
    nextEpochId: CryptoHashSchema.optional(),
    outcomeRoot: CryptoHashSchema.optional(),
    prevStateRoot: CryptoHashSchema.optional(),
    timestamp: z.number().optional(),
    timestampNanosec: z.string().optional()
});

export const BlockHeaderViewSchema = z.object({
    approvals: z.array(z.any()).optional(),
    blockBodyHash: z.any().optional(),
    blockMerkleRoot: CryptoHashSchema.optional(),
    blockOrdinal: z.number().optional(),
    challengesResult: z.array(SlashedValidatorSchema).optional(),
    challengesRoot: CryptoHashSchema.optional(),
    chunkEndorsements: z.array(z.array(z.number())).optional(),
    chunkHeadersRoot: CryptoHashSchema.optional(),
    chunkMask: z.array(z.boolean()).optional(),
    chunkReceiptsRoot: CryptoHashSchema.optional(),
    chunkTxRoot: CryptoHashSchema.optional(),
    chunksIncluded: z.number().optional(),
    epochId: CryptoHashSchema.optional(),
    epochSyncDataHash: z.any().optional(),
    gasPrice: z.string().optional(),
    hash: CryptoHashSchema.optional(),
    height: z.number().optional(),
    lastDsFinalBlock: CryptoHashSchema.optional(),
    lastFinalBlock: CryptoHashSchema.optional(),
    latestProtocolVersion: z.number().optional(),
    nextBpHash: CryptoHashSchema.optional(),
    nextEpochId: CryptoHashSchema.optional(),
    outcomeRoot: CryptoHashSchema.optional(),
    prevHash: CryptoHashSchema.optional(),
    prevHeight: z.number().optional(),
    prevStateRoot: CryptoHashSchema.optional(),
    randomValue: CryptoHashSchema.optional(),
    rentPaid: z.string().optional(),
    signature: SignatureSchema.optional(),
    timestamp: z.number().optional(),
    timestampNanosec: z.string().optional(),
    totalSupply: z.string().optional(),
    validatorProposals: z.array(ValidatorStakeViewSchema).optional(),
    validatorReward: z.string().optional()
});

export const BlockIdSchema = z.union([z.number(), CryptoHashSchema]);

export const BlockStatusViewSchema = z.object({
    hash: CryptoHashSchema.optional(),
    height: z.number().optional()
});

export const CallResultSchema = z.object({
    logs: z.array(z.string()).optional(),
    result: z.array(z.number()).optional()
});

export const CatchupStatusViewSchema = z.object({
    blocksToCatchup: z.array(BlockStatusViewSchema).optional(),
    shardSyncStatus: z.record(z.any()).optional(),
    syncBlockHash: CryptoHashSchema.optional(),
    syncBlockHeight: z.number().optional()
});

export const ChunkDistributionNetworkConfigSchema = z.object({
    enabled: z.boolean().optional(),
    uris: ChunkDistributionUrisSchema.optional()
});

export const ChunkDistributionUrisSchema = z.object({
    get: z.string().optional(),
    set: z.string().optional()
});

export const ChunkHeaderViewSchema = z.object({
    balanceBurnt: z.string().optional(),
    bandwidthRequests: z.any().optional(),
    chunkHash: CryptoHashSchema.optional(),
    congestionInfo: z.any().optional(),
    encodedLength: z.number().optional(),
    encodedMerkleRoot: CryptoHashSchema.optional(),
    gasLimit: z.number().optional(),
    gasUsed: z.number().optional(),
    heightCreated: z.number().optional(),
    heightIncluded: z.number().optional(),
    outcomeRoot: CryptoHashSchema.optional(),
    outgoingReceiptsRoot: CryptoHashSchema.optional(),
    prevBlockHash: CryptoHashSchema.optional(),
    prevStateRoot: CryptoHashSchema.optional(),
    rentPaid: z.string().optional(),
    shardId: ShardIdSchema.optional(),
    signature: SignatureSchema.optional(),
    txRoot: CryptoHashSchema.optional(),
    validatorProposals: z.array(ValidatorStakeViewSchema).optional(),
    validatorReward: z.string().optional()
});

export const CompilationErrorSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const CongestionControlConfigViewSchema = z.object({
    allowedShardOutgoingGas: z.number().optional(),
    maxCongestionIncomingGas: z.number().optional(),
    maxCongestionMemoryConsumption: z.number().optional(),
    maxCongestionMissedChunks: z.number().optional(),
    maxCongestionOutgoingGas: z.number().optional(),
    maxOutgoingGas: z.number().optional(),
    maxTxGas: z.number().optional(),
    minOutgoingGas: z.number().optional(),
    minTxGas: z.number().optional(),
    outgoingReceiptsBigSizeLimit: z.number().optional(),
    outgoingReceiptsUsualSizeLimit: z.number().optional(),
    rejectTxCongestionThreshold: z.number().optional()
});

export const CongestionInfoViewSchema = z.object({
    allowedShard: z.number().optional(),
    bufferedReceiptsGas: z.string().optional(),
    delayedReceiptsGas: z.string().optional(),
    receiptBytes: z.number().optional()
});

export const ContractCodeViewSchema = z.object({
    codeBase64: z.string().optional(),
    hash: CryptoHashSchema.optional()
});

export const CostGasUsedSchema = z.object({
    cost: z.string().optional(),
    costCategory: z.string().optional(),
    gasUsed: z.string().optional()
});

export const CreateAccountActionSchema = z.any();

export const CryptoHashSchema = z.any();

export const CurrentEpochValidatorInfoSchema = z.object({
    accountId: AccountIdSchema.optional(),
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
    publicKey: PublicKeySchema.optional(),
    shards: z.array(ShardIdSchema).optional(),
    shardsEndorsed: z.array(ShardIdSchema).optional(),
    stake: z.string().optional()
});

export const DataReceiptCreationConfigViewSchema = z.object({
    baseCost: z.any().optional(),
    costPerByte: z.any().optional()
});

export const DataReceiverViewSchema = z.object({
    dataId: CryptoHashSchema.optional(),
    receiverId: AccountIdSchema.optional()
});

export const DelegateActionSchema = z.object({
    actions: z.array(NonDelegateActionSchema).optional(),
    maxBlockHeight: z.number().optional(),
    nonce: z.number().optional(),
    publicKey: z.any().optional(),
    receiverId: z.any().optional(),
    senderId: z.any().optional()
});

export const DeleteAccountActionSchema = z.object({
    beneficiaryId: AccountIdSchema.optional()
});

export const DeleteKeyActionSchema = z.object({
    publicKey: z.any().optional()
});

export const DeployContractActionSchema = z.object({
    code: z.string().optional()
});

export const DeployGlobalContractActionSchema = z.object({
    code: z.string().optional(),
    deployMode: GlobalContractDeployModeSchema.optional()
});

export const DetailedDebugStatusSchema = z.object({
    blockProductionDelayMillis: z.number().optional(),
    catchupStatus: z.array(CatchupStatusViewSchema).optional(),
    currentHeadStatus: BlockStatusViewSchema.optional(),
    currentHeaderHeadStatus: BlockStatusViewSchema.optional(),
    networkInfo: NetworkInfoViewSchema.optional(),
    syncStatus: z.string().optional()
});

export const DirectionSchema = z.enum(['Left', 'Right']);

export const DumpConfigSchema = z.object({
    credentialsFile: z.string().optional(),
    iterationDelay: z.any().optional(),
    location: z.any().optional(),
    restartDumpForShards: z.array(ShardIdSchema).optional()
});

export const DurationAsStdSchemaProviderSchema = z.object({
    nanos: z.number().optional(),
    secs: z.number().optional()
});

export const EpochIdSchema = z.any();

export const EpochSyncConfigSchema = z.object({
    disableEpochSyncForBootstrapping: z.boolean().optional(),
    epochSyncHorizon: z.number().optional(),
    ignoreEpochSyncNetworkRequests: z.boolean().optional(),
    timeoutForEpochSync: z.any().optional()
});

export const ExecutionMetadataViewSchema = z.object({
    gasProfile: z.array(CostGasUsedSchema).optional(),
    version: z.number().optional()
});

export const ExecutionOutcomeViewSchema = z.object({
    executorId: z.any().optional(),
    gasBurnt: z.number().optional(),
    logs: z.array(z.string()).optional(),
    metadata: z.any().optional(),
    receiptIds: z.array(CryptoHashSchema).optional(),
    status: z.any().optional(),
    tokensBurnt: z.string().optional()
});

export const ExecutionOutcomeWithIdViewSchema = z.object({
    blockHash: CryptoHashSchema.optional(),
    id: CryptoHashSchema.optional(),
    outcome: ExecutionOutcomeViewSchema.optional(),
    proof: z.array(MerklePathItemSchema).optional()
});

export const ExecutionStatusViewSchema = z.union([z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ExtCostsConfigViewSchema = z.object({
    altBn128G1MultiexpBase: z.number().optional(),
    altBn128G1MultiexpElement: z.number().optional(),
    altBn128G1SumBase: z.number().optional(),
    altBn128G1SumElement: z.number().optional(),
    altBn128PairingCheckBase: z.number().optional(),
    altBn128PairingCheckElement: z.number().optional(),
    base: z.number().optional(),
    bls12381G1MultiexpBase: z.number().optional(),
    bls12381G1MultiexpElement: z.number().optional(),
    bls12381G2MultiexpBase: z.number().optional(),
    bls12381G2MultiexpElement: z.number().optional(),
    bls12381MapFp2ToG2Base: z.number().optional(),
    bls12381MapFp2ToG2Element: z.number().optional(),
    bls12381MapFpToG1Base: z.number().optional(),
    bls12381MapFpToG1Element: z.number().optional(),
    bls12381P1DecompressBase: z.number().optional(),
    bls12381P1DecompressElement: z.number().optional(),
    bls12381P1SumBase: z.number().optional(),
    bls12381P1SumElement: z.number().optional(),
    bls12381P2DecompressBase: z.number().optional(),
    bls12381P2DecompressElement: z.number().optional(),
    bls12381P2SumBase: z.number().optional(),
    bls12381P2SumElement: z.number().optional(),
    bls12381PairingBase: z.number().optional(),
    bls12381PairingElement: z.number().optional(),
    contractCompileBase: z.number().optional(),
    contractCompileBytes: z.number().optional(),
    contractLoadingBase: z.number().optional(),
    contractLoadingBytes: z.number().optional(),
    ecrecoverBase: z.number().optional(),
    ed25519VerifyBase: z.number().optional(),
    ed25519VerifyByte: z.number().optional(),
    keccak256Base: z.number().optional(),
    keccak256Byte: z.number().optional(),
    keccak512Base: z.number().optional(),
    keccak512Byte: z.number().optional(),
    logBase: z.number().optional(),
    logByte: z.number().optional(),
    promiseAndBase: z.number().optional(),
    promiseAndPerPromise: z.number().optional(),
    promiseReturn: z.number().optional(),
    readCachedTrieNode: z.number().optional(),
    readMemoryBase: z.number().optional(),
    readMemoryByte: z.number().optional(),
    readRegisterBase: z.number().optional(),
    readRegisterByte: z.number().optional(),
    ripemd160Base: z.number().optional(),
    ripemd160Block: z.number().optional(),
    sha256Base: z.number().optional(),
    sha256Byte: z.number().optional(),
    storageHasKeyBase: z.number().optional(),
    storageHasKeyByte: z.number().optional(),
    storageIterCreateFromByte: z.number().optional(),
    storageIterCreatePrefixBase: z.number().optional(),
    storageIterCreatePrefixByte: z.number().optional(),
    storageIterCreateRangeBase: z.number().optional(),
    storageIterCreateToByte: z.number().optional(),
    storageIterNextBase: z.number().optional(),
    storageIterNextKeyByte: z.number().optional(),
    storageIterNextValueByte: z.number().optional(),
    storageLargeReadOverheadBase: z.number().optional(),
    storageLargeReadOverheadByte: z.number().optional(),
    storageReadBase: z.number().optional(),
    storageReadKeyByte: z.number().optional(),
    storageReadValueByte: z.number().optional(),
    storageRemoveBase: z.number().optional(),
    storageRemoveKeyByte: z.number().optional(),
    storageRemoveRetValueByte: z.number().optional(),
    storageWriteBase: z.number().optional(),
    storageWriteEvictedByte: z.number().optional(),
    storageWriteKeyByte: z.number().optional(),
    storageWriteValueByte: z.number().optional(),
    touchingTrieNode: z.number().optional(),
    utf16DecodingBase: z.number().optional(),
    utf16DecodingByte: z.number().optional(),
    utf8DecodingBase: z.number().optional(),
    utf8DecodingByte: z.number().optional(),
    validatorStakeBase: z.number().optional(),
    validatorTotalStakeBase: z.number().optional(),
    writeMemoryBase: z.number().optional(),
    writeMemoryByte: z.number().optional(),
    writeRegisterBase: z.number().optional(),
    writeRegisterByte: z.number().optional(),
    yieldCreateBase: z.number().optional(),
    yieldCreateByte: z.number().optional(),
    yieldResumeBase: z.number().optional(),
    yieldResumeByte: z.number().optional()
});

export const ExternalStorageConfigSchema = z.object({
    externalStorageFallbackThreshold: z.number().optional(),
    location: z.any().optional(),
    numConcurrentRequests: z.number().optional(),
    numConcurrentRequestsDuringCatchup: z.number().optional()
});

export const ExternalStorageLocationSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const FeeSchema = z.object({
    execution: z.number().optional(),
    sendNotSir: z.number().optional(),
    sendSir: z.number().optional()
});

export const FinalExecutionOutcomeViewSchema = z.object({
    receiptsOutcome: z.array(ExecutionOutcomeWithIdViewSchema).optional(),
    status: z.any().optional(),
    transaction: z.any().optional(),
    transactionOutcome: z.any().optional()
});

export const FinalExecutionOutcomeWithReceiptViewSchema = z.object({
    receipts: z.array(ReceiptViewSchema).optional(),
    receiptsOutcome: z.array(ExecutionOutcomeWithIdViewSchema).optional(),
    status: z.any().optional(),
    transaction: z.any().optional(),
    transactionOutcome: z.any().optional()
});

export const FinalExecutionStatusSchema = z.union([z.string(), z.string(), z.record(z.any()), z.record(z.any())]);

export const FinalitySchema = z.enum(['optimistic', 'near-final', 'final']);

export const FunctionCallActionSchema = z.object({
    args: z.string().optional(),
    deposit: z.string().optional(),
    gas: z.number().optional(),
    methodName: z.string().optional()
});

export const FunctionCallErrorSchema = z.union([z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const FunctionCallPermissionSchema = z.object({
    allowance: z.string().optional(),
    methodNames: z.array(z.string()).optional(),
    receiverId: z.string().optional()
});

export const GCConfigSchema = z.object({
    gcBlocksLimit: z.number().optional(),
    gcForkCleanStep: z.number().optional(),
    gcNumEpochsToKeep: z.number().optional(),
    gcStepPeriod: z.any().optional()
});

export const GasKeyViewSchema = z.object({
    balance: z.number().optional(),
    numNonces: z.number().optional(),
    permission: AccessKeyPermissionViewSchema.optional()
});

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
    protocolTreasuryAccount: z.any().optional(),
    protocolUpgradeStakeThreshold: z.array(z.number()).optional(),
    protocolVersion: z.number().optional(),
    shardLayout: z.any().optional(),
    shuffleShardAssignmentForChunkProducers: z.boolean().optional(),
    targetValidatorMandatesPerShard: z.number().optional(),
    totalSupply: z.string().optional(),
    transactionValidityPeriod: z.number().optional(),
    useProductionConfig: z.boolean().optional(),
    validators: z.array(AccountInfoSchema).optional()
});

export const GenesisConfigRequestSchema = z.any();

export const GlobalContractDeployModeSchema = z.union([z.string(), z.string()]);

export const GlobalContractIdentifierSchema = z.union([z.record(z.any()), z.record(z.any())]);

export const HostErrorSchema = z.union([z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.record(z.any()), z.string(), z.record(z.any()), z.string(), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.string(), z.string(), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const InvalidAccessKeyErrorSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.string()]);

export const InvalidTxErrorSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.string(), z.string(), z.string(), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const JsonRpcRequest_for_EXPERIMENTAL_changesSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcStateChangesInBlockByTypeRequestSchema.optional()
});

export const JsonRpcRequest_for_EXPERIMENTAL_changes_in_blockSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcStateChangesInBlockRequestSchema.optional()
});

export const JsonRpcRequest_for_EXPERIMENTAL_congestion_levelSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcCongestionLevelRequestSchema.optional()
});

export const JsonRpcRequest_for_EXPERIMENTAL_genesis_configSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: GenesisConfigRequestSchema.optional()
});

export const JsonRpcRequest_for_EXPERIMENTAL_light_client_block_proofSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcLightClientBlockProofRequestSchema.optional()
});

export const JsonRpcRequest_for_EXPERIMENTAL_light_client_proofSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcLightClientExecutionProofRequestSchema.optional()
});

export const JsonRpcRequest_for_EXPERIMENTAL_maintenance_windowsSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcMaintenanceWindowsRequestSchema.optional()
});

export const JsonRpcRequest_for_EXPERIMENTAL_protocol_configSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcProtocolConfigRequestSchema.optional()
});

export const JsonRpcRequest_for_EXPERIMENTAL_receiptSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcReceiptRequestSchema.optional()
});

export const JsonRpcRequest_for_EXPERIMENTAL_split_storage_infoSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcSplitStorageInfoRequestSchema.optional()
});

export const JsonRpcRequest_for_EXPERIMENTAL_tx_statusSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcTransactionStatusRequestSchema.optional()
});

export const JsonRpcRequest_for_EXPERIMENTAL_validators_orderedSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcValidatorsOrderedRequestSchema.optional()
});

export const JsonRpcRequest_for_blockSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcBlockRequestSchema.optional()
});

export const JsonRpcRequest_for_broadcast_tx_asyncSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcSendTransactionRequestSchema.optional()
});

export const JsonRpcRequest_for_broadcast_tx_commitSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcSendTransactionRequestSchema.optional()
});

export const JsonRpcRequest_for_changesSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcStateChangesInBlockByTypeRequestSchema.optional()
});

export const JsonRpcRequest_for_chunkSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcChunkRequestSchema.optional()
});

export const JsonRpcRequest_for_client_configSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcClientConfigRequestSchema.optional()
});

export const JsonRpcRequest_for_gas_priceSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcGasPriceRequestSchema.optional()
});

export const JsonRpcRequest_for_healthSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcHealthRequestSchema.optional()
});

export const JsonRpcRequest_for_light_client_proofSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcLightClientExecutionProofRequestSchema.optional()
});

export const JsonRpcRequest_for_network_infoSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcNetworkInfoRequestSchema.optional()
});

export const JsonRpcRequest_for_next_light_client_blockSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcLightClientNextBlockRequestSchema.optional()
});

export const JsonRpcRequest_for_querySchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcQueryRequestSchema.optional()
});

export const JsonRpcRequest_for_send_txSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcSendTransactionRequestSchema.optional()
});

export const JsonRpcRequest_for_statusSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcStatusRequestSchema.optional()
});

export const JsonRpcRequest_for_txSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcTransactionStatusRequestSchema.optional()
});

export const JsonRpcRequest_for_validatorsSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional(),
    method: z.string().optional(),
    params: RpcValidatorRequestSchema.optional()
});

export const JsonRpcResponse_for_Array_of_Range_of_uint64_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_Array_of_ValidatorStakeView_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_CryptoHash_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_GenesisConfig_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_Nullable_RpcHealthResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcBlockResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcChunkResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcClientConfigResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcCongestionLevelResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcGasPriceResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcLightClientBlockProofResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcLightClientExecutionProofResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcLightClientNextBlockResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcNetworkInfoResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcProtocolConfigResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcQueryResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcReceiptResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcSplitStorageInfoResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcStateChangesInBlockByTypeResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcStateChangesInBlockResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcStatusResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcTransactionResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const JsonRpcResponse_for_RpcValidatorResponse_and_RpcErrorSchema = z.object({
    id: z.string().optional(),
    jsonrpc: z.string().optional()
});

export const KnownProducerViewSchema = z.object({
    accountId: AccountIdSchema.optional(),
    nextHops: z.array(PublicKeySchema).optional(),
    peerId: PublicKeySchema.optional()
});

export const LightClientBlockLiteViewSchema = z.object({
    innerLite: BlockHeaderInnerLiteViewSchema.optional(),
    innerRestHash: CryptoHashSchema.optional(),
    prevBlockHash: CryptoHashSchema.optional()
});

export const LimitConfigSchema = z.object({
    accountIdValidityRulesVersion: z.any().optional(),
    initialMemoryPages: z.number().optional(),
    maxActionsPerReceipt: z.number().optional(),
    maxArgumentsLength: z.number().optional(),
    maxContractSize: z.number().optional(),
    maxFunctionsNumberPerContract: z.number().optional(),
    maxGasBurnt: z.number().optional(),
    maxLengthMethodName: z.number().optional(),
    maxLengthReturnedData: z.number().optional(),
    maxLengthStorageKey: z.number().optional(),
    maxLengthStorageValue: z.number().optional(),
    maxLocalsPerContract: z.number().optional(),
    maxMemoryPages: z.number().optional(),
    maxNumberBytesMethodNames: z.number().optional(),
    maxNumberInputDataDependencies: z.number().optional(),
    maxNumberLogs: z.number().optional(),
    maxNumberRegisters: z.number().optional(),
    maxPromisesPerFunctionCallAction: z.number().optional(),
    maxReceiptSize: z.number().optional(),
    maxRegisterSize: z.number().optional(),
    maxStackHeight: z.number().optional(),
    maxTotalLogLength: z.number().optional(),
    maxTotalPrepaidGas: z.number().optional(),
    maxTransactionSize: z.number().optional(),
    maxYieldPayloadSize: z.number().optional(),
    perReceiptStorageProofSizeLimit: z.number().optional(),
    registersMemoryLimit: z.number().optional(),
    yieldTimeoutLengthInBlocks: z.number().optional()
});

export const LogSummaryStyleSchema = z.enum(['plain', 'colored']);

export const MerklePathItemSchema = z.object({
    direction: DirectionSchema.optional(),
    hash: CryptoHashSchema.optional()
});

export const MethodResolveErrorSchema = z.enum(['MethodEmptyName', 'MethodNotFound', 'MethodInvalidSignature']);

export const MissingTrieValueSchema = z.object({
    context: MissingTrieValueContextSchema.optional(),
    hash: CryptoHashSchema.optional()
});

export const MissingTrieValueContextSchema = z.union([z.string(), z.string(), z.string(), z.string()]);

export const MutableConfigValueSchema = z.any();

export const NetworkInfoViewSchema = z.object({
    connectedPeers: z.array(PeerInfoViewSchema).optional(),
    knownProducers: z.array(KnownProducerViewSchema).optional(),
    numConnectedPeers: z.number().optional(),
    peerMaxCount: z.number().optional(),
    tier1AccountsData: z.array(AccountDataViewSchema).optional(),
    tier1AccountsKeys: z.array(PublicKeySchema).optional(),
    tier1Connections: z.array(PeerInfoViewSchema).optional()
});

export const NextEpochValidatorInfoSchema = z.object({
    accountId: AccountIdSchema.optional(),
    publicKey: PublicKeySchema.optional(),
    shards: z.array(ShardIdSchema).optional(),
    stake: z.string().optional()
});

export const NonDelegateActionSchema = z.any();

export const PeerIdSchema = z.any();

export const PeerInfoViewSchema = z.object({
    accountId: z.any().optional(),
    addr: z.string().optional(),
    archival: z.boolean().optional(),
    blockHash: z.any().optional(),
    connectionEstablishedTimeMillis: z.number().optional(),
    height: z.number().optional(),
    isHighestBlockInvalid: z.boolean().optional(),
    isOutboundPeer: z.boolean().optional(),
    lastTimePeerRequestedMillis: z.number().optional(),
    lastTimeReceivedMessageMillis: z.number().optional(),
    nonce: z.number().optional(),
    peerId: PublicKeySchema.optional(),
    receivedBytesPerSec: z.number().optional(),
    sentBytesPerSec: z.number().optional(),
    trackedShards: z.array(ShardIdSchema).optional()
});

export const PrepareErrorSchema = z.union([z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string()]);

export const PublicKeySchema = z.any();

export const Range_of_uint64Schema = z.object({
    end: z.number().optional(),
    start: z.number().optional()
});

export const ReceiptEnumViewSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ReceiptValidationErrorSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ReceiptViewSchema = z.object({
    predecessorId: AccountIdSchema.optional(),
    priority: z.number().optional(),
    receipt: ReceiptEnumViewSchema.optional(),
    receiptId: CryptoHashSchema.optional(),
    receiverId: AccountIdSchema.optional()
});

export const RpcBlockRequestSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const RpcBlockResponseSchema = z.object({
    author: AccountIdSchema.optional(),
    chunks: z.array(ChunkHeaderViewSchema).optional(),
    header: BlockHeaderViewSchema.optional()
});

export const RpcChunkRequestSchema = z.union([z.record(z.any()), z.record(z.any())]);

export const RpcChunkResponseSchema = z.object({
    author: AccountIdSchema.optional(),
    header: ChunkHeaderViewSchema.optional(),
    receipts: z.array(ReceiptViewSchema).optional(),
    transactions: z.array(SignedTransactionViewSchema).optional()
});

export const RpcClientConfigRequestSchema = z.any();

export const RpcClientConfigResponseSchema = z.object({
    archive: z.boolean().optional(),
    blockFetchHorizon: z.number().optional(),
    blockHeaderFetchHorizon: z.number().optional(),
    blockProductionTrackingDelay: z.array(z.number()).optional(),
    catchupStepPeriod: z.array(z.number()).optional(),
    chainId: z.string().optional(),
    chunkDistributionNetwork: z.any().optional(),
    chunkRequestRetryPeriod: z.array(z.number()).optional(),
    chunkWaitMult: z.array(z.number()).optional(),
    clientBackgroundMigrationThreads: z.number().optional(),
    doomslugStepPeriod: z.array(z.number()).optional(),
    enableMultilineLogging: z.boolean().optional(),
    enableStatisticsExport: z.boolean().optional(),
    epochLength: z.number().optional(),
    epochSync: z.any().optional(),
    expectedShutdown: z.any().optional(),
    gc: z.any().optional(),
    headerSyncExpectedHeightPerSecond: z.number().optional(),
    headerSyncInitialTimeout: z.array(z.number()).optional(),
    headerSyncProgressTimeout: z.array(z.number()).optional(),
    headerSyncStallBanTimeout: z.array(z.number()).optional(),
    logSummaryPeriod: z.array(z.number()).optional(),
    logSummaryStyle: z.any().optional(),
    maxBlockProductionDelay: z.array(z.number()).optional(),
    maxBlockWaitDelay: z.array(z.number()).optional(),
    maxGasBurntView: z.number().optional(),
    minBlockProductionDelay: z.array(z.number()).optional(),
    minNumPeers: z.number().optional(),
    numBlockProducerSeats: z.number().optional(),
    orphanStateWitnessMaxSize: z.number().optional(),
    orphanStateWitnessPoolSize: z.number().optional(),
    produceChunkAddTransactionsTimeLimit: z.string().optional(),
    produceEmptyBlocks: z.boolean().optional(),
    reshardingConfig: MutableConfigValueSchema.optional(),
    rpcAddr: z.string().optional(),
    saveInvalidWitnesses: z.boolean().optional(),
    saveLatestWitnesses: z.boolean().optional(),
    saveTrieChanges: z.boolean().optional(),
    saveTxOutcomes: z.boolean().optional(),
    skipSyncWait: z.boolean().optional(),
    stateSync: z.any().optional(),
    stateSyncEnabled: z.boolean().optional(),
    stateSyncExternalBackoff: z.array(z.number()).optional(),
    stateSyncExternalTimeout: z.array(z.number()).optional(),
    stateSyncP2pTimeout: z.array(z.number()).optional(),
    stateSyncRetryBackoff: z.array(z.number()).optional(),
    syncCheckPeriod: z.array(z.number()).optional(),
    syncHeightThreshold: z.number().optional(),
    syncMaxBlockRequests: z.number().optional(),
    syncStepPeriod: z.array(z.number()).optional(),
    trackedShardsConfig: TrackedShardsConfigSchema.optional(),
    transactionPoolSizeLimit: z.number().optional(),
    transactionRequestHandlerThreads: z.number().optional(),
    trieViewerStateSizeLimit: z.number().optional(),
    ttlAccountIdRouter: z.array(z.number()).optional(),
    txRoutingHeightHorizon: z.number().optional(),
    version: z.any().optional(),
    viewClientThreads: z.number().optional(),
    viewClientThrottlePeriod: z.array(z.number()).optional()
});

export const RpcCongestionLevelRequestSchema = z.union([z.record(z.any()), z.record(z.any())]);

export const RpcCongestionLevelResponseSchema = z.object({
    congestionLevel: z.number().optional()
});

export const RpcErrorSchema = z.object({
    cause: z.any().optional(),
    code: z.number().optional(),
    data: z.any().optional(),
    message: z.string().optional(),
    name: z.any().optional()
});

export const RpcGasPriceRequestSchema = z.object({
    blockId: z.any().optional()
});

export const RpcGasPriceResponseSchema = z.object({
    gasPrice: z.string().optional()
});

export const RpcHealthRequestSchema = z.any();

export const RpcHealthResponseSchema = z.any();

export const RpcKnownProducerSchema = z.object({
    accountId: AccountIdSchema.optional(),
    addr: z.string().optional(),
    peerId: PeerIdSchema.optional()
});

export const RpcLightClientBlockProofRequestSchema = z.object({
    blockHash: CryptoHashSchema.optional(),
    lightClientHead: CryptoHashSchema.optional()
});

export const RpcLightClientBlockProofResponseSchema = z.object({
    blockHeaderLite: LightClientBlockLiteViewSchema.optional(),
    blockProof: z.array(MerklePathItemSchema).optional()
});

export const RpcLightClientExecutionProofRequestSchema = z.object({
    lightClientHead: CryptoHashSchema.optional()
});

export const RpcLightClientExecutionProofResponseSchema = z.object({
    blockHeaderLite: LightClientBlockLiteViewSchema.optional(),
    blockProof: z.array(MerklePathItemSchema).optional(),
    outcomeProof: ExecutionOutcomeWithIdViewSchema.optional(),
    outcomeRootProof: z.array(MerklePathItemSchema).optional()
});

export const RpcLightClientNextBlockRequestSchema = z.object({
    lastBlockHash: CryptoHashSchema.optional()
});

export const RpcLightClientNextBlockResponseSchema = z.object({
    approvalsAfterNext: z.array(z.any()).optional(),
    innerLite: BlockHeaderInnerLiteViewSchema.optional(),
    innerRestHash: CryptoHashSchema.optional(),
    nextBlockInnerHash: CryptoHashSchema.optional(),
    nextBps: z.array(ValidatorStakeViewSchema).optional(),
    prevBlockHash: CryptoHashSchema.optional()
});

export const RpcMaintenanceWindowsRequestSchema = z.object({
    accountId: AccountIdSchema.optional()
});

export const RpcNetworkInfoRequestSchema = z.any();

export const RpcNetworkInfoResponseSchema = z.object({
    activePeers: z.array(RpcPeerInfoSchema).optional(),
    knownProducers: z.array(RpcKnownProducerSchema).optional(),
    numActivePeers: z.number().optional(),
    peerMaxCount: z.number().optional(),
    receivedBytesPerSec: z.number().optional(),
    sentBytesPerSec: z.number().optional()
});

export const RpcPeerInfoSchema = z.object({
    accountId: z.any().optional(),
    addr: z.string().optional(),
    id: PeerIdSchema.optional()
});

export const RpcProtocolConfigRequestSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

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
    protocolTreasuryAccount: z.any().optional(),
    protocolUpgradeStakeThreshold: z.array(z.number()).optional(),
    protocolVersion: z.number().optional(),
    runtimeConfig: z.any().optional(),
    shardLayout: z.any().optional(),
    shuffleShardAssignmentForChunkProducers: z.boolean().optional(),
    targetValidatorMandatesPerShard: z.number().optional(),
    transactionValidityPeriod: z.number().optional()
});

export const RpcQueryRequestSchema = z.any();

export const RpcQueryResponseSchema = z.object({
    blockHash: CryptoHashSchema.optional(),
    blockHeight: z.number().optional()
});

export const RpcReceiptRequestSchema = z.object({
    receiptId: CryptoHashSchema.optional()
});

export const RpcReceiptResponseSchema = z.object({
    predecessorId: AccountIdSchema.optional(),
    priority: z.number().optional(),
    receipt: ReceiptEnumViewSchema.optional(),
    receiptId: CryptoHashSchema.optional(),
    receiverId: AccountIdSchema.optional()
});

export const RpcRequestValidationErrorKindSchema = z.union([z.record(z.any()), z.record(z.any())]);

export const RpcSendTransactionRequestSchema = z.object({
    signedTxBase64: SignedTransactionSchema.optional(),
    waitUntil: z.any().optional()
});

export const RpcSplitStorageInfoRequestSchema = z.any();

export const RpcSplitStorageInfoResponseSchema = z.object({
    coldHeadHeight: z.number().optional(),
    finalHeadHeight: z.number().optional(),
    headHeight: z.number().optional(),
    hotDbKind: z.string().optional()
});

export const RpcStateChangesInBlockByTypeRequestSchema = z.any();

export const RpcStateChangesInBlockByTypeResponseSchema = z.object({
    blockHash: CryptoHashSchema.optional(),
    changes: z.array(StateChangeKindViewSchema).optional()
});

export const RpcStateChangesInBlockRequestSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const RpcStateChangesInBlockResponseSchema = z.object({
    blockHash: CryptoHashSchema.optional(),
    changes: z.array(StateChangeWithCauseViewSchema).optional()
});

export const RpcStatusRequestSchema = z.any();

export const RpcStatusResponseSchema = z.object({
    chainId: z.string().optional(),
    detailedDebugStatus: z.any().optional(),
    genesisHash: z.any().optional(),
    latestProtocolVersion: z.number().optional(),
    nodeKey: z.any().optional(),
    nodePublicKey: z.any().optional(),
    protocolVersion: z.number().optional(),
    rpcAddr: z.string().optional(),
    syncInfo: z.any().optional(),
    uptimeSec: z.number().optional(),
    validatorAccountId: z.any().optional(),
    validatorPublicKey: z.any().optional(),
    validators: z.array(ValidatorInfoSchema).optional(),
    version: z.any().optional()
});

export const RpcTransactionResponseSchema = z.object({
    finalExecutionStatus: TxExecutionStatusSchema.optional()
});

export const RpcTransactionStatusRequestSchema = z.object({
    waitUntil: z.any().optional()
});

export const RpcValidatorRequestSchema = z.union([z.string(), z.record(z.any()), z.record(z.any())]);

export const RpcValidatorResponseSchema = z.object({
    currentFishermen: z.array(ValidatorStakeViewSchema).optional(),
    currentProposals: z.array(ValidatorStakeViewSchema).optional(),
    currentValidators: z.array(CurrentEpochValidatorInfoSchema).optional(),
    epochHeight: z.number().optional(),
    epochStartHeight: z.number().optional(),
    nextFishermen: z.array(ValidatorStakeViewSchema).optional(),
    nextValidators: z.array(NextEpochValidatorInfoSchema).optional(),
    prevEpochKickout: z.array(ValidatorKickoutViewSchema).optional()
});

export const RpcValidatorsOrderedRequestSchema = z.object({
    blockId: z.any().optional()
});

export const RuntimeConfigViewSchema = z.object({
    accountCreationConfig: z.any().optional(),
    congestionControlConfig: z.any().optional(),
    storageAmountPerByte: z.string().optional(),
    transactionCosts: z.any().optional(),
    wasmConfig: z.any().optional(),
    witnessConfig: z.any().optional()
});

export const RuntimeFeesConfigViewSchema = z.object({
    actionCreationConfig: z.any().optional(),
    actionReceiptCreationConfig: z.any().optional(),
    burntGasReward: z.array(z.number()).optional(),
    dataReceiptCreationConfig: z.any().optional(),
    pessimisticGasPriceInflationRatio: z.array(z.number()).optional(),
    storageUsageConfig: z.any().optional()
});

export const ShardIdSchema = z.any();

export const ShardLayoutSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ShardLayoutV0Schema = z.object({
    numShards: z.number().optional(),
    version: z.number().optional()
});

export const ShardLayoutV1Schema = z.object({
    boundaryAccounts: z.array(AccountIdSchema).optional(),
    shardsSplitMap: z.array(z.array(ShardIdSchema)).optional(),
    toParentShardMap: z.array(ShardIdSchema).optional(),
    version: z.number().optional()
});

export const ShardLayoutV2Schema = z.object({
    boundaryAccounts: z.array(AccountIdSchema).optional(),
    idToIndexMap: z.record(z.any()).optional(),
    indexToIdMap: z.record(z.any()).optional(),
    shardIds: z.array(ShardIdSchema).optional(),
    shardsParentMap: z.record(z.any()).optional(),
    shardsSplitMap: z.record(z.any()).optional(),
    version: z.number().optional()
});

export const ShardUIdSchema = z.object({
    shardId: z.number().optional(),
    version: z.number().optional()
});

export const SignatureSchema = z.any();

export const SignedDelegateActionSchema = z.object({
    delegateAction: DelegateActionSchema.optional(),
    signature: SignatureSchema.optional()
});

export const SignedTransactionSchema = z.any();

export const SignedTransactionViewSchema = z.object({
    actions: z.array(ActionViewSchema).optional(),
    hash: CryptoHashSchema.optional(),
    nonce: z.number().optional(),
    priorityFee: z.number().optional(),
    publicKey: PublicKeySchema.optional(),
    receiverId: AccountIdSchema.optional(),
    signature: SignatureSchema.optional(),
    signerId: AccountIdSchema.optional()
});

export const SlashedValidatorSchema = z.object({
    accountId: AccountIdSchema.optional(),
    isDoubleSign: z.boolean().optional()
});

export const StakeActionSchema = z.object({
    publicKey: z.any().optional(),
    stake: z.string().optional()
});

export const StateChangeCauseViewSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const StateChangeKindViewSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const StateChangeWithCauseViewSchema = z.object({
    cause: StateChangeCauseViewSchema.optional()
});

export const StateItemSchema = z.object({
    key: z.string().optional(),
    value: z.string().optional()
});

export const StateSyncConfigSchema = z.object({
    concurrency: SyncConcurrencySchema.optional(),
    dump: z.any().optional(),
    sync: SyncConfigSchema.optional()
});

export const StatusSyncInfoSchema = z.object({
    earliestBlockHash: z.any().optional(),
    earliestBlockHeight: z.number().optional(),
    earliestBlockTime: z.string().optional(),
    epochId: z.any().optional(),
    epochStartHeight: z.number().optional(),
    latestBlockHash: CryptoHashSchema.optional(),
    latestBlockHeight: z.number().optional(),
    latestBlockTime: z.string().optional(),
    latestStateRoot: CryptoHashSchema.optional(),
    syncing: z.boolean().optional()
});

export const StorageErrorSchema = z.union([z.string(), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const StorageGetModeSchema = z.enum(['FlatStorage', 'Trie']);

export const StorageUsageConfigViewSchema = z.object({
    numBytesAccount: z.number().optional(),
    numExtraBytesRecord: z.number().optional()
});

export const SyncCheckpointSchema = z.enum(['genesis', 'earliest_available']);

export const SyncConcurrencySchema = z.object({
    apply: z.number().optional(),
    applyDuringCatchup: z.number().optional(),
    peerDownloads: z.number().optional(),
    perShard: z.number().optional()
});

export const SyncConfigSchema = z.union([z.string(), z.record(z.any())]);

export const Tier1ProxyViewSchema = z.object({
    addr: z.string().optional(),
    peerId: PublicKeySchema.optional()
});

export const TrackedShardsConfigSchema = z.union([z.string(), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const TransferActionSchema = z.object({
    deposit: z.string().optional()
});

export const TxExecutionErrorSchema = z.union([z.record(z.any()), z.record(z.any())]);

export const TxExecutionStatusSchema = z.union([z.string(), z.string(), z.string(), z.string(), z.string(), z.string()]);

export const UseGlobalContractActionSchema = z.object({
    contractIdentifier: GlobalContractIdentifierSchema.optional()
});

export const VMConfigViewSchema = z.object({
    discardCustomSections: z.boolean().optional(),
    ethImplicitAccounts: z.boolean().optional(),
    extCosts: z.any().optional(),
    fixContractLoadingCost: z.boolean().optional(),
    globalContractHostFns: z.boolean().optional(),
    growMemCost: z.number().optional(),
    implicitAccountCreation: z.boolean().optional(),
    limitConfig: z.any().optional(),
    reftypesBulkMemory: z.boolean().optional(),
    regularOpCost: z.number().optional(),
    saturatingFloatToInt: z.boolean().optional(),
    storageGetMode: z.any().optional(),
    vmKind: z.any().optional()
});

export const VMKindSchema = z.union([z.string(), z.string(), z.string(), z.string(), z.string()]);

export const ValidatorInfoSchema = z.object({
    accountId: AccountIdSchema.optional()
});

export const ValidatorKickoutReasonSchema = z.union([z.string(), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any())]);

export const ValidatorKickoutViewSchema = z.object({
    accountId: AccountIdSchema.optional(),
    reason: ValidatorKickoutReasonSchema.optional()
});

export const ValidatorStakeViewSchema = z.union([z.record(z.any())]);

export const ValidatorStakeViewV1Schema = z.object({
    accountId: AccountIdSchema.optional(),
    publicKey: PublicKeySchema.optional(),
    stake: z.string().optional()
});

export const VersionSchema = z.object({
    build: z.string().optional(),
    commit: z.string().optional(),
    rustcVersion: z.string().optional(),
    version: z.string().optional()
});

export const ViewStateResultSchema = z.object({
    proof: z.array(z.string()).optional(),
    values: z.array(StateItemSchema).optional()
});

export const WasmTrapSchema = z.union([z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string()]);

export const WitnessConfigViewSchema = z.object({
    combinedTransactionsSizeLimit: z.number().optional(),
    mainStorageProofSizeSoftLimit: z.number().optional(),
    newTransactionsValidationStateSizeSoftLimit: z.number().optional()
});

