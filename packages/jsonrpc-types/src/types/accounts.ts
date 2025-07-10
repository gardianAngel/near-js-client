/**
 * Generated types for NEAR Protocol JSON-RPC
 */

import { AccountId, CryptoHash, PublicKey } from './common';

export interface AccessKey {
  nonce: number;
  permission: unknown;
}

export interface AccessKeyCreationConfigView {
  fullAccessCost?: unknown;
  functionCallCost?: unknown;
  functionCallCostPerByte?: unknown;
}

export interface AccessKeyInfoView {
  accessKey?: AccessKeyView;
  publicKey?: PublicKey;
}

export interface AccessKeyList {
  keys: AccessKeyInfoView[];
}

export type AccessKeyPermission = unknown;

export type AccessKeyPermissionView = unknown;

export interface AccessKeyView {
  nonce: number;
  permission: AccessKeyPermissionView;
}

export interface AccountCreationConfigView {
  minAllowedTopLevelAccountLength?: number;
  registrarAccountId?: unknown;
}

export interface AccountDataView {
  accountKey?: PublicKey;
  peerId?: PublicKey;
  proxies: Tier1ProxyView[];
  timestamp: string;
}

export type AccountId = string;

export type AccountIdValidityRulesVersion = number;

export interface AccountInfo {
  accountId?: AccountId;
  amount: string;
  publicKey?: PublicKey;
}

export interface AccountView {
  amount: string;
  codeHash?: CryptoHash;
  globalContractAccountId?: unknown;
  globalContractHash?: unknown;
  locked: string;
  storagePaidAt?: number;
  storageUsage?: number;
}

export interface AccountWithPublicKey {
  accountId?: AccountId;
  publicKey?: PublicKey;
}

export interface ContractCodeView {
  codeBase64?: string;
  hash: CryptoHash;
}

export interface GasKeyView {
  balance: number;
  numNonces?: number;
  permission: AccessKeyPermissionView;
}

export type GlobalContractDeployMode = unknown;

export type GlobalContractIdentifier = unknown;

export type InvalidAccessKeyError = unknown;

export type PublicKey = string;

export type StateChangeCauseView = unknown;

export type StateChangeKindView = unknown;

export interface StateChangeWithCauseView {
  cause: StateChangeCauseView;
}

export interface StateItem {
  key: string;
  value: string;
}

export interface StateSyncConfig {
  concurrency?: SyncConcurrency;
  dump?: unknown;
  sync?: SyncConfig;
}

export interface ViewStateResult {
  proof?: string[];
  values: StateItem[];
}
