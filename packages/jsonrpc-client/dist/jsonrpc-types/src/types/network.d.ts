/**
 * Generated types for NEAR Protocol JSON-RPC
 */
export interface CatchupStatusView {
    blockstocatchup?: unknown[];
    shardsyncstatus?: Record<string, unknown>;
    syncblockhash?: unknown;
    syncblockheight?: number;
}
export interface CurrentEpochValidatorInfo {
    accountid?: unknown;
    isslashed?: boolean;
    numexpectedblocks?: number;
    numexpectedchunks?: number;
    numexpectedchunkspershard?: number[];
    numexpectedendorsements?: number;
    numexpectedendorsementspershard?: number[];
    numproducedblocks?: number;
    numproducedchunks?: number;
    numproducedchunkspershard?: number[];
    numproducedendorsements?: number;
    numproducedendorsementspershard?: number[];
    publickey?: unknown;
    shards: unknown[];
    shardsendorsed?: unknown[];
    stake: string;
}
export interface DetailedDebugStatus {
    blockproductiondelaymillis?: number;
    catchupstatus?: unknown[];
    currentheadstatus?: unknown;
    currentheaderheadstatus?: unknown;
    networkinfo?: unknown;
    syncstatus?: string;
}
export type ExecutionStatusView = unknown;
export type FinalExecutionStatus = unknown;
export interface GenesisConfig {
    avghiddenvalidatorseatspershard?: number[];
    blockproducerkickoutthreshold?: number;
    chainid?: string;
    chunkproducerassignmentchangeslimit?: number;
    chunkproducerkickoutthreshold?: number;
    chunkvalidatoronlykickoutthreshold?: number;
    dynamicresharding?: boolean;
    epochlength?: number;
    fishermenthreshold?: string;
    gaslimit?: number;
    gaspriceadjustmentrate?: number[];
    genesisheight?: number;
    genesistime?: string;
    maxgasprice?: string;
    maxinflationrate?: number[];
    maxkickoutstakeperc?: number;
    mingasprice?: string;
    minimumstakedivisor?: number;
    minimumstakeratio?: number[];
    minimumvalidatorspershard?: number;
    numblockproducerseats?: number;
    numblockproducerseatspershard?: number[];
    numblocksperyear?: number;
    numchunkonlyproducerseats?: number;
    numchunkproducerseats?: number;
    numchunkvalidatorseats?: number;
    onlinemaxthreshold?: number[];
    onlineminthreshold?: number[];
    protocolrewardrate?: number[];
    protocoltreasuryaccount?: unknown;
    protocolupgradestakethreshold?: number[];
    protocolversion?: number;
    shardlayout?: unknown;
    shuffleshardassignmentforchunkproducers?: boolean;
    targetvalidatormandatespershard?: number;
    totalsupply?: string;
    transactionvalidityperiod?: number;
    useproductionconfig?: boolean;
    validators: unknown[];
}
export interface GenesisConfigRequest {
}
export interface JsonRpcRequestforEXPERIMENTALgenesisconfig {
    id: string;
    jsonrpc: string;
    method: 'EXPERIMENTAL_genesis_config';
    params: unknown;
}
export interface JsonRpcRequestforEXPERIMENTALprotocolconfig {
    id: string;
    jsonrpc: string;
    method: 'EXPERIMENTAL_protocol_config';
    params: unknown;
}
export interface JsonRpcRequestforEXPERIMENTALvalidatorsordered {
    id: string;
    jsonrpc: string;
    method: 'EXPERIMENTAL_validators_ordered';
    params: unknown;
}
export interface JsonRpcRequestfornetworkinfo {
    id: string;
    jsonrpc: string;
    method: 'network_info';
    params: unknown;
}
export interface JsonRpcRequestforstatus {
    id: string;
    jsonrpc: string;
    method: 'status';
    params: unknown;
}
export interface JsonRpcRequestforvalidators {
    id: string;
    jsonrpc: string;
    method: 'validators';
    params: unknown;
}
export interface JsonRpcResponseforArrayofValidatorStakeViewandRpcError {
    id: string;
    jsonrpc: string;
}
export interface JsonRpcResponseforGenesisConfigandRpcError {
    id: string;
    jsonrpc: string;
}
export interface JsonRpcResponseforRpcNetworkInfoResponseandRpcError {
    id: string;
    jsonrpc: string;
}
export interface JsonRpcResponseforRpcProtocolConfigResponseandRpcError {
    id: string;
    jsonrpc: string;
}
export interface JsonRpcResponseforRpcStatusResponseandRpcError {
    id: string;
    jsonrpc: string;
}
export interface JsonRpcResponseforRpcValidatorResponseandRpcError {
    id: string;
    jsonrpc: string;
}
export interface NetworkInfoView {
    connectedpeers?: unknown[];
    knownproducers?: unknown[];
    numconnectedpeers?: number;
    peermaxcount?: number;
    tier1accountsdata?: unknown[];
    tier1accountskeys?: unknown[];
    tier1connections?: unknown[];
}
export interface NextEpochValidatorInfo {
    accountid?: unknown;
    publickey?: unknown;
    shards: unknown[];
    stake: string;
}
export interface RpcNetworkInfoRequest {
}
export interface RpcNetworkInfoResponse {
    activepeers?: unknown[];
    knownproducers?: unknown[];
    numactivepeers?: number;
    peermaxcount?: number;
    receivedbytespersec?: number;
    sentbytespersec?: number;
}
export interface RpcProtocolConfigRequest {
}
export interface RpcProtocolConfigResponse {
    avghiddenvalidatorseatspershard?: number[];
    blockproducerkickoutthreshold?: number;
    chainid?: string;
    chunkproducerkickoutthreshold?: number;
    chunkvalidatoronlykickoutthreshold?: number;
    dynamicresharding?: boolean;
    epochlength?: number;
    fishermenthreshold?: string;
    gaslimit?: number;
    gaspriceadjustmentrate?: number[];
    genesisheight?: number;
    genesistime?: string;
    maxgasprice?: string;
    maxinflationrate?: number[];
    maxkickoutstakeperc?: number;
    mingasprice?: string;
    minimumstakedivisor?: number;
    minimumstakeratio?: number[];
    minimumvalidatorspershard?: number;
    numblockproducerseats?: number;
    numblockproducerseatspershard?: number[];
    numblocksperyear?: number;
    onlinemaxthreshold?: number[];
    onlineminthreshold?: number[];
    protocolrewardrate?: number[];
    protocoltreasuryaccount?: unknown;
    protocolupgradestakethreshold?: number[];
    protocolversion?: number;
    runtimeconfig?: unknown;
    shardlayout?: unknown;
    shuffleshardassignmentforchunkproducers?: boolean;
    targetvalidatormandatespershard?: number;
    transactionvalidityperiod?: number;
}
export interface RpcStatusRequest {
}
export interface RpcStatusResponse {
    chainid?: string;
    detaileddebugstatus?: unknown;
    genesishash?: unknown;
    latestprotocolversion?: number;
    nodekey?: unknown;
    nodepublickey?: unknown;
    protocolversion?: number;
    rpcaddr?: string;
    syncinfo?: unknown;
    uptimesec?: number;
    validatoraccountid?: unknown;
    validatorpublickey?: unknown;
    validators: unknown[];
    version: unknown;
}
export interface RpcValidatorRequest {
}
export interface RpcValidatorResponse {
    currentfishermen?: unknown[];
    currentproposals?: unknown[];
    currentvalidators?: unknown[];
    epochheight?: number;
    epochstartheight?: number;
    nextfishermen?: unknown[];
    nextvalidators?: unknown[];
    prevepochkickout?: unknown[];
}
export interface RpcValidatorsOrderedRequest {
    blockid?: unknown;
}
export interface SlashedValidator {
    accountid?: unknown;
    isdoublesign?: boolean;
}
export interface StatusSyncInfo {
    earliestblockhash?: unknown;
    earliestblockheight?: number;
    earliestblocktime?: string;
    epochid?: unknown;
    epochstartheight?: number;
    latestblockhash?: unknown;
    latestblockheight?: number;
    latestblocktime?: string;
    lateststateroot?: unknown;
    syncing: boolean;
}
export interface ValidatorInfo {
    accountid?: unknown;
}
export type ValidatorKickoutReason = unknown;
export interface ValidatorKickoutView {
    accountid?: unknown;
    reason: unknown;
}
export type ValidatorStakeView = unknown;
export interface ValidatorStakeViewV1 {
    accountid?: unknown;
    publickey?: unknown;
    stake: string;
}
