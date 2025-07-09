"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcNextLightClientBlockResponseSchema = exports.RpcNextLightClientBlockRequestSchema = exports.RpcEXPERIMENTALLightClientBlockProofResponseSchema = exports.RpcEXPERIMENTALLightClientBlockProofRequestSchema = exports.RpcEXPERIMENTALChangesInBlockResponseSchema = exports.RpcEXPERIMENTALChangesInBlockRequestSchema = exports.RpcStateChangesInBlockResponseSchema = exports.RpcStateChangesInBlockRequestSchema = exports.RpcStateChangesInBlockByTypeResponseSchema = exports.RpcStateChangesInBlockByTypeRequestSchema = exports.RpcLightClientNextBlockResponseSchema = exports.RpcLightClientNextBlockRequestSchema = exports.RpcLightClientBlockProofResponseSchema = exports.RpcLightClientBlockProofRequestSchema = exports.RpcChunkResponseSchema = exports.RpcChunkRequestSchema = exports.RpcBlockResponseSchema = exports.RpcBlockRequestSchema = exports.LightClientBlockLiteViewSchema = exports.JsonRpcResponseForRpcStateChangesInBlockResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcStateChangesInBlockByTypeResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcLightClientNextBlockResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcLightClientBlockProofResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcChunkResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcBlockResponseAndRpcErrorSchema = exports.JsonRpcRequestForNextLightClientBlockSchema = exports.JsonRpcRequestForChunkSchema = exports.JsonRpcRequestForBlockSchema = exports.JsonRpcRequestForEXPERIMENTALLightClientBlockProofSchema = exports.JsonRpcRequestForEXPERIMENTALChangesInBlockSchema = exports.ChunkHeaderViewSchema = exports.ChunkDistributionUrisSchema = exports.ChunkDistributionNetworkConfigSchema = exports.BlockStatusViewSchema = exports.BlockIdSchema = exports.BlockHeaderViewSchema = exports.BlockHeaderInnerLiteViewSchema = void 0;
const zod_1 = require("zod");
exports.BlockHeaderInnerLiteViewSchema = zod_1.z.object({
    blockMerkleRoot: zod_1.z.unknown().optional(),
    epochId: zod_1.z.unknown().optional(),
    height: zod_1.z.number(),
    nextBpHash: zod_1.z.unknown().optional(),
    nextEpochId: zod_1.z.unknown().optional(),
    outcomeRoot: zod_1.z.unknown().optional(),
    prevStateRoot: zod_1.z.unknown().optional(),
    timestamp: zod_1.z.number(),
    timestampNanosec: zod_1.z.string().optional()
});
exports.BlockHeaderViewSchema = zod_1.z.object({
    approvals: zod_1.z.array(zod_1.z.unknown()),
    blockBodyHash: zod_1.z.unknown().optional(),
    blockMerkleRoot: zod_1.z.unknown().optional(),
    blockOrdinal: zod_1.z.number().optional(),
    challengesResult: zod_1.z.array(zod_1.z.unknown()).optional(),
    challengesRoot: zod_1.z.unknown().optional(),
    chunkEndorsements: zod_1.z.array(zod_1.z.array(zod_1.z.number())).optional(),
    chunkHeadersRoot: zod_1.z.unknown().optional(),
    chunkMask: zod_1.z.array(zod_1.z.boolean()).optional(),
    chunkReceiptsRoot: zod_1.z.unknown().optional(),
    chunkTxRoot: zod_1.z.unknown().optional(),
    chunksIncluded: zod_1.z.number().optional(),
    epochId: zod_1.z.unknown().optional(),
    epochSyncDataHash: zod_1.z.unknown().optional(),
    gasPrice: zod_1.z.string().optional(),
    hash: zod_1.z.unknown(),
    height: zod_1.z.number(),
    lastDsFinalBlock: zod_1.z.unknown().optional(),
    lastFinalBlock: zod_1.z.unknown().optional(),
    latestProtocolVersion: zod_1.z.number().optional(),
    nextBpHash: zod_1.z.unknown().optional(),
    nextEpochId: zod_1.z.unknown().optional(),
    outcomeRoot: zod_1.z.unknown().optional(),
    prevHash: zod_1.z.unknown().optional(),
    prevHeight: zod_1.z.number().optional(),
    prevStateRoot: zod_1.z.unknown().optional(),
    randomValue: zod_1.z.unknown().optional(),
    rentPaid: zod_1.z.string().optional(),
    signature: zod_1.z.unknown(),
    timestamp: zod_1.z.number(),
    timestampNanosec: zod_1.z.string().optional(),
    totalSupply: zod_1.z.string().optional(),
    validatorProposals: zod_1.z.array(zod_1.z.unknown()).optional(),
    validatorReward: zod_1.z.string().optional()
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
    balanceBurnt: zod_1.z.string().optional(),
    bandwidthRequests: zod_1.z.unknown().optional(),
    chunkHash: zod_1.z.unknown().optional(),
    congestionInfo: zod_1.z.unknown().optional(),
    encodedLength: zod_1.z.number().optional(),
    encodedMerkleRoot: zod_1.z.unknown().optional(),
    gasLimit: zod_1.z.number().optional(),
    gasUsed: zod_1.z.number().optional(),
    heightCreated: zod_1.z.number().optional(),
    heightIncluded: zod_1.z.number().optional(),
    outcomeRoot: zod_1.z.unknown().optional(),
    outgoingReceiptsRoot: zod_1.z.unknown().optional(),
    prevBlockHash: zod_1.z.unknown().optional(),
    prevStateRoot: zod_1.z.unknown().optional(),
    rentPaid: zod_1.z.string().optional(),
    shardId: zod_1.z.unknown().optional(),
    signature: zod_1.z.unknown(),
    txRoot: zod_1.z.unknown().optional(),
    validatorProposals: zod_1.z.array(zod_1.z.unknown()).optional(),
    validatorReward: zod_1.z.string().optional()
});
exports.JsonRpcRequestForEXPERIMENTALChangesInBlockSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_changes_in_block']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForEXPERIMENTALLightClientBlockProofSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_light_client_block_proof']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForBlockSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['block']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForChunkSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['chunk']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForNextLightClientBlockSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['next_light_client_block']),
    params: zod_1.z.unknown()
});
exports.JsonRpcResponseForRpcBlockResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcChunkResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcLightClientBlockProofResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcLightClientNextBlockResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcStateChangesInBlockByTypeResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcStateChangesInBlockResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.LightClientBlockLiteViewSchema = zod_1.z.object({
    innerLite: zod_1.z.unknown().optional(),
    innerRestHash: zod_1.z.unknown().optional(),
    prevBlockHash: zod_1.z.unknown().optional()
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
    blockHash: zod_1.z.unknown().optional(),
    lightClientHead: zod_1.z.unknown().optional()
});
exports.RpcLightClientBlockProofResponseSchema = zod_1.z.object({
    blockHeaderLite: zod_1.z.unknown().optional(),
    blockProof: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.RpcLightClientNextBlockRequestSchema = zod_1.z.object({
    lastBlockHash: zod_1.z.unknown().optional()
});
exports.RpcLightClientNextBlockResponseSchema = zod_1.z.object({
    approvalsAfterNext: zod_1.z.array(zod_1.z.unknown()).optional(),
    innerLite: zod_1.z.unknown().optional(),
    innerRestHash: zod_1.z.unknown().optional(),
    nextBlockInnerHash: zod_1.z.unknown().optional(),
    nextBps: zod_1.z.array(zod_1.z.unknown()).optional(),
    prevBlockHash: zod_1.z.unknown().optional()
});
exports.RpcStateChangesInBlockByTypeRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcStateChangesInBlockByTypeResponseSchema = zod_1.z.object({
    blockHash: zod_1.z.unknown().optional(),
    changes: zod_1.z.array(zod_1.z.unknown())
});
exports.RpcStateChangesInBlockRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcStateChangesInBlockResponseSchema = zod_1.z.object({
    blockHash: zod_1.z.unknown().optional(),
    changes: zod_1.z.array(zod_1.z.unknown())
});
// Schema aliases for client compatibility
exports.RpcEXPERIMENTALChangesInBlockRequestSchema = exports.RpcStateChangesInBlockRequestSchema;
exports.RpcEXPERIMENTALChangesInBlockResponseSchema = exports.RpcStateChangesInBlockResponseSchema;
exports.RpcEXPERIMENTALLightClientBlockProofRequestSchema = exports.RpcLightClientBlockProofRequestSchema;
exports.RpcEXPERIMENTALLightClientBlockProofResponseSchema = exports.RpcLightClientBlockProofResponseSchema;
exports.RpcNextLightClientBlockRequestSchema = exports.RpcLightClientNextBlockRequestSchema;
exports.RpcNextLightClientBlockResponseSchema = exports.RpcLightClientNextBlockResponseSchema;
