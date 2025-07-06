"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcStateChangesInBlockResponseSchema = exports.RpcStateChangesInBlockRequestSchema = exports.RpcStateChangesInBlockByTypeResponseSchema = exports.RpcStateChangesInBlockByTypeRequestSchema = exports.RpcLightClientNextBlockResponseSchema = exports.RpcLightClientNextBlockRequestSchema = exports.RpcLightClientBlockProofResponseSchema = exports.RpcLightClientBlockProofRequestSchema = exports.RpcChunkResponseSchema = exports.RpcChunkRequestSchema = exports.RpcBlockResponseSchema = exports.RpcBlockRequestSchema = exports.LightClientBlockLiteViewSchema = exports.JsonRpcResponseforRpcStateChangesInBlockResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcStateChangesInBlockByTypeResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcLightClientNextBlockResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcLightClientBlockProofResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcChunkResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcBlockResponseandRpcErrorSchema = exports.JsonRpcRequestfornextlightclientblockSchema = exports.JsonRpcRequestforchunkSchema = exports.JsonRpcRequestforblockSchema = exports.JsonRpcRequestforEXPERIMENTALlightclientblockproofSchema = exports.JsonRpcRequestforEXPERIMENTALchangesinblockSchema = exports.ChunkHeaderViewSchema = exports.ChunkDistributionUrisSchema = exports.ChunkDistributionNetworkConfigSchema = exports.BlockStatusViewSchema = exports.BlockIdSchema = exports.BlockHeaderViewSchema = exports.BlockHeaderInnerLiteViewSchema = void 0;
const zod_1 = require("zod");
exports.BlockHeaderInnerLiteViewSchema = zod_1.z.object({
    blockmerkleroot: zod_1.z.unknown().optional(),
    epochid: zod_1.z.unknown().optional(),
    height: zod_1.z.number(),
    nextbphash: zod_1.z.unknown().optional(),
    nextepochid: zod_1.z.unknown().optional(),
    outcomeroot: zod_1.z.unknown().optional(),
    prevstateroot: zod_1.z.unknown().optional(),
    timestamp: zod_1.z.number(),
    timestampnanosec: zod_1.z.string().optional()
});
exports.BlockHeaderViewSchema = zod_1.z.object({
    approvals: zod_1.z.array(zod_1.z.unknown()),
    blockbodyhash: zod_1.z.unknown().optional(),
    blockmerkleroot: zod_1.z.unknown().optional(),
    blockordinal: zod_1.z.number().optional(),
    challengesresult: zod_1.z.array(zod_1.z.unknown()).optional(),
    challengesroot: zod_1.z.unknown().optional(),
    chunkendorsements: zod_1.z.array(zod_1.z.array(zod_1.z.number())).optional(),
    chunkheadersroot: zod_1.z.unknown().optional(),
    chunkmask: zod_1.z.array(zod_1.z.boolean()).optional(),
    chunkreceiptsroot: zod_1.z.unknown().optional(),
    chunktxroot: zod_1.z.unknown().optional(),
    chunksincluded: zod_1.z.number().optional(),
    epochid: zod_1.z.unknown().optional(),
    epochsyncdatahash: zod_1.z.unknown().optional(),
    gasprice: zod_1.z.string().optional(),
    hash: zod_1.z.unknown(),
    height: zod_1.z.number(),
    lastdsfinalblock: zod_1.z.unknown().optional(),
    lastfinalblock: zod_1.z.unknown().optional(),
    latestprotocolversion: zod_1.z.number().optional(),
    nextbphash: zod_1.z.unknown().optional(),
    nextepochid: zod_1.z.unknown().optional(),
    outcomeroot: zod_1.z.unknown().optional(),
    prevhash: zod_1.z.unknown().optional(),
    prevheight: zod_1.z.number().optional(),
    prevstateroot: zod_1.z.unknown().optional(),
    randomvalue: zod_1.z.unknown().optional(),
    rentpaid: zod_1.z.string().optional(),
    signature: zod_1.z.unknown(),
    timestamp: zod_1.z.number(),
    timestampnanosec: zod_1.z.string().optional(),
    totalsupply: zod_1.z.string().optional(),
    validatorproposals: zod_1.z.array(zod_1.z.unknown()).optional(),
    validatorreward: zod_1.z.string().optional()
});
exports.BlockIdSchema = zod_1.z.unknown();
exports.BlockStatusViewSchema = zod_1.z.object({
    hash: zod_1.z.unknown(),
    height: zod_1.z.number()
});
exports.ChunkDistributionNetworkConfigSchema = zod_1.z.object({
    enabled: zod_1.z.boolean(),
    uris: zod_1.z.unknown()
});
exports.ChunkDistributionUrisSchema = zod_1.z.object({
    get: zod_1.z.string(),
    set: zod_1.z.string()
});
exports.ChunkHeaderViewSchema = zod_1.z.object({
    balanceburnt: zod_1.z.string().optional(),
    bandwidthrequests: zod_1.z.unknown().optional(),
    chunkhash: zod_1.z.unknown().optional(),
    congestioninfo: zod_1.z.unknown().optional(),
    encodedlength: zod_1.z.number().optional(),
    encodedmerkleroot: zod_1.z.unknown().optional(),
    gaslimit: zod_1.z.number().optional(),
    gasused: zod_1.z.number().optional(),
    heightcreated: zod_1.z.number().optional(),
    heightincluded: zod_1.z.number().optional(),
    outcomeroot: zod_1.z.unknown().optional(),
    outgoingreceiptsroot: zod_1.z.unknown().optional(),
    prevblockhash: zod_1.z.unknown().optional(),
    prevstateroot: zod_1.z.unknown().optional(),
    rentpaid: zod_1.z.string().optional(),
    shardid: zod_1.z.unknown().optional(),
    signature: zod_1.z.unknown(),
    txroot: zod_1.z.unknown().optional(),
    validatorproposals: zod_1.z.array(zod_1.z.unknown()).optional(),
    validatorreward: zod_1.z.string().optional()
});
exports.JsonRpcRequestforEXPERIMENTALchangesinblockSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_changes_in_block']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforEXPERIMENTALlightclientblockproofSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_light_client_block_proof']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforblockSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['block']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforchunkSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['chunk']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestfornextlightclientblockSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['next_light_client_block']),
    params: zod_1.z.unknown()
});
exports.JsonRpcResponseforRpcBlockResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcChunkResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcLightClientBlockProofResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcLightClientNextBlockResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcStateChangesInBlockByTypeResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcStateChangesInBlockResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.LightClientBlockLiteViewSchema = zod_1.z.object({
    innerlite: zod_1.z.unknown().optional(),
    innerresthash: zod_1.z.unknown().optional(),
    prevblockhash: zod_1.z.unknown().optional()
});
exports.RpcBlockRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcBlockResponseSchema = zod_1.z.object({
    author: zod_1.z.unknown(),
    chunks: zod_1.z.array(zod_1.z.unknown()),
    header: zod_1.z.unknown()
});
exports.RpcChunkRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcChunkResponseSchema = zod_1.z.object({
    author: zod_1.z.unknown(),
    header: zod_1.z.unknown(),
    receipts: zod_1.z.array(zod_1.z.unknown()),
    transactions: zod_1.z.array(zod_1.z.unknown())
});
exports.RpcLightClientBlockProofRequestSchema = zod_1.z.object({
    blockhash: zod_1.z.unknown().optional(),
    lightclienthead: zod_1.z.unknown().optional()
});
exports.RpcLightClientBlockProofResponseSchema = zod_1.z.object({
    blockheaderlite: zod_1.z.unknown().optional(),
    blockproof: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.RpcLightClientNextBlockRequestSchema = zod_1.z.object({
    lastblockhash: zod_1.z.unknown().optional()
});
exports.RpcLightClientNextBlockResponseSchema = zod_1.z.object({
    approvalsafternext: zod_1.z.array(zod_1.z.unknown()).optional(),
    innerlite: zod_1.z.unknown().optional(),
    innerresthash: zod_1.z.unknown().optional(),
    nextblockinnerhash: zod_1.z.unknown().optional(),
    nextbps: zod_1.z.array(zod_1.z.unknown()).optional(),
    prevblockhash: zod_1.z.unknown().optional()
});
exports.RpcStateChangesInBlockByTypeRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcStateChangesInBlockByTypeResponseSchema = zod_1.z.object({
    blockhash: zod_1.z.unknown().optional(),
    changes: zod_1.z.array(zod_1.z.unknown())
});
exports.RpcStateChangesInBlockRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcStateChangesInBlockResponseSchema = zod_1.z.object({
    blockhash: zod_1.z.unknown().optional(),
    changes: zod_1.z.array(zod_1.z.unknown())
});
