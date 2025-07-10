/**
 * Generated TypeScript types for NEAR Protocol JSON-RPC API
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */

export type AccountId = string;
export type PublicKey = string;
export type CryptoHash = string;
export type BlockHeight = number;
export type Gas = string;
export type Balance = string;

// Base JSON-RPC types
export interface JsonRpcRequest<T = any> {
  jsonrpc: '2.0';
  method: string;
  params: T;
  id: string;
}

export interface JsonRpcResponse<T = any> {
  jsonrpc: '2.0';
  result?: T;
  error?: JsonRpcError;
  id: string;
}

export interface JsonRpcError {
  code: number;
  message: string;
  data?: any;
}

// Generated types from OpenAPI spec
export interface ViewAccessKeyParams {
  accountId?: string;
  publicKey?: string;
}

export interface ViewAccessKeyResult {
  nonce?: number;
  permission?: string;
  blockHeight?: number;
  blockHash?: string;
}

export interface ViewAccessKeyListParams {
  accountId?: string;
}

export type ViewAccessKeyListResult = any;

export interface ViewAccountParams {
  accountId?: string;
}

export interface ViewAccountResult {
  accountId?: string;
  balance?: string;
  storageUsage?: number;
  codeHash?: string;
  blockHeight?: number;
  blockHash?: string;
}

export type ViewCodeResult = any;

export type ViewStateResult = any;

export type CallFunctionResult = any;

export interface BlockParams {
  blockId?: string;
}

export interface BlockResult {
  header?: Record<string, any>;
  chunks?: any[];
  transactions?: any[];
}

export interface ChunkParams {
  chunkId?: string;
}

export type ChunkResult = any;

export type ChangesInBlockResult = any;

export type ExperimentalChangesInBlockResult = any;

export interface GasPriceParams {
  blockId?: string;
}

export interface GasPriceResult {
  gasPrice?: string;
}

export type ExperimentalGenesisConfigResult = any;

export type ExperimentalProtocolConfigResult = any;

export interface NetworkInfoResult {
  chainId?: string;
  genesisHash?: string;
  protocolVersion?: number;
}

export type StatusResult = any;

export type ValidatorsResult = any;

export interface BroadcastTxAsyncParams {
  signedTxBase64?: string;
}

export type BroadcastTxAsyncResult = any;

export interface BroadcastTxCommitParams {
  signedTxBase64?: string;
}

export type BroadcastTxCommitResult = any;

export interface TxParams {
  txHash?: string;
  senderAccountId?: string;
}

export type TxResult = any;

export type ExperimentalTxStatusResult = any;

