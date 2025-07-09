/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';

export const BlockHeaderInnerLiteViewSchema = z.object({
  blockMerkleRoot: z.unknown().optional(),
  epochId: z.unknown().optional(),
  height: z.number(),
  nextBpHash: z.unknown().optional(),
  nextEpochId: z.unknown().optional(),
  outcomeRoot: z.unknown().optional(),
  prevStateRoot: z.unknown().optional(),
  timestamp: z.number(),
  timestampNanosec: z.string().optional()
});

export const BlockHeaderViewSchema = z.object({
  approvals: z.array(z.unknown()),
  blockBodyHash: z.unknown().optional(),
  blockMerkleRoot: z.unknown().optional(),
  blockOrdinal: z.number().optional(),
  challengesResult: z.array(z.unknown()).optional(),
  challengesRoot: z.unknown().optional(),
  chunkEndorsements: z.array(z.array(z.number())).optional(),
  chunkHeadersRoot: z.unknown().optional(),
  chunkMask: z.array(z.boolean()).optional(),
  chunkReceiptsRoot: z.unknown().optional(),
  chunkTxRoot: z.unknown().optional(),
  chunksIncluded: z.number().optional(),
  epochId: z.unknown().optional(),
  epochSyncDataHash: z.unknown().optional(),
  gasPrice: z.string().optional(),
  hash: z.unknown(),
  height: z.number(),
  lastDsFinalBlock: z.unknown().optional(),
  lastFinalBlock: z.unknown().optional(),
  latestProtocolVersion: z.number().optional(),
  nextBpHash: z.unknown().optional(),
  nextEpochId: z.unknown().optional(),
  outcomeRoot: z.unknown().optional(),
  prevHash: z.unknown().optional(),
  prevHeight: z.number().optional(),
  prevStateRoot: z.unknown().optional(),
  randomValue: z.unknown().optional(),
  rentPaid: z.string().optional(),
  signature: z.unknown(),
  timestamp: z.number(),
  timestampNanosec: z.string().optional(),
  totalSupply: z.string().optional(),
  validatorProposals: z.array(z.unknown()).optional(),
  validatorReward: z.string().optional()
});

export const BlockIdSchema = z.unknown();

export const BlockStatusViewSchema = z.object({
  hash: z.unknown(),
  height: z.number()
});

export const ChunkDistributionNetworkConfigSchema = z.object({
  enabled: z.boolean(),
  uris: z.unknown()
});

export const ChunkDistributionUrisSchema = z.object({
  get: z.string(),
  set: z.string()
});

export const ChunkHeaderViewSchema = z.object({
  balanceBurnt: z.string().optional(),
  bandwidthRequests: z.unknown().optional(),
  chunkHash: z.unknown().optional(),
  congestionInfo: z.unknown().optional(),
  encodedLength: z.number().optional(),
  encodedMerkleRoot: z.unknown().optional(),
  gasLimit: z.number().optional(),
  gasUsed: z.number().optional(),
  heightCreated: z.number().optional(),
  heightIncluded: z.number().optional(),
  outcomeRoot: z.unknown().optional(),
  outgoingReceiptsRoot: z.unknown().optional(),
  prevBlockHash: z.unknown().optional(),
  prevStateRoot: z.unknown().optional(),
  rentPaid: z.string().optional(),
  shardId: z.unknown().optional(),
  signature: z.unknown(),
  txRoot: z.unknown().optional(),
  validatorProposals: z.array(z.unknown()).optional(),
  validatorReward: z.string().optional()
});

export const JsonRpcRequestForEXPERIMENTALChangesInBlockSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_changes_in_block']),
  params: z.unknown()
});

export const JsonRpcRequestForEXPERIMENTALLightClientBlockProofSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_light_client_block_proof']),
  params: z.unknown()
});

export const JsonRpcRequestForBlockSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['block']),
  params: z.unknown()
});

export const JsonRpcRequestForChunkSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['chunk']),
  params: z.unknown()
});

export const JsonRpcRequestForNextLightClientBlockSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['next_light_client_block']),
  params: z.unknown()
});

export const JsonRpcResponseForRpcBlockResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcChunkResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcLightClientBlockProofResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcLightClientNextBlockResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcStateChangesInBlockByTypeResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcStateChangesInBlockResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const LightClientBlockLiteViewSchema = z.object({
  innerLite: z.unknown().optional(),
  innerRestHash: z.unknown().optional(),
  prevBlockHash: z.unknown().optional()
});

export const RpcBlockRequestSchema = z.record(z.unknown());

export const RpcBlockResponseSchema = z.object({
  author: z.unknown(),
  chunks: z.array(z.unknown()),
  header: z.unknown()
});

export const RpcChunkRequestSchema = z.record(z.unknown());

export const RpcChunkResponseSchema = z.object({
  author: z.unknown(),
  header: z.unknown(),
  receipts: z.array(z.unknown()),
  transactions: z.array(z.unknown())
});

export const RpcLightClientBlockProofRequestSchema = z.object({
  blockHash: z.unknown().optional(),
  lightClientHead: z.unknown().optional()
});

export const RpcLightClientBlockProofResponseSchema = z.object({
  blockHeaderLite: z.unknown().optional(),
  blockProof: z.array(z.unknown()).optional()
});

export const RpcLightClientNextBlockRequestSchema = z.object({
  lastBlockHash: z.unknown().optional()
});

export const RpcLightClientNextBlockResponseSchema = z.object({
  approvalsAfterNext: z.array(z.unknown()).optional(),
  innerLite: z.unknown().optional(),
  innerRestHash: z.unknown().optional(),
  nextBlockInnerHash: z.unknown().optional(),
  nextBps: z.array(z.unknown()).optional(),
  prevBlockHash: z.unknown().optional()
});

export const RpcStateChangesInBlockByTypeRequestSchema = z.record(z.unknown());

export const RpcStateChangesInBlockByTypeResponseSchema = z.object({
  blockHash: z.unknown().optional(),
  changes: z.array(z.unknown())
});

export const RpcStateChangesInBlockRequestSchema = z.record(z.unknown());

export const RpcStateChangesInBlockResponseSchema = z.object({
  blockHash: z.unknown().optional(),
  changes: z.array(z.unknown())
});

// Schema aliases for client compatibility
export const RpcEXPERIMENTALChangesInBlockRequestSchema = RpcStateChangesInBlockRequestSchema;
export const RpcEXPERIMENTALChangesInBlockResponseSchema = RpcStateChangesInBlockResponseSchema;
export const RpcEXPERIMENTALLightClientBlockProofRequestSchema = RpcLightClientBlockProofRequestSchema;
export const RpcEXPERIMENTALLightClientBlockProofResponseSchema = RpcLightClientBlockProofResponseSchema;
export const RpcNextLightClientBlockRequestSchema = RpcLightClientNextBlockRequestSchema;
export const RpcNextLightClientBlockResponseSchema = RpcLightClientNextBlockResponseSchema;
