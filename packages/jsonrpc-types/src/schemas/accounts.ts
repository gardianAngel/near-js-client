/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';

export const AccessKeySchema = z.object({
  nonce: z.number(),
  permission: z.unknown()
});

export const AccessKeyCreationConfigViewSchema = z.object({
  fullaccesscost: z.unknown().optional(),
  functioncallcost: z.unknown().optional(),
  functioncallcostperbyte: z.unknown().optional()
});

export const AccessKeyInfoViewSchema = z.object({
  accesskey: z.unknown().optional(),
  publickey: z.unknown().optional()
});

export const AccessKeyListSchema = z.object({
  keys: z.array(z.unknown())
});

export const AccessKeyPermissionSchema = z.unknown();

export const AccessKeyPermissionViewSchema = z.unknown();

export const AccessKeyViewSchema = z.object({
  nonce: z.number(),
  permission: z.unknown()
});

export const AccountCreationConfigViewSchema = z.object({
  minallowedtoplevelaccountlength: z.number().optional(),
  registraraccountid: z.unknown().optional()
});

export const AccountDataViewSchema = z.object({
  accountkey: z.unknown().optional(),
  peerid: z.unknown().optional(),
  proxies: z.array(z.unknown()),
  timestamp: z.string()
});

export const AccountIdSchema = z.string();

export const AccountIdValidityRulesVersionSchema = z.number();

export const AccountInfoSchema = z.object({
  accountid: z.unknown().optional(),
  amount: z.string(),
  publickey: z.unknown().optional()
});

export const AccountViewSchema = z.object({
  amount: z.string(),
  codehash: z.unknown().optional(),
  globalcontractaccountid: z.unknown().optional(),
  globalcontracthash: z.unknown().optional(),
  locked: z.string(),
  storagepaidat: z.number().optional(),
  storageusage: z.number().optional()
});

export const AccountWithPublicKeySchema = z.object({
  accountid: z.unknown().optional(),
  publickey: z.unknown().optional()
});

export const ContractCodeViewSchema = z.object({
  codebase64: z.string().optional(),
  hash: z.unknown()
});

export const GasKeyViewSchema = z.object({
  balance: z.number(),
  numnonces: z.number().optional(),
  permission: z.unknown()
});

export const GlobalContractDeployModeSchema = z.unknown();

export const GlobalContractIdentifierSchema = z.unknown();

export const InvalidAccessKeyErrorSchema = z.unknown();

export const PublicKeySchema = z.string();

export const StateChangeCauseViewSchema = z.unknown();

export const StateChangeKindViewSchema = z.unknown();

export const StateChangeWithCauseViewSchema = z.object({
  cause: z.unknown()
});

export const StateItemSchema = z.object({
  key: z.string(),
  value: z.string()
});

export const StateSyncConfigSchema = z.object({
  concurrency: z.unknown().optional(),
  dump: z.unknown().optional(),
  sync: z.unknown().optional()
});

export const ViewStateResultSchema = z.object({
  proof: z.array(z.string()).optional(),
  values: z.array(z.unknown())
});
