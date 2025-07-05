"use strict";
/**
 * Zod schemas for common NEAR Protocol JSON-RPC types
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutionOutcomeWithIdSchema = exports.ExecutionOutcomeSchema = exports.ExecutionStatusSchema = exports.ExecutionFailureSchema = exports.ChunkHeaderSchema = exports.ValidatorStakeSchema = exports.MerkleProofSchema = exports.SignatureSchema = exports.PublicKeySchema = exports.JsonRpcResponseSchema = exports.JsonRpcErrorSchema = exports.JsonRpcRequestSchema = exports.BlockReferenceSchema = exports.BlockIdSchema = exports.FinalitySchema = void 0;
const zod_1 = require("zod");
exports.FinalitySchema = zod_1.z.enum(['final', 'near-final', 'optimistic']);
exports.BlockIdSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number()]);
exports.BlockReferenceSchema = zod_1.z.object({
    blockId: exports.BlockIdSchema.optional(),
    finality: exports.FinalitySchema.optional(),
});
exports.JsonRpcRequestSchema = zod_1.z.object({
    jsonrpc: zod_1.z.literal('2.0'),
    method: zod_1.z.string(),
    params: zod_1.z.unknown(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
});
exports.JsonRpcErrorSchema = zod_1.z.object({
    code: zod_1.z.number(),
    message: zod_1.z.string(),
    data: zod_1.z.unknown().optional(),
});
exports.JsonRpcResponseSchema = zod_1.z.object({
    jsonrpc: zod_1.z.literal('2.0'),
    result: zod_1.z.unknown().optional(),
    error: exports.JsonRpcErrorSchema.optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
});
exports.PublicKeySchema = zod_1.z.object({
    keyType: zod_1.z.number(),
    data: zod_1.z.string(),
});
exports.SignatureSchema = zod_1.z.object({
    keyType: zod_1.z.number(),
    data: zod_1.z.string(),
});
exports.MerkleProofSchema = zod_1.z.object({
    hash: zod_1.z.string(),
    direction: zod_1.z.enum(['Left', 'Right']),
});
exports.ValidatorStakeSchema = zod_1.z.object({
    accountId: zod_1.z.string(),
    publicKey: exports.PublicKeySchema,
    stake: zod_1.z.string(),
});
exports.ChunkHeaderSchema = zod_1.z.object({
    chunkHash: zod_1.z.string(),
    prevBlockHash: zod_1.z.string(),
    outcomeRoot: zod_1.z.string(),
    prevStateRoot: zod_1.z.string(),
    encodedMerkleRoot: zod_1.z.string(),
    encodedLength: zod_1.z.number(),
    heightCreated: zod_1.z.number(),
    heightIncluded: zod_1.z.number(),
    shardId: zod_1.z.number(),
    gasUsed: zod_1.z.number(),
    gasLimit: zod_1.z.number(),
    rentPaid: zod_1.z.string(),
    validatorReward: zod_1.z.string(),
    balanceBurnt: zod_1.z.string(),
    outgoingReceiptsRoot: zod_1.z.string(),
    txRoot: zod_1.z.string(),
    validatorProposals: zod_1.z.array(exports.ValidatorStakeSchema),
    signature: exports.SignatureSchema,
});
exports.ExecutionFailureSchema = zod_1.z.object({
    error_message: zod_1.z.string(),
    error_type: zod_1.z.string(),
});
exports.ExecutionStatusSchema = zod_1.z.union([
    zod_1.z.object({ Unknown: zod_1.z.record(zod_1.z.never()) }),
    zod_1.z.object({ Failure: exports.ExecutionFailureSchema }),
    zod_1.z.object({ SuccessValue: zod_1.z.string() }),
    zod_1.z.object({ SuccessReceiptId: zod_1.z.string() }),
]);
exports.ExecutionOutcomeSchema = zod_1.z.object({
    logs: zod_1.z.array(zod_1.z.string()),
    receiptIds: zod_1.z.array(zod_1.z.string()),
    gasUsed: zod_1.z.number(),
    tokensBurnt: zod_1.z.string(),
    executorId: zod_1.z.string(),
    status: exports.ExecutionStatusSchema,
});
exports.ExecutionOutcomeWithIdSchema = zod_1.z.object({
    id: zod_1.z.string(),
    outcome: exports.ExecutionOutcomeSchema,
    blockHash: zod_1.z.string(),
    proof: zod_1.z.array(exports.MerkleProofSchema),
});
