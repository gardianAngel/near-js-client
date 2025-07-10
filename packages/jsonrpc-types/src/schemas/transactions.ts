/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';

export const ActionSchema = z.unknown();

export const ActionCreationConfigViewSchema = z.object({
  addKeyCost: z.unknown().optional(),
  createAccountCost: z.unknown().optional(),
  delegateCost: z.unknown().optional(),
  deleteAccountCost: z.unknown().optional(),
  deleteKeyCost: z.unknown().optional(),
  deployContractCost: z.unknown().optional(),
  deployContractCostPerByte: z.unknown().optional(),
  functionCallCost: z.unknown().optional(),
  functionCallCostPerByte: z.unknown().optional(),
  stakeCost: z.unknown().optional(),
  transferCost: z.unknown().optional()
});

export const ActionErrorSchema = z.object({
  index: z.number().optional(),
  kind: z.unknown()
});

export const ActionErrorKindSchema = z.unknown();

export const ActionViewSchema = z.unknown();

export const ActionsValidationErrorSchema = z.unknown();

export const AddKeyActionSchema = z.object({
  accessKey: z.unknown().optional(),
  publicKey: z.unknown().optional()
});

export const CreateAccountActionSchema = z.record(z.unknown());

export const DataReceiptCreationConfigViewSchema = z.object({
  baseCost: z.unknown().optional(),
  costPerByte: z.unknown().optional()
});

export const DelegateActionSchema = z.object({
  actions: z.array(z.unknown()),
  maxBlockHeight: z.number().optional(),
  nonce: z.number(),
  publicKey: z.unknown().optional(),
  receiverId: z.unknown().optional(),
  senderId: z.unknown().optional()
});

export const DeleteAccountActionSchema = z.object({
  beneficiaryId: z.unknown().optional()
});

export const DeleteKeyActionSchema = z.object({
  publicKey: z.unknown().optional()
});

export const DeployContractActionSchema = z.object({
  code: z.string()
});

export const DeployGlobalContractActionSchema = z.object({
  code: z.string(),
  deployMode: z.unknown().optional()
});

export const FinalExecutionOutcomeWithReceiptViewSchema = z.object({
  receipts: z.array(z.unknown()),
  receiptsOutcome: z.array(z.unknown()).optional(),
  status: z.unknown(),
  transaction: z.unknown(),
  transactionOutcome: z.unknown().optional()
});

export const FunctionCallActionSchema = z.object({
  args: z.string(),
  deposit: z.string(),
  gas: z.number(),
  methodName: z.string().optional()
});

export const InvalidTxErrorSchema = z.unknown();

export const JsonRpcRequestForEXPERIMENTALReceiptSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_receipt']),
  params: z.unknown()
});

export const JsonRpcRequestForEXPERIMENTALTxStatusSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_tx_status']),
  params: z.unknown()
});

export const JsonRpcRequestForBroadcastTxAsyncSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['broadcast_tx_async']),
  params: z.unknown()
});

export const JsonRpcRequestForBroadcastTxCommitSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['broadcast_tx_commit']),
  params: z.unknown()
});

export const JsonRpcRequestForSendTxSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['send_tx']),
  params: z.unknown()
});

export const JsonRpcRequestForTxSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['tx']),
  params: z.unknown()
});

export const JsonRpcResponseForRpcReceiptResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseForRpcTransactionResponseAndRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const NonDelegateActionSchema = z.unknown();

export const ReceiptEnumViewSchema = z.unknown();

export const ReceiptValidationErrorSchema = z.unknown();

export const ReceiptViewSchema = z.object({
  predecessorId: z.unknown().optional(),
  priority: z.number().optional(),
  receipt: z.unknown(),
  receiptId: z.unknown().optional(),
  receiverId: z.unknown().optional()
});

export const RpcReceiptRequestSchema = z.object({
  receiptId: z.unknown().optional()
});

export const RpcReceiptResponseSchema = z.object({
  predecessorId: z.unknown().optional(),
  priority: z.number().optional(),
  receipt: z.unknown(),
  receiptId: z.unknown().optional(),
  receiverId: z.unknown().optional()
});

export const RpcSendTransactionRequestSchema = z.object({
  signedTxBase64: z.unknown().optional(),
  waitUntil: z.unknown().optional()
});

export const RpcTransactionResponseSchema = z.object({
  finalExecutionStatus: z.unknown().optional()
});

export const RpcTransactionStatusRequestSchema = z.object({
  waitUntil: z.unknown().optional()
});

export const SignedDelegateActionSchema = z.object({
  delegateAction: z.unknown().optional(),
  signature: z.unknown()
});

export const SignedTransactionSchema = z.string();

export const SignedTransactionViewSchema = z.object({
  actions: z.array(z.unknown()),
  hash: z.unknown(),
  nonce: z.number(),
  priorityFee: z.number().optional(),
  publicKey: z.unknown().optional(),
  receiverId: z.unknown().optional(),
  signature: z.unknown(),
  signerId: z.unknown().optional()
});

export const StakeActionSchema = z.object({
  publicKey: z.unknown().optional(),
  stake: z.string()
});

export const TransferActionSchema = z.object({
  deposit: z.string()
});

export const TxExecutionErrorSchema = z.unknown();

export const TxExecutionStatusSchema = z.unknown();

export const UseGlobalContractActionSchema = z.object({
  contractIdentifier: z.unknown().optional()
});
