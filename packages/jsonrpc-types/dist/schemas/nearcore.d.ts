/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */
import { z } from 'zod';
export declare const AccountIdSchema: z.ZodString;
export declare const PublicKeySchema: z.ZodString;
export declare const CryptoHashSchema: z.ZodString;
export declare const BlockHeightSchema: z.ZodNumber;
export declare const BlockHashSchema: z.ZodString;
export declare const ShardIdSchema: z.ZodNumber;
export declare const GasSchema: z.ZodString;
export declare const BalanceSchema: z.ZodString;
export declare const NonceSchema: z.ZodNumber;
export declare const JsonRpcRequestSchema: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    method: z.ZodString;
    params: z.ZodAny;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: "2.0";
    method: string;
    id: string;
    params?: any;
}, {
    jsonrpc: "2.0";
    method: string;
    id: string;
    params?: any;
}>;
export declare const JsonRpcResponseSchema: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    result: z.ZodOptional<z.ZodAny>;
    error: z.ZodOptional<z.ZodObject<{
        code: z.ZodNumber;
        message: z.ZodString;
        data: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        code: number;
        message: string;
        data?: any;
    }, {
        code: number;
        message: string;
        data?: any;
    }>>;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: "2.0";
    id: string;
    result?: any;
    error?: {
        code: number;
        message: string;
        data?: any;
    } | undefined;
}, {
    jsonrpc: "2.0";
    id: string;
    result?: any;
    error?: {
        code: number;
        message: string;
        data?: any;
    } | undefined;
}>;
export declare const AccessKeySchema: z.ZodObject<{
    nonce: z.ZodOptional<z.ZodNumber>;
    permission: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    nonce?: number | undefined;
    permission?: any;
}, {
    nonce?: number | undefined;
    permission?: any;
}>;
export declare const AccessKeyCreationConfigViewSchema: z.ZodObject<{
    fullAccessCost: z.ZodOptional<z.ZodAny>;
    functionCallCost: z.ZodOptional<z.ZodAny>;
    functionCallCostPerByte: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    fullAccessCost?: any;
    functionCallCost?: any;
    functionCallCostPerByte?: any;
}, {
    fullAccessCost?: any;
    functionCallCost?: any;
    functionCallCostPerByte?: any;
}>;
export declare const AccessKeyInfoViewSchema: z.ZodObject<{
    accessKey: z.ZodOptional<z.ZodObject<{
        nonce: z.ZodOptional<z.ZodNumber>;
        permission: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    }, "strip", z.ZodTypeAny, {
        nonce?: number | undefined;
        permission?: string | Record<string, any> | undefined;
    }, {
        nonce?: number | undefined;
        permission?: string | Record<string, any> | undefined;
    }>>;
    publicKey: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    publicKey?: any;
    accessKey?: {
        nonce?: number | undefined;
        permission?: string | Record<string, any> | undefined;
    } | undefined;
}, {
    publicKey?: any;
    accessKey?: {
        nonce?: number | undefined;
        permission?: string | Record<string, any> | undefined;
    } | undefined;
}>;
export declare const AccessKeyListSchema: z.ZodObject<{
    keys: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accessKey: z.ZodOptional<z.ZodObject<{
            nonce: z.ZodOptional<z.ZodNumber>;
            permission: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, "strip", z.ZodTypeAny, {
            nonce?: number | undefined;
            permission?: string | Record<string, any> | undefined;
        }, {
            nonce?: number | undefined;
            permission?: string | Record<string, any> | undefined;
        }>>;
        publicKey: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        publicKey?: any;
        accessKey?: {
            nonce?: number | undefined;
            permission?: string | Record<string, any> | undefined;
        } | undefined;
    }, {
        publicKey?: any;
        accessKey?: {
            nonce?: number | undefined;
            permission?: string | Record<string, any> | undefined;
        } | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    keys?: {
        publicKey?: any;
        accessKey?: {
            nonce?: number | undefined;
            permission?: string | Record<string, any> | undefined;
        } | undefined;
    }[] | undefined;
}, {
    keys?: {
        publicKey?: any;
        accessKey?: {
            nonce?: number | undefined;
            permission?: string | Record<string, any> | undefined;
        } | undefined;
    }[] | undefined;
}>;
export declare const AccessKeyPermissionSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString]>;
export declare const AccessKeyPermissionViewSchema: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const AccessKeyViewSchema: z.ZodObject<{
    nonce: z.ZodOptional<z.ZodNumber>;
    permission: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    nonce?: number | undefined;
    permission?: string | Record<string, any> | undefined;
}, {
    nonce?: number | undefined;
    permission?: string | Record<string, any> | undefined;
}>;
export declare const AccountCreationConfigViewSchema: z.ZodObject<{
    minAllowedTopLevelAccountLength: z.ZodOptional<z.ZodNumber>;
    registrarAccountId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    minAllowedTopLevelAccountLength?: number | undefined;
    registrarAccountId?: any;
}, {
    minAllowedTopLevelAccountLength?: number | undefined;
    registrarAccountId?: any;
}>;
export declare const AccountDataViewSchema: z.ZodObject<{
    accountKey: z.ZodOptional<z.ZodAny>;
    peerId: z.ZodOptional<z.ZodAny>;
    proxies: z.ZodOptional<z.ZodArray<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        peerId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        peerId?: any;
        addr?: string | undefined;
    }, {
        peerId?: any;
        addr?: string | undefined;
    }>, "many">>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountKey?: any;
    peerId?: any;
    proxies?: {
        peerId?: any;
        addr?: string | undefined;
    }[] | undefined;
    timestamp?: string | undefined;
}, {
    accountKey?: any;
    peerId?: any;
    proxies?: {
        peerId?: any;
        addr?: string | undefined;
    }[] | undefined;
    timestamp?: string | undefined;
}>;
export declare const AccountIdSchema: z.ZodAny;
export declare const AccountIdValidityRulesVersionSchema: z.ZodAny;
export declare const AccountInfoSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
    amount: z.ZodOptional<z.ZodString>;
    publicKey: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
    publicKey?: any;
    amount?: string | undefined;
}, {
    accountId?: any;
    publicKey?: any;
    amount?: string | undefined;
}>;
export declare const AccountViewSchema: z.ZodObject<{
    amount: z.ZodOptional<z.ZodString>;
    codeHash: z.ZodOptional<z.ZodAny>;
    globalContractAccountId: z.ZodOptional<z.ZodAny>;
    globalContractHash: z.ZodOptional<z.ZodAny>;
    locked: z.ZodOptional<z.ZodString>;
    storagePaidAt: z.ZodOptional<z.ZodNumber>;
    storageUsage: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    storageUsage?: number | undefined;
    codeHash?: any;
    amount?: string | undefined;
    globalContractAccountId?: any;
    globalContractHash?: any;
    locked?: string | undefined;
    storagePaidAt?: number | undefined;
}, {
    storageUsage?: number | undefined;
    codeHash?: any;
    amount?: string | undefined;
    globalContractAccountId?: any;
    globalContractHash?: any;
    locked?: string | undefined;
    storagePaidAt?: number | undefined;
}>;
export declare const AccountWithPublicKeySchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
    publicKey: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
    publicKey?: any;
}, {
    accountId?: any;
    publicKey?: any;
}>;
export declare const ActionSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const ActionCreationConfigViewSchema: z.ZodObject<{
    addKeyCost: z.ZodOptional<z.ZodAny>;
    createAccountCost: z.ZodOptional<z.ZodAny>;
    delegateCost: z.ZodOptional<z.ZodAny>;
    deleteAccountCost: z.ZodOptional<z.ZodAny>;
    deleteKeyCost: z.ZodOptional<z.ZodAny>;
    deployContractCost: z.ZodOptional<z.ZodAny>;
    deployContractCostPerByte: z.ZodOptional<z.ZodAny>;
    functionCallCost: z.ZodOptional<z.ZodAny>;
    functionCallCostPerByte: z.ZodOptional<z.ZodAny>;
    stakeCost: z.ZodOptional<z.ZodAny>;
    transferCost: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    functionCallCost?: any;
    functionCallCostPerByte?: any;
    addKeyCost?: any;
    createAccountCost?: any;
    delegateCost?: any;
    deleteAccountCost?: any;
    deleteKeyCost?: any;
    deployContractCost?: any;
    deployContractCostPerByte?: any;
    stakeCost?: any;
    transferCost?: any;
}, {
    functionCallCost?: any;
    functionCallCostPerByte?: any;
    addKeyCost?: any;
    createAccountCost?: any;
    delegateCost?: any;
    deleteAccountCost?: any;
    deleteKeyCost?: any;
    deployContractCost?: any;
    deployContractCostPerByte?: any;
    stakeCost?: any;
    transferCost?: any;
}>;
export declare const ActionErrorSchema: z.ZodObject<{
    index: z.ZodOptional<z.ZodNumber>;
    kind: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    index?: number | undefined;
    kind?: any;
}, {
    index?: number | undefined;
    kind?: any;
}>;
export declare const ActionErrorKindSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const ActionViewSchema: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const ActionsValidationErrorSchema: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const AddKeyActionSchema: z.ZodObject<{
    accessKey: z.ZodOptional<z.ZodAny>;
    publicKey: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    publicKey?: any;
    accessKey?: any;
}, {
    publicKey?: any;
    accessKey?: any;
}>;
export declare const BandwidthRequestSchema: z.ZodObject<{
    requestedValuesBitmap: z.ZodOptional<z.ZodAny>;
    toShard: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    requestedValuesBitmap?: any;
    toShard?: number | undefined;
}, {
    requestedValuesBitmap?: any;
    toShard?: number | undefined;
}>;
export declare const BandwidthRequestBitmapSchema: z.ZodObject<{
    data: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    data?: number[] | undefined;
}, {
    data?: number[] | undefined;
}>;
export declare const BandwidthRequestsSchema: z.ZodUnion<readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>;
export declare const BandwidthRequestsV1Schema: z.ZodObject<{
    requests: z.ZodOptional<z.ZodArray<z.ZodObject<{
        requestedValuesBitmap: z.ZodOptional<z.ZodAny>;
        toShard: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        requestedValuesBitmap?: any;
        toShard?: number | undefined;
    }, {
        requestedValuesBitmap?: any;
        toShard?: number | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    requests?: {
        requestedValuesBitmap?: any;
        toShard?: number | undefined;
    }[] | undefined;
}, {
    requests?: {
        requestedValuesBitmap?: any;
        toShard?: number | undefined;
    }[] | undefined;
}>;
export declare const BlockHeaderInnerLiteViewSchema: z.ZodObject<{
    blockMerkleRoot: z.ZodOptional<z.ZodAny>;
    epochId: z.ZodOptional<z.ZodAny>;
    height: z.ZodOptional<z.ZodNumber>;
    nextBpHash: z.ZodOptional<z.ZodAny>;
    nextEpochId: z.ZodOptional<z.ZodAny>;
    outcomeRoot: z.ZodOptional<z.ZodAny>;
    prevStateRoot: z.ZodOptional<z.ZodAny>;
    timestamp: z.ZodOptional<z.ZodNumber>;
    timestampNanosec: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: number | undefined;
    blockMerkleRoot?: any;
    epochId?: any;
    height?: number | undefined;
    nextBpHash?: any;
    nextEpochId?: any;
    outcomeRoot?: any;
    prevStateRoot?: any;
    timestampNanosec?: string | undefined;
}, {
    timestamp?: number | undefined;
    blockMerkleRoot?: any;
    epochId?: any;
    height?: number | undefined;
    nextBpHash?: any;
    nextEpochId?: any;
    outcomeRoot?: any;
    prevStateRoot?: any;
    timestampNanosec?: string | undefined;
}>;
export declare const BlockHeaderViewSchema: z.ZodObject<{
    approvals: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    blockBodyHash: z.ZodOptional<z.ZodAny>;
    blockMerkleRoot: z.ZodOptional<z.ZodAny>;
    blockOrdinal: z.ZodOptional<z.ZodNumber>;
    challengesResult: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
        isDoubleSign: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
        isDoubleSign?: boolean | undefined;
    }, {
        accountId?: any;
        isDoubleSign?: boolean | undefined;
    }>, "many">>;
    challengesRoot: z.ZodOptional<z.ZodAny>;
    chunkEndorsements: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodNumber, "many">, "many">>;
    chunkHeadersRoot: z.ZodOptional<z.ZodAny>;
    chunkMask: z.ZodOptional<z.ZodArray<z.ZodBoolean, "many">>;
    chunkReceiptsRoot: z.ZodOptional<z.ZodAny>;
    chunkTxRoot: z.ZodOptional<z.ZodAny>;
    chunksIncluded: z.ZodOptional<z.ZodNumber>;
    epochId: z.ZodOptional<z.ZodAny>;
    epochSyncDataHash: z.ZodOptional<z.ZodAny>;
    gasPrice: z.ZodOptional<z.ZodString>;
    hash: z.ZodOptional<z.ZodAny>;
    height: z.ZodOptional<z.ZodNumber>;
    lastDsFinalBlock: z.ZodOptional<z.ZodAny>;
    lastFinalBlock: z.ZodOptional<z.ZodAny>;
    latestProtocolVersion: z.ZodOptional<z.ZodNumber>;
    nextBpHash: z.ZodOptional<z.ZodAny>;
    nextEpochId: z.ZodOptional<z.ZodAny>;
    outcomeRoot: z.ZodOptional<z.ZodAny>;
    prevHash: z.ZodOptional<z.ZodAny>;
    prevHeight: z.ZodOptional<z.ZodNumber>;
    prevStateRoot: z.ZodOptional<z.ZodAny>;
    randomValue: z.ZodOptional<z.ZodAny>;
    rentPaid: z.ZodOptional<z.ZodString>;
    signature: z.ZodOptional<z.ZodAny>;
    timestamp: z.ZodOptional<z.ZodNumber>;
    timestampNanosec: z.ZodOptional<z.ZodString>;
    totalSupply: z.ZodOptional<z.ZodString>;
    validatorProposals: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>, "many">>;
    validatorReward: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    gasPrice?: string | undefined;
    timestamp?: number | undefined;
    blockMerkleRoot?: any;
    epochId?: any;
    height?: number | undefined;
    nextBpHash?: any;
    nextEpochId?: any;
    outcomeRoot?: any;
    prevStateRoot?: any;
    timestampNanosec?: string | undefined;
    approvals?: any[] | undefined;
    blockBodyHash?: any;
    blockOrdinal?: number | undefined;
    challengesResult?: {
        accountId?: any;
        isDoubleSign?: boolean | undefined;
    }[] | undefined;
    challengesRoot?: any;
    chunkEndorsements?: number[][] | undefined;
    chunkHeadersRoot?: any;
    chunkMask?: boolean[] | undefined;
    chunkReceiptsRoot?: any;
    chunkTxRoot?: any;
    chunksIncluded?: number | undefined;
    epochSyncDataHash?: any;
    hash?: any;
    lastDsFinalBlock?: any;
    lastFinalBlock?: any;
    latestProtocolVersion?: number | undefined;
    prevHash?: any;
    prevHeight?: number | undefined;
    randomValue?: any;
    rentPaid?: string | undefined;
    signature?: any;
    totalSupply?: string | undefined;
    validatorProposals?: any[] | undefined;
    validatorReward?: string | undefined;
}, {
    gasPrice?: string | undefined;
    timestamp?: number | undefined;
    blockMerkleRoot?: any;
    epochId?: any;
    height?: number | undefined;
    nextBpHash?: any;
    nextEpochId?: any;
    outcomeRoot?: any;
    prevStateRoot?: any;
    timestampNanosec?: string | undefined;
    approvals?: any[] | undefined;
    blockBodyHash?: any;
    blockOrdinal?: number | undefined;
    challengesResult?: {
        accountId?: any;
        isDoubleSign?: boolean | undefined;
    }[] | undefined;
    challengesRoot?: any;
    chunkEndorsements?: number[][] | undefined;
    chunkHeadersRoot?: any;
    chunkMask?: boolean[] | undefined;
    chunkReceiptsRoot?: any;
    chunkTxRoot?: any;
    chunksIncluded?: number | undefined;
    epochSyncDataHash?: any;
    hash?: any;
    lastDsFinalBlock?: any;
    lastFinalBlock?: any;
    latestProtocolVersion?: number | undefined;
    prevHash?: any;
    prevHeight?: number | undefined;
    randomValue?: any;
    rentPaid?: string | undefined;
    signature?: any;
    totalSupply?: string | undefined;
    validatorProposals?: any[] | undefined;
    validatorReward?: string | undefined;
}>;
export declare const BlockIdSchema: z.ZodUnion<[z.ZodNumber, z.ZodAny]>;
export declare const BlockStatusViewSchema: z.ZodObject<{
    hash: z.ZodOptional<z.ZodAny>;
    height: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    height?: number | undefined;
    hash?: any;
}, {
    height?: number | undefined;
    hash?: any;
}>;
export declare const CallResultSchema: z.ZodObject<{
    logs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    result: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    result?: number[] | undefined;
    logs?: string[] | undefined;
}, {
    result?: number[] | undefined;
    logs?: string[] | undefined;
}>;
export declare const CatchupStatusViewSchema: z.ZodObject<{
    blocksToCatchup: z.ZodOptional<z.ZodArray<z.ZodObject<{
        hash: z.ZodOptional<z.ZodAny>;
        height: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        height?: number | undefined;
        hash?: any;
    }, {
        height?: number | undefined;
        hash?: any;
    }>, "many">>;
    shardSyncStatus: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    syncBlockHash: z.ZodOptional<z.ZodAny>;
    syncBlockHeight: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    blocksToCatchup?: {
        height?: number | undefined;
        hash?: any;
    }[] | undefined;
    shardSyncStatus?: Record<string, any> | undefined;
    syncBlockHash?: any;
    syncBlockHeight?: number | undefined;
}, {
    blocksToCatchup?: {
        height?: number | undefined;
        hash?: any;
    }[] | undefined;
    shardSyncStatus?: Record<string, any> | undefined;
    syncBlockHash?: any;
    syncBlockHeight?: number | undefined;
}>;
export declare const ChunkDistributionNetworkConfigSchema: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    uris: z.ZodOptional<z.ZodObject<{
        get: z.ZodOptional<z.ZodString>;
        set: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        set?: string | undefined;
        get?: string | undefined;
    }, {
        set?: string | undefined;
        get?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled?: boolean | undefined;
    uris?: {
        set?: string | undefined;
        get?: string | undefined;
    } | undefined;
}, {
    enabled?: boolean | undefined;
    uris?: {
        set?: string | undefined;
        get?: string | undefined;
    } | undefined;
}>;
export declare const ChunkDistributionUrisSchema: z.ZodObject<{
    get: z.ZodOptional<z.ZodString>;
    set: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    set?: string | undefined;
    get?: string | undefined;
}, {
    set?: string | undefined;
    get?: string | undefined;
}>;
export declare const ChunkHeaderViewSchema: z.ZodObject<{
    balanceBurnt: z.ZodOptional<z.ZodString>;
    bandwidthRequests: z.ZodOptional<z.ZodAny>;
    chunkHash: z.ZodOptional<z.ZodAny>;
    congestionInfo: z.ZodOptional<z.ZodAny>;
    encodedLength: z.ZodOptional<z.ZodNumber>;
    encodedMerkleRoot: z.ZodOptional<z.ZodAny>;
    gasLimit: z.ZodOptional<z.ZodNumber>;
    gasUsed: z.ZodOptional<z.ZodNumber>;
    heightCreated: z.ZodOptional<z.ZodNumber>;
    heightIncluded: z.ZodOptional<z.ZodNumber>;
    outcomeRoot: z.ZodOptional<z.ZodAny>;
    outgoingReceiptsRoot: z.ZodOptional<z.ZodAny>;
    prevBlockHash: z.ZodOptional<z.ZodAny>;
    prevStateRoot: z.ZodOptional<z.ZodAny>;
    rentPaid: z.ZodOptional<z.ZodString>;
    shardId: z.ZodOptional<z.ZodAny>;
    signature: z.ZodOptional<z.ZodAny>;
    txRoot: z.ZodOptional<z.ZodAny>;
    validatorProposals: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>, "many">>;
    validatorReward: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    outcomeRoot?: any;
    prevStateRoot?: any;
    rentPaid?: string | undefined;
    signature?: any;
    validatorProposals?: any[] | undefined;
    validatorReward?: string | undefined;
    balanceBurnt?: string | undefined;
    bandwidthRequests?: any;
    chunkHash?: any;
    congestionInfo?: any;
    encodedLength?: number | undefined;
    encodedMerkleRoot?: any;
    gasLimit?: number | undefined;
    gasUsed?: number | undefined;
    heightCreated?: number | undefined;
    heightIncluded?: number | undefined;
    outgoingReceiptsRoot?: any;
    prevBlockHash?: any;
    shardId?: any;
    txRoot?: any;
}, {
    outcomeRoot?: any;
    prevStateRoot?: any;
    rentPaid?: string | undefined;
    signature?: any;
    validatorProposals?: any[] | undefined;
    validatorReward?: string | undefined;
    balanceBurnt?: string | undefined;
    bandwidthRequests?: any;
    chunkHash?: any;
    congestionInfo?: any;
    encodedLength?: number | undefined;
    encodedMerkleRoot?: any;
    gasLimit?: number | undefined;
    gasUsed?: number | undefined;
    heightCreated?: number | undefined;
    heightIncluded?: number | undefined;
    outgoingReceiptsRoot?: any;
    prevBlockHash?: any;
    shardId?: any;
    txRoot?: any;
}>;
export declare const CompilationErrorSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const CongestionControlConfigViewSchema: z.ZodObject<{
    allowedShardOutgoingGas: z.ZodOptional<z.ZodNumber>;
    maxCongestionIncomingGas: z.ZodOptional<z.ZodNumber>;
    maxCongestionMemoryConsumption: z.ZodOptional<z.ZodNumber>;
    maxCongestionMissedChunks: z.ZodOptional<z.ZodNumber>;
    maxCongestionOutgoingGas: z.ZodOptional<z.ZodNumber>;
    maxOutgoingGas: z.ZodOptional<z.ZodNumber>;
    maxTxGas: z.ZodOptional<z.ZodNumber>;
    minOutgoingGas: z.ZodOptional<z.ZodNumber>;
    minTxGas: z.ZodOptional<z.ZodNumber>;
    outgoingReceiptsBigSizeLimit: z.ZodOptional<z.ZodNumber>;
    outgoingReceiptsUsualSizeLimit: z.ZodOptional<z.ZodNumber>;
    rejectTxCongestionThreshold: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    allowedShardOutgoingGas?: number | undefined;
    maxCongestionIncomingGas?: number | undefined;
    maxCongestionMemoryConsumption?: number | undefined;
    maxCongestionMissedChunks?: number | undefined;
    maxCongestionOutgoingGas?: number | undefined;
    maxOutgoingGas?: number | undefined;
    maxTxGas?: number | undefined;
    minOutgoingGas?: number | undefined;
    minTxGas?: number | undefined;
    outgoingReceiptsBigSizeLimit?: number | undefined;
    outgoingReceiptsUsualSizeLimit?: number | undefined;
    rejectTxCongestionThreshold?: number | undefined;
}, {
    allowedShardOutgoingGas?: number | undefined;
    maxCongestionIncomingGas?: number | undefined;
    maxCongestionMemoryConsumption?: number | undefined;
    maxCongestionMissedChunks?: number | undefined;
    maxCongestionOutgoingGas?: number | undefined;
    maxOutgoingGas?: number | undefined;
    maxTxGas?: number | undefined;
    minOutgoingGas?: number | undefined;
    minTxGas?: number | undefined;
    outgoingReceiptsBigSizeLimit?: number | undefined;
    outgoingReceiptsUsualSizeLimit?: number | undefined;
    rejectTxCongestionThreshold?: number | undefined;
}>;
export declare const CongestionInfoViewSchema: z.ZodObject<{
    allowedShard: z.ZodOptional<z.ZodNumber>;
    bufferedReceiptsGas: z.ZodOptional<z.ZodString>;
    delayedReceiptsGas: z.ZodOptional<z.ZodString>;
    receiptBytes: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    allowedShard?: number | undefined;
    bufferedReceiptsGas?: string | undefined;
    delayedReceiptsGas?: string | undefined;
    receiptBytes?: number | undefined;
}, {
    allowedShard?: number | undefined;
    bufferedReceiptsGas?: string | undefined;
    delayedReceiptsGas?: string | undefined;
    receiptBytes?: number | undefined;
}>;
export declare const ContractCodeViewSchema: z.ZodObject<{
    codeBase64: z.ZodOptional<z.ZodString>;
    hash: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    hash?: any;
    codeBase64?: string | undefined;
}, {
    hash?: any;
    codeBase64?: string | undefined;
}>;
export declare const CostGasUsedSchema: z.ZodObject<{
    cost: z.ZodOptional<z.ZodString>;
    costCategory: z.ZodOptional<z.ZodString>;
    gasUsed: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    gasUsed?: string | undefined;
    cost?: string | undefined;
    costCategory?: string | undefined;
}, {
    gasUsed?: string | undefined;
    cost?: string | undefined;
    costCategory?: string | undefined;
}>;
export declare const CreateAccountActionSchema: z.ZodAny;
export declare const CryptoHashSchema: z.ZodAny;
export declare const CurrentEpochValidatorInfoSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
    isSlashed: z.ZodOptional<z.ZodBoolean>;
    numExpectedBlocks: z.ZodOptional<z.ZodNumber>;
    numExpectedChunks: z.ZodOptional<z.ZodNumber>;
    numExpectedChunksPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numExpectedEndorsements: z.ZodOptional<z.ZodNumber>;
    numExpectedEndorsementsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numProducedBlocks: z.ZodOptional<z.ZodNumber>;
    numProducedChunks: z.ZodOptional<z.ZodNumber>;
    numProducedChunksPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numProducedEndorsements: z.ZodOptional<z.ZodNumber>;
    numProducedEndorsementsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    publicKey: z.ZodOptional<z.ZodAny>;
    shards: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    shardsEndorsed: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    stake: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
    publicKey?: any;
    isSlashed?: boolean | undefined;
    numExpectedBlocks?: number | undefined;
    numExpectedChunks?: number | undefined;
    numExpectedChunksPerShard?: number[] | undefined;
    numExpectedEndorsements?: number | undefined;
    numExpectedEndorsementsPerShard?: number[] | undefined;
    numProducedBlocks?: number | undefined;
    numProducedChunks?: number | undefined;
    numProducedChunksPerShard?: number[] | undefined;
    numProducedEndorsements?: number | undefined;
    numProducedEndorsementsPerShard?: number[] | undefined;
    shards?: any[] | undefined;
    shardsEndorsed?: any[] | undefined;
    stake?: string | undefined;
}, {
    accountId?: any;
    publicKey?: any;
    isSlashed?: boolean | undefined;
    numExpectedBlocks?: number | undefined;
    numExpectedChunks?: number | undefined;
    numExpectedChunksPerShard?: number[] | undefined;
    numExpectedEndorsements?: number | undefined;
    numExpectedEndorsementsPerShard?: number[] | undefined;
    numProducedBlocks?: number | undefined;
    numProducedChunks?: number | undefined;
    numProducedChunksPerShard?: number[] | undefined;
    numProducedEndorsements?: number | undefined;
    numProducedEndorsementsPerShard?: number[] | undefined;
    shards?: any[] | undefined;
    shardsEndorsed?: any[] | undefined;
    stake?: string | undefined;
}>;
export declare const DataReceiptCreationConfigViewSchema: z.ZodObject<{
    baseCost: z.ZodOptional<z.ZodAny>;
    costPerByte: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    baseCost?: any;
    costPerByte?: any;
}, {
    baseCost?: any;
    costPerByte?: any;
}>;
export declare const DataReceiverViewSchema: z.ZodObject<{
    dataId: z.ZodOptional<z.ZodAny>;
    receiverId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    dataId?: any;
    receiverId?: any;
}, {
    dataId?: any;
    receiverId?: any;
}>;
export declare const DelegateActionSchema: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    maxBlockHeight: z.ZodOptional<z.ZodNumber>;
    nonce: z.ZodOptional<z.ZodNumber>;
    publicKey: z.ZodOptional<z.ZodAny>;
    receiverId: z.ZodOptional<z.ZodAny>;
    senderId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    publicKey?: any;
    nonce?: number | undefined;
    receiverId?: any;
    actions?: any[] | undefined;
    maxBlockHeight?: number | undefined;
    senderId?: any;
}, {
    publicKey?: any;
    nonce?: number | undefined;
    receiverId?: any;
    actions?: any[] | undefined;
    maxBlockHeight?: number | undefined;
    senderId?: any;
}>;
export declare const DeleteAccountActionSchema: z.ZodObject<{
    beneficiaryId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    beneficiaryId?: any;
}, {
    beneficiaryId?: any;
}>;
export declare const DeleteKeyActionSchema: z.ZodObject<{
    publicKey: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    publicKey?: any;
}, {
    publicKey?: any;
}>;
export declare const DeployContractActionSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code?: string | undefined;
}, {
    code?: string | undefined;
}>;
export declare const DeployGlobalContractActionSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    deployMode: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
}, "strip", z.ZodTypeAny, {
    code?: string | undefined;
    deployMode?: string | undefined;
}, {
    code?: string | undefined;
    deployMode?: string | undefined;
}>;
export declare const DetailedDebugStatusSchema: z.ZodObject<{
    blockProductionDelayMillis: z.ZodOptional<z.ZodNumber>;
    catchupStatus: z.ZodOptional<z.ZodArray<z.ZodObject<{
        blocksToCatchup: z.ZodOptional<z.ZodArray<z.ZodObject<{
            hash: z.ZodOptional<z.ZodAny>;
            height: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            height?: number | undefined;
            hash?: any;
        }, {
            height?: number | undefined;
            hash?: any;
        }>, "many">>;
        shardSyncStatus: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        syncBlockHash: z.ZodOptional<z.ZodAny>;
        syncBlockHeight: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        blocksToCatchup?: {
            height?: number | undefined;
            hash?: any;
        }[] | undefined;
        shardSyncStatus?: Record<string, any> | undefined;
        syncBlockHash?: any;
        syncBlockHeight?: number | undefined;
    }, {
        blocksToCatchup?: {
            height?: number | undefined;
            hash?: any;
        }[] | undefined;
        shardSyncStatus?: Record<string, any> | undefined;
        syncBlockHash?: any;
        syncBlockHeight?: number | undefined;
    }>, "many">>;
    currentHeadStatus: z.ZodOptional<z.ZodObject<{
        hash: z.ZodOptional<z.ZodAny>;
        height: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        height?: number | undefined;
        hash?: any;
    }, {
        height?: number | undefined;
        hash?: any;
    }>>;
    currentHeaderHeadStatus: z.ZodOptional<z.ZodObject<{
        hash: z.ZodOptional<z.ZodAny>;
        height: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        height?: number | undefined;
        hash?: any;
    }, {
        height?: number | undefined;
        hash?: any;
    }>>;
    networkInfo: z.ZodOptional<z.ZodObject<{
        connectedPeers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            accountId: z.ZodOptional<z.ZodAny>;
            addr: z.ZodOptional<z.ZodString>;
            archival: z.ZodOptional<z.ZodBoolean>;
            blockHash: z.ZodOptional<z.ZodAny>;
            connectionEstablishedTimeMillis: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            isHighestBlockInvalid: z.ZodOptional<z.ZodBoolean>;
            isOutboundPeer: z.ZodOptional<z.ZodBoolean>;
            lastTimePeerRequestedMillis: z.ZodOptional<z.ZodNumber>;
            lastTimeReceivedMessageMillis: z.ZodOptional<z.ZodNumber>;
            nonce: z.ZodOptional<z.ZodNumber>;
            peerId: z.ZodOptional<z.ZodAny>;
            receivedBytesPerSec: z.ZodOptional<z.ZodNumber>;
            sentBytesPerSec: z.ZodOptional<z.ZodNumber>;
            trackedShards: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }, {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }>, "many">>;
        knownProducers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            accountId: z.ZodOptional<z.ZodAny>;
            nextHops: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
            peerId: z.ZodOptional<z.ZodAny>;
        }, "strip", z.ZodTypeAny, {
            accountId?: any;
            peerId?: any;
            nextHops?: any[] | undefined;
        }, {
            accountId?: any;
            peerId?: any;
            nextHops?: any[] | undefined;
        }>, "many">>;
        numConnectedPeers: z.ZodOptional<z.ZodNumber>;
        peerMaxCount: z.ZodOptional<z.ZodNumber>;
        tier1AccountsData: z.ZodOptional<z.ZodArray<z.ZodObject<{
            accountKey: z.ZodOptional<z.ZodAny>;
            peerId: z.ZodOptional<z.ZodAny>;
            proxies: z.ZodOptional<z.ZodArray<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                peerId: z.ZodOptional<z.ZodAny>;
            }, "strip", z.ZodTypeAny, {
                peerId?: any;
                addr?: string | undefined;
            }, {
                peerId?: any;
                addr?: string | undefined;
            }>, "many">>;
            timestamp: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            accountKey?: any;
            peerId?: any;
            proxies?: {
                peerId?: any;
                addr?: string | undefined;
            }[] | undefined;
            timestamp?: string | undefined;
        }, {
            accountKey?: any;
            peerId?: any;
            proxies?: {
                peerId?: any;
                addr?: string | undefined;
            }[] | undefined;
            timestamp?: string | undefined;
        }>, "many">>;
        tier1AccountsKeys: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        tier1Connections: z.ZodOptional<z.ZodArray<z.ZodObject<{
            accountId: z.ZodOptional<z.ZodAny>;
            addr: z.ZodOptional<z.ZodString>;
            archival: z.ZodOptional<z.ZodBoolean>;
            blockHash: z.ZodOptional<z.ZodAny>;
            connectionEstablishedTimeMillis: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            isHighestBlockInvalid: z.ZodOptional<z.ZodBoolean>;
            isOutboundPeer: z.ZodOptional<z.ZodBoolean>;
            lastTimePeerRequestedMillis: z.ZodOptional<z.ZodNumber>;
            lastTimeReceivedMessageMillis: z.ZodOptional<z.ZodNumber>;
            nonce: z.ZodOptional<z.ZodNumber>;
            peerId: z.ZodOptional<z.ZodAny>;
            receivedBytesPerSec: z.ZodOptional<z.ZodNumber>;
            sentBytesPerSec: z.ZodOptional<z.ZodNumber>;
            trackedShards: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }, {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        connectedPeers?: {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }[] | undefined;
        knownProducers?: {
            accountId?: any;
            peerId?: any;
            nextHops?: any[] | undefined;
        }[] | undefined;
        numConnectedPeers?: number | undefined;
        peerMaxCount?: number | undefined;
        tier1AccountsData?: {
            accountKey?: any;
            peerId?: any;
            proxies?: {
                peerId?: any;
                addr?: string | undefined;
            }[] | undefined;
            timestamp?: string | undefined;
        }[] | undefined;
        tier1AccountsKeys?: any[] | undefined;
        tier1Connections?: {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }[] | undefined;
    }, {
        connectedPeers?: {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }[] | undefined;
        knownProducers?: {
            accountId?: any;
            peerId?: any;
            nextHops?: any[] | undefined;
        }[] | undefined;
        numConnectedPeers?: number | undefined;
        peerMaxCount?: number | undefined;
        tier1AccountsData?: {
            accountKey?: any;
            peerId?: any;
            proxies?: {
                peerId?: any;
                addr?: string | undefined;
            }[] | undefined;
            timestamp?: string | undefined;
        }[] | undefined;
        tier1AccountsKeys?: any[] | undefined;
        tier1Connections?: {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }[] | undefined;
    }>>;
    syncStatus: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    blockProductionDelayMillis?: number | undefined;
    catchupStatus?: {
        blocksToCatchup?: {
            height?: number | undefined;
            hash?: any;
        }[] | undefined;
        shardSyncStatus?: Record<string, any> | undefined;
        syncBlockHash?: any;
        syncBlockHeight?: number | undefined;
    }[] | undefined;
    currentHeadStatus?: {
        height?: number | undefined;
        hash?: any;
    } | undefined;
    currentHeaderHeadStatus?: {
        height?: number | undefined;
        hash?: any;
    } | undefined;
    networkInfo?: {
        connectedPeers?: {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }[] | undefined;
        knownProducers?: {
            accountId?: any;
            peerId?: any;
            nextHops?: any[] | undefined;
        }[] | undefined;
        numConnectedPeers?: number | undefined;
        peerMaxCount?: number | undefined;
        tier1AccountsData?: {
            accountKey?: any;
            peerId?: any;
            proxies?: {
                peerId?: any;
                addr?: string | undefined;
            }[] | undefined;
            timestamp?: string | undefined;
        }[] | undefined;
        tier1AccountsKeys?: any[] | undefined;
        tier1Connections?: {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }[] | undefined;
    } | undefined;
    syncStatus?: string | undefined;
}, {
    blockProductionDelayMillis?: number | undefined;
    catchupStatus?: {
        blocksToCatchup?: {
            height?: number | undefined;
            hash?: any;
        }[] | undefined;
        shardSyncStatus?: Record<string, any> | undefined;
        syncBlockHash?: any;
        syncBlockHeight?: number | undefined;
    }[] | undefined;
    currentHeadStatus?: {
        height?: number | undefined;
        hash?: any;
    } | undefined;
    currentHeaderHeadStatus?: {
        height?: number | undefined;
        hash?: any;
    } | undefined;
    networkInfo?: {
        connectedPeers?: {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }[] | undefined;
        knownProducers?: {
            accountId?: any;
            peerId?: any;
            nextHops?: any[] | undefined;
        }[] | undefined;
        numConnectedPeers?: number | undefined;
        peerMaxCount?: number | undefined;
        tier1AccountsData?: {
            accountKey?: any;
            peerId?: any;
            proxies?: {
                peerId?: any;
                addr?: string | undefined;
            }[] | undefined;
            timestamp?: string | undefined;
        }[] | undefined;
        tier1AccountsKeys?: any[] | undefined;
        tier1Connections?: {
            accountId?: any;
            nonce?: number | undefined;
            blockHash?: any;
            peerId?: any;
            addr?: string | undefined;
            height?: number | undefined;
            archival?: boolean | undefined;
            connectionEstablishedTimeMillis?: number | undefined;
            isHighestBlockInvalid?: boolean | undefined;
            isOutboundPeer?: boolean | undefined;
            lastTimePeerRequestedMillis?: number | undefined;
            lastTimeReceivedMessageMillis?: number | undefined;
            receivedBytesPerSec?: number | undefined;
            sentBytesPerSec?: number | undefined;
            trackedShards?: any[] | undefined;
        }[] | undefined;
    } | undefined;
    syncStatus?: string | undefined;
}>;
export declare const DirectionSchema: z.ZodEnum<["Left", "Right"]>;
export declare const DumpConfigSchema: z.ZodObject<{
    credentialsFile: z.ZodOptional<z.ZodString>;
    iterationDelay: z.ZodOptional<z.ZodAny>;
    location: z.ZodOptional<z.ZodAny>;
    restartDumpForShards: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
}, "strip", z.ZodTypeAny, {
    credentialsFile?: string | undefined;
    iterationDelay?: any;
    location?: any;
    restartDumpForShards?: any[] | undefined;
}, {
    credentialsFile?: string | undefined;
    iterationDelay?: any;
    location?: any;
    restartDumpForShards?: any[] | undefined;
}>;
export declare const DurationAsStdSchemaProviderSchema: z.ZodObject<{
    nanos: z.ZodOptional<z.ZodNumber>;
    secs: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    nanos?: number | undefined;
    secs?: number | undefined;
}, {
    nanos?: number | undefined;
    secs?: number | undefined;
}>;
export declare const EpochIdSchema: z.ZodAny;
export declare const EpochSyncConfigSchema: z.ZodObject<{
    disableEpochSyncForBootstrapping: z.ZodOptional<z.ZodBoolean>;
    epochSyncHorizon: z.ZodOptional<z.ZodNumber>;
    ignoreEpochSyncNetworkRequests: z.ZodOptional<z.ZodBoolean>;
    timeoutForEpochSync: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    disableEpochSyncForBootstrapping?: boolean | undefined;
    epochSyncHorizon?: number | undefined;
    ignoreEpochSyncNetworkRequests?: boolean | undefined;
    timeoutForEpochSync?: any;
}, {
    disableEpochSyncForBootstrapping?: boolean | undefined;
    epochSyncHorizon?: number | undefined;
    ignoreEpochSyncNetworkRequests?: boolean | undefined;
    timeoutForEpochSync?: any;
}>;
export declare const ExecutionMetadataViewSchema: z.ZodObject<{
    gasProfile: z.ZodOptional<z.ZodArray<z.ZodObject<{
        cost: z.ZodOptional<z.ZodString>;
        costCategory: z.ZodOptional<z.ZodString>;
        gasUsed: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        gasUsed?: string | undefined;
        cost?: string | undefined;
        costCategory?: string | undefined;
    }, {
        gasUsed?: string | undefined;
        cost?: string | undefined;
        costCategory?: string | undefined;
    }>, "many">>;
    version: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    gasProfile?: {
        gasUsed?: string | undefined;
        cost?: string | undefined;
        costCategory?: string | undefined;
    }[] | undefined;
    version?: number | undefined;
}, {
    gasProfile?: {
        gasUsed?: string | undefined;
        cost?: string | undefined;
        costCategory?: string | undefined;
    }[] | undefined;
    version?: number | undefined;
}>;
export declare const ExecutionOutcomeViewSchema: z.ZodObject<{
    executorId: z.ZodOptional<z.ZodAny>;
    gasBurnt: z.ZodOptional<z.ZodNumber>;
    logs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    metadata: z.ZodOptional<z.ZodAny>;
    receiptIds: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    status: z.ZodOptional<z.ZodAny>;
    tokensBurnt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status?: any;
    logs?: string[] | undefined;
    executorId?: any;
    gasBurnt?: number | undefined;
    metadata?: any;
    receiptIds?: any[] | undefined;
    tokensBurnt?: string | undefined;
}, {
    status?: any;
    logs?: string[] | undefined;
    executorId?: any;
    gasBurnt?: number | undefined;
    metadata?: any;
    receiptIds?: any[] | undefined;
    tokensBurnt?: string | undefined;
}>;
export declare const ExecutionOutcomeWithIdViewSchema: z.ZodObject<{
    blockHash: z.ZodOptional<z.ZodAny>;
    id: z.ZodOptional<z.ZodAny>;
    outcome: z.ZodOptional<z.ZodObject<{
        executorId: z.ZodOptional<z.ZodAny>;
        gasBurnt: z.ZodOptional<z.ZodNumber>;
        logs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        metadata: z.ZodOptional<z.ZodAny>;
        receiptIds: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        status: z.ZodOptional<z.ZodAny>;
        tokensBurnt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status?: any;
        logs?: string[] | undefined;
        executorId?: any;
        gasBurnt?: number | undefined;
        metadata?: any;
        receiptIds?: any[] | undefined;
        tokensBurnt?: string | undefined;
    }, {
        status?: any;
        logs?: string[] | undefined;
        executorId?: any;
        gasBurnt?: number | undefined;
        metadata?: any;
        receiptIds?: any[] | undefined;
        tokensBurnt?: string | undefined;
    }>>;
    proof: z.ZodOptional<z.ZodArray<z.ZodObject<{
        direction: z.ZodOptional<z.ZodEnum<["Left", "Right"]>>;
        hash: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }, {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    blockHash?: any;
    id?: any;
    outcome?: {
        status?: any;
        logs?: string[] | undefined;
        executorId?: any;
        gasBurnt?: number | undefined;
        metadata?: any;
        receiptIds?: any[] | undefined;
        tokensBurnt?: string | undefined;
    } | undefined;
    proof?: {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }[] | undefined;
}, {
    blockHash?: any;
    id?: any;
    outcome?: {
        status?: any;
        logs?: string[] | undefined;
        executorId?: any;
        gasBurnt?: number | undefined;
        metadata?: any;
        receiptIds?: any[] | undefined;
        tokensBurnt?: string | undefined;
    } | undefined;
    proof?: {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }[] | undefined;
}>;
export declare const ExecutionStatusViewSchema: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const ExtCostsConfigViewSchema: z.ZodObject<{
    altBn128G1MultiexpBase: z.ZodOptional<z.ZodNumber>;
    altBn128G1MultiexpElement: z.ZodOptional<z.ZodNumber>;
    altBn128G1SumBase: z.ZodOptional<z.ZodNumber>;
    altBn128G1SumElement: z.ZodOptional<z.ZodNumber>;
    altBn128PairingCheckBase: z.ZodOptional<z.ZodNumber>;
    altBn128PairingCheckElement: z.ZodOptional<z.ZodNumber>;
    base: z.ZodOptional<z.ZodNumber>;
    bls12381G1MultiexpBase: z.ZodOptional<z.ZodNumber>;
    bls12381G1MultiexpElement: z.ZodOptional<z.ZodNumber>;
    bls12381G2MultiexpBase: z.ZodOptional<z.ZodNumber>;
    bls12381G2MultiexpElement: z.ZodOptional<z.ZodNumber>;
    bls12381MapFp2ToG2Base: z.ZodOptional<z.ZodNumber>;
    bls12381MapFp2ToG2Element: z.ZodOptional<z.ZodNumber>;
    bls12381MapFpToG1Base: z.ZodOptional<z.ZodNumber>;
    bls12381MapFpToG1Element: z.ZodOptional<z.ZodNumber>;
    bls12381P1DecompressBase: z.ZodOptional<z.ZodNumber>;
    bls12381P1DecompressElement: z.ZodOptional<z.ZodNumber>;
    bls12381P1SumBase: z.ZodOptional<z.ZodNumber>;
    bls12381P1SumElement: z.ZodOptional<z.ZodNumber>;
    bls12381P2DecompressBase: z.ZodOptional<z.ZodNumber>;
    bls12381P2DecompressElement: z.ZodOptional<z.ZodNumber>;
    bls12381P2SumBase: z.ZodOptional<z.ZodNumber>;
    bls12381P2SumElement: z.ZodOptional<z.ZodNumber>;
    bls12381PairingBase: z.ZodOptional<z.ZodNumber>;
    bls12381PairingElement: z.ZodOptional<z.ZodNumber>;
    contractCompileBase: z.ZodOptional<z.ZodNumber>;
    contractCompileBytes: z.ZodOptional<z.ZodNumber>;
    contractLoadingBase: z.ZodOptional<z.ZodNumber>;
    contractLoadingBytes: z.ZodOptional<z.ZodNumber>;
    ecrecoverBase: z.ZodOptional<z.ZodNumber>;
    ed25519VerifyBase: z.ZodOptional<z.ZodNumber>;
    ed25519VerifyByte: z.ZodOptional<z.ZodNumber>;
    keccak256Base: z.ZodOptional<z.ZodNumber>;
    keccak256Byte: z.ZodOptional<z.ZodNumber>;
    keccak512Base: z.ZodOptional<z.ZodNumber>;
    keccak512Byte: z.ZodOptional<z.ZodNumber>;
    logBase: z.ZodOptional<z.ZodNumber>;
    logByte: z.ZodOptional<z.ZodNumber>;
    promiseAndBase: z.ZodOptional<z.ZodNumber>;
    promiseAndPerPromise: z.ZodOptional<z.ZodNumber>;
    promiseReturn: z.ZodOptional<z.ZodNumber>;
    readCachedTrieNode: z.ZodOptional<z.ZodNumber>;
    readMemoryBase: z.ZodOptional<z.ZodNumber>;
    readMemoryByte: z.ZodOptional<z.ZodNumber>;
    readRegisterBase: z.ZodOptional<z.ZodNumber>;
    readRegisterByte: z.ZodOptional<z.ZodNumber>;
    ripemd160Base: z.ZodOptional<z.ZodNumber>;
    ripemd160Block: z.ZodOptional<z.ZodNumber>;
    sha256Base: z.ZodOptional<z.ZodNumber>;
    sha256Byte: z.ZodOptional<z.ZodNumber>;
    storageHasKeyBase: z.ZodOptional<z.ZodNumber>;
    storageHasKeyByte: z.ZodOptional<z.ZodNumber>;
    storageIterCreateFromByte: z.ZodOptional<z.ZodNumber>;
    storageIterCreatePrefixBase: z.ZodOptional<z.ZodNumber>;
    storageIterCreatePrefixByte: z.ZodOptional<z.ZodNumber>;
    storageIterCreateRangeBase: z.ZodOptional<z.ZodNumber>;
    storageIterCreateToByte: z.ZodOptional<z.ZodNumber>;
    storageIterNextBase: z.ZodOptional<z.ZodNumber>;
    storageIterNextKeyByte: z.ZodOptional<z.ZodNumber>;
    storageIterNextValueByte: z.ZodOptional<z.ZodNumber>;
    storageLargeReadOverheadBase: z.ZodOptional<z.ZodNumber>;
    storageLargeReadOverheadByte: z.ZodOptional<z.ZodNumber>;
    storageReadBase: z.ZodOptional<z.ZodNumber>;
    storageReadKeyByte: z.ZodOptional<z.ZodNumber>;
    storageReadValueByte: z.ZodOptional<z.ZodNumber>;
    storageRemoveBase: z.ZodOptional<z.ZodNumber>;
    storageRemoveKeyByte: z.ZodOptional<z.ZodNumber>;
    storageRemoveRetValueByte: z.ZodOptional<z.ZodNumber>;
    storageWriteBase: z.ZodOptional<z.ZodNumber>;
    storageWriteEvictedByte: z.ZodOptional<z.ZodNumber>;
    storageWriteKeyByte: z.ZodOptional<z.ZodNumber>;
    storageWriteValueByte: z.ZodOptional<z.ZodNumber>;
    touchingTrieNode: z.ZodOptional<z.ZodNumber>;
    utf16DecodingBase: z.ZodOptional<z.ZodNumber>;
    utf16DecodingByte: z.ZodOptional<z.ZodNumber>;
    utf8DecodingBase: z.ZodOptional<z.ZodNumber>;
    utf8DecodingByte: z.ZodOptional<z.ZodNumber>;
    validatorStakeBase: z.ZodOptional<z.ZodNumber>;
    validatorTotalStakeBase: z.ZodOptional<z.ZodNumber>;
    writeMemoryBase: z.ZodOptional<z.ZodNumber>;
    writeMemoryByte: z.ZodOptional<z.ZodNumber>;
    writeRegisterBase: z.ZodOptional<z.ZodNumber>;
    writeRegisterByte: z.ZodOptional<z.ZodNumber>;
    yieldCreateBase: z.ZodOptional<z.ZodNumber>;
    yieldCreateByte: z.ZodOptional<z.ZodNumber>;
    yieldResumeBase: z.ZodOptional<z.ZodNumber>;
    yieldResumeByte: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    altBn128G1MultiexpBase?: number | undefined;
    altBn128G1MultiexpElement?: number | undefined;
    altBn128G1SumBase?: number | undefined;
    altBn128G1SumElement?: number | undefined;
    altBn128PairingCheckBase?: number | undefined;
    altBn128PairingCheckElement?: number | undefined;
    base?: number | undefined;
    bls12381G1MultiexpBase?: number | undefined;
    bls12381G1MultiexpElement?: number | undefined;
    bls12381G2MultiexpBase?: number | undefined;
    bls12381G2MultiexpElement?: number | undefined;
    bls12381MapFp2ToG2Base?: number | undefined;
    bls12381MapFp2ToG2Element?: number | undefined;
    bls12381MapFpToG1Base?: number | undefined;
    bls12381MapFpToG1Element?: number | undefined;
    bls12381P1DecompressBase?: number | undefined;
    bls12381P1DecompressElement?: number | undefined;
    bls12381P1SumBase?: number | undefined;
    bls12381P1SumElement?: number | undefined;
    bls12381P2DecompressBase?: number | undefined;
    bls12381P2DecompressElement?: number | undefined;
    bls12381P2SumBase?: number | undefined;
    bls12381P2SumElement?: number | undefined;
    bls12381PairingBase?: number | undefined;
    bls12381PairingElement?: number | undefined;
    contractCompileBase?: number | undefined;
    contractCompileBytes?: number | undefined;
    contractLoadingBase?: number | undefined;
    contractLoadingBytes?: number | undefined;
    ecrecoverBase?: number | undefined;
    ed25519VerifyBase?: number | undefined;
    ed25519VerifyByte?: number | undefined;
    keccak256Base?: number | undefined;
    keccak256Byte?: number | undefined;
    keccak512Base?: number | undefined;
    keccak512Byte?: number | undefined;
    logBase?: number | undefined;
    logByte?: number | undefined;
    promiseAndBase?: number | undefined;
    promiseAndPerPromise?: number | undefined;
    promiseReturn?: number | undefined;
    readCachedTrieNode?: number | undefined;
    readMemoryBase?: number | undefined;
    readMemoryByte?: number | undefined;
    readRegisterBase?: number | undefined;
    readRegisterByte?: number | undefined;
    ripemd160Base?: number | undefined;
    ripemd160Block?: number | undefined;
    sha256Base?: number | undefined;
    sha256Byte?: number | undefined;
    storageHasKeyBase?: number | undefined;
    storageHasKeyByte?: number | undefined;
    storageIterCreateFromByte?: number | undefined;
    storageIterCreatePrefixBase?: number | undefined;
    storageIterCreatePrefixByte?: number | undefined;
    storageIterCreateRangeBase?: number | undefined;
    storageIterCreateToByte?: number | undefined;
    storageIterNextBase?: number | undefined;
    storageIterNextKeyByte?: number | undefined;
    storageIterNextValueByte?: number | undefined;
    storageLargeReadOverheadBase?: number | undefined;
    storageLargeReadOverheadByte?: number | undefined;
    storageReadBase?: number | undefined;
    storageReadKeyByte?: number | undefined;
    storageReadValueByte?: number | undefined;
    storageRemoveBase?: number | undefined;
    storageRemoveKeyByte?: number | undefined;
    storageRemoveRetValueByte?: number | undefined;
    storageWriteBase?: number | undefined;
    storageWriteEvictedByte?: number | undefined;
    storageWriteKeyByte?: number | undefined;
    storageWriteValueByte?: number | undefined;
    touchingTrieNode?: number | undefined;
    utf16DecodingBase?: number | undefined;
    utf16DecodingByte?: number | undefined;
    utf8DecodingBase?: number | undefined;
    utf8DecodingByte?: number | undefined;
    validatorStakeBase?: number | undefined;
    validatorTotalStakeBase?: number | undefined;
    writeMemoryBase?: number | undefined;
    writeMemoryByte?: number | undefined;
    writeRegisterBase?: number | undefined;
    writeRegisterByte?: number | undefined;
    yieldCreateBase?: number | undefined;
    yieldCreateByte?: number | undefined;
    yieldResumeBase?: number | undefined;
    yieldResumeByte?: number | undefined;
}, {
    altBn128G1MultiexpBase?: number | undefined;
    altBn128G1MultiexpElement?: number | undefined;
    altBn128G1SumBase?: number | undefined;
    altBn128G1SumElement?: number | undefined;
    altBn128PairingCheckBase?: number | undefined;
    altBn128PairingCheckElement?: number | undefined;
    base?: number | undefined;
    bls12381G1MultiexpBase?: number | undefined;
    bls12381G1MultiexpElement?: number | undefined;
    bls12381G2MultiexpBase?: number | undefined;
    bls12381G2MultiexpElement?: number | undefined;
    bls12381MapFp2ToG2Base?: number | undefined;
    bls12381MapFp2ToG2Element?: number | undefined;
    bls12381MapFpToG1Base?: number | undefined;
    bls12381MapFpToG1Element?: number | undefined;
    bls12381P1DecompressBase?: number | undefined;
    bls12381P1DecompressElement?: number | undefined;
    bls12381P1SumBase?: number | undefined;
    bls12381P1SumElement?: number | undefined;
    bls12381P2DecompressBase?: number | undefined;
    bls12381P2DecompressElement?: number | undefined;
    bls12381P2SumBase?: number | undefined;
    bls12381P2SumElement?: number | undefined;
    bls12381PairingBase?: number | undefined;
    bls12381PairingElement?: number | undefined;
    contractCompileBase?: number | undefined;
    contractCompileBytes?: number | undefined;
    contractLoadingBase?: number | undefined;
    contractLoadingBytes?: number | undefined;
    ecrecoverBase?: number | undefined;
    ed25519VerifyBase?: number | undefined;
    ed25519VerifyByte?: number | undefined;
    keccak256Base?: number | undefined;
    keccak256Byte?: number | undefined;
    keccak512Base?: number | undefined;
    keccak512Byte?: number | undefined;
    logBase?: number | undefined;
    logByte?: number | undefined;
    promiseAndBase?: number | undefined;
    promiseAndPerPromise?: number | undefined;
    promiseReturn?: number | undefined;
    readCachedTrieNode?: number | undefined;
    readMemoryBase?: number | undefined;
    readMemoryByte?: number | undefined;
    readRegisterBase?: number | undefined;
    readRegisterByte?: number | undefined;
    ripemd160Base?: number | undefined;
    ripemd160Block?: number | undefined;
    sha256Base?: number | undefined;
    sha256Byte?: number | undefined;
    storageHasKeyBase?: number | undefined;
    storageHasKeyByte?: number | undefined;
    storageIterCreateFromByte?: number | undefined;
    storageIterCreatePrefixBase?: number | undefined;
    storageIterCreatePrefixByte?: number | undefined;
    storageIterCreateRangeBase?: number | undefined;
    storageIterCreateToByte?: number | undefined;
    storageIterNextBase?: number | undefined;
    storageIterNextKeyByte?: number | undefined;
    storageIterNextValueByte?: number | undefined;
    storageLargeReadOverheadBase?: number | undefined;
    storageLargeReadOverheadByte?: number | undefined;
    storageReadBase?: number | undefined;
    storageReadKeyByte?: number | undefined;
    storageReadValueByte?: number | undefined;
    storageRemoveBase?: number | undefined;
    storageRemoveKeyByte?: number | undefined;
    storageRemoveRetValueByte?: number | undefined;
    storageWriteBase?: number | undefined;
    storageWriteEvictedByte?: number | undefined;
    storageWriteKeyByte?: number | undefined;
    storageWriteValueByte?: number | undefined;
    touchingTrieNode?: number | undefined;
    utf16DecodingBase?: number | undefined;
    utf16DecodingByte?: number | undefined;
    utf8DecodingBase?: number | undefined;
    utf8DecodingByte?: number | undefined;
    validatorStakeBase?: number | undefined;
    validatorTotalStakeBase?: number | undefined;
    writeMemoryBase?: number | undefined;
    writeMemoryByte?: number | undefined;
    writeRegisterBase?: number | undefined;
    writeRegisterByte?: number | undefined;
    yieldCreateBase?: number | undefined;
    yieldCreateByte?: number | undefined;
    yieldResumeBase?: number | undefined;
    yieldResumeByte?: number | undefined;
}>;
export declare const ExternalStorageConfigSchema: z.ZodObject<{
    externalStorageFallbackThreshold: z.ZodOptional<z.ZodNumber>;
    location: z.ZodOptional<z.ZodAny>;
    numConcurrentRequests: z.ZodOptional<z.ZodNumber>;
    numConcurrentRequestsDuringCatchup: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    location?: any;
    externalStorageFallbackThreshold?: number | undefined;
    numConcurrentRequests?: number | undefined;
    numConcurrentRequestsDuringCatchup?: number | undefined;
}, {
    location?: any;
    externalStorageFallbackThreshold?: number | undefined;
    numConcurrentRequests?: number | undefined;
    numConcurrentRequestsDuringCatchup?: number | undefined;
}>;
export declare const ExternalStorageLocationSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const FeeSchema: z.ZodObject<{
    execution: z.ZodOptional<z.ZodNumber>;
    sendNotSir: z.ZodOptional<z.ZodNumber>;
    sendSir: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    execution?: number | undefined;
    sendNotSir?: number | undefined;
    sendSir?: number | undefined;
}, {
    execution?: number | undefined;
    sendNotSir?: number | undefined;
    sendSir?: number | undefined;
}>;
export declare const FinalExecutionOutcomeViewSchema: z.ZodObject<{
    receiptsOutcome: z.ZodOptional<z.ZodArray<z.ZodObject<{
        blockHash: z.ZodOptional<z.ZodAny>;
        id: z.ZodOptional<z.ZodAny>;
        outcome: z.ZodOptional<z.ZodObject<{
            executorId: z.ZodOptional<z.ZodAny>;
            gasBurnt: z.ZodOptional<z.ZodNumber>;
            logs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            metadata: z.ZodOptional<z.ZodAny>;
            receiptIds: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
            status: z.ZodOptional<z.ZodAny>;
            tokensBurnt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        }, {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        }>>;
        proof: z.ZodOptional<z.ZodArray<z.ZodObject<{
            direction: z.ZodOptional<z.ZodEnum<["Left", "Right"]>>;
            hash: z.ZodOptional<z.ZodAny>;
        }, "strip", z.ZodTypeAny, {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }, {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    }, {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    }>, "many">>;
    status: z.ZodOptional<z.ZodAny>;
    transaction: z.ZodOptional<z.ZodAny>;
    transactionOutcome: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    status?: any;
    receiptsOutcome?: {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    }[] | undefined;
    transaction?: any;
    transactionOutcome?: any;
}, {
    status?: any;
    receiptsOutcome?: {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    }[] | undefined;
    transaction?: any;
    transactionOutcome?: any;
}>;
export declare const FinalExecutionOutcomeWithReceiptViewSchema: z.ZodObject<{
    receipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        predecessorId: z.ZodOptional<z.ZodAny>;
        priority: z.ZodOptional<z.ZodNumber>;
        receipt: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        receiptId: z.ZodOptional<z.ZodAny>;
        receiverId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        receiverId?: any;
        predecessorId?: any;
        priority?: number | undefined;
        receipt?: Record<string, any> | undefined;
        receiptId?: any;
    }, {
        receiverId?: any;
        predecessorId?: any;
        priority?: number | undefined;
        receipt?: Record<string, any> | undefined;
        receiptId?: any;
    }>, "many">>;
    receiptsOutcome: z.ZodOptional<z.ZodArray<z.ZodObject<{
        blockHash: z.ZodOptional<z.ZodAny>;
        id: z.ZodOptional<z.ZodAny>;
        outcome: z.ZodOptional<z.ZodObject<{
            executorId: z.ZodOptional<z.ZodAny>;
            gasBurnt: z.ZodOptional<z.ZodNumber>;
            logs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            metadata: z.ZodOptional<z.ZodAny>;
            receiptIds: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
            status: z.ZodOptional<z.ZodAny>;
            tokensBurnt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        }, {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        }>>;
        proof: z.ZodOptional<z.ZodArray<z.ZodObject<{
            direction: z.ZodOptional<z.ZodEnum<["Left", "Right"]>>;
            hash: z.ZodOptional<z.ZodAny>;
        }, "strip", z.ZodTypeAny, {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }, {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    }, {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    }>, "many">>;
    status: z.ZodOptional<z.ZodAny>;
    transaction: z.ZodOptional<z.ZodAny>;
    transactionOutcome: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    status?: any;
    receiptsOutcome?: {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    }[] | undefined;
    transaction?: any;
    transactionOutcome?: any;
    receipts?: {
        receiverId?: any;
        predecessorId?: any;
        priority?: number | undefined;
        receipt?: Record<string, any> | undefined;
        receiptId?: any;
    }[] | undefined;
}, {
    status?: any;
    receiptsOutcome?: {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    }[] | undefined;
    transaction?: any;
    transactionOutcome?: any;
    receipts?: {
        receiverId?: any;
        predecessorId?: any;
        priority?: number | undefined;
        receipt?: Record<string, any> | undefined;
        receiptId?: any;
    }[] | undefined;
}>;
export declare const FinalExecutionStatusSchema: z.ZodUnion<[z.ZodString, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const FinalitySchema: z.ZodEnum<["optimistic", "near-final", "final"]>;
export declare const FunctionCallActionSchema: z.ZodObject<{
    args: z.ZodOptional<z.ZodString>;
    deposit: z.ZodOptional<z.ZodString>;
    gas: z.ZodOptional<z.ZodNumber>;
    methodName: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    args?: string | undefined;
    deposit?: string | undefined;
    gas?: number | undefined;
    methodName?: string | undefined;
}, {
    args?: string | undefined;
    deposit?: string | undefined;
    gas?: number | undefined;
    methodName?: string | undefined;
}>;
export declare const FunctionCallErrorSchema: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const FunctionCallPermissionSchema: z.ZodObject<{
    allowance: z.ZodOptional<z.ZodString>;
    methodNames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    receiverId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    receiverId?: string | undefined;
    allowance?: string | undefined;
    methodNames?: string[] | undefined;
}, {
    receiverId?: string | undefined;
    allowance?: string | undefined;
    methodNames?: string[] | undefined;
}>;
export declare const GCConfigSchema: z.ZodObject<{
    gcBlocksLimit: z.ZodOptional<z.ZodNumber>;
    gcForkCleanStep: z.ZodOptional<z.ZodNumber>;
    gcNumEpochsToKeep: z.ZodOptional<z.ZodNumber>;
    gcStepPeriod: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    gcBlocksLimit?: number | undefined;
    gcForkCleanStep?: number | undefined;
    gcNumEpochsToKeep?: number | undefined;
    gcStepPeriod?: any;
}, {
    gcBlocksLimit?: number | undefined;
    gcForkCleanStep?: number | undefined;
    gcNumEpochsToKeep?: number | undefined;
    gcStepPeriod?: any;
}>;
export declare const GasKeyViewSchema: z.ZodObject<{
    balance: z.ZodOptional<z.ZodNumber>;
    numNonces: z.ZodOptional<z.ZodNumber>;
    permission: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    permission?: string | Record<string, any> | undefined;
    balance?: number | undefined;
    numNonces?: number | undefined;
}, {
    permission?: string | Record<string, any> | undefined;
    balance?: number | undefined;
    numNonces?: number | undefined;
}>;
export declare const GenesisConfigSchema: z.ZodObject<{
    avgHiddenValidatorSeatsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    blockProducerKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    chainId: z.ZodOptional<z.ZodString>;
    chunkProducerAssignmentChangesLimit: z.ZodOptional<z.ZodNumber>;
    chunkProducerKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    chunkValidatorOnlyKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    dynamicResharding: z.ZodOptional<z.ZodBoolean>;
    epochLength: z.ZodOptional<z.ZodNumber>;
    fishermenThreshold: z.ZodOptional<z.ZodString>;
    gasLimit: z.ZodOptional<z.ZodNumber>;
    gasPriceAdjustmentRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    genesisHeight: z.ZodOptional<z.ZodNumber>;
    genesisTime: z.ZodOptional<z.ZodString>;
    maxGasPrice: z.ZodOptional<z.ZodString>;
    maxInflationRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxKickoutStakePerc: z.ZodOptional<z.ZodNumber>;
    minGasPrice: z.ZodOptional<z.ZodString>;
    minimumStakeDivisor: z.ZodOptional<z.ZodNumber>;
    minimumStakeRatio: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    minimumValidatorsPerShard: z.ZodOptional<z.ZodNumber>;
    numBlockProducerSeats: z.ZodOptional<z.ZodNumber>;
    numBlockProducerSeatsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numBlocksPerYear: z.ZodOptional<z.ZodNumber>;
    numChunkOnlyProducerSeats: z.ZodOptional<z.ZodNumber>;
    numChunkProducerSeats: z.ZodOptional<z.ZodNumber>;
    numChunkValidatorSeats: z.ZodOptional<z.ZodNumber>;
    onlineMaxThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    onlineMinThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolRewardRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolTreasuryAccount: z.ZodOptional<z.ZodAny>;
    protocolUpgradeStakeThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolVersion: z.ZodOptional<z.ZodNumber>;
    shardLayout: z.ZodOptional<z.ZodAny>;
    shuffleShardAssignmentForChunkProducers: z.ZodOptional<z.ZodBoolean>;
    targetValidatorMandatesPerShard: z.ZodOptional<z.ZodNumber>;
    totalSupply: z.ZodOptional<z.ZodString>;
    transactionValidityPeriod: z.ZodOptional<z.ZodNumber>;
    useProductionConfig: z.ZodOptional<z.ZodBoolean>;
    validators: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
        amount: z.ZodOptional<z.ZodString>;
        publicKey: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
        publicKey?: any;
        amount?: string | undefined;
    }, {
        accountId?: any;
        publicKey?: any;
        amount?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    chainId?: string | undefined;
    protocolVersion?: number | undefined;
    totalSupply?: string | undefined;
    gasLimit?: number | undefined;
    avgHiddenValidatorSeatsPerShard?: number[] | undefined;
    blockProducerKickoutThreshold?: number | undefined;
    chunkProducerAssignmentChangesLimit?: number | undefined;
    chunkProducerKickoutThreshold?: number | undefined;
    chunkValidatorOnlyKickoutThreshold?: number | undefined;
    dynamicResharding?: boolean | undefined;
    epochLength?: number | undefined;
    fishermenThreshold?: string | undefined;
    gasPriceAdjustmentRate?: number[] | undefined;
    genesisHeight?: number | undefined;
    genesisTime?: string | undefined;
    maxGasPrice?: string | undefined;
    maxInflationRate?: number[] | undefined;
    maxKickoutStakePerc?: number | undefined;
    minGasPrice?: string | undefined;
    minimumStakeDivisor?: number | undefined;
    minimumStakeRatio?: number[] | undefined;
    minimumValidatorsPerShard?: number | undefined;
    numBlockProducerSeats?: number | undefined;
    numBlockProducerSeatsPerShard?: number[] | undefined;
    numBlocksPerYear?: number | undefined;
    numChunkOnlyProducerSeats?: number | undefined;
    numChunkProducerSeats?: number | undefined;
    numChunkValidatorSeats?: number | undefined;
    onlineMaxThreshold?: number[] | undefined;
    onlineMinThreshold?: number[] | undefined;
    protocolRewardRate?: number[] | undefined;
    protocolTreasuryAccount?: any;
    protocolUpgradeStakeThreshold?: number[] | undefined;
    shardLayout?: any;
    shuffleShardAssignmentForChunkProducers?: boolean | undefined;
    targetValidatorMandatesPerShard?: number | undefined;
    transactionValidityPeriod?: number | undefined;
    useProductionConfig?: boolean | undefined;
    validators?: {
        accountId?: any;
        publicKey?: any;
        amount?: string | undefined;
    }[] | undefined;
}, {
    chainId?: string | undefined;
    protocolVersion?: number | undefined;
    totalSupply?: string | undefined;
    gasLimit?: number | undefined;
    avgHiddenValidatorSeatsPerShard?: number[] | undefined;
    blockProducerKickoutThreshold?: number | undefined;
    chunkProducerAssignmentChangesLimit?: number | undefined;
    chunkProducerKickoutThreshold?: number | undefined;
    chunkValidatorOnlyKickoutThreshold?: number | undefined;
    dynamicResharding?: boolean | undefined;
    epochLength?: number | undefined;
    fishermenThreshold?: string | undefined;
    gasPriceAdjustmentRate?: number[] | undefined;
    genesisHeight?: number | undefined;
    genesisTime?: string | undefined;
    maxGasPrice?: string | undefined;
    maxInflationRate?: number[] | undefined;
    maxKickoutStakePerc?: number | undefined;
    minGasPrice?: string | undefined;
    minimumStakeDivisor?: number | undefined;
    minimumStakeRatio?: number[] | undefined;
    minimumValidatorsPerShard?: number | undefined;
    numBlockProducerSeats?: number | undefined;
    numBlockProducerSeatsPerShard?: number[] | undefined;
    numBlocksPerYear?: number | undefined;
    numChunkOnlyProducerSeats?: number | undefined;
    numChunkProducerSeats?: number | undefined;
    numChunkValidatorSeats?: number | undefined;
    onlineMaxThreshold?: number[] | undefined;
    onlineMinThreshold?: number[] | undefined;
    protocolRewardRate?: number[] | undefined;
    protocolTreasuryAccount?: any;
    protocolUpgradeStakeThreshold?: number[] | undefined;
    shardLayout?: any;
    shuffleShardAssignmentForChunkProducers?: boolean | undefined;
    targetValidatorMandatesPerShard?: number | undefined;
    transactionValidityPeriod?: number | undefined;
    useProductionConfig?: boolean | undefined;
    validators?: {
        accountId?: any;
        publicKey?: any;
        amount?: string | undefined;
    }[] | undefined;
}>;
export declare const GenesisConfigRequestSchema: z.ZodAny;
export declare const GlobalContractDeployModeSchema: z.ZodUnion<[z.ZodString, z.ZodString]>;
export declare const GlobalContractIdentifierSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const HostErrorSchema: z.ZodUnion<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodString, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const InvalidAccessKeyErrorSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString]>;
export declare const InvalidTxErrorSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodString, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_changesSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_changes_in_blockSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    params?: Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_congestion_levelSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    params?: Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_genesis_configSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_light_client_block_proofSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        blockHash: z.ZodOptional<z.ZodAny>;
        lightClientHead: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        blockHash?: any;
        lightClientHead?: any;
    }, {
        blockHash?: any;
        lightClientHead?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        blockHash?: any;
        lightClientHead?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        blockHash?: any;
        lightClientHead?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_light_client_proofSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        lightClientHead: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        lightClientHead?: any;
    }, {
        lightClientHead?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        lightClientHead?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        lightClientHead?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_maintenance_windowsSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
    }, {
        accountId?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        accountId?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        accountId?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_protocol_configSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    params?: Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_receiptSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        receiptId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        receiptId?: any;
    }, {
        receiptId?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        receiptId?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        receiptId?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_split_storage_infoSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_tx_statusSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        waitUntil: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        waitUntil?: any;
    }, {
        waitUntil?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        waitUntil?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        waitUntil?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_EXPERIMENTAL_validators_orderedSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        blockId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        blockId?: any;
    }, {
        blockId?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        blockId?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        blockId?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_blockSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    params?: Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_broadcast_tx_asyncSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        signedTxBase64: z.ZodOptional<z.ZodAny>;
        waitUntil: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        signedTxBase64?: any;
        waitUntil?: any;
    }, {
        signedTxBase64?: any;
        waitUntil?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        signedTxBase64?: any;
        waitUntil?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        signedTxBase64?: any;
        waitUntil?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_broadcast_tx_commitSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        signedTxBase64: z.ZodOptional<z.ZodAny>;
        waitUntil: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        signedTxBase64?: any;
        waitUntil?: any;
    }, {
        signedTxBase64?: any;
        waitUntil?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        signedTxBase64?: any;
        waitUntil?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        signedTxBase64?: any;
        waitUntil?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_changesSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_chunkSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    params?: Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_client_configSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_gas_priceSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        blockId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        blockId?: any;
    }, {
        blockId?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        blockId?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        blockId?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_healthSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_light_client_proofSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        lightClientHead: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        lightClientHead?: any;
    }, {
        lightClientHead?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        lightClientHead?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        lightClientHead?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_network_infoSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_next_light_client_blockSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        lastBlockHash: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        lastBlockHash?: any;
    }, {
        lastBlockHash?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        lastBlockHash?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        lastBlockHash?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_querySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_send_txSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        signedTxBase64: z.ZodOptional<z.ZodAny>;
        waitUntil: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        signedTxBase64?: any;
        waitUntil?: any;
    }, {
        signedTxBase64?: any;
        waitUntil?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        signedTxBase64?: any;
        waitUntil?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        signedTxBase64?: any;
        waitUntil?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_statusSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: any;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_txSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodObject<{
        waitUntil: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        waitUntil?: any;
    }, {
        waitUntil?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    params?: {
        waitUntil?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: {
        waitUntil?: any;
    } | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcRequest_for_validatorsSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
    method: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    params?: string | Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}, {
    params?: string | Record<string, any> | undefined;
    jsonrpc?: string | undefined;
    method?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_Array_of_Range_of_uint64_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_Array_of_ValidatorStakeView_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_CryptoHash_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_GenesisConfig_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_Nullable_RpcHealthResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcBlockResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcChunkResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcClientConfigResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcCongestionLevelResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcGasPriceResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcLightClientBlockProofResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcLightClientExecutionProofResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcLightClientNextBlockResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcNetworkInfoResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcProtocolConfigResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcQueryResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcReceiptResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcSplitStorageInfoResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcStateChangesInBlockByTypeResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcStateChangesInBlockResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcStatusResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcTransactionResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const JsonRpcResponse_for_RpcValidatorResponse_and_RpcErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    jsonrpc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}, {
    jsonrpc?: string | undefined;
    id?: string | undefined;
}>;
export declare const KnownProducerViewSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
    nextHops: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    peerId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
    peerId?: any;
    nextHops?: any[] | undefined;
}, {
    accountId?: any;
    peerId?: any;
    nextHops?: any[] | undefined;
}>;
export declare const LightClientBlockLiteViewSchema: z.ZodObject<{
    innerLite: z.ZodOptional<z.ZodObject<{
        blockMerkleRoot: z.ZodOptional<z.ZodAny>;
        epochId: z.ZodOptional<z.ZodAny>;
        height: z.ZodOptional<z.ZodNumber>;
        nextBpHash: z.ZodOptional<z.ZodAny>;
        nextEpochId: z.ZodOptional<z.ZodAny>;
        outcomeRoot: z.ZodOptional<z.ZodAny>;
        prevStateRoot: z.ZodOptional<z.ZodAny>;
        timestamp: z.ZodOptional<z.ZodNumber>;
        timestampNanosec: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
    }, {
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
    }>>;
    innerRestHash: z.ZodOptional<z.ZodAny>;
    prevBlockHash: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    prevBlockHash?: any;
    innerLite?: {
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
    } | undefined;
    innerRestHash?: any;
}, {
    prevBlockHash?: any;
    innerLite?: {
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
    } | undefined;
    innerRestHash?: any;
}>;
export declare const LimitConfigSchema: z.ZodObject<{
    accountIdValidityRulesVersion: z.ZodOptional<z.ZodAny>;
    initialMemoryPages: z.ZodOptional<z.ZodNumber>;
    maxActionsPerReceipt: z.ZodOptional<z.ZodNumber>;
    maxArgumentsLength: z.ZodOptional<z.ZodNumber>;
    maxContractSize: z.ZodOptional<z.ZodNumber>;
    maxFunctionsNumberPerContract: z.ZodOptional<z.ZodNumber>;
    maxGasBurnt: z.ZodOptional<z.ZodNumber>;
    maxLengthMethodName: z.ZodOptional<z.ZodNumber>;
    maxLengthReturnedData: z.ZodOptional<z.ZodNumber>;
    maxLengthStorageKey: z.ZodOptional<z.ZodNumber>;
    maxLengthStorageValue: z.ZodOptional<z.ZodNumber>;
    maxLocalsPerContract: z.ZodOptional<z.ZodNumber>;
    maxMemoryPages: z.ZodOptional<z.ZodNumber>;
    maxNumberBytesMethodNames: z.ZodOptional<z.ZodNumber>;
    maxNumberInputDataDependencies: z.ZodOptional<z.ZodNumber>;
    maxNumberLogs: z.ZodOptional<z.ZodNumber>;
    maxNumberRegisters: z.ZodOptional<z.ZodNumber>;
    maxPromisesPerFunctionCallAction: z.ZodOptional<z.ZodNumber>;
    maxReceiptSize: z.ZodOptional<z.ZodNumber>;
    maxRegisterSize: z.ZodOptional<z.ZodNumber>;
    maxStackHeight: z.ZodOptional<z.ZodNumber>;
    maxTotalLogLength: z.ZodOptional<z.ZodNumber>;
    maxTotalPrepaidGas: z.ZodOptional<z.ZodNumber>;
    maxTransactionSize: z.ZodOptional<z.ZodNumber>;
    maxYieldPayloadSize: z.ZodOptional<z.ZodNumber>;
    perReceiptStorageProofSizeLimit: z.ZodOptional<z.ZodNumber>;
    registersMemoryLimit: z.ZodOptional<z.ZodNumber>;
    yieldTimeoutLengthInBlocks: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    accountIdValidityRulesVersion?: any;
    initialMemoryPages?: number | undefined;
    maxActionsPerReceipt?: number | undefined;
    maxArgumentsLength?: number | undefined;
    maxContractSize?: number | undefined;
    maxFunctionsNumberPerContract?: number | undefined;
    maxGasBurnt?: number | undefined;
    maxLengthMethodName?: number | undefined;
    maxLengthReturnedData?: number | undefined;
    maxLengthStorageKey?: number | undefined;
    maxLengthStorageValue?: number | undefined;
    maxLocalsPerContract?: number | undefined;
    maxMemoryPages?: number | undefined;
    maxNumberBytesMethodNames?: number | undefined;
    maxNumberInputDataDependencies?: number | undefined;
    maxNumberLogs?: number | undefined;
    maxNumberRegisters?: number | undefined;
    maxPromisesPerFunctionCallAction?: number | undefined;
    maxReceiptSize?: number | undefined;
    maxRegisterSize?: number | undefined;
    maxStackHeight?: number | undefined;
    maxTotalLogLength?: number | undefined;
    maxTotalPrepaidGas?: number | undefined;
    maxTransactionSize?: number | undefined;
    maxYieldPayloadSize?: number | undefined;
    perReceiptStorageProofSizeLimit?: number | undefined;
    registersMemoryLimit?: number | undefined;
    yieldTimeoutLengthInBlocks?: number | undefined;
}, {
    accountIdValidityRulesVersion?: any;
    initialMemoryPages?: number | undefined;
    maxActionsPerReceipt?: number | undefined;
    maxArgumentsLength?: number | undefined;
    maxContractSize?: number | undefined;
    maxFunctionsNumberPerContract?: number | undefined;
    maxGasBurnt?: number | undefined;
    maxLengthMethodName?: number | undefined;
    maxLengthReturnedData?: number | undefined;
    maxLengthStorageKey?: number | undefined;
    maxLengthStorageValue?: number | undefined;
    maxLocalsPerContract?: number | undefined;
    maxMemoryPages?: number | undefined;
    maxNumberBytesMethodNames?: number | undefined;
    maxNumberInputDataDependencies?: number | undefined;
    maxNumberLogs?: number | undefined;
    maxNumberRegisters?: number | undefined;
    maxPromisesPerFunctionCallAction?: number | undefined;
    maxReceiptSize?: number | undefined;
    maxRegisterSize?: number | undefined;
    maxStackHeight?: number | undefined;
    maxTotalLogLength?: number | undefined;
    maxTotalPrepaidGas?: number | undefined;
    maxTransactionSize?: number | undefined;
    maxYieldPayloadSize?: number | undefined;
    perReceiptStorageProofSizeLimit?: number | undefined;
    registersMemoryLimit?: number | undefined;
    yieldTimeoutLengthInBlocks?: number | undefined;
}>;
export declare const LogSummaryStyleSchema: z.ZodEnum<["plain", "colored"]>;
export declare const MerklePathItemSchema: z.ZodObject<{
    direction: z.ZodOptional<z.ZodEnum<["Left", "Right"]>>;
    hash: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    hash?: any;
    direction?: "Left" | "Right" | undefined;
}, {
    hash?: any;
    direction?: "Left" | "Right" | undefined;
}>;
export declare const MethodResolveErrorSchema: z.ZodEnum<["MethodEmptyName", "MethodNotFound", "MethodInvalidSignature"]>;
export declare const MissingTrieValueSchema: z.ZodObject<{
    context: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodString, z.ZodString]>>;
    hash: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    hash?: any;
    context?: string | undefined;
}, {
    hash?: any;
    context?: string | undefined;
}>;
export declare const MissingTrieValueContextSchema: z.ZodUnion<[z.ZodString, z.ZodString, z.ZodString, z.ZodString]>;
export declare const MutableConfigValueSchema: z.ZodAny;
export declare const NetworkInfoViewSchema: z.ZodObject<{
    connectedPeers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
        addr: z.ZodOptional<z.ZodString>;
        archival: z.ZodOptional<z.ZodBoolean>;
        blockHash: z.ZodOptional<z.ZodAny>;
        connectionEstablishedTimeMillis: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        isHighestBlockInvalid: z.ZodOptional<z.ZodBoolean>;
        isOutboundPeer: z.ZodOptional<z.ZodBoolean>;
        lastTimePeerRequestedMillis: z.ZodOptional<z.ZodNumber>;
        lastTimeReceivedMessageMillis: z.ZodOptional<z.ZodNumber>;
        nonce: z.ZodOptional<z.ZodNumber>;
        peerId: z.ZodOptional<z.ZodAny>;
        receivedBytesPerSec: z.ZodOptional<z.ZodNumber>;
        sentBytesPerSec: z.ZodOptional<z.ZodNumber>;
        trackedShards: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
        nonce?: number | undefined;
        blockHash?: any;
        peerId?: any;
        addr?: string | undefined;
        height?: number | undefined;
        archival?: boolean | undefined;
        connectionEstablishedTimeMillis?: number | undefined;
        isHighestBlockInvalid?: boolean | undefined;
        isOutboundPeer?: boolean | undefined;
        lastTimePeerRequestedMillis?: number | undefined;
        lastTimeReceivedMessageMillis?: number | undefined;
        receivedBytesPerSec?: number | undefined;
        sentBytesPerSec?: number | undefined;
        trackedShards?: any[] | undefined;
    }, {
        accountId?: any;
        nonce?: number | undefined;
        blockHash?: any;
        peerId?: any;
        addr?: string | undefined;
        height?: number | undefined;
        archival?: boolean | undefined;
        connectionEstablishedTimeMillis?: number | undefined;
        isHighestBlockInvalid?: boolean | undefined;
        isOutboundPeer?: boolean | undefined;
        lastTimePeerRequestedMillis?: number | undefined;
        lastTimeReceivedMessageMillis?: number | undefined;
        receivedBytesPerSec?: number | undefined;
        sentBytesPerSec?: number | undefined;
        trackedShards?: any[] | undefined;
    }>, "many">>;
    knownProducers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
        nextHops: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        peerId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
        peerId?: any;
        nextHops?: any[] | undefined;
    }, {
        accountId?: any;
        peerId?: any;
        nextHops?: any[] | undefined;
    }>, "many">>;
    numConnectedPeers: z.ZodOptional<z.ZodNumber>;
    peerMaxCount: z.ZodOptional<z.ZodNumber>;
    tier1AccountsData: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountKey: z.ZodOptional<z.ZodAny>;
        peerId: z.ZodOptional<z.ZodAny>;
        proxies: z.ZodOptional<z.ZodArray<z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            peerId: z.ZodOptional<z.ZodAny>;
        }, "strip", z.ZodTypeAny, {
            peerId?: any;
            addr?: string | undefined;
        }, {
            peerId?: any;
            addr?: string | undefined;
        }>, "many">>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        accountKey?: any;
        peerId?: any;
        proxies?: {
            peerId?: any;
            addr?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
    }, {
        accountKey?: any;
        peerId?: any;
        proxies?: {
            peerId?: any;
            addr?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
    }>, "many">>;
    tier1AccountsKeys: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    tier1Connections: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
        addr: z.ZodOptional<z.ZodString>;
        archival: z.ZodOptional<z.ZodBoolean>;
        blockHash: z.ZodOptional<z.ZodAny>;
        connectionEstablishedTimeMillis: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        isHighestBlockInvalid: z.ZodOptional<z.ZodBoolean>;
        isOutboundPeer: z.ZodOptional<z.ZodBoolean>;
        lastTimePeerRequestedMillis: z.ZodOptional<z.ZodNumber>;
        lastTimeReceivedMessageMillis: z.ZodOptional<z.ZodNumber>;
        nonce: z.ZodOptional<z.ZodNumber>;
        peerId: z.ZodOptional<z.ZodAny>;
        receivedBytesPerSec: z.ZodOptional<z.ZodNumber>;
        sentBytesPerSec: z.ZodOptional<z.ZodNumber>;
        trackedShards: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
        nonce?: number | undefined;
        blockHash?: any;
        peerId?: any;
        addr?: string | undefined;
        height?: number | undefined;
        archival?: boolean | undefined;
        connectionEstablishedTimeMillis?: number | undefined;
        isHighestBlockInvalid?: boolean | undefined;
        isOutboundPeer?: boolean | undefined;
        lastTimePeerRequestedMillis?: number | undefined;
        lastTimeReceivedMessageMillis?: number | undefined;
        receivedBytesPerSec?: number | undefined;
        sentBytesPerSec?: number | undefined;
        trackedShards?: any[] | undefined;
    }, {
        accountId?: any;
        nonce?: number | undefined;
        blockHash?: any;
        peerId?: any;
        addr?: string | undefined;
        height?: number | undefined;
        archival?: boolean | undefined;
        connectionEstablishedTimeMillis?: number | undefined;
        isHighestBlockInvalid?: boolean | undefined;
        isOutboundPeer?: boolean | undefined;
        lastTimePeerRequestedMillis?: number | undefined;
        lastTimeReceivedMessageMillis?: number | undefined;
        receivedBytesPerSec?: number | undefined;
        sentBytesPerSec?: number | undefined;
        trackedShards?: any[] | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    connectedPeers?: {
        accountId?: any;
        nonce?: number | undefined;
        blockHash?: any;
        peerId?: any;
        addr?: string | undefined;
        height?: number | undefined;
        archival?: boolean | undefined;
        connectionEstablishedTimeMillis?: number | undefined;
        isHighestBlockInvalid?: boolean | undefined;
        isOutboundPeer?: boolean | undefined;
        lastTimePeerRequestedMillis?: number | undefined;
        lastTimeReceivedMessageMillis?: number | undefined;
        receivedBytesPerSec?: number | undefined;
        sentBytesPerSec?: number | undefined;
        trackedShards?: any[] | undefined;
    }[] | undefined;
    knownProducers?: {
        accountId?: any;
        peerId?: any;
        nextHops?: any[] | undefined;
    }[] | undefined;
    numConnectedPeers?: number | undefined;
    peerMaxCount?: number | undefined;
    tier1AccountsData?: {
        accountKey?: any;
        peerId?: any;
        proxies?: {
            peerId?: any;
            addr?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
    }[] | undefined;
    tier1AccountsKeys?: any[] | undefined;
    tier1Connections?: {
        accountId?: any;
        nonce?: number | undefined;
        blockHash?: any;
        peerId?: any;
        addr?: string | undefined;
        height?: number | undefined;
        archival?: boolean | undefined;
        connectionEstablishedTimeMillis?: number | undefined;
        isHighestBlockInvalid?: boolean | undefined;
        isOutboundPeer?: boolean | undefined;
        lastTimePeerRequestedMillis?: number | undefined;
        lastTimeReceivedMessageMillis?: number | undefined;
        receivedBytesPerSec?: number | undefined;
        sentBytesPerSec?: number | undefined;
        trackedShards?: any[] | undefined;
    }[] | undefined;
}, {
    connectedPeers?: {
        accountId?: any;
        nonce?: number | undefined;
        blockHash?: any;
        peerId?: any;
        addr?: string | undefined;
        height?: number | undefined;
        archival?: boolean | undefined;
        connectionEstablishedTimeMillis?: number | undefined;
        isHighestBlockInvalid?: boolean | undefined;
        isOutboundPeer?: boolean | undefined;
        lastTimePeerRequestedMillis?: number | undefined;
        lastTimeReceivedMessageMillis?: number | undefined;
        receivedBytesPerSec?: number | undefined;
        sentBytesPerSec?: number | undefined;
        trackedShards?: any[] | undefined;
    }[] | undefined;
    knownProducers?: {
        accountId?: any;
        peerId?: any;
        nextHops?: any[] | undefined;
    }[] | undefined;
    numConnectedPeers?: number | undefined;
    peerMaxCount?: number | undefined;
    tier1AccountsData?: {
        accountKey?: any;
        peerId?: any;
        proxies?: {
            peerId?: any;
            addr?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
    }[] | undefined;
    tier1AccountsKeys?: any[] | undefined;
    tier1Connections?: {
        accountId?: any;
        nonce?: number | undefined;
        blockHash?: any;
        peerId?: any;
        addr?: string | undefined;
        height?: number | undefined;
        archival?: boolean | undefined;
        connectionEstablishedTimeMillis?: number | undefined;
        isHighestBlockInvalid?: boolean | undefined;
        isOutboundPeer?: boolean | undefined;
        lastTimePeerRequestedMillis?: number | undefined;
        lastTimeReceivedMessageMillis?: number | undefined;
        receivedBytesPerSec?: number | undefined;
        sentBytesPerSec?: number | undefined;
        trackedShards?: any[] | undefined;
    }[] | undefined;
}>;
export declare const NextEpochValidatorInfoSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
    publicKey: z.ZodOptional<z.ZodAny>;
    shards: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    stake: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
    publicKey?: any;
    shards?: any[] | undefined;
    stake?: string | undefined;
}, {
    accountId?: any;
    publicKey?: any;
    shards?: any[] | undefined;
    stake?: string | undefined;
}>;
export declare const NonDelegateActionSchema: z.ZodAny;
export declare const PeerIdSchema: z.ZodAny;
export declare const PeerInfoViewSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
    addr: z.ZodOptional<z.ZodString>;
    archival: z.ZodOptional<z.ZodBoolean>;
    blockHash: z.ZodOptional<z.ZodAny>;
    connectionEstablishedTimeMillis: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    isHighestBlockInvalid: z.ZodOptional<z.ZodBoolean>;
    isOutboundPeer: z.ZodOptional<z.ZodBoolean>;
    lastTimePeerRequestedMillis: z.ZodOptional<z.ZodNumber>;
    lastTimeReceivedMessageMillis: z.ZodOptional<z.ZodNumber>;
    nonce: z.ZodOptional<z.ZodNumber>;
    peerId: z.ZodOptional<z.ZodAny>;
    receivedBytesPerSec: z.ZodOptional<z.ZodNumber>;
    sentBytesPerSec: z.ZodOptional<z.ZodNumber>;
    trackedShards: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
    nonce?: number | undefined;
    blockHash?: any;
    peerId?: any;
    addr?: string | undefined;
    height?: number | undefined;
    archival?: boolean | undefined;
    connectionEstablishedTimeMillis?: number | undefined;
    isHighestBlockInvalid?: boolean | undefined;
    isOutboundPeer?: boolean | undefined;
    lastTimePeerRequestedMillis?: number | undefined;
    lastTimeReceivedMessageMillis?: number | undefined;
    receivedBytesPerSec?: number | undefined;
    sentBytesPerSec?: number | undefined;
    trackedShards?: any[] | undefined;
}, {
    accountId?: any;
    nonce?: number | undefined;
    blockHash?: any;
    peerId?: any;
    addr?: string | undefined;
    height?: number | undefined;
    archival?: boolean | undefined;
    connectionEstablishedTimeMillis?: number | undefined;
    isHighestBlockInvalid?: boolean | undefined;
    isOutboundPeer?: boolean | undefined;
    lastTimePeerRequestedMillis?: number | undefined;
    lastTimeReceivedMessageMillis?: number | undefined;
    receivedBytesPerSec?: number | undefined;
    sentBytesPerSec?: number | undefined;
    trackedShards?: any[] | undefined;
}>;
export declare const PrepareErrorSchema: z.ZodUnion<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>;
export declare const PublicKeySchema: z.ZodAny;
export declare const Range_of_uint64Schema: z.ZodObject<{
    end: z.ZodOptional<z.ZodNumber>;
    start: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    end?: number | undefined;
    start?: number | undefined;
}, {
    end?: number | undefined;
    start?: number | undefined;
}>;
export declare const ReceiptEnumViewSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const ReceiptValidationErrorSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const ReceiptViewSchema: z.ZodObject<{
    predecessorId: z.ZodOptional<z.ZodAny>;
    priority: z.ZodOptional<z.ZodNumber>;
    receipt: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    receiptId: z.ZodOptional<z.ZodAny>;
    receiverId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    receiverId?: any;
    predecessorId?: any;
    priority?: number | undefined;
    receipt?: Record<string, any> | undefined;
    receiptId?: any;
}, {
    receiverId?: any;
    predecessorId?: any;
    priority?: number | undefined;
    receipt?: Record<string, any> | undefined;
    receiptId?: any;
}>;
export declare const RpcBlockRequestSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const RpcBlockResponseSchema: z.ZodObject<{
    author: z.ZodOptional<z.ZodAny>;
    chunks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        balanceBurnt: z.ZodOptional<z.ZodString>;
        bandwidthRequests: z.ZodOptional<z.ZodAny>;
        chunkHash: z.ZodOptional<z.ZodAny>;
        congestionInfo: z.ZodOptional<z.ZodAny>;
        encodedLength: z.ZodOptional<z.ZodNumber>;
        encodedMerkleRoot: z.ZodOptional<z.ZodAny>;
        gasLimit: z.ZodOptional<z.ZodNumber>;
        gasUsed: z.ZodOptional<z.ZodNumber>;
        heightCreated: z.ZodOptional<z.ZodNumber>;
        heightIncluded: z.ZodOptional<z.ZodNumber>;
        outcomeRoot: z.ZodOptional<z.ZodAny>;
        outgoingReceiptsRoot: z.ZodOptional<z.ZodAny>;
        prevBlockHash: z.ZodOptional<z.ZodAny>;
        prevStateRoot: z.ZodOptional<z.ZodAny>;
        rentPaid: z.ZodOptional<z.ZodString>;
        shardId: z.ZodOptional<z.ZodAny>;
        signature: z.ZodOptional<z.ZodAny>;
        txRoot: z.ZodOptional<z.ZodAny>;
        validatorProposals: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>, "many">>;
        validatorReward: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        outcomeRoot?: any;
        prevStateRoot?: any;
        rentPaid?: string | undefined;
        signature?: any;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
        balanceBurnt?: string | undefined;
        bandwidthRequests?: any;
        chunkHash?: any;
        congestionInfo?: any;
        encodedLength?: number | undefined;
        encodedMerkleRoot?: any;
        gasLimit?: number | undefined;
        gasUsed?: number | undefined;
        heightCreated?: number | undefined;
        heightIncluded?: number | undefined;
        outgoingReceiptsRoot?: any;
        prevBlockHash?: any;
        shardId?: any;
        txRoot?: any;
    }, {
        outcomeRoot?: any;
        prevStateRoot?: any;
        rentPaid?: string | undefined;
        signature?: any;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
        balanceBurnt?: string | undefined;
        bandwidthRequests?: any;
        chunkHash?: any;
        congestionInfo?: any;
        encodedLength?: number | undefined;
        encodedMerkleRoot?: any;
        gasLimit?: number | undefined;
        gasUsed?: number | undefined;
        heightCreated?: number | undefined;
        heightIncluded?: number | undefined;
        outgoingReceiptsRoot?: any;
        prevBlockHash?: any;
        shardId?: any;
        txRoot?: any;
    }>, "many">>;
    header: z.ZodOptional<z.ZodObject<{
        approvals: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        blockBodyHash: z.ZodOptional<z.ZodAny>;
        blockMerkleRoot: z.ZodOptional<z.ZodAny>;
        blockOrdinal: z.ZodOptional<z.ZodNumber>;
        challengesResult: z.ZodOptional<z.ZodArray<z.ZodObject<{
            accountId: z.ZodOptional<z.ZodAny>;
            isDoubleSign: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            accountId?: any;
            isDoubleSign?: boolean | undefined;
        }, {
            accountId?: any;
            isDoubleSign?: boolean | undefined;
        }>, "many">>;
        challengesRoot: z.ZodOptional<z.ZodAny>;
        chunkEndorsements: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodNumber, "many">, "many">>;
        chunkHeadersRoot: z.ZodOptional<z.ZodAny>;
        chunkMask: z.ZodOptional<z.ZodArray<z.ZodBoolean, "many">>;
        chunkReceiptsRoot: z.ZodOptional<z.ZodAny>;
        chunkTxRoot: z.ZodOptional<z.ZodAny>;
        chunksIncluded: z.ZodOptional<z.ZodNumber>;
        epochId: z.ZodOptional<z.ZodAny>;
        epochSyncDataHash: z.ZodOptional<z.ZodAny>;
        gasPrice: z.ZodOptional<z.ZodString>;
        hash: z.ZodOptional<z.ZodAny>;
        height: z.ZodOptional<z.ZodNumber>;
        lastDsFinalBlock: z.ZodOptional<z.ZodAny>;
        lastFinalBlock: z.ZodOptional<z.ZodAny>;
        latestProtocolVersion: z.ZodOptional<z.ZodNumber>;
        nextBpHash: z.ZodOptional<z.ZodAny>;
        nextEpochId: z.ZodOptional<z.ZodAny>;
        outcomeRoot: z.ZodOptional<z.ZodAny>;
        prevHash: z.ZodOptional<z.ZodAny>;
        prevHeight: z.ZodOptional<z.ZodNumber>;
        prevStateRoot: z.ZodOptional<z.ZodAny>;
        randomValue: z.ZodOptional<z.ZodAny>;
        rentPaid: z.ZodOptional<z.ZodString>;
        signature: z.ZodOptional<z.ZodAny>;
        timestamp: z.ZodOptional<z.ZodNumber>;
        timestampNanosec: z.ZodOptional<z.ZodString>;
        totalSupply: z.ZodOptional<z.ZodString>;
        validatorProposals: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>, "many">>;
        validatorReward: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        gasPrice?: string | undefined;
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
        approvals?: any[] | undefined;
        blockBodyHash?: any;
        blockOrdinal?: number | undefined;
        challengesResult?: {
            accountId?: any;
            isDoubleSign?: boolean | undefined;
        }[] | undefined;
        challengesRoot?: any;
        chunkEndorsements?: number[][] | undefined;
        chunkHeadersRoot?: any;
        chunkMask?: boolean[] | undefined;
        chunkReceiptsRoot?: any;
        chunkTxRoot?: any;
        chunksIncluded?: number | undefined;
        epochSyncDataHash?: any;
        hash?: any;
        lastDsFinalBlock?: any;
        lastFinalBlock?: any;
        latestProtocolVersion?: number | undefined;
        prevHash?: any;
        prevHeight?: number | undefined;
        randomValue?: any;
        rentPaid?: string | undefined;
        signature?: any;
        totalSupply?: string | undefined;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
    }, {
        gasPrice?: string | undefined;
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
        approvals?: any[] | undefined;
        blockBodyHash?: any;
        blockOrdinal?: number | undefined;
        challengesResult?: {
            accountId?: any;
            isDoubleSign?: boolean | undefined;
        }[] | undefined;
        challengesRoot?: any;
        chunkEndorsements?: number[][] | undefined;
        chunkHeadersRoot?: any;
        chunkMask?: boolean[] | undefined;
        chunkReceiptsRoot?: any;
        chunkTxRoot?: any;
        chunksIncluded?: number | undefined;
        epochSyncDataHash?: any;
        hash?: any;
        lastDsFinalBlock?: any;
        lastFinalBlock?: any;
        latestProtocolVersion?: number | undefined;
        prevHash?: any;
        prevHeight?: number | undefined;
        randomValue?: any;
        rentPaid?: string | undefined;
        signature?: any;
        totalSupply?: string | undefined;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    header?: {
        gasPrice?: string | undefined;
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
        approvals?: any[] | undefined;
        blockBodyHash?: any;
        blockOrdinal?: number | undefined;
        challengesResult?: {
            accountId?: any;
            isDoubleSign?: boolean | undefined;
        }[] | undefined;
        challengesRoot?: any;
        chunkEndorsements?: number[][] | undefined;
        chunkHeadersRoot?: any;
        chunkMask?: boolean[] | undefined;
        chunkReceiptsRoot?: any;
        chunkTxRoot?: any;
        chunksIncluded?: number | undefined;
        epochSyncDataHash?: any;
        hash?: any;
        lastDsFinalBlock?: any;
        lastFinalBlock?: any;
        latestProtocolVersion?: number | undefined;
        prevHash?: any;
        prevHeight?: number | undefined;
        randomValue?: any;
        rentPaid?: string | undefined;
        signature?: any;
        totalSupply?: string | undefined;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
    } | undefined;
    chunks?: {
        outcomeRoot?: any;
        prevStateRoot?: any;
        rentPaid?: string | undefined;
        signature?: any;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
        balanceBurnt?: string | undefined;
        bandwidthRequests?: any;
        chunkHash?: any;
        congestionInfo?: any;
        encodedLength?: number | undefined;
        encodedMerkleRoot?: any;
        gasLimit?: number | undefined;
        gasUsed?: number | undefined;
        heightCreated?: number | undefined;
        heightIncluded?: number | undefined;
        outgoingReceiptsRoot?: any;
        prevBlockHash?: any;
        shardId?: any;
        txRoot?: any;
    }[] | undefined;
    author?: any;
}, {
    header?: {
        gasPrice?: string | undefined;
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
        approvals?: any[] | undefined;
        blockBodyHash?: any;
        blockOrdinal?: number | undefined;
        challengesResult?: {
            accountId?: any;
            isDoubleSign?: boolean | undefined;
        }[] | undefined;
        challengesRoot?: any;
        chunkEndorsements?: number[][] | undefined;
        chunkHeadersRoot?: any;
        chunkMask?: boolean[] | undefined;
        chunkReceiptsRoot?: any;
        chunkTxRoot?: any;
        chunksIncluded?: number | undefined;
        epochSyncDataHash?: any;
        hash?: any;
        lastDsFinalBlock?: any;
        lastFinalBlock?: any;
        latestProtocolVersion?: number | undefined;
        prevHash?: any;
        prevHeight?: number | undefined;
        randomValue?: any;
        rentPaid?: string | undefined;
        signature?: any;
        totalSupply?: string | undefined;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
    } | undefined;
    chunks?: {
        outcomeRoot?: any;
        prevStateRoot?: any;
        rentPaid?: string | undefined;
        signature?: any;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
        balanceBurnt?: string | undefined;
        bandwidthRequests?: any;
        chunkHash?: any;
        congestionInfo?: any;
        encodedLength?: number | undefined;
        encodedMerkleRoot?: any;
        gasLimit?: number | undefined;
        gasUsed?: number | undefined;
        heightCreated?: number | undefined;
        heightIncluded?: number | undefined;
        outgoingReceiptsRoot?: any;
        prevBlockHash?: any;
        shardId?: any;
        txRoot?: any;
    }[] | undefined;
    author?: any;
}>;
export declare const RpcChunkRequestSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const RpcChunkResponseSchema: z.ZodObject<{
    author: z.ZodOptional<z.ZodAny>;
    header: z.ZodOptional<z.ZodObject<{
        balanceBurnt: z.ZodOptional<z.ZodString>;
        bandwidthRequests: z.ZodOptional<z.ZodAny>;
        chunkHash: z.ZodOptional<z.ZodAny>;
        congestionInfo: z.ZodOptional<z.ZodAny>;
        encodedLength: z.ZodOptional<z.ZodNumber>;
        encodedMerkleRoot: z.ZodOptional<z.ZodAny>;
        gasLimit: z.ZodOptional<z.ZodNumber>;
        gasUsed: z.ZodOptional<z.ZodNumber>;
        heightCreated: z.ZodOptional<z.ZodNumber>;
        heightIncluded: z.ZodOptional<z.ZodNumber>;
        outcomeRoot: z.ZodOptional<z.ZodAny>;
        outgoingReceiptsRoot: z.ZodOptional<z.ZodAny>;
        prevBlockHash: z.ZodOptional<z.ZodAny>;
        prevStateRoot: z.ZodOptional<z.ZodAny>;
        rentPaid: z.ZodOptional<z.ZodString>;
        shardId: z.ZodOptional<z.ZodAny>;
        signature: z.ZodOptional<z.ZodAny>;
        txRoot: z.ZodOptional<z.ZodAny>;
        validatorProposals: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>, "many">>;
        validatorReward: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        outcomeRoot?: any;
        prevStateRoot?: any;
        rentPaid?: string | undefined;
        signature?: any;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
        balanceBurnt?: string | undefined;
        bandwidthRequests?: any;
        chunkHash?: any;
        congestionInfo?: any;
        encodedLength?: number | undefined;
        encodedMerkleRoot?: any;
        gasLimit?: number | undefined;
        gasUsed?: number | undefined;
        heightCreated?: number | undefined;
        heightIncluded?: number | undefined;
        outgoingReceiptsRoot?: any;
        prevBlockHash?: any;
        shardId?: any;
        txRoot?: any;
    }, {
        outcomeRoot?: any;
        prevStateRoot?: any;
        rentPaid?: string | undefined;
        signature?: any;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
        balanceBurnt?: string | undefined;
        bandwidthRequests?: any;
        chunkHash?: any;
        congestionInfo?: any;
        encodedLength?: number | undefined;
        encodedMerkleRoot?: any;
        gasLimit?: number | undefined;
        gasUsed?: number | undefined;
        heightCreated?: number | undefined;
        heightIncluded?: number | undefined;
        outgoingReceiptsRoot?: any;
        prevBlockHash?: any;
        shardId?: any;
        txRoot?: any;
    }>>;
    receipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        predecessorId: z.ZodOptional<z.ZodAny>;
        priority: z.ZodOptional<z.ZodNumber>;
        receipt: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        receiptId: z.ZodOptional<z.ZodAny>;
        receiverId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        receiverId?: any;
        predecessorId?: any;
        priority?: number | undefined;
        receipt?: Record<string, any> | undefined;
        receiptId?: any;
    }, {
        receiverId?: any;
        predecessorId?: any;
        priority?: number | undefined;
        receipt?: Record<string, any> | undefined;
        receiptId?: any;
    }>, "many">>;
    transactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        actions: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>, "many">>;
        hash: z.ZodOptional<z.ZodAny>;
        nonce: z.ZodOptional<z.ZodNumber>;
        priorityFee: z.ZodOptional<z.ZodNumber>;
        publicKey: z.ZodOptional<z.ZodAny>;
        receiverId: z.ZodOptional<z.ZodAny>;
        signature: z.ZodOptional<z.ZodAny>;
        signerId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        publicKey?: any;
        nonce?: number | undefined;
        hash?: any;
        signature?: any;
        receiverId?: any;
        actions?: (string | Record<string, any>)[] | undefined;
        priorityFee?: number | undefined;
        signerId?: any;
    }, {
        publicKey?: any;
        nonce?: number | undefined;
        hash?: any;
        signature?: any;
        receiverId?: any;
        actions?: (string | Record<string, any>)[] | undefined;
        priorityFee?: number | undefined;
        signerId?: any;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    header?: {
        outcomeRoot?: any;
        prevStateRoot?: any;
        rentPaid?: string | undefined;
        signature?: any;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
        balanceBurnt?: string | undefined;
        bandwidthRequests?: any;
        chunkHash?: any;
        congestionInfo?: any;
        encodedLength?: number | undefined;
        encodedMerkleRoot?: any;
        gasLimit?: number | undefined;
        gasUsed?: number | undefined;
        heightCreated?: number | undefined;
        heightIncluded?: number | undefined;
        outgoingReceiptsRoot?: any;
        prevBlockHash?: any;
        shardId?: any;
        txRoot?: any;
    } | undefined;
    transactions?: {
        publicKey?: any;
        nonce?: number | undefined;
        hash?: any;
        signature?: any;
        receiverId?: any;
        actions?: (string | Record<string, any>)[] | undefined;
        priorityFee?: number | undefined;
        signerId?: any;
    }[] | undefined;
    receipts?: {
        receiverId?: any;
        predecessorId?: any;
        priority?: number | undefined;
        receipt?: Record<string, any> | undefined;
        receiptId?: any;
    }[] | undefined;
    author?: any;
}, {
    header?: {
        outcomeRoot?: any;
        prevStateRoot?: any;
        rentPaid?: string | undefined;
        signature?: any;
        validatorProposals?: any[] | undefined;
        validatorReward?: string | undefined;
        balanceBurnt?: string | undefined;
        bandwidthRequests?: any;
        chunkHash?: any;
        congestionInfo?: any;
        encodedLength?: number | undefined;
        encodedMerkleRoot?: any;
        gasLimit?: number | undefined;
        gasUsed?: number | undefined;
        heightCreated?: number | undefined;
        heightIncluded?: number | undefined;
        outgoingReceiptsRoot?: any;
        prevBlockHash?: any;
        shardId?: any;
        txRoot?: any;
    } | undefined;
    transactions?: {
        publicKey?: any;
        nonce?: number | undefined;
        hash?: any;
        signature?: any;
        receiverId?: any;
        actions?: (string | Record<string, any>)[] | undefined;
        priorityFee?: number | undefined;
        signerId?: any;
    }[] | undefined;
    receipts?: {
        receiverId?: any;
        predecessorId?: any;
        priority?: number | undefined;
        receipt?: Record<string, any> | undefined;
        receiptId?: any;
    }[] | undefined;
    author?: any;
}>;
export declare const RpcClientConfigRequestSchema: z.ZodAny;
export declare const RpcClientConfigResponseSchema: z.ZodObject<{
    archive: z.ZodOptional<z.ZodBoolean>;
    blockFetchHorizon: z.ZodOptional<z.ZodNumber>;
    blockHeaderFetchHorizon: z.ZodOptional<z.ZodNumber>;
    blockProductionTrackingDelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    catchupStepPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    chainId: z.ZodOptional<z.ZodString>;
    chunkDistributionNetwork: z.ZodOptional<z.ZodAny>;
    chunkRequestRetryPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    chunkWaitMult: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    clientBackgroundMigrationThreads: z.ZodOptional<z.ZodNumber>;
    doomslugStepPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    enableMultilineLogging: z.ZodOptional<z.ZodBoolean>;
    enableStatisticsExport: z.ZodOptional<z.ZodBoolean>;
    epochLength: z.ZodOptional<z.ZodNumber>;
    epochSync: z.ZodOptional<z.ZodAny>;
    expectedShutdown: z.ZodOptional<z.ZodAny>;
    gc: z.ZodOptional<z.ZodAny>;
    headerSyncExpectedHeightPerSecond: z.ZodOptional<z.ZodNumber>;
    headerSyncInitialTimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    headerSyncProgressTimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    headerSyncStallBanTimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    logSummaryPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    logSummaryStyle: z.ZodOptional<z.ZodAny>;
    maxBlockProductionDelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxBlockWaitDelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxGasBurntView: z.ZodOptional<z.ZodNumber>;
    minBlockProductionDelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    minNumPeers: z.ZodOptional<z.ZodNumber>;
    numBlockProducerSeats: z.ZodOptional<z.ZodNumber>;
    orphanStateWitnessMaxSize: z.ZodOptional<z.ZodNumber>;
    orphanStateWitnessPoolSize: z.ZodOptional<z.ZodNumber>;
    produceChunkAddTransactionsTimeLimit: z.ZodOptional<z.ZodString>;
    produceEmptyBlocks: z.ZodOptional<z.ZodBoolean>;
    reshardingConfig: z.ZodOptional<z.ZodAny>;
    rpcAddr: z.ZodOptional<z.ZodString>;
    saveInvalidWitnesses: z.ZodOptional<z.ZodBoolean>;
    saveLatestWitnesses: z.ZodOptional<z.ZodBoolean>;
    saveTrieChanges: z.ZodOptional<z.ZodBoolean>;
    saveTxOutcomes: z.ZodOptional<z.ZodBoolean>;
    skipSyncWait: z.ZodOptional<z.ZodBoolean>;
    stateSync: z.ZodOptional<z.ZodAny>;
    stateSyncEnabled: z.ZodOptional<z.ZodBoolean>;
    stateSyncExternalBackoff: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    stateSyncExternalTimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    stateSyncP2pTimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    stateSyncRetryBackoff: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    syncCheckPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    syncHeightThreshold: z.ZodOptional<z.ZodNumber>;
    syncMaxBlockRequests: z.ZodOptional<z.ZodNumber>;
    syncStepPeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    trackedShardsConfig: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    transactionPoolSizeLimit: z.ZodOptional<z.ZodNumber>;
    transactionRequestHandlerThreads: z.ZodOptional<z.ZodNumber>;
    trieViewerStateSizeLimit: z.ZodOptional<z.ZodNumber>;
    ttlAccountIdRouter: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    txRoutingHeightHorizon: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodAny>;
    viewClientThreads: z.ZodOptional<z.ZodNumber>;
    viewClientThrottlePeriod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    chainId?: string | undefined;
    version?: any;
    epochLength?: number | undefined;
    numBlockProducerSeats?: number | undefined;
    archive?: boolean | undefined;
    blockFetchHorizon?: number | undefined;
    blockHeaderFetchHorizon?: number | undefined;
    blockProductionTrackingDelay?: number[] | undefined;
    catchupStepPeriod?: number[] | undefined;
    chunkDistributionNetwork?: any;
    chunkRequestRetryPeriod?: number[] | undefined;
    chunkWaitMult?: number[] | undefined;
    clientBackgroundMigrationThreads?: number | undefined;
    doomslugStepPeriod?: number[] | undefined;
    enableMultilineLogging?: boolean | undefined;
    enableStatisticsExport?: boolean | undefined;
    epochSync?: any;
    expectedShutdown?: any;
    gc?: any;
    headerSyncExpectedHeightPerSecond?: number | undefined;
    headerSyncInitialTimeout?: number[] | undefined;
    headerSyncProgressTimeout?: number[] | undefined;
    headerSyncStallBanTimeout?: number[] | undefined;
    logSummaryPeriod?: number[] | undefined;
    logSummaryStyle?: any;
    maxBlockProductionDelay?: number[] | undefined;
    maxBlockWaitDelay?: number[] | undefined;
    maxGasBurntView?: number | undefined;
    minBlockProductionDelay?: number[] | undefined;
    minNumPeers?: number | undefined;
    orphanStateWitnessMaxSize?: number | undefined;
    orphanStateWitnessPoolSize?: number | undefined;
    produceChunkAddTransactionsTimeLimit?: string | undefined;
    produceEmptyBlocks?: boolean | undefined;
    reshardingConfig?: any;
    rpcAddr?: string | undefined;
    saveInvalidWitnesses?: boolean | undefined;
    saveLatestWitnesses?: boolean | undefined;
    saveTrieChanges?: boolean | undefined;
    saveTxOutcomes?: boolean | undefined;
    skipSyncWait?: boolean | undefined;
    stateSync?: any;
    stateSyncEnabled?: boolean | undefined;
    stateSyncExternalBackoff?: number[] | undefined;
    stateSyncExternalTimeout?: number[] | undefined;
    stateSyncP2pTimeout?: number[] | undefined;
    stateSyncRetryBackoff?: number[] | undefined;
    syncCheckPeriod?: number[] | undefined;
    syncHeightThreshold?: number | undefined;
    syncMaxBlockRequests?: number | undefined;
    syncStepPeriod?: number[] | undefined;
    trackedShardsConfig?: string | Record<string, any> | undefined;
    transactionPoolSizeLimit?: number | undefined;
    transactionRequestHandlerThreads?: number | undefined;
    trieViewerStateSizeLimit?: number | undefined;
    ttlAccountIdRouter?: number[] | undefined;
    txRoutingHeightHorizon?: number | undefined;
    viewClientThreads?: number | undefined;
    viewClientThrottlePeriod?: number[] | undefined;
}, {
    chainId?: string | undefined;
    version?: any;
    epochLength?: number | undefined;
    numBlockProducerSeats?: number | undefined;
    archive?: boolean | undefined;
    blockFetchHorizon?: number | undefined;
    blockHeaderFetchHorizon?: number | undefined;
    blockProductionTrackingDelay?: number[] | undefined;
    catchupStepPeriod?: number[] | undefined;
    chunkDistributionNetwork?: any;
    chunkRequestRetryPeriod?: number[] | undefined;
    chunkWaitMult?: number[] | undefined;
    clientBackgroundMigrationThreads?: number | undefined;
    doomslugStepPeriod?: number[] | undefined;
    enableMultilineLogging?: boolean | undefined;
    enableStatisticsExport?: boolean | undefined;
    epochSync?: any;
    expectedShutdown?: any;
    gc?: any;
    headerSyncExpectedHeightPerSecond?: number | undefined;
    headerSyncInitialTimeout?: number[] | undefined;
    headerSyncProgressTimeout?: number[] | undefined;
    headerSyncStallBanTimeout?: number[] | undefined;
    logSummaryPeriod?: number[] | undefined;
    logSummaryStyle?: any;
    maxBlockProductionDelay?: number[] | undefined;
    maxBlockWaitDelay?: number[] | undefined;
    maxGasBurntView?: number | undefined;
    minBlockProductionDelay?: number[] | undefined;
    minNumPeers?: number | undefined;
    orphanStateWitnessMaxSize?: number | undefined;
    orphanStateWitnessPoolSize?: number | undefined;
    produceChunkAddTransactionsTimeLimit?: string | undefined;
    produceEmptyBlocks?: boolean | undefined;
    reshardingConfig?: any;
    rpcAddr?: string | undefined;
    saveInvalidWitnesses?: boolean | undefined;
    saveLatestWitnesses?: boolean | undefined;
    saveTrieChanges?: boolean | undefined;
    saveTxOutcomes?: boolean | undefined;
    skipSyncWait?: boolean | undefined;
    stateSync?: any;
    stateSyncEnabled?: boolean | undefined;
    stateSyncExternalBackoff?: number[] | undefined;
    stateSyncExternalTimeout?: number[] | undefined;
    stateSyncP2pTimeout?: number[] | undefined;
    stateSyncRetryBackoff?: number[] | undefined;
    syncCheckPeriod?: number[] | undefined;
    syncHeightThreshold?: number | undefined;
    syncMaxBlockRequests?: number | undefined;
    syncStepPeriod?: number[] | undefined;
    trackedShardsConfig?: string | Record<string, any> | undefined;
    transactionPoolSizeLimit?: number | undefined;
    transactionRequestHandlerThreads?: number | undefined;
    trieViewerStateSizeLimit?: number | undefined;
    ttlAccountIdRouter?: number[] | undefined;
    txRoutingHeightHorizon?: number | undefined;
    viewClientThreads?: number | undefined;
    viewClientThrottlePeriod?: number[] | undefined;
}>;
export declare const RpcCongestionLevelRequestSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const RpcCongestionLevelResponseSchema: z.ZodObject<{
    congestionLevel: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    congestionLevel?: number | undefined;
}, {
    congestionLevel?: number | undefined;
}>;
export declare const RpcErrorSchema: z.ZodObject<{
    cause: z.ZodOptional<z.ZodAny>;
    code: z.ZodOptional<z.ZodNumber>;
    data: z.ZodOptional<z.ZodAny>;
    message: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    code?: number | undefined;
    message?: string | undefined;
    data?: any;
    cause?: any;
    name?: any;
}, {
    code?: number | undefined;
    message?: string | undefined;
    data?: any;
    cause?: any;
    name?: any;
}>;
export declare const RpcGasPriceRequestSchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    blockId?: any;
}, {
    blockId?: any;
}>;
export declare const RpcGasPriceResponseSchema: z.ZodObject<{
    gasPrice: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    gasPrice?: string | undefined;
}, {
    gasPrice?: string | undefined;
}>;
export declare const RpcHealthRequestSchema: z.ZodAny;
export declare const RpcHealthResponseSchema: z.ZodAny;
export declare const RpcKnownProducerSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
    addr: z.ZodOptional<z.ZodString>;
    peerId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
    peerId?: any;
    addr?: string | undefined;
}, {
    accountId?: any;
    peerId?: any;
    addr?: string | undefined;
}>;
export declare const RpcLightClientBlockProofRequestSchema: z.ZodObject<{
    blockHash: z.ZodOptional<z.ZodAny>;
    lightClientHead: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    blockHash?: any;
    lightClientHead?: any;
}, {
    blockHash?: any;
    lightClientHead?: any;
}>;
export declare const RpcLightClientBlockProofResponseSchema: z.ZodObject<{
    blockHeaderLite: z.ZodOptional<z.ZodObject<{
        innerLite: z.ZodOptional<z.ZodObject<{
            blockMerkleRoot: z.ZodOptional<z.ZodAny>;
            epochId: z.ZodOptional<z.ZodAny>;
            height: z.ZodOptional<z.ZodNumber>;
            nextBpHash: z.ZodOptional<z.ZodAny>;
            nextEpochId: z.ZodOptional<z.ZodAny>;
            outcomeRoot: z.ZodOptional<z.ZodAny>;
            prevStateRoot: z.ZodOptional<z.ZodAny>;
            timestamp: z.ZodOptional<z.ZodNumber>;
            timestampNanosec: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        }, {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        }>>;
        innerRestHash: z.ZodOptional<z.ZodAny>;
        prevBlockHash: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        prevBlockHash?: any;
        innerLite?: {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        } | undefined;
        innerRestHash?: any;
    }, {
        prevBlockHash?: any;
        innerLite?: {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        } | undefined;
        innerRestHash?: any;
    }>>;
    blockProof: z.ZodOptional<z.ZodArray<z.ZodObject<{
        direction: z.ZodOptional<z.ZodEnum<["Left", "Right"]>>;
        hash: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }, {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    blockHeaderLite?: {
        prevBlockHash?: any;
        innerLite?: {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        } | undefined;
        innerRestHash?: any;
    } | undefined;
    blockProof?: {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }[] | undefined;
}, {
    blockHeaderLite?: {
        prevBlockHash?: any;
        innerLite?: {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        } | undefined;
        innerRestHash?: any;
    } | undefined;
    blockProof?: {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }[] | undefined;
}>;
export declare const RpcLightClientExecutionProofRequestSchema: z.ZodObject<{
    lightClientHead: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    lightClientHead?: any;
}, {
    lightClientHead?: any;
}>;
export declare const RpcLightClientExecutionProofResponseSchema: z.ZodObject<{
    blockHeaderLite: z.ZodOptional<z.ZodObject<{
        innerLite: z.ZodOptional<z.ZodObject<{
            blockMerkleRoot: z.ZodOptional<z.ZodAny>;
            epochId: z.ZodOptional<z.ZodAny>;
            height: z.ZodOptional<z.ZodNumber>;
            nextBpHash: z.ZodOptional<z.ZodAny>;
            nextEpochId: z.ZodOptional<z.ZodAny>;
            outcomeRoot: z.ZodOptional<z.ZodAny>;
            prevStateRoot: z.ZodOptional<z.ZodAny>;
            timestamp: z.ZodOptional<z.ZodNumber>;
            timestampNanosec: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        }, {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        }>>;
        innerRestHash: z.ZodOptional<z.ZodAny>;
        prevBlockHash: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        prevBlockHash?: any;
        innerLite?: {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        } | undefined;
        innerRestHash?: any;
    }, {
        prevBlockHash?: any;
        innerLite?: {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        } | undefined;
        innerRestHash?: any;
    }>>;
    blockProof: z.ZodOptional<z.ZodArray<z.ZodObject<{
        direction: z.ZodOptional<z.ZodEnum<["Left", "Right"]>>;
        hash: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }, {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }>, "many">>;
    outcomeProof: z.ZodOptional<z.ZodObject<{
        blockHash: z.ZodOptional<z.ZodAny>;
        id: z.ZodOptional<z.ZodAny>;
        outcome: z.ZodOptional<z.ZodObject<{
            executorId: z.ZodOptional<z.ZodAny>;
            gasBurnt: z.ZodOptional<z.ZodNumber>;
            logs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            metadata: z.ZodOptional<z.ZodAny>;
            receiptIds: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
            status: z.ZodOptional<z.ZodAny>;
            tokensBurnt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        }, {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        }>>;
        proof: z.ZodOptional<z.ZodArray<z.ZodObject<{
            direction: z.ZodOptional<z.ZodEnum<["Left", "Right"]>>;
            hash: z.ZodOptional<z.ZodAny>;
        }, "strip", z.ZodTypeAny, {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }, {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    }, {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    }>>;
    outcomeRootProof: z.ZodOptional<z.ZodArray<z.ZodObject<{
        direction: z.ZodOptional<z.ZodEnum<["Left", "Right"]>>;
        hash: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }, {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    blockHeaderLite?: {
        prevBlockHash?: any;
        innerLite?: {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        } | undefined;
        innerRestHash?: any;
    } | undefined;
    blockProof?: {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }[] | undefined;
    outcomeProof?: {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    } | undefined;
    outcomeRootProof?: {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }[] | undefined;
}, {
    blockHeaderLite?: {
        prevBlockHash?: any;
        innerLite?: {
            timestamp?: number | undefined;
            blockMerkleRoot?: any;
            epochId?: any;
            height?: number | undefined;
            nextBpHash?: any;
            nextEpochId?: any;
            outcomeRoot?: any;
            prevStateRoot?: any;
            timestampNanosec?: string | undefined;
        } | undefined;
        innerRestHash?: any;
    } | undefined;
    blockProof?: {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }[] | undefined;
    outcomeProof?: {
        blockHash?: any;
        id?: any;
        outcome?: {
            status?: any;
            logs?: string[] | undefined;
            executorId?: any;
            gasBurnt?: number | undefined;
            metadata?: any;
            receiptIds?: any[] | undefined;
            tokensBurnt?: string | undefined;
        } | undefined;
        proof?: {
            hash?: any;
            direction?: "Left" | "Right" | undefined;
        }[] | undefined;
    } | undefined;
    outcomeRootProof?: {
        hash?: any;
        direction?: "Left" | "Right" | undefined;
    }[] | undefined;
}>;
export declare const RpcLightClientNextBlockRequestSchema: z.ZodObject<{
    lastBlockHash: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    lastBlockHash?: any;
}, {
    lastBlockHash?: any;
}>;
export declare const RpcLightClientNextBlockResponseSchema: z.ZodObject<{
    approvalsAfterNext: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    innerLite: z.ZodOptional<z.ZodObject<{
        blockMerkleRoot: z.ZodOptional<z.ZodAny>;
        epochId: z.ZodOptional<z.ZodAny>;
        height: z.ZodOptional<z.ZodNumber>;
        nextBpHash: z.ZodOptional<z.ZodAny>;
        nextEpochId: z.ZodOptional<z.ZodAny>;
        outcomeRoot: z.ZodOptional<z.ZodAny>;
        prevStateRoot: z.ZodOptional<z.ZodAny>;
        timestamp: z.ZodOptional<z.ZodNumber>;
        timestampNanosec: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
    }, {
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
    }>>;
    innerRestHash: z.ZodOptional<z.ZodAny>;
    nextBlockInnerHash: z.ZodOptional<z.ZodAny>;
    nextBps: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>, "many">>;
    prevBlockHash: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    prevBlockHash?: any;
    innerLite?: {
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
    } | undefined;
    innerRestHash?: any;
    approvalsAfterNext?: any[] | undefined;
    nextBlockInnerHash?: any;
    nextBps?: any[] | undefined;
}, {
    prevBlockHash?: any;
    innerLite?: {
        timestamp?: number | undefined;
        blockMerkleRoot?: any;
        epochId?: any;
        height?: number | undefined;
        nextBpHash?: any;
        nextEpochId?: any;
        outcomeRoot?: any;
        prevStateRoot?: any;
        timestampNanosec?: string | undefined;
    } | undefined;
    innerRestHash?: any;
    approvalsAfterNext?: any[] | undefined;
    nextBlockInnerHash?: any;
    nextBps?: any[] | undefined;
}>;
export declare const RpcMaintenanceWindowsRequestSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
}, {
    accountId?: any;
}>;
export declare const RpcNetworkInfoRequestSchema: z.ZodAny;
export declare const RpcNetworkInfoResponseSchema: z.ZodObject<{
    activePeers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
        addr: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
        id?: any;
        addr?: string | undefined;
    }, {
        accountId?: any;
        id?: any;
        addr?: string | undefined;
    }>, "many">>;
    knownProducers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
        addr: z.ZodOptional<z.ZodString>;
        peerId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
        peerId?: any;
        addr?: string | undefined;
    }, {
        accountId?: any;
        peerId?: any;
        addr?: string | undefined;
    }>, "many">>;
    numActivePeers: z.ZodOptional<z.ZodNumber>;
    peerMaxCount: z.ZodOptional<z.ZodNumber>;
    receivedBytesPerSec: z.ZodOptional<z.ZodNumber>;
    sentBytesPerSec: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    receivedBytesPerSec?: number | undefined;
    sentBytesPerSec?: number | undefined;
    knownProducers?: {
        accountId?: any;
        peerId?: any;
        addr?: string | undefined;
    }[] | undefined;
    peerMaxCount?: number | undefined;
    activePeers?: {
        accountId?: any;
        id?: any;
        addr?: string | undefined;
    }[] | undefined;
    numActivePeers?: number | undefined;
}, {
    receivedBytesPerSec?: number | undefined;
    sentBytesPerSec?: number | undefined;
    knownProducers?: {
        accountId?: any;
        peerId?: any;
        addr?: string | undefined;
    }[] | undefined;
    peerMaxCount?: number | undefined;
    activePeers?: {
        accountId?: any;
        id?: any;
        addr?: string | undefined;
    }[] | undefined;
    numActivePeers?: number | undefined;
}>;
export declare const RpcPeerInfoSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
    addr: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
    id?: any;
    addr?: string | undefined;
}, {
    accountId?: any;
    id?: any;
    addr?: string | undefined;
}>;
export declare const RpcProtocolConfigRequestSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const RpcProtocolConfigResponseSchema: z.ZodObject<{
    avgHiddenValidatorSeatsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    blockProducerKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    chainId: z.ZodOptional<z.ZodString>;
    chunkProducerKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    chunkValidatorOnlyKickoutThreshold: z.ZodOptional<z.ZodNumber>;
    dynamicResharding: z.ZodOptional<z.ZodBoolean>;
    epochLength: z.ZodOptional<z.ZodNumber>;
    fishermenThreshold: z.ZodOptional<z.ZodString>;
    gasLimit: z.ZodOptional<z.ZodNumber>;
    gasPriceAdjustmentRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    genesisHeight: z.ZodOptional<z.ZodNumber>;
    genesisTime: z.ZodOptional<z.ZodString>;
    maxGasPrice: z.ZodOptional<z.ZodString>;
    maxInflationRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxKickoutStakePerc: z.ZodOptional<z.ZodNumber>;
    minGasPrice: z.ZodOptional<z.ZodString>;
    minimumStakeDivisor: z.ZodOptional<z.ZodNumber>;
    minimumStakeRatio: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    minimumValidatorsPerShard: z.ZodOptional<z.ZodNumber>;
    numBlockProducerSeats: z.ZodOptional<z.ZodNumber>;
    numBlockProducerSeatsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    numBlocksPerYear: z.ZodOptional<z.ZodNumber>;
    onlineMaxThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    onlineMinThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolRewardRate: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolTreasuryAccount: z.ZodOptional<z.ZodAny>;
    protocolUpgradeStakeThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    protocolVersion: z.ZodOptional<z.ZodNumber>;
    runtimeConfig: z.ZodOptional<z.ZodAny>;
    shardLayout: z.ZodOptional<z.ZodAny>;
    shuffleShardAssignmentForChunkProducers: z.ZodOptional<z.ZodBoolean>;
    targetValidatorMandatesPerShard: z.ZodOptional<z.ZodNumber>;
    transactionValidityPeriod: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    chainId?: string | undefined;
    protocolVersion?: number | undefined;
    gasLimit?: number | undefined;
    avgHiddenValidatorSeatsPerShard?: number[] | undefined;
    blockProducerKickoutThreshold?: number | undefined;
    chunkProducerKickoutThreshold?: number | undefined;
    chunkValidatorOnlyKickoutThreshold?: number | undefined;
    dynamicResharding?: boolean | undefined;
    epochLength?: number | undefined;
    fishermenThreshold?: string | undefined;
    gasPriceAdjustmentRate?: number[] | undefined;
    genesisHeight?: number | undefined;
    genesisTime?: string | undefined;
    maxGasPrice?: string | undefined;
    maxInflationRate?: number[] | undefined;
    maxKickoutStakePerc?: number | undefined;
    minGasPrice?: string | undefined;
    minimumStakeDivisor?: number | undefined;
    minimumStakeRatio?: number[] | undefined;
    minimumValidatorsPerShard?: number | undefined;
    numBlockProducerSeats?: number | undefined;
    numBlockProducerSeatsPerShard?: number[] | undefined;
    numBlocksPerYear?: number | undefined;
    onlineMaxThreshold?: number[] | undefined;
    onlineMinThreshold?: number[] | undefined;
    protocolRewardRate?: number[] | undefined;
    protocolTreasuryAccount?: any;
    protocolUpgradeStakeThreshold?: number[] | undefined;
    shardLayout?: any;
    shuffleShardAssignmentForChunkProducers?: boolean | undefined;
    targetValidatorMandatesPerShard?: number | undefined;
    transactionValidityPeriod?: number | undefined;
    runtimeConfig?: any;
}, {
    chainId?: string | undefined;
    protocolVersion?: number | undefined;
    gasLimit?: number | undefined;
    avgHiddenValidatorSeatsPerShard?: number[] | undefined;
    blockProducerKickoutThreshold?: number | undefined;
    chunkProducerKickoutThreshold?: number | undefined;
    chunkValidatorOnlyKickoutThreshold?: number | undefined;
    dynamicResharding?: boolean | undefined;
    epochLength?: number | undefined;
    fishermenThreshold?: string | undefined;
    gasPriceAdjustmentRate?: number[] | undefined;
    genesisHeight?: number | undefined;
    genesisTime?: string | undefined;
    maxGasPrice?: string | undefined;
    maxInflationRate?: number[] | undefined;
    maxKickoutStakePerc?: number | undefined;
    minGasPrice?: string | undefined;
    minimumStakeDivisor?: number | undefined;
    minimumStakeRatio?: number[] | undefined;
    minimumValidatorsPerShard?: number | undefined;
    numBlockProducerSeats?: number | undefined;
    numBlockProducerSeatsPerShard?: number[] | undefined;
    numBlocksPerYear?: number | undefined;
    onlineMaxThreshold?: number[] | undefined;
    onlineMinThreshold?: number[] | undefined;
    protocolRewardRate?: number[] | undefined;
    protocolTreasuryAccount?: any;
    protocolUpgradeStakeThreshold?: number[] | undefined;
    shardLayout?: any;
    shuffleShardAssignmentForChunkProducers?: boolean | undefined;
    targetValidatorMandatesPerShard?: number | undefined;
    transactionValidityPeriod?: number | undefined;
    runtimeConfig?: any;
}>;
export declare const RpcQueryRequestSchema: z.ZodAny;
export declare const RpcQueryResponseSchema: z.ZodObject<{
    blockHash: z.ZodOptional<z.ZodAny>;
    blockHeight: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    blockHeight?: number | undefined;
    blockHash?: any;
}, {
    blockHeight?: number | undefined;
    blockHash?: any;
}>;
export declare const RpcReceiptRequestSchema: z.ZodObject<{
    receiptId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    receiptId?: any;
}, {
    receiptId?: any;
}>;
export declare const RpcReceiptResponseSchema: z.ZodObject<{
    predecessorId: z.ZodOptional<z.ZodAny>;
    priority: z.ZodOptional<z.ZodNumber>;
    receipt: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    receiptId: z.ZodOptional<z.ZodAny>;
    receiverId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    receiverId?: any;
    predecessorId?: any;
    priority?: number | undefined;
    receipt?: Record<string, any> | undefined;
    receiptId?: any;
}, {
    receiverId?: any;
    predecessorId?: any;
    priority?: number | undefined;
    receipt?: Record<string, any> | undefined;
    receiptId?: any;
}>;
export declare const RpcRequestValidationErrorKindSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const RpcSendTransactionRequestSchema: z.ZodObject<{
    signedTxBase64: z.ZodOptional<z.ZodAny>;
    waitUntil: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    signedTxBase64?: any;
    waitUntil?: any;
}, {
    signedTxBase64?: any;
    waitUntil?: any;
}>;
export declare const RpcSplitStorageInfoRequestSchema: z.ZodAny;
export declare const RpcSplitStorageInfoResponseSchema: z.ZodObject<{
    coldHeadHeight: z.ZodOptional<z.ZodNumber>;
    finalHeadHeight: z.ZodOptional<z.ZodNumber>;
    headHeight: z.ZodOptional<z.ZodNumber>;
    hotDbKind: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    coldHeadHeight?: number | undefined;
    finalHeadHeight?: number | undefined;
    headHeight?: number | undefined;
    hotDbKind?: string | undefined;
}, {
    coldHeadHeight?: number | undefined;
    finalHeadHeight?: number | undefined;
    headHeight?: number | undefined;
    hotDbKind?: string | undefined;
}>;
export declare const RpcStateChangesInBlockByTypeRequestSchema: z.ZodAny;
export declare const RpcStateChangesInBlockByTypeResponseSchema: z.ZodObject<{
    blockHash: z.ZodOptional<z.ZodAny>;
    changes: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    blockHash?: any;
    changes?: Record<string, any>[] | undefined;
}, {
    blockHash?: any;
    changes?: Record<string, any>[] | undefined;
}>;
export declare const RpcStateChangesInBlockRequestSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const RpcStateChangesInBlockResponseSchema: z.ZodObject<{
    blockHash: z.ZodOptional<z.ZodAny>;
    changes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        cause: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    }, "strip", z.ZodTypeAny, {
        cause?: Record<string, any> | undefined;
    }, {
        cause?: Record<string, any> | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    blockHash?: any;
    changes?: {
        cause?: Record<string, any> | undefined;
    }[] | undefined;
}, {
    blockHash?: any;
    changes?: {
        cause?: Record<string, any> | undefined;
    }[] | undefined;
}>;
export declare const RpcStatusRequestSchema: z.ZodAny;
export declare const RpcStatusResponseSchema: z.ZodObject<{
    chainId: z.ZodOptional<z.ZodString>;
    detailedDebugStatus: z.ZodOptional<z.ZodAny>;
    genesisHash: z.ZodOptional<z.ZodAny>;
    latestProtocolVersion: z.ZodOptional<z.ZodNumber>;
    nodeKey: z.ZodOptional<z.ZodAny>;
    nodePublicKey: z.ZodOptional<z.ZodAny>;
    protocolVersion: z.ZodOptional<z.ZodNumber>;
    rpcAddr: z.ZodOptional<z.ZodString>;
    syncInfo: z.ZodOptional<z.ZodAny>;
    uptimeSec: z.ZodOptional<z.ZodNumber>;
    validatorAccountId: z.ZodOptional<z.ZodAny>;
    validatorPublicKey: z.ZodOptional<z.ZodAny>;
    validators: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
    }, {
        accountId?: any;
    }>, "many">>;
    version: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    chainId?: string | undefined;
    genesisHash?: any;
    protocolVersion?: number | undefined;
    latestProtocolVersion?: number | undefined;
    version?: any;
    validators?: {
        accountId?: any;
    }[] | undefined;
    rpcAddr?: string | undefined;
    detailedDebugStatus?: any;
    nodeKey?: any;
    nodePublicKey?: any;
    syncInfo?: any;
    uptimeSec?: number | undefined;
    validatorAccountId?: any;
    validatorPublicKey?: any;
}, {
    chainId?: string | undefined;
    genesisHash?: any;
    protocolVersion?: number | undefined;
    latestProtocolVersion?: number | undefined;
    version?: any;
    validators?: {
        accountId?: any;
    }[] | undefined;
    rpcAddr?: string | undefined;
    detailedDebugStatus?: any;
    nodeKey?: any;
    nodePublicKey?: any;
    syncInfo?: any;
    uptimeSec?: number | undefined;
    validatorAccountId?: any;
    validatorPublicKey?: any;
}>;
export declare const RpcTransactionResponseSchema: z.ZodObject<{
    finalExecutionStatus: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>>;
}, "strip", z.ZodTypeAny, {
    finalExecutionStatus?: string | undefined;
}, {
    finalExecutionStatus?: string | undefined;
}>;
export declare const RpcTransactionStatusRequestSchema: z.ZodObject<{
    waitUntil: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    waitUntil?: any;
}, {
    waitUntil?: any;
}>;
export declare const RpcValidatorRequestSchema: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const RpcValidatorResponseSchema: z.ZodObject<{
    currentFishermen: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>, "many">>;
    currentProposals: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>, "many">>;
    currentValidators: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
        isSlashed: z.ZodOptional<z.ZodBoolean>;
        numExpectedBlocks: z.ZodOptional<z.ZodNumber>;
        numExpectedChunks: z.ZodOptional<z.ZodNumber>;
        numExpectedChunksPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        numExpectedEndorsements: z.ZodOptional<z.ZodNumber>;
        numExpectedEndorsementsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        numProducedBlocks: z.ZodOptional<z.ZodNumber>;
        numProducedChunks: z.ZodOptional<z.ZodNumber>;
        numProducedChunksPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        numProducedEndorsements: z.ZodOptional<z.ZodNumber>;
        numProducedEndorsementsPerShard: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        publicKey: z.ZodOptional<z.ZodAny>;
        shards: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        shardsEndorsed: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        stake: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
        publicKey?: any;
        isSlashed?: boolean | undefined;
        numExpectedBlocks?: number | undefined;
        numExpectedChunks?: number | undefined;
        numExpectedChunksPerShard?: number[] | undefined;
        numExpectedEndorsements?: number | undefined;
        numExpectedEndorsementsPerShard?: number[] | undefined;
        numProducedBlocks?: number | undefined;
        numProducedChunks?: number | undefined;
        numProducedChunksPerShard?: number[] | undefined;
        numProducedEndorsements?: number | undefined;
        numProducedEndorsementsPerShard?: number[] | undefined;
        shards?: any[] | undefined;
        shardsEndorsed?: any[] | undefined;
        stake?: string | undefined;
    }, {
        accountId?: any;
        publicKey?: any;
        isSlashed?: boolean | undefined;
        numExpectedBlocks?: number | undefined;
        numExpectedChunks?: number | undefined;
        numExpectedChunksPerShard?: number[] | undefined;
        numExpectedEndorsements?: number | undefined;
        numExpectedEndorsementsPerShard?: number[] | undefined;
        numProducedBlocks?: number | undefined;
        numProducedChunks?: number | undefined;
        numProducedChunksPerShard?: number[] | undefined;
        numProducedEndorsements?: number | undefined;
        numProducedEndorsementsPerShard?: number[] | undefined;
        shards?: any[] | undefined;
        shardsEndorsed?: any[] | undefined;
        stake?: string | undefined;
    }>, "many">>;
    epochHeight: z.ZodOptional<z.ZodNumber>;
    epochStartHeight: z.ZodOptional<z.ZodNumber>;
    nextFishermen: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>, "many">>;
    nextValidators: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
        publicKey: z.ZodOptional<z.ZodAny>;
        shards: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        stake: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
        publicKey?: any;
        shards?: any[] | undefined;
        stake?: string | undefined;
    }, {
        accountId?: any;
        publicKey?: any;
        shards?: any[] | undefined;
        stake?: string | undefined;
    }>, "many">>;
    prevEpochKickout: z.ZodOptional<z.ZodArray<z.ZodObject<{
        accountId: z.ZodOptional<z.ZodAny>;
        reason: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    }, "strip", z.ZodTypeAny, {
        accountId?: any;
        reason?: string | Record<string, any> | undefined;
    }, {
        accountId?: any;
        reason?: string | Record<string, any> | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    currentFishermen?: any[] | undefined;
    currentProposals?: any[] | undefined;
    currentValidators?: {
        accountId?: any;
        publicKey?: any;
        isSlashed?: boolean | undefined;
        numExpectedBlocks?: number | undefined;
        numExpectedChunks?: number | undefined;
        numExpectedChunksPerShard?: number[] | undefined;
        numExpectedEndorsements?: number | undefined;
        numExpectedEndorsementsPerShard?: number[] | undefined;
        numProducedBlocks?: number | undefined;
        numProducedChunks?: number | undefined;
        numProducedChunksPerShard?: number[] | undefined;
        numProducedEndorsements?: number | undefined;
        numProducedEndorsementsPerShard?: number[] | undefined;
        shards?: any[] | undefined;
        shardsEndorsed?: any[] | undefined;
        stake?: string | undefined;
    }[] | undefined;
    epochHeight?: number | undefined;
    epochStartHeight?: number | undefined;
    nextFishermen?: any[] | undefined;
    nextValidators?: {
        accountId?: any;
        publicKey?: any;
        shards?: any[] | undefined;
        stake?: string | undefined;
    }[] | undefined;
    prevEpochKickout?: {
        accountId?: any;
        reason?: string | Record<string, any> | undefined;
    }[] | undefined;
}, {
    currentFishermen?: any[] | undefined;
    currentProposals?: any[] | undefined;
    currentValidators?: {
        accountId?: any;
        publicKey?: any;
        isSlashed?: boolean | undefined;
        numExpectedBlocks?: number | undefined;
        numExpectedChunks?: number | undefined;
        numExpectedChunksPerShard?: number[] | undefined;
        numExpectedEndorsements?: number | undefined;
        numExpectedEndorsementsPerShard?: number[] | undefined;
        numProducedBlocks?: number | undefined;
        numProducedChunks?: number | undefined;
        numProducedChunksPerShard?: number[] | undefined;
        numProducedEndorsements?: number | undefined;
        numProducedEndorsementsPerShard?: number[] | undefined;
        shards?: any[] | undefined;
        shardsEndorsed?: any[] | undefined;
        stake?: string | undefined;
    }[] | undefined;
    epochHeight?: number | undefined;
    epochStartHeight?: number | undefined;
    nextFishermen?: any[] | undefined;
    nextValidators?: {
        accountId?: any;
        publicKey?: any;
        shards?: any[] | undefined;
        stake?: string | undefined;
    }[] | undefined;
    prevEpochKickout?: {
        accountId?: any;
        reason?: string | Record<string, any> | undefined;
    }[] | undefined;
}>;
export declare const RpcValidatorsOrderedRequestSchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    blockId?: any;
}, {
    blockId?: any;
}>;
export declare const RuntimeConfigViewSchema: z.ZodObject<{
    accountCreationConfig: z.ZodOptional<z.ZodAny>;
    congestionControlConfig: z.ZodOptional<z.ZodAny>;
    storageAmountPerByte: z.ZodOptional<z.ZodString>;
    transactionCosts: z.ZodOptional<z.ZodAny>;
    wasmConfig: z.ZodOptional<z.ZodAny>;
    witnessConfig: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    accountCreationConfig?: any;
    congestionControlConfig?: any;
    storageAmountPerByte?: string | undefined;
    transactionCosts?: any;
    wasmConfig?: any;
    witnessConfig?: any;
}, {
    accountCreationConfig?: any;
    congestionControlConfig?: any;
    storageAmountPerByte?: string | undefined;
    transactionCosts?: any;
    wasmConfig?: any;
    witnessConfig?: any;
}>;
export declare const RuntimeFeesConfigViewSchema: z.ZodObject<{
    actionCreationConfig: z.ZodOptional<z.ZodAny>;
    actionReceiptCreationConfig: z.ZodOptional<z.ZodAny>;
    burntGasReward: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    dataReceiptCreationConfig: z.ZodOptional<z.ZodAny>;
    pessimisticGasPriceInflationRatio: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    storageUsageConfig: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    actionCreationConfig?: any;
    actionReceiptCreationConfig?: any;
    burntGasReward?: number[] | undefined;
    dataReceiptCreationConfig?: any;
    pessimisticGasPriceInflationRatio?: number[] | undefined;
    storageUsageConfig?: any;
}, {
    actionCreationConfig?: any;
    actionReceiptCreationConfig?: any;
    burntGasReward?: number[] | undefined;
    dataReceiptCreationConfig?: any;
    pessimisticGasPriceInflationRatio?: number[] | undefined;
    storageUsageConfig?: any;
}>;
export declare const ShardIdSchema: z.ZodAny;
export declare const ShardLayoutSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const ShardLayoutV0Schema: z.ZodObject<{
    numShards: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    version?: number | undefined;
    numShards?: number | undefined;
}, {
    version?: number | undefined;
    numShards?: number | undefined;
}>;
export declare const ShardLayoutV1Schema: z.ZodObject<{
    boundaryAccounts: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    shardsSplitMap: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodAny, "many">, "many">>;
    toParentShardMap: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    version: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    version?: number | undefined;
    boundaryAccounts?: any[] | undefined;
    shardsSplitMap?: any[][] | undefined;
    toParentShardMap?: any[] | undefined;
}, {
    version?: number | undefined;
    boundaryAccounts?: any[] | undefined;
    shardsSplitMap?: any[][] | undefined;
    toParentShardMap?: any[] | undefined;
}>;
export declare const ShardLayoutV2Schema: z.ZodObject<{
    boundaryAccounts: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    idToIndexMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    indexToIdMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    shardIds: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    shardsParentMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    shardsSplitMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    version: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    version?: number | undefined;
    boundaryAccounts?: any[] | undefined;
    shardsSplitMap?: Record<string, any> | undefined;
    idToIndexMap?: Record<string, any> | undefined;
    indexToIdMap?: Record<string, any> | undefined;
    shardIds?: any[] | undefined;
    shardsParentMap?: Record<string, any> | undefined;
}, {
    version?: number | undefined;
    boundaryAccounts?: any[] | undefined;
    shardsSplitMap?: Record<string, any> | undefined;
    idToIndexMap?: Record<string, any> | undefined;
    indexToIdMap?: Record<string, any> | undefined;
    shardIds?: any[] | undefined;
    shardsParentMap?: Record<string, any> | undefined;
}>;
export declare const ShardUIdSchema: z.ZodObject<{
    shardId: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    shardId?: number | undefined;
    version?: number | undefined;
}, {
    shardId?: number | undefined;
    version?: number | undefined;
}>;
export declare const SignatureSchema: z.ZodAny;
export declare const SignedDelegateActionSchema: z.ZodObject<{
    delegateAction: z.ZodOptional<z.ZodObject<{
        actions: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        maxBlockHeight: z.ZodOptional<z.ZodNumber>;
        nonce: z.ZodOptional<z.ZodNumber>;
        publicKey: z.ZodOptional<z.ZodAny>;
        receiverId: z.ZodOptional<z.ZodAny>;
        senderId: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        publicKey?: any;
        nonce?: number | undefined;
        receiverId?: any;
        actions?: any[] | undefined;
        maxBlockHeight?: number | undefined;
        senderId?: any;
    }, {
        publicKey?: any;
        nonce?: number | undefined;
        receiverId?: any;
        actions?: any[] | undefined;
        maxBlockHeight?: number | undefined;
        senderId?: any;
    }>>;
    signature: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    signature?: any;
    delegateAction?: {
        publicKey?: any;
        nonce?: number | undefined;
        receiverId?: any;
        actions?: any[] | undefined;
        maxBlockHeight?: number | undefined;
        senderId?: any;
    } | undefined;
}, {
    signature?: any;
    delegateAction?: {
        publicKey?: any;
        nonce?: number | undefined;
        receiverId?: any;
        actions?: any[] | undefined;
        maxBlockHeight?: number | undefined;
        senderId?: any;
    } | undefined;
}>;
export declare const SignedTransactionSchema: z.ZodAny;
export declare const SignedTransactionViewSchema: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>, "many">>;
    hash: z.ZodOptional<z.ZodAny>;
    nonce: z.ZodOptional<z.ZodNumber>;
    priorityFee: z.ZodOptional<z.ZodNumber>;
    publicKey: z.ZodOptional<z.ZodAny>;
    receiverId: z.ZodOptional<z.ZodAny>;
    signature: z.ZodOptional<z.ZodAny>;
    signerId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    publicKey?: any;
    nonce?: number | undefined;
    hash?: any;
    signature?: any;
    receiverId?: any;
    actions?: (string | Record<string, any>)[] | undefined;
    priorityFee?: number | undefined;
    signerId?: any;
}, {
    publicKey?: any;
    nonce?: number | undefined;
    hash?: any;
    signature?: any;
    receiverId?: any;
    actions?: (string | Record<string, any>)[] | undefined;
    priorityFee?: number | undefined;
    signerId?: any;
}>;
export declare const SlashedValidatorSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
    isDoubleSign: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
    isDoubleSign?: boolean | undefined;
}, {
    accountId?: any;
    isDoubleSign?: boolean | undefined;
}>;
export declare const StakeActionSchema: z.ZodObject<{
    publicKey: z.ZodOptional<z.ZodAny>;
    stake: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    publicKey?: any;
    stake?: string | undefined;
}, {
    publicKey?: any;
    stake?: string | undefined;
}>;
export declare const StateChangeCauseViewSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const StateChangeKindViewSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const StateChangeWithCauseViewSchema: z.ZodObject<{
    cause: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    cause?: Record<string, any> | undefined;
}, {
    cause?: Record<string, any> | undefined;
}>;
export declare const StateItemSchema: z.ZodObject<{
    key: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value?: string | undefined;
    key?: string | undefined;
}, {
    value?: string | undefined;
    key?: string | undefined;
}>;
export declare const StateSyncConfigSchema: z.ZodObject<{
    concurrency: z.ZodOptional<z.ZodObject<{
        apply: z.ZodOptional<z.ZodNumber>;
        applyDuringCatchup: z.ZodOptional<z.ZodNumber>;
        peerDownloads: z.ZodOptional<z.ZodNumber>;
        perShard: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        apply?: number | undefined;
        applyDuringCatchup?: number | undefined;
        peerDownloads?: number | undefined;
        perShard?: number | undefined;
    }, {
        apply?: number | undefined;
        applyDuringCatchup?: number | undefined;
        peerDownloads?: number | undefined;
        perShard?: number | undefined;
    }>>;
    dump: z.ZodOptional<z.ZodAny>;
    sync: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    concurrency?: {
        apply?: number | undefined;
        applyDuringCatchup?: number | undefined;
        peerDownloads?: number | undefined;
        perShard?: number | undefined;
    } | undefined;
    dump?: any;
    sync?: string | Record<string, any> | undefined;
}, {
    concurrency?: {
        apply?: number | undefined;
        applyDuringCatchup?: number | undefined;
        peerDownloads?: number | undefined;
        perShard?: number | undefined;
    } | undefined;
    dump?: any;
    sync?: string | Record<string, any> | undefined;
}>;
export declare const StatusSyncInfoSchema: z.ZodObject<{
    earliestBlockHash: z.ZodOptional<z.ZodAny>;
    earliestBlockHeight: z.ZodOptional<z.ZodNumber>;
    earliestBlockTime: z.ZodOptional<z.ZodString>;
    epochId: z.ZodOptional<z.ZodAny>;
    epochStartHeight: z.ZodOptional<z.ZodNumber>;
    latestBlockHash: z.ZodOptional<z.ZodAny>;
    latestBlockHeight: z.ZodOptional<z.ZodNumber>;
    latestBlockTime: z.ZodOptional<z.ZodString>;
    latestStateRoot: z.ZodOptional<z.ZodAny>;
    syncing: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    epochId?: any;
    epochStartHeight?: number | undefined;
    earliestBlockHash?: any;
    earliestBlockHeight?: number | undefined;
    earliestBlockTime?: string | undefined;
    latestBlockHash?: any;
    latestBlockHeight?: number | undefined;
    latestBlockTime?: string | undefined;
    latestStateRoot?: any;
    syncing?: boolean | undefined;
}, {
    epochId?: any;
    epochStartHeight?: number | undefined;
    earliestBlockHash?: any;
    earliestBlockHeight?: number | undefined;
    earliestBlockTime?: string | undefined;
    latestBlockHash?: any;
    latestBlockHeight?: number | undefined;
    latestBlockTime?: string | undefined;
    latestStateRoot?: any;
    syncing?: boolean | undefined;
}>;
export declare const StorageErrorSchema: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const StorageGetModeSchema: z.ZodEnum<["FlatStorage", "Trie"]>;
export declare const StorageUsageConfigViewSchema: z.ZodObject<{
    numBytesAccount: z.ZodOptional<z.ZodNumber>;
    numExtraBytesRecord: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    numBytesAccount?: number | undefined;
    numExtraBytesRecord?: number | undefined;
}, {
    numBytesAccount?: number | undefined;
    numExtraBytesRecord?: number | undefined;
}>;
export declare const SyncCheckpointSchema: z.ZodEnum<["genesis", "earliest_available"]>;
export declare const SyncConcurrencySchema: z.ZodObject<{
    apply: z.ZodOptional<z.ZodNumber>;
    applyDuringCatchup: z.ZodOptional<z.ZodNumber>;
    peerDownloads: z.ZodOptional<z.ZodNumber>;
    perShard: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    apply?: number | undefined;
    applyDuringCatchup?: number | undefined;
    peerDownloads?: number | undefined;
    perShard?: number | undefined;
}, {
    apply?: number | undefined;
    applyDuringCatchup?: number | undefined;
    peerDownloads?: number | undefined;
    perShard?: number | undefined;
}>;
export declare const SyncConfigSchema: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const Tier1ProxyViewSchema: z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    peerId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    peerId?: any;
    addr?: string | undefined;
}, {
    peerId?: any;
    addr?: string | undefined;
}>;
export declare const TrackedShardsConfigSchema: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const TransferActionSchema: z.ZodObject<{
    deposit: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    deposit?: string | undefined;
}, {
    deposit?: string | undefined;
}>;
export declare const TxExecutionErrorSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const TxExecutionStatusSchema: z.ZodUnion<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>;
export declare const UseGlobalContractActionSchema: z.ZodObject<{
    contractIdentifier: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    contractIdentifier?: Record<string, any> | undefined;
}, {
    contractIdentifier?: Record<string, any> | undefined;
}>;
export declare const VMConfigViewSchema: z.ZodObject<{
    discardCustomSections: z.ZodOptional<z.ZodBoolean>;
    ethImplicitAccounts: z.ZodOptional<z.ZodBoolean>;
    extCosts: z.ZodOptional<z.ZodAny>;
    fixContractLoadingCost: z.ZodOptional<z.ZodBoolean>;
    globalContractHostFns: z.ZodOptional<z.ZodBoolean>;
    growMemCost: z.ZodOptional<z.ZodNumber>;
    implicitAccountCreation: z.ZodOptional<z.ZodBoolean>;
    limitConfig: z.ZodOptional<z.ZodAny>;
    reftypesBulkMemory: z.ZodOptional<z.ZodBoolean>;
    regularOpCost: z.ZodOptional<z.ZodNumber>;
    saturatingFloatToInt: z.ZodOptional<z.ZodBoolean>;
    storageGetMode: z.ZodOptional<z.ZodAny>;
    vmKind: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    discardCustomSections?: boolean | undefined;
    ethImplicitAccounts?: boolean | undefined;
    extCosts?: any;
    fixContractLoadingCost?: boolean | undefined;
    globalContractHostFns?: boolean | undefined;
    growMemCost?: number | undefined;
    implicitAccountCreation?: boolean | undefined;
    limitConfig?: any;
    reftypesBulkMemory?: boolean | undefined;
    regularOpCost?: number | undefined;
    saturatingFloatToInt?: boolean | undefined;
    storageGetMode?: any;
    vmKind?: any;
}, {
    discardCustomSections?: boolean | undefined;
    ethImplicitAccounts?: boolean | undefined;
    extCosts?: any;
    fixContractLoadingCost?: boolean | undefined;
    globalContractHostFns?: boolean | undefined;
    growMemCost?: number | undefined;
    implicitAccountCreation?: boolean | undefined;
    limitConfig?: any;
    reftypesBulkMemory?: boolean | undefined;
    regularOpCost?: number | undefined;
    saturatingFloatToInt?: boolean | undefined;
    storageGetMode?: any;
    vmKind?: any;
}>;
export declare const VMKindSchema: z.ZodUnion<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>;
export declare const ValidatorInfoSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
}, {
    accountId?: any;
}>;
export declare const ValidatorKickoutReasonSchema: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>;
export declare const ValidatorKickoutViewSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
    reason: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
    reason?: string | Record<string, any> | undefined;
}, {
    accountId?: any;
    reason?: string | Record<string, any> | undefined;
}>;
export declare const ValidatorStakeViewSchema: z.ZodUnion<readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>;
export declare const ValidatorStakeViewV1Schema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodAny>;
    publicKey: z.ZodOptional<z.ZodAny>;
    stake: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountId?: any;
    publicKey?: any;
    stake?: string | undefined;
}, {
    accountId?: any;
    publicKey?: any;
    stake?: string | undefined;
}>;
export declare const VersionSchema: z.ZodObject<{
    build: z.ZodOptional<z.ZodString>;
    commit: z.ZodOptional<z.ZodString>;
    rustcVersion: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    version?: string | undefined;
    build?: string | undefined;
    commit?: string | undefined;
    rustcVersion?: string | undefined;
}, {
    version?: string | undefined;
    build?: string | undefined;
    commit?: string | undefined;
    rustcVersion?: string | undefined;
}>;
export declare const ViewStateResultSchema: z.ZodObject<{
    proof: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    values: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: string | undefined;
        key?: string | undefined;
    }, {
        value?: string | undefined;
        key?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    values?: {
        value?: string | undefined;
        key?: string | undefined;
    }[] | undefined;
    proof?: string[] | undefined;
}, {
    values?: {
        value?: string | undefined;
        key?: string | undefined;
    }[] | undefined;
    proof?: string[] | undefined;
}>;
export declare const WasmTrapSchema: z.ZodUnion<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>;
export declare const WitnessConfigViewSchema: z.ZodObject<{
    combinedTransactionsSizeLimit: z.ZodOptional<z.ZodNumber>;
    mainStorageProofSizeSoftLimit: z.ZodOptional<z.ZodNumber>;
    newTransactionsValidationStateSizeSoftLimit: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    combinedTransactionsSizeLimit?: number | undefined;
    mainStorageProofSizeSoftLimit?: number | undefined;
    newTransactionsValidationStateSizeSoftLimit?: number | undefined;
}, {
    combinedTransactionsSizeLimit?: number | undefined;
    mainStorageProofSizeSoftLimit?: number | undefined;
    newTransactionsValidationStateSizeSoftLimit?: number | undefined;
}>;
