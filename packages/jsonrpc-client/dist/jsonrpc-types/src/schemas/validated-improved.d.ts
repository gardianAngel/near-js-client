/**
 * Validated Zod Schemas for NEAR Protocol JSON-RPC
 *
 * These schemas are generated from real API responses and provide proper validation
 * instead of generic z.record(z.unknown()) patterns.
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
export declare const TimestampSchema: z.ZodNumber;
export declare const AccountViewSchema: z.ZodObject<{
    amount: z.ZodString;
    codeHash: z.ZodOptional<z.ZodString>;
    globalContractAccountId: z.ZodOptional<z.ZodString>;
    globalContractHash: z.ZodOptional<z.ZodString>;
    locked: z.ZodString;
    storagePaidAt: z.ZodOptional<z.ZodNumber>;
    storageUsage: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    amount: string;
    locked: string;
    codeHash?: string | undefined;
    globalContractAccountId?: string | undefined;
    globalContractHash?: string | undefined;
    storagePaidAt?: number | undefined;
    storageUsage?: number | undefined;
}, {
    amount: string;
    locked: string;
    codeHash?: string | undefined;
    globalContractAccountId?: string | undefined;
    globalContractHash?: string | undefined;
    storagePaidAt?: number | undefined;
    storageUsage?: number | undefined;
}>;
export declare const JsonRpcRequestSchema: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    method: z.ZodString;
    params: z.ZodAny;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    method: string;
    jsonrpc: "2.0";
    id: string | number;
    params?: any;
}, {
    method: string;
    jsonrpc: "2.0";
    id: string | number;
    params?: any;
}>;
export declare const JsonRpcErrorSchema: z.ZodObject<{
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
    id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    jsonrpc: "2.0";
    id: string | number;
    result?: any;
    error?: {
        code: number;
        message: string;
        data?: any;
    } | undefined;
}, {
    jsonrpc: "2.0";
    id: string | number;
    result?: any;
    error?: {
        code: number;
        message: string;
        data?: any;
    } | undefined;
}>;
export declare const StatusResponseSchema: z.ZodObject<{
    chainId: z.ZodString;
    genesisHash: z.ZodString;
    latestProtocolVersion: z.ZodNumber;
    nodeKey: z.ZodOptional<z.ZodString>;
    nodePublicKey: z.ZodString;
    protocolVersion: z.ZodNumber;
    rpcAddr: z.ZodString;
    syncInfo: z.ZodObject<{
        earliestBlockHash: z.ZodString;
        earliestBlockHeight: z.ZodNumber;
        earliestBlockTime: z.ZodString;
        epochId: z.ZodString;
        epochStartHeight: z.ZodNumber;
        latestBlockHash: z.ZodString;
        latestBlockHeight: z.ZodNumber;
        latestBlockTime: z.ZodString;
        latestStateRoot: z.ZodString;
        syncing: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        earliestBlockHash: string;
        earliestBlockHeight: number;
        earliestBlockTime: string;
        epochId: string;
        epochStartHeight: number;
        latestBlockHash: string;
        latestBlockHeight: number;
        latestBlockTime: string;
        latestStateRoot: string;
        syncing: boolean;
    }, {
        earliestBlockHash: string;
        earliestBlockHeight: number;
        earliestBlockTime: string;
        epochId: string;
        epochStartHeight: number;
        latestBlockHash: string;
        latestBlockHeight: number;
        latestBlockTime: string;
        latestStateRoot: string;
        syncing: boolean;
    }>;
    uptimeSec: z.ZodNumber;
    validatorAccountId: z.ZodOptional<z.ZodString>;
    validatorPublicKey: z.ZodOptional<z.ZodString>;
    validators: z.ZodArray<z.ZodObject<{
        accountId: z.ZodString;
        publicKey: z.ZodString;
        stake: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        accountId: string;
        publicKey: string;
        stake: string;
    }, {
        accountId: string;
        publicKey: string;
        stake: string;
    }>, "many">;
    version: z.ZodObject<{
        build: z.ZodString;
        commit: z.ZodString;
        rustcVersion: z.ZodString;
        version: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        version: string;
        build: string;
        commit: string;
        rustcVersion: string;
    }, {
        version: string;
        build: string;
        commit: string;
        rustcVersion: string;
    }>;
}, "strip", z.ZodTypeAny, {
    validators: {
        accountId: string;
        publicKey: string;
        stake: string;
    }[];
    chainId: string;
    genesisHash: string;
    latestProtocolVersion: number;
    nodePublicKey: string;
    protocolVersion: number;
    rpcAddr: string;
    syncInfo: {
        earliestBlockHash: string;
        earliestBlockHeight: number;
        earliestBlockTime: string;
        epochId: string;
        epochStartHeight: number;
        latestBlockHash: string;
        latestBlockHeight: number;
        latestBlockTime: string;
        latestStateRoot: string;
        syncing: boolean;
    };
    uptimeSec: number;
    version: {
        version: string;
        build: string;
        commit: string;
        rustcVersion: string;
    };
    nodeKey?: string | undefined;
    validatorAccountId?: string | undefined;
    validatorPublicKey?: string | undefined;
}, {
    validators: {
        accountId: string;
        publicKey: string;
        stake: string;
    }[];
    chainId: string;
    genesisHash: string;
    latestProtocolVersion: number;
    nodePublicKey: string;
    protocolVersion: number;
    rpcAddr: string;
    syncInfo: {
        earliestBlockHash: string;
        earliestBlockHeight: number;
        earliestBlockTime: string;
        epochId: string;
        epochStartHeight: number;
        latestBlockHash: string;
        latestBlockHeight: number;
        latestBlockTime: string;
        latestStateRoot: string;
        syncing: boolean;
    };
    uptimeSec: number;
    version: {
        version: string;
        build: string;
        commit: string;
        rustcVersion: string;
    };
    nodeKey?: string | undefined;
    validatorAccountId?: string | undefined;
    validatorPublicKey?: string | undefined;
}>;
export declare const BlockResponseSchema: z.ZodObject<{
    author: z.ZodString;
    chunks: z.ZodArray<z.ZodObject<{
        balanceBurnt: z.ZodString;
        chunkHash: z.ZodString;
        encodedLength: z.ZodNumber;
        encodedMerkleRoot: z.ZodString;
        gasLimit: z.ZodNumber;
        gasUsed: z.ZodNumber;
        heightCreated: z.ZodNumber;
        heightIncluded: z.ZodNumber;
        outcomeRoot: z.ZodString;
        outgoingReceiptsRoot: z.ZodString;
        prevBlockHash: z.ZodString;
        prevStateRoot: z.ZodString;
        rentPaid: z.ZodString;
        shardId: z.ZodNumber;
        signature: z.ZodString;
        txRoot: z.ZodString;
        validatorProposals: z.ZodArray<z.ZodAny, "many">;
        validatorReward: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        balanceBurnt: string;
        chunkHash: string;
        encodedLength: number;
        encodedMerkleRoot: string;
        gasLimit: number;
        gasUsed: number;
        heightCreated: number;
        heightIncluded: number;
        outcomeRoot: string;
        outgoingReceiptsRoot: string;
        prevBlockHash: string;
        prevStateRoot: string;
        rentPaid: string;
        shardId: number;
        signature: string;
        txRoot: string;
        validatorProposals: any[];
        validatorReward: string;
    }, {
        balanceBurnt: string;
        chunkHash: string;
        encodedLength: number;
        encodedMerkleRoot: string;
        gasLimit: number;
        gasUsed: number;
        heightCreated: number;
        heightIncluded: number;
        outcomeRoot: string;
        outgoingReceiptsRoot: string;
        prevBlockHash: string;
        prevStateRoot: string;
        rentPaid: string;
        shardId: number;
        signature: string;
        txRoot: string;
        validatorProposals: any[];
        validatorReward: string;
    }>, "many">;
    header: z.ZodObject<{
        approvals: z.ZodArray<z.ZodNullable<z.ZodString>, "many">;
        blockBodyHash: z.ZodString;
        blockMerkleRoot: z.ZodString;
        blockOrdinal: z.ZodNumber;
        challengesResult: z.ZodArray<z.ZodAny, "many">;
        challengesRoot: z.ZodString;
        chunkEndorsements: z.ZodArray<z.ZodAny, "many">;
        chunkHeadersRoot: z.ZodString;
        chunkMask: z.ZodArray<z.ZodBoolean, "many">;
        chunkReceiptsRoot: z.ZodString;
        chunkTxRoot: z.ZodString;
        chunksIncluded: z.ZodNumber;
        epochId: z.ZodString;
        epochSyncDataHash: z.ZodOptional<z.ZodString>;
        gasPrice: z.ZodString;
        hash: z.ZodString;
        height: z.ZodNumber;
        lastDsFinalBlock: z.ZodString;
        lastFinalBlock: z.ZodString;
        latestProtocolVersion: z.ZodNumber;
        nextBpHash: z.ZodString;
        nextEpochId: z.ZodString;
        outcomeRoot: z.ZodString;
        prevHash: z.ZodString;
        prevHeight: z.ZodNumber;
        prevStateRoot: z.ZodString;
        randomValue: z.ZodString;
        rentPaid: z.ZodString;
        signature: z.ZodString;
        timestamp: z.ZodNumber;
        timestampNanosec: z.ZodString;
        totalSupply: z.ZodString;
        validatorProposals: z.ZodArray<z.ZodAny, "many">;
        validatorReward: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        latestProtocolVersion: number;
        epochId: string;
        outcomeRoot: string;
        prevStateRoot: string;
        rentPaid: string;
        signature: string;
        validatorProposals: any[];
        validatorReward: string;
        approvals: (string | null)[];
        blockBodyHash: string;
        blockMerkleRoot: string;
        blockOrdinal: number;
        challengesResult: any[];
        challengesRoot: string;
        chunkEndorsements: any[];
        chunkHeadersRoot: string;
        chunkMask: boolean[];
        chunkReceiptsRoot: string;
        chunkTxRoot: string;
        chunksIncluded: number;
        gasPrice: string;
        hash: string;
        height: number;
        lastDsFinalBlock: string;
        lastFinalBlock: string;
        nextBpHash: string;
        nextEpochId: string;
        prevHash: string;
        prevHeight: number;
        randomValue: string;
        timestamp: number;
        timestampNanosec: string;
        totalSupply: string;
        epochSyncDataHash?: string | undefined;
    }, {
        latestProtocolVersion: number;
        epochId: string;
        outcomeRoot: string;
        prevStateRoot: string;
        rentPaid: string;
        signature: string;
        validatorProposals: any[];
        validatorReward: string;
        approvals: (string | null)[];
        blockBodyHash: string;
        blockMerkleRoot: string;
        blockOrdinal: number;
        challengesResult: any[];
        challengesRoot: string;
        chunkEndorsements: any[];
        chunkHeadersRoot: string;
        chunkMask: boolean[];
        chunkReceiptsRoot: string;
        chunkTxRoot: string;
        chunksIncluded: number;
        gasPrice: string;
        hash: string;
        height: number;
        lastDsFinalBlock: string;
        lastFinalBlock: string;
        nextBpHash: string;
        nextEpochId: string;
        prevHash: string;
        prevHeight: number;
        randomValue: string;
        timestamp: number;
        timestampNanosec: string;
        totalSupply: string;
        epochSyncDataHash?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    author: string;
    chunks: {
        balanceBurnt: string;
        chunkHash: string;
        encodedLength: number;
        encodedMerkleRoot: string;
        gasLimit: number;
        gasUsed: number;
        heightCreated: number;
        heightIncluded: number;
        outcomeRoot: string;
        outgoingReceiptsRoot: string;
        prevBlockHash: string;
        prevStateRoot: string;
        rentPaid: string;
        shardId: number;
        signature: string;
        txRoot: string;
        validatorProposals: any[];
        validatorReward: string;
    }[];
    header: {
        latestProtocolVersion: number;
        epochId: string;
        outcomeRoot: string;
        prevStateRoot: string;
        rentPaid: string;
        signature: string;
        validatorProposals: any[];
        validatorReward: string;
        approvals: (string | null)[];
        blockBodyHash: string;
        blockMerkleRoot: string;
        blockOrdinal: number;
        challengesResult: any[];
        challengesRoot: string;
        chunkEndorsements: any[];
        chunkHeadersRoot: string;
        chunkMask: boolean[];
        chunkReceiptsRoot: string;
        chunkTxRoot: string;
        chunksIncluded: number;
        gasPrice: string;
        hash: string;
        height: number;
        lastDsFinalBlock: string;
        lastFinalBlock: string;
        nextBpHash: string;
        nextEpochId: string;
        prevHash: string;
        prevHeight: number;
        randomValue: string;
        timestamp: number;
        timestampNanosec: string;
        totalSupply: string;
        epochSyncDataHash?: string | undefined;
    };
}, {
    author: string;
    chunks: {
        balanceBurnt: string;
        chunkHash: string;
        encodedLength: number;
        encodedMerkleRoot: string;
        gasLimit: number;
        gasUsed: number;
        heightCreated: number;
        heightIncluded: number;
        outcomeRoot: string;
        outgoingReceiptsRoot: string;
        prevBlockHash: string;
        prevStateRoot: string;
        rentPaid: string;
        shardId: number;
        signature: string;
        txRoot: string;
        validatorProposals: any[];
        validatorReward: string;
    }[];
    header: {
        latestProtocolVersion: number;
        epochId: string;
        outcomeRoot: string;
        prevStateRoot: string;
        rentPaid: string;
        signature: string;
        validatorProposals: any[];
        validatorReward: string;
        approvals: (string | null)[];
        blockBodyHash: string;
        blockMerkleRoot: string;
        blockOrdinal: number;
        challengesResult: any[];
        challengesRoot: string;
        chunkEndorsements: any[];
        chunkHeadersRoot: string;
        chunkMask: boolean[];
        chunkReceiptsRoot: string;
        chunkTxRoot: string;
        chunksIncluded: number;
        gasPrice: string;
        hash: string;
        height: number;
        lastDsFinalBlock: string;
        lastFinalBlock: string;
        nextBpHash: string;
        nextEpochId: string;
        prevHash: string;
        prevHeight: number;
        randomValue: string;
        timestamp: number;
        timestampNanosec: string;
        totalSupply: string;
        epochSyncDataHash?: string | undefined;
    };
}>;
export declare const GasPriceResponseSchema: z.ZodObject<{
    gasPrice: z.ZodString;
}, "strip", z.ZodTypeAny, {
    gasPrice: string;
}, {
    gasPrice: string;
}>;
export declare const NetworkInfoResponseSchema: z.ZodObject<{
    activePeers: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        addr: z.ZodString;
        accountId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        addr: string;
        accountId?: string | undefined;
    }, {
        id: string;
        addr: string;
        accountId?: string | undefined;
    }>, "many">;
    knownProducers: z.ZodArray<z.ZodObject<{
        accountId: z.ZodString;
        addr: z.ZodOptional<z.ZodString>;
        peerId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        accountId: string;
        peerId: string;
        addr?: string | undefined;
    }, {
        accountId: string;
        peerId: string;
        addr?: string | undefined;
    }>, "many">;
    numActivePeers: z.ZodNumber;
    peerMaxCount: z.ZodNumber;
    sentBytesPerSec: z.ZodNumber;
    receivedBytesPerSec: z.ZodNumber;
    tier1Connections: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        addr: z.ZodString;
        accountId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        addr: string;
        accountId?: string | undefined;
    }, {
        id: string;
        addr: string;
        accountId?: string | undefined;
    }>, "many">;
    tier1AccountsKeys: z.ZodArray<z.ZodString, "many">;
    tier1AccountsData: z.ZodArray<z.ZodObject<{
        accountId: z.ZodString;
        publicKey: z.ZodString;
        epoch: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        accountId: string;
        publicKey: string;
        epoch: number;
    }, {
        accountId: string;
        publicKey: string;
        epoch: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    activePeers: {
        id: string;
        addr: string;
        accountId?: string | undefined;
    }[];
    knownProducers: {
        accountId: string;
        peerId: string;
        addr?: string | undefined;
    }[];
    numActivePeers: number;
    peerMaxCount: number;
    sentBytesPerSec: number;
    receivedBytesPerSec: number;
    tier1Connections: {
        id: string;
        addr: string;
        accountId?: string | undefined;
    }[];
    tier1AccountsKeys: string[];
    tier1AccountsData: {
        accountId: string;
        publicKey: string;
        epoch: number;
    }[];
}, {
    activePeers: {
        id: string;
        addr: string;
        accountId?: string | undefined;
    }[];
    knownProducers: {
        accountId: string;
        peerId: string;
        addr?: string | undefined;
    }[];
    numActivePeers: number;
    peerMaxCount: number;
    sentBytesPerSec: number;
    receivedBytesPerSec: number;
    tier1Connections: {
        id: string;
        addr: string;
        accountId?: string | undefined;
    }[];
    tier1AccountsKeys: string[];
    tier1AccountsData: {
        accountId: string;
        publicKey: string;
        epoch: number;
    }[];
}>;
export declare const QueryResponseSchema: z.ZodObject<{
    blockHash: z.ZodString;
    blockHeight: z.ZodNumber;
    values: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    blockHash: string;
    blockHeight: number;
    values?: any;
}, {
    blockHash: string;
    blockHeight: number;
    values?: any;
}>;
export declare const ViewAccountResponseSchema: z.ZodObject<{
    accountId: z.ZodString;
    amount: z.ZodString;
    codeHash: z.ZodString;
    locked: z.ZodString;
    storagePaidAt: z.ZodNumber;
    storageUsage: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    amount: string;
    codeHash: string;
    locked: string;
    storagePaidAt: number;
    storageUsage: number;
    accountId: string;
}, {
    amount: string;
    codeHash: string;
    locked: string;
    storagePaidAt: number;
    storageUsage: number;
    accountId: string;
}>;
export declare const AccessKeyListResponseSchema: z.ZodObject<{
    keys: z.ZodArray<z.ZodObject<{
        publicKey: z.ZodString;
        accessKey: z.ZodObject<{
            nonce: z.ZodNumber;
            permission: z.ZodUnion<[z.ZodLiteral<"FullAccess">, z.ZodObject<{
                functionCall: z.ZodObject<{
                    allowance: z.ZodOptional<z.ZodString>;
                    receiverId: z.ZodString;
                    methodNames: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                }, {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                functionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            }, {
                functionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            }>]>;
        }, "strip", z.ZodTypeAny, {
            nonce: number;
            permission: "FullAccess" | {
                functionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        }, {
            nonce: number;
            permission: "FullAccess" | {
                functionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        publicKey: string;
        accessKey: {
            nonce: number;
            permission: "FullAccess" | {
                functionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }, {
        publicKey: string;
        accessKey: {
            nonce: number;
            permission: "FullAccess" | {
                functionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    keys: {
        publicKey: string;
        accessKey: {
            nonce: number;
            permission: "FullAccess" | {
                functionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }[];
}, {
    keys: {
        publicKey: string;
        accessKey: {
            nonce: number;
            permission: "FullAccess" | {
                functionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }[];
}>;
export declare const FinalitySchema: z.ZodEnum<["optimistic", "near-final", "final"]>;
export declare const ValidatedSchemas: {
    AccountIdSchema: z.ZodString;
    PublicKeySchema: z.ZodString;
    CryptoHashSchema: z.ZodString;
    BlockHeightSchema: z.ZodNumber;
    BlockHashSchema: z.ZodString;
    ShardIdSchema: z.ZodNumber;
    GasSchema: z.ZodString;
    BalanceSchema: z.ZodString;
    NonceSchema: z.ZodNumber;
    TimestampSchema: z.ZodNumber;
    AccountViewSchema: z.ZodObject<{
        amount: z.ZodString;
        codeHash: z.ZodOptional<z.ZodString>;
        globalContractAccountId: z.ZodOptional<z.ZodString>;
        globalContractHash: z.ZodOptional<z.ZodString>;
        locked: z.ZodString;
        storagePaidAt: z.ZodOptional<z.ZodNumber>;
        storageUsage: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        amount: string;
        locked: string;
        codeHash?: string | undefined;
        globalContractAccountId?: string | undefined;
        globalContractHash?: string | undefined;
        storagePaidAt?: number | undefined;
        storageUsage?: number | undefined;
    }, {
        amount: string;
        locked: string;
        codeHash?: string | undefined;
        globalContractAccountId?: string | undefined;
        globalContractHash?: string | undefined;
        storagePaidAt?: number | undefined;
        storageUsage?: number | undefined;
    }>;
    JsonRpcRequestSchema: z.ZodObject<{
        jsonrpc: z.ZodLiteral<"2.0">;
        method: z.ZodString;
        params: z.ZodAny;
        id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    }, "strip", z.ZodTypeAny, {
        method: string;
        jsonrpc: "2.0";
        id: string | number;
        params?: any;
    }, {
        method: string;
        jsonrpc: "2.0";
        id: string | number;
        params?: any;
    }>;
    JsonRpcErrorSchema: z.ZodObject<{
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
    }>;
    JsonRpcResponseSchema: z.ZodObject<{
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
        id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    }, "strip", z.ZodTypeAny, {
        jsonrpc: "2.0";
        id: string | number;
        result?: any;
        error?: {
            code: number;
            message: string;
            data?: any;
        } | undefined;
    }, {
        jsonrpc: "2.0";
        id: string | number;
        result?: any;
        error?: {
            code: number;
            message: string;
            data?: any;
        } | undefined;
    }>;
    StatusResponseSchema: z.ZodObject<{
        chainId: z.ZodString;
        genesisHash: z.ZodString;
        latestProtocolVersion: z.ZodNumber;
        nodeKey: z.ZodOptional<z.ZodString>;
        nodePublicKey: z.ZodString;
        protocolVersion: z.ZodNumber;
        rpcAddr: z.ZodString;
        syncInfo: z.ZodObject<{
            earliestBlockHash: z.ZodString;
            earliestBlockHeight: z.ZodNumber;
            earliestBlockTime: z.ZodString;
            epochId: z.ZodString;
            epochStartHeight: z.ZodNumber;
            latestBlockHash: z.ZodString;
            latestBlockHeight: z.ZodNumber;
            latestBlockTime: z.ZodString;
            latestStateRoot: z.ZodString;
            syncing: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            earliestBlockHash: string;
            earliestBlockHeight: number;
            earliestBlockTime: string;
            epochId: string;
            epochStartHeight: number;
            latestBlockHash: string;
            latestBlockHeight: number;
            latestBlockTime: string;
            latestStateRoot: string;
            syncing: boolean;
        }, {
            earliestBlockHash: string;
            earliestBlockHeight: number;
            earliestBlockTime: string;
            epochId: string;
            epochStartHeight: number;
            latestBlockHash: string;
            latestBlockHeight: number;
            latestBlockTime: string;
            latestStateRoot: string;
            syncing: boolean;
        }>;
        uptimeSec: z.ZodNumber;
        validatorAccountId: z.ZodOptional<z.ZodString>;
        validatorPublicKey: z.ZodOptional<z.ZodString>;
        validators: z.ZodArray<z.ZodObject<{
            accountId: z.ZodString;
            publicKey: z.ZodString;
            stake: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            accountId: string;
            publicKey: string;
            stake: string;
        }, {
            accountId: string;
            publicKey: string;
            stake: string;
        }>, "many">;
        version: z.ZodObject<{
            build: z.ZodString;
            commit: z.ZodString;
            rustcVersion: z.ZodString;
            version: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            version: string;
            build: string;
            commit: string;
            rustcVersion: string;
        }, {
            version: string;
            build: string;
            commit: string;
            rustcVersion: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        validators: {
            accountId: string;
            publicKey: string;
            stake: string;
        }[];
        chainId: string;
        genesisHash: string;
        latestProtocolVersion: number;
        nodePublicKey: string;
        protocolVersion: number;
        rpcAddr: string;
        syncInfo: {
            earliestBlockHash: string;
            earliestBlockHeight: number;
            earliestBlockTime: string;
            epochId: string;
            epochStartHeight: number;
            latestBlockHash: string;
            latestBlockHeight: number;
            latestBlockTime: string;
            latestStateRoot: string;
            syncing: boolean;
        };
        uptimeSec: number;
        version: {
            version: string;
            build: string;
            commit: string;
            rustcVersion: string;
        };
        nodeKey?: string | undefined;
        validatorAccountId?: string | undefined;
        validatorPublicKey?: string | undefined;
    }, {
        validators: {
            accountId: string;
            publicKey: string;
            stake: string;
        }[];
        chainId: string;
        genesisHash: string;
        latestProtocolVersion: number;
        nodePublicKey: string;
        protocolVersion: number;
        rpcAddr: string;
        syncInfo: {
            earliestBlockHash: string;
            earliestBlockHeight: number;
            earliestBlockTime: string;
            epochId: string;
            epochStartHeight: number;
            latestBlockHash: string;
            latestBlockHeight: number;
            latestBlockTime: string;
            latestStateRoot: string;
            syncing: boolean;
        };
        uptimeSec: number;
        version: {
            version: string;
            build: string;
            commit: string;
            rustcVersion: string;
        };
        nodeKey?: string | undefined;
        validatorAccountId?: string | undefined;
        validatorPublicKey?: string | undefined;
    }>;
    BlockResponseSchema: z.ZodObject<{
        author: z.ZodString;
        chunks: z.ZodArray<z.ZodObject<{
            balanceBurnt: z.ZodString;
            chunkHash: z.ZodString;
            encodedLength: z.ZodNumber;
            encodedMerkleRoot: z.ZodString;
            gasLimit: z.ZodNumber;
            gasUsed: z.ZodNumber;
            heightCreated: z.ZodNumber;
            heightIncluded: z.ZodNumber;
            outcomeRoot: z.ZodString;
            outgoingReceiptsRoot: z.ZodString;
            prevBlockHash: z.ZodString;
            prevStateRoot: z.ZodString;
            rentPaid: z.ZodString;
            shardId: z.ZodNumber;
            signature: z.ZodString;
            txRoot: z.ZodString;
            validatorProposals: z.ZodArray<z.ZodAny, "many">;
            validatorReward: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            balanceBurnt: string;
            chunkHash: string;
            encodedLength: number;
            encodedMerkleRoot: string;
            gasLimit: number;
            gasUsed: number;
            heightCreated: number;
            heightIncluded: number;
            outcomeRoot: string;
            outgoingReceiptsRoot: string;
            prevBlockHash: string;
            prevStateRoot: string;
            rentPaid: string;
            shardId: number;
            signature: string;
            txRoot: string;
            validatorProposals: any[];
            validatorReward: string;
        }, {
            balanceBurnt: string;
            chunkHash: string;
            encodedLength: number;
            encodedMerkleRoot: string;
            gasLimit: number;
            gasUsed: number;
            heightCreated: number;
            heightIncluded: number;
            outcomeRoot: string;
            outgoingReceiptsRoot: string;
            prevBlockHash: string;
            prevStateRoot: string;
            rentPaid: string;
            shardId: number;
            signature: string;
            txRoot: string;
            validatorProposals: any[];
            validatorReward: string;
        }>, "many">;
        header: z.ZodObject<{
            approvals: z.ZodArray<z.ZodNullable<z.ZodString>, "many">;
            blockBodyHash: z.ZodString;
            blockMerkleRoot: z.ZodString;
            blockOrdinal: z.ZodNumber;
            challengesResult: z.ZodArray<z.ZodAny, "many">;
            challengesRoot: z.ZodString;
            chunkEndorsements: z.ZodArray<z.ZodAny, "many">;
            chunkHeadersRoot: z.ZodString;
            chunkMask: z.ZodArray<z.ZodBoolean, "many">;
            chunkReceiptsRoot: z.ZodString;
            chunkTxRoot: z.ZodString;
            chunksIncluded: z.ZodNumber;
            epochId: z.ZodString;
            epochSyncDataHash: z.ZodOptional<z.ZodString>;
            gasPrice: z.ZodString;
            hash: z.ZodString;
            height: z.ZodNumber;
            lastDsFinalBlock: z.ZodString;
            lastFinalBlock: z.ZodString;
            latestProtocolVersion: z.ZodNumber;
            nextBpHash: z.ZodString;
            nextEpochId: z.ZodString;
            outcomeRoot: z.ZodString;
            prevHash: z.ZodString;
            prevHeight: z.ZodNumber;
            prevStateRoot: z.ZodString;
            randomValue: z.ZodString;
            rentPaid: z.ZodString;
            signature: z.ZodString;
            timestamp: z.ZodNumber;
            timestampNanosec: z.ZodString;
            totalSupply: z.ZodString;
            validatorProposals: z.ZodArray<z.ZodAny, "many">;
            validatorReward: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            latestProtocolVersion: number;
            epochId: string;
            outcomeRoot: string;
            prevStateRoot: string;
            rentPaid: string;
            signature: string;
            validatorProposals: any[];
            validatorReward: string;
            approvals: (string | null)[];
            blockBodyHash: string;
            blockMerkleRoot: string;
            blockOrdinal: number;
            challengesResult: any[];
            challengesRoot: string;
            chunkEndorsements: any[];
            chunkHeadersRoot: string;
            chunkMask: boolean[];
            chunkReceiptsRoot: string;
            chunkTxRoot: string;
            chunksIncluded: number;
            gasPrice: string;
            hash: string;
            height: number;
            lastDsFinalBlock: string;
            lastFinalBlock: string;
            nextBpHash: string;
            nextEpochId: string;
            prevHash: string;
            prevHeight: number;
            randomValue: string;
            timestamp: number;
            timestampNanosec: string;
            totalSupply: string;
            epochSyncDataHash?: string | undefined;
        }, {
            latestProtocolVersion: number;
            epochId: string;
            outcomeRoot: string;
            prevStateRoot: string;
            rentPaid: string;
            signature: string;
            validatorProposals: any[];
            validatorReward: string;
            approvals: (string | null)[];
            blockBodyHash: string;
            blockMerkleRoot: string;
            blockOrdinal: number;
            challengesResult: any[];
            challengesRoot: string;
            chunkEndorsements: any[];
            chunkHeadersRoot: string;
            chunkMask: boolean[];
            chunkReceiptsRoot: string;
            chunkTxRoot: string;
            chunksIncluded: number;
            gasPrice: string;
            hash: string;
            height: number;
            lastDsFinalBlock: string;
            lastFinalBlock: string;
            nextBpHash: string;
            nextEpochId: string;
            prevHash: string;
            prevHeight: number;
            randomValue: string;
            timestamp: number;
            timestampNanosec: string;
            totalSupply: string;
            epochSyncDataHash?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        author: string;
        chunks: {
            balanceBurnt: string;
            chunkHash: string;
            encodedLength: number;
            encodedMerkleRoot: string;
            gasLimit: number;
            gasUsed: number;
            heightCreated: number;
            heightIncluded: number;
            outcomeRoot: string;
            outgoingReceiptsRoot: string;
            prevBlockHash: string;
            prevStateRoot: string;
            rentPaid: string;
            shardId: number;
            signature: string;
            txRoot: string;
            validatorProposals: any[];
            validatorReward: string;
        }[];
        header: {
            latestProtocolVersion: number;
            epochId: string;
            outcomeRoot: string;
            prevStateRoot: string;
            rentPaid: string;
            signature: string;
            validatorProposals: any[];
            validatorReward: string;
            approvals: (string | null)[];
            blockBodyHash: string;
            blockMerkleRoot: string;
            blockOrdinal: number;
            challengesResult: any[];
            challengesRoot: string;
            chunkEndorsements: any[];
            chunkHeadersRoot: string;
            chunkMask: boolean[];
            chunkReceiptsRoot: string;
            chunkTxRoot: string;
            chunksIncluded: number;
            gasPrice: string;
            hash: string;
            height: number;
            lastDsFinalBlock: string;
            lastFinalBlock: string;
            nextBpHash: string;
            nextEpochId: string;
            prevHash: string;
            prevHeight: number;
            randomValue: string;
            timestamp: number;
            timestampNanosec: string;
            totalSupply: string;
            epochSyncDataHash?: string | undefined;
        };
    }, {
        author: string;
        chunks: {
            balanceBurnt: string;
            chunkHash: string;
            encodedLength: number;
            encodedMerkleRoot: string;
            gasLimit: number;
            gasUsed: number;
            heightCreated: number;
            heightIncluded: number;
            outcomeRoot: string;
            outgoingReceiptsRoot: string;
            prevBlockHash: string;
            prevStateRoot: string;
            rentPaid: string;
            shardId: number;
            signature: string;
            txRoot: string;
            validatorProposals: any[];
            validatorReward: string;
        }[];
        header: {
            latestProtocolVersion: number;
            epochId: string;
            outcomeRoot: string;
            prevStateRoot: string;
            rentPaid: string;
            signature: string;
            validatorProposals: any[];
            validatorReward: string;
            approvals: (string | null)[];
            blockBodyHash: string;
            blockMerkleRoot: string;
            blockOrdinal: number;
            challengesResult: any[];
            challengesRoot: string;
            chunkEndorsements: any[];
            chunkHeadersRoot: string;
            chunkMask: boolean[];
            chunkReceiptsRoot: string;
            chunkTxRoot: string;
            chunksIncluded: number;
            gasPrice: string;
            hash: string;
            height: number;
            lastDsFinalBlock: string;
            lastFinalBlock: string;
            nextBpHash: string;
            nextEpochId: string;
            prevHash: string;
            prevHeight: number;
            randomValue: string;
            timestamp: number;
            timestampNanosec: string;
            totalSupply: string;
            epochSyncDataHash?: string | undefined;
        };
    }>;
    GasPriceResponseSchema: z.ZodObject<{
        gasPrice: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        gasPrice: string;
    }, {
        gasPrice: string;
    }>;
    NetworkInfoResponseSchema: z.ZodObject<{
        activePeers: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            addr: z.ZodString;
            accountId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            addr: string;
            accountId?: string | undefined;
        }, {
            id: string;
            addr: string;
            accountId?: string | undefined;
        }>, "many">;
        knownProducers: z.ZodArray<z.ZodObject<{
            accountId: z.ZodString;
            addr: z.ZodOptional<z.ZodString>;
            peerId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            accountId: string;
            peerId: string;
            addr?: string | undefined;
        }, {
            accountId: string;
            peerId: string;
            addr?: string | undefined;
        }>, "many">;
        numActivePeers: z.ZodNumber;
        peerMaxCount: z.ZodNumber;
        sentBytesPerSec: z.ZodNumber;
        receivedBytesPerSec: z.ZodNumber;
        tier1Connections: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            addr: z.ZodString;
            accountId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            addr: string;
            accountId?: string | undefined;
        }, {
            id: string;
            addr: string;
            accountId?: string | undefined;
        }>, "many">;
        tier1AccountsKeys: z.ZodArray<z.ZodString, "many">;
        tier1AccountsData: z.ZodArray<z.ZodObject<{
            accountId: z.ZodString;
            publicKey: z.ZodString;
            epoch: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            accountId: string;
            publicKey: string;
            epoch: number;
        }, {
            accountId: string;
            publicKey: string;
            epoch: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        activePeers: {
            id: string;
            addr: string;
            accountId?: string | undefined;
        }[];
        knownProducers: {
            accountId: string;
            peerId: string;
            addr?: string | undefined;
        }[];
        numActivePeers: number;
        peerMaxCount: number;
        sentBytesPerSec: number;
        receivedBytesPerSec: number;
        tier1Connections: {
            id: string;
            addr: string;
            accountId?: string | undefined;
        }[];
        tier1AccountsKeys: string[];
        tier1AccountsData: {
            accountId: string;
            publicKey: string;
            epoch: number;
        }[];
    }, {
        activePeers: {
            id: string;
            addr: string;
            accountId?: string | undefined;
        }[];
        knownProducers: {
            accountId: string;
            peerId: string;
            addr?: string | undefined;
        }[];
        numActivePeers: number;
        peerMaxCount: number;
        sentBytesPerSec: number;
        receivedBytesPerSec: number;
        tier1Connections: {
            id: string;
            addr: string;
            accountId?: string | undefined;
        }[];
        tier1AccountsKeys: string[];
        tier1AccountsData: {
            accountId: string;
            publicKey: string;
            epoch: number;
        }[];
    }>;
    QueryResponseSchema: z.ZodObject<{
        blockHash: z.ZodString;
        blockHeight: z.ZodNumber;
        values: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        blockHash: string;
        blockHeight: number;
        values?: any;
    }, {
        blockHash: string;
        blockHeight: number;
        values?: any;
    }>;
    ViewAccountResponseSchema: z.ZodObject<{
        accountId: z.ZodString;
        amount: z.ZodString;
        codeHash: z.ZodString;
        locked: z.ZodString;
        storagePaidAt: z.ZodNumber;
        storageUsage: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        amount: string;
        codeHash: string;
        locked: string;
        storagePaidAt: number;
        storageUsage: number;
        accountId: string;
    }, {
        amount: string;
        codeHash: string;
        locked: string;
        storagePaidAt: number;
        storageUsage: number;
        accountId: string;
    }>;
    AccessKeyListResponseSchema: z.ZodObject<{
        keys: z.ZodArray<z.ZodObject<{
            publicKey: z.ZodString;
            accessKey: z.ZodObject<{
                nonce: z.ZodNumber;
                permission: z.ZodUnion<[z.ZodLiteral<"FullAccess">, z.ZodObject<{
                    functionCall: z.ZodObject<{
                        allowance: z.ZodOptional<z.ZodString>;
                        receiverId: z.ZodString;
                        methodNames: z.ZodArray<z.ZodString, "many">;
                    }, "strip", z.ZodTypeAny, {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    }, {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    functionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                }, {
                    functionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                }>]>;
            }, "strip", z.ZodTypeAny, {
                nonce: number;
                permission: "FullAccess" | {
                    functionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            }, {
                nonce: number;
                permission: "FullAccess" | {
                    functionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            }>;
        }, "strip", z.ZodTypeAny, {
            publicKey: string;
            accessKey: {
                nonce: number;
                permission: "FullAccess" | {
                    functionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            };
        }, {
            publicKey: string;
            accessKey: {
                nonce: number;
                permission: "FullAccess" | {
                    functionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            };
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        keys: {
            publicKey: string;
            accessKey: {
                nonce: number;
                permission: "FullAccess" | {
                    functionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            };
        }[];
    }, {
        keys: {
            publicKey: string;
            accessKey: {
                nonce: number;
                permission: "FullAccess" | {
                    functionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            };
        }[];
    }>;
    FinalitySchema: z.ZodEnum<["optimistic", "near-final", "final"]>;
};
