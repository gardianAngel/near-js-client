"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewStateResultSchema = exports.StateSyncConfigSchema = exports.StateItemSchema = exports.StateChangeWithCauseViewSchema = exports.StateChangeKindViewSchema = exports.StateChangeCauseViewSchema = exports.PublicKeySchema = exports.InvalidAccessKeyErrorSchema = exports.GlobalContractIdentifierSchema = exports.GlobalContractDeployModeSchema = exports.GasKeyViewSchema = exports.ContractCodeViewSchema = exports.AccountWithPublicKeySchema = exports.AccountViewSchema = exports.AccountInfoSchema = exports.AccountIdValidityRulesVersionSchema = exports.AccountIdSchema = exports.AccountDataViewSchema = exports.AccountCreationConfigViewSchema = exports.AccessKeyViewSchema = exports.AccessKeyPermissionViewSchema = exports.AccessKeyPermissionSchema = exports.AccessKeyListSchema = exports.AccessKeyInfoViewSchema = exports.AccessKeyCreationConfigViewSchema = exports.AccessKeySchema = void 0;
const zod_1 = require("zod");
exports.AccessKeySchema = zod_1.z.object({
    nonce: zod_1.z.number(),
    permission: zod_1.z.unknown()
});
exports.AccessKeyCreationConfigViewSchema = zod_1.z.object({
    fullaccesscost: zod_1.z.unknown().optional(),
    functioncallcost: zod_1.z.unknown().optional(),
    functioncallcostperbyte: zod_1.z.unknown().optional()
});
exports.AccessKeyInfoViewSchema = zod_1.z.object({
    accesskey: zod_1.z.unknown().optional(),
    publickey: zod_1.z.unknown().optional()
});
exports.AccessKeyListSchema = zod_1.z.object({
    keys: zod_1.z.array(zod_1.z.unknown())
});
exports.AccessKeyPermissionSchema = zod_1.z.unknown();
exports.AccessKeyPermissionViewSchema = zod_1.z.unknown();
exports.AccessKeyViewSchema = zod_1.z.object({
    nonce: zod_1.z.number(),
    permission: zod_1.z.unknown()
});
exports.AccountCreationConfigViewSchema = zod_1.z.object({
    minallowedtoplevelaccountlength: zod_1.z.number().optional(),
    registraraccountid: zod_1.z.unknown().optional()
});
exports.AccountDataViewSchema = zod_1.z.object({
    accountkey: zod_1.z.unknown().optional(),
    peerid: zod_1.z.unknown().optional(),
    proxies: zod_1.z.array(zod_1.z.unknown()),
    timestamp: zod_1.z.string()
});
exports.AccountIdSchema = zod_1.z.string();
exports.AccountIdValidityRulesVersionSchema = zod_1.z.number();
exports.AccountInfoSchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional(),
    amount: zod_1.z.string(),
    publickey: zod_1.z.unknown().optional()
});
exports.AccountViewSchema = zod_1.z.object({
    amount: zod_1.z.string(),
    codehash: zod_1.z.unknown().optional(),
    globalcontractaccountid: zod_1.z.unknown().optional(),
    globalcontracthash: zod_1.z.unknown().optional(),
    locked: zod_1.z.string(),
    storagepaidat: zod_1.z.number().optional(),
    storageusage: zod_1.z.number().optional()
});
exports.AccountWithPublicKeySchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional(),
    publickey: zod_1.z.unknown().optional()
});
exports.ContractCodeViewSchema = zod_1.z.object({
    codebase64: zod_1.z.string().optional(),
    hash: zod_1.z.unknown()
});
exports.GasKeyViewSchema = zod_1.z.object({
    balance: zod_1.z.number(),
    numnonces: zod_1.z.number().optional(),
    permission: zod_1.z.unknown()
});
exports.GlobalContractDeployModeSchema = zod_1.z.unknown();
exports.GlobalContractIdentifierSchema = zod_1.z.unknown();
exports.InvalidAccessKeyErrorSchema = zod_1.z.unknown();
exports.PublicKeySchema = zod_1.z.string();
exports.StateChangeCauseViewSchema = zod_1.z.unknown();
exports.StateChangeKindViewSchema = zod_1.z.unknown();
exports.StateChangeWithCauseViewSchema = zod_1.z.object({
    cause: zod_1.z.unknown()
});
exports.StateItemSchema = zod_1.z.object({
    key: zod_1.z.string(),
    value: zod_1.z.string()
});
exports.StateSyncConfigSchema = zod_1.z.object({
    dump: zod_1.z.unknown().optional(),
    sync: zod_1.z.unknown().optional()
});
exports.ViewStateResultSchema = zod_1.z.object({
    proof: zod_1.z.array(zod_1.z.string()).optional(),
    values: zod_1.z.array(zod_1.z.unknown())
});
