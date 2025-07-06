/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';

export const BlockHeaderInnerLiteViewSchema = z.object({
  blockmerkleroot: z.unknown().optional(),
  epochid: z.unknown().optional(),
  height: z.number(),
  nextbphash: z.unknown().optional(),
  nextepochid: z.unknown().optional(),
  outcomeroot: z.unknown().optional(),
  prevstateroot: z.unknown().optional(),
  timestamp: z.number(),
  timestampnanosec: z.string().optional()
});

export const BlockHeaderViewSchema = z.object({
  approvals: z.array(z.unknown()),
  blockbodyhash: z.unknown().optional(),
  blockmerkleroot: z.unknown().optional(),
  blockordinal: z.number().optional(),
  challengesresult: z.array(z.unknown()).optional(),
  challengesroot: z.unknown().optional(),
  chunkendorsements: z.array(z.array(z.number())).optional(),
  chunkheadersroot: z.unknown().optional(),
  chunkmask: z.array(z.boolean()).optional(),
  chunkreceiptsroot: z.unknown().optional(),
  chunktxroot: z.unknown().optional(),
  chunksincluded: z.number().optional(),
  epochid: z.unknown().optional(),
  epochsyncdatahash: z.unknown().optional(),
  gasprice: z.string().optional(),
  hash: z.unknown(),
  height: z.number(),
  lastdsfinalblock: z.unknown().optional(),
  lastfinalblock: z.unknown().optional(),
  latestprotocolversion: z.number().optional(),
  nextbphash: z.unknown().optional(),
  nextepochid: z.unknown().optional(),
  outcomeroot: z.unknown().optional(),
  prevhash: z.unknown().optional(),
  prevheight: z.number().optional(),
  prevstateroot: z.unknown().optional(),
  randomvalue: z.unknown().optional(),
  rentpaid: z.string().optional(),
  signature: z.unknown(),
  timestamp: z.number(),
  timestampnanosec: z.string().optional(),
  totalsupply: z.string().optional(),
  validatorproposals: z.array(z.unknown()).optional(),
  validatorreward: z.string().optional()
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
  balanceburnt: z.string().optional(),
  bandwidthrequests: z.unknown().optional(),
  chunkhash: z.unknown().optional(),
  congestioninfo: z.unknown().optional(),
  encodedlength: z.number().optional(),
  encodedmerkleroot: z.unknown().optional(),
  gaslimit: z.number().optional(),
  gasused: z.number().optional(),
  heightcreated: z.number().optional(),
  heightincluded: z.number().optional(),
  outcomeroot: z.unknown().optional(),
  outgoingreceiptsroot: z.unknown().optional(),
  prevblockhash: z.unknown().optional(),
  prevstateroot: z.unknown().optional(),
  rentpaid: z.string().optional(),
  shardid: z.unknown().optional(),
  signature: z.unknown(),
  txroot: z.unknown().optional(),
  validatorproposals: z.array(z.unknown()).optional(),
  validatorreward: z.string().optional()
});

export const JsonRpcRequestforEXPERIMENTALchangesinblockSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_changes_in_block']),
  params: z.unknown()
});

export const JsonRpcRequestforEXPERIMENTALlightclientblockproofSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_light_client_block_proof']),
  params: z.unknown()
});

export const JsonRpcRequestforblockSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['block']),
  params: z.unknown()
});

export const JsonRpcRequestforchunkSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['chunk']),
  params: z.unknown()
});

export const JsonRpcRequestfornextlightclientblockSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['next_light_client_block']),
  params: z.unknown()
});

export const JsonRpcResponseforRpcBlockResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcChunkResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcLightClientBlockProofResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcLightClientNextBlockResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcStateChangesInBlockByTypeResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcStateChangesInBlockResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const LightClientBlockLiteViewSchema = z.object({
  innerlite: z.unknown().optional(),
  innerresthash: z.unknown().optional(),
  prevblockhash: z.unknown().optional()
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
  blockhash: z.unknown().optional(),
  lightclienthead: z.unknown().optional()
});

export const RpcLightClientBlockProofResponseSchema = z.object({
  blockheaderlite: z.unknown().optional(),
  blockproof: z.array(z.unknown()).optional()
});

export const RpcLightClientNextBlockRequestSchema = z.object({
  lastblockhash: z.unknown().optional()
});

export const RpcLightClientNextBlockResponseSchema = z.object({
  approvalsafternext: z.array(z.unknown()).optional(),
  innerlite: z.unknown().optional(),
  innerresthash: z.unknown().optional(),
  nextblockinnerhash: z.unknown().optional(),
  nextbps: z.array(z.unknown()).optional(),
  prevblockhash: z.unknown().optional()
});

export const RpcStateChangesInBlockByTypeRequestSchema = z.record(z.unknown());

export const RpcStateChangesInBlockByTypeResponseSchema = z.object({
  blockhash: z.unknown().optional(),
  changes: z.array(z.unknown())
});

export const RpcStateChangesInBlockRequestSchema = z.record(z.unknown());

export const RpcStateChangesInBlockResponseSchema = z.object({
  blockhash: z.unknown().optional(),
  changes: z.array(z.unknown())
});
