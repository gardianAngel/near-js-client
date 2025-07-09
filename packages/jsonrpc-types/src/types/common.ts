/**
 * Generated types for NEAR Protocol JSON-RPC
 */

// Base types - defined in this file
export type AccountId = string;
export type CryptoHash = string;
export type PublicKey = string;

// Import types from blocks.ts that are needed for type aliases
import { RpcStateChangesInBlockByTypeResponse } from './blocks';

export interface BandwidthRequest {
  requestedValuesBitmap?: unknown;
  toShard?: number;
}

export interface BandwidthRequestBitmap {
  data: number[];
}

export type BandwidthRequests = unknown;

export interface BandwidthRequestsV1 {
  requests: BandwidthRequest[];
}

export interface CallResult {
  logs: string[];
  result: number[];
}

export type CompilationError = unknown;

export interface CongestionControlConfigView {
  allowedShardOutgoingGas?: number;
  maxCongestionIncomingGas?: number;
  maxCongestionMemoryConsumption?: number;
  maxCongestionMissedChunks?: number;
  maxCongestionOutgoingGas?: number;
  maxOutgoingGas?: number;
  maxTxGas?: number;
  minOutgoingGas?: number;
  minTxGas?: number;
  outgoingReceiptsBigSizeLimit?: number;
  outgoingReceiptsUsualSizeLimit?: number;
  rejectTxCongestionThreshold?: number;
}

export interface CongestionInfoView {
  allowedShard?: number;
  bufferedReceiptsGas?: string;
  delayedReceiptsGas?: string;
  receiptBytes?: number;
}

export interface CostGasUsed {
  cost: string;
  costCategory?: string;
  gasUsed?: string;
}

export interface DataReceiverView {
  dataId?: CryptoHash;
  receiverId?: AccountId;
}

export type Direction = 'Left' | 'Right';

export interface DumpConfig {
  credentialsFile?: string;
  iterationDelay?: unknown;
  location: unknown;
  restartDumpForShards?: ShardId[];
}

export interface DurationAsStdSchemaProvider {
  nanos: number;
  secs: number;
}

export type EpochId = unknown;

export interface EpochSyncConfig {
  disableEpochSyncForBootstrapping?: boolean;
  epochSyncHorizon?: number;
  ignoreEpochSyncNetworkRequests?: boolean;
  timeoutForEpochSync?: unknown;
}

export interface ExecutionMetadataView {
  gasProfile?: CostGasUsed[];
  version: number;
}

export interface ExecutionOutcomeView {
  executorId?: unknown;
  gasBurnt?: number;
  logs: string[];
  metadata?: unknown;
  receiptIds?: CryptoHash[];
  status: unknown;
  tokensBurnt?: string;
}

export interface ExecutionOutcomeWithIdView {
  blockHash?: CryptoHash;
  id: CryptoHash;
  outcome: ExecutionOutcomeView;
  proof: MerklePathItem[];
}

export interface ExtCostsConfigView {
  altBn128G1MultiexpBase?: number;
  altBn128G1MultiexpElement?: number;
  altBn128G1SumBase?: number;
  altBn128G1SumElement?: number;
  altBn128PairingCheckBase?: number;
  altBn128PairingCheckElement?: number;
  base: number;
  bls12381G1MultiexpBase?: number;
  bls12381G1MultiexpElement?: number;
  bls12381G2MultiexpBase?: number;
  bls12381G2MultiexpElement?: number;
  bls12381MapFp2ToG2Base?: number;
  bls12381MapFp2ToG2Element?: number;
  bls12381MapFpToG1Base?: number;
  bls12381MapFpToG1Element?: number;
  bls12381P1DecompressBase?: number;
  bls12381P1DecompressElement?: number;
  bls12381P1SumBase?: number;
  bls12381P1SumElement?: number;
  bls12381P2DecompressBase?: number;
  bls12381P2DecompressElement?: number;
  bls12381P2SumBase?: number;
  bls12381P2SumElement?: number;
  bls12381PairingBase?: number;
  bls12381PairingElement?: number;
  contractCompileBase?: number;
  contractCompileBytes?: number;
  contractLoadingBase?: number;
  contractLoadingBytes?: number;
  ecrecoverBase?: number;
  ed25519VerifyBase?: number;
  ed25519VerifyByte?: number;
  keccak256Base?: number;
  keccak256Byte?: number;
  keccak512Base?: number;
  keccak512Byte?: number;
  logBase?: number;
  logByte?: number;
  promiseAndBase?: number;
  promiseAndPerPromise?: number;
  promiseReturn?: number;
  readCachedTrieNode?: number;
  readMemoryBase?: number;
  readMemoryByte?: number;
  readRegisterBase?: number;
  readRegisterByte?: number;
  ripemd160Base?: number;
  ripemd160Block?: number;
  sha256Base?: number;
  sha256Byte?: number;
  storageHasKeyBase?: number;
  storageHasKeyByte?: number;
  storageIterCreateFromByte?: number;
  storageIterCreatePrefixBase?: number;
  storageIterCreatePrefixByte?: number;
  storageIterCreateRangeBase?: number;
  storageIterCreateToByte?: number;
  storageIterNextBase?: number;
  storageIterNextKeyByte?: number;
  storageIterNextValueByte?: number;
  storageLargeReadOverheadBase?: number;
  storageLargeReadOverheadByte?: number;
  storageReadBase?: number;
  storageReadKeyByte?: number;
  storageReadValueByte?: number;
  storageRemoveBase?: number;
  storageRemoveKeyByte?: number;
  storageRemoveRetValueByte?: number;
  storageWriteBase?: number;
  storageWriteEvictedByte?: number;
  storageWriteKeyByte?: number;
  storageWriteValueByte?: number;
  touchingTrieNode?: number;
  utf16DecodingBase?: number;
  utf16DecodingByte?: number;
  utf8DecodingBase?: number;
  utf8DecodingByte?: number;
  validatorStakeBase?: number;
  validatorTotalStakeBase?: number;
  writeMemoryBase?: number;
  writeMemoryByte?: number;
  writeRegisterBase?: number;
  writeRegisterByte?: number;
  yieldCreateBase?: number;
  yieldCreateByte?: number;
  yieldResumeBase?: number;
  yieldResumeByte?: number;
}

export interface ExternalStorageConfig {
  externalStorageFallbackThreshold?: number;
  location: unknown;
  numConcurrentRequests?: number;
  numConcurrentRequestsDuringCatchup?: number;
}

export type ExternalStorageLocation = unknown;

export interface Fee {
  execution: number;
  sendNotSir?: number;
  sendSir?: number;
}

export interface FinalExecutionOutcomeView {
  receiptsOutcome?: ExecutionOutcomeWithIdView[];
  status: unknown;
  transaction: unknown;
  transactionOutcome?: unknown;
}

export type Finality = 'optimistic' | 'near-final' | 'final';

export type FunctionCallError = unknown;

export interface FunctionCallPermission {
  allowance?: string;
  methodNames?: string[];
  receiverId?: string;
}

export interface GCConfig {
  gcBlocksLimit?: number;
  gcForkCleanStep?: number;
  gcNumEpochsToKeep?: number;
  gcStepPeriod?: unknown;
}

export type HostError = unknown;

export interface JsonRpcRequestForEXPERIMENTALChanges {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_changes';
  params: RpcStateChangesInBlockByTypeRequest;
}

export interface JsonRpcRequestForEXPERIMENTALCongestionLevel {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_congestion_level';
  params: RpcCongestionLevelRequest;
}

export interface JsonRpcRequestForEXPERIMENTALLightClientProof {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_light_client_proof';
  params: RpcLightClientExecutionProofRequest;
}

export interface JsonRpcRequestForEXPERIMENTALMaintenanceWindows {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_maintenance_windows';
  params: RpcMaintenanceWindowsRequest;
}

export interface JsonRpcRequestForEXPERIMENTALSplitStorageInfo {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_split_storage_info';
  params: RpcSplitStorageInfoRequest;
}

export interface JsonRpcRequestForChanges {
  id: string;
  jsonrpc: string;
  method: 'changes';
  params: RpcStateChangesInBlockByTypeRequest;
}

export interface JsonRpcRequestForClientConfig {
  id: string;
  jsonrpc: string;
  method: 'client_config';
  params: RpcClientConfigRequest;
}

export interface JsonRpcRequestForGasPrice {
  id: string;
  jsonrpc: string;
  method: 'gas_price';
  params: RpcGasPriceRequest;
}

export interface JsonRpcRequestForHealth {
  id: string;
  jsonrpc: string;
  method: 'health';
  params: RpcHealthRequest;
}

export interface JsonRpcRequestForLightClientProof {
  id: string;
  jsonrpc: string;
  method: 'light_client_proof';
  params: RpcLightClientExecutionProofRequest;
}

export interface JsonRpcRequestForQuery {
  id: string;
  jsonrpc: string;
  method: 'query';
  params: RpcQueryRequest;
}

export interface JsonRpcResponseForArrayOfRangeOfUint64AndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForCryptoHashAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForNullableRpcHealthResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForRpcClientConfigResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForRpcCongestionLevelResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForRpcGasPriceResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForRpcLightClientExecutionProofResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForRpcQueryResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForRpcSplitStorageInfoResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface KnownProducerView {
  accountId?: AccountId;
  nextHops?: PublicKey[];
  peerId?: PublicKey;
}

export interface LimitConfig {
  accountIdValidityRulesVersion?: unknown;
  initialMemoryPages?: number;
  maxActionsPerReceipt?: number;
  maxArgumentsLength?: number;
  maxContractSize?: number;
  maxFunctionsNumberPerContract?: number;
  maxGasBurnt?: number;
  maxLengthMethodName?: number;
  maxLengthReturnedData?: number;
  maxLengthStorageKey?: number;
  maxLengthStorageValue?: number;
  maxLocalsPerContract?: number;
  maxMemoryPages?: number;
  maxNumberBytesMethodNames?: number;
  maxNumberInputDataDependencies?: number;
  maxNumberLogs?: number;
  maxNumberRegisters?: number;
  maxPromisesPerFunctionCallAction?: number;
  maxReceiptSize?: number;
  maxRegisterSize?: number;
  maxStackHeight?: number;
  maxTotalLogLength?: number;
  maxTotalPrepaidGas?: number;
  maxTransactionSize?: number;
  maxYieldPayloadSize?: number;
  perReceiptStorageProofSizeLimit?: number;
  registersMemoryLimit?: number;
  yieldTimeoutLengthInBlocks?: number;
}

export type LogSummaryStyle = 'plain' | 'colored';

export interface MerklePathItem {
  direction: Direction;
  hash: CryptoHash;
}

export type MethodResolveError = 'MethodEmptyName' | 'MethodNotFound' | 'MethodInvalidSignature';

export interface MissingTrieValue {
  context: MissingTrieValueContext;
  hash: CryptoHash;
}

export type MissingTrieValueContext = unknown;

export type MutableConfigValue = string;

export type PeerId = unknown;

export interface PeerInfoView {
  accountId?: unknown;
  addr: string;
  archival: boolean;
  blockHash?: unknown;
  connectionEstablishedTimeMillis?: number;
  height?: number;
  isHighestBlockInvalid?: boolean;
  isOutboundPeer?: boolean;
  lastTimePeerRequestedMillis?: number;
  lastTimeReceivedMessageMillis?: number;
  nonce: number;
  peerId?: PublicKey;
  receivedBytesPerSec?: number;
  sentBytesPerSec?: number;
  trackedShards?: ShardId[];
}

export type PrepareError = unknown;

export interface RangeOfUint64 {
  end: number;
  start: number;
}

export interface RpcClientConfigRequest {

}

export interface RpcClientConfigResponse {
  archive: boolean;
  blockFetchHorizon?: number;
  blockHeaderFetchHorizon?: number;
  blockProductionTrackingDelay?: number[];
  catchupStepPeriod?: number[];
  chainId?: string;
  chunkDistributionNetwork?: unknown;
  chunkRequestRetryPeriod?: number[];
  chunkWaitMult?: number[];
  clientBackgroundMigrationThreads?: number;
  doomslugStepPeriod?: number[];
  enableMultilineLogging?: boolean;
  enableStatisticsExport?: boolean;
  epochLength?: number;
  epochSync?: unknown;
  expectedShutdown?: unknown;
  gc: unknown;
  headerSyncExpectedHeightPerSecond?: number;
  headerSyncInitialTimeout?: number[];
  headerSyncProgressTimeout?: number[];
  headerSyncStallBanTimeout?: number[];
  logSummaryPeriod?: number[];
  logSummaryStyle?: unknown;
  maxBlockProductionDelay?: number[];
  maxBlockWaitDelay?: number[];
  maxGasBurntView?: number;
  minBlockProductionDelay?: number[];
  minNumPeers?: number;
  numBlockProducerSeats?: number;
  orphanStateWitnessMaxSize?: number;
  orphanStateWitnessPoolSize?: number;
  produceChunkAddTransactionsTimeLimit?: string;
  produceEmptyBlocks?: boolean;
  reshardingConfig?: MutableConfigValue;
  rpcAddr?: string;
  saveInvalidWitnesses?: boolean;
  saveLatestWitnesses?: boolean;
  saveTrieChanges?: boolean;
  saveTxOutcomes?: boolean;
  skipSyncWait?: boolean;
  stateSync?: unknown;
  stateSyncEnabled?: boolean;
  stateSyncExternalBackoff?: number[];
  stateSyncExternalTimeout?: number[];
  stateSyncP2pTimeout?: number[];
  stateSyncRetryBackoff?: number[];
  syncCheckPeriod?: number[];
  syncHeightThreshold?: number;
  syncMaxBlockRequests?: number;
  syncStepPeriod?: number[];
  trackedShardsConfig?: TrackedShardsConfig;
  transactionPoolSizeLimit?: number;
  transactionRequestHandlerThreads?: number;
  trieViewerStateSizeLimit?: number;
  ttlAccountIdRouter?: number[];
  txRoutingHeightHorizon?: number;
  version: unknown;
  viewClientThreads?: number;
  viewClientThrottlePeriod?: number[];
}

export interface RpcCongestionLevelRequest {

}

export interface RpcCongestionLevelResponse {
  congestionLevel?: number;
}

export interface RpcError {
  cause?: unknown;
  code: number;
  data?: unknown;
  message: string;
  name?: unknown;
}

export interface RpcGasPriceRequest {
  blockId?: unknown;
}

export interface RpcGasPriceResponse {
  gasPrice?: string;
}

export interface RpcHealthRequest {

}

export interface RpcHealthResponse {

}

export interface RpcKnownProducer {
  accountId?: AccountId;
  addr?: string;
  peerId?: PeerId;
}

export interface RpcLightClientExecutionProofRequest {
  lightClientHead?: CryptoHash;
}

export interface RpcLightClientExecutionProofResponse {
  blockHeaderLite?: LightClientBlockLiteView;
  blockProof?: MerklePathItem[];
  outcomeProof?: ExecutionOutcomeWithIdView;
  outcomeRootProof?: MerklePathItem[];
}

export interface RpcMaintenanceWindowsRequest {
  accountId?: AccountId;
}

export interface RpcPeerInfo {
  accountId?: unknown;
  addr?: string;
  id: PeerId;
}

export interface RpcQueryRequest {

}

export interface RpcQueryResponse {
  blockHash?: CryptoHash;
  blockHeight?: number;
}

export type RpcRequestValidationErrorKind = unknown;

export interface RpcSplitStorageInfoRequest {

}

export interface RpcSplitStorageInfoResponse {
  coldHeadHeight?: number;
  finalHeadHeight?: number;
  headHeight?: number;
  hotDbKind?: string;
}

export interface RuntimeConfigView {
  accountCreationConfig?: unknown;
  congestionControlConfig?: unknown;
  storageAmountPerByte?: string;
  transactionCosts?: unknown;
  wasmConfig?: unknown;
  witnessConfig?: unknown;
}

export interface RuntimeFeesConfigView {
  actionCreationConfig?: unknown;
  actionReceiptCreationConfig?: unknown;
  burntGasReward?: number[];
  dataReceiptCreationConfig?: unknown;
  pessimisticGasPriceInflationRatio?: number[];
  storageUsageConfig?: unknown;
}

export type ShardId = number;

export type ShardLayout = unknown;

export interface ShardLayoutV0 {
  numShards?: number;
  version: number;
}

export interface ShardLayoutV1 {
  boundaryAccounts?: AccountId[];
  shardsSplitMap?: ShardId[][];
  toParentShardMap?: ShardId[];
  version: number;
}

export interface ShardLayoutV2 {
  boundaryAccounts?: AccountId[];
  idToIndexMap?: Record<string, unknown>;
  indexToIdMap?: Record<string, unknown>;
  shardIds?: ShardId[];
  shardsParentMap?: Record<string, unknown>;
  shardsSplitMap?: Record<string, unknown>;
  version: number;
}

export interface ShardUId {
  shardId?: number;
  version: number;
}

export type Signature = string;

// Missing types that are referenced in other files
export interface SlashedValidator {
  accountId?: AccountId;
  publicKey?: PublicKey;
  stake?: string;
}

export interface ValidatorStakeView {
  accountId?: AccountId;
  publicKey?: PublicKey;
  stake?: string;
}

export interface ValidatorStakeViewV1 {
  accountId?: AccountId;
  publicKey?: PublicKey;
  stake: string;
}

export interface BlockStatusView {
  hash: CryptoHash;
  height: number;
}

export interface AccountInfo {
  accountId?: AccountId;
  amount: string;
  publicKey?: PublicKey;
}

export interface AccountDataView {
  accountKey?: PublicKey;
  peerId?: PublicKey;
  proxies: Tier1ProxyView[];
  timestamp: string;
}

export type GlobalContractDeployMode = unknown;

export type GlobalContractIdentifier = unknown;

// Additional missing types
export interface RpcStateChangesInBlockByTypeRequest {
  changes_type: string;
  block_id?: string | number;
  finality?: string;
  key_prefix_base64?: string;
  account_id?: string;
}

export interface LightClientBlockLiteView {
  height?: number;
  epochId?: CryptoHash;
  nextEpochId?: CryptoHash;
  prevBlockHash?: CryptoHash;
  timestamp?: number;
  timestampNanos?: string;
  blockMerkleRoot?: CryptoHash;
  outcomeRoot?: CryptoHash;
}

export interface ReceiptView {
  predecessorId?: AccountId;
  receiptId?: CryptoHash;
  receipt?: unknown;
}

export interface SignedTransactionView {
  signerId?: AccountId;
  publicKey?: PublicKey;
  nonce?: number;
  receiverId?: AccountId;
  actions?: unknown[];
  signature?: Signature;
  hash?: CryptoHash;
}

export interface MerklePathItem {
  direction: Direction;
  hash: CryptoHash;
}

export interface StateChangeKindView {
  type?: string;
  key?: string;
  value?: string;
}

export interface StateChangeWithCauseView {
  cause?: unknown;
  type?: string;
  key?: string;
  value?: string;
}

export interface SyncConcurrency {
  maxConcurrentRequests?: number;
}

export interface SyncConfig {
  concurrency?: SyncConcurrency;
}

// Generic JSON-RPC types for client compatibility
export interface JsonRpcRequest<T = any> {
  id: string;
  jsonrpc: string;
  method: string;
  params: T;
}

export interface JsonRpcResponse<T = any> {
  id: string;
  jsonrpc: string;
  result?: T;
  error?: any;
}

// Type aliases for client compatibility
export type RpcEXPERIMENTALLightClientProofRequest = RpcLightClientExecutionProofRequest;
export type RpcEXPERIMENTALLightClientProofResponse = RpcLightClientExecutionProofResponse;
export type RpcLightClientProofRequest = RpcLightClientExecutionProofRequest;
export type RpcLightClientProofResponse = RpcLightClientExecutionProofResponse;
// These types already exist with correct names
export type RpcChangesRequest = RpcStateChangesInBlockByTypeRequest;
export type RpcChangesResponse = RpcStateChangesInBlockByTypeResponse;
export type RpcEXPERIMENTALChangesRequest = RpcStateChangesInBlockByTypeRequest;
export type RpcEXPERIMENTALChangesResponse = RpcStateChangesInBlockByTypeResponse;
export type RpcEXPERIMENTALCongestionLevelRequest = RpcCongestionLevelRequest;
export type RpcEXPERIMENTALCongestionLevelResponse = RpcCongestionLevelResponse;
export type RpcEXPERIMENTALMaintenanceWindowsRequest = RpcMaintenanceWindowsRequest;
export type RpcEXPERIMENTALMaintenanceWindowsResponse = any; // TODO: define proper response type
export type RpcEXPERIMENTALSplitStorageInfoRequest = RpcSplitStorageInfoRequest;
export type RpcEXPERIMENTALSplitStorageInfoResponse = RpcSplitStorageInfoResponse;

export type StorageError = unknown;

export type StorageGetMode = 'FlatStorage' | 'Trie';

export interface StorageUsageConfigView {
  numBytesAccount?: number;
  numExtraBytesRecord?: number;
}

export type SyncCheckpoint = 'genesis' | 'earliest_available';

// Removed duplicate SyncConcurrency and SyncConfig definitions - using the ones defined above

export interface Tier1ProxyView {
  addr: string;
  peerId?: PublicKey;
}

export type TrackedShardsConfig = unknown;

export interface VMConfigView {
  discardCustomSections?: boolean;
  ethImplicitAccounts?: boolean;
  extCosts?: unknown;
  fixContractLoadingCost?: boolean;
  globalContractHostFns?: boolean;
  growMemCost?: number;
  implicitAccountCreation?: boolean;
  limitConfig?: unknown;
  reftypesBulkMemory?: boolean;
  regularOpCost?: number;
  saturatingFloatToInt?: boolean;
  storageGetMode?: unknown;
  vmKind?: unknown;
}

export type VMKind = unknown;

export interface Version {
  build: string;
  commit: string;
  rustcVersion?: string;
  version: string;
}

export type WasmTrap = unknown;

export interface WitnessConfigView {
  combinedTransactionsSizeLimit?: number;
  mainStorageProofSizeSoftLimit?: number;
  newTransactionsValidationStateSizeSoftLimit?: number;
}
