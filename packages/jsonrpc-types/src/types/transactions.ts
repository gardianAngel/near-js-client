/**
 * Generated types for NEAR Protocol JSON-RPC
 */

import { AccountId, CryptoHash, PublicKey, Signature, ExecutionOutcomeWithIdView, GlobalContractDeployMode, GlobalContractIdentifier, ReceiptView, SignedTransactionView } from './common';

export type Action = unknown;

export interface ActionCreationConfigView {
  addKeyCost?: unknown;
  createAccountCost?: unknown;
  delegateCost?: unknown;
  deleteAccountCost?: unknown;
  deleteKeyCost?: unknown;
  deployContractCost?: unknown;
  deployContractCostPerByte?: unknown;
  functionCallCost?: unknown;
  functionCallCostPerByte?: unknown;
  stakeCost?: unknown;
  transferCost?: unknown;
}

export interface ActionError {
  index?: number;
  kind: unknown;
}

export type ActionErrorKind = unknown;

export type ActionView = unknown;

export type ActionsValidationError = unknown;

export interface AddKeyAction {
  accessKey?: unknown;
  publicKey?: unknown;
}

export interface CreateAccountAction {

}

export interface DataReceiptCreationConfigView {
  baseCost?: unknown;
  costPerByte?: unknown;
}

export interface DelegateAction {
  actions: NonDelegateAction[];
  maxBlockHeight?: number;
  nonce: number;
  publicKey?: unknown;
  receiverId?: unknown;
  senderId?: unknown;
}

export interface DeleteAccountAction {
  beneficiaryId?: AccountId;
}

export interface DeleteKeyAction {
  publicKey?: unknown;
}

export interface DeployContractAction {
  code: string;
}

export interface DeployGlobalContractAction {
  code: string;
  deployMode?: GlobalContractDeployMode;
}

export interface FinalExecutionOutcomeWithReceiptView {
  receipts: ReceiptView[];
  receiptsOutcome?: ExecutionOutcomeWithIdView[];
  status: unknown;
  transaction: unknown;
  transactionOutcome?: unknown;
}

export interface FunctionCallAction {
  args: string;
  deposit: string;
  gas: number;
  methodName?: string;
}

export type InvalidTxError = unknown;

export interface JsonRpcRequestForEXPERIMENTALReceipt {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_receipt';
  params: RpcReceiptRequest;
}

export interface JsonRpcRequestForEXPERIMENTALTxStatus {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_tx_status';
  params: RpcTransactionStatusRequest;
}

export interface JsonRpcRequestForBroadcastTxAsync {
  id: string;
  jsonrpc: string;
  method: 'broadcast_tx_async';
  params: RpcSendTransactionRequest;
}

export interface JsonRpcRequestForBroadcastTxCommit {
  id: string;
  jsonrpc: string;
  method: 'broadcast_tx_commit';
  params: RpcSendTransactionRequest;
}

export interface JsonRpcRequestForSendTx {
  id: string;
  jsonrpc: string;
  method: 'send_tx';
  params: RpcSendTransactionRequest;
}

export interface JsonRpcRequestForTx {
  id: string;
  jsonrpc: string;
  method: 'tx';
  params: RpcTransactionStatusRequest;
}

export interface JsonRpcResponseForRpcReceiptResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseForRpcTransactionResponseAndRpcError {
  id: string;
  jsonrpc: string;
}

export type NonDelegateAction = unknown;

export type ReceiptEnumView = unknown;

export type ReceiptValidationError = unknown;

// ReceiptView is now defined in common.ts

export interface RpcReceiptRequest {
  receiptId?: CryptoHash;
}

export interface RpcReceiptResponse {
  predecessorId?: AccountId;
  priority?: number;
  receipt: ReceiptEnumView;
  receiptId?: CryptoHash;
  receiverId?: AccountId;
}

export interface RpcSendTransactionRequest {
  signedTxBase64?: SignedTransaction;
  waitUntil?: unknown;
}

export interface RpcTransactionResponse {
  finalExecutionStatus?: TxExecutionStatus;
}

export interface RpcTransactionStatusRequest {
  waitUntil?: unknown;
}

export interface SignedDelegateAction {
  delegateAction?: DelegateAction;
  signature: Signature;
}

export type SignedTransaction = string;

// SignedTransactionView is now defined in common.ts

export interface StakeAction {
  publicKey?: unknown;
  stake: string;
}

export interface TransferAction {
  deposit: string;
}

export type TxExecutionError = unknown;

export type TxExecutionStatus = unknown;

export interface UseGlobalContractAction {
  contractIdentifier?: GlobalContractIdentifier;
}

// Type aliases for client compatibility
export type RpcBroadcastTxAsyncRequest = RpcSendTransactionRequest;
export type RpcBroadcastTxAsyncResponse = RpcTransactionResponse;
export type RpcBroadcastTxCommitRequest = RpcSendTransactionRequest;
export type RpcBroadcastTxCommitResponse = RpcTransactionResponse;
export type RpcEXPERIMENTALTxStatusRequest = RpcTransactionStatusRequest;
export type RpcEXPERIMENTALTxStatusResponse = RpcTransactionResponse;
export type RpcSendTxRequest = RpcSendTransactionRequest;
export type RpcSendTxResponse = RpcTransactionResponse;
export type RpcEXPERIMENTALReceiptRequest = RpcReceiptRequest;
export type RpcEXPERIMENTALReceiptResponse = RpcReceiptResponse;
