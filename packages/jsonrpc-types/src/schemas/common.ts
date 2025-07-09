/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';
import { RpcStateChangesInBlockByTypeRequestSchema, RpcStateChangesInBlockByTypeResponseSchema } from './blocks';

export const BandwidthRequestSchema = z.object({
  requestedValuesBitmap: z.unknown().optional(),
  toShard: z.number().optional()
});

export const BandwidthRequestBitmapSchema = z.object({
  data: z.array(z.number())
});

export const BandwidthRequestsSchema = z.unknown();

export const BandwidthRequestsV1Schema = z.object({
  requests: z.array(z.unknown())
});

export const CallResultSchema = z.object({
  logs: z.array(z.string()),
  result: z.array(z.number())
});

export const CompilationErrorSchema = z.unknown();

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

export const CostGasUsedSchema = z.object({
  cost: z.string(),
  costCategory: z.string().optional(),
  gasUsed: z.string().optional()
});

export const CryptoHashSchema = z.string();

export const DataReceiverViewSchema = z.object({
  dataId: z.unknown().optional(),
  receiverId: z.unknown().optional()
});

export const DirectionSchema = z.enum(['Left', 'Right']);

export const DumpConfigSchema = z.object({
  credentialsFile: z.string().optional(),
  iterationDelay: z.unknown().optional(),
  location: z.unknown(),
  restartDumpForShards: z.array(z.unknown()).optional()
});

export const DurationAsStdSchemaProviderSchema = z.object({
  nanos: z.number(),
  secs: z.number()
});

export const EpochIdSchema = z.unknown();

export const EpochSyncConfigSchema = z.object({
  disableEpochSyncForBootstrapping: z.boolean().optional(),
  epochSyncHorizon: z.number().optional(),
  ignoreEpochSyncNetworkRequests: z.boolean().optional(),
  timeoutForEpochSync: z.unknown().optional()
});

export const ExecutionMetadataViewSchema = z.object({
  gasProfile: z.array(z.unknown()).optional(),
  version: z.number()
});

export const ExecutionOutcomeViewSchema = z.object({
  executorId: z.unknown().optional(),
  gasBurnt: z.number().optional(),
  logs: z.array(z.string()),
  metadata: z.unknown().optional(),
  receiptIds: z.array(z.unknown()).optional(),
  status: z.unknown(),
  tokensBurnt: z.string().optional()
});

export const ExecutionOutcomeWithIdViewSchema = z.object({
  blockHash: z.unknown().optional(),
  id: z.unknown(),
  outcome: z.unknown(),
  proof: z.array(z.unknown())
});

export const ExtCostsConfigViewSchema = z.object({
  altBn128G1MultiexpBase: z.number().optional(),
  altBn128G1MultiexpElement: z.number().optional(),
  altBn128G1SumBase: z.number().optional(),
  altBn128G1SumElement: z.number().optional(),
  altBn128PairingCheckBase: z.number().optional(),
  altBn128PairingCheckElement: z.number().optional(),
  base: z.number(),
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
  location: z.unknown(),
  numConcurrentRequests: z.number().optional(),
  numConcurrentRequestsDuringCatchup: z.number().optional()
});

export const ExternalStorageLocationSchema = z.unknown();

export const FeeSchema = z.object({
  execution: z.number(),
  sendNotSir: z.number().optional(),
  sendSir: z.number().optional()
});

export const FinalExecutionOutcomeViewSchema = z.object({
  receiptsOutcome: z.array(z.unknown()).optional(),
  status: z.unknown(),
  transaction: z.unknown(),
  transactionOutcome: z.unknown().optional()
});

export const FinalitySchema = z.enum(['optimistic', 'near-final', 'final']);

export const FunctionCallErrorSchema = z.unknown();

export const FunctionCallPermissionSchema = z.object({
  allowance: z.string().optional(),
  methodNames: z.array(z.string()).optional(),
  receiverId: z.string().optional()
});

export const GCConfigSchema = z.object({
  gcBlocksLimit: z.number().optional(),
  gcForkCleanStep: z.number().optional(),
  gcNumEpochsToKeep: z.number().optional(),
  gcStepPeriod: z.unknown().optional()
});

export const HostErrorSchema = z.unknown();

export const JsonRpcRequestForEXPERIMENTALChangesSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_changes']),
  params: z.unknown()
});

export const JsonRpcRequestForEXPERIMENTALCongestionLevelSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_congestion_level']),
  params: z.unknown()
});

export const JsonRpcRequestForEXPERIMENTALLightClientProofSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_light_client_proof']),
  params: z.unknown()
});

export const JsonRpcRequestForEXPERIMENTALMaintenanceWindowsSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_maintenance_windows']),
  params: z.unknown()
});

export const JsonRpcRequestForEXPERIMENTALSplitStorageInfoSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_split_storage_info']),
  params: z.unknown()
});

export const JsonRpcRequestForChangesSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['changes']),
  params: z.unknown()
});

export const JsonRpcRequestForClientConfigSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['client_config']),
  params: z.unknown()
});

export const JsonRpcRequestForGasPriceSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['gas_price']),
  params: z.unknown()
});

export const JsonRpcRequestForHealthSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['health']),
  params: z.unknown()
});

export const JsonRpcRequestForLightClientProofSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['light_client_proof']),
  params: z.unknown()
});

export const JsonRpcRequestForQuerySchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['query']),
  params: z.unknown()
});

export const JsonRpcResponseForArrayOfRangeOfUint64AndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForCryptoHashAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForNullableRpcHealthResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcClientConfigResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcCongestionLevelResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcGasPriceResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcLightClientExecutionProofResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcQueryResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcSplitStorageInfoResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const KnownProducerViewSchema = z.object({
  accountId: z.unknown().optional(),
  nextHops: z.array(z.unknown()).optional(),
  peerId: z.unknown().optional()
});

export const LimitConfigSchema = z.object({
  accountIdValidityRulesVersion: z.unknown().optional(),
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
  direction: z.unknown(),
  hash: z.unknown()
});

export const MethodResolveErrorSchema = z.enum(['MethodEmptyName', 'MethodNotFound', 'MethodInvalidSignature']);

export const MissingTrieValueSchema = z.object({
  context: z.unknown(),
  hash: z.unknown()
});

export const MissingTrieValueContextSchema = z.unknown();

export const MutableConfigValueSchema = z.string();

export const PeerIdSchema = z.unknown();

export const PeerInfoViewSchema = z.object({
  accountId: z.unknown().optional(),
  addr: z.string(),
  archival: z.boolean(),
  blockHash: z.unknown().optional(),
  connectionEstablishedTimeMillis: z.number().optional(),
  height: z.number().optional(),
  isHighestBlockInvalid: z.boolean().optional(),
  isOutboundPeer: z.boolean().optional(),
  lastTimePeerRequestedMillis: z.number().optional(),
  lastTimeReceivedMessageMillis: z.number().optional(),
  nonce: z.number(),
  peerId: z.unknown().optional(),
  receivedBytesPerSec: z.number().optional(),
  sentBytesPerSec: z.number().optional(),
  trackedShards: z.array(z.unknown()).optional()
});

export const PrepareErrorSchema = z.unknown();

export const RangeOfUint64Schema = z.object({
  end: z.number(),
  start: z.number()
});

export const RpcClientConfigRequestSchema = z.record(z.unknown());

export const RpcClientConfigResponseSchema = z.object({
  archive: z.boolean(),
  blockFetchHorizon: z.number().optional(),
  blockHeaderFetchHorizon: z.number().optional(),
  blockProductionTrackingDelay: z.array(z.number()).optional(),
  catchupStepPeriod: z.array(z.number()).optional(),
  chainId: z.string().optional(),
  chunkDistributionNetwork: z.unknown().optional(),
  chunkRequestRetryPeriod: z.array(z.number()).optional(),
  chunkWaitMult: z.array(z.number()).optional(),
  clientBackgroundMigrationThreads: z.number().optional(),
  doomslugStepPeriod: z.array(z.number()).optional(),
  enableMultilineLogging: z.boolean().optional(),
  enableStatisticsExport: z.boolean().optional(),
  epochLength: z.number().optional(),
  epochSync: z.unknown().optional(),
  expectedShutdown: z.unknown().optional(),
  gc: z.unknown(),
  headerSyncExpectedHeightPerSecond: z.number().optional(),
  headerSyncInitialTimeout: z.array(z.number()).optional(),
  headerSyncProgressTimeout: z.array(z.number()).optional(),
  headerSyncStallBanTimeout: z.array(z.number()).optional(),
  logSummaryPeriod: z.array(z.number()).optional(),
  logSummaryStyle: z.unknown().optional(),
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
  reshardingConfig: z.unknown().optional(),
  rpcAddr: z.string().optional(),
  saveInvalidWitnesses: z.boolean().optional(),
  saveLatestWitnesses: z.boolean().optional(),
  saveTrieChanges: z.boolean().optional(),
  saveTxOutcomes: z.boolean().optional(),
  skipSyncWait: z.boolean().optional(),
  stateSync: z.unknown().optional(),
  stateSyncEnabled: z.boolean().optional(),
  stateSyncExternalBackoff: z.array(z.number()).optional(),
  stateSyncExternalTimeout: z.array(z.number()).optional(),
  stateSyncP2pTimeout: z.array(z.number()).optional(),
  stateSyncRetryBackoff: z.array(z.number()).optional(),
  syncCheckPeriod: z.array(z.number()).optional(),
  syncHeightThreshold: z.number().optional(),
  syncMaxBlockRequests: z.number().optional(),
  syncStepPeriod: z.array(z.number()).optional(),
  trackedShardsConfig: z.unknown().optional(),
  transactionPoolSizeLimit: z.number().optional(),
  transactionRequestHandlerThreads: z.number().optional(),
  trieViewerStateSizeLimit: z.number().optional(),
  ttlAccountIdRouter: z.array(z.number()).optional(),
  txRoutingHeightHorizon: z.number().optional(),
  version: z.unknown(),
  viewClientThreads: z.number().optional(),
  viewClientThrottlePeriod: z.array(z.number()).optional()
});

export const RpcCongestionLevelRequestSchema = z.record(z.unknown());

export const RpcCongestionLevelResponseSchema = z.object({
  congestionLevel: z.number().optional()
});

export const RpcErrorSchema = z.object({
  cause: z.unknown().optional(),
  code: z.number(),
  data: z.unknown().optional(),
  message: z.string(),
  name: z.unknown().optional()
});

export const RpcGasPriceRequestSchema = z.object({
  blockId: z.unknown().optional()
});

export const RpcGasPriceResponseSchema = z.object({
  gasPrice: z.string().optional()
});

export const RpcHealthRequestSchema = z.record(z.unknown());

export const RpcHealthResponseSchema = z.record(z.unknown());

export const RpcKnownProducerSchema = z.object({
  accountId: z.unknown().optional(),
  addr: z.string().optional(),
  peerId: z.unknown().optional()
});

export const RpcLightClientExecutionProofRequestSchema = z.object({
  lightClientHead: z.unknown().optional()
});

export const RpcLightClientExecutionProofResponseSchema = z.object({
  blockHeaderLite: z.unknown().optional(),
  blockProof: z.array(z.unknown()).optional(),
  outcomeProof: z.unknown().optional(),
  outcomeRootProof: z.array(z.unknown()).optional()
});

export const RpcMaintenanceWindowsRequestSchema = z.object({
  accountId: z.unknown().optional()
});

export const RpcPeerInfoSchema = z.object({
  accountId: z.unknown().optional(),
  addr: z.string().optional(),
  id: z.unknown()
});

export const RpcQueryRequestSchema = z.record(z.unknown());

export const RpcQueryResponseSchema = z.object({
  blockHash: z.unknown().optional(),
  blockHeight: z.number().optional()
});

export const RpcRequestValidationErrorKindSchema = z.unknown();

export const RpcSplitStorageInfoRequestSchema = z.record(z.unknown());

export const RpcSplitStorageInfoResponseSchema = z.object({
  coldHeadHeight: z.number().optional(),
  finalHeadHeight: z.number().optional(),
  headHeight: z.number().optional(),
  hotDbKind: z.string().optional()
});

export const RuntimeConfigViewSchema = z.object({
  accountCreationConfig: z.unknown().optional(),
  congestionControlConfig: z.unknown().optional(),
  storageAmountPerByte: z.string().optional(),
  transactionCosts: z.unknown().optional(),
  wasmConfig: z.unknown().optional(),
  witnessConfig: z.unknown().optional()
});

export const RuntimeFeesConfigViewSchema = z.object({
  actionCreationConfig: z.unknown().optional(),
  actionReceiptCreationConfig: z.unknown().optional(),
  burntGasReward: z.array(z.number()).optional(),
  dataReceiptCreationConfig: z.unknown().optional(),
  pessimisticGasPriceInflationRatio: z.array(z.number()).optional(),
  storageUsageConfig: z.unknown().optional()
});

export const ShardIdSchema = z.number();

export const ShardLayoutSchema = z.unknown();

export const ShardLayoutV0Schema = z.object({
  numShards: z.number().optional(),
  version: z.number()
});

export const ShardLayoutV1Schema = z.object({
  boundaryAccounts: z.array(z.unknown()).optional(),
  shardsSplitMap: z.array(z.array(z.unknown())).optional(),
  toParentShardMap: z.array(z.unknown()).optional(),
  version: z.number()
});

export const ShardLayoutV2Schema = z.object({
  boundaryAccounts: z.array(z.unknown()).optional(),
  idToIndexMap: z.record(z.unknown()).optional(),
  indexToIdMap: z.record(z.unknown()).optional(),
  shardIds: z.array(z.unknown()).optional(),
  shardsParentMap: z.record(z.unknown()).optional(),
  shardsSplitMap: z.record(z.unknown()).optional(),
  version: z.number()
});

export const ShardUIdSchema = z.object({
  shardId: z.number().optional(),
  version: z.number()
});

export const SignatureSchema = z.string();

export const StorageErrorSchema = z.unknown();

export const StorageGetModeSchema = z.enum(['FlatStorage', 'Trie']);

export const StorageUsageConfigViewSchema = z.object({
  numBytesAccount: z.number().optional(),
  numExtraBytesRecord: z.number().optional()
});

export const SyncCheckpointSchema = z.enum(['genesis', 'earliest_available']);

export const SyncConcurrencySchema = z.object({
  apply: z.number(),
  applyDuringCatchup: z.number().optional(),
  peerDownloads: z.number().optional(),
  perShard: z.number().optional()
});

export const SyncConfigSchema = z.unknown();

export const Tier1ProxyViewSchema = z.object({
  addr: z.string(),
  peerId: z.unknown().optional()
});

export const TrackedShardsConfigSchema = z.unknown();

export const VMConfigViewSchema = z.object({
  discardCustomSections: z.boolean().optional(),
  ethImplicitAccounts: z.boolean().optional(),
  extCosts: z.unknown().optional(),
  fixContractLoadingCost: z.boolean().optional(),
  globalContractHostFns: z.boolean().optional(),
  growMemCost: z.number().optional(),
  implicitAccountCreation: z.boolean().optional(),
  limitConfig: z.unknown().optional(),
  reftypesBulkMemory: z.boolean().optional(),
  regularOpCost: z.number().optional(),
  saturatingFloatToInt: z.boolean().optional(),
  storageGetMode: z.unknown().optional(),
  vmKind: z.unknown().optional()
});

export const VMKindSchema = z.unknown();

export const VersionSchema = z.object({
  build: z.string(),
  commit: z.string(),
  rustcVersion: z.string().optional(),
  version: z.string()
});

export const WasmTrapSchema = z.unknown();

export const WitnessConfigViewSchema = z.object({
  combinedTransactionsSizeLimit: z.number().optional(),
  mainStorageProofSizeSoftLimit: z.number().optional(),
  newTransactionsValidationStateSizeSoftLimit: z.number().optional()
});

// Schema aliases for client compatibility
export const RpcEXPERIMENTALLightClientProofRequestSchema = RpcLightClientExecutionProofRequestSchema;
export const RpcEXPERIMENTALLightClientProofResponseSchema = RpcLightClientExecutionProofResponseSchema;
export const RpcLightClientProofRequestSchema = RpcLightClientExecutionProofRequestSchema;
export const RpcLightClientProofResponseSchema = RpcLightClientExecutionProofResponseSchema;
export const RpcChangesRequestSchema = RpcStateChangesInBlockByTypeRequestSchema;
export const RpcChangesResponseSchema = RpcStateChangesInBlockByTypeResponseSchema;
export const RpcEXPERIMENTALChangesRequestSchema = RpcStateChangesInBlockByTypeRequestSchema;
export const RpcEXPERIMENTALChangesResponseSchema = RpcStateChangesInBlockByTypeResponseSchema;
export const RpcEXPERIMENTALCongestionLevelRequestSchema = RpcCongestionLevelRequestSchema;
export const RpcEXPERIMENTALCongestionLevelResponseSchema = RpcCongestionLevelResponseSchema;
export const RpcEXPERIMENTALMaintenanceWindowsRequestSchema = RpcMaintenanceWindowsRequestSchema;
export const RpcEXPERIMENTALMaintenanceWindowsResponseSchema = z.any(); // TODO: define proper schema
export const RpcEXPERIMENTALSplitStorageInfoRequestSchema = RpcSplitStorageInfoRequestSchema;
export const RpcEXPERIMENTALSplitStorageInfoResponseSchema = RpcSplitStorageInfoResponseSchema;
