/**
 * Generated types for NEAR Protocol JSON-RPC
 */
export type Action = unknown;
export interface ActionCreationConfigView {
    addkeycost?: unknown;
    createaccountcost?: unknown;
    delegatecost?: unknown;
    deleteaccountcost?: unknown;
    deletekeycost?: unknown;
    deploycontractcost?: unknown;
    deploycontractcostperbyte?: unknown;
    functioncallcost?: unknown;
    functioncallcostperbyte?: unknown;
    stakecost?: unknown;
    transfercost?: unknown;
}
export interface ActionError {
    index?: number;
    kind: unknown;
}
export type ActionErrorKind = unknown;
export type ActionView = unknown;
export type ActionsValidationError = unknown;
export interface AddKeyAction {
    accesskey?: unknown;
    publickey?: unknown;
}
export interface CreateAccountAction {
}
export interface DataReceiptCreationConfigView {
    basecost?: unknown;
    costperbyte?: unknown;
}
export interface DelegateAction {
    actions: unknown[];
    maxblockheight?: number;
    nonce: number;
    publickey?: unknown;
    receiverid?: unknown;
    senderid?: unknown;
}
export interface DeleteAccountAction {
    beneficiaryid?: unknown;
}
export interface DeleteKeyAction {
    publickey?: unknown;
}
export interface DeployContractAction {
    code: string;
}
export interface DeployGlobalContractAction {
    code: string;
    deploymode?: unknown;
}
export interface FinalExecutionOutcomeWithReceiptView {
    receipts: unknown[];
    receiptsoutcome?: unknown[];
    status: unknown;
    transaction: unknown;
    transactionoutcome?: unknown;
}
export interface FunctionCallAction {
    args: string;
    deposit: string;
    gas: number;
    methodname?: string;
}
export type InvalidTxError = unknown;
export interface JsonRpcRequestforEXPERIMENTALreceipt {
    id: string;
    jsonrpc: string;
    method: 'EXPERIMENTAL_receipt';
    params: unknown;
}
export interface JsonRpcRequestforEXPERIMENTALtxstatus {
    id: string;
    jsonrpc: string;
    method: 'EXPERIMENTAL_tx_status';
    params: unknown;
}
export interface JsonRpcRequestforbroadcasttxasync {
    id: string;
    jsonrpc: string;
    method: 'broadcast_tx_async';
    params: unknown;
}
export interface JsonRpcRequestforbroadcasttxcommit {
    id: string;
    jsonrpc: string;
    method: 'broadcast_tx_commit';
    params: unknown;
}
export interface JsonRpcRequestforsendtx {
    id: string;
    jsonrpc: string;
    method: 'send_tx';
    params: unknown;
}
export interface JsonRpcRequestfortx {
    id: string;
    jsonrpc: string;
    method: 'tx';
    params: unknown;
}
export interface JsonRpcResponseforRpcReceiptResponseandRpcError {
    id: string;
    jsonrpc: string;
}
export interface JsonRpcResponseforRpcTransactionResponseandRpcError {
    id: string;
    jsonrpc: string;
}
export type NonDelegateAction = unknown;
export type ReceiptEnumView = unknown;
export type ReceiptValidationError = unknown;
export interface ReceiptView {
    predecessorid?: unknown;
    priority?: number;
    receipt: unknown;
    receiptid?: unknown;
    receiverid?: unknown;
}
export interface RpcReceiptRequest {
    receiptid?: unknown;
}
export interface RpcReceiptResponse {
    predecessorid?: unknown;
    priority?: number;
    receipt: unknown;
    receiptid?: unknown;
    receiverid?: unknown;
}
export interface RpcSendTransactionRequest {
    signedtxbase64?: unknown;
    waituntil?: unknown;
}
export interface RpcTransactionResponse {
    finalexecutionstatus?: unknown;
}
export interface RpcTransactionStatusRequest {
    waituntil?: unknown;
}
export interface SignedDelegateAction {
    delegateaction?: unknown;
    signature: unknown;
}
export type SignedTransaction = string;
export interface SignedTransactionView {
    actions: unknown[];
    hash: unknown;
    nonce: number;
    priorityfee?: number;
    publickey?: unknown;
    receiverid?: unknown;
    signature: unknown;
    signerid?: unknown;
}
export interface StakeAction {
    publickey?: unknown;
    stake: string;
}
export interface TransferAction {
    deposit: string;
}
export type TxExecutionError = unknown;
export type TxExecutionStatus = unknown;
export interface UseGlobalContractAction {
    contractidentifier?: unknown;
}
