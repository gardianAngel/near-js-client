/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';

export const AccessKeySchema = z.object({
  nonce: z.number(),
  permission: z.unknown()
});

export const AccessKeyCreationConfigViewSchema = z.object({
  fullAccessCost: z.unknown().optional(),
  functionCallCost: z.unknown().optional(),
  functionCallCostPerByte: z.unknown().optional()
});

export const AccessKeyInfoViewSchema = z.object({
  accessKey: z.unknown().optional(),
  publicKey: z.unknown().optional()
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
  minAllowedTopLevelAccountLength: z.number().optional(),
  registrarAccountId: z.unknown().optional()
});

export const AccountDataViewSchema = z.object({
  accountKey: z.unknown().optional(),
  peerId: z.unknown().optional(),
  proxies: z.array(z.unknown()),
  timestamp: z.string()
});

export const AccountIdSchema = z.string();

export const AccountIdValidityRulesVersionSchema = z.number();

export const AccountInfoSchema = z.object({
  accountId: z.unknown().optional(),
  amount: z.string(),
  publicKey: z.unknown().optional()
});

export const AccountViewSchema = z.object({
  amount: z.string(),
  codeHash: z.unknown().optional(),
  globalContractAccountId: z.unknown().optional(),
  globalContractHash: z.unknown().optional(),
  locked: z.string(),
  storagePaidAt: z.number().optional(),
  storageUsage: z.number().optional()
});

export const AccountWithPublicKeySchema = z.object({
  accountId: z.unknown().optional(),
  publicKey: z.unknown().optional()
});

export const ContractCodeViewSchema = z.object({
  codeBase64: z.string().optional(),
  hash: z.unknown()
});

export const GasKeyViewSchema = z.object({
  balance: z.number(),
  numNonces: z.number().optional(),
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
