/**
 * Zod schemas for common NEAR Protocol JSON-RPC types
 */

import { z } from 'zod';

export const FinalitySchema = z.enum(['final', 'near-final', 'optimistic']);

export const BlockIdSchema = z.union([z.string(), z.number()]);

export const BlockReferenceSchema = z.object({
  blockId: BlockIdSchema.optional(),
  finality: FinalitySchema.optional(),
});

export const JsonRpcRequestSchema = z.object({
  jsonrpc: z.literal('2.0'),
  method: z.string(),
  params: z.unknown(),
  id: z.union([z.string(), z.number()]),
});

export const JsonRpcErrorSchema = z.object({
  code: z.number(),
  message: z.string(),
  data: z.unknown().optional(),
});

export const JsonRpcResponseSchema = z.object({
  jsonrpc: z.literal('2.0'),
  result: z.unknown().optional(),
  error: JsonRpcErrorSchema.optional(),
  id: z.union([z.string(), z.number()]),
});

export const PublicKeySchema = z.object({
  keyType: z.number(),
  data: z.string(),
});

export const SignatureSchema = z.object({
  keyType: z.number(),
  data: z.string(),
});

export const MerkleProofSchema = z.object({
  hash: z.string(),
  direction: z.enum(['Left', 'Right']),
});

export const ValidatorStakeSchema = z.object({
  accountId: z.string(),
  publicKey: PublicKeySchema,
  stake: z.string(),
});

export const ChunkHeaderSchema = z.object({
  chunkHash: z.string(),
  prevBlockHash: z.string(),
  outcomeRoot: z.string(),
  prevStateRoot: z.string(),
  encodedMerkleRoot: z.string(),
  encodedLength: z.number(),
  heightCreated: z.number(),
  heightIncluded: z.number(),
  shardId: z.number(),
  gasUsed: z.number(),
  gasLimit: z.number(),
  rentPaid: z.string(),
  validatorReward: z.string(),
  balanceBurnt: z.string(),
  outgoingReceiptsRoot: z.string(),
  txRoot: z.string(),
  validatorProposals: z.array(ValidatorStakeSchema),
  signature: SignatureSchema,
});

export const ExecutionFailureSchema = z.object({
  error_message: z.string(),
  error_type: z.string(),
});

export const ExecutionStatusSchema = z.union([
  z.object({ Unknown: z.record(z.never()) }),
  z.object({ Failure: ExecutionFailureSchema }),
  z.object({ SuccessValue: z.string() }),
  z.object({ SuccessReceiptId: z.string() }),
]);

export const ExecutionOutcomeSchema = z.object({
  logs: z.array(z.string()),
  receiptIds: z.array(z.string()),
  gasUsed: z.number(),
  tokensBurnt: z.string(),
  executorId: z.string(),
  status: ExecutionStatusSchema,
});

export const ExecutionOutcomeWithIdSchema = z.object({
  id: z.string(),
  outcome: ExecutionOutcomeSchema,
  blockHash: z.string(),
  proof: z.array(MerkleProofSchema),
});
