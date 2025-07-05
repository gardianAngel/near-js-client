/**
 * Zod schemas for transaction-related NEAR Protocol JSON-RPC types
 */

import { z } from 'zod';
import { ExecutionOutcomeWithIdSchema, PublicKeySchema, SignatureSchema } from './common';
import { TransactionSchema, ReceiptSchema } from './blocks';

export const TransactionQuerySchema = z.object({
  transactionHash: z.string(),
  senderId: z.string(),
  waitUntil: z.enum(['NONE', 'INCLUDED', 'INCLUDED_FINAL', 'EXECUTED', 'FINAL']).optional(),
});

export const TransactionFailureSchema = z.object({
  error_message: z.string(),
  error_type: z.string(),
});

export const TransactionStatusSchema = z.union([
  z.object({ Unknown: z.record(z.never()) }),
  z.object({ Pending: z.record(z.never()) }),
  z.object({ Failure: TransactionFailureSchema }),
  z.object({ SuccessValue: z.string() }),
  z.object({ SuccessReceiptId: z.string() }),
]);

export const TransactionResponseSchema = z.object({
  status: TransactionStatusSchema,
  transaction: TransactionSchema,
  transactionOutcome: ExecutionOutcomeWithIdSchema,
  receiptsOutcome: z.array(ExecutionOutcomeWithIdSchema),
});

export const SendTransactionRequestSchema = z.object({
  signedTransaction: z.string(),
});

export const SendTransactionResponseSchema = z.object({
  transactionHash: z.string(),
  status: TransactionStatusSchema,
});

export const ReceiptQuerySchema = z.object({
  receiptId: z.string(),
});

export const ReceiptResponseSchema = z.object({
  receipt: ReceiptSchema,
  blockHash: z.string(),
  blockHeight: z.number(),
});

export const TransactionReceiptQuerySchema = z.object({
  transactionHash: z.string(),
  senderId: z.string(),
});

export const TransactionReceiptResponseSchema = z.object({
  receipts: z.array(ReceiptSchema),
});

export const SignedTransactionSchema = z.object({
  transaction: TransactionSchema,
  signature: SignatureSchema,
});

export const BroadcastTransactionRequestSchema = z.object({
  signedTransaction: z.string(),
});

export const BroadcastTransactionResponseSchema = z.object({
  transactionHash: z.string(),
  status: TransactionStatusSchema,
});

export const TransactionDetailsSchema = z.object({
  hash: z.string(),
  nonce: z.number(),
  signerId: z.string(),
  receiverId: z.string(),
  publicKey: PublicKeySchema,
  signature: SignatureSchema,
  blockHash: z.string(),
  blockHeight: z.number(),
  transactionIndex: z.number(),
});
