/**
 * Generated types for NEAR Protocol JSON-RPC
 */

import { AccountId, CryptoHash, PublicKey, Tier1ProxyView, AccountInfo, AccountDataView, GlobalContractDeployMode, GlobalContractIdentifier, SyncConcurrency, SyncConfig } from './common';

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

// AccountDataView is now defined in common.ts
// AccountId is now defined in common.ts
// AccountInfo is now defined in common.ts

export type AccountIdValidityRulesVersion = number;

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

// GlobalContractDeployMode is now defined in common.ts
// GlobalContractIdentifier is now defined in common.ts

export type InvalidAccessKeyError = unknown;

// PublicKey is now defined in common.ts

export type StateChangeCauseView = unknown;

// StateChangeKindView is now defined in common.ts
// StateChangeWithCauseView is now defined in common.ts

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
