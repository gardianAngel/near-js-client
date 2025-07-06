/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
import { z } from 'zod';
export declare const CatchupStatusViewSchema: z.ZodObject<{
    blockstocatchup: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    shardsyncstatus: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    syncblockhash: z.ZodOptional<z.ZodUnknown>;
    syncblockheight: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    blockstocatchup?: unknown[] | undefined;
    shardsyncstatus?: Record<string, unknown> | undefined;
    syncblockhash?: unknown;
    syncblockheight?: number | undefined;
}, {
    blockstocatchup?: unknown[] | undefined;
    shardsyncstatus?: Record<string, unknown> | undefined;
    syncblockhash?: unknown;
    syncblockheight?: number | undefined;
}>;
export declare const CurrentEpochValidatorInfoSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    isslashed: z.ZodOptional<z.ZodBoolean>;
    numexpectedblocks: z.ZodOptional<z.ZodNumber>;
    numexpectedchunks: z.ZodOptional<z.ZodNumber>;
    numexpectedchunkspershard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numexpectedendorsements: z.ZodOptional<z.ZodNumber>;
    numexpectedendorsementspershard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numproducedblocks: z.ZodOptional<z.ZodNumber>;
    numproducedchunks: z.ZodOptional<z.ZodNumber>;
    numproducedchunkspershard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numproducedendorsements: z.ZodOptional<z.ZodNumber>;
    numproducedendorsementspershard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    publickey: z.ZodOptional<z.ZodUnknown>;
    shards: z.ZodArray<z.ZodUnknown, "many">;
    shardsendorsed: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    stake: z.ZodString;
}, "strip", z.ZodTypeAny, {
    stake: string;
    shards: unknown[];
    publickey?: unknown;
    accountid?: unknown;
    isslashed?: boolean | undefined;
    numexpectedblocks?: number | undefined;
    numexpectedchunks?: number | undefined;
    numexpectedchunkspershard?: number[] | undefined;
    numexpectedendorsements?: number | undefined;
    numexpectedendorsementspershard?: number[] | undefined;
    numproducedblocks?: number | undefined;
    numproducedchunks?: number | undefined;
    numproducedchunkspershard?: number[] | undefined;
    numproducedendorsements?: number | undefined;
    numproducedendorsementspershard?: number[] | undefined;
    shardsendorsed?: unknown[] | undefined;
}, {
    stake: string;
    shards: unknown[];
    publickey?: unknown;
    accountid?: unknown;
    isslashed?: boolean | undefined;
    numexpectedblocks?: number | undefined;
    numexpectedchunks?: number | undefined;
    numexpectedchunkspershard?: number[] | undefined;
    numexpectedendorsements?: number | undefined;
    numexpectedendorsementspershard?: number[] | undefined;
    numproducedblocks?: number | undefined;
    numproducedchunks?: number | undefined;
    numproducedchunkspershard?: number[] | undefined;
    numproducedendorsements?: number | undefined;
    numproducedendorsementspershard?: number[] | undefined;
    shardsendorsed?: unknown[] | undefined;
}>;
export declare const DetailedDebugStatusSchema: z.ZodObject<{
    blockproductiondelaymillis: z.ZodOptional<z.ZodNumber>;
    catchupstatus: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    currentheadstatus: z.ZodOptional<z.ZodUnknown>;
    currentheaderheadstatus: z.ZodOptional<z.ZodUnknown>;
    networkinfo: z.ZodOptional<z.ZodUnknown>;
    syncstatus: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    blockproductiondelaymillis?: number | undefined;
    catchupstatus?: unknown[] | undefined;
    currentheadstatus?: unknown;
    currentheaderheadstatus?: unknown;
    networkinfo?: unknown;
    syncstatus?: string | undefined;
}, {
    blockproductiondelaymillis?: number | undefined;
    catchupstatus?: unknown[] | undefined;
    currentheadstatus?: unknown;
    currentheaderheadstatus?: unknown;
    networkinfo?: unknown;
    syncstatus?: string | undefined;
}>;
export declare const ExecutionStatusViewSchema: z.ZodUnknown;
export declare const FinalExecutionStatusSchema: z.ZodUnknown;
export declare const GenesisConfigSchema: z.ZodObject<{
    avghiddenvalidatorseatspershard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    blockproducerkickoutthreshold: z.ZodOptional<z.ZodNumber>;
    chainid: z.ZodOptional<z.ZodString>;
    chunkproducerassignmentchangeslimit: z.ZodOptional<z.ZodNumber>;
    chunkproducerkickoutthreshold: z.ZodOptional<z.ZodNumber>;
    chunkvalidatoronlykickoutthreshold: z.ZodOptional<z.ZodNumber>;
    dynamicresharding: z.ZodOptional<z.ZodBoolean>;
    epochlength: z.ZodOptional<z.ZodNumber>;
    fishermenthreshold: z.ZodOptional<z.ZodString>;
    gaslimit: z.ZodOptional<z.ZodNumber>;
    gaspriceadjustmentrate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    genesisheight: z.ZodOptional<z.ZodNumber>;
    genesistime: z.ZodOptional<z.ZodString>;
    maxgasprice: z.ZodOptional<z.ZodString>;
    maxinflationrate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxkickoutstakeperc: z.ZodOptional<z.ZodNumber>;
    mingasprice: z.ZodOptional<z.ZodString>;
    minimumstakedivisor: z.ZodOptional<z.ZodNumber>;
    minimumstakeratio: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    minimumvalidatorspershard: z.ZodOptional<z.ZodNumber>;
    numblockproducerseats: z.ZodOptional<z.ZodNumber>;
    numblockproducerseatspershard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numblocksperyear: z.ZodOptional<z.ZodNumber>;
    numchunkonlyproducerseats: z.ZodOptional<z.ZodNumber>;
    numchunkproducerseats: z.ZodOptional<z.ZodNumber>;
    numchunkvalidatorseats: z.ZodOptional<z.ZodNumber>;
    onlinemaxthreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    onlineminthreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolrewardrate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocoltreasuryaccount: z.ZodOptional<z.ZodUnknown>;
    protocolupgradestakethreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolversion: z.ZodOptional<z.ZodNumber>;
    shardlayout: z.ZodOptional<z.ZodUnknown>;
    shuffleshardassignmentforchunkproducers: z.ZodOptional<z.ZodBoolean>;
    targetvalidatormandatespershard: z.ZodOptional<z.ZodNumber>;
    totalsupply: z.ZodOptional<z.ZodString>;
    transactionvalidityperiod: z.ZodOptional<z.ZodNumber>;
    useproductionconfig: z.ZodOptional<z.ZodBoolean>;
    validators: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    validators: unknown[];
    totalsupply?: string | undefined;
    gaslimit?: number | undefined;
    chainid?: string | undefined;
    epochlength?: number | undefined;
    numblockproducerseats?: number | undefined;
    avghiddenvalidatorseatspershard?: number[] | undefined;
    blockproducerkickoutthreshold?: number | undefined;
    chunkproducerassignmentchangeslimit?: number | undefined;
    chunkproducerkickoutthreshold?: number | undefined;
    chunkvalidatoronlykickoutthreshold?: number | undefined;
    dynamicresharding?: boolean | undefined;
    fishermenthreshold?: string | undefined;
    gaspriceadjustmentrate?: number[] | undefined;
    genesisheight?: number | undefined;
    genesistime?: string | undefined;
    maxgasprice?: string | undefined;
    maxinflationrate?: number[] | undefined;
    maxkickoutstakeperc?: number | undefined;
    mingasprice?: string | undefined;
    minimumstakedivisor?: number | undefined;
    minimumstakeratio?: number[] | undefined;
    minimumvalidatorspershard?: number | undefined;
    numblockproducerseatspershard?: number[] | undefined;
    numblocksperyear?: number | undefined;
    numchunkonlyproducerseats?: number | undefined;
    numchunkproducerseats?: number | undefined;
    numchunkvalidatorseats?: number | undefined;
    onlinemaxthreshold?: number[] | undefined;
    onlineminthreshold?: number[] | undefined;
    protocolrewardrate?: number[] | undefined;
    protocoltreasuryaccount?: unknown;
    protocolupgradestakethreshold?: number[] | undefined;
    protocolversion?: number | undefined;
    shardlayout?: unknown;
    shuffleshardassignmentforchunkproducers?: boolean | undefined;
    targetvalidatormandatespershard?: number | undefined;
    transactionvalidityperiod?: number | undefined;
    useproductionconfig?: boolean | undefined;
}, {
    validators: unknown[];
    totalsupply?: string | undefined;
    gaslimit?: number | undefined;
    chainid?: string | undefined;
    epochlength?: number | undefined;
    numblockproducerseats?: number | undefined;
    avghiddenvalidatorseatspershard?: number[] | undefined;
    blockproducerkickoutthreshold?: number | undefined;
    chunkproducerassignmentchangeslimit?: number | undefined;
    chunkproducerkickoutthreshold?: number | undefined;
    chunkvalidatoronlykickoutthreshold?: number | undefined;
    dynamicresharding?: boolean | undefined;
    fishermenthreshold?: string | undefined;
    gaspriceadjustmentrate?: number[] | undefined;
    genesisheight?: number | undefined;
    genesistime?: string | undefined;
    maxgasprice?: string | undefined;
    maxinflationrate?: number[] | undefined;
    maxkickoutstakeperc?: number | undefined;
    mingasprice?: string | undefined;
    minimumstakedivisor?: number | undefined;
    minimumstakeratio?: number[] | undefined;
    minimumvalidatorspershard?: number | undefined;
    numblockproducerseatspershard?: number[] | undefined;
    numblocksperyear?: number | undefined;
    numchunkonlyproducerseats?: number | undefined;
    numchunkproducerseats?: number | undefined;
    numchunkvalidatorseats?: number | undefined;
    onlinemaxthreshold?: number[] | undefined;
    onlineminthreshold?: number[] | undefined;
    protocolrewardrate?: number[] | undefined;
    protocoltreasuryaccount?: unknown;
    protocolupgradestakethreshold?: number[] | undefined;
    protocolversion?: number | undefined;
    shardlayout?: unknown;
    shuffleshardassignmentforchunkproducers?: boolean | undefined;
    targetvalidatormandatespershard?: number | undefined;
    transactionvalidityperiod?: number | undefined;
    useproductionconfig?: boolean | undefined;
}>;
export declare const GenesisConfigRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const JsonRpcRequestforEXPERIMENTALgenesisconfigSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_genesis_config"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_genesis_config";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_genesis_config";
    params?: unknown;
}>;
export declare const JsonRpcRequestforEXPERIMENTALprotocolconfigSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_protocol_config"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_protocol_config";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_protocol_config";
    params?: unknown;
}>;
export declare const JsonRpcRequestforEXPERIMENTALvalidatorsorderedSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_validators_ordered"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_validators_ordered";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_validators_ordered";
    params?: unknown;
}>;
export declare const JsonRpcRequestfornetworkinfoSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["network_info"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "network_info";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "network_info";
    params?: unknown;
}>;
export declare const JsonRpcRequestforstatusSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["status"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "status";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "status";
    params?: unknown;
}>;
export declare const JsonRpcRequestforvalidatorsSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["validators"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "validators";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "validators";
    params?: unknown;
}>;
export declare const JsonRpcResponseforArrayofValidatorStakeViewandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforGenesisConfigandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcNetworkInfoResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcProtocolConfigResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcStatusResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcValidatorResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const NetworkInfoViewSchema: z.ZodObject<{
    connectedpeers: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    knownproducers: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    numconnectedpeers: z.ZodOptional<z.ZodNumber>;
    peermaxcount: z.ZodOptional<z.ZodNumber>;
    tier1accountsdata: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    tier1accountskeys: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    tier1connections: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    connectedpeers?: unknown[] | undefined;
    knownproducers?: unknown[] | undefined;
    numconnectedpeers?: number | undefined;
    peermaxcount?: number | undefined;
    tier1accountsdata?: unknown[] | undefined;
    tier1accountskeys?: unknown[] | undefined;
    tier1connections?: unknown[] | undefined;
}, {
    connectedpeers?: unknown[] | undefined;
    knownproducers?: unknown[] | undefined;
    numconnectedpeers?: number | undefined;
    peermaxcount?: number | undefined;
    tier1accountsdata?: unknown[] | undefined;
    tier1accountskeys?: unknown[] | undefined;
    tier1connections?: unknown[] | undefined;
}>;
export declare const NextEpochValidatorInfoSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    publickey: z.ZodOptional<z.ZodUnknown>;
    shards: z.ZodArray<z.ZodUnknown, "many">;
    stake: z.ZodString;
}, "strip", z.ZodTypeAny, {
    stake: string;
    shards: unknown[];
    publickey?: unknown;
    accountid?: unknown;
}, {
    stake: string;
    shards: unknown[];
    publickey?: unknown;
    accountid?: unknown;
}>;
export declare const RpcNetworkInfoRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcNetworkInfoResponseSchema: z.ZodObject<{
    activepeers: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    knownproducers: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    numactivepeers: z.ZodOptional<z.ZodNumber>;
    peermaxcount: z.ZodOptional<z.ZodNumber>;
    receivedbytespersec: z.ZodOptional<z.ZodNumber>;
    sentbytespersec: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    receivedbytespersec?: number | undefined;
    sentbytespersec?: number | undefined;
    knownproducers?: unknown[] | undefined;
    peermaxcount?: number | undefined;
    activepeers?: unknown[] | undefined;
    numactivepeers?: number | undefined;
}, {
    receivedbytespersec?: number | undefined;
    sentbytespersec?: number | undefined;
    knownproducers?: unknown[] | undefined;
    peermaxcount?: number | undefined;
    activepeers?: unknown[] | undefined;
    numactivepeers?: number | undefined;
}>;
export declare const RpcProtocolConfigRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcProtocolConfigResponseSchema: z.ZodObject<{
    avghiddenvalidatorseatspershard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    blockproducerkickoutthreshold: z.ZodOptional<z.ZodNumber>;
    chainid: z.ZodOptional<z.ZodString>;
    chunkproducerkickoutthreshold: z.ZodOptional<z.ZodNumber>;
    chunkvalidatoronlykickoutthreshold: z.ZodOptional<z.ZodNumber>;
    dynamicresharding: z.ZodOptional<z.ZodBoolean>;
    epochlength: z.ZodOptional<z.ZodNumber>;
    fishermenthreshold: z.ZodOptional<z.ZodString>;
    gaslimit: z.ZodOptional<z.ZodNumber>;
    gaspriceadjustmentrate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    genesisheight: z.ZodOptional<z.ZodNumber>;
    genesistime: z.ZodOptional<z.ZodString>;
    maxgasprice: z.ZodOptional<z.ZodString>;
    maxinflationrate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxkickoutstakeperc: z.ZodOptional<z.ZodNumber>;
    mingasprice: z.ZodOptional<z.ZodString>;
    minimumstakedivisor: z.ZodOptional<z.ZodNumber>;
    minimumstakeratio: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    minimumvalidatorspershard: z.ZodOptional<z.ZodNumber>;
    numblockproducerseats: z.ZodOptional<z.ZodNumber>;
    numblockproducerseatspershard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numblocksperyear: z.ZodOptional<z.ZodNumber>;
    onlinemaxthreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    onlineminthreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolrewardrate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocoltreasuryaccount: z.ZodOptional<z.ZodUnknown>;
    protocolupgradestakethreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolversion: z.ZodOptional<z.ZodNumber>;
    runtimeconfig: z.ZodOptional<z.ZodUnknown>;
    shardlayout: z.ZodOptional<z.ZodUnknown>;
    shuffleshardassignmentforchunkproducers: z.ZodOptional<z.ZodBoolean>;
    targetvalidatormandatespershard: z.ZodOptional<z.ZodNumber>;
    transactionvalidityperiod: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    gaslimit?: number | undefined;
    chainid?: string | undefined;
    epochlength?: number | undefined;
    numblockproducerseats?: number | undefined;
    avghiddenvalidatorseatspershard?: number[] | undefined;
    blockproducerkickoutthreshold?: number | undefined;
    chunkproducerkickoutthreshold?: number | undefined;
    chunkvalidatoronlykickoutthreshold?: number | undefined;
    dynamicresharding?: boolean | undefined;
    fishermenthreshold?: string | undefined;
    gaspriceadjustmentrate?: number[] | undefined;
    genesisheight?: number | undefined;
    genesistime?: string | undefined;
    maxgasprice?: string | undefined;
    maxinflationrate?: number[] | undefined;
    maxkickoutstakeperc?: number | undefined;
    mingasprice?: string | undefined;
    minimumstakedivisor?: number | undefined;
    minimumstakeratio?: number[] | undefined;
    minimumvalidatorspershard?: number | undefined;
    numblockproducerseatspershard?: number[] | undefined;
    numblocksperyear?: number | undefined;
    onlinemaxthreshold?: number[] | undefined;
    onlineminthreshold?: number[] | undefined;
    protocolrewardrate?: number[] | undefined;
    protocoltreasuryaccount?: unknown;
    protocolupgradestakethreshold?: number[] | undefined;
    protocolversion?: number | undefined;
    shardlayout?: unknown;
    shuffleshardassignmentforchunkproducers?: boolean | undefined;
    targetvalidatormandatespershard?: number | undefined;
    transactionvalidityperiod?: number | undefined;
    runtimeconfig?: unknown;
}, {
    gaslimit?: number | undefined;
    chainid?: string | undefined;
    epochlength?: number | undefined;
    numblockproducerseats?: number | undefined;
    avghiddenvalidatorseatspershard?: number[] | undefined;
    blockproducerkickoutthreshold?: number | undefined;
    chunkproducerkickoutthreshold?: number | undefined;
    chunkvalidatoronlykickoutthreshold?: number | undefined;
    dynamicresharding?: boolean | undefined;
    fishermenthreshold?: string | undefined;
    gaspriceadjustmentrate?: number[] | undefined;
    genesisheight?: number | undefined;
    genesistime?: string | undefined;
    maxgasprice?: string | undefined;
    maxinflationrate?: number[] | undefined;
    maxkickoutstakeperc?: number | undefined;
    mingasprice?: string | undefined;
    minimumstakedivisor?: number | undefined;
    minimumstakeratio?: number[] | undefined;
    minimumvalidatorspershard?: number | undefined;
    numblockproducerseatspershard?: number[] | undefined;
    numblocksperyear?: number | undefined;
    onlinemaxthreshold?: number[] | undefined;
    onlineminthreshold?: number[] | undefined;
    protocolrewardrate?: number[] | undefined;
    protocoltreasuryaccount?: unknown;
    protocolupgradestakethreshold?: number[] | undefined;
    protocolversion?: number | undefined;
    shardlayout?: unknown;
    shuffleshardassignmentforchunkproducers?: boolean | undefined;
    targetvalidatormandatespershard?: number | undefined;
    transactionvalidityperiod?: number | undefined;
    runtimeconfig?: unknown;
}>;
export declare const RpcStatusRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcStatusResponseSchema: z.ZodObject<{
    chainid: z.ZodOptional<z.ZodString>;
    detaileddebugstatus: z.ZodOptional<z.ZodUnknown>;
    genesishash: z.ZodOptional<z.ZodUnknown>;
    latestprotocolversion: z.ZodOptional<z.ZodNumber>;
    nodekey: z.ZodOptional<z.ZodUnknown>;
    nodepublickey: z.ZodOptional<z.ZodUnknown>;
    protocolversion: z.ZodOptional<z.ZodNumber>;
    rpcaddr: z.ZodOptional<z.ZodString>;
    syncinfo: z.ZodOptional<z.ZodUnknown>;
    uptimesec: z.ZodOptional<z.ZodNumber>;
    validatoraccountid: z.ZodOptional<z.ZodUnknown>;
    validatorpublickey: z.ZodOptional<z.ZodUnknown>;
    validators: z.ZodArray<z.ZodUnknown, "many">;
    version: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    validators: unknown[];
    latestprotocolversion?: number | undefined;
    version?: unknown;
    chainid?: string | undefined;
    rpcaddr?: string | undefined;
    protocolversion?: number | undefined;
    detaileddebugstatus?: unknown;
    genesishash?: unknown;
    nodekey?: unknown;
    nodepublickey?: unknown;
    syncinfo?: unknown;
    uptimesec?: number | undefined;
    validatoraccountid?: unknown;
    validatorpublickey?: unknown;
}, {
    validators: unknown[];
    latestprotocolversion?: number | undefined;
    version?: unknown;
    chainid?: string | undefined;
    rpcaddr?: string | undefined;
    protocolversion?: number | undefined;
    detaileddebugstatus?: unknown;
    genesishash?: unknown;
    nodekey?: unknown;
    nodepublickey?: unknown;
    syncinfo?: unknown;
    uptimesec?: number | undefined;
    validatoraccountid?: unknown;
    validatorpublickey?: unknown;
}>;
export declare const RpcValidatorRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcValidatorResponseSchema: z.ZodObject<{
    currentfishermen: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    currentproposals: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    currentvalidators: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    epochheight: z.ZodOptional<z.ZodNumber>;
    epochstartheight: z.ZodOptional<z.ZodNumber>;
    nextfishermen: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    nextvalidators: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    prevepochkickout: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    currentfishermen?: unknown[] | undefined;
    currentproposals?: unknown[] | undefined;
    currentvalidators?: unknown[] | undefined;
    epochheight?: number | undefined;
    epochstartheight?: number | undefined;
    nextfishermen?: unknown[] | undefined;
    nextvalidators?: unknown[] | undefined;
    prevepochkickout?: unknown[] | undefined;
}, {
    currentfishermen?: unknown[] | undefined;
    currentproposals?: unknown[] | undefined;
    currentvalidators?: unknown[] | undefined;
    epochheight?: number | undefined;
    epochstartheight?: number | undefined;
    nextfishermen?: unknown[] | undefined;
    nextvalidators?: unknown[] | undefined;
    prevepochkickout?: unknown[] | undefined;
}>;
export declare const RpcValidatorsOrderedRequestSchema: z.ZodObject<{
    blockid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    blockid?: unknown;
}, {
    blockid?: unknown;
}>;
export declare const SlashedValidatorSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    isdoublesign: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    accountid?: unknown;
    isdoublesign?: boolean | undefined;
}, {
    accountid?: unknown;
    isdoublesign?: boolean | undefined;
}>;
export declare const StatusSyncInfoSchema: z.ZodObject<{
    earliestblockhash: z.ZodOptional<z.ZodUnknown>;
    earliestblockheight: z.ZodOptional<z.ZodNumber>;
    earliestblocktime: z.ZodOptional<z.ZodString>;
    epochid: z.ZodOptional<z.ZodUnknown>;
    epochstartheight: z.ZodOptional<z.ZodNumber>;
    latestblockhash: z.ZodOptional<z.ZodUnknown>;
    latestblockheight: z.ZodOptional<z.ZodNumber>;
    latestblocktime: z.ZodOptional<z.ZodString>;
    lateststateroot: z.ZodOptional<z.ZodUnknown>;
    syncing: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    syncing: boolean;
    epochid?: unknown;
    epochstartheight?: number | undefined;
    earliestblockhash?: unknown;
    earliestblockheight?: number | undefined;
    earliestblocktime?: string | undefined;
    latestblockhash?: unknown;
    latestblockheight?: number | undefined;
    latestblocktime?: string | undefined;
    lateststateroot?: unknown;
}, {
    syncing: boolean;
    epochid?: unknown;
    epochstartheight?: number | undefined;
    earliestblockhash?: unknown;
    earliestblockheight?: number | undefined;
    earliestblocktime?: string | undefined;
    latestblockhash?: unknown;
    latestblockheight?: number | undefined;
    latestblocktime?: string | undefined;
    lateststateroot?: unknown;
}>;
export declare const ValidatorInfoSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountid?: unknown;
}, {
    accountid?: unknown;
}>;
export declare const ValidatorKickoutReasonSchema: z.ZodUnknown;
export declare const ValidatorKickoutViewSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    reason: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    accountid?: unknown;
    reason?: unknown;
}, {
    accountid?: unknown;
    reason?: unknown;
}>;
export declare const ValidatorStakeViewSchema: z.ZodUnknown;
export declare const ValidatorStakeViewV1Schema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    publickey: z.ZodOptional<z.ZodUnknown>;
    stake: z.ZodString;
}, "strip", z.ZodTypeAny, {
    stake: string;
    publickey?: unknown;
    accountid?: unknown;
}, {
    stake: string;
    publickey?: unknown;
    accountid?: unknown;
}>;
