"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountActionSchema = exports.CostGasUsedSchema = exports.ContractCodeViewSchema = exports.CongestionInfoViewSchema = exports.CongestionControlConfigViewSchema = exports.CompilationErrorSchema = exports.ChunkHeaderViewSchema = exports.ChunkDistributionUrisSchema = exports.ChunkDistributionNetworkConfigSchema = exports.CatchupStatusViewSchema = exports.CallResultSchema = exports.BlockStatusViewSchema = exports.BlockIdSchema = exports.BlockHeaderViewSchema = exports.BlockHeaderInnerLiteViewSchema = exports.BandwidthRequestsV1Schema = exports.BandwidthRequestsSchema = exports.BandwidthRequestBitmapSchema = exports.BandwidthRequestSchema = exports.AddKeyActionSchema = exports.ActionsValidationErrorSchema = exports.ActionViewSchema = exports.ActionErrorKindSchema = exports.ActionErrorSchema = exports.ActionCreationConfigViewSchema = exports.ActionSchema = exports.AccountWithPublicKeySchema = exports.AccountViewSchema = exports.AccountInfoSchema = exports.AccountIdValidityRulesVersionSchema = exports.AccountDataViewSchema = exports.AccountCreationConfigViewSchema = exports.AccessKeyViewSchema = exports.AccessKeyPermissionViewSchema = exports.AccessKeyPermissionSchema = exports.AccessKeyListSchema = exports.AccessKeyInfoViewSchema = exports.AccessKeyCreationConfigViewSchema = exports.AccessKeySchema = exports.JsonRpcResponseSchema = exports.JsonRpcRequestSchema = exports.NonceSchema = exports.BalanceSchema = exports.GasSchema = exports.ShardIdSchema = exports.BlockHashSchema = exports.BlockHeightSchema = exports.CryptoHashSchema = exports.PublicKeySchema = exports.AccountIdSchema = void 0;
exports.JsonRpcRequest_for_EXPERIMENTAL_validators_orderedSchema = exports.JsonRpcRequest_for_EXPERIMENTAL_tx_statusSchema = exports.JsonRpcRequest_for_EXPERIMENTAL_split_storage_infoSchema = exports.JsonRpcRequest_for_EXPERIMENTAL_receiptSchema = exports.JsonRpcRequest_for_EXPERIMENTAL_protocol_configSchema = exports.JsonRpcRequest_for_EXPERIMENTAL_maintenance_windowsSchema = exports.JsonRpcRequest_for_EXPERIMENTAL_light_client_proofSchema = exports.JsonRpcRequest_for_EXPERIMENTAL_light_client_block_proofSchema = exports.JsonRpcRequest_for_EXPERIMENTAL_genesis_configSchema = exports.JsonRpcRequest_for_EXPERIMENTAL_congestion_levelSchema = exports.JsonRpcRequest_for_EXPERIMENTAL_changes_in_blockSchema = exports.JsonRpcRequest_for_EXPERIMENTAL_changesSchema = exports.InvalidTxErrorSchema = exports.InvalidAccessKeyErrorSchema = exports.HostErrorSchema = exports.GlobalContractIdentifierSchema = exports.GlobalContractDeployModeSchema = exports.GenesisConfigRequestSchema = exports.GenesisConfigSchema = exports.GasKeyViewSchema = exports.GCConfigSchema = exports.FunctionCallPermissionSchema = exports.FunctionCallErrorSchema = exports.FunctionCallActionSchema = exports.FinalitySchema = exports.FinalExecutionStatusSchema = exports.FinalExecutionOutcomeWithReceiptViewSchema = exports.FinalExecutionOutcomeViewSchema = exports.FeeSchema = exports.ExternalStorageLocationSchema = exports.ExternalStorageConfigSchema = exports.ExtCostsConfigViewSchema = exports.ExecutionStatusViewSchema = exports.ExecutionOutcomeWithIdViewSchema = exports.ExecutionOutcomeViewSchema = exports.ExecutionMetadataViewSchema = exports.EpochSyncConfigSchema = exports.EpochIdSchema = exports.DurationAsStdSchemaProviderSchema = exports.DumpConfigSchema = exports.DirectionSchema = exports.DetailedDebugStatusSchema = exports.DeployGlobalContractActionSchema = exports.DeployContractActionSchema = exports.DeleteKeyActionSchema = exports.DeleteAccountActionSchema = exports.DelegateActionSchema = exports.DataReceiverViewSchema = exports.DataReceiptCreationConfigViewSchema = exports.CurrentEpochValidatorInfoSchema = void 0;
exports.NextEpochValidatorInfoSchema = exports.NetworkInfoViewSchema = exports.MutableConfigValueSchema = exports.MissingTrieValueContextSchema = exports.MissingTrieValueSchema = exports.MethodResolveErrorSchema = exports.MerklePathItemSchema = exports.LogSummaryStyleSchema = exports.LimitConfigSchema = exports.LightClientBlockLiteViewSchema = exports.KnownProducerViewSchema = exports.JsonRpcResponse_for_RpcValidatorResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcTransactionResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcStatusResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcStateChangesInBlockResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcStateChangesInBlockByTypeResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcSplitStorageInfoResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcReceiptResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcQueryResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcProtocolConfigResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcNetworkInfoResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcLightClientNextBlockResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcLightClientExecutionProofResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcLightClientBlockProofResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcGasPriceResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcCongestionLevelResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcClientConfigResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcChunkResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_RpcBlockResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_Nullable_RpcHealthResponse_and_RpcErrorSchema = exports.JsonRpcResponse_for_GenesisConfig_and_RpcErrorSchema = exports.JsonRpcResponse_for_CryptoHash_and_RpcErrorSchema = exports.JsonRpcResponse_for_Array_of_ValidatorStakeView_and_RpcErrorSchema = exports.JsonRpcResponse_for_Array_of_Range_of_uint64_and_RpcErrorSchema = exports.JsonRpcRequest_for_validatorsSchema = exports.JsonRpcRequest_for_txSchema = exports.JsonRpcRequest_for_statusSchema = exports.JsonRpcRequest_for_send_txSchema = exports.JsonRpcRequest_for_querySchema = exports.JsonRpcRequest_for_next_light_client_blockSchema = exports.JsonRpcRequest_for_network_infoSchema = exports.JsonRpcRequest_for_light_client_proofSchema = exports.JsonRpcRequest_for_healthSchema = exports.JsonRpcRequest_for_gas_priceSchema = exports.JsonRpcRequest_for_client_configSchema = exports.JsonRpcRequest_for_chunkSchema = exports.JsonRpcRequest_for_changesSchema = exports.JsonRpcRequest_for_broadcast_tx_commitSchema = exports.JsonRpcRequest_for_broadcast_tx_asyncSchema = exports.JsonRpcRequest_for_blockSchema = void 0;
exports.RpcTransactionStatusRequestSchema = exports.RpcTransactionResponseSchema = exports.RpcStatusResponseSchema = exports.RpcStatusRequestSchema = exports.RpcStateChangesInBlockResponseSchema = exports.RpcStateChangesInBlockRequestSchema = exports.RpcStateChangesInBlockByTypeResponseSchema = exports.RpcStateChangesInBlockByTypeRequestSchema = exports.RpcSplitStorageInfoResponseSchema = exports.RpcSplitStorageInfoRequestSchema = exports.RpcSendTransactionRequestSchema = exports.RpcRequestValidationErrorKindSchema = exports.RpcReceiptResponseSchema = exports.RpcReceiptRequestSchema = exports.RpcQueryResponseSchema = exports.RpcQueryRequestSchema = exports.RpcProtocolConfigResponseSchema = exports.RpcProtocolConfigRequestSchema = exports.RpcPeerInfoSchema = exports.RpcNetworkInfoResponseSchema = exports.RpcNetworkInfoRequestSchema = exports.RpcMaintenanceWindowsRequestSchema = exports.RpcLightClientNextBlockResponseSchema = exports.RpcLightClientNextBlockRequestSchema = exports.RpcLightClientExecutionProofResponseSchema = exports.RpcLightClientExecutionProofRequestSchema = exports.RpcLightClientBlockProofResponseSchema = exports.RpcLightClientBlockProofRequestSchema = exports.RpcKnownProducerSchema = exports.RpcHealthResponseSchema = exports.RpcHealthRequestSchema = exports.RpcGasPriceResponseSchema = exports.RpcGasPriceRequestSchema = exports.RpcErrorSchema = exports.RpcCongestionLevelResponseSchema = exports.RpcCongestionLevelRequestSchema = exports.RpcClientConfigResponseSchema = exports.RpcClientConfigRequestSchema = exports.RpcChunkResponseSchema = exports.RpcChunkRequestSchema = exports.RpcBlockResponseSchema = exports.RpcBlockRequestSchema = exports.ReceiptViewSchema = exports.ReceiptValidationErrorSchema = exports.ReceiptEnumViewSchema = exports.Range_of_uint64Schema = exports.PrepareErrorSchema = exports.PeerInfoViewSchema = exports.PeerIdSchema = exports.NonDelegateActionSchema = void 0;
exports.WitnessConfigViewSchema = exports.WasmTrapSchema = exports.ViewStateResultSchema = exports.VersionSchema = exports.ValidatorStakeViewV1Schema = exports.ValidatorStakeViewSchema = exports.ValidatorKickoutViewSchema = exports.ValidatorKickoutReasonSchema = exports.ValidatorInfoSchema = exports.VMKindSchema = exports.VMConfigViewSchema = exports.UseGlobalContractActionSchema = exports.TxExecutionStatusSchema = exports.TxExecutionErrorSchema = exports.TransferActionSchema = exports.TrackedShardsConfigSchema = exports.Tier1ProxyViewSchema = exports.SyncConfigSchema = exports.SyncConcurrencySchema = exports.SyncCheckpointSchema = exports.StorageUsageConfigViewSchema = exports.StorageGetModeSchema = exports.StorageErrorSchema = exports.StatusSyncInfoSchema = exports.StateSyncConfigSchema = exports.StateItemSchema = exports.StateChangeWithCauseViewSchema = exports.StateChangeKindViewSchema = exports.StateChangeCauseViewSchema = exports.StakeActionSchema = exports.SlashedValidatorSchema = exports.SignedTransactionViewSchema = exports.SignedTransactionSchema = exports.SignedDelegateActionSchema = exports.SignatureSchema = exports.ShardUIdSchema = exports.ShardLayoutV2Schema = exports.ShardLayoutV1Schema = exports.ShardLayoutV0Schema = exports.ShardLayoutSchema = exports.RuntimeFeesConfigViewSchema = exports.RuntimeConfigViewSchema = exports.RpcValidatorsOrderedRequestSchema = exports.RpcValidatorResponseSchema = exports.RpcValidatorRequestSchema = void 0;
const zod_1 = require("zod");
// Base schemas
exports.AccountIdSchema = zod_1.z.string();
exports.PublicKeySchema = zod_1.z.string();
exports.CryptoHashSchema = zod_1.z.string();
exports.BlockHeightSchema = zod_1.z.number();
exports.BlockHashSchema = zod_1.z.string();
exports.ShardIdSchema = zod_1.z.number();
exports.GasSchema = zod_1.z.string();
exports.BalanceSchema = zod_1.z.string();
exports.NonceSchema = zod_1.z.number();
// Base JSON-RPC schemas
exports.JsonRpcRequestSchema = zod_1.z.object({
    jsonrpc: zod_1.z.literal('2.0'),
    method: zod_1.z.string(),
    params: zod_1.z.any(),
    id: zod_1.z.string(),
});
exports.JsonRpcResponseSchema = zod_1.z.object({
    jsonrpc: zod_1.z.literal('2.0'),
    result: zod_1.z.any().optional(),
    error: zod_1.z.object({
        code: zod_1.z.number(),
        message: zod_1.z.string(),
        data: zod_1.z.any().optional(),
    }).optional(),
    id: zod_1.z.string(),
});
// Generated schemas from nearcore OpenAPI spec
exports.AccessKeySchema = zod_1.z.object({
    nonce: zod_1.z.number().optional(),
    permission: zod_1.z.any().optional()
});
exports.AccessKeyCreationConfigViewSchema = zod_1.z.object({
    fullAccessCost: zod_1.z.any().optional(),
    functionCallCost: zod_1.z.any().optional(),
    functionCallCostPerByte: zod_1.z.any().optional()
});
exports.AccessKeyInfoViewSchema = zod_1.z.object({
    accessKey: exports.AccessKeyViewSchema.optional(),
    publicKey: exports.PublicKeySchema.optional()
});
exports.AccessKeyListSchema = zod_1.z.object({
    keys: zod_1.z.array(exports.AccessKeyInfoViewSchema).optional()
});
exports.AccessKeyPermissionSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.string()]);
exports.AccessKeyPermissionViewSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.record(zod_1.z.any())]);
exports.AccessKeyViewSchema = zod_1.z.object({
    nonce: zod_1.z.number().optional(),
    permission: exports.AccessKeyPermissionViewSchema.optional()
});
exports.AccountCreationConfigViewSchema = zod_1.z.object({
    minAllowedTopLevelAccountLength: zod_1.z.number().optional(),
    registrarAccountId: zod_1.z.any().optional()
});
exports.AccountDataViewSchema = zod_1.z.object({
    accountKey: exports.PublicKeySchema.optional(),
    peerId: exports.PublicKeySchema.optional(),
    proxies: zod_1.z.array(exports.Tier1ProxyViewSchema).optional(),
    timestamp: zod_1.z.string().optional()
});
exports.AccountIdSchema = zod_1.z.any();
exports.AccountIdValidityRulesVersionSchema = zod_1.z.any();
exports.AccountInfoSchema = zod_1.z.object({
    accountId: exports.AccountIdSchema.optional(),
    amount: zod_1.z.string().optional(),
    publicKey: exports.PublicKeySchema.optional()
});
exports.AccountViewSchema = zod_1.z.object({
    amount: zod_1.z.string().optional(),
    codeHash: exports.CryptoHashSchema.optional(),
    globalContractAccountId: zod_1.z.any().optional(),
    globalContractHash: zod_1.z.any().optional(),
    locked: zod_1.z.string().optional(),
    storagePaidAt: zod_1.z.number().optional(),
    storageUsage: zod_1.z.number().optional()
});
exports.AccountWithPublicKeySchema = zod_1.z.object({
    accountId: exports.AccountIdSchema.optional(),
    publicKey: exports.PublicKeySchema.optional()
});
exports.ActionSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.ActionCreationConfigViewSchema = zod_1.z.object({
    addKeyCost: zod_1.z.any().optional(),
    createAccountCost: zod_1.z.any().optional(),
    delegateCost: zod_1.z.any().optional(),
    deleteAccountCost: zod_1.z.any().optional(),
    deleteKeyCost: zod_1.z.any().optional(),
    deployContractCost: zod_1.z.any().optional(),
    deployContractCostPerByte: zod_1.z.any().optional(),
    functionCallCost: zod_1.z.any().optional(),
    functionCallCostPerByte: zod_1.z.any().optional(),
    stakeCost: zod_1.z.any().optional(),
    transferCost: zod_1.z.any().optional()
});
exports.ActionErrorSchema = zod_1.z.object({
    index: zod_1.z.number().optional(),
    kind: zod_1.z.any().optional()
});
exports.ActionErrorKindSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.ActionViewSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.ActionsValidationErrorSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.string(), zod_1.z.record(zod_1.z.any())]);
exports.AddKeyActionSchema = zod_1.z.object({
    accessKey: zod_1.z.any().optional(),
    publicKey: zod_1.z.any().optional()
});
exports.BandwidthRequestSchema = zod_1.z.object({
    requestedValuesBitmap: zod_1.z.any().optional(),
    toShard: zod_1.z.number().optional()
});
exports.BandwidthRequestBitmapSchema = zod_1.z.object({
    data: zod_1.z.array(zod_1.z.number()).optional()
});
exports.BandwidthRequestsSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any())]);
exports.BandwidthRequestsV1Schema = zod_1.z.object({
    requests: zod_1.z.array(exports.BandwidthRequestSchema).optional()
});
exports.BlockHeaderInnerLiteViewSchema = zod_1.z.object({
    blockMerkleRoot: exports.CryptoHashSchema.optional(),
    epochId: exports.CryptoHashSchema.optional(),
    height: zod_1.z.number().optional(),
    nextBpHash: exports.CryptoHashSchema.optional(),
    nextEpochId: exports.CryptoHashSchema.optional(),
    outcomeRoot: exports.CryptoHashSchema.optional(),
    prevStateRoot: exports.CryptoHashSchema.optional(),
    timestamp: zod_1.z.number().optional(),
    timestampNanosec: zod_1.z.string().optional()
});
exports.BlockHeaderViewSchema = zod_1.z.object({
    approvals: zod_1.z.array(zod_1.z.any()).optional(),
    blockBodyHash: zod_1.z.any().optional(),
    blockMerkleRoot: exports.CryptoHashSchema.optional(),
    blockOrdinal: zod_1.z.number().optional(),
    challengesResult: zod_1.z.array(exports.SlashedValidatorSchema).optional(),
    challengesRoot: exports.CryptoHashSchema.optional(),
    chunkEndorsements: zod_1.z.array(zod_1.z.array(zod_1.z.number())).optional(),
    chunkHeadersRoot: exports.CryptoHashSchema.optional(),
    chunkMask: zod_1.z.array(zod_1.z.boolean()).optional(),
    chunkReceiptsRoot: exports.CryptoHashSchema.optional(),
    chunkTxRoot: exports.CryptoHashSchema.optional(),
    chunksIncluded: zod_1.z.number().optional(),
    epochId: exports.CryptoHashSchema.optional(),
    epochSyncDataHash: zod_1.z.any().optional(),
    gasPrice: zod_1.z.string().optional(),
    hash: exports.CryptoHashSchema.optional(),
    height: zod_1.z.number().optional(),
    lastDsFinalBlock: exports.CryptoHashSchema.optional(),
    lastFinalBlock: exports.CryptoHashSchema.optional(),
    latestProtocolVersion: zod_1.z.number().optional(),
    nextBpHash: exports.CryptoHashSchema.optional(),
    nextEpochId: exports.CryptoHashSchema.optional(),
    outcomeRoot: exports.CryptoHashSchema.optional(),
    prevHash: exports.CryptoHashSchema.optional(),
    prevHeight: zod_1.z.number().optional(),
    prevStateRoot: exports.CryptoHashSchema.optional(),
    randomValue: exports.CryptoHashSchema.optional(),
    rentPaid: zod_1.z.string().optional(),
    signature: exports.SignatureSchema.optional(),
    timestamp: zod_1.z.number().optional(),
    timestampNanosec: zod_1.z.string().optional(),
    totalSupply: zod_1.z.string().optional(),
    validatorProposals: zod_1.z.array(exports.ValidatorStakeViewSchema).optional(),
    validatorReward: zod_1.z.string().optional()
});
exports.BlockIdSchema = zod_1.z.union([zod_1.z.number(), exports.CryptoHashSchema]);
exports.BlockStatusViewSchema = zod_1.z.object({
    hash: exports.CryptoHashSchema.optional(),
    height: zod_1.z.number().optional()
});
exports.CallResultSchema = zod_1.z.object({
    logs: zod_1.z.array(zod_1.z.string()).optional(),
    result: zod_1.z.array(zod_1.z.number()).optional()
});
exports.CatchupStatusViewSchema = zod_1.z.object({
    blocksToCatchup: zod_1.z.array(exports.BlockStatusViewSchema).optional(),
    shardSyncStatus: zod_1.z.record(zod_1.z.any()).optional(),
    syncBlockHash: exports.CryptoHashSchema.optional(),
    syncBlockHeight: zod_1.z.number().optional()
});
exports.ChunkDistributionNetworkConfigSchema = zod_1.z.object({
    enabled: zod_1.z.boolean().optional(),
    uris: exports.ChunkDistributionUrisSchema.optional()
});
exports.ChunkDistributionUrisSchema = zod_1.z.object({
    get: zod_1.z.string().optional(),
    set: zod_1.z.string().optional()
});
exports.ChunkHeaderViewSchema = zod_1.z.object({
    balanceBurnt: zod_1.z.string().optional(),
    bandwidthRequests: zod_1.z.any().optional(),
    chunkHash: exports.CryptoHashSchema.optional(),
    congestionInfo: zod_1.z.any().optional(),
    encodedLength: zod_1.z.number().optional(),
    encodedMerkleRoot: exports.CryptoHashSchema.optional(),
    gasLimit: zod_1.z.number().optional(),
    gasUsed: zod_1.z.number().optional(),
    heightCreated: zod_1.z.number().optional(),
    heightIncluded: zod_1.z.number().optional(),
    outcomeRoot: exports.CryptoHashSchema.optional(),
    outgoingReceiptsRoot: exports.CryptoHashSchema.optional(),
    prevBlockHash: exports.CryptoHashSchema.optional(),
    prevStateRoot: exports.CryptoHashSchema.optional(),
    rentPaid: zod_1.z.string().optional(),
    shardId: exports.ShardIdSchema.optional(),
    signature: exports.SignatureSchema.optional(),
    txRoot: exports.CryptoHashSchema.optional(),
    validatorProposals: zod_1.z.array(exports.ValidatorStakeViewSchema).optional(),
    validatorReward: zod_1.z.string().optional()
});
exports.CompilationErrorSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
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
exports.ContractCodeViewSchema = zod_1.z.object({
    codeBase64: zod_1.z.string().optional(),
    hash: exports.CryptoHashSchema.optional()
});
exports.CostGasUsedSchema = zod_1.z.object({
    cost: zod_1.z.string().optional(),
    costCategory: zod_1.z.string().optional(),
    gasUsed: zod_1.z.string().optional()
});
exports.CreateAccountActionSchema = zod_1.z.any();
exports.CryptoHashSchema = zod_1.z.any();
exports.CurrentEpochValidatorInfoSchema = zod_1.z.object({
    accountId: exports.AccountIdSchema.optional(),
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
    publicKey: exports.PublicKeySchema.optional(),
    shards: zod_1.z.array(exports.ShardIdSchema).optional(),
    shardsEndorsed: zod_1.z.array(exports.ShardIdSchema).optional(),
    stake: zod_1.z.string().optional()
});
exports.DataReceiptCreationConfigViewSchema = zod_1.z.object({
    baseCost: zod_1.z.any().optional(),
    costPerByte: zod_1.z.any().optional()
});
exports.DataReceiverViewSchema = zod_1.z.object({
    dataId: exports.CryptoHashSchema.optional(),
    receiverId: exports.AccountIdSchema.optional()
});
exports.DelegateActionSchema = zod_1.z.object({
    actions: zod_1.z.array(exports.NonDelegateActionSchema).optional(),
    maxBlockHeight: zod_1.z.number().optional(),
    nonce: zod_1.z.number().optional(),
    publicKey: zod_1.z.any().optional(),
    receiverId: zod_1.z.any().optional(),
    senderId: zod_1.z.any().optional()
});
exports.DeleteAccountActionSchema = zod_1.z.object({
    beneficiaryId: exports.AccountIdSchema.optional()
});
exports.DeleteKeyActionSchema = zod_1.z.object({
    publicKey: zod_1.z.any().optional()
});
exports.DeployContractActionSchema = zod_1.z.object({
    code: zod_1.z.string().optional()
});
exports.DeployGlobalContractActionSchema = zod_1.z.object({
    code: zod_1.z.string().optional(),
    deployMode: exports.GlobalContractDeployModeSchema.optional()
});
exports.DetailedDebugStatusSchema = zod_1.z.object({
    blockProductionDelayMillis: zod_1.z.number().optional(),
    catchupStatus: zod_1.z.array(exports.CatchupStatusViewSchema).optional(),
    currentHeadStatus: exports.BlockStatusViewSchema.optional(),
    currentHeaderHeadStatus: exports.BlockStatusViewSchema.optional(),
    networkInfo: exports.NetworkInfoViewSchema.optional(),
    syncStatus: zod_1.z.string().optional()
});
exports.DirectionSchema = zod_1.z.enum(['Left', 'Right']);
exports.DumpConfigSchema = zod_1.z.object({
    credentialsFile: zod_1.z.string().optional(),
    iterationDelay: zod_1.z.any().optional(),
    location: zod_1.z.any().optional(),
    restartDumpForShards: zod_1.z.array(exports.ShardIdSchema).optional()
});
exports.DurationAsStdSchemaProviderSchema = zod_1.z.object({
    nanos: zod_1.z.number().optional(),
    secs: zod_1.z.number().optional()
});
exports.EpochIdSchema = zod_1.z.any();
exports.EpochSyncConfigSchema = zod_1.z.object({
    disableEpochSyncForBootstrapping: zod_1.z.boolean().optional(),
    epochSyncHorizon: zod_1.z.number().optional(),
    ignoreEpochSyncNetworkRequests: zod_1.z.boolean().optional(),
    timeoutForEpochSync: zod_1.z.any().optional()
});
exports.ExecutionMetadataViewSchema = zod_1.z.object({
    gasProfile: zod_1.z.array(exports.CostGasUsedSchema).optional(),
    version: zod_1.z.number().optional()
});
exports.ExecutionOutcomeViewSchema = zod_1.z.object({
    executorId: zod_1.z.any().optional(),
    gasBurnt: zod_1.z.number().optional(),
    logs: zod_1.z.array(zod_1.z.string()).optional(),
    metadata: zod_1.z.any().optional(),
    receiptIds: zod_1.z.array(exports.CryptoHashSchema).optional(),
    status: zod_1.z.any().optional(),
    tokensBurnt: zod_1.z.string().optional()
});
exports.ExecutionOutcomeWithIdViewSchema = zod_1.z.object({
    blockHash: exports.CryptoHashSchema.optional(),
    id: exports.CryptoHashSchema.optional(),
    outcome: exports.ExecutionOutcomeViewSchema.optional(),
    proof: zod_1.z.array(exports.MerklePathItemSchema).optional()
});
exports.ExecutionStatusViewSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.ExtCostsConfigViewSchema = zod_1.z.object({
    altBn128G1MultiexpBase: zod_1.z.number().optional(),
    altBn128G1MultiexpElement: zod_1.z.number().optional(),
    altBn128G1SumBase: zod_1.z.number().optional(),
    altBn128G1SumElement: zod_1.z.number().optional(),
    altBn128PairingCheckBase: zod_1.z.number().optional(),
    altBn128PairingCheckElement: zod_1.z.number().optional(),
    base: zod_1.z.number().optional(),
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
    location: zod_1.z.any().optional(),
    numConcurrentRequests: zod_1.z.number().optional(),
    numConcurrentRequestsDuringCatchup: zod_1.z.number().optional()
});
exports.ExternalStorageLocationSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.FeeSchema = zod_1.z.object({
    execution: zod_1.z.number().optional(),
    sendNotSir: zod_1.z.number().optional(),
    sendSir: zod_1.z.number().optional()
});
exports.FinalExecutionOutcomeViewSchema = zod_1.z.object({
    receiptsOutcome: zod_1.z.array(exports.ExecutionOutcomeWithIdViewSchema).optional(),
    status: zod_1.z.any().optional(),
    transaction: zod_1.z.any().optional(),
    transactionOutcome: zod_1.z.any().optional()
});
exports.FinalExecutionOutcomeWithReceiptViewSchema = zod_1.z.object({
    receipts: zod_1.z.array(exports.ReceiptViewSchema).optional(),
    receiptsOutcome: zod_1.z.array(exports.ExecutionOutcomeWithIdViewSchema).optional(),
    status: zod_1.z.any().optional(),
    transaction: zod_1.z.any().optional(),
    transactionOutcome: zod_1.z.any().optional()
});
exports.FinalExecutionStatusSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.FinalitySchema = zod_1.z.enum(['optimistic', 'near-final', 'final']);
exports.FunctionCallActionSchema = zod_1.z.object({
    args: zod_1.z.string().optional(),
    deposit: zod_1.z.string().optional(),
    gas: zod_1.z.number().optional(),
    methodName: zod_1.z.string().optional()
});
exports.FunctionCallErrorSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.FunctionCallPermissionSchema = zod_1.z.object({
    allowance: zod_1.z.string().optional(),
    methodNames: zod_1.z.array(zod_1.z.string()).optional(),
    receiverId: zod_1.z.string().optional()
});
exports.GCConfigSchema = zod_1.z.object({
    gcBlocksLimit: zod_1.z.number().optional(),
    gcForkCleanStep: zod_1.z.number().optional(),
    gcNumEpochsToKeep: zod_1.z.number().optional(),
    gcStepPeriod: zod_1.z.any().optional()
});
exports.GasKeyViewSchema = zod_1.z.object({
    balance: zod_1.z.number().optional(),
    numNonces: zod_1.z.number().optional(),
    permission: exports.AccessKeyPermissionViewSchema.optional()
});
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
    protocolTreasuryAccount: zod_1.z.any().optional(),
    protocolUpgradeStakeThreshold: zod_1.z.array(zod_1.z.number()).optional(),
    protocolVersion: zod_1.z.number().optional(),
    shardLayout: zod_1.z.any().optional(),
    shuffleShardAssignmentForChunkProducers: zod_1.z.boolean().optional(),
    targetValidatorMandatesPerShard: zod_1.z.number().optional(),
    totalSupply: zod_1.z.string().optional(),
    transactionValidityPeriod: zod_1.z.number().optional(),
    useProductionConfig: zod_1.z.boolean().optional(),
    validators: zod_1.z.array(exports.AccountInfoSchema).optional()
});
exports.GenesisConfigRequestSchema = zod_1.z.any();
exports.GlobalContractDeployModeSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.string()]);
exports.GlobalContractIdentifierSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.HostErrorSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.InvalidAccessKeyErrorSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.string()]);
exports.InvalidTxErrorSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.JsonRpcRequest_for_EXPERIMENTAL_changesSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcStateChangesInBlockByTypeRequestSchema.optional()
});
exports.JsonRpcRequest_for_EXPERIMENTAL_changes_in_blockSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcStateChangesInBlockRequestSchema.optional()
});
exports.JsonRpcRequest_for_EXPERIMENTAL_congestion_levelSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcCongestionLevelRequestSchema.optional()
});
exports.JsonRpcRequest_for_EXPERIMENTAL_genesis_configSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.GenesisConfigRequestSchema.optional()
});
exports.JsonRpcRequest_for_EXPERIMENTAL_light_client_block_proofSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcLightClientBlockProofRequestSchema.optional()
});
exports.JsonRpcRequest_for_EXPERIMENTAL_light_client_proofSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcLightClientExecutionProofRequestSchema.optional()
});
exports.JsonRpcRequest_for_EXPERIMENTAL_maintenance_windowsSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcMaintenanceWindowsRequestSchema.optional()
});
exports.JsonRpcRequest_for_EXPERIMENTAL_protocol_configSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcProtocolConfigRequestSchema.optional()
});
exports.JsonRpcRequest_for_EXPERIMENTAL_receiptSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcReceiptRequestSchema.optional()
});
exports.JsonRpcRequest_for_EXPERIMENTAL_split_storage_infoSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcSplitStorageInfoRequestSchema.optional()
});
exports.JsonRpcRequest_for_EXPERIMENTAL_tx_statusSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcTransactionStatusRequestSchema.optional()
});
exports.JsonRpcRequest_for_EXPERIMENTAL_validators_orderedSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcValidatorsOrderedRequestSchema.optional()
});
exports.JsonRpcRequest_for_blockSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcBlockRequestSchema.optional()
});
exports.JsonRpcRequest_for_broadcast_tx_asyncSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcSendTransactionRequestSchema.optional()
});
exports.JsonRpcRequest_for_broadcast_tx_commitSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcSendTransactionRequestSchema.optional()
});
exports.JsonRpcRequest_for_changesSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcStateChangesInBlockByTypeRequestSchema.optional()
});
exports.JsonRpcRequest_for_chunkSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcChunkRequestSchema.optional()
});
exports.JsonRpcRequest_for_client_configSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcClientConfigRequestSchema.optional()
});
exports.JsonRpcRequest_for_gas_priceSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcGasPriceRequestSchema.optional()
});
exports.JsonRpcRequest_for_healthSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcHealthRequestSchema.optional()
});
exports.JsonRpcRequest_for_light_client_proofSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcLightClientExecutionProofRequestSchema.optional()
});
exports.JsonRpcRequest_for_network_infoSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcNetworkInfoRequestSchema.optional()
});
exports.JsonRpcRequest_for_next_light_client_blockSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcLightClientNextBlockRequestSchema.optional()
});
exports.JsonRpcRequest_for_querySchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcQueryRequestSchema.optional()
});
exports.JsonRpcRequest_for_send_txSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcSendTransactionRequestSchema.optional()
});
exports.JsonRpcRequest_for_statusSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcStatusRequestSchema.optional()
});
exports.JsonRpcRequest_for_txSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcTransactionStatusRequestSchema.optional()
});
exports.JsonRpcRequest_for_validatorsSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional(),
    method: zod_1.z.string().optional(),
    params: exports.RpcValidatorRequestSchema.optional()
});
exports.JsonRpcResponse_for_Array_of_Range_of_uint64_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_Array_of_ValidatorStakeView_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_CryptoHash_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_GenesisConfig_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_Nullable_RpcHealthResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcBlockResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcChunkResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcClientConfigResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcCongestionLevelResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcGasPriceResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcLightClientBlockProofResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcLightClientExecutionProofResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcLightClientNextBlockResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcNetworkInfoResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcProtocolConfigResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcQueryResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcReceiptResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcSplitStorageInfoResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcStateChangesInBlockByTypeResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcStateChangesInBlockResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcStatusResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcTransactionResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.JsonRpcResponse_for_RpcValidatorResponse_and_RpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    jsonrpc: zod_1.z.string().optional()
});
exports.KnownProducerViewSchema = zod_1.z.object({
    accountId: exports.AccountIdSchema.optional(),
    nextHops: zod_1.z.array(exports.PublicKeySchema).optional(),
    peerId: exports.PublicKeySchema.optional()
});
exports.LightClientBlockLiteViewSchema = zod_1.z.object({
    innerLite: exports.BlockHeaderInnerLiteViewSchema.optional(),
    innerRestHash: exports.CryptoHashSchema.optional(),
    prevBlockHash: exports.CryptoHashSchema.optional()
});
exports.LimitConfigSchema = zod_1.z.object({
    accountIdValidityRulesVersion: zod_1.z.any().optional(),
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
    direction: exports.DirectionSchema.optional(),
    hash: exports.CryptoHashSchema.optional()
});
exports.MethodResolveErrorSchema = zod_1.z.enum(['MethodEmptyName', 'MethodNotFound', 'MethodInvalidSignature']);
exports.MissingTrieValueSchema = zod_1.z.object({
    context: exports.MissingTrieValueContextSchema.optional(),
    hash: exports.CryptoHashSchema.optional()
});
exports.MissingTrieValueContextSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string()]);
exports.MutableConfigValueSchema = zod_1.z.any();
exports.NetworkInfoViewSchema = zod_1.z.object({
    connectedPeers: zod_1.z.array(exports.PeerInfoViewSchema).optional(),
    knownProducers: zod_1.z.array(exports.KnownProducerViewSchema).optional(),
    numConnectedPeers: zod_1.z.number().optional(),
    peerMaxCount: zod_1.z.number().optional(),
    tier1AccountsData: zod_1.z.array(exports.AccountDataViewSchema).optional(),
    tier1AccountsKeys: zod_1.z.array(exports.PublicKeySchema).optional(),
    tier1Connections: zod_1.z.array(exports.PeerInfoViewSchema).optional()
});
exports.NextEpochValidatorInfoSchema = zod_1.z.object({
    accountId: exports.AccountIdSchema.optional(),
    publicKey: exports.PublicKeySchema.optional(),
    shards: zod_1.z.array(exports.ShardIdSchema).optional(),
    stake: zod_1.z.string().optional()
});
exports.NonDelegateActionSchema = zod_1.z.any();
exports.PeerIdSchema = zod_1.z.any();
exports.PeerInfoViewSchema = zod_1.z.object({
    accountId: zod_1.z.any().optional(),
    addr: zod_1.z.string().optional(),
    archival: zod_1.z.boolean().optional(),
    blockHash: zod_1.z.any().optional(),
    connectionEstablishedTimeMillis: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    isHighestBlockInvalid: zod_1.z.boolean().optional(),
    isOutboundPeer: zod_1.z.boolean().optional(),
    lastTimePeerRequestedMillis: zod_1.z.number().optional(),
    lastTimeReceivedMessageMillis: zod_1.z.number().optional(),
    nonce: zod_1.z.number().optional(),
    peerId: exports.PublicKeySchema.optional(),
    receivedBytesPerSec: zod_1.z.number().optional(),
    sentBytesPerSec: zod_1.z.number().optional(),
    trackedShards: zod_1.z.array(exports.ShardIdSchema).optional()
});
exports.PrepareErrorSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string()]);
exports.PublicKeySchema = zod_1.z.any();
exports.Range_of_uint64Schema = zod_1.z.object({
    end: zod_1.z.number().optional(),
    start: zod_1.z.number().optional()
});
exports.ReceiptEnumViewSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.ReceiptValidationErrorSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.ReceiptViewSchema = zod_1.z.object({
    predecessorId: exports.AccountIdSchema.optional(),
    priority: zod_1.z.number().optional(),
    receipt: exports.ReceiptEnumViewSchema.optional(),
    receiptId: exports.CryptoHashSchema.optional(),
    receiverId: exports.AccountIdSchema.optional()
});
exports.RpcBlockRequestSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.RpcBlockResponseSchema = zod_1.z.object({
    author: exports.AccountIdSchema.optional(),
    chunks: zod_1.z.array(exports.ChunkHeaderViewSchema).optional(),
    header: exports.BlockHeaderViewSchema.optional()
});
exports.RpcChunkRequestSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.RpcChunkResponseSchema = zod_1.z.object({
    author: exports.AccountIdSchema.optional(),
    header: exports.ChunkHeaderViewSchema.optional(),
    receipts: zod_1.z.array(exports.ReceiptViewSchema).optional(),
    transactions: zod_1.z.array(exports.SignedTransactionViewSchema).optional()
});
exports.RpcClientConfigRequestSchema = zod_1.z.any();
exports.RpcClientConfigResponseSchema = zod_1.z.object({
    archive: zod_1.z.boolean().optional(),
    blockFetchHorizon: zod_1.z.number().optional(),
    blockHeaderFetchHorizon: zod_1.z.number().optional(),
    blockProductionTrackingDelay: zod_1.z.array(zod_1.z.number()).optional(),
    catchupStepPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    chainId: zod_1.z.string().optional(),
    chunkDistributionNetwork: zod_1.z.any().optional(),
    chunkRequestRetryPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    chunkWaitMult: zod_1.z.array(zod_1.z.number()).optional(),
    clientBackgroundMigrationThreads: zod_1.z.number().optional(),
    doomslugStepPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    enableMultilineLogging: zod_1.z.boolean().optional(),
    enableStatisticsExport: zod_1.z.boolean().optional(),
    epochLength: zod_1.z.number().optional(),
    epochSync: zod_1.z.any().optional(),
    expectedShutdown: zod_1.z.any().optional(),
    gc: zod_1.z.any().optional(),
    headerSyncExpectedHeightPerSecond: zod_1.z.number().optional(),
    headerSyncInitialTimeout: zod_1.z.array(zod_1.z.number()).optional(),
    headerSyncProgressTimeout: zod_1.z.array(zod_1.z.number()).optional(),
    headerSyncStallBanTimeout: zod_1.z.array(zod_1.z.number()).optional(),
    logSummaryPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    logSummaryStyle: zod_1.z.any().optional(),
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
    reshardingConfig: exports.MutableConfigValueSchema.optional(),
    rpcAddr: zod_1.z.string().optional(),
    saveInvalidWitnesses: zod_1.z.boolean().optional(),
    saveLatestWitnesses: zod_1.z.boolean().optional(),
    saveTrieChanges: zod_1.z.boolean().optional(),
    saveTxOutcomes: zod_1.z.boolean().optional(),
    skipSyncWait: zod_1.z.boolean().optional(),
    stateSync: zod_1.z.any().optional(),
    stateSyncEnabled: zod_1.z.boolean().optional(),
    stateSyncExternalBackoff: zod_1.z.array(zod_1.z.number()).optional(),
    stateSyncExternalTimeout: zod_1.z.array(zod_1.z.number()).optional(),
    stateSyncP2pTimeout: zod_1.z.array(zod_1.z.number()).optional(),
    stateSyncRetryBackoff: zod_1.z.array(zod_1.z.number()).optional(),
    syncCheckPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    syncHeightThreshold: zod_1.z.number().optional(),
    syncMaxBlockRequests: zod_1.z.number().optional(),
    syncStepPeriod: zod_1.z.array(zod_1.z.number()).optional(),
    trackedShardsConfig: exports.TrackedShardsConfigSchema.optional(),
    transactionPoolSizeLimit: zod_1.z.number().optional(),
    transactionRequestHandlerThreads: zod_1.z.number().optional(),
    trieViewerStateSizeLimit: zod_1.z.number().optional(),
    ttlAccountIdRouter: zod_1.z.array(zod_1.z.number()).optional(),
    txRoutingHeightHorizon: zod_1.z.number().optional(),
    version: zod_1.z.any().optional(),
    viewClientThreads: zod_1.z.number().optional(),
    viewClientThrottlePeriod: zod_1.z.array(zod_1.z.number()).optional()
});
exports.RpcCongestionLevelRequestSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.RpcCongestionLevelResponseSchema = zod_1.z.object({
    congestionLevel: zod_1.z.number().optional()
});
exports.RpcErrorSchema = zod_1.z.object({
    cause: zod_1.z.any().optional(),
    code: zod_1.z.number().optional(),
    data: zod_1.z.any().optional(),
    message: zod_1.z.string().optional(),
    name: zod_1.z.any().optional()
});
exports.RpcGasPriceRequestSchema = zod_1.z.object({
    blockId: zod_1.z.any().optional()
});
exports.RpcGasPriceResponseSchema = zod_1.z.object({
    gasPrice: zod_1.z.string().optional()
});
exports.RpcHealthRequestSchema = zod_1.z.any();
exports.RpcHealthResponseSchema = zod_1.z.any();
exports.RpcKnownProducerSchema = zod_1.z.object({
    accountId: exports.AccountIdSchema.optional(),
    addr: zod_1.z.string().optional(),
    peerId: exports.PeerIdSchema.optional()
});
exports.RpcLightClientBlockProofRequestSchema = zod_1.z.object({
    blockHash: exports.CryptoHashSchema.optional(),
    lightClientHead: exports.CryptoHashSchema.optional()
});
exports.RpcLightClientBlockProofResponseSchema = zod_1.z.object({
    blockHeaderLite: exports.LightClientBlockLiteViewSchema.optional(),
    blockProof: zod_1.z.array(exports.MerklePathItemSchema).optional()
});
exports.RpcLightClientExecutionProofRequestSchema = zod_1.z.object({
    lightClientHead: exports.CryptoHashSchema.optional()
});
exports.RpcLightClientExecutionProofResponseSchema = zod_1.z.object({
    blockHeaderLite: exports.LightClientBlockLiteViewSchema.optional(),
    blockProof: zod_1.z.array(exports.MerklePathItemSchema).optional(),
    outcomeProof: exports.ExecutionOutcomeWithIdViewSchema.optional(),
    outcomeRootProof: zod_1.z.array(exports.MerklePathItemSchema).optional()
});
exports.RpcLightClientNextBlockRequestSchema = zod_1.z.object({
    lastBlockHash: exports.CryptoHashSchema.optional()
});
exports.RpcLightClientNextBlockResponseSchema = zod_1.z.object({
    approvalsAfterNext: zod_1.z.array(zod_1.z.any()).optional(),
    innerLite: exports.BlockHeaderInnerLiteViewSchema.optional(),
    innerRestHash: exports.CryptoHashSchema.optional(),
    nextBlockInnerHash: exports.CryptoHashSchema.optional(),
    nextBps: zod_1.z.array(exports.ValidatorStakeViewSchema).optional(),
    prevBlockHash: exports.CryptoHashSchema.optional()
});
exports.RpcMaintenanceWindowsRequestSchema = zod_1.z.object({
    accountId: exports.AccountIdSchema.optional()
});
exports.RpcNetworkInfoRequestSchema = zod_1.z.any();
exports.RpcNetworkInfoResponseSchema = zod_1.z.object({
    activePeers: zod_1.z.array(exports.RpcPeerInfoSchema).optional(),
    knownProducers: zod_1.z.array(exports.RpcKnownProducerSchema).optional(),
    numActivePeers: zod_1.z.number().optional(),
    peerMaxCount: zod_1.z.number().optional(),
    receivedBytesPerSec: zod_1.z.number().optional(),
    sentBytesPerSec: zod_1.z.number().optional()
});
exports.RpcPeerInfoSchema = zod_1.z.object({
    accountId: zod_1.z.any().optional(),
    addr: zod_1.z.string().optional(),
    id: exports.PeerIdSchema.optional()
});
exports.RpcProtocolConfigRequestSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
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
    protocolTreasuryAccount: zod_1.z.any().optional(),
    protocolUpgradeStakeThreshold: zod_1.z.array(zod_1.z.number()).optional(),
    protocolVersion: zod_1.z.number().optional(),
    runtimeConfig: zod_1.z.any().optional(),
    shardLayout: zod_1.z.any().optional(),
    shuffleShardAssignmentForChunkProducers: zod_1.z.boolean().optional(),
    targetValidatorMandatesPerShard: zod_1.z.number().optional(),
    transactionValidityPeriod: zod_1.z.number().optional()
});
exports.RpcQueryRequestSchema = zod_1.z.any();
exports.RpcQueryResponseSchema = zod_1.z.object({
    blockHash: exports.CryptoHashSchema.optional(),
    blockHeight: zod_1.z.number().optional()
});
exports.RpcReceiptRequestSchema = zod_1.z.object({
    receiptId: exports.CryptoHashSchema.optional()
});
exports.RpcReceiptResponseSchema = zod_1.z.object({
    predecessorId: exports.AccountIdSchema.optional(),
    priority: zod_1.z.number().optional(),
    receipt: exports.ReceiptEnumViewSchema.optional(),
    receiptId: exports.CryptoHashSchema.optional(),
    receiverId: exports.AccountIdSchema.optional()
});
exports.RpcRequestValidationErrorKindSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.RpcSendTransactionRequestSchema = zod_1.z.object({
    signedTxBase64: exports.SignedTransactionSchema.optional(),
    waitUntil: zod_1.z.any().optional()
});
exports.RpcSplitStorageInfoRequestSchema = zod_1.z.any();
exports.RpcSplitStorageInfoResponseSchema = zod_1.z.object({
    coldHeadHeight: zod_1.z.number().optional(),
    finalHeadHeight: zod_1.z.number().optional(),
    headHeight: zod_1.z.number().optional(),
    hotDbKind: zod_1.z.string().optional()
});
exports.RpcStateChangesInBlockByTypeRequestSchema = zod_1.z.any();
exports.RpcStateChangesInBlockByTypeResponseSchema = zod_1.z.object({
    blockHash: exports.CryptoHashSchema.optional(),
    changes: zod_1.z.array(exports.StateChangeKindViewSchema).optional()
});
exports.RpcStateChangesInBlockRequestSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.RpcStateChangesInBlockResponseSchema = zod_1.z.object({
    blockHash: exports.CryptoHashSchema.optional(),
    changes: zod_1.z.array(exports.StateChangeWithCauseViewSchema).optional()
});
exports.RpcStatusRequestSchema = zod_1.z.any();
exports.RpcStatusResponseSchema = zod_1.z.object({
    chainId: zod_1.z.string().optional(),
    detailedDebugStatus: zod_1.z.any().optional(),
    genesisHash: zod_1.z.any().optional(),
    latestProtocolVersion: zod_1.z.number().optional(),
    nodeKey: zod_1.z.any().optional(),
    nodePublicKey: zod_1.z.any().optional(),
    protocolVersion: zod_1.z.number().optional(),
    rpcAddr: zod_1.z.string().optional(),
    syncInfo: zod_1.z.any().optional(),
    uptimeSec: zod_1.z.number().optional(),
    validatorAccountId: zod_1.z.any().optional(),
    validatorPublicKey: zod_1.z.any().optional(),
    validators: zod_1.z.array(exports.ValidatorInfoSchema).optional(),
    version: zod_1.z.any().optional()
});
exports.RpcTransactionResponseSchema = zod_1.z.object({
    finalExecutionStatus: exports.TxExecutionStatusSchema.optional()
});
exports.RpcTransactionStatusRequestSchema = zod_1.z.object({
    waitUntil: zod_1.z.any().optional()
});
exports.RpcValidatorRequestSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.RpcValidatorResponseSchema = zod_1.z.object({
    currentFishermen: zod_1.z.array(exports.ValidatorStakeViewSchema).optional(),
    currentProposals: zod_1.z.array(exports.ValidatorStakeViewSchema).optional(),
    currentValidators: zod_1.z.array(exports.CurrentEpochValidatorInfoSchema).optional(),
    epochHeight: zod_1.z.number().optional(),
    epochStartHeight: zod_1.z.number().optional(),
    nextFishermen: zod_1.z.array(exports.ValidatorStakeViewSchema).optional(),
    nextValidators: zod_1.z.array(exports.NextEpochValidatorInfoSchema).optional(),
    prevEpochKickout: zod_1.z.array(exports.ValidatorKickoutViewSchema).optional()
});
exports.RpcValidatorsOrderedRequestSchema = zod_1.z.object({
    blockId: zod_1.z.any().optional()
});
exports.RuntimeConfigViewSchema = zod_1.z.object({
    accountCreationConfig: zod_1.z.any().optional(),
    congestionControlConfig: zod_1.z.any().optional(),
    storageAmountPerByte: zod_1.z.string().optional(),
    transactionCosts: zod_1.z.any().optional(),
    wasmConfig: zod_1.z.any().optional(),
    witnessConfig: zod_1.z.any().optional()
});
exports.RuntimeFeesConfigViewSchema = zod_1.z.object({
    actionCreationConfig: zod_1.z.any().optional(),
    actionReceiptCreationConfig: zod_1.z.any().optional(),
    burntGasReward: zod_1.z.array(zod_1.z.number()).optional(),
    dataReceiptCreationConfig: zod_1.z.any().optional(),
    pessimisticGasPriceInflationRatio: zod_1.z.array(zod_1.z.number()).optional(),
    storageUsageConfig: zod_1.z.any().optional()
});
exports.ShardIdSchema = zod_1.z.any();
exports.ShardLayoutSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.ShardLayoutV0Schema = zod_1.z.object({
    numShards: zod_1.z.number().optional(),
    version: zod_1.z.number().optional()
});
exports.ShardLayoutV1Schema = zod_1.z.object({
    boundaryAccounts: zod_1.z.array(exports.AccountIdSchema).optional(),
    shardsSplitMap: zod_1.z.array(zod_1.z.array(exports.ShardIdSchema)).optional(),
    toParentShardMap: zod_1.z.array(exports.ShardIdSchema).optional(),
    version: zod_1.z.number().optional()
});
exports.ShardLayoutV2Schema = zod_1.z.object({
    boundaryAccounts: zod_1.z.array(exports.AccountIdSchema).optional(),
    idToIndexMap: zod_1.z.record(zod_1.z.any()).optional(),
    indexToIdMap: zod_1.z.record(zod_1.z.any()).optional(),
    shardIds: zod_1.z.array(exports.ShardIdSchema).optional(),
    shardsParentMap: zod_1.z.record(zod_1.z.any()).optional(),
    shardsSplitMap: zod_1.z.record(zod_1.z.any()).optional(),
    version: zod_1.z.number().optional()
});
exports.ShardUIdSchema = zod_1.z.object({
    shardId: zod_1.z.number().optional(),
    version: zod_1.z.number().optional()
});
exports.SignatureSchema = zod_1.z.any();
exports.SignedDelegateActionSchema = zod_1.z.object({
    delegateAction: exports.DelegateActionSchema.optional(),
    signature: exports.SignatureSchema.optional()
});
exports.SignedTransactionSchema = zod_1.z.any();
exports.SignedTransactionViewSchema = zod_1.z.object({
    actions: zod_1.z.array(exports.ActionViewSchema).optional(),
    hash: exports.CryptoHashSchema.optional(),
    nonce: zod_1.z.number().optional(),
    priorityFee: zod_1.z.number().optional(),
    publicKey: exports.PublicKeySchema.optional(),
    receiverId: exports.AccountIdSchema.optional(),
    signature: exports.SignatureSchema.optional(),
    signerId: exports.AccountIdSchema.optional()
});
exports.SlashedValidatorSchema = zod_1.z.object({
    accountId: exports.AccountIdSchema.optional(),
    isDoubleSign: zod_1.z.boolean().optional()
});
exports.StakeActionSchema = zod_1.z.object({
    publicKey: zod_1.z.any().optional(),
    stake: zod_1.z.string().optional()
});
exports.StateChangeCauseViewSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.StateChangeKindViewSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.StateChangeWithCauseViewSchema = zod_1.z.object({
    cause: exports.StateChangeCauseViewSchema.optional()
});
exports.StateItemSchema = zod_1.z.object({
    key: zod_1.z.string().optional(),
    value: zod_1.z.string().optional()
});
exports.StateSyncConfigSchema = zod_1.z.object({
    concurrency: exports.SyncConcurrencySchema.optional(),
    dump: zod_1.z.any().optional(),
    sync: exports.SyncConfigSchema.optional()
});
exports.StatusSyncInfoSchema = zod_1.z.object({
    earliestBlockHash: zod_1.z.any().optional(),
    earliestBlockHeight: zod_1.z.number().optional(),
    earliestBlockTime: zod_1.z.string().optional(),
    epochId: zod_1.z.any().optional(),
    epochStartHeight: zod_1.z.number().optional(),
    latestBlockHash: exports.CryptoHashSchema.optional(),
    latestBlockHeight: zod_1.z.number().optional(),
    latestBlockTime: zod_1.z.string().optional(),
    latestStateRoot: exports.CryptoHashSchema.optional(),
    syncing: zod_1.z.boolean().optional()
});
exports.StorageErrorSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.StorageGetModeSchema = zod_1.z.enum(['FlatStorage', 'Trie']);
exports.StorageUsageConfigViewSchema = zod_1.z.object({
    numBytesAccount: zod_1.z.number().optional(),
    numExtraBytesRecord: zod_1.z.number().optional()
});
exports.SyncCheckpointSchema = zod_1.z.enum(['genesis', 'earliest_available']);
exports.SyncConcurrencySchema = zod_1.z.object({
    apply: zod_1.z.number().optional(),
    applyDuringCatchup: zod_1.z.number().optional(),
    peerDownloads: zod_1.z.number().optional(),
    perShard: zod_1.z.number().optional()
});
exports.SyncConfigSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.record(zod_1.z.any())]);
exports.Tier1ProxyViewSchema = zod_1.z.object({
    addr: zod_1.z.string().optional(),
    peerId: exports.PublicKeySchema.optional()
});
exports.TrackedShardsConfigSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.TransferActionSchema = zod_1.z.object({
    deposit: zod_1.z.string().optional()
});
exports.TxExecutionErrorSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.TxExecutionStatusSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string()]);
exports.UseGlobalContractActionSchema = zod_1.z.object({
    contractIdentifier: exports.GlobalContractIdentifierSchema.optional()
});
exports.VMConfigViewSchema = zod_1.z.object({
    discardCustomSections: zod_1.z.boolean().optional(),
    ethImplicitAccounts: zod_1.z.boolean().optional(),
    extCosts: zod_1.z.any().optional(),
    fixContractLoadingCost: zod_1.z.boolean().optional(),
    globalContractHostFns: zod_1.z.boolean().optional(),
    growMemCost: zod_1.z.number().optional(),
    implicitAccountCreation: zod_1.z.boolean().optional(),
    limitConfig: zod_1.z.any().optional(),
    reftypesBulkMemory: zod_1.z.boolean().optional(),
    regularOpCost: zod_1.z.number().optional(),
    saturatingFloatToInt: zod_1.z.boolean().optional(),
    storageGetMode: zod_1.z.any().optional(),
    vmKind: zod_1.z.any().optional()
});
exports.VMKindSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string()]);
exports.ValidatorInfoSchema = zod_1.z.object({
    accountId: exports.AccountIdSchema.optional()
});
exports.ValidatorKickoutReasonSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.string(), zod_1.z.record(zod_1.z.any()), zod_1.z.record(zod_1.z.any())]);
exports.ValidatorKickoutViewSchema = zod_1.z.object({
    accountId: exports.AccountIdSchema.optional(),
    reason: exports.ValidatorKickoutReasonSchema.optional()
});
exports.ValidatorStakeViewSchema = zod_1.z.union([zod_1.z.record(zod_1.z.any())]);
exports.ValidatorStakeViewV1Schema = zod_1.z.object({
    accountId: exports.AccountIdSchema.optional(),
    publicKey: exports.PublicKeySchema.optional(),
    stake: zod_1.z.string().optional()
});
exports.VersionSchema = zod_1.z.object({
    build: zod_1.z.string().optional(),
    commit: zod_1.z.string().optional(),
    rustcVersion: zod_1.z.string().optional(),
    version: zod_1.z.string().optional()
});
exports.ViewStateResultSchema = zod_1.z.object({
    proof: zod_1.z.array(zod_1.z.string()).optional(),
    values: zod_1.z.array(exports.StateItemSchema).optional()
});
exports.WasmTrapSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string(), zod_1.z.string()]);
exports.WitnessConfigViewSchema = zod_1.z.object({
    combinedTransactionsSizeLimit: zod_1.z.number().optional(),
    mainStorageProofSizeSoftLimit: zod_1.z.number().optional(),
    newTransactionsValidationStateSizeSoftLimit: zod_1.z.number().optional()
});
