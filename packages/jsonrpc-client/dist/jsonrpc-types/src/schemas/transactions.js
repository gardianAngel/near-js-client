"use strict";
/**
 * Zod schemas for transaction-related NEAR Protocol JSON-RPC types
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDetailsSchema = exports.BroadcastTransactionResponseSchema = exports.BroadcastTransactionRequestSchema = exports.SignedTransactionSchema = exports.TransactionReceiptResponseSchema = exports.TransactionReceiptQuerySchema = exports.ReceiptResponseSchema = exports.ReceiptQuerySchema = exports.SendTransactionResponseSchema = exports.SendTransactionRequestSchema = exports.TransactionResponseSchema = exports.TransactionStatusSchema = exports.TransactionFailureSchema = exports.TransactionQuerySchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
const blocks_1 = require("./blocks");
exports.TransactionQuerySchema = zod_1.z.object({
    transactionHash: zod_1.z.string(),
    senderId: zod_1.z.string(),
    waitUntil: zod_1.z.enum(['NONE', 'INCLUDED', 'INCLUDED_FINAL', 'EXECUTED', 'FINAL']).optional(),
});
exports.TransactionFailureSchema = zod_1.z.object({
    error_message: zod_1.z.string(),
    error_type: zod_1.z.string(),
});
exports.TransactionStatusSchema = zod_1.z.union([
    zod_1.z.object({ Unknown: zod_1.z.record(zod_1.z.never()) }),
    zod_1.z.object({ Pending: zod_1.z.record(zod_1.z.never()) }),
    zod_1.z.object({ Failure: exports.TransactionFailureSchema }),
    zod_1.z.object({ SuccessValue: zod_1.z.string() }),
    zod_1.z.object({ SuccessReceiptId: zod_1.z.string() }),
]);
exports.TransactionResponseSchema = zod_1.z.object({
    status: exports.TransactionStatusSchema,
    transaction: blocks_1.TransactionSchema,
    transactionOutcome: common_1.ExecutionOutcomeWithIdSchema,
    receiptsOutcome: zod_1.z.array(common_1.ExecutionOutcomeWithIdSchema),
});
exports.SendTransactionRequestSchema = zod_1.z.object({
    signedTransaction: zod_1.z.string(),
});
exports.SendTransactionResponseSchema = zod_1.z.object({
    transactionHash: zod_1.z.string(),
    status: exports.TransactionStatusSchema,
});
exports.ReceiptQuerySchema = zod_1.z.object({
    receiptId: zod_1.z.string(),
});
exports.ReceiptResponseSchema = zod_1.z.object({
    receipt: blocks_1.ReceiptSchema,
    blockHash: zod_1.z.string(),
    blockHeight: zod_1.z.number(),
});
exports.TransactionReceiptQuerySchema = zod_1.z.object({
    transactionHash: zod_1.z.string(),
    senderId: zod_1.z.string(),
});
exports.TransactionReceiptResponseSchema = zod_1.z.object({
    receipts: zod_1.z.array(blocks_1.ReceiptSchema),
});
exports.SignedTransactionSchema = zod_1.z.object({
    transaction: blocks_1.TransactionSchema,
    signature: common_1.SignatureSchema,
});
exports.BroadcastTransactionRequestSchema = zod_1.z.object({
    signedTransaction: zod_1.z.string(),
});
exports.BroadcastTransactionResponseSchema = zod_1.z.object({
    transactionHash: zod_1.z.string(),
    status: exports.TransactionStatusSchema,
});
exports.TransactionDetailsSchema = zod_1.z.object({
    hash: zod_1.z.string(),
    nonce: zod_1.z.number(),
    signerId: zod_1.z.string(),
    receiverId: zod_1.z.string(),
    publicKey: common_1.PublicKeySchema,
    signature: common_1.SignatureSchema,
    blockHash: zod_1.z.string(),
    blockHeight: zod_1.z.number(),
    transactionIndex: zod_1.z.number(),
});
