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
    fullAccessCost: z.ZodOptional<z.ZodUnknown>;
    functionCallCost: z.ZodOptional<z.ZodUnknown>;
    functionCallCostPerByte: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    functionCallCost?: unknown;
    functionCallCostPerByte?: unknown;
    fullAccessCost?: unknown;
}, {
    functionCallCost?: unknown;
    functionCallCostPerByte?: unknown;
    fullAccessCost?: unknown;
}>;
export declare const AccessKeyInfoViewSchema: z.ZodObject<{
    accessKey: z.ZodOptional<z.ZodUnknown>;
    publicKey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accessKey?: unknown;
    publicKey?: unknown;
}, {
    accessKey?: unknown;
    publicKey?: unknown;
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
    minAllowedTopLevelAccountLength: z.ZodOptional<z.ZodNumber>;
    registrarAccountId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    minAllowedTopLevelAccountLength?: number | undefined;
    registrarAccountId?: unknown;
}, {
    minAllowedTopLevelAccountLength?: number | undefined;
    registrarAccountId?: unknown;
}>;
export declare const AccountDataViewSchema: z.ZodObject<{
    accountKey: z.ZodOptional<z.ZodUnknown>;
    peerId: z.ZodOptional<z.ZodUnknown>;
    proxies: z.ZodArray<z.ZodUnknown, "many">;
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    timestamp: string;
    proxies: unknown[];
    peerId?: unknown;
    accountKey?: unknown;
}, {
    timestamp: string;
    proxies: unknown[];
    peerId?: unknown;
    accountKey?: unknown;
}>;
export declare const AccountIdSchema: z.ZodString;
export declare const AccountIdValidityRulesVersionSchema: z.ZodNumber;
export declare const AccountInfoSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
    amount: z.ZodString;
    publicKey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    amount: string;
    accountId?: unknown;
    publicKey?: unknown;
}, {
    amount: string;
    accountId?: unknown;
    publicKey?: unknown;
}>;
export declare const AccountViewSchema: z.ZodObject<{
    amount: z.ZodString;
    codeHash: z.ZodOptional<z.ZodUnknown>;
    globalContractAccountId: z.ZodOptional<z.ZodUnknown>;
    globalContractHash: z.ZodOptional<z.ZodUnknown>;
    locked: z.ZodString;
    storagePaidAt: z.ZodOptional<z.ZodNumber>;
    storageUsage: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    amount: string;
    locked: string;
    codeHash?: unknown;
    globalContractAccountId?: unknown;
    globalContractHash?: unknown;
    storagePaidAt?: number | undefined;
    storageUsage?: number | undefined;
}, {
    amount: string;
    locked: string;
    codeHash?: unknown;
    globalContractAccountId?: unknown;
    globalContractHash?: unknown;
    storagePaidAt?: number | undefined;
    storageUsage?: number | undefined;
}>;
export declare const AccountWithPublicKeySchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
    publicKey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountId?: unknown;
    publicKey?: unknown;
}, {
    accountId?: unknown;
    publicKey?: unknown;
}>;
export declare const ContractCodeViewSchema: z.ZodObject<{
    codeBase64: z.ZodOptional<z.ZodString>;
    hash: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    hash?: unknown;
    codeBase64?: string | undefined;
}, {
    hash?: unknown;
    codeBase64?: string | undefined;
}>;
export declare const GasKeyViewSchema: z.ZodObject<{
    balance: z.ZodNumber;
    numNonces: z.ZodOptional<z.ZodNumber>;
    permission: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    balance: number;
    permission?: unknown;
    numNonces?: number | undefined;
}, {
    balance: number;
    permission?: unknown;
    numNonces?: number | undefined;
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
