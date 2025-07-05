/**
 * Zod schemas for account-related NEAR Protocol JSON-RPC types
 */

import { z } from 'zod';
import { BlockReferenceSchema, PublicKeySchema } from './common';
import { AccessKeySchema } from './blocks';

export const AccountQuerySchema = BlockReferenceSchema.extend({
  accountId: z.string(),
});

export const AccountResponseSchema = z.object({
  amount: z.string(),
  locked: z.string(),
  codeHash: z.string(),
  storageUsage: z.number(),
  storagePaidAt: z.number(),
  blockHeight: z.number(),
  blockHash: z.string(),
});

export const AccessKeyQuerySchema = BlockReferenceSchema.extend({
  accountId: z.string(),
  publicKey: z.string(),
});

export const AccessKeyResponseSchema = z.object({
  nonce: z.number(),
  permission: z.union([
    z.literal('FullAccess'),
    z.object({
      FunctionCall: z.object({
        allowance: z.string().optional(),
        receiverId: z.string(),
        methodNames: z.array(z.string()),
      }),
    }),
  ]),
  blockHeight: z.number(),
  blockHash: z.string(),
});

export const AccessKeyListQuerySchema = BlockReferenceSchema.extend({
  accountId: z.string(),
});

export const AccessKeyWithPublicKeySchema = z.object({
  publicKey: PublicKeySchema,
  accessKey: AccessKeySchema,
});

export const AccessKeyListResponseSchema = z.object({
  keys: z.array(AccessKeyWithPublicKeySchema),
  blockHeight: z.number(),
  blockHash: z.string(),
});

export const CodeQuerySchema = BlockReferenceSchema.extend({
  accountId: z.string(),
});

export const CodeResponseSchema = z.object({
  codeBase64: z.string(),
  hash: z.string(),
  blockHeight: z.number(),
  blockHash: z.string(),
});

export const ContractCodeQuerySchema = BlockReferenceSchema.extend({
  accountId: z.string(),
});

export const ContractCodeResponseSchema = z.object({
  result: z.string(),
  logs: z.array(z.string()),
  blockHeight: z.number(),
  blockHash: z.string(),
});

export const ContractStateQuerySchema = BlockReferenceSchema.extend({
  accountId: z.string(),
  keyPrefix: z.string().optional(),
});

export const StateItemSchema = z.object({
  key: z.string(),
  value: z.string(),
  proof: z.array(z.string()),
});

export const ContractStateResponseSchema = z.object({
  values: z.array(StateItemSchema),
  proof: z.array(z.string()),
  blockHeight: z.number(),
  blockHash: z.string(),
});

export const ContractStateChangesQuerySchema = BlockReferenceSchema.extend({
  accountIds: z.array(z.string()),
  keyPrefix: z.string().optional(),
});

export const StateChangeCauseSchema = z.union([
  z.object({ type: z.literal('transaction_processing'), tx_hash: z.string() }),
  z.object({ type: z.literal('action_receipt_processing_started'), receipt_hash: z.string() }),
  z.object({ type: z.literal('action_receipt_gas_reward'), receipt_hash: z.string() }),
  z.object({ type: z.literal('receipt_processing'), receipt_hash: z.string() }),
  z.object({ type: z.literal('postponed_receipt'), receipt_hash: z.string() }),
]);

export const StateChangeTypeSchema = z.enum([
  'account_update',
  'account_deletion',
  'access_key_update',
  'access_key_deletion',
  'data_update',
  'data_deletion',
  'contract_code_update',
  'contract_code_deletion',
]);

export const StateChangeValueSchema = z.object({
  account_id: z.string(),
  key_base64: z.string().optional(),
  value_base64: z.string().optional(),
  public_key: PublicKeySchema.optional(),
  access_key: AccessKeySchema.optional(),
  account: AccountResponseSchema.optional(),
  code_base64: z.string().optional(),
});

export const StateChangeSchema = z.object({
  cause: StateChangeCauseSchema,
  type: StateChangeTypeSchema,
  change: StateChangeValueSchema,
});

export const ContractStateChangesResponseSchema = z.object({
  changes: z.array(StateChangeSchema),
  blockHash: z.string(),
});
