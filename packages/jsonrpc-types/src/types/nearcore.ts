/**
 * Generated TypeScript types for NEAR Protocol JSON-RPC API
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */

// Base types
export type AccountId = string;
export type PublicKey = string;
export type CryptoHash = string;
export type BlockHeight = number;
export type BlockHash = string;
export type ShardId = number;
export type Gas = string;
export type Balance = string;
export type Nonce = number;

// Base JSON-RPC types
export interface JsonRpcRequest<T = any> {
  jsonrpc: '2.0';
  method: string;
  params: T;
  id: string;
}

export interface JsonRpcResponse<T = any> {
  jsonrpc: '2.0';
  result?: T;
  error?: JsonRpcError;
  id: string;
}

export interface JsonRpcError {
  code: number;
  message: string;
  data?: any;
}

// Generated types from nearcore OpenAPI spec
export interface AccessKey {
  nonce?: number;
  permission?: any;
}

export interface AccessKeyCreationConfigView {
  fullAccessCost?: any;
  functionCallCost?: any;
  functionCallCostPerByte?: any;
}

export interface AccessKeyInfoView {
  accessKey?: AccessKeyView;
  publicKey?: PublicKey;
}

export interface AccessKeyList {
  keys?: AccessKeyInfoView[];
}

export type AccessKeyPermission = Record<string, any> | string;

export type AccessKeyPermissionView = string | Record<string, any>;

export interface AccessKeyView {
  nonce?: number;
  permission?: AccessKeyPermissionView;
}

export interface AccountCreationConfigView {
  minAllowedTopLevelAccountLength?: number;
  registrarAccountId?: any;
}

export interface AccountDataView {
  accountKey?: PublicKey;
  peerId?: PublicKey;
  proxies?: Tier1ProxyView[];
  timestamp?: string;
}

export type AccountId = any;

export type AccountIdValidityRulesVersion = any;

export interface AccountInfo {
  accountId?: AccountId;
  amount?: string;
  publicKey?: PublicKey;
}

export interface AccountView {
  amount?: string;
  codeHash?: CryptoHash;
  globalContractAccountId?: any;
  globalContractHash?: any;
  locked?: string;
  storagePaidAt?: number;
  storageUsage?: number;
}

export interface AccountWithPublicKey {
  accountId?: AccountId;
  publicKey?: PublicKey;
}

export type Action = Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any>;

export interface ActionCreationConfigView {
  addKeyCost?: any;
  createAccountCost?: any;
  delegateCost?: any;
  deleteAccountCost?: any;
  deleteKeyCost?: any;
  deployContractCost?: any;
  deployContractCostPerByte?: any;
  functionCallCost?: any;
  functionCallCostPerByte?: any;
  stakeCost?: any;
  transferCost?: any;
}

export interface ActionError {
  index?: number;
  kind?: any;
}

export type ActionErrorKind = Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | string | Record<string, any> | string | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any>;

export type ActionView = string | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any>;

export type ActionsValidationError = string | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | string | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | string | string | Record<string, any>;

export interface AddKeyAction {
  accessKey?: any;
  publicKey?: any;
}

export interface BandwidthRequest {
  requestedValuesBitmap?: any;
  toShard?: number;
}

export interface BandwidthRequestBitmap {
  data?: number[];
}

export type BandwidthRequests = Record<string, any>;

export interface BandwidthRequestsV1 {
  requests?: BandwidthRequest[];
}

export interface BlockHeaderInnerLiteView {
  blockMerkleRoot?: CryptoHash;
  epochId?: CryptoHash;
  height?: number;
  nextBpHash?: CryptoHash;
  nextEpochId?: CryptoHash;
  outcomeRoot?: CryptoHash;
  prevStateRoot?: CryptoHash;
  timestamp?: number;
  timestampNanosec?: string;
}

export interface BlockHeaderView {
  approvals?: any[];
  blockBodyHash?: any;
  blockMerkleRoot?: CryptoHash;
  blockOrdinal?: number;
  challengesResult?: SlashedValidator[];
  challengesRoot?: CryptoHash;
  chunkEndorsements?: number[][];
  chunkHeadersRoot?: CryptoHash;
  chunkMask?: boolean[];
  chunkReceiptsRoot?: CryptoHash;
  chunkTxRoot?: CryptoHash;
  chunksIncluded?: number;
  epochId?: CryptoHash;
  epochSyncDataHash?: any;
  gasPrice?: string;
  hash?: CryptoHash;
  height?: number;
  lastDsFinalBlock?: CryptoHash;
  lastFinalBlock?: CryptoHash;
  latestProtocolVersion?: number;
  nextBpHash?: CryptoHash;
  nextEpochId?: CryptoHash;
  outcomeRoot?: CryptoHash;
  prevHash?: CryptoHash;
  prevHeight?: number;
  prevStateRoot?: CryptoHash;
  randomValue?: CryptoHash;
  rentPaid?: string;
  signature?: Signature;
  timestamp?: number;
  timestampNanosec?: string;
  totalSupply?: string;
  validatorProposals?: ValidatorStakeView[];
  validatorReward?: string;
}

export type BlockId = number | CryptoHash;

export interface BlockStatusView {
  hash?: CryptoHash;
  height?: number;
}

export interface CallResult {
  logs?: string[];
  result?: number[];
}

export interface CatchupStatusView {
  blocksToCatchup?: BlockStatusView[];
  shardSyncStatus?: Record<string, any>;
  syncBlockHash?: CryptoHash;
  syncBlockHeight?: number;
}

export interface ChunkDistributionNetworkConfig {
  enabled?: boolean;
  uris?: ChunkDistributionUris;
}

export interface ChunkDistributionUris {
  get?: string;
  set?: string;
}

export interface ChunkHeaderView {
  balanceBurnt?: string;
  bandwidthRequests?: any;
  chunkHash?: CryptoHash;
  congestionInfo?: any;
  encodedLength?: number;
  encodedMerkleRoot?: CryptoHash;
  gasLimit?: number;
  gasUsed?: number;
  heightCreated?: number;
  heightIncluded?: number;
  outcomeRoot?: CryptoHash;
  outgoingReceiptsRoot?: CryptoHash;
  prevBlockHash?: CryptoHash;
  prevStateRoot?: CryptoHash;
  rentPaid?: string;
  shardId?: ShardId;
  signature?: Signature;
  txRoot?: CryptoHash;
  validatorProposals?: ValidatorStakeView[];
  validatorReward?: string;
}

export type CompilationError = Record<string, any> | Record<string, any> | Record<string, any>;

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

export interface ContractCodeView {
  codeBase64?: string;
  hash?: CryptoHash;
}

export interface CostGasUsed {
  cost?: string;
  costCategory?: string;
  gasUsed?: string;
}

export type CreateAccountAction = any;

export type CryptoHash = any;

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
  shards?: ShardId[];
  shardsEndorsed?: ShardId[];
  stake?: string;
}

export interface DataReceiptCreationConfigView {
  baseCost?: any;
  costPerByte?: any;
}

export interface DataReceiverView {
  dataId?: CryptoHash;
  receiverId?: AccountId;
}

export interface DelegateAction {
  actions?: NonDelegateAction[];
  maxBlockHeight?: number;
  nonce?: number;
  publicKey?: any;
  receiverId?: any;
  senderId?: any;
}

export interface DeleteAccountAction {
  beneficiaryId?: AccountId;
}

export interface DeleteKeyAction {
  publicKey?: any;
}

export interface DeployContractAction {
  code?: string;
}

export interface DeployGlobalContractAction {
  code?: string;
  deployMode?: GlobalContractDeployMode;
}

export interface DetailedDebugStatus {
  blockProductionDelayMillis?: number;
  catchupStatus?: CatchupStatusView[];
  currentHeadStatus?: BlockStatusView;
  currentHeaderHeadStatus?: BlockStatusView;
  networkInfo?: NetworkInfoView;
  syncStatus?: string;
}

export type Direction = 'Left' | 'Right';

export interface DumpConfig {
  credentialsFile?: string;
  iterationDelay?: any;
  location?: any;
  restartDumpForShards?: ShardId[];
}

export interface DurationAsStdSchemaProvider {
  nanos?: number;
  secs?: number;
}

export type EpochId = any;

export interface EpochSyncConfig {
  disableEpochSyncForBootstrapping?: boolean;
  epochSyncHorizon?: number;
  ignoreEpochSyncNetworkRequests?: boolean;
  timeoutForEpochSync?: any;
}

export interface ExecutionMetadataView {
  gasProfile?: CostGasUsed[];
  version?: number;
}

export interface ExecutionOutcomeView {
  executorId?: any;
  gasBurnt?: number;
  logs?: string[];
  metadata?: any;
  receiptIds?: CryptoHash[];
  status?: any;
  tokensBurnt?: string;
}

export interface ExecutionOutcomeWithIdView {
  blockHash?: CryptoHash;
  id?: CryptoHash;
  outcome?: ExecutionOutcomeView;
  proof?: MerklePathItem[];
}

export type ExecutionStatusView = string | Record<string, any> | Record<string, any> | Record<string, any>;

export interface ExtCostsConfigView {
  altBn128G1MultiexpBase?: number;
  altBn128G1MultiexpElement?: number;
  altBn128G1SumBase?: number;
  altBn128G1SumElement?: number;
  altBn128PairingCheckBase?: number;
  altBn128PairingCheckElement?: number;
  base?: number;
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
  location?: any;
  numConcurrentRequests?: number;
  numConcurrentRequestsDuringCatchup?: number;
}

export type ExternalStorageLocation = Record<string, any> | Record<string, any> | Record<string, any>;

export interface Fee {
  execution?: number;
  sendNotSir?: number;
  sendSir?: number;
}

export interface FinalExecutionOutcomeView {
  receiptsOutcome?: ExecutionOutcomeWithIdView[];
  status?: any;
  transaction?: any;
  transactionOutcome?: any;
}

export interface FinalExecutionOutcomeWithReceiptView {
  receipts?: ReceiptView[];
  receiptsOutcome?: ExecutionOutcomeWithIdView[];
  status?: any;
  transaction?: any;
  transactionOutcome?: any;
}

export type FinalExecutionStatus = string | string | Record<string, any> | Record<string, any>;

export type Finality = 'optimistic' | 'near-final' | 'final';

export interface FunctionCallAction {
  args?: string;
  deposit?: string;
  gas?: number;
  methodName?: string;
}

export type FunctionCallError = string | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any>;

export interface FunctionCallPermission {
  allowance?: string;
  methodNames?: string[];
  receiverId?: string;
}

export interface GCConfig {
  gcBlocksLimit?: number;
  gcForkCleanStep?: number;
  gcNumEpochsToKeep?: number;
  gcStepPeriod?: any;
}

export interface GasKeyView {
  balance?: number;
  numNonces?: number;
  permission?: AccessKeyPermissionView;
}

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
  protocolTreasuryAccount?: any;
  protocolUpgradeStakeThreshold?: number[];
  protocolVersion?: number;
  shardLayout?: any;
  shuffleShardAssignmentForChunkProducers?: boolean;
  targetValidatorMandatesPerShard?: number;
  totalSupply?: string;
  transactionValidityPeriod?: number;
  useProductionConfig?: boolean;
  validators?: AccountInfo[];
}

export type GenesisConfigRequest = any;

export type GlobalContractDeployMode = string | string;

export type GlobalContractIdentifier = Record<string, any> | Record<string, any>;

export type HostError = string | string | string | string | string | string | Record<string, any> | string | Record<string, any> | string | string | Record<string, any> | Record<string, any> | Record<string, any> | string | Record<string, any> | Record<string, any> | string | string | string | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any>;

export type InvalidAccessKeyError = Record<string, any> | Record<string, any> | Record<string, any> | string | Record<string, any> | string;

export type InvalidTxError = Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | string | Record<string, any> | Record<string, any> | string | string | string | Record<string, any> | Record<string, any> | string | Record<string, any> | Record<string, any> | Record<string, any>;

export interface JsonRpcRequest_for_EXPERIMENTAL_changes {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcStateChangesInBlockByTypeRequest;
}

export interface JsonRpcRequest_for_EXPERIMENTAL_changes_in_block {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcStateChangesInBlockRequest;
}

export interface JsonRpcRequest_for_EXPERIMENTAL_congestion_level {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcCongestionLevelRequest;
}

export interface JsonRpcRequest_for_EXPERIMENTAL_genesis_config {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: GenesisConfigRequest;
}

export interface JsonRpcRequest_for_EXPERIMENTAL_light_client_block_proof {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcLightClientBlockProofRequest;
}

export interface JsonRpcRequest_for_EXPERIMENTAL_light_client_proof {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcLightClientExecutionProofRequest;
}

export interface JsonRpcRequest_for_EXPERIMENTAL_maintenance_windows {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcMaintenanceWindowsRequest;
}

export interface JsonRpcRequest_for_EXPERIMENTAL_protocol_config {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcProtocolConfigRequest;
}

export interface JsonRpcRequest_for_EXPERIMENTAL_receipt {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcReceiptRequest;
}

export interface JsonRpcRequest_for_EXPERIMENTAL_split_storage_info {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcSplitStorageInfoRequest;
}

export interface JsonRpcRequest_for_EXPERIMENTAL_tx_status {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcTransactionStatusRequest;
}

export interface JsonRpcRequest_for_EXPERIMENTAL_validators_ordered {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcValidatorsOrderedRequest;
}

export interface JsonRpcRequest_for_block {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcBlockRequest;
}

export interface JsonRpcRequest_for_broadcast_tx_async {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcSendTransactionRequest;
}

export interface JsonRpcRequest_for_broadcast_tx_commit {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcSendTransactionRequest;
}

export interface JsonRpcRequest_for_changes {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcStateChangesInBlockByTypeRequest;
}

export interface JsonRpcRequest_for_chunk {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcChunkRequest;
}

export interface JsonRpcRequest_for_client_config {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcClientConfigRequest;
}

export interface JsonRpcRequest_for_gas_price {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcGasPriceRequest;
}

export interface JsonRpcRequest_for_health {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcHealthRequest;
}

export interface JsonRpcRequest_for_light_client_proof {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcLightClientExecutionProofRequest;
}

export interface JsonRpcRequest_for_network_info {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcNetworkInfoRequest;
}

export interface JsonRpcRequest_for_next_light_client_block {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcLightClientNextBlockRequest;
}

export interface JsonRpcRequest_for_query {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcQueryRequest;
}

export interface JsonRpcRequest_for_send_tx {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcSendTransactionRequest;
}

export interface JsonRpcRequest_for_status {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcStatusRequest;
}

export interface JsonRpcRequest_for_tx {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcTransactionStatusRequest;
}

export interface JsonRpcRequest_for_validators {
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: RpcValidatorRequest;
}

export interface JsonRpcResponse_for_Array_of_Range_of_uint64_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_Array_of_ValidatorStakeView_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_CryptoHash_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_GenesisConfig_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_Nullable_RpcHealthResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcBlockResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcChunkResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcClientConfigResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcCongestionLevelResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcGasPriceResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcLightClientBlockProofResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcLightClientExecutionProofResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcLightClientNextBlockResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcNetworkInfoResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcProtocolConfigResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcQueryResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcReceiptResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcSplitStorageInfoResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcStateChangesInBlockByTypeResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcStateChangesInBlockResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcStatusResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcTransactionResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface JsonRpcResponse_for_RpcValidatorResponse_and_RpcError {
  id?: string;
  jsonrpc?: string;
}

export interface KnownProducerView {
  accountId?: AccountId;
  nextHops?: PublicKey[];
  peerId?: PublicKey;
}

export interface LightClientBlockLiteView {
  innerLite?: BlockHeaderInnerLiteView;
  innerRestHash?: CryptoHash;
  prevBlockHash?: CryptoHash;
}

export interface LimitConfig {
  accountIdValidityRulesVersion?: any;
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
  direction?: Direction;
  hash?: CryptoHash;
}

export type MethodResolveError = 'MethodEmptyName' | 'MethodNotFound' | 'MethodInvalidSignature';

export interface MissingTrieValue {
  context?: MissingTrieValueContext;
  hash?: CryptoHash;
}

export type MissingTrieValueContext = string | string | string | string;

export type MutableConfigValue = any;

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
  shards?: ShardId[];
  stake?: string;
}

export type NonDelegateAction = any;

export type PeerId = any;

export interface PeerInfoView {
  accountId?: any;
  addr?: string;
  archival?: boolean;
  blockHash?: any;
  connectionEstablishedTimeMillis?: number;
  height?: number;
  isHighestBlockInvalid?: boolean;
  isOutboundPeer?: boolean;
  lastTimePeerRequestedMillis?: number;
  lastTimeReceivedMessageMillis?: number;
  nonce?: number;
  peerId?: PublicKey;
  receivedBytesPerSec?: number;
  sentBytesPerSec?: number;
  trackedShards?: ShardId[];
}

export type PrepareError = string | string | string | string | string | string | string | string | string;

export type PublicKey = any;

export interface Range_of_uint64 {
  end?: number;
  start?: number;
}

export type ReceiptEnumView = Record<string, any> | Record<string, any> | Record<string, any>;

export type ReceiptValidationError = Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any>;

export interface ReceiptView {
  predecessorId?: AccountId;
  priority?: number;
  receipt?: ReceiptEnumView;
  receiptId?: CryptoHash;
  receiverId?: AccountId;
}

export type RpcBlockRequest = Record<string, any> | Record<string, any> | Record<string, any>;

export interface RpcBlockResponse {
  author?: AccountId;
  chunks?: ChunkHeaderView[];
  header?: BlockHeaderView;
}

export type RpcChunkRequest = Record<string, any> | Record<string, any>;

export interface RpcChunkResponse {
  author?: AccountId;
  header?: ChunkHeaderView;
  receipts?: ReceiptView[];
  transactions?: SignedTransactionView[];
}

export type RpcClientConfigRequest = any;

export interface RpcClientConfigResponse {
  archive?: boolean;
  blockFetchHorizon?: number;
  blockHeaderFetchHorizon?: number;
  blockProductionTrackingDelay?: number[];
  catchupStepPeriod?: number[];
  chainId?: string;
  chunkDistributionNetwork?: any;
  chunkRequestRetryPeriod?: number[];
  chunkWaitMult?: number[];
  clientBackgroundMigrationThreads?: number;
  doomslugStepPeriod?: number[];
  enableMultilineLogging?: boolean;
  enableStatisticsExport?: boolean;
  epochLength?: number;
  epochSync?: any;
  expectedShutdown?: any;
  gc?: any;
  headerSyncExpectedHeightPerSecond?: number;
  headerSyncInitialTimeout?: number[];
  headerSyncProgressTimeout?: number[];
  headerSyncStallBanTimeout?: number[];
  logSummaryPeriod?: number[];
  logSummaryStyle?: any;
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
  stateSync?: any;
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
  version?: any;
  viewClientThreads?: number;
  viewClientThrottlePeriod?: number[];
}

export type RpcCongestionLevelRequest = Record<string, any> | Record<string, any>;

export interface RpcCongestionLevelResponse {
  congestionLevel?: number;
}

export interface RpcError {
  cause?: any;
  code?: number;
  data?: any;
  message?: string;
  name?: any;
}

export interface RpcGasPriceRequest {
  blockId?: any;
}

export interface RpcGasPriceResponse {
  gasPrice?: string;
}

export type RpcHealthRequest = any;

export type RpcHealthResponse = any;

export interface RpcKnownProducer {
  accountId?: AccountId;
  addr?: string;
  peerId?: PeerId;
}

export interface RpcLightClientBlockProofRequest {
  blockHash?: CryptoHash;
  lightClientHead?: CryptoHash;
}

export interface RpcLightClientBlockProofResponse {
  blockHeaderLite?: LightClientBlockLiteView;
  blockProof?: MerklePathItem[];
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

export interface RpcLightClientNextBlockRequest {
  lastBlockHash?: CryptoHash;
}

export interface RpcLightClientNextBlockResponse {
  approvalsAfterNext?: any[];
  innerLite?: BlockHeaderInnerLiteView;
  innerRestHash?: CryptoHash;
  nextBlockInnerHash?: CryptoHash;
  nextBps?: ValidatorStakeView[];
  prevBlockHash?: CryptoHash;
}

export interface RpcMaintenanceWindowsRequest {
  accountId?: AccountId;
}

export type RpcNetworkInfoRequest = any;

export interface RpcNetworkInfoResponse {
  activePeers?: RpcPeerInfo[];
  knownProducers?: RpcKnownProducer[];
  numActivePeers?: number;
  peerMaxCount?: number;
  receivedBytesPerSec?: number;
  sentBytesPerSec?: number;
}

export interface RpcPeerInfo {
  accountId?: any;
  addr?: string;
  id?: PeerId;
}

export type RpcProtocolConfigRequest = Record<string, any> | Record<string, any> | Record<string, any>;

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
  protocolTreasuryAccount?: any;
  protocolUpgradeStakeThreshold?: number[];
  protocolVersion?: number;
  runtimeConfig?: any;
  shardLayout?: any;
  shuffleShardAssignmentForChunkProducers?: boolean;
  targetValidatorMandatesPerShard?: number;
  transactionValidityPeriod?: number;
}

export type RpcQueryRequest = any;

export interface RpcQueryResponse {
  blockHash?: CryptoHash;
  blockHeight?: number;
}

export interface RpcReceiptRequest {
  receiptId?: CryptoHash;
}

export interface RpcReceiptResponse {
  predecessorId?: AccountId;
  priority?: number;
  receipt?: ReceiptEnumView;
  receiptId?: CryptoHash;
  receiverId?: AccountId;
}

export type RpcRequestValidationErrorKind = Record<string, any> | Record<string, any>;

export interface RpcSendTransactionRequest {
  signedTxBase64?: SignedTransaction;
  waitUntil?: any;
}

export type RpcSplitStorageInfoRequest = any;

export interface RpcSplitStorageInfoResponse {
  coldHeadHeight?: number;
  finalHeadHeight?: number;
  headHeight?: number;
  hotDbKind?: string;
}

export type RpcStateChangesInBlockByTypeRequest = any;

export interface RpcStateChangesInBlockByTypeResponse {
  blockHash?: CryptoHash;
  changes?: StateChangeKindView[];
}

export type RpcStateChangesInBlockRequest = Record<string, any> | Record<string, any> | Record<string, any>;

export interface RpcStateChangesInBlockResponse {
  blockHash?: CryptoHash;
  changes?: StateChangeWithCauseView[];
}

export type RpcStatusRequest = any;

export interface RpcStatusResponse {
  chainId?: string;
  detailedDebugStatus?: any;
  genesisHash?: any;
  latestProtocolVersion?: number;
  nodeKey?: any;
  nodePublicKey?: any;
  protocolVersion?: number;
  rpcAddr?: string;
  syncInfo?: any;
  uptimeSec?: number;
  validatorAccountId?: any;
  validatorPublicKey?: any;
  validators?: ValidatorInfo[];
  version?: any;
}

export interface RpcTransactionResponse {
  finalExecutionStatus?: TxExecutionStatus;
}

export interface RpcTransactionStatusRequest {
  waitUntil?: any;
}

export type RpcValidatorRequest = string | Record<string, any> | Record<string, any>;

export interface RpcValidatorResponse {
  currentFishermen?: ValidatorStakeView[];
  currentProposals?: ValidatorStakeView[];
  currentValidators?: CurrentEpochValidatorInfo[];
  epochHeight?: number;
  epochStartHeight?: number;
  nextFishermen?: ValidatorStakeView[];
  nextValidators?: NextEpochValidatorInfo[];
  prevEpochKickout?: ValidatorKickoutView[];
}

export interface RpcValidatorsOrderedRequest {
  blockId?: any;
}

export interface RuntimeConfigView {
  accountCreationConfig?: any;
  congestionControlConfig?: any;
  storageAmountPerByte?: string;
  transactionCosts?: any;
  wasmConfig?: any;
  witnessConfig?: any;
}

export interface RuntimeFeesConfigView {
  actionCreationConfig?: any;
  actionReceiptCreationConfig?: any;
  burntGasReward?: number[];
  dataReceiptCreationConfig?: any;
  pessimisticGasPriceInflationRatio?: number[];
  storageUsageConfig?: any;
}

export type ShardId = any;

export type ShardLayout = Record<string, any> | Record<string, any> | Record<string, any>;

export interface ShardLayoutV0 {
  numShards?: number;
  version?: number;
}

export interface ShardLayoutV1 {
  boundaryAccounts?: AccountId[];
  shardsSplitMap?: ShardId[][];
  toParentShardMap?: ShardId[];
  version?: number;
}

export interface ShardLayoutV2 {
  boundaryAccounts?: AccountId[];
  idToIndexMap?: Record<string, any>;
  indexToIdMap?: Record<string, any>;
  shardIds?: ShardId[];
  shardsParentMap?: Record<string, any>;
  shardsSplitMap?: Record<string, any>;
  version?: number;
}

export interface ShardUId {
  shardId?: number;
  version?: number;
}

export type Signature = any;

export interface SignedDelegateAction {
  delegateAction?: DelegateAction;
  signature?: Signature;
}

export type SignedTransaction = any;

export interface SignedTransactionView {
  actions?: ActionView[];
  hash?: CryptoHash;
  nonce?: number;
  priorityFee?: number;
  publicKey?: PublicKey;
  receiverId?: AccountId;
  signature?: Signature;
  signerId?: AccountId;
}

export interface SlashedValidator {
  accountId?: AccountId;
  isDoubleSign?: boolean;
}

export interface StakeAction {
  publicKey?: any;
  stake?: string;
}

export type StateChangeCauseView = Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any>;

export type StateChangeKindView = Record<string, any> | Record<string, any> | Record<string, any> | Record<string, any>;

export interface StateChangeWithCauseView {
  cause?: StateChangeCauseView;
}

export interface StateItem {
  key?: string;
  value?: string;
}

export interface StateSyncConfig {
  concurrency?: SyncConcurrency;
  dump?: any;
  sync?: SyncConfig;
}

export interface StatusSyncInfo {
  earliestBlockHash?: any;
  earliestBlockHeight?: number;
  earliestBlockTime?: string;
  epochId?: any;
  epochStartHeight?: number;
  latestBlockHash?: CryptoHash;
  latestBlockHeight?: number;
  latestBlockTime?: string;
  latestStateRoot?: CryptoHash;
  syncing?: boolean;
}

export type StorageError = string | Record<string, any> | string | Record<string, any> | Record<string, any> | Record<string, any>;

export type StorageGetMode = 'FlatStorage' | 'Trie';

export interface StorageUsageConfigView {
  numBytesAccount?: number;
  numExtraBytesRecord?: number;
}

export type SyncCheckpoint = 'genesis' | 'earliest_available';

export interface SyncConcurrency {
  apply?: number;
  applyDuringCatchup?: number;
  peerDownloads?: number;
  perShard?: number;
}

export type SyncConfig = string | Record<string, any>;

export interface Tier1ProxyView {
  addr?: string;
  peerId?: PublicKey;
}

export type TrackedShardsConfig = string | Record<string, any> | string | Record<string, any> | Record<string, any> | Record<string, any>;

export interface TransferAction {
  deposit?: string;
}

export type TxExecutionError = Record<string, any> | Record<string, any>;

export type TxExecutionStatus = string | string | string | string | string | string;

export interface UseGlobalContractAction {
  contractIdentifier?: GlobalContractIdentifier;
}

export interface VMConfigView {
  discardCustomSections?: boolean;
  ethImplicitAccounts?: boolean;
  extCosts?: any;
  fixContractLoadingCost?: boolean;
  globalContractHostFns?: boolean;
  growMemCost?: number;
  implicitAccountCreation?: boolean;
  limitConfig?: any;
  reftypesBulkMemory?: boolean;
  regularOpCost?: number;
  saturatingFloatToInt?: boolean;
  storageGetMode?: any;
  vmKind?: any;
}

export type VMKind = string | string | string | string | string;

export interface ValidatorInfo {
  accountId?: AccountId;
}

export type ValidatorKickoutReason = string | Record<string, any> | Record<string, any> | string | Record<string, any> | string | Record<string, any> | Record<string, any>;

export interface ValidatorKickoutView {
  accountId?: AccountId;
  reason?: ValidatorKickoutReason;
}

export type ValidatorStakeView = Record<string, any>;

export interface ValidatorStakeViewV1 {
  accountId?: AccountId;
  publicKey?: PublicKey;
  stake?: string;
}

export interface Version {
  build?: string;
  commit?: string;
  rustcVersion?: string;
  version?: string;
}

export interface ViewStateResult {
  proof?: string[];
  values?: StateItem[];
}

export type WasmTrap = string | string | string | string | string | string | string | string | string;

export interface WitnessConfigView {
  combinedTransactionsSizeLimit?: number;
  mainStorageProofSizeSoftLimit?: number;
  newTransactionsValidationStateSizeSoftLimit?: number;
}

