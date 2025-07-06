"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorStakeViewV1Schema = exports.ValidatorStakeViewSchema = exports.ValidatorKickoutViewSchema = exports.ValidatorKickoutReasonSchema = exports.ValidatorInfoSchema = exports.StatusSyncInfoSchema = exports.SlashedValidatorSchema = exports.RpcValidatorsOrderedRequestSchema = exports.RpcValidatorResponseSchema = exports.RpcValidatorRequestSchema = exports.RpcStatusResponseSchema = exports.RpcStatusRequestSchema = exports.RpcProtocolConfigResponseSchema = exports.RpcProtocolConfigRequestSchema = exports.RpcNetworkInfoResponseSchema = exports.RpcNetworkInfoRequestSchema = exports.NextEpochValidatorInfoSchema = exports.NetworkInfoViewSchema = exports.JsonRpcResponseforRpcValidatorResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcStatusResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcProtocolConfigResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcNetworkInfoResponseandRpcErrorSchema = exports.JsonRpcResponseforGenesisConfigandRpcErrorSchema = exports.JsonRpcResponseforArrayofValidatorStakeViewandRpcErrorSchema = exports.JsonRpcRequestforvalidatorsSchema = exports.JsonRpcRequestforstatusSchema = exports.JsonRpcRequestfornetworkinfoSchema = exports.JsonRpcRequestforEXPERIMENTALvalidatorsorderedSchema = exports.JsonRpcRequestforEXPERIMENTALprotocolconfigSchema = exports.JsonRpcRequestforEXPERIMENTALgenesisconfigSchema = exports.GenesisConfigRequestSchema = exports.GenesisConfigSchema = exports.FinalExecutionStatusSchema = exports.ExecutionStatusViewSchema = exports.DetailedDebugStatusSchema = exports.CurrentEpochValidatorInfoSchema = exports.CatchupStatusViewSchema = void 0;
const zod_1 = require("zod");
exports.CatchupStatusViewSchema = zod_1.z.object({
    blockstocatchup: zod_1.z.array(zod_1.z.unknown()).optional(),
    shardsyncstatus: zod_1.z.record(zod_1.z.unknown()).optional(),
    syncblockhash: zod_1.z.unknown().optional(),
    syncblockheight: zod_1.z.number().optional()
});
exports.CurrentEpochValidatorInfoSchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional(),
    isslashed: zod_1.z.boolean().optional(),
    numexpectedblocks: zod_1.z.number().optional(),
    numexpectedchunks: zod_1.z.number().optional(),
    numexpectedchunkspershard: zod_1.z.array(zod_1.z.number()).optional(),
    numexpectedendorsements: zod_1.z.number().optional(),
    numexpectedendorsementspershard: zod_1.z.array(zod_1.z.number()).optional(),
    numproducedblocks: zod_1.z.number().optional(),
    numproducedchunks: zod_1.z.number().optional(),
    numproducedchunkspershard: zod_1.z.array(zod_1.z.number()).optional(),
    numproducedendorsements: zod_1.z.number().optional(),
    numproducedendorsementspershard: zod_1.z.array(zod_1.z.number()).optional(),
    publickey: zod_1.z.unknown().optional(),
    shards: zod_1.z.array(zod_1.z.unknown()),
    shardsendorsed: zod_1.z.array(zod_1.z.unknown()).optional(),
    stake: zod_1.z.string()
});
exports.DetailedDebugStatusSchema = zod_1.z.object({
    blockproductiondelaymillis: zod_1.z.number().optional(),
    catchupstatus: zod_1.z.array(zod_1.z.unknown()).optional(),
    currentheadstatus: zod_1.z.unknown().optional(),
    currentheaderheadstatus: zod_1.z.unknown().optional(),
    networkinfo: zod_1.z.unknown().optional(),
    syncstatus: zod_1.z.string().optional()
});
exports.ExecutionStatusViewSchema = zod_1.z.unknown();
exports.FinalExecutionStatusSchema = zod_1.z.unknown();
exports.GenesisConfigSchema = zod_1.z.object({
    avghiddenvalidatorseatspershard: zod_1.z.array(zod_1.z.number()).optional(),
    blockproducerkickoutthreshold: zod_1.z.number().optional(),
    chainid: zod_1.z.string().optional(),
    chunkproducerassignmentchangeslimit: zod_1.z.number().optional(),
    chunkproducerkickoutthreshold: zod_1.z.number().optional(),
    chunkvalidatoronlykickoutthreshold: zod_1.z.number().optional(),
    dynamicresharding: zod_1.z.boolean().optional(),
    epochlength: zod_1.z.number().optional(),
    fishermenthreshold: zod_1.z.string().optional(),
    gaslimit: zod_1.z.number().optional(),
    gaspriceadjustmentrate: zod_1.z.array(zod_1.z.number()).optional(),
    genesisheight: zod_1.z.number().optional(),
    genesistime: zod_1.z.string().optional(),
    maxgasprice: zod_1.z.string().optional(),
    maxinflationrate: zod_1.z.array(zod_1.z.number()).optional(),
    maxkickoutstakeperc: zod_1.z.number().optional(),
    mingasprice: zod_1.z.string().optional(),
    minimumstakedivisor: zod_1.z.number().optional(),
    minimumstakeratio: zod_1.z.array(zod_1.z.number()).optional(),
    minimumvalidatorspershard: zod_1.z.number().optional(),
    numblockproducerseats: zod_1.z.number().optional(),
    numblockproducerseatspershard: zod_1.z.array(zod_1.z.number()).optional(),
    numblocksperyear: zod_1.z.number().optional(),
    numchunkonlyproducerseats: zod_1.z.number().optional(),
    numchunkproducerseats: zod_1.z.number().optional(),
    numchunkvalidatorseats: zod_1.z.number().optional(),
    onlinemaxthreshold: zod_1.z.array(zod_1.z.number()).optional(),
    onlineminthreshold: zod_1.z.array(zod_1.z.number()).optional(),
    protocolrewardrate: zod_1.z.array(zod_1.z.number()).optional(),
    protocoltreasuryaccount: zod_1.z.unknown().optional(),
    protocolupgradestakethreshold: zod_1.z.array(zod_1.z.number()).optional(),
    protocolversion: zod_1.z.number().optional(),
    shardlayout: zod_1.z.unknown().optional(),
    shuffleshardassignmentforchunkproducers: zod_1.z.boolean().optional(),
    targetvalidatormandatespershard: zod_1.z.number().optional(),
    totalsupply: zod_1.z.string().optional(),
    transactionvalidityperiod: zod_1.z.number().optional(),
    useproductionconfig: zod_1.z.boolean().optional(),
    validators: zod_1.z.array(zod_1.z.unknown())
});
exports.GenesisConfigRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.JsonRpcRequestforEXPERIMENTALgenesisconfigSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_genesis_config']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforEXPERIMENTALprotocolconfigSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_protocol_config']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforEXPERIMENTALvalidatorsorderedSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_validators_ordered']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestfornetworkinfoSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['network_info']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforstatusSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['status']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforvalidatorsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['validators']),
    params: zod_1.z.unknown()
});
exports.JsonRpcResponseforArrayofValidatorStakeViewandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforGenesisConfigandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcNetworkInfoResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcProtocolConfigResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcStatusResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcValidatorResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.NetworkInfoViewSchema = zod_1.z.object({
    connectedpeers: zod_1.z.array(zod_1.z.unknown()).optional(),
    knownproducers: zod_1.z.array(zod_1.z.unknown()).optional(),
    numconnectedpeers: zod_1.z.number().optional(),
    peermaxcount: zod_1.z.number().optional(),
    tier1accountsdata: zod_1.z.array(zod_1.z.unknown()).optional(),
    tier1accountskeys: zod_1.z.array(zod_1.z.unknown()).optional(),
    tier1connections: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.NextEpochValidatorInfoSchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional(),
    publickey: zod_1.z.unknown().optional(),
    shards: zod_1.z.array(zod_1.z.unknown()),
    stake: zod_1.z.string()
});
exports.RpcNetworkInfoRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcNetworkInfoResponseSchema = zod_1.z.object({
    activepeers: zod_1.z.array(zod_1.z.unknown()).optional(),
    knownproducers: zod_1.z.array(zod_1.z.unknown()).optional(),
    numactivepeers: zod_1.z.number().optional(),
    peermaxcount: zod_1.z.number().optional(),
    receivedbytespersec: zod_1.z.number().optional(),
    sentbytespersec: zod_1.z.number().optional()
});
exports.RpcProtocolConfigRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcProtocolConfigResponseSchema = zod_1.z.object({
    avghiddenvalidatorseatspershard: zod_1.z.array(zod_1.z.number()).optional(),
    blockproducerkickoutthreshold: zod_1.z.number().optional(),
    chainid: zod_1.z.string().optional(),
    chunkproducerkickoutthreshold: zod_1.z.number().optional(),
    chunkvalidatoronlykickoutthreshold: zod_1.z.number().optional(),
    dynamicresharding: zod_1.z.boolean().optional(),
    epochlength: zod_1.z.number().optional(),
    fishermenthreshold: zod_1.z.string().optional(),
    gaslimit: zod_1.z.number().optional(),
    gaspriceadjustmentrate: zod_1.z.array(zod_1.z.number()).optional(),
    genesisheight: zod_1.z.number().optional(),
    genesistime: zod_1.z.string().optional(),
    maxgasprice: zod_1.z.string().optional(),
    maxinflationrate: zod_1.z.array(zod_1.z.number()).optional(),
    maxkickoutstakeperc: zod_1.z.number().optional(),
    mingasprice: zod_1.z.string().optional(),
    minimumstakedivisor: zod_1.z.number().optional(),
    minimumstakeratio: zod_1.z.array(zod_1.z.number()).optional(),
    minimumvalidatorspershard: zod_1.z.number().optional(),
    numblockproducerseats: zod_1.z.number().optional(),
    numblockproducerseatspershard: zod_1.z.array(zod_1.z.number()).optional(),
    numblocksperyear: zod_1.z.number().optional(),
    onlinemaxthreshold: zod_1.z.array(zod_1.z.number()).optional(),
    onlineminthreshold: zod_1.z.array(zod_1.z.number()).optional(),
    protocolrewardrate: zod_1.z.array(zod_1.z.number()).optional(),
    protocoltreasuryaccount: zod_1.z.unknown().optional(),
    protocolupgradestakethreshold: zod_1.z.array(zod_1.z.number()).optional(),
    protocolversion: zod_1.z.number().optional(),
    runtimeconfig: zod_1.z.unknown().optional(),
    shardlayout: zod_1.z.unknown().optional(),
    shuffleshardassignmentforchunkproducers: zod_1.z.boolean().optional(),
    targetvalidatormandatespershard: zod_1.z.number().optional(),
    transactionvalidityperiod: zod_1.z.number().optional()
});
exports.RpcStatusRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcStatusResponseSchema = zod_1.z.object({
    chainid: zod_1.z.string().optional(),
    detaileddebugstatus: zod_1.z.unknown().optional(),
    genesishash: zod_1.z.unknown().optional(),
    latestprotocolversion: zod_1.z.number().optional(),
    nodekey: zod_1.z.unknown().optional(),
    nodepublickey: zod_1.z.unknown().optional(),
    protocolversion: zod_1.z.number().optional(),
    rpcaddr: zod_1.z.string().optional(),
    syncinfo: zod_1.z.unknown().optional(),
    uptimesec: zod_1.z.number().optional(),
    validatoraccountid: zod_1.z.unknown().optional(),
    validatorpublickey: zod_1.z.unknown().optional(),
    validators: zod_1.z.array(zod_1.z.unknown()),
    version: zod_1.z.unknown()
});
exports.RpcValidatorRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcValidatorResponseSchema = zod_1.z.object({
    currentfishermen: zod_1.z.array(zod_1.z.unknown()).optional(),
    currentproposals: zod_1.z.array(zod_1.z.unknown()).optional(),
    currentvalidators: zod_1.z.array(zod_1.z.unknown()).optional(),
    epochheight: zod_1.z.number().optional(),
    epochstartheight: zod_1.z.number().optional(),
    nextfishermen: zod_1.z.array(zod_1.z.unknown()).optional(),
    nextvalidators: zod_1.z.array(zod_1.z.unknown()).optional(),
    prevepochkickout: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.RpcValidatorsOrderedRequestSchema = zod_1.z.object({
    blockid: zod_1.z.unknown().optional()
});
exports.SlashedValidatorSchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional(),
    isdoublesign: zod_1.z.boolean().optional()
});
exports.StatusSyncInfoSchema = zod_1.z.object({
    earliestblockhash: zod_1.z.unknown().optional(),
    earliestblockheight: zod_1.z.number().optional(),
    earliestblocktime: zod_1.z.string().optional(),
    epochid: zod_1.z.unknown().optional(),
    epochstartheight: zod_1.z.number().optional(),
    latestblockhash: zod_1.z.unknown().optional(),
    latestblockheight: zod_1.z.number().optional(),
    latestblocktime: zod_1.z.string().optional(),
    lateststateroot: zod_1.z.unknown().optional(),
    syncing: zod_1.z.boolean()
});
exports.ValidatorInfoSchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional()
});
exports.ValidatorKickoutReasonSchema = zod_1.z.unknown();
exports.ValidatorKickoutViewSchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional(),
    reason: zod_1.z.unknown()
});
exports.ValidatorStakeViewSchema = zod_1.z.unknown();
exports.ValidatorStakeViewV1Schema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional(),
    publickey: zod_1.z.unknown().optional(),
    stake: zod_1.z.string()
});
