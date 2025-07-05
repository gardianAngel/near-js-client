/**
 * Account-related types for NEAR Protocol JSON-RPC interface
 */

import { BlockReference, PublicKey } from './common';
import { AccessKey } from './blocks';

export interface AccountQuery extends BlockReference {
  accountId: string;
}

export interface AccountResponse {
  amount: string;
  locked: string;
  codeHash: string;
  storageUsage: number;
  storagePaidAt: number;
  blockHeight: number;
  blockHash: string;
}

export interface AccessKeyQuery extends BlockReference {
  accountId: string;
  publicKey: string;
}

export interface AccessKeyResponse {
  nonce: number;
  permission: AccessKey['permission'];
  blockHeight: number;
  blockHash: string;
}

export interface AccessKeyListQuery extends BlockReference {
  accountId: string;
}

export interface AccessKeyWithPublicKey {
  publicKey: PublicKey;
  accessKey: AccessKey;
}

export interface AccessKeyListResponse {
  keys: AccessKeyWithPublicKey[];
  blockHeight: number;
  blockHash: string;
}

export interface CodeQuery extends BlockReference {
  accountId: string;
}

export interface CodeResponse {
  codeBase64: string;
  hash: string;
  blockHeight: number;
  blockHash: string;
}

export interface ContractCodeQuery extends BlockReference {
  accountId: string;
}

export interface ContractCodeResponse {
  result: string;
  logs: string[];
  blockHeight: number;
  blockHash: string;
}

export interface ContractStateQuery extends BlockReference {
  accountId: string;
  keyPrefix?: string;
}

export interface StateItem {
  key: string;
  value: string;
  proof: string[];
}

export interface ContractStateResponse {
  values: StateItem[];
  proof: string[];
  blockHeight: number;
  blockHash: string;
}

export interface ContractStateChangesQuery extends BlockReference {
  accountIds: string[];
  keyPrefix?: string;
}

export interface StateChange {
  cause: StateChangeCause;
  type: StateChangeType;
  change: StateChangeValue;
}

export type StateChangeCause = 
  | { type: 'transaction_processing'; tx_hash: string }
  | { type: 'action_receipt_processing_started'; receipt_hash: string }
  | { type: 'action_receipt_gas_reward'; receipt_hash: string }
  | { type: 'receipt_processing'; receipt_hash: string }
  | { type: 'postponed_receipt'; receipt_hash: string };

export type StateChangeType = 
  | 'account_update'
  | 'account_deletion'
  | 'access_key_update'
  | 'access_key_deletion'
  | 'data_update'
  | 'data_deletion'
  | 'contract_code_update'
  | 'contract_code_deletion';

export interface StateChangeValue {
  account_id: string;
  key_base64?: string;
  value_base64?: string;
  public_key?: PublicKey;
  access_key?: AccessKey;
  account?: AccountResponse;
  code_base64?: string;
}

export interface ContractStateChangesResponse {
  changes: StateChange[];
  blockHash: string;
}
