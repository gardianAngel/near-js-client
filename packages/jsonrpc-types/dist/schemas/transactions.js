"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseGlobalContractActionSchema = exports.TxExecutionStatusSchema = exports.TxExecutionErrorSchema = exports.TransferActionSchema = exports.StakeActionSchema = exports.SignedTransactionViewSchema = exports.SignedTransactionSchema = exports.SignedDelegateActionSchema = exports.RpcTransactionStatusRequestSchema = exports.RpcTransactionResponseSchema = exports.RpcSendTransactionRequestSchema = exports.RpcReceiptResponseSchema = exports.RpcReceiptRequestSchema = exports.ReceiptViewSchema = exports.ReceiptValidationErrorSchema = exports.ReceiptEnumViewSchema = exports.NonDelegateActionSchema = exports.JsonRpcResponseForRpcTransactionResponseAndRpcErrorSchema = exports.JsonRpcResponseForRpcReceiptResponseAndRpcErrorSchema = exports.JsonRpcRequestForTxSchema = exports.JsonRpcRequestForSendTxSchema = exports.JsonRpcRequestForBroadcastTxCommitSchema = exports.JsonRpcRequestForBroadcastTxAsyncSchema = exports.JsonRpcRequestForEXPERIMENTALTxStatusSchema = exports.JsonRpcRequestForEXPERIMENTALReceiptSchema = exports.InvalidTxErrorSchema = exports.FunctionCallActionSchema = exports.FinalExecutionOutcomeWithReceiptViewSchema = exports.DeployGlobalContractActionSchema = exports.DeployContractActionSchema = exports.DeleteKeyActionSchema = exports.DeleteAccountActionSchema = exports.DelegateActionSchema = exports.DataReceiptCreationConfigViewSchema = exports.CreateAccountActionSchema = exports.AddKeyActionSchema = exports.ActionsValidationErrorSchema = exports.ActionViewSchema = exports.ActionErrorKindSchema = exports.ActionErrorSchema = exports.ActionCreationConfigViewSchema = exports.ActionSchema = void 0;
const zod_1 = require("zod");
exports.ActionSchema = zod_1.z.unknown();
exports.ActionCreationConfigViewSchema = zod_1.z.object({
    addKeyCost: zod_1.z.unknown().optional(),
    createAccountCost: zod_1.z.unknown().optional(),
    delegateCost: zod_1.z.unknown().optional(),
    deleteAccountCost: zod_1.z.unknown().optional(),
    deleteKeyCost: zod_1.z.unknown().optional(),
    deployContractCost: zod_1.z.unknown().optional(),
    deployContractCostPerByte: zod_1.z.unknown().optional(),
    functionCallCost: zod_1.z.unknown().optional(),
    functionCallCostPerByte: zod_1.z.unknown().optional(),
    stakeCost: zod_1.z.unknown().optional(),
    transferCost: zod_1.z.unknown().optional()
});
exports.ActionErrorSchema = zod_1.z.object({
    index: zod_1.z.number().optional(),
    kind: zod_1.z.unknown()
});
exports.ActionErrorKindSchema = zod_1.z.unknown();
exports.ActionViewSchema = zod_1.z.unknown();
exports.ActionsValidationErrorSchema = zod_1.z.unknown();
exports.AddKeyActionSchema = zod_1.z.object({
    accessKey: zod_1.z.unknown().optional(),
    publicKey: zod_1.z.unknown().optional()
});
exports.CreateAccountActionSchema = zod_1.z.record(zod_1.z.unknown());
exports.DataReceiptCreationConfigViewSchema = zod_1.z.object({
    baseCost: zod_1.z.unknown().optional(),
    costPerByte: zod_1.z.unknown().optional()
});
exports.DelegateActionSchema = zod_1.z.object({
    actions: zod_1.z.array(zod_1.z.unknown()),
    maxBlockHeight: zod_1.z.number().optional(),
    nonce: zod_1.z.number(),
    publicKey: zod_1.z.unknown().optional(),
    receiverId: zod_1.z.unknown().optional(),
    senderId: zod_1.z.unknown().optional()
});
exports.DeleteAccountActionSchema = zod_1.z.object({
    beneficiaryId: zod_1.z.unknown().optional()
});
exports.DeleteKeyActionSchema = zod_1.z.object({
    publicKey: zod_1.z.unknown().optional()
});
exports.DeployContractActionSchema = zod_1.z.object({
    code: zod_1.z.string()
});
exports.DeployGlobalContractActionSchema = zod_1.z.object({
    code: zod_1.z.string(),
    deployMode: zod_1.z.unknown().optional()
});
exports.FinalExecutionOutcomeWithReceiptViewSchema = zod_1.z.object({
    receipts: zod_1.z.array(zod_1.z.unknown()),
    receiptsOutcome: zod_1.z.array(zod_1.z.unknown()).optional(),
    status: zod_1.z.unknown(),
    transaction: zod_1.z.unknown(),
    transactionOutcome: zod_1.z.unknown().optional()
});
exports.FunctionCallActionSchema = zod_1.z.object({
    args: zod_1.z.string(),
    deposit: zod_1.z.string(),
    gas: zod_1.z.number(),
    methodName: zod_1.z.string().optional()
});
exports.InvalidTxErrorSchema = zod_1.z.unknown();
exports.JsonRpcRequestForEXPERIMENTALReceiptSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_receipt']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForEXPERIMENTALTxStatusSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_tx_status']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForBroadcastTxAsyncSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['broadcast_tx_async']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForBroadcastTxCommitSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['broadcast_tx_commit']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForSendTxSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['send_tx']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestForTxSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['tx']),
    params: zod_1.z.unknown()
});
exports.JsonRpcResponseForRpcReceiptResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseForRpcTransactionResponseAndRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.NonDelegateActionSchema = zod_1.z.unknown();
exports.ReceiptEnumViewSchema = zod_1.z.unknown();
exports.ReceiptValidationErrorSchema = zod_1.z.unknown();
exports.ReceiptViewSchema = zod_1.z.object({
    predecessorId: zod_1.z.unknown().optional(),
    priority: zod_1.z.number().optional(),
    receipt: zod_1.z.unknown(),
    receiptId: zod_1.z.unknown().optional(),
    receiverId: zod_1.z.unknown().optional()
});
exports.RpcReceiptRequestSchema = zod_1.z.object({
    receiptId: zod_1.z.unknown().optional()
});
exports.RpcReceiptResponseSchema = zod_1.z.object({
    predecessorId: zod_1.z.unknown().optional(),
    priority: zod_1.z.number().optional(),
    receipt: zod_1.z.unknown(),
    receiptId: zod_1.z.unknown().optional(),
    receiverId: zod_1.z.unknown().optional()
});
exports.RpcSendTransactionRequestSchema = zod_1.z.object({
    signedTxBase64: zod_1.z.unknown().optional(),
    waitUntil: zod_1.z.unknown().optional()
});
exports.RpcTransactionResponseSchema = zod_1.z.object({
    finalExecutionStatus: zod_1.z.unknown().optional()
});
exports.RpcTransactionStatusRequestSchema = zod_1.z.object({
    waitUntil: zod_1.z.unknown().optional()
});
exports.SignedDelegateActionSchema = zod_1.z.object({
    delegateAction: zod_1.z.unknown().optional(),
    signature: zod_1.z.unknown()
});
exports.SignedTransactionSchema = zod_1.z.string();
exports.SignedTransactionViewSchema = zod_1.z.object({
    actions: zod_1.z.array(zod_1.z.unknown()),
    hash: zod_1.z.unknown(),
    nonce: zod_1.z.number(),
    priorityFee: zod_1.z.number().optional(),
    publicKey: zod_1.z.unknown().optional(),
    receiverId: zod_1.z.unknown().optional(),
    signature: zod_1.z.unknown(),
    signerId: zod_1.z.unknown().optional()
});
exports.StakeActionSchema = zod_1.z.object({
    publicKey: zod_1.z.unknown().optional(),
    stake: zod_1.z.string()
});
exports.TransferActionSchema = zod_1.z.object({
    deposit: zod_1.z.string()
});
exports.TxExecutionErrorSchema = zod_1.z.unknown();
exports.TxExecutionStatusSchema = zod_1.z.unknown();
exports.UseGlobalContractActionSchema = zod_1.z.object({
    contractIdentifier: zod_1.z.unknown().optional()
});
