/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
import { z } from 'zod';
export declare const ActionSchema: z.ZodUnknown;
export declare const ActionCreationConfigViewSchema: z.ZodObject<{
    addKeyCost: z.ZodOptional<z.ZodUnknown>;
    createAccountCost: z.ZodOptional<z.ZodUnknown>;
    delegateCost: z.ZodOptional<z.ZodUnknown>;
    deleteAccountCost: z.ZodOptional<z.ZodUnknown>;
    deleteKeyCost: z.ZodOptional<z.ZodUnknown>;
    deployContractCost: z.ZodOptional<z.ZodUnknown>;
    deployContractCostPerByte: z.ZodOptional<z.ZodUnknown>;
    functionCallCost: z.ZodOptional<z.ZodUnknown>;
    functionCallCostPerByte: z.ZodOptional<z.ZodUnknown>;
    stakeCost: z.ZodOptional<z.ZodUnknown>;
    transferCost: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    functionCallCost?: unknown;
    functionCallCostPerByte?: unknown;
    addKeyCost?: unknown;
    createAccountCost?: unknown;
    delegateCost?: unknown;
    deleteAccountCost?: unknown;
    deleteKeyCost?: unknown;
    deployContractCost?: unknown;
    deployContractCostPerByte?: unknown;
    stakeCost?: unknown;
    transferCost?: unknown;
}, {
    functionCallCost?: unknown;
    functionCallCostPerByte?: unknown;
    addKeyCost?: unknown;
    createAccountCost?: unknown;
    delegateCost?: unknown;
    deleteAccountCost?: unknown;
    deleteKeyCost?: unknown;
    deployContractCost?: unknown;
    deployContractCostPerByte?: unknown;
    stakeCost?: unknown;
    transferCost?: unknown;
}>;
export declare const ActionErrorSchema: z.ZodObject<{
    index: z.ZodOptional<z.ZodNumber>;
    kind: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    index?: number | undefined;
    kind?: unknown;
}, {
    index?: number | undefined;
    kind?: unknown;
}>;
export declare const ActionErrorKindSchema: z.ZodUnknown;
export declare const ActionViewSchema: z.ZodUnknown;
export declare const ActionsValidationErrorSchema: z.ZodUnknown;
export declare const AddKeyActionSchema: z.ZodObject<{
    accessKey: z.ZodOptional<z.ZodUnknown>;
    publicKey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    publicKey?: unknown;
    accessKey?: unknown;
}, {
    publicKey?: unknown;
    accessKey?: unknown;
}>;
export declare const CreateAccountActionSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const DataReceiptCreationConfigViewSchema: z.ZodObject<{
    baseCost: z.ZodOptional<z.ZodUnknown>;
    costPerByte: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    baseCost?: unknown;
    costPerByte?: unknown;
}, {
    baseCost?: unknown;
    costPerByte?: unknown;
}>;
export declare const DelegateActionSchema: z.ZodObject<{
    actions: z.ZodArray<z.ZodUnknown, "many">;
    maxBlockHeight: z.ZodOptional<z.ZodNumber>;
    nonce: z.ZodNumber;
    publicKey: z.ZodOptional<z.ZodUnknown>;
    receiverId: z.ZodOptional<z.ZodUnknown>;
    senderId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    nonce: number;
    actions: unknown[];
    publicKey?: unknown;
    receiverId?: unknown;
    maxBlockHeight?: number | undefined;
    senderId?: unknown;
}, {
    nonce: number;
    actions: unknown[];
    publicKey?: unknown;
    receiverId?: unknown;
    maxBlockHeight?: number | undefined;
    senderId?: unknown;
}>;
export declare const DeleteAccountActionSchema: z.ZodObject<{
    beneficiaryId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    beneficiaryId?: unknown;
}, {
    beneficiaryId?: unknown;
}>;
export declare const DeleteKeyActionSchema: z.ZodObject<{
    publicKey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    publicKey?: unknown;
}, {
    publicKey?: unknown;
}>;
export declare const DeployContractActionSchema: z.ZodObject<{
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
export declare const DeployGlobalContractActionSchema: z.ZodObject<{
    code: z.ZodString;
    deployMode: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    code: string;
    deployMode?: unknown;
}, {
    code: string;
    deployMode?: unknown;
}>;
export declare const FinalExecutionOutcomeWithReceiptViewSchema: z.ZodObject<{
    receipts: z.ZodArray<z.ZodUnknown, "many">;
    receiptsOutcome: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    status: z.ZodUnknown;
    transaction: z.ZodUnknown;
    transactionOutcome: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receipts: unknown[];
    status?: unknown;
    receiptsOutcome?: unknown[] | undefined;
    transaction?: unknown;
    transactionOutcome?: unknown;
}, {
    receipts: unknown[];
    status?: unknown;
    receiptsOutcome?: unknown[] | undefined;
    transaction?: unknown;
    transactionOutcome?: unknown;
}>;
export declare const FunctionCallActionSchema: z.ZodObject<{
    args: z.ZodString;
    deposit: z.ZodString;
    gas: z.ZodNumber;
    methodName: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    args: string;
    deposit: string;
    gas: number;
    methodName?: string | undefined;
}, {
    args: string;
    deposit: string;
    gas: number;
    methodName?: string | undefined;
}>;
export declare const InvalidTxErrorSchema: z.ZodUnknown;
export declare const JsonRpcRequestForEXPERIMENTALReceiptSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_receipt"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "EXPERIMENTAL_receipt";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "EXPERIMENTAL_receipt";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForEXPERIMENTALTxStatusSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_tx_status"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "EXPERIMENTAL_tx_status";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "EXPERIMENTAL_tx_status";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForBroadcastTxAsyncSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["broadcast_tx_async"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "broadcast_tx_async";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "broadcast_tx_async";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForBroadcastTxCommitSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["broadcast_tx_commit"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "broadcast_tx_commit";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "broadcast_tx_commit";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForSendTxSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["send_tx"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "send_tx";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "send_tx";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForTxSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["tx"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "tx";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "tx";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcResponseForRpcReceiptResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseForRpcTransactionResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const NonDelegateActionSchema: z.ZodUnknown;
export declare const ReceiptEnumViewSchema: z.ZodUnknown;
export declare const ReceiptValidationErrorSchema: z.ZodUnknown;
export declare const ReceiptViewSchema: z.ZodObject<{
    predecessorId: z.ZodOptional<z.ZodUnknown>;
    priority: z.ZodOptional<z.ZodNumber>;
    receipt: z.ZodUnknown;
    receiptId: z.ZodOptional<z.ZodUnknown>;
    receiverId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receiverId?: unknown;
    predecessorId?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptId?: unknown;
}, {
    receiverId?: unknown;
    predecessorId?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptId?: unknown;
}>;
export declare const RpcReceiptRequestSchema: z.ZodObject<{
    receiptId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receiptId?: unknown;
}, {
    receiptId?: unknown;
}>;
export declare const RpcReceiptResponseSchema: z.ZodObject<{
    predecessorId: z.ZodOptional<z.ZodUnknown>;
    priority: z.ZodOptional<z.ZodNumber>;
    receipt: z.ZodUnknown;
    receiptId: z.ZodOptional<z.ZodUnknown>;
    receiverId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receiverId?: unknown;
    predecessorId?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptId?: unknown;
}, {
    receiverId?: unknown;
    predecessorId?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptId?: unknown;
}>;
export declare const RpcSendTransactionRequestSchema: z.ZodObject<{
    signedTxBase64: z.ZodOptional<z.ZodUnknown>;
    waitUntil: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    signedTxBase64?: unknown;
    waitUntil?: unknown;
}, {
    signedTxBase64?: unknown;
    waitUntil?: unknown;
}>;
export declare const RpcTransactionResponseSchema: z.ZodObject<{
    finalExecutionStatus: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    finalExecutionStatus?: unknown;
}, {
    finalExecutionStatus?: unknown;
}>;
export declare const RpcTransactionStatusRequestSchema: z.ZodObject<{
    waitUntil: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    waitUntil?: unknown;
}, {
    waitUntil?: unknown;
}>;
export declare const SignedDelegateActionSchema: z.ZodObject<{
    delegateAction: z.ZodOptional<z.ZodUnknown>;
    signature: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    signature?: unknown;
    delegateAction?: unknown;
}, {
    signature?: unknown;
    delegateAction?: unknown;
}>;
export declare const SignedTransactionSchema: z.ZodString;
export declare const SignedTransactionViewSchema: z.ZodObject<{
    actions: z.ZodArray<z.ZodUnknown, "many">;
    hash: z.ZodUnknown;
    nonce: z.ZodNumber;
    priorityFee: z.ZodOptional<z.ZodNumber>;
    publicKey: z.ZodOptional<z.ZodUnknown>;
    receiverId: z.ZodOptional<z.ZodUnknown>;
    signature: z.ZodUnknown;
    signerId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    nonce: number;
    actions: unknown[];
    publicKey?: unknown;
    signature?: unknown;
    hash?: unknown;
    receiverId?: unknown;
    priorityFee?: number | undefined;
    signerId?: unknown;
}, {
    nonce: number;
    actions: unknown[];
    publicKey?: unknown;
    signature?: unknown;
    hash?: unknown;
    receiverId?: unknown;
    priorityFee?: number | undefined;
    signerId?: unknown;
}>;
export declare const StakeActionSchema: z.ZodObject<{
    publicKey: z.ZodOptional<z.ZodUnknown>;
    stake: z.ZodString;
}, "strip", z.ZodTypeAny, {
    stake: string;
    publicKey?: unknown;
}, {
    stake: string;
    publicKey?: unknown;
}>;
export declare const TransferActionSchema: z.ZodObject<{
    deposit: z.ZodString;
}, "strip", z.ZodTypeAny, {
    deposit: string;
}, {
    deposit: string;
}>;
export declare const TxExecutionErrorSchema: z.ZodUnknown;
export declare const TxExecutionStatusSchema: z.ZodUnknown;
export declare const UseGlobalContractActionSchema: z.ZodObject<{
    contractIdentifier: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    contractIdentifier?: unknown;
}, {
    contractIdentifier?: unknown;
}>;
