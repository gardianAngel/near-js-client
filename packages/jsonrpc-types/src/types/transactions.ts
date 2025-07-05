/**
 * Transaction-related types for NEAR Protocol JSON-RPC interface
 */

import { ExecutionOutcomeWithId, PublicKey, Signature } from './common';
import { Transaction, Receipt } from './blocks';

export interface TransactionQuery {
  transactionHash: string;
  senderId: string;
  waitUntil?: 'NONE' | 'INCLUDED' | 'INCLUDED_FINAL' | 'EXECUTED' | 'FINAL';
}

export interface TransactionResponse {
  status: TransactionStatus;
  transaction: Transaction;
  transactionOutcome: ExecutionOutcomeWithId;
  receiptsOutcome: ExecutionOutcomeWithId[];
}

export type TransactionStatus = 
  | { Unknown: Record<string, never> }
  | { Pending: Record<string, never> }
  | { Failure: TransactionFailure }
  | { SuccessValue: string }
  | { SuccessReceiptId: string };

export interface TransactionFailure {
  error_message: string;
  error_type: string;
}

export interface SendTransactionRequest {
  signedTransaction: string;
}

export interface SendTransactionResponse {
  transactionHash: string;
  status: TransactionStatus;
}

export interface ReceiptQuery {
  receiptId: string;
}

export interface ReceiptResponse {
  receipt: Receipt;
  blockHash: string;
  blockHeight: number;
}

export interface TransactionReceiptQuery {
  transactionHash: string;
  senderId: string;
}

export interface TransactionReceiptResponse {
  receipts: Receipt[];
}

export interface SignedTransaction {
  transaction: Transaction;
  signature: Signature;
}

export interface BroadcastTransactionRequest {
  signedTransaction: string;
}

export interface BroadcastTransactionResponse {
  transactionHash: string;
  status: TransactionStatus;
}

export interface TransactionDetails {
  hash: string;
  nonce: number;
  signerId: string;
  receiverId: string;
  publicKey: PublicKey;
  signature: Signature;
  blockHash: string;
  blockHeight: number;
  transactionIndex: number;
}
