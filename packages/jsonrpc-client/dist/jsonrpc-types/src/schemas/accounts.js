"use strict";
/**
 * Zod schemas for account-related NEAR Protocol JSON-RPC types
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractStateChangesResponseSchema = exports.StateChangeSchema = exports.StateChangeValueSchema = exports.StateChangeTypeSchema = exports.StateChangeCauseSchema = exports.ContractStateChangesQuerySchema = exports.ContractStateResponseSchema = exports.StateItemSchema = exports.ContractStateQuerySchema = exports.ContractCodeResponseSchema = exports.ContractCodeQuerySchema = exports.CodeResponseSchema = exports.CodeQuerySchema = exports.AccessKeyListResponseSchema = exports.AccessKeyWithPublicKeySchema = exports.AccessKeyListQuerySchema = exports.AccessKeyResponseSchema = exports.AccessKeyQuerySchema = exports.AccountResponseSchema = exports.AccountQuerySchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
const blocks_1 = require("./blocks");
exports.AccountQuerySchema = common_1.BlockReferenceSchema.extend({
    accountId: zod_1.z.string(),
});
exports.AccountResponseSchema = zod_1.z.object({
    amount: zod_1.z.string(),
    locked: zod_1.z.string(),
    codeHash: zod_1.z.string(),
    storageUsage: zod_1.z.number(),
    storagePaidAt: zod_1.z.number(),
    blockHeight: zod_1.z.number(),
    blockHash: zod_1.z.string(),
});
exports.AccessKeyQuerySchema = common_1.BlockReferenceSchema.extend({
    accountId: zod_1.z.string(),
    publicKey: zod_1.z.string(),
});
exports.AccessKeyResponseSchema = zod_1.z.object({
    nonce: zod_1.z.number(),
    permission: zod_1.z.union([
        zod_1.z.literal('FullAccess'),
        zod_1.z.object({
            FunctionCall: zod_1.z.object({
                allowance: zod_1.z.string().optional(),
                receiverId: zod_1.z.string(),
                methodNames: zod_1.z.array(zod_1.z.string()),
            }),
        }),
    ]),
    blockHeight: zod_1.z.number(),
    blockHash: zod_1.z.string(),
});
exports.AccessKeyListQuerySchema = common_1.BlockReferenceSchema.extend({
    accountId: zod_1.z.string(),
});
exports.AccessKeyWithPublicKeySchema = zod_1.z.object({
    publicKey: common_1.PublicKeySchema,
    accessKey: blocks_1.AccessKeySchema,
});
exports.AccessKeyListResponseSchema = zod_1.z.object({
    keys: zod_1.z.array(exports.AccessKeyWithPublicKeySchema),
    blockHeight: zod_1.z.number(),
    blockHash: zod_1.z.string(),
});
exports.CodeQuerySchema = common_1.BlockReferenceSchema.extend({
    accountId: zod_1.z.string(),
});
exports.CodeResponseSchema = zod_1.z.object({
    codeBase64: zod_1.z.string(),
    hash: zod_1.z.string(),
    blockHeight: zod_1.z.number(),
    blockHash: zod_1.z.string(),
});
exports.ContractCodeQuerySchema = common_1.BlockReferenceSchema.extend({
    accountId: zod_1.z.string(),
});
exports.ContractCodeResponseSchema = zod_1.z.object({
    result: zod_1.z.string(),
    logs: zod_1.z.array(zod_1.z.string()),
    blockHeight: zod_1.z.number(),
    blockHash: zod_1.z.string(),
});
exports.ContractStateQuerySchema = common_1.BlockReferenceSchema.extend({
    accountId: zod_1.z.string(),
    keyPrefix: zod_1.z.string().optional(),
});
exports.StateItemSchema = zod_1.z.object({
    key: zod_1.z.string(),
    value: zod_1.z.string(),
    proof: zod_1.z.array(zod_1.z.string()),
});
exports.ContractStateResponseSchema = zod_1.z.object({
    values: zod_1.z.array(exports.StateItemSchema),
    proof: zod_1.z.array(zod_1.z.string()),
    blockHeight: zod_1.z.number(),
    blockHash: zod_1.z.string(),
});
exports.ContractStateChangesQuerySchema = common_1.BlockReferenceSchema.extend({
    accountIds: zod_1.z.array(zod_1.z.string()),
    keyPrefix: zod_1.z.string().optional(),
});
exports.StateChangeCauseSchema = zod_1.z.union([
    zod_1.z.object({ type: zod_1.z.literal('transaction_processing'), tx_hash: zod_1.z.string() }),
    zod_1.z.object({ type: zod_1.z.literal('action_receipt_processing_started'), receipt_hash: zod_1.z.string() }),
    zod_1.z.object({ type: zod_1.z.literal('action_receipt_gas_reward'), receipt_hash: zod_1.z.string() }),
    zod_1.z.object({ type: zod_1.z.literal('receipt_processing'), receipt_hash: zod_1.z.string() }),
    zod_1.z.object({ type: zod_1.z.literal('postponed_receipt'), receipt_hash: zod_1.z.string() }),
]);
exports.StateChangeTypeSchema = zod_1.z.enum([
    'account_update',
    'account_deletion',
    'access_key_update',
    'access_key_deletion',
    'data_update',
    'data_deletion',
    'contract_code_update',
    'contract_code_deletion',
]);
exports.StateChangeValueSchema = zod_1.z.object({
    account_id: zod_1.z.string(),
    key_base64: zod_1.z.string().optional(),
    value_base64: zod_1.z.string().optional(),
    public_key: common_1.PublicKeySchema.optional(),
    access_key: blocks_1.AccessKeySchema.optional(),
    account: exports.AccountResponseSchema.optional(),
    code_base64: zod_1.z.string().optional(),
});
exports.StateChangeSchema = zod_1.z.object({
    cause: exports.StateChangeCauseSchema,
    type: exports.StateChangeTypeSchema,
    change: exports.StateChangeValueSchema,
});
exports.ContractStateChangesResponseSchema = zod_1.z.object({
    changes: zod_1.z.array(exports.StateChangeSchema),
    blockHash: zod_1.z.string(),
});
