/**
 * Generated types for NEAR Protocol JSON-RPC
 */

// JSON-RPC base types
export interface JsonRpcRequest {
  jsonrpc: '2.0';
  method: string;
  params: unknown;
  id: string | number;
}

export interface JsonRpcResponse<T = unknown> {
  jsonrpc: '2.0';
  result?: T;
  error?: JsonRpcError;
  id: string | number;
}

export interface JsonRpcError {
  code: number;
  message: string;
  data?: unknown;
  [key: string]: unknown;
}



export interface BandwidthRequest {
  requestedvaluesbitmap?: unknown;
  toshard?: number;
}

export interface BandwidthRequestBitmap {
  data: number[];
}

export type BandwidthRequests = unknown;

export interface BandwidthRequestsV1 {
  requests: unknown[];
}

export interface CallResult {
  logs: string[];
  result: number[];
}

export type CompilationError = unknown;

export interface CongestionControlConfigView {
  allowedshardoutgoinggas?: number;
  maxcongestionincominggas?: number;
  maxcongestionmemoryconsumption?: number;
  maxcongestionmissedchunks?: number;
  maxcongestionoutgoinggas?: number;
  maxoutgoinggas?: number;
  maxtxgas?: number;
  minoutgoinggas?: number;
  mintxgas?: number;
  outgoingreceiptsbigsizelimit?: number;
  outgoingreceiptsusualsizelimit?: number;
  rejecttxcongestionthreshold?: number;
}

export interface CongestionInfoView {
  allowedshard?: number;
  bufferedreceiptsgas?: string;
  delayedreceiptsgas?: string;
  receiptbytes?: number;
}

export interface CostGasUsed {
  cost: string;
  costcategory?: string;
  gasused?: string;
}

export type CryptoHash = string;

export interface DataReceiverView {
  dataid?: unknown;
  receiverid?: unknown;
}

export type Direction = 'Left' | 'Right';

export interface DumpConfig {
  credentialsfile?: string;
  iterationdelay?: unknown;
  location: unknown;
  restartdumpforshards?: unknown[];
}

export interface DurationAsStdSchemaProvider {
  nanos: number;
  secs: number;
}

export type EpochId = unknown;

export interface EpochSyncConfig {
  disableepochsyncforbootstrapping?: boolean;
  epochsynchorizon?: number;
  ignoreepochsyncnetworkrequests?: boolean;
  timeoutforepochsync?: unknown;
}

export interface ExecutionMetadataView {
  gasprofile?: unknown[];
  version: number;
}

export interface ExecutionOutcomeView {
  executorid?: unknown;
  gasburnt?: number;
  logs: string[];
  metadata?: unknown;
  receiptids?: unknown[];
  status: unknown;
  tokensburnt?: string;
}

export interface ExecutionOutcomeWithIdView {
  blockhash?: unknown;
  id: unknown;
  outcome: unknown;
  proof: unknown[];
}

export interface ExtCostsConfigView {
  altbn128g1multiexpbase?: number;
  altbn128g1multiexpelement?: number;
  altbn128g1sumbase?: number;
  altbn128g1sumelement?: number;
  altbn128pairingcheckbase?: number;
  altbn128pairingcheckelement?: number;
  base: number;
  bls12381g1multiexpbase?: number;
  bls12381g1multiexpelement?: number;
  bls12381g2multiexpbase?: number;
  bls12381g2multiexpelement?: number;
  bls12381mapfp2tog2base?: number;
  bls12381mapfp2tog2element?: number;
  bls12381mapfptog1base?: number;
  bls12381mapfptog1element?: number;
  bls12381p1decompressbase?: number;
  bls12381p1decompresselement?: number;
  bls12381p1sumbase?: number;
  bls12381p1sumelement?: number;
  bls12381p2decompressbase?: number;
  bls12381p2decompresselement?: number;
  bls12381p2sumbase?: number;
  bls12381p2sumelement?: number;
  bls12381pairingbase?: number;
  bls12381pairingelement?: number;
  contractcompilebase?: number;
  contractcompilebytes?: number;
  contractloadingbase?: number;
  contractloadingbytes?: number;
  ecrecoverbase?: number;
  ed25519verifybase?: number;
  ed25519verifybyte?: number;
  keccak256base?: number;
  keccak256byte?: number;
  keccak512base?: number;
  keccak512byte?: number;
  logbase?: number;
  logbyte?: number;
  promiseandbase?: number;
  promiseandperpromise?: number;
  promisereturn?: number;
  readcachedtrienode?: number;
  readmemorybase?: number;
  readmemorybyte?: number;
  readregisterbase?: number;
  readregisterbyte?: number;
  ripemd160base?: number;
  ripemd160block?: number;
  sha256base?: number;
  sha256byte?: number;
  storagehaskeybase?: number;
  storagehaskeybyte?: number;
  storageitercreatefrombyte?: number;
  storageitercreateprefixbase?: number;
  storageitercreateprefixbyte?: number;
  storageitercreaterangebase?: number;
  storageitercreatetobyte?: number;
  storageiternextbase?: number;
  storageiternextkeybyte?: number;
  storageiternextvaluebyte?: number;
  storagelargereadoverheadbase?: number;
  storagelargereadoverheadbyte?: number;
  storagereadbase?: number;
  storagereadkeybyte?: number;
  storagereadvaluebyte?: number;
  storageremovebase?: number;
  storageremovekeybyte?: number;
  storageremoveretvaluebyte?: number;
  storagewritebase?: number;
  storagewriteevictedbyte?: number;
  storagewritekeybyte?: number;
  storagewritevaluebyte?: number;
  touchingtrienode?: number;
  utf16decodingbase?: number;
  utf16decodingbyte?: number;
  utf8decodingbase?: number;
  utf8decodingbyte?: number;
  validatorstakebase?: number;
  validatortotalstakebase?: number;
  writememorybase?: number;
  writememorybyte?: number;
  writeregisterbase?: number;
  writeregisterbyte?: number;
  yieldcreatebase?: number;
  yieldcreatebyte?: number;
  yieldresumebase?: number;
  yieldresumebyte?: number;
}

export interface ExternalStorageConfig {
  externalstoragefallbackthreshold?: number;
  location: unknown;
  numconcurrentrequests?: number;
  numconcurrentrequestsduringcatchup?: number;
}

export type ExternalStorageLocation = unknown;

export interface Fee {
  execution: number;
  sendnotsir?: number;
  sendsir?: number;
}

export interface FinalExecutionOutcomeView {
  receiptsoutcome?: unknown[];
  status: unknown;
  transaction: unknown;
  transactionoutcome?: unknown;
}

export type Finality = 'optimistic' | 'near-final' | 'final';

export type FunctionCallError = unknown;

export interface FunctionCallPermission {
  allowance?: string;
  methodnames?: string[];
  receiverid?: string;
}

export interface GCConfig {
  gcblockslimit?: number;
  gcforkcleanstep?: number;
  gcnumepochstokeep?: number;
  gcstepperiod?: unknown;
}

export type HostError = unknown;

export interface JsonRpcRequestforEXPERIMENTALchanges {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_changes';
  params: unknown;
}

export interface JsonRpcRequestforEXPERIMENTALcongestionlevel {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_congestion_level';
  params: unknown;
}

export interface JsonRpcRequestforEXPERIMENTALlightclientproof {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_light_client_proof';
  params: unknown;
}

export interface JsonRpcRequestforEXPERIMENTALmaintenancewindows {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_maintenance_windows';
  params: unknown;
}

export interface JsonRpcRequestforEXPERIMENTALsplitstorageinfo {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_split_storage_info';
  params: unknown;
}

export interface JsonRpcRequestforchanges {
  id: string;
  jsonrpc: string;
  method: 'changes';
  params: unknown;
}

export interface JsonRpcRequestforclientconfig {
  id: string;
  jsonrpc: string;
  method: 'client_config';
  params: unknown;
}

export interface JsonRpcRequestforgasprice {
  id: string;
  jsonrpc: string;
  method: 'gas_price';
  params: unknown;
}

export interface JsonRpcRequestforhealth {
  id: string;
  jsonrpc: string;
  method: 'health';
  params: unknown;
}

export interface JsonRpcRequestforlightclientproof {
  id: string;
  jsonrpc: string;
  method: 'light_client_proof';
  params: unknown;
}

export interface JsonRpcRequestforquery {
  id: string;
  jsonrpc: string;
  method: 'query';
  params: unknown;
}

export interface JsonRpcResponseforArrayofRangeofuint64andRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforCryptoHashandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforNullableRpcHealthResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforRpcClientConfigResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforRpcCongestionLevelResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforRpcGasPriceResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforRpcLightClientExecutionProofResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforRpcQueryResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforRpcSplitStorageInfoResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface KnownProducerView {
  accountid?: unknown;
  nexthops?: unknown[];
  peerid?: unknown;
}

export interface LimitConfig {
  accountidvalidityrulesversion?: unknown;
  initialmemorypages?: number;
  maxactionsperreceipt?: number;
  maxargumentslength?: number;
  maxcontractsize?: number;
  maxfunctionsnumberpercontract?: number;
  maxgasburnt?: number;
  maxlengthmethodname?: number;
  maxlengthreturneddata?: number;
  maxlengthstoragekey?: number;
  maxlengthstoragevalue?: number;
  maxlocalspercontract?: number;
  maxmemorypages?: number;
  maxnumberbytesmethodnames?: number;
  maxnumberinputdatadependencies?: number;
  maxnumberlogs?: number;
  maxnumberregisters?: number;
  maxpromisesperfunctioncallaction?: number;
  maxreceiptsize?: number;
  maxregistersize?: number;
  maxstackheight?: number;
  maxtotalloglength?: number;
  maxtotalprepaidgas?: number;
  maxtransactionsize?: number;
  maxyieldpayloadsize?: number;
  perreceiptstorageproofsizelimit?: number;
  registersmemorylimit?: number;
  yieldtimeoutlengthinblocks?: number;
}

export type LogSummaryStyle = 'plain' | 'colored';

export interface MerklePathItem {
  direction: unknown;
  hash: unknown;
}

export type MethodResolveError = 'MethodEmptyName' | 'MethodNotFound' | 'MethodInvalidSignature';

export interface MissingTrieValue {
  context: unknown;
  hash: unknown;
}

export type MissingTrieValueContext = unknown;

export type MutableConfigValue = string;

export type PeerId = unknown;

export interface PeerInfoView {
  accountid?: unknown;
  addr: string;
  archival: boolean;
  blockhash?: unknown;
  connectionestablishedtimemillis?: number;
  height?: number;
  ishighestblockinvalid?: boolean;
  isoutboundpeer?: boolean;
  lasttimepeerrequestedmillis?: number;
  lasttimereceivedmessagemillis?: number;
  nonce: number;
  peerid?: unknown;
  receivedbytespersec?: number;
  sentbytespersec?: number;
  trackedshards?: unknown[];
}

export type PrepareError = unknown;

export interface Rangeofuint64 {
  end: number;
  start: number;
}

export interface RpcClientConfigRequest {

}

export interface RpcClientConfigResponse {
  archive: boolean;
  blockfetchhorizon?: number;
  blockheaderfetchhorizon?: number;
  blockproductiontrackingdelay?: number[];
  catchupstepperiod?: number[];
  chainid?: string;
  chunkdistributionnetwork?: unknown;
  chunkrequestretryperiod?: number[];
  chunkwaitmult?: number[];
  clientbackgroundmigrationthreads?: number;
  doomslugstepperiod?: number[];
  enablemultilinelogging?: boolean;
  enablestatisticsexport?: boolean;
  epochlength?: number;
  epochsync?: unknown;
  expectedshutdown?: unknown;
  gc: unknown;
  headersyncexpectedheightpersecond?: number;
  headersyncinitialtimeout?: number[];
  headersyncprogresstimeout?: number[];
  headersyncstallbantimeout?: number[];
  logsummaryperiod?: number[];
  logsummarystyle?: unknown;
  maxblockproductiondelay?: number[];
  maxblockwaitdelay?: number[];
  maxgasburntview?: number;
  minblockproductiondelay?: number[];
  minnumpeers?: number;
  numblockproducerseats?: number;
  orphanstatewitnessmaxsize?: number;
  orphanstatewitnesspoolsize?: number;
  producechunkaddtransactionstimelimit?: string;
  produceemptyblocks?: boolean;
  reshardingconfig?: unknown;
  rpcaddr?: string;
  saveinvalidwitnesses?: boolean;
  savelatestwitnesses?: boolean;
  savetriechanges?: boolean;
  savetxoutcomes?: boolean;
  skipsyncwait?: boolean;
  statesync?: unknown;
  statesyncenabled?: boolean;
  statesyncexternalbackoff?: number[];
  statesyncexternaltimeout?: number[];
  statesyncp2ptimeout?: number[];
  statesyncretrybackoff?: number[];
  synccheckperiod?: number[];
  syncheightthreshold?: number;
  syncmaxblockrequests?: number;
  syncstepperiod?: number[];
  trackedshardsconfig?: unknown;
  transactionpoolsizelimit?: number;
  transactionrequesthandlerthreads?: number;
  trieviewerstatesizelimit?: number;
  ttlaccountidrouter?: number[];
  txroutingheighthorizon?: number;
  version: unknown;
  viewclientthreads?: number;
  viewclientthrottleperiod?: number[];
}

export interface RpcCongestionLevelRequest {

}

export interface RpcCongestionLevelResponse {
  congestionlevel?: number;
}

export interface RpcError {
  cause?: unknown;
  code: number;
  data?: unknown;
  message: string;
  name?: unknown;
}

export interface RpcGasPriceRequest {
  blockid?: unknown;
}

export interface RpcGasPriceResponse {
  gasprice?: string;
}

export interface RpcHealthRequest {

}

export interface RpcHealthResponse {

}

export interface RpcKnownProducer {
  accountid?: unknown;
  addr?: string;
  peerid?: unknown;
}

export interface RpcLightClientExecutionProofRequest {
  lightclienthead?: unknown;
}

export interface RpcLightClientExecutionProofResponse {
  blockheaderlite?: unknown;
  blockproof?: unknown[];
  outcomeproof?: unknown;
  outcomerootproof?: unknown[];
}

export interface RpcMaintenanceWindowsRequest {
  accountid?: unknown;
}

export interface RpcPeerInfo {
  accountid?: unknown;
  addr?: string;
  id: unknown;
}

export interface RpcQueryRequest {

}

export interface RpcQueryResponse {
  blockhash?: unknown;
  blockheight?: number;
}

export type RpcRequestValidationErrorKind = unknown;

export interface RpcSplitStorageInfoRequest {

}

export interface RpcSplitStorageInfoResponse {
  coldheadheight?: number;
  finalheadheight?: number;
  headheight?: number;
  hotdbkind?: string;
}

export interface RuntimeConfigView {
  accountcreationconfig?: unknown;
  congestioncontrolconfig?: unknown;
  storageamountperbyte?: string;
  transactioncosts?: unknown;
  wasmconfig?: unknown;
  witnessconfig?: unknown;
}

export interface RuntimeFeesConfigView {
  actioncreationconfig?: unknown;
  actionreceiptcreationconfig?: unknown;
  burntgasreward?: number[];
  datareceiptcreationconfig?: unknown;
  pessimisticgaspriceinflationratio?: number[];
  storageusageconfig?: unknown;
}

export type ShardId = number;

export type ShardLayout = unknown;

export interface ShardLayoutV0 {
  numshards?: number;
  version: number;
}

export interface ShardLayoutV1 {
  boundaryaccounts?: unknown[];
  shardssplitmap?: unknown[][];
  toparentshardmap?: unknown[];
  version: number;
}

export interface ShardLayoutV2 {
  boundaryaccounts?: unknown[];
  idtoindexmap?: Record<string, unknown>;
  indextoidmap?: Record<string, unknown>;
  shardids?: unknown[];
  shardsparentmap?: Record<string, unknown>;
  shardssplitmap?: Record<string, unknown>;
  version: number;
}

export interface ShardUId {
  shardid?: number;
  version: number;
}

export type Signature = string;

export type StorageError = unknown;

export type StorageGetMode = 'FlatStorage' | 'Trie';

export interface StorageUsageConfigView {
  numbytesaccount?: number;
  numextrabytesrecord?: number;
}

export type SyncCheckpoint = 'genesis' | 'earliest_available';

export type SyncConfig = unknown;

export interface Tier1ProxyView {
  addr: string;
  peerid?: unknown;
}

export type TrackedShardsConfig = unknown;

export interface VMConfigView {
  discardcustomsections?: boolean;
  ethimplicitaccounts?: boolean;
  extcosts?: unknown;
  fixcontractloadingcost?: boolean;
  globalcontracthostfns?: boolean;
  growmemcost?: number;
  implicitaccountcreation?: boolean;
  limitconfig?: unknown;
  reftypesbulkmemory?: boolean;
  regularopcost?: number;
  saturatingfloattoint?: boolean;
  storagegetmode?: unknown;
  vmkind?: unknown;
}

export type VMKind = unknown;

export interface Version {
  build: string;
  commit: string;
  rustcversion?: string;
  version: string;
}

export type WasmTrap = unknown;

export interface WitnessConfigView {
  combinedtransactionssizelimit?: number;
  mainstorageproofsizesoftlimit?: number;
  newtransactionsvalidationstatesizesoftlimit?: number;
}
