/**
 * Generated types for NEAR Protocol JSON-RPC
 */



export interface AccessKey {
  nonce: number;
  permission: unknown;
}

export interface AccessKeyCreationConfigView {
  fullaccesscost?: unknown;
  functioncallcost?: unknown;
  functioncallcostperbyte?: unknown;
}

export interface AccessKeyInfoView {
  accesskey?: unknown;
  publickey?: unknown;
}

export interface AccessKeyList {
  keys: unknown[];
}

export type AccessKeyPermission = unknown;

export type AccessKeyPermissionView = unknown;

export interface AccessKeyView {
  nonce: number;
  permission: unknown;
}

export interface AccountCreationConfigView {
  minallowedtoplevelaccountlength?: number;
  registraraccountid?: unknown;
}

export interface AccountDataView {
  accountkey?: unknown;
  peerid?: unknown;
  proxies: unknown[];
  timestamp: string;
}

export type AccountId = string;

export type AccountIdValidityRulesVersion = number;

export interface AccountInfo {
  accountid?: unknown;
  amount: string;
  publickey?: unknown;
}

export interface AccountView {
  amount: string;
  codehash?: unknown;
  globalcontractaccountid?: unknown;
  globalcontracthash?: unknown;
  locked: string;
  storagepaidat?: number;
  storageusage?: number;
}

export interface AccountWithPublicKey {
  accountid?: unknown;
  publickey?: unknown;
}

export interface ContractCodeView {
  codebase64?: string;
  hash: unknown;
}

export interface GasKeyView {
  balance: number;
  numnonces?: number;
  permission: unknown;
}

export type GlobalContractDeployMode = unknown;

export type GlobalContractIdentifier = unknown;

export type InvalidAccessKeyError = unknown;

export type PublicKey = string;

export type StateChangeCauseView = unknown;

export type StateChangeKindView = unknown;

export interface StateChangeWithCauseView {
  cause: unknown;
}

export interface StateItem {
  key: string;
  value: string;
}

export interface StateSyncConfig {
  dump?: unknown;
  sync?: unknown;
}

export interface ViewStateResult {
  proof?: string[];
  values: unknown[];
}
