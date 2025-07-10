/**
 * Validated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from official nearcore OpenAPI specification
 * 
 * These schemas provide runtime validation for all RPC requests and responses.
 */

import { z } from 'zod';

// Base primitive schemas
export const AccountIdSchema = z.string().min(1);
export const PublicKeySchema = z.string().regex(/^(ed25519|secp256k1):/);
export const CryptoHashSchema = z.string().length(44);
export const BlockHeightSchema = z.number().int().min(0);
export const BlockHashSchema = z.string().length(44);
export const ShardIdSchema = z.number().int().min(0);
export const GasSchema = z.string().regex(/^\d+$/);
export const BalanceSchema = z.string().regex(/^\d+$/);
export const NonceSchema = z.number().int().min(0);
export const TimestampSchema = z.number().int().min(0);

// JSON-RPC 2.0 schemas
export const JsonRpcRequestSchema = z.object({
  jsonrpc: z.literal('2.0'),
  method: z.string(),
  params: z.any(),
  id: z.union([z.string(), z.number()]),
});

export const JsonRpcResponseSchema = z.object({
  jsonrpc: z.literal('2.0'),
  result: z.any().optional(),
  error: z.object({
    code: z.number(),
    message: z.string(),
    data: z.any().optional(),
  }).optional(),
  id: z.union([z.string(), z.number()]),
});

// Common schemas
export const FinalitySchema = z.enum(['optimistic', 'near-final', 'final']);

export const BlockIdSchema = z.union([
  z.object({ block_id: BlockHeightSchema }),
  z.object({ block_id: BlockHashSchema }),
  z.object({ finality: FinalitySchema }),
]);

// Generated schemas from OpenAPI specification
export const AccessKeySchema = z.object({
  nonce: z.number(),
  permission: z.any()
});

export const AccessKeyCreationConfigViewSchema = z.object({
  fullAccessCost: z.any(),
  functionCallCost: z.any(),
  functionCallCostPerByte: z.any()
});

export const AccessKeyInfoViewSchema = z.object({
  accessKey: AccessKeyViewSchema,
  publicKey: PublicKeySchema
});

export const AccessKeyListSchema = z.object({
  keys: z.array(AccessKeyInfoViewSchema)
});

export const AccessKeyPermissionSchema = z.union([z.record(z.any()), z.string()]);

export const AccessKeyPermissionViewSchema = z.union([z.string(), z.record(z.any())]);

export const AccessKeyViewSchema = z.object({
  nonce: z.number(),
  permission: AccessKeyPermissionViewSchema
});

export const AccountCreationConfigViewSchema = z.object({
  minAllowedTopLevelAccountLength: z.number(),
  registrarAccountId: z.any()
});

export const AccountDataViewSchema = z.object({
  accountKey: PublicKeySchema,
  peerId: PublicKeySchema,
  proxies: z.array(Tier1ProxyViewSchema),
  timestamp: z.string()
});

export const AccountInfoSchema = z.object({
  accountId: AccountIdSchema,
  amount: z.string(),
  publicKey: PublicKeySchema
});

export const AccountViewSchema = z.object({
  amount: z.string(),
  codeHash: CryptoHashSchema,
  globalContractAccountId: z.any().optional(),
  globalContractHash: z.any().optional(),
  locked: z.string(),
  storagePaidAt: z.number().optional(),
  storageUsage: z.number()
});

export const AccountWithPublicKeySchema = z.object({
  accountId: AccountIdSchema,
  publicKey: PublicKeySchema
});

export const ActionSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ActionCreationConfigViewSchema = z.object({
  addKeyCost: z.any(),
  createAccountCost: z.any(),
  delegateCost: z.any(),
  deleteAccountCost: z.any(),
  deleteKeyCost: z.any(),
  deployContractCost: z.any(),
  deployContractCostPerByte: z.any(),
  functionCallCost: z.any(),
  functionCallCostPerByte: z.any(),
  stakeCost: z.any(),
  transferCost: z.any()
});

export const ActionErrorSchema = z.object({
  index: z.number().optional(),
  kind: z.any()
});

export const ActionErrorKindSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ActionViewSchema = z.union([z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ActionsValidationErrorSchema = z.union([z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.string(), z.record(z.any())]);

export const AddKeyActionSchema = z.object({
  accessKey: z.any(),
  publicKey: z.any()
});

export const BandwidthRequestSchema = z.object({
  requestedValuesBitmap: z.any(),
  toShard: z.number()
});

export const BandwidthRequestBitmapSchema = z.object({
  data: z.array(z.number())
});

export const BandwidthRequestsSchema = z.union([z.record(z.any())]);

export const BandwidthRequestsV1Schema = z.object({
  requests: z.array(BandwidthRequestSchema)
});

export const BlockHeaderInnerLiteViewSchema = z.object({
  blockMerkleRoot: CryptoHashSchema,
  epochId: CryptoHashSchema,
  height: z.number(),
  nextBpHash: CryptoHashSchema,
  nextEpochId: CryptoHashSchema,
  outcomeRoot: CryptoHashSchema,
  prevStateRoot: CryptoHashSchema,
  timestamp: z.number(),
  timestampNanosec: z.string()
});

export const BlockHeaderViewSchema = z.object({
  approvals: z.array(z.any()),
  blockBodyHash: z.any().optional(),
  blockMerkleRoot: CryptoHashSchema,
  blockOrdinal: z.number().optional(),
  challengesResult: z.array(SlashedValidatorSchema),
  challengesRoot: CryptoHashSchema,
  chunkEndorsements: z.array(z.array(z.number())).optional(),
  chunkHeadersRoot: CryptoHashSchema,
  chunkMask: z.array(z.boolean()),
  chunkReceiptsRoot: CryptoHashSchema,
  chunkTxRoot: CryptoHashSchema,
  chunksIncluded: z.number(),
  epochId: CryptoHashSchema,
  epochSyncDataHash: z.any().optional(),
  gasPrice: z.string(),
  hash: CryptoHashSchema,
  height: z.number(),
  lastDsFinalBlock: CryptoHashSchema,
  lastFinalBlock: CryptoHashSchema,
  latestProtocolVersion: z.number(),
  nextBpHash: CryptoHashSchema,
  nextEpochId: CryptoHashSchema,
  outcomeRoot: CryptoHashSchema,
  prevHash: CryptoHashSchema,
  prevHeight: z.number().optional(),
  prevStateRoot: CryptoHashSchema,
  randomValue: CryptoHashSchema,
  rentPaid: z.string(),
  signature: SignatureSchema,
  timestamp: z.number(),
  timestampNanosec: z.string(),
  totalSupply: z.string(),
  validatorProposals: z.array(ValidatorStakeViewSchema),
  validatorReward: z.string()
});

export const BlockIdSchema = z.union([z.number(), CryptoHashSchema]);

export const BlockStatusViewSchema = z.object({
  hash: CryptoHashSchema,
  height: z.number()
});

export const CallResultSchema = z.object({
  logs: z.array(z.string()),
  result: z.array(z.number())
});

export const CatchupStatusViewSchema = z.object({
  blocksToCatchup: z.array(BlockStatusViewSchema),
  shardSyncStatus: z.record(z.any()),
  syncBlockHash: CryptoHashSchema,
  syncBlockHeight: z.number()
});

export const ChunkDistributionNetworkConfigSchema = z.object({
  enabled: z.boolean(),
  uris: ChunkDistributionUrisSchema
});

export const ChunkDistributionUrisSchema = z.object({
  get: z.string(),
  set: z.string()
});

export const ChunkHeaderViewSchema = z.object({
  balanceBurnt: z.string(),
  bandwidthRequests: z.any().optional(),
  chunkHash: CryptoHashSchema,
  congestionInfo: z.any().optional(),
  encodedLength: z.number(),
  encodedMerkleRoot: CryptoHashSchema,
  gasLimit: z.number(),
  gasUsed: z.number(),
  heightCreated: z.number(),
  heightIncluded: z.number(),
  outcomeRoot: CryptoHashSchema,
  outgoingReceiptsRoot: CryptoHashSchema,
  prevBlockHash: CryptoHashSchema,
  prevStateRoot: CryptoHashSchema,
  rentPaid: z.string(),
  shardId: ShardIdSchema,
  signature: SignatureSchema,
  txRoot: CryptoHashSchema,
  validatorProposals: z.array(ValidatorStakeViewSchema),
  validatorReward: z.string()
});

export const CompilationErrorSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const CongestionControlConfigViewSchema = z.object({
  allowedShardOutgoingGas: z.number(),
  maxCongestionIncomingGas: z.number(),
  maxCongestionMemoryConsumption: z.number(),
  maxCongestionMissedChunks: z.number(),
  maxCongestionOutgoingGas: z.number(),
  maxOutgoingGas: z.number(),
  maxTxGas: z.number(),
  minOutgoingGas: z.number(),
  minTxGas: z.number(),
  outgoingReceiptsBigSizeLimit: z.number(),
  outgoingReceiptsUsualSizeLimit: z.number(),
  rejectTxCongestionThreshold: z.number()
});

export const CongestionInfoViewSchema = z.object({
  allowedShard: z.number(),
  bufferedReceiptsGas: z.string(),
  delayedReceiptsGas: z.string(),
  receiptBytes: z.number()
});

export const ContractCodeViewSchema = z.object({
  codeBase64: z.string(),
  hash: CryptoHashSchema
});

export const CostGasUsedSchema = z.object({
  cost: z.string(),
  costCategory: z.string(),
  gasUsed: z.string()
});

export const CurrentEpochValidatorInfoSchema = z.object({
  accountId: AccountIdSchema,
  isSlashed: z.boolean(),
  numExpectedBlocks: z.number(),
  numExpectedChunks: z.number().optional(),
  numExpectedChunksPerShard: z.array(z.number()).optional(),
  numExpectedEndorsements: z.number().optional(),
  numExpectedEndorsementsPerShard: z.array(z.number()).optional(),
  numProducedBlocks: z.number(),
  numProducedChunks: z.number().optional(),
  numProducedChunksPerShard: z.array(z.number()).optional(),
  numProducedEndorsements: z.number().optional(),
  numProducedEndorsementsPerShard: z.array(z.number()).optional(),
  publicKey: PublicKeySchema,
  shards: z.array(ShardIdSchema),
  shardsEndorsed: z.array(ShardIdSchema).optional(),
  stake: z.string()
});

export const DataReceiptCreationConfigViewSchema = z.object({
  baseCost: z.any(),
  costPerByte: z.any()
});

export const DataReceiverViewSchema = z.object({
  dataId: CryptoHashSchema,
  receiverId: AccountIdSchema
});

export const DelegateActionSchema = z.object({
  actions: z.array(NonDelegateActionSchema),
  maxBlockHeight: z.number(),
  nonce: z.number(),
  publicKey: z.any(),
  receiverId: z.any(),
  senderId: z.any()
});

export const DeleteAccountActionSchema = z.object({
  beneficiaryId: AccountIdSchema
});

export const DeleteKeyActionSchema = z.object({
  publicKey: z.any()
});

export const DeployContractActionSchema = z.object({
  code: z.string()
});

export const DeployGlobalContractActionSchema = z.object({
  code: z.string(),
  deployMode: GlobalContractDeployModeSchema
});

export const DetailedDebugStatusSchema = z.object({
  blockProductionDelayMillis: z.number(),
  catchupStatus: z.array(CatchupStatusViewSchema),
  currentHeadStatus: BlockStatusViewSchema,
  currentHeaderHeadStatus: BlockStatusViewSchema,
  networkInfo: NetworkInfoViewSchema,
  syncStatus: z.string()
});

export const DirectionSchema = z.enum(['Left', 'Right']);

export const DumpConfigSchema = z.object({
  credentialsFile: z.string().optional(),
  iterationDelay: z.any().optional(),
  location: z.any(),
  restartDumpForShards: z.array(ShardIdSchema).optional()
});

export const DurationAsStdSchemaProviderSchema = z.object({
  nanos: z.number(),
  secs: z.number()
});

export const EpochSyncConfigSchema = z.object({
  disableEpochSyncForBootstrapping: z.boolean().optional(),
  epochSyncHorizon: z.number(),
  ignoreEpochSyncNetworkRequests: z.boolean().optional(),
  timeoutForEpochSync: z.any()
});

export const ExecutionMetadataViewSchema = z.object({
  gasProfile: z.array(CostGasUsedSchema).optional(),
  version: z.number()
});

export const ExecutionOutcomeViewSchema = z.object({
  executorId: z.any(),
  gasBurnt: z.number(),
  logs: z.array(z.string()),
  metadata: z.any().optional(),
  receiptIds: z.array(CryptoHashSchema),
  status: z.any(),
  tokensBurnt: z.string()
});

export const ExecutionOutcomeWithIdViewSchema = z.object({
  blockHash: CryptoHashSchema,
  id: CryptoHashSchema,
  outcome: ExecutionOutcomeViewSchema,
  proof: z.array(MerklePathItemSchema)
});

export const ExecutionStatusViewSchema = z.union([z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ExtCostsConfigViewSchema = z.object({
  altBn128G1MultiexpBase: z.number(),
  altBn128G1MultiexpElement: z.number(),
  altBn128G1SumBase: z.number(),
  altBn128G1SumElement: z.number(),
  altBn128PairingCheckBase: z.number(),
  altBn128PairingCheckElement: z.number(),
  base: z.number(),
  bls12381G1MultiexpBase: z.number(),
  bls12381G1MultiexpElement: z.number(),
  bls12381G2MultiexpBase: z.number(),
  bls12381G2MultiexpElement: z.number(),
  bls12381MapFp2ToG2Base: z.number(),
  bls12381MapFp2ToG2Element: z.number(),
  bls12381MapFpToG1Base: z.number(),
  bls12381MapFpToG1Element: z.number(),
  bls12381P1DecompressBase: z.number(),
  bls12381P1DecompressElement: z.number(),
  bls12381P1SumBase: z.number(),
  bls12381P1SumElement: z.number(),
  bls12381P2DecompressBase: z.number(),
  bls12381P2DecompressElement: z.number(),
  bls12381P2SumBase: z.number(),
  bls12381P2SumElement: z.number(),
  bls12381PairingBase: z.number(),
  bls12381PairingElement: z.number(),
  contractCompileBase: z.number(),
  contractCompileBytes: z.number(),
  contractLoadingBase: z.number(),
  contractLoadingBytes: z.number(),
  ecrecoverBase: z.number(),
  ed25519VerifyBase: z.number(),
  ed25519VerifyByte: z.number(),
  keccak256Base: z.number(),
  keccak256Byte: z.number(),
  keccak512Base: z.number(),
  keccak512Byte: z.number(),
  logBase: z.number(),
  logByte: z.number(),
  promiseAndBase: z.number(),
  promiseAndPerPromise: z.number(),
  promiseReturn: z.number(),
  readCachedTrieNode: z.number(),
  readMemoryBase: z.number(),
  readMemoryByte: z.number(),
  readRegisterBase: z.number(),
  readRegisterByte: z.number(),
  ripemd160Base: z.number(),
  ripemd160Block: z.number(),
  sha256Base: z.number(),
  sha256Byte: z.number(),
  storageHasKeyBase: z.number(),
  storageHasKeyByte: z.number(),
  storageIterCreateFromByte: z.number(),
  storageIterCreatePrefixBase: z.number(),
  storageIterCreatePrefixByte: z.number(),
  storageIterCreateRangeBase: z.number(),
  storageIterCreateToByte: z.number(),
  storageIterNextBase: z.number(),
  storageIterNextKeyByte: z.number(),
  storageIterNextValueByte: z.number(),
  storageLargeReadOverheadBase: z.number(),
  storageLargeReadOverheadByte: z.number(),
  storageReadBase: z.number(),
  storageReadKeyByte: z.number(),
  storageReadValueByte: z.number(),
  storageRemoveBase: z.number(),
  storageRemoveKeyByte: z.number(),
  storageRemoveRetValueByte: z.number(),
  storageWriteBase: z.number(),
  storageWriteEvictedByte: z.number(),
  storageWriteKeyByte: z.number(),
  storageWriteValueByte: z.number(),
  touchingTrieNode: z.number(),
  utf16DecodingBase: z.number(),
  utf16DecodingByte: z.number(),
  utf8DecodingBase: z.number(),
  utf8DecodingByte: z.number(),
  validatorStakeBase: z.number(),
  validatorTotalStakeBase: z.number(),
  writeMemoryBase: z.number(),
  writeMemoryByte: z.number(),
  writeRegisterBase: z.number(),
  writeRegisterByte: z.number(),
  yieldCreateBase: z.number(),
  yieldCreateByte: z.number(),
  yieldResumeBase: z.number(),
  yieldResumeByte: z.number()
});

export const ExternalStorageConfigSchema = z.object({
  externalStorageFallbackThreshold: z.number().optional(),
  location: z.any(),
  numConcurrentRequests: z.number().optional(),
  numConcurrentRequestsDuringCatchup: z.number().optional()
});

export const ExternalStorageLocationSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const FeeSchema = z.object({
  execution: z.number(),
  sendNotSir: z.number(),
  sendSir: z.number()
});

export const FinalExecutionOutcomeViewSchema = z.object({
  receiptsOutcome: z.array(ExecutionOutcomeWithIdViewSchema),
  status: z.any(),
  transaction: z.any(),
  transactionOutcome: z.any()
});

export const FinalExecutionOutcomeWithReceiptViewSchema = z.object({
  receipts: z.array(ReceiptViewSchema),
  receiptsOutcome: z.array(ExecutionOutcomeWithIdViewSchema),
  status: z.any(),
  transaction: z.any(),
  transactionOutcome: z.any()
});

export const FinalExecutionStatusSchema = z.union([z.string(), z.string(), z.record(z.any()), z.record(z.any())]);

export const FinalitySchema = z.enum(['optimistic', 'near-final', 'final']);

export const FunctionCallActionSchema = z.object({
  args: z.string(),
  deposit: z.string(),
  gas: z.number(),
  methodName: z.string()
});

export const FunctionCallErrorSchema = z.union([z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const FunctionCallPermissionSchema = z.object({
  allowance: z.string().optional(),
  methodNames: z.array(z.string()),
  receiverId: z.string()
});

export const GCConfigSchema = z.object({
  gcBlocksLimit: z.number().optional(),
  gcForkCleanStep: z.number().optional(),
  gcNumEpochsToKeep: z.number().optional(),
  gcStepPeriod: z.any().optional()
});

export const GasKeyViewSchema = z.object({
  balance: z.number(),
  numNonces: z.number(),
  permission: AccessKeyPermissionViewSchema
});

export const GenesisConfigSchema = z.object({
  avgHiddenValidatorSeatsPerShard: z.array(z.number()),
  blockProducerKickoutThreshold: z.number(),
  chainId: z.string(),
  chunkProducerAssignmentChangesLimit: z.number().optional(),
  chunkProducerKickoutThreshold: z.number(),
  chunkValidatorOnlyKickoutThreshold: z.number().optional(),
  dynamicResharding: z.boolean(),
  epochLength: z.number(),
  fishermenThreshold: z.string(),
  gasLimit: z.number(),
  gasPriceAdjustmentRate: z.array(z.number()),
  genesisHeight: z.number(),
  genesisTime: z.string(),
  maxGasPrice: z.string(),
  maxInflationRate: z.array(z.number()),
  maxKickoutStakePerc: z.number().optional(),
  minGasPrice: z.string(),
  minimumStakeDivisor: z.number().optional(),
  minimumStakeRatio: z.array(z.number()).optional(),
  minimumValidatorsPerShard: z.number().optional(),
  numBlockProducerSeats: z.number(),
  numBlockProducerSeatsPerShard: z.array(z.number()),
  numBlocksPerYear: z.number(),
  numChunkOnlyProducerSeats: z.number().optional(),
  numChunkProducerSeats: z.number().optional(),
  numChunkValidatorSeats: z.number().optional(),
  onlineMaxThreshold: z.array(z.number()).optional(),
  onlineMinThreshold: z.array(z.number()).optional(),
  protocolRewardRate: z.array(z.number()),
  protocolTreasuryAccount: z.any(),
  protocolUpgradeStakeThreshold: z.array(z.number()).optional(),
  protocolVersion: z.number(),
  shardLayout: z.any().optional(),
  shuffleShardAssignmentForChunkProducers: z.boolean().optional(),
  targetValidatorMandatesPerShard: z.number().optional(),
  totalSupply: z.string(),
  transactionValidityPeriod: z.number(),
  useProductionConfig: z.boolean().optional(),
  validators: z.array(AccountInfoSchema)
});

export const GlobalContractDeployModeSchema = z.union([z.string(), z.string()]);

export const GlobalContractIdentifierSchema = z.union([z.record(z.any()), z.record(z.any())]);

export const HostErrorSchema = z.union([z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.record(z.any()), z.string(), z.record(z.any()), z.string(), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.string(), z.string(), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const InvalidAccessKeyErrorSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.string()]);

export const InvalidTxErrorSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.string(), z.string(), z.string(), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const JsonRpcRequest_for_EXPERIMENTAL_changesSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcStateChangesInBlockByTypeRequestSchema
});

export const JsonRpcRequest_for_EXPERIMENTAL_changes_in_blockSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcStateChangesInBlockRequestSchema
});

export const JsonRpcRequest_for_EXPERIMENTAL_congestion_levelSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcCongestionLevelRequestSchema
});

export const JsonRpcRequest_for_EXPERIMENTAL_genesis_configSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: GenesisConfigRequestSchema
});

export const JsonRpcRequest_for_EXPERIMENTAL_light_client_block_proofSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcLightClientBlockProofRequestSchema
});

export const JsonRpcRequest_for_EXPERIMENTAL_light_client_proofSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcLightClientExecutionProofRequestSchema
});

export const JsonRpcRequest_for_EXPERIMENTAL_maintenance_windowsSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcMaintenanceWindowsRequestSchema
});

export const JsonRpcRequest_for_EXPERIMENTAL_protocol_configSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcProtocolConfigRequestSchema
});

export const JsonRpcRequest_for_EXPERIMENTAL_receiptSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcReceiptRequestSchema
});

export const JsonRpcRequest_for_EXPERIMENTAL_split_storage_infoSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcSplitStorageInfoRequestSchema
});

export const JsonRpcRequest_for_EXPERIMENTAL_tx_statusSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcTransactionStatusRequestSchema
});

export const JsonRpcRequest_for_EXPERIMENTAL_validators_orderedSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcValidatorsOrderedRequestSchema
});

export const JsonRpcRequest_for_blockSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcBlockRequestSchema
});

export const JsonRpcRequest_for_broadcast_tx_asyncSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcSendTransactionRequestSchema
});

export const JsonRpcRequest_for_broadcast_tx_commitSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcSendTransactionRequestSchema
});

export const JsonRpcRequest_for_changesSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcStateChangesInBlockByTypeRequestSchema
});

export const JsonRpcRequest_for_chunkSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcChunkRequestSchema
});

export const JsonRpcRequest_for_client_configSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcClientConfigRequestSchema
});

export const JsonRpcRequest_for_gas_priceSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcGasPriceRequestSchema
});

export const JsonRpcRequest_for_healthSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcHealthRequestSchema
});

export const JsonRpcRequest_for_light_client_proofSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcLightClientExecutionProofRequestSchema
});

export const JsonRpcRequest_for_network_infoSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcNetworkInfoRequestSchema
});

export const JsonRpcRequest_for_next_light_client_blockSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcLightClientNextBlockRequestSchema
});

export const JsonRpcRequest_for_querySchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcQueryRequestSchema
});

export const JsonRpcRequest_for_send_txSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcSendTransactionRequestSchema
});

export const JsonRpcRequest_for_statusSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcStatusRequestSchema
});

export const JsonRpcRequest_for_txSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcTransactionStatusRequestSchema
});

export const JsonRpcRequest_for_validatorsSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.string(),
  params: RpcValidatorRequestSchema
});

export const JsonRpcResponse_for_Array_of_Range_of_uint64_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_Array_of_ValidatorStakeView_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_CryptoHash_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_GenesisConfig_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_Nullable_RpcHealthResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcBlockResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcChunkResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcClientConfigResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcCongestionLevelResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcGasPriceResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcLightClientBlockProofResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcLightClientExecutionProofResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcLightClientNextBlockResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcNetworkInfoResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcProtocolConfigResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcQueryResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcReceiptResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcSplitStorageInfoResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcStateChangesInBlockByTypeResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcStateChangesInBlockResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcStatusResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcTransactionResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponse_for_RpcValidatorResponse_and_RpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const KnownProducerViewSchema = z.object({
  accountId: AccountIdSchema,
  nextHops: z.array(PublicKeySchema).optional(),
  peerId: PublicKeySchema
});

export const LightClientBlockLiteViewSchema = z.object({
  innerLite: BlockHeaderInnerLiteViewSchema,
  innerRestHash: CryptoHashSchema,
  prevBlockHash: CryptoHashSchema
});

export const LimitConfigSchema = z.object({
  accountIdValidityRulesVersion: z.any().optional(),
  initialMemoryPages: z.number(),
  maxActionsPerReceipt: z.number(),
  maxArgumentsLength: z.number(),
  maxContractSize: z.number(),
  maxFunctionsNumberPerContract: z.number().optional(),
  maxGasBurnt: z.number(),
  maxLengthMethodName: z.number(),
  maxLengthReturnedData: z.number(),
  maxLengthStorageKey: z.number(),
  maxLengthStorageValue: z.number(),
  maxLocalsPerContract: z.number().optional(),
  maxMemoryPages: z.number(),
  maxNumberBytesMethodNames: z.number(),
  maxNumberInputDataDependencies: z.number(),
  maxNumberLogs: z.number(),
  maxNumberRegisters: z.number(),
  maxPromisesPerFunctionCallAction: z.number(),
  maxReceiptSize: z.number(),
  maxRegisterSize: z.number(),
  maxStackHeight: z.number(),
  maxTotalLogLength: z.number(),
  maxTotalPrepaidGas: z.number(),
  maxTransactionSize: z.number(),
  maxYieldPayloadSize: z.number(),
  perReceiptStorageProofSizeLimit: z.number(),
  registersMemoryLimit: z.number(),
  yieldTimeoutLengthInBlocks: z.number()
});

export const LogSummaryStyleSchema = z.enum(['plain', 'colored']);

export const MerklePathItemSchema = z.object({
  direction: DirectionSchema,
  hash: CryptoHashSchema
});

export const MethodResolveErrorSchema = z.enum(['MethodEmptyName', 'MethodNotFound', 'MethodInvalidSignature']);

export const MissingTrieValueSchema = z.object({
  context: MissingTrieValueContextSchema,
  hash: CryptoHashSchema
});

export const MissingTrieValueContextSchema = z.union([z.string(), z.string(), z.string(), z.string()]);

export const NetworkInfoViewSchema = z.object({
  connectedPeers: z.array(PeerInfoViewSchema),
  knownProducers: z.array(KnownProducerViewSchema),
  numConnectedPeers: z.number(),
  peerMaxCount: z.number(),
  tier1AccountsData: z.array(AccountDataViewSchema),
  tier1AccountsKeys: z.array(PublicKeySchema),
  tier1Connections: z.array(PeerInfoViewSchema)
});

export const NextEpochValidatorInfoSchema = z.object({
  accountId: AccountIdSchema,
  publicKey: PublicKeySchema,
  shards: z.array(ShardIdSchema),
  stake: z.string()
});

export const PeerInfoViewSchema = z.object({
  accountId: z.any().optional(),
  addr: z.string(),
  archival: z.boolean(),
  blockHash: z.any().optional(),
  connectionEstablishedTimeMillis: z.number(),
  height: z.number().optional(),
  isHighestBlockInvalid: z.boolean(),
  isOutboundPeer: z.boolean(),
  lastTimePeerRequestedMillis: z.number(),
  lastTimeReceivedMessageMillis: z.number(),
  nonce: z.number(),
  peerId: PublicKeySchema,
  receivedBytesPerSec: z.number(),
  sentBytesPerSec: z.number(),
  trackedShards: z.array(ShardIdSchema)
});

export const PrepareErrorSchema = z.union([z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string()]);

export const Range_of_uint64Schema = z.object({
  end: z.number(),
  start: z.number()
});

export const ReceiptEnumViewSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ReceiptValidationErrorSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ReceiptViewSchema = z.object({
  predecessorId: AccountIdSchema,
  priority: z.number().optional(),
  receipt: ReceiptEnumViewSchema,
  receiptId: CryptoHashSchema,
  receiverId: AccountIdSchema
});

export const RpcBlockRequestSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const RpcBlockResponseSchema = z.object({
  author: AccountIdSchema,
  chunks: z.array(ChunkHeaderViewSchema),
  header: BlockHeaderViewSchema
});

export const RpcChunkRequestSchema = z.union([z.record(z.any()), z.record(z.any())]);

export const RpcChunkResponseSchema = z.object({
  author: AccountIdSchema,
  header: ChunkHeaderViewSchema,
  receipts: z.array(ReceiptViewSchema),
  transactions: z.array(SignedTransactionViewSchema)
});

export const RpcClientConfigResponseSchema = z.object({
  archive: z.boolean(),
  blockFetchHorizon: z.number(),
  blockHeaderFetchHorizon: z.number(),
  blockProductionTrackingDelay: z.array(z.number()),
  catchupStepPeriod: z.array(z.number()),
  chainId: z.string(),
  chunkDistributionNetwork: z.any().optional(),
  chunkRequestRetryPeriod: z.array(z.number()),
  chunkWaitMult: z.array(z.number()),
  clientBackgroundMigrationThreads: z.number(),
  doomslugStepPeriod: z.array(z.number()),
  enableMultilineLogging: z.boolean(),
  enableStatisticsExport: z.boolean(),
  epochLength: z.number(),
  epochSync: z.any(),
  expectedShutdown: z.any(),
  gc: z.any(),
  headerSyncExpectedHeightPerSecond: z.number(),
  headerSyncInitialTimeout: z.array(z.number()),
  headerSyncProgressTimeout: z.array(z.number()),
  headerSyncStallBanTimeout: z.array(z.number()),
  logSummaryPeriod: z.array(z.number()),
  logSummaryStyle: z.any(),
  maxBlockProductionDelay: z.array(z.number()),
  maxBlockWaitDelay: z.array(z.number()),
  maxGasBurntView: z.number().optional(),
  minBlockProductionDelay: z.array(z.number()),
  minNumPeers: z.number(),
  numBlockProducerSeats: z.number(),
  orphanStateWitnessMaxSize: z.number(),
  orphanStateWitnessPoolSize: z.number(),
  produceChunkAddTransactionsTimeLimit: z.string(),
  produceEmptyBlocks: z.boolean(),
  reshardingConfig: MutableConfigValueSchema,
  rpcAddr: z.string().optional(),
  saveInvalidWitnesses: z.boolean(),
  saveLatestWitnesses: z.boolean(),
  saveTrieChanges: z.boolean(),
  saveTxOutcomes: z.boolean(),
  skipSyncWait: z.boolean(),
  stateSync: z.any(),
  stateSyncEnabled: z.boolean(),
  stateSyncExternalBackoff: z.array(z.number()),
  stateSyncExternalTimeout: z.array(z.number()),
  stateSyncP2pTimeout: z.array(z.number()),
  stateSyncRetryBackoff: z.array(z.number()),
  syncCheckPeriod: z.array(z.number()),
  syncHeightThreshold: z.number(),
  syncMaxBlockRequests: z.number(),
  syncStepPeriod: z.array(z.number()),
  trackedShardsConfig: TrackedShardsConfigSchema,
  transactionPoolSizeLimit: z.number().optional(),
  transactionRequestHandlerThreads: z.number(),
  trieViewerStateSizeLimit: z.number().optional(),
  ttlAccountIdRouter: z.array(z.number()),
  txRoutingHeightHorizon: z.number(),
  version: z.any(),
  viewClientThreads: z.number(),
  viewClientThrottlePeriod: z.array(z.number())
});

export const RpcCongestionLevelRequestSchema = z.union([z.record(z.any()), z.record(z.any())]);

export const RpcCongestionLevelResponseSchema = z.object({
  congestionLevel: z.number()
});

export const RpcErrorSchema = z.object({
  cause: z.any().optional(),
  code: z.number(),
  data: z.any().optional(),
  message: z.string(),
  name: z.any().optional()
});

export const RpcGasPriceRequestSchema = z.object({
  blockId: z.any().optional()
});

export const RpcGasPriceResponseSchema = z.object({
  gasPrice: z.string()
});

export const RpcKnownProducerSchema = z.object({
  accountId: AccountIdSchema,
  addr: z.string().optional(),
  peerId: PeerIdSchema
});

export const RpcLightClientBlockProofRequestSchema = z.object({
  blockHash: CryptoHashSchema,
  lightClientHead: CryptoHashSchema
});

export const RpcLightClientBlockProofResponseSchema = z.object({
  blockHeaderLite: LightClientBlockLiteViewSchema,
  blockProof: z.array(MerklePathItemSchema)
});

export const RpcLightClientExecutionProofRequestSchema = z.object({
  lightClientHead: CryptoHashSchema
});

export const RpcLightClientExecutionProofResponseSchema = z.object({
  blockHeaderLite: LightClientBlockLiteViewSchema,
  blockProof: z.array(MerklePathItemSchema),
  outcomeProof: ExecutionOutcomeWithIdViewSchema,
  outcomeRootProof: z.array(MerklePathItemSchema)
});

export const RpcLightClientNextBlockRequestSchema = z.object({
  lastBlockHash: CryptoHashSchema
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
  accountId: AccountIdSchema
});

export const RpcNetworkInfoResponseSchema = z.object({
  activePeers: z.array(RpcPeerInfoSchema),
  knownProducers: z.array(RpcKnownProducerSchema),
  numActivePeers: z.number(),
  peerMaxCount: z.number(),
  receivedBytesPerSec: z.number(),
  sentBytesPerSec: z.number()
});

export const RpcPeerInfoSchema = z.object({
  accountId: z.any().optional(),
  addr: z.string().optional(),
  id: PeerIdSchema
});

export const RpcProtocolConfigRequestSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const RpcProtocolConfigResponseSchema = z.object({
  avgHiddenValidatorSeatsPerShard: z.array(z.number()),
  blockProducerKickoutThreshold: z.number(),
  chainId: z.string(),
  chunkProducerKickoutThreshold: z.number(),
  chunkValidatorOnlyKickoutThreshold: z.number(),
  dynamicResharding: z.boolean(),
  epochLength: z.number(),
  fishermenThreshold: z.string(),
  gasLimit: z.number(),
  gasPriceAdjustmentRate: z.array(z.number()),
  genesisHeight: z.number(),
  genesisTime: z.string(),
  maxGasPrice: z.string(),
  maxInflationRate: z.array(z.number()),
  maxKickoutStakePerc: z.number(),
  minGasPrice: z.string(),
  minimumStakeDivisor: z.number(),
  minimumStakeRatio: z.array(z.number()),
  minimumValidatorsPerShard: z.number(),
  numBlockProducerSeats: z.number(),
  numBlockProducerSeatsPerShard: z.array(z.number()),
  numBlocksPerYear: z.number(),
  onlineMaxThreshold: z.array(z.number()),
  onlineMinThreshold: z.array(z.number()),
  protocolRewardRate: z.array(z.number()),
  protocolTreasuryAccount: z.any(),
  protocolUpgradeStakeThreshold: z.array(z.number()),
  protocolVersion: z.number(),
  runtimeConfig: z.any(),
  shardLayout: z.any(),
  shuffleShardAssignmentForChunkProducers: z.boolean(),
  targetValidatorMandatesPerShard: z.number(),
  transactionValidityPeriod: z.number()
});

export const RpcQueryResponseSchema = z.object({
  blockHash: CryptoHashSchema,
  blockHeight: z.number()
});

export const RpcReceiptRequestSchema = z.object({
  receiptId: CryptoHashSchema
});

export const RpcReceiptResponseSchema = z.object({
  predecessorId: AccountIdSchema,
  priority: z.number().optional(),
  receipt: ReceiptEnumViewSchema,
  receiptId: CryptoHashSchema,
  receiverId: AccountIdSchema
});

export const RpcRequestValidationErrorKindSchema = z.union([z.record(z.any()), z.record(z.any())]);

export const RpcSendTransactionRequestSchema = z.object({
  signedTxBase64: SignedTransactionSchema,
  waitUntil: z.any().optional()
});

export const RpcSplitStorageInfoResponseSchema = z.object({
  coldHeadHeight: z.number().optional(),
  finalHeadHeight: z.number().optional(),
  headHeight: z.number().optional(),
  hotDbKind: z.string().optional()
});

export const RpcStateChangesInBlockByTypeResponseSchema = z.object({
  blockHash: CryptoHashSchema,
  changes: z.array(StateChangeKindViewSchema)
});

export const RpcStateChangesInBlockRequestSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const RpcStateChangesInBlockResponseSchema = z.object({
  blockHash: CryptoHashSchema,
  changes: z.array(StateChangeWithCauseViewSchema)
});

export const RpcStatusResponseSchema = z.object({
  chainId: z.string(),
  detailedDebugStatus: z.any().optional(),
  genesisHash: z.any(),
  latestProtocolVersion: z.number(),
  nodeKey: z.any().optional(),
  nodePublicKey: z.any(),
  protocolVersion: z.number(),
  rpcAddr: z.string().optional(),
  syncInfo: z.any(),
  uptimeSec: z.number(),
  validatorAccountId: z.any().optional(),
  validatorPublicKey: z.any().optional(),
  validators: z.array(ValidatorInfoSchema),
  version: z.any()
});

export const RpcTransactionResponseSchema = z.object({
  finalExecutionStatus: TxExecutionStatusSchema
});

export const RpcTransactionStatusRequestSchema = z.object({
  waitUntil: z.any().optional()
});

export const RpcValidatorRequestSchema = z.union([z.string(), z.record(z.any()), z.record(z.any())]);

export const RpcValidatorResponseSchema = z.object({
  currentFishermen: z.array(ValidatorStakeViewSchema),
  currentProposals: z.array(ValidatorStakeViewSchema),
  currentValidators: z.array(CurrentEpochValidatorInfoSchema),
  epochHeight: z.number(),
  epochStartHeight: z.number(),
  nextFishermen: z.array(ValidatorStakeViewSchema),
  nextValidators: z.array(NextEpochValidatorInfoSchema),
  prevEpochKickout: z.array(ValidatorKickoutViewSchema)
});

export const RpcValidatorsOrderedRequestSchema = z.object({
  blockId: z.any().optional()
});

export const RuntimeConfigViewSchema = z.object({
  accountCreationConfig: z.any(),
  congestionControlConfig: z.any(),
  storageAmountPerByte: z.string(),
  transactionCosts: z.any(),
  wasmConfig: z.any(),
  witnessConfig: z.any()
});

export const RuntimeFeesConfigViewSchema = z.object({
  actionCreationConfig: z.any(),
  actionReceiptCreationConfig: z.any(),
  burntGasReward: z.array(z.number()),
  dataReceiptCreationConfig: z.any(),
  pessimisticGasPriceInflationRatio: z.array(z.number()),
  storageUsageConfig: z.any()
});

export const ShardLayoutSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const ShardLayoutV0Schema = z.object({
  numShards: z.number(),
  version: z.number()
});

export const ShardLayoutV1Schema = z.object({
  boundaryAccounts: z.array(AccountIdSchema),
  shardsSplitMap: z.array(z.array(ShardIdSchema)).optional(),
  toParentShardMap: z.array(ShardIdSchema).optional(),
  version: z.number()
});

export const ShardLayoutV2Schema = z.object({
  boundaryAccounts: z.array(AccountIdSchema),
  idToIndexMap: z.record(z.any()),
  indexToIdMap: z.record(z.any()),
  shardIds: z.array(ShardIdSchema),
  shardsParentMap: z.record(z.any()).optional(),
  shardsSplitMap: z.record(z.any()).optional(),
  version: z.number()
});

export const ShardUIdSchema = z.object({
  shardId: z.number(),
  version: z.number()
});

export const SignedDelegateActionSchema = z.object({
  delegateAction: DelegateActionSchema,
  signature: SignatureSchema
});

export const SignedTransactionViewSchema = z.object({
  actions: z.array(ActionViewSchema),
  hash: CryptoHashSchema,
  nonce: z.number(),
  priorityFee: z.number().optional(),
  publicKey: PublicKeySchema,
  receiverId: AccountIdSchema,
  signature: SignatureSchema,
  signerId: AccountIdSchema
});

export const SlashedValidatorSchema = z.object({
  accountId: AccountIdSchema,
  isDoubleSign: z.boolean()
});

export const StakeActionSchema = z.object({
  publicKey: z.any(),
  stake: z.string()
});

export const StateChangeCauseViewSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const StateChangeKindViewSchema = z.union([z.record(z.any()), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const StateChangeWithCauseViewSchema = z.object({
  cause: StateChangeCauseViewSchema
});

export const StateItemSchema = z.object({
  key: z.string(),
  value: z.string()
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
  latestBlockHash: CryptoHashSchema,
  latestBlockHeight: z.number(),
  latestBlockTime: z.string(),
  latestStateRoot: CryptoHashSchema,
  syncing: z.boolean()
});

export const StorageErrorSchema = z.union([z.string(), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const StorageGetModeSchema = z.enum(['FlatStorage', 'Trie']);

export const StorageUsageConfigViewSchema = z.object({
  numBytesAccount: z.number(),
  numExtraBytesRecord: z.number()
});

export const SyncCheckpointSchema = z.enum(['genesis', 'earliest_available']);

export const SyncConcurrencySchema = z.object({
  apply: z.number(),
  applyDuringCatchup: z.number(),
  peerDownloads: z.number(),
  perShard: z.number()
});

export const SyncConfigSchema = z.union([z.string(), z.record(z.any())]);

export const Tier1ProxyViewSchema = z.object({
  addr: z.string(),
  peerId: PublicKeySchema
});

export const TrackedShardsConfigSchema = z.union([z.string(), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any()), z.record(z.any())]);

export const TransferActionSchema = z.object({
  deposit: z.string()
});

export const TxExecutionErrorSchema = z.union([z.record(z.any()), z.record(z.any())]);

export const TxExecutionStatusSchema = z.union([z.string(), z.string(), z.string(), z.string(), z.string(), z.string()]);

export const UseGlobalContractActionSchema = z.object({
  contractIdentifier: GlobalContractIdentifierSchema
});

export const VMConfigViewSchema = z.object({
  discardCustomSections: z.boolean(),
  ethImplicitAccounts: z.boolean(),
  extCosts: z.any(),
  fixContractLoadingCost: z.boolean(),
  globalContractHostFns: z.boolean(),
  growMemCost: z.number(),
  implicitAccountCreation: z.boolean(),
  limitConfig: z.any(),
  reftypesBulkMemory: z.boolean(),
  regularOpCost: z.number(),
  saturatingFloatToInt: z.boolean(),
  storageGetMode: z.any(),
  vmKind: z.any()
});

export const VMKindSchema = z.union([z.string(), z.string(), z.string(), z.string(), z.string()]);

export const ValidatorInfoSchema = z.object({
  accountId: AccountIdSchema
});

export const ValidatorKickoutReasonSchema = z.union([z.string(), z.record(z.any()), z.record(z.any()), z.string(), z.record(z.any()), z.string(), z.record(z.any()), z.record(z.any())]);

export const ValidatorKickoutViewSchema = z.object({
  accountId: AccountIdSchema,
  reason: ValidatorKickoutReasonSchema
});

export const ValidatorStakeViewSchema = z.union([z.record(z.any())]);

export const ValidatorStakeViewV1Schema = z.object({
  accountId: AccountIdSchema,
  publicKey: PublicKeySchema,
  stake: z.string()
});

export const VersionSchema = z.object({
  build: z.string(),
  commit: z.string(),
  rustcVersion: z.string().optional(),
  version: z.string()
});

export const ViewStateResultSchema = z.object({
  proof: z.array(z.string()).optional(),
  values: z.array(StateItemSchema)
});

export const WasmTrapSchema = z.union([z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string()]);

export const WitnessConfigViewSchema = z.object({
  combinedTransactionsSizeLimit: z.number(),
  mainStorageProofSizeSoftLimit: z.number(),
  newTransactionsValidationStateSizeSoftLimit: z.number()
});

