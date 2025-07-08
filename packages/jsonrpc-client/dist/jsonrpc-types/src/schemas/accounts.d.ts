/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
import { z } from 'zod';
export declare const AccessKeySchema: z.ZodObject<{
    nonce: z.ZodNumber;
    permission: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    nonce: number;
    permission?: unknown;
}, {
    nonce: number;
    permission?: unknown;
}>;
export declare const AccessKeyCreationConfigViewSchema: z.ZodObject<{
    fullaccesscost: z.ZodOptional<z.ZodUnknown>;
    functioncallcost: z.ZodOptional<z.ZodUnknown>;
    functioncallcostperbyte: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    fullaccesscost?: unknown;
    functioncallcost?: unknown;
    functioncallcostperbyte?: unknown;
}, {
    fullaccesscost?: unknown;
    functioncallcost?: unknown;
    functioncallcostperbyte?: unknown;
}>;
export declare const AccessKeyInfoViewSchema: z.ZodObject<{
    accesskey: z.ZodOptional<z.ZodUnknown>;
    publickey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accesskey?: unknown;
    publickey?: unknown;
}, {
    accesskey?: unknown;
    publickey?: unknown;
}>;
export declare const AccessKeyListSchema: z.ZodObject<{
    keys: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    keys: unknown[];
}, {
    keys: unknown[];
}>;
export declare const AccessKeyPermissionSchema: z.ZodUnknown;
export declare const AccessKeyPermissionViewSchema: z.ZodUnknown;
export declare const AccessKeyViewSchema: z.ZodObject<{
    nonce: z.ZodNumber;
    permission: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    nonce: number;
    permission?: unknown;
}, {
    nonce: number;
    permission?: unknown;
}>;
export declare const AccountCreationConfigViewSchema: z.ZodObject<{
    minallowedtoplevelaccountlength: z.ZodOptional<z.ZodNumber>;
    registraraccountid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    minallowedtoplevelaccountlength?: number | undefined;
    registraraccountid?: unknown;
}, {
    minallowedtoplevelaccountlength?: number | undefined;
    registraraccountid?: unknown;
}>;
export declare const AccountDataViewSchema: z.ZodObject<{
    accountkey: z.ZodOptional<z.ZodUnknown>;
    peerid: z.ZodOptional<z.ZodUnknown>;
    proxies: z.ZodArray<z.ZodUnknown, "many">;
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    proxies: unknown[];
    timestamp: string;
    accountkey?: unknown;
    peerid?: unknown;
}, {
    proxies: unknown[];
    timestamp: string;
    accountkey?: unknown;
    peerid?: unknown;
}>;
export declare const AccountIdSchema: z.ZodString;
export declare const AccountIdValidityRulesVersionSchema: z.ZodNumber;
export declare const AccountInfoSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    amount: z.ZodString;
    publickey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    amount: string;
    publickey?: unknown;
    accountid?: unknown;
}, {
    amount: string;
    publickey?: unknown;
    accountid?: unknown;
}>;
export declare const AccountViewSchema: z.ZodObject<{
    amount: z.ZodString;
    codehash: z.ZodOptional<z.ZodUnknown>;
    globalcontractaccountid: z.ZodOptional<z.ZodUnknown>;
    globalcontracthash: z.ZodOptional<z.ZodUnknown>;
    locked: z.ZodString;
    storagepaidat: z.ZodOptional<z.ZodNumber>;
    storageusage: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    amount: string;
    locked: string;
    codehash?: unknown;
    globalcontractaccountid?: unknown;
    globalcontracthash?: unknown;
    storagepaidat?: number | undefined;
    storageusage?: number | undefined;
}, {
    amount: string;
    locked: string;
    codehash?: unknown;
    globalcontractaccountid?: unknown;
    globalcontracthash?: unknown;
    storagepaidat?: number | undefined;
    storageusage?: number | undefined;
}>;
export declare const AccountWithPublicKeySchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    publickey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    publickey?: unknown;
    accountid?: unknown;
}, {
    publickey?: unknown;
    accountid?: unknown;
}>;
export declare const ContractCodeViewSchema: z.ZodObject<{
    codebase64: z.ZodOptional<z.ZodString>;
    hash: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    codebase64?: string | undefined;
    hash?: unknown;
}, {
    codebase64?: string | undefined;
    hash?: unknown;
}>;
export declare const GasKeyViewSchema: z.ZodObject<{
    balance: z.ZodNumber;
    numnonces: z.ZodOptional<z.ZodNumber>;
    permission: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    balance: number;
    permission?: unknown;
    numnonces?: number | undefined;
}, {
    balance: number;
    permission?: unknown;
    numnonces?: number | undefined;
}>;
export declare const GlobalContractDeployModeSchema: z.ZodUnknown;
export declare const GlobalContractIdentifierSchema: z.ZodUnknown;
export declare const InvalidAccessKeyErrorSchema: z.ZodUnknown;
export declare const PublicKeySchema: z.ZodString;
export declare const StateChangeCauseViewSchema: z.ZodUnknown;
export declare const StateChangeKindViewSchema: z.ZodUnknown;
export declare const StateChangeWithCauseViewSchema: z.ZodObject<{
    cause: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    cause?: unknown;
}, {
    cause?: unknown;
}>;
export declare const StateItemSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    key: string;
}, {
    value: string;
    key: string;
}>;
export declare const StateSyncConfigSchema: z.ZodObject<{
    concurrency: z.ZodOptional<z.ZodUnknown>;
    dump: z.ZodOptional<z.ZodUnknown>;
    sync: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    concurrency?: unknown;
    dump?: unknown;
    sync?: unknown;
}, {
    concurrency?: unknown;
    dump?: unknown;
    sync?: unknown;
}>;
export declare const ViewStateResultSchema: z.ZodObject<{
    proof: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    values: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    values: unknown[];
    proof?: string[] | undefined;
}, {
    values: unknown[];
    proof?: string[] | undefined;
}>;
