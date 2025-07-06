/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
import { z } from 'zod';
export declare const ActionSchema: z.ZodUnknown;
export declare const ActionCreationConfigViewSchema: z.ZodObject<{
    addkeycost: z.ZodOptional<z.ZodUnknown>;
    createaccountcost: z.ZodOptional<z.ZodUnknown>;
    delegatecost: z.ZodOptional<z.ZodUnknown>;
    deleteaccountcost: z.ZodOptional<z.ZodUnknown>;
    deletekeycost: z.ZodOptional<z.ZodUnknown>;
    deploycontractcost: z.ZodOptional<z.ZodUnknown>;
    deploycontractcostperbyte: z.ZodOptional<z.ZodUnknown>;
    functioncallcost: z.ZodOptional<z.ZodUnknown>;
    functioncallcostperbyte: z.ZodOptional<z.ZodUnknown>;
    stakecost: z.ZodOptional<z.ZodUnknown>;
    transfercost: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    functioncallcost?: unknown;
    functioncallcostperbyte?: unknown;
    addkeycost?: unknown;
    createaccountcost?: unknown;
    delegatecost?: unknown;
    deleteaccountcost?: unknown;
    deletekeycost?: unknown;
    deploycontractcost?: unknown;
    deploycontractcostperbyte?: unknown;
    stakecost?: unknown;
    transfercost?: unknown;
}, {
    functioncallcost?: unknown;
    functioncallcostperbyte?: unknown;
    addkeycost?: unknown;
    createaccountcost?: unknown;
    delegatecost?: unknown;
    deleteaccountcost?: unknown;
    deletekeycost?: unknown;
    deploycontractcost?: unknown;
    deploycontractcostperbyte?: unknown;
    stakecost?: unknown;
    transfercost?: unknown;
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
    accesskey: z.ZodOptional<z.ZodUnknown>;
    publickey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accesskey?: unknown;
    publickey?: unknown;
}, {
    accesskey?: unknown;
    publickey?: unknown;
}>;
export declare const CreateAccountActionSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const DataReceiptCreationConfigViewSchema: z.ZodObject<{
    basecost: z.ZodOptional<z.ZodUnknown>;
    costperbyte: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    basecost?: unknown;
    costperbyte?: unknown;
}, {
    basecost?: unknown;
    costperbyte?: unknown;
}>;
export declare const DelegateActionSchema: z.ZodObject<{
    actions: z.ZodArray<z.ZodUnknown, "many">;
    maxblockheight: z.ZodOptional<z.ZodNumber>;
    nonce: z.ZodNumber;
    publickey: z.ZodOptional<z.ZodUnknown>;
    receiverid: z.ZodOptional<z.ZodUnknown>;
    senderid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    nonce: number;
    actions: unknown[];
    publickey?: unknown;
    receiverid?: unknown;
    maxblockheight?: number | undefined;
    senderid?: unknown;
}, {
    nonce: number;
    actions: unknown[];
    publickey?: unknown;
    receiverid?: unknown;
    maxblockheight?: number | undefined;
    senderid?: unknown;
}>;
export declare const DeleteAccountActionSchema: z.ZodObject<{
    beneficiaryid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    beneficiaryid?: unknown;
}, {
    beneficiaryid?: unknown;
}>;
export declare const DeleteKeyActionSchema: z.ZodObject<{
    publickey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    publickey?: unknown;
}, {
    publickey?: unknown;
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
    deploymode: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    code: string;
    deploymode?: unknown;
}, {
    code: string;
    deploymode?: unknown;
}>;
export declare const FinalExecutionOutcomeWithReceiptViewSchema: z.ZodObject<{
    receipts: z.ZodArray<z.ZodUnknown, "many">;
    receiptsoutcome: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    status: z.ZodUnknown;
    transaction: z.ZodUnknown;
    transactionoutcome: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receipts: unknown[];
    status?: unknown;
    receiptsoutcome?: unknown[] | undefined;
    transaction?: unknown;
    transactionoutcome?: unknown;
}, {
    receipts: unknown[];
    status?: unknown;
    receiptsoutcome?: unknown[] | undefined;
    transaction?: unknown;
    transactionoutcome?: unknown;
}>;
export declare const FunctionCallActionSchema: z.ZodObject<{
    args: z.ZodString;
    deposit: z.ZodString;
    gas: z.ZodNumber;
    methodname: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    args: string;
    deposit: string;
    gas: number;
    methodname?: string | undefined;
}, {
    args: string;
    deposit: string;
    gas: number;
    methodname?: string | undefined;
}>;
export declare const InvalidTxErrorSchema: z.ZodUnknown;
export declare const JsonRpcRequestforEXPERIMENTALreceiptSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_receipt"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_receipt";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_receipt";
    params?: unknown;
}>;
export declare const JsonRpcRequestforEXPERIMENTALtxstatusSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_tx_status"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_tx_status";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_tx_status";
    params?: unknown;
}>;
export declare const JsonRpcRequestforbroadcasttxasyncSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["broadcast_tx_async"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "broadcast_tx_async";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "broadcast_tx_async";
    params?: unknown;
}>;
export declare const JsonRpcRequestforbroadcasttxcommitSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["broadcast_tx_commit"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "broadcast_tx_commit";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "broadcast_tx_commit";
    params?: unknown;
}>;
export declare const JsonRpcRequestforsendtxSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["send_tx"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "send_tx";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "send_tx";
    params?: unknown;
}>;
export declare const JsonRpcRequestfortxSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["tx"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "tx";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "tx";
    params?: unknown;
}>;
export declare const JsonRpcResponseforRpcReceiptResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcTransactionResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const NonDelegateActionSchema: z.ZodUnknown;
export declare const ReceiptEnumViewSchema: z.ZodUnknown;
export declare const ReceiptValidationErrorSchema: z.ZodUnknown;
export declare const ReceiptViewSchema: z.ZodObject<{
    predecessorid: z.ZodOptional<z.ZodUnknown>;
    priority: z.ZodOptional<z.ZodNumber>;
    receipt: z.ZodUnknown;
    receiptid: z.ZodOptional<z.ZodUnknown>;
    receiverid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receiverid?: unknown;
    predecessorid?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptid?: unknown;
}, {
    receiverid?: unknown;
    predecessorid?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptid?: unknown;
}>;
export declare const RpcReceiptRequestSchema: z.ZodObject<{
    receiptid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receiptid?: unknown;
}, {
    receiptid?: unknown;
}>;
export declare const RpcReceiptResponseSchema: z.ZodObject<{
    predecessorid: z.ZodOptional<z.ZodUnknown>;
    priority: z.ZodOptional<z.ZodNumber>;
    receipt: z.ZodUnknown;
    receiptid: z.ZodOptional<z.ZodUnknown>;
    receiverid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receiverid?: unknown;
    predecessorid?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptid?: unknown;
}, {
    receiverid?: unknown;
    predecessorid?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptid?: unknown;
}>;
export declare const RpcSendTransactionRequestSchema: z.ZodObject<{
    signedtxbase64: z.ZodOptional<z.ZodUnknown>;
    waituntil: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    signedtxbase64?: unknown;
    waituntil?: unknown;
}, {
    signedtxbase64?: unknown;
    waituntil?: unknown;
}>;
export declare const RpcTransactionResponseSchema: z.ZodObject<{
    finalexecutionstatus: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    finalexecutionstatus?: unknown;
}, {
    finalexecutionstatus?: unknown;
}>;
export declare const RpcTransactionStatusRequestSchema: z.ZodObject<{
    waituntil: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    waituntil?: unknown;
}, {
    waituntil?: unknown;
}>;
export declare const SignedDelegateActionSchema: z.ZodObject<{
    delegateaction: z.ZodOptional<z.ZodUnknown>;
    signature: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    signature?: unknown;
    delegateaction?: unknown;
}, {
    signature?: unknown;
    delegateaction?: unknown;
}>;
export declare const SignedTransactionSchema: z.ZodString;
export declare const SignedTransactionViewSchema: z.ZodObject<{
    actions: z.ZodArray<z.ZodUnknown, "many">;
    hash: z.ZodUnknown;
    nonce: z.ZodNumber;
    priorityfee: z.ZodOptional<z.ZodNumber>;
    publickey: z.ZodOptional<z.ZodUnknown>;
    receiverid: z.ZodOptional<z.ZodUnknown>;
    signature: z.ZodUnknown;
    signerid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    nonce: number;
    actions: unknown[];
    publickey?: unknown;
    hash?: unknown;
    signature?: unknown;
    receiverid?: unknown;
    priorityfee?: number | undefined;
    signerid?: unknown;
}, {
    nonce: number;
    actions: unknown[];
    publickey?: unknown;
    hash?: unknown;
    signature?: unknown;
    receiverid?: unknown;
    priorityfee?: number | undefined;
    signerid?: unknown;
}>;
export declare const StakeActionSchema: z.ZodObject<{
    publickey: z.ZodOptional<z.ZodUnknown>;
    stake: z.ZodString;
}, "strip", z.ZodTypeAny, {
    stake: string;
    publickey?: unknown;
}, {
    stake: string;
    publickey?: unknown;
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
    contractidentifier: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    contractidentifier?: unknown;
}, {
    contractidentifier?: unknown;
}>;
