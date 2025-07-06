"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseGlobalContractActionSchema = exports.TxExecutionStatusSchema = exports.TxExecutionErrorSchema = exports.TransferActionSchema = exports.StakeActionSchema = exports.SignedTransactionViewSchema = exports.SignedTransactionSchema = exports.SignedDelegateActionSchema = exports.RpcTransactionStatusRequestSchema = exports.RpcTransactionResponseSchema = exports.RpcSendTransactionRequestSchema = exports.RpcReceiptResponseSchema = exports.RpcReceiptRequestSchema = exports.ReceiptViewSchema = exports.ReceiptValidationErrorSchema = exports.ReceiptEnumViewSchema = exports.NonDelegateActionSchema = exports.JsonRpcResponseforRpcTransactionResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcReceiptResponseandRpcErrorSchema = exports.JsonRpcRequestfortxSchema = exports.JsonRpcRequestforsendtxSchema = exports.JsonRpcRequestforbroadcasttxcommitSchema = exports.JsonRpcRequestforbroadcasttxasyncSchema = exports.JsonRpcRequestforEXPERIMENTALtxstatusSchema = exports.JsonRpcRequestforEXPERIMENTALreceiptSchema = exports.InvalidTxErrorSchema = exports.FunctionCallActionSchema = exports.FinalExecutionOutcomeWithReceiptViewSchema = exports.DeployGlobalContractActionSchema = exports.DeployContractActionSchema = exports.DeleteKeyActionSchema = exports.DeleteAccountActionSchema = exports.DelegateActionSchema = exports.DataReceiptCreationConfigViewSchema = exports.CreateAccountActionSchema = exports.AddKeyActionSchema = exports.ActionsValidationErrorSchema = exports.ActionViewSchema = exports.ActionErrorKindSchema = exports.ActionErrorSchema = exports.ActionCreationConfigViewSchema = exports.ActionSchema = void 0;
const zod_1 = require("zod");
exports.ActionSchema = zod_1.z.unknown();
exports.ActionCreationConfigViewSchema = zod_1.z.object({
    addkeycost: zod_1.z.unknown().optional(),
    createaccountcost: zod_1.z.unknown().optional(),
    delegatecost: zod_1.z.unknown().optional(),
    deleteaccountcost: zod_1.z.unknown().optional(),
    deletekeycost: zod_1.z.unknown().optional(),
    deploycontractcost: zod_1.z.unknown().optional(),
    deploycontractcostperbyte: zod_1.z.unknown().optional(),
    functioncallcost: zod_1.z.unknown().optional(),
    functioncallcostperbyte: zod_1.z.unknown().optional(),
    stakecost: zod_1.z.unknown().optional(),
    transfercost: zod_1.z.unknown().optional()
});
exports.ActionErrorSchema = zod_1.z.object({
    index: zod_1.z.number().optional(),
    kind: zod_1.z.unknown()
});
exports.ActionErrorKindSchema = zod_1.z.unknown();
exports.ActionViewSchema = zod_1.z.unknown();
exports.ActionsValidationErrorSchema = zod_1.z.unknown();
exports.AddKeyActionSchema = zod_1.z.object({
    accesskey: zod_1.z.unknown().optional(),
    publickey: zod_1.z.unknown().optional()
});
exports.CreateAccountActionSchema = zod_1.z.record(zod_1.z.unknown());
exports.DataReceiptCreationConfigViewSchema = zod_1.z.object({
    basecost: zod_1.z.unknown().optional(),
    costperbyte: zod_1.z.unknown().optional()
});
exports.DelegateActionSchema = zod_1.z.object({
    actions: zod_1.z.array(zod_1.z.unknown()),
    maxblockheight: zod_1.z.number().optional(),
    nonce: zod_1.z.number(),
    publickey: zod_1.z.unknown().optional(),
    receiverid: zod_1.z.unknown().optional(),
    senderid: zod_1.z.unknown().optional()
});
exports.DeleteAccountActionSchema = zod_1.z.object({
    beneficiaryid: zod_1.z.unknown().optional()
});
exports.DeleteKeyActionSchema = zod_1.z.object({
    publickey: zod_1.z.unknown().optional()
});
exports.DeployContractActionSchema = zod_1.z.object({
    code: zod_1.z.string()
});
exports.DeployGlobalContractActionSchema = zod_1.z.object({
    code: zod_1.z.string(),
    deploymode: zod_1.z.unknown().optional()
});
exports.FinalExecutionOutcomeWithReceiptViewSchema = zod_1.z.object({
    receipts: zod_1.z.array(zod_1.z.unknown()),
    receiptsoutcome: zod_1.z.array(zod_1.z.unknown()).optional(),
    status: zod_1.z.unknown(),
    transaction: zod_1.z.unknown(),
    transactionoutcome: zod_1.z.unknown().optional()
});
exports.FunctionCallActionSchema = zod_1.z.object({
    args: zod_1.z.string(),
    deposit: zod_1.z.string(),
    gas: zod_1.z.number(),
    methodname: zod_1.z.string().optional()
});
exports.InvalidTxErrorSchema = zod_1.z.unknown();
exports.JsonRpcRequestforEXPERIMENTALreceiptSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_receipt']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforEXPERIMENTALtxstatusSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_tx_status']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforbroadcasttxasyncSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['broadcast_tx_async']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforbroadcasttxcommitSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['broadcast_tx_commit']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforsendtxSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['send_tx']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestfortxSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['tx']),
    params: zod_1.z.unknown()
});
exports.JsonRpcResponseforRpcReceiptResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcTransactionResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.NonDelegateActionSchema = zod_1.z.unknown();
exports.ReceiptEnumViewSchema = zod_1.z.unknown();
exports.ReceiptValidationErrorSchema = zod_1.z.unknown();
exports.ReceiptViewSchema = zod_1.z.object({
    predecessorid: zod_1.z.unknown().optional(),
    priority: zod_1.z.number().optional(),
    receipt: zod_1.z.unknown(),
    receiptid: zod_1.z.unknown().optional(),
    receiverid: zod_1.z.unknown().optional()
});
exports.RpcReceiptRequestSchema = zod_1.z.object({
    receiptid: zod_1.z.unknown().optional()
});
exports.RpcReceiptResponseSchema = zod_1.z.object({
    predecessorid: zod_1.z.unknown().optional(),
    priority: zod_1.z.number().optional(),
    receipt: zod_1.z.unknown(),
    receiptid: zod_1.z.unknown().optional(),
    receiverid: zod_1.z.unknown().optional()
});
exports.RpcSendTransactionRequestSchema = zod_1.z.object({
    signedtxbase64: zod_1.z.unknown().optional(),
    waituntil: zod_1.z.unknown().optional()
});
exports.RpcTransactionResponseSchema = zod_1.z.object({
    finalexecutionstatus: zod_1.z.unknown().optional()
});
exports.RpcTransactionStatusRequestSchema = zod_1.z.object({
    waituntil: zod_1.z.unknown().optional()
});
exports.SignedDelegateActionSchema = zod_1.z.object({
    delegateaction: zod_1.z.unknown().optional(),
    signature: zod_1.z.unknown()
});
exports.SignedTransactionSchema = zod_1.z.string();
exports.SignedTransactionViewSchema = zod_1.z.object({
    actions: zod_1.z.array(zod_1.z.unknown()),
    hash: zod_1.z.unknown(),
    nonce: zod_1.z.number(),
    priorityfee: zod_1.z.number().optional(),
    publickey: zod_1.z.unknown().optional(),
    receiverid: zod_1.z.unknown().optional(),
    signature: zod_1.z.unknown(),
    signerid: zod_1.z.unknown().optional()
});
exports.StakeActionSchema = zod_1.z.object({
    publickey: zod_1.z.unknown().optional(),
    stake: zod_1.z.string()
});
exports.TransferActionSchema = zod_1.z.object({
    deposit: zod_1.z.string()
});
exports.TxExecutionErrorSchema = zod_1.z.unknown();
exports.TxExecutionStatusSchema = zod_1.z.unknown();
exports.UseGlobalContractActionSchema = zod_1.z.object({
    contractidentifier: zod_1.z.unknown().optional()
});
