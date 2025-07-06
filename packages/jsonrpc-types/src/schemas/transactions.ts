/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';

export const ActionSchema = z.unknown();

export const ActionCreationConfigViewSchema = z.object({
  addkeycost: z.unknown().optional(),
  createaccountcost: z.unknown().optional(),
  delegatecost: z.unknown().optional(),
  deleteaccountcost: z.unknown().optional(),
  deletekeycost: z.unknown().optional(),
  deploycontractcost: z.unknown().optional(),
  deploycontractcostperbyte: z.unknown().optional(),
  functioncallcost: z.unknown().optional(),
  functioncallcostperbyte: z.unknown().optional(),
  stakecost: z.unknown().optional(),
  transfercost: z.unknown().optional()
});

export const ActionErrorSchema = z.object({
  index: z.number().optional(),
  kind: z.unknown()
});

export const ActionErrorKindSchema = z.unknown();

export const ActionViewSchema = z.unknown();

export const ActionsValidationErrorSchema = z.unknown();

export const AddKeyActionSchema = z.object({
  accesskey: z.unknown().optional(),
  publickey: z.unknown().optional()
});

export const CreateAccountActionSchema = z.record(z.unknown());

export const DataReceiptCreationConfigViewSchema = z.object({
  basecost: z.unknown().optional(),
  costperbyte: z.unknown().optional()
});

export const DelegateActionSchema = z.object({
  actions: z.array(z.unknown()),
  maxblockheight: z.number().optional(),
  nonce: z.number(),
  publickey: z.unknown().optional(),
  receiverid: z.unknown().optional(),
  senderid: z.unknown().optional()
});

export const DeleteAccountActionSchema = z.object({
  beneficiaryid: z.unknown().optional()
});

export const DeleteKeyActionSchema = z.object({
  publickey: z.unknown().optional()
});

export const DeployContractActionSchema = z.object({
  code: z.string()
});

export const DeployGlobalContractActionSchema = z.object({
  code: z.string(),
  deploymode: z.unknown().optional()
});

export const FinalExecutionOutcomeWithReceiptViewSchema = z.object({
  receipts: z.array(z.unknown()),
  receiptsoutcome: z.array(z.unknown()).optional(),
  status: z.unknown(),
  transaction: z.unknown(),
  transactionoutcome: z.unknown().optional()
});

export const FunctionCallActionSchema = z.object({
  args: z.string(),
  deposit: z.string(),
  gas: z.number(),
  methodname: z.string().optional()
});

export const InvalidTxErrorSchema = z.unknown();

export const JsonRpcRequestforEXPERIMENTALreceiptSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_receipt']),
  params: z.unknown()
});

export const JsonRpcRequestforEXPERIMENTALtxstatusSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_tx_status']),
  params: z.unknown()
});

export const JsonRpcRequestforbroadcasttxasyncSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['broadcast_tx_async']),
  params: z.unknown()
});

export const JsonRpcRequestforbroadcasttxcommitSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['broadcast_tx_commit']),
  params: z.unknown()
});

export const JsonRpcRequestforsendtxSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['send_tx']),
  params: z.unknown()
});

export const JsonRpcRequestfortxSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['tx']),
  params: z.unknown()
});

export const JsonRpcResponseforRpcReceiptResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcTransactionResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const NonDelegateActionSchema = z.unknown();

export const ReceiptEnumViewSchema = z.unknown();

export const ReceiptValidationErrorSchema = z.unknown();

export const ReceiptViewSchema = z.object({
  predecessorid: z.unknown().optional(),
  priority: z.number().optional(),
  receipt: z.unknown(),
  receiptid: z.unknown().optional(),
  receiverid: z.unknown().optional()
});

export const RpcReceiptRequestSchema = z.object({
  receiptid: z.unknown().optional()
});

export const RpcReceiptResponseSchema = z.object({
  predecessorid: z.unknown().optional(),
  priority: z.number().optional(),
  receipt: z.unknown(),
  receiptid: z.unknown().optional(),
  receiverid: z.unknown().optional()
});

export const RpcSendTransactionRequestSchema = z.object({
  signedtxbase64: z.unknown().optional(),
  waituntil: z.unknown().optional()
});

export const RpcTransactionResponseSchema = z.object({
  finalexecutionstatus: z.unknown().optional()
});

export const RpcTransactionStatusRequestSchema = z.object({
  waituntil: z.unknown().optional()
});

export const SignedDelegateActionSchema = z.object({
  delegateaction: z.unknown().optional(),
  signature: z.unknown()
});

export const SignedTransactionSchema = z.string();

export const SignedTransactionViewSchema = z.object({
  actions: z.array(z.unknown()),
  hash: z.unknown(),
  nonce: z.number(),
  priorityfee: z.number().optional(),
  publickey: z.unknown().optional(),
  receiverid: z.unknown().optional(),
  signature: z.unknown(),
  signerid: z.unknown().optional()
});

export const StakeActionSchema = z.object({
  publickey: z.unknown().optional(),
  stake: z.string()
});

export const TransferActionSchema = z.object({
  deposit: z.string()
});

export const TxExecutionErrorSchema = z.unknown();

export const TxExecutionStatusSchema = z.unknown();

export const UseGlobalContractActionSchema = z.object({
  contractidentifier: z.unknown().optional()
});
