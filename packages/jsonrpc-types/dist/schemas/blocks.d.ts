/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
import { z } from 'zod';
export declare const BlockHeaderInnerLiteViewSchema: z.ZodObject<{
    blockmerkleroot: z.ZodOptional<z.ZodUnknown>;
    epochid: z.ZodOptional<z.ZodUnknown>;
    height: z.ZodNumber;
    nextbphash: z.ZodOptional<z.ZodUnknown>;
    nextepochid: z.ZodOptional<z.ZodUnknown>;
    outcomeroot: z.ZodOptional<z.ZodUnknown>;
    prevstateroot: z.ZodOptional<z.ZodUnknown>;
    timestamp: z.ZodNumber;
    timestampnanosec: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    height: number;
    timestamp: number;
    blockmerkleroot?: unknown;
    epochid?: unknown;
    nextbphash?: unknown;
    nextepochid?: unknown;
    outcomeroot?: unknown;
    prevstateroot?: unknown;
    timestampnanosec?: string | undefined;
}, {
    height: number;
    timestamp: number;
    blockmerkleroot?: unknown;
    epochid?: unknown;
    nextbphash?: unknown;
    nextepochid?: unknown;
    outcomeroot?: unknown;
    prevstateroot?: unknown;
    timestampnanosec?: string | undefined;
}>;
export declare const BlockHeaderViewSchema: z.ZodObject<{
    approvals: z.ZodArray<z.ZodUnknown, "many">;
    blockbodyhash: z.ZodOptional<z.ZodUnknown>;
    blockmerkleroot: z.ZodOptional<z.ZodUnknown>;
    blockordinal: z.ZodOptional<z.ZodNumber>;
    challengesresult: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    challengesroot: z.ZodOptional<z.ZodUnknown>;
    chunkendorsements: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodNumber, "many">, "many">>;
    chunkheadersroot: z.ZodOptional<z.ZodUnknown>;
    chunkmask: z.ZodOptional<z.ZodArray<z.ZodBoolean, "many">>;
    chunkreceiptsroot: z.ZodOptional<z.ZodUnknown>;
    chunktxroot: z.ZodOptional<z.ZodUnknown>;
    chunksincluded: z.ZodOptional<z.ZodNumber>;
    epochid: z.ZodOptional<z.ZodUnknown>;
    epochsyncdatahash: z.ZodOptional<z.ZodUnknown>;
    gasprice: z.ZodOptional<z.ZodString>;
    hash: z.ZodUnknown;
    height: z.ZodNumber;
    lastdsfinalblock: z.ZodOptional<z.ZodUnknown>;
    lastfinalblock: z.ZodOptional<z.ZodUnknown>;
    latestprotocolversion: z.ZodOptional<z.ZodNumber>;
    nextbphash: z.ZodOptional<z.ZodUnknown>;
    nextepochid: z.ZodOptional<z.ZodUnknown>;
    outcomeroot: z.ZodOptional<z.ZodUnknown>;
    prevhash: z.ZodOptional<z.ZodUnknown>;
    prevheight: z.ZodOptional<z.ZodNumber>;
    prevstateroot: z.ZodOptional<z.ZodUnknown>;
    randomvalue: z.ZodOptional<z.ZodUnknown>;
    rentpaid: z.ZodOptional<z.ZodString>;
    signature: z.ZodUnknown;
    timestamp: z.ZodNumber;
    timestampnanosec: z.ZodOptional<z.ZodString>;
    totalsupply: z.ZodOptional<z.ZodString>;
    validatorproposals: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    validatorreward: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    height: number;
    timestamp: number;
    approvals: unknown[];
    hash?: unknown;
    gasprice?: string | undefined;
    blockmerkleroot?: unknown;
    epochid?: unknown;
    nextbphash?: unknown;
    nextepochid?: unknown;
    outcomeroot?: unknown;
    prevstateroot?: unknown;
    timestampnanosec?: string | undefined;
    blockbodyhash?: unknown;
    blockordinal?: number | undefined;
    challengesresult?: unknown[] | undefined;
    challengesroot?: unknown;
    chunkendorsements?: number[][] | undefined;
    chunkheadersroot?: unknown;
    chunkmask?: boolean[] | undefined;
    chunkreceiptsroot?: unknown;
    chunktxroot?: unknown;
    chunksincluded?: number | undefined;
    epochsyncdatahash?: unknown;
    lastdsfinalblock?: unknown;
    lastfinalblock?: unknown;
    latestprotocolversion?: number | undefined;
    prevhash?: unknown;
    prevheight?: number | undefined;
    randomvalue?: unknown;
    rentpaid?: string | undefined;
    signature?: unknown;
    totalsupply?: string | undefined;
    validatorproposals?: unknown[] | undefined;
    validatorreward?: string | undefined;
}, {
    height: number;
    timestamp: number;
    approvals: unknown[];
    hash?: unknown;
    gasprice?: string | undefined;
    blockmerkleroot?: unknown;
    epochid?: unknown;
    nextbphash?: unknown;
    nextepochid?: unknown;
    outcomeroot?: unknown;
    prevstateroot?: unknown;
    timestampnanosec?: string | undefined;
    blockbodyhash?: unknown;
    blockordinal?: number | undefined;
    challengesresult?: unknown[] | undefined;
    challengesroot?: unknown;
    chunkendorsements?: number[][] | undefined;
    chunkheadersroot?: unknown;
    chunkmask?: boolean[] | undefined;
    chunkreceiptsroot?: unknown;
    chunktxroot?: unknown;
    chunksincluded?: number | undefined;
    epochsyncdatahash?: unknown;
    lastdsfinalblock?: unknown;
    lastfinalblock?: unknown;
    latestprotocolversion?: number | undefined;
    prevhash?: unknown;
    prevheight?: number | undefined;
    randomvalue?: unknown;
    rentpaid?: string | undefined;
    signature?: unknown;
    totalsupply?: string | undefined;
    validatorproposals?: unknown[] | undefined;
    validatorreward?: string | undefined;
}>;
export declare const BlockIdSchema: z.ZodUnion<[z.ZodNumber, z.ZodUnknown]>;
export declare const BlockStatusViewSchema: z.ZodObject<{
    hash: z.ZodUnknown;
    height: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    height: number;
    hash?: unknown;
}, {
    height: number;
    hash?: unknown;
}>;
export declare const ChunkDistributionNetworkConfigSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    uris: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    uris?: unknown;
}, {
    enabled: boolean;
    uris?: unknown;
}>;
export declare const ChunkDistributionUrisSchema: z.ZodObject<{
    get: z.ZodString;
    set: z.ZodString;
}, "strip", z.ZodTypeAny, {
    set: string;
    get: string;
}, {
    set: string;
    get: string;
}>;
export declare const ChunkHeaderViewSchema: z.ZodObject<{
    balanceburnt: z.ZodOptional<z.ZodString>;
    bandwidthrequests: z.ZodOptional<z.ZodUnknown>;
    chunkhash: z.ZodOptional<z.ZodUnknown>;
    congestioninfo: z.ZodOptional<z.ZodUnknown>;
    encodedlength: z.ZodOptional<z.ZodNumber>;
    encodedmerkleroot: z.ZodOptional<z.ZodUnknown>;
    gaslimit: z.ZodOptional<z.ZodNumber>;
    gasused: z.ZodOptional<z.ZodNumber>;
    heightcreated: z.ZodOptional<z.ZodNumber>;
    heightincluded: z.ZodOptional<z.ZodNumber>;
    outcomeroot: z.ZodOptional<z.ZodUnknown>;
    outgoingreceiptsroot: z.ZodOptional<z.ZodUnknown>;
    prevblockhash: z.ZodOptional<z.ZodUnknown>;
    prevstateroot: z.ZodOptional<z.ZodUnknown>;
    rentpaid: z.ZodOptional<z.ZodString>;
    shardid: z.ZodOptional<z.ZodUnknown>;
    signature: z.ZodUnknown;
    txroot: z.ZodOptional<z.ZodUnknown>;
    validatorproposals: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    validatorreward: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    gasused?: number | undefined;
    shardid?: unknown;
    outcomeroot?: unknown;
    prevstateroot?: unknown;
    rentpaid?: string | undefined;
    signature?: unknown;
    validatorproposals?: unknown[] | undefined;
    validatorreward?: string | undefined;
    balanceburnt?: string | undefined;
    bandwidthrequests?: unknown;
    chunkhash?: unknown;
    congestioninfo?: unknown;
    encodedlength?: number | undefined;
    encodedmerkleroot?: unknown;
    gaslimit?: number | undefined;
    heightcreated?: number | undefined;
    heightincluded?: number | undefined;
    outgoingreceiptsroot?: unknown;
    prevblockhash?: unknown;
    txroot?: unknown;
}, {
    gasused?: number | undefined;
    shardid?: unknown;
    outcomeroot?: unknown;
    prevstateroot?: unknown;
    rentpaid?: string | undefined;
    signature?: unknown;
    validatorproposals?: unknown[] | undefined;
    validatorreward?: string | undefined;
    balanceburnt?: string | undefined;
    bandwidthrequests?: unknown;
    chunkhash?: unknown;
    congestioninfo?: unknown;
    encodedlength?: number | undefined;
    encodedmerkleroot?: unknown;
    gaslimit?: number | undefined;
    heightcreated?: number | undefined;
    heightincluded?: number | undefined;
    outgoingreceiptsroot?: unknown;
    prevblockhash?: unknown;
    txroot?: unknown;
}>;
export declare const JsonRpcRequestforEXPERIMENTALchangesinblockSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_changes_in_block"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_changes_in_block";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_changes_in_block";
    params?: unknown;
}>;
export declare const JsonRpcRequestforEXPERIMENTALlightclientblockproofSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_light_client_block_proof"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_light_client_block_proof";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_light_client_block_proof";
    params?: unknown;
}>;
export declare const JsonRpcRequestforblockSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["block"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "block";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "block";
    params?: unknown;
}>;
export declare const JsonRpcRequestforchunkSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["chunk"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "chunk";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "chunk";
    params?: unknown;
}>;
export declare const JsonRpcRequestfornextlightclientblockSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["next_light_client_block"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "next_light_client_block";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "next_light_client_block";
    params?: unknown;
}>;
export declare const JsonRpcResponseforRpcBlockResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcChunkResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcLightClientBlockProofResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcLightClientNextBlockResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcStateChangesInBlockByTypeResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcStateChangesInBlockResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const LightClientBlockLiteViewSchema: z.ZodObject<{
    innerlite: z.ZodOptional<z.ZodUnknown>;
    innerresthash: z.ZodOptional<z.ZodUnknown>;
    prevblockhash: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    prevblockhash?: unknown;
    innerlite?: unknown;
    innerresthash?: unknown;
}, {
    prevblockhash?: unknown;
    innerlite?: unknown;
    innerresthash?: unknown;
}>;
export declare const RpcBlockRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcBlockResponseSchema: z.ZodObject<{
    author: z.ZodUnknown;
    chunks: z.ZodArray<z.ZodUnknown, "many">;
    header: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    chunks: unknown[];
    author?: unknown;
    header?: unknown;
}, {
    chunks: unknown[];
    author?: unknown;
    header?: unknown;
}>;
export declare const RpcChunkRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcChunkResponseSchema: z.ZodObject<{
    author: z.ZodUnknown;
    header: z.ZodUnknown;
    receipts: z.ZodArray<z.ZodUnknown, "many">;
    transactions: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    receipts: unknown[];
    transactions: unknown[];
    author?: unknown;
    header?: unknown;
}, {
    receipts: unknown[];
    transactions: unknown[];
    author?: unknown;
    header?: unknown;
}>;
export declare const RpcLightClientBlockProofRequestSchema: z.ZodObject<{
    blockhash: z.ZodOptional<z.ZodUnknown>;
    lightclienthead: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    blockhash?: unknown;
    lightclienthead?: unknown;
}, {
    blockhash?: unknown;
    lightclienthead?: unknown;
}>;
export declare const RpcLightClientBlockProofResponseSchema: z.ZodObject<{
    blockheaderlite: z.ZodOptional<z.ZodUnknown>;
    blockproof: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    blockheaderlite?: unknown;
    blockproof?: unknown[] | undefined;
}, {
    blockheaderlite?: unknown;
    blockproof?: unknown[] | undefined;
}>;
export declare const RpcLightClientNextBlockRequestSchema: z.ZodObject<{
    lastblockhash: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    lastblockhash?: unknown;
}, {
    lastblockhash?: unknown;
}>;
export declare const RpcLightClientNextBlockResponseSchema: z.ZodObject<{
    approvalsafternext: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    innerlite: z.ZodOptional<z.ZodUnknown>;
    innerresthash: z.ZodOptional<z.ZodUnknown>;
    nextblockinnerhash: z.ZodOptional<z.ZodUnknown>;
    nextbps: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    prevblockhash: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    prevblockhash?: unknown;
    innerlite?: unknown;
    innerresthash?: unknown;
    approvalsafternext?: unknown[] | undefined;
    nextblockinnerhash?: unknown;
    nextbps?: unknown[] | undefined;
}, {
    prevblockhash?: unknown;
    innerlite?: unknown;
    innerresthash?: unknown;
    approvalsafternext?: unknown[] | undefined;
    nextblockinnerhash?: unknown;
    nextbps?: unknown[] | undefined;
}>;
export declare const RpcStateChangesInBlockByTypeRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcStateChangesInBlockByTypeResponseSchema: z.ZodObject<{
    blockhash: z.ZodOptional<z.ZodUnknown>;
    changes: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    changes: unknown[];
    blockhash?: unknown;
}, {
    changes: unknown[];
    blockhash?: unknown;
}>;
export declare const RpcStateChangesInBlockRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcStateChangesInBlockResponseSchema: z.ZodObject<{
    blockhash: z.ZodOptional<z.ZodUnknown>;
    changes: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    changes: unknown[];
    blockhash?: unknown;
}, {
    changes: unknown[];
    blockhash?: unknown;
}>;
