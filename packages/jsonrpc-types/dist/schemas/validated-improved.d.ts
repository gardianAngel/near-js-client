/**
 * Improved Zod schemas for NEAR Protocol JSON-RPC API
 * Fixed: Proper schemas instead of z.record(z.unknown())
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
export declare const BroadcastTxAsyncResponseSchema: z.ZodObject<{
    transactionHash: z.ZodString;
    nodeId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transactionHash: string;
    nodeId: string;
}, {
    transactionHash: string;
    nodeId: string;
}>;
export declare const BroadcastTxCommitRequestSchema: z.ZodObject<{
    signedTxBase64: z.ZodString;
}, "strip", z.ZodTypeAny, {
    signedTxBase64: string;
}, {
    signedTxBase64: string;
}>;
export declare const BroadcastTxCommitResponseSchema: z.ZodObject<{
    transactionHash: z.ZodString;
    status: z.ZodObject<{
        successValue: z.ZodOptional<z.ZodString>;
        successReceiptId: z.ZodOptional<z.ZodString>;
        failure: z.ZodOptional<z.ZodObject<{
            errorMessage: z.ZodString;
            errorType: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            errorMessage: string;
            errorType: string;
        }, {
            errorMessage: string;
            errorType: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        successValue?: string | undefined;
        successReceiptId?: string | undefined;
        failure?: {
            errorMessage: string;
            errorType: string;
        } | undefined;
    }, {
        successValue?: string | undefined;
        successReceiptId?: string | undefined;
        failure?: {
            errorMessage: string;
            errorType: string;
        } | undefined;
    }>;
    transaction: z.ZodObject<{
        signerId: z.ZodString;
        publicKey: z.ZodString;
        nonce: z.ZodNumber;
        receiverId: z.ZodString;
        actions: z.ZodArray<z.ZodAny, "many">;
        signature: z.ZodString;
        hash: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        signerId: string;
        publicKey: string;
        nonce: number;
        receiverId: string;
        actions: any[];
        signature: string;
        hash: string;
    }, {
        signerId: string;
        publicKey: string;
        nonce: number;
        receiverId: string;
        actions: any[];
        signature: string;
        hash: string;
    }>;
    receipts: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    status: {
        successValue?: string | undefined;
        successReceiptId?: string | undefined;
        failure?: {
            errorMessage: string;
            errorType: string;
        } | undefined;
    };
    transactionHash: string;
    transaction: {
        signerId: string;
        publicKey: string;
        nonce: number;
        receiverId: string;
        actions: any[];
        signature: string;
        hash: string;
    };
    receipts: any[];
}, {
    status: {
        successValue?: string | undefined;
        successReceiptId?: string | undefined;
        failure?: {
            errorMessage: string;
            errorType: string;
        } | undefined;
    };
    transactionHash: string;
    transaction: {
        signerId: string;
        publicKey: string;
        nonce: number;
        receiverId: string;
        actions: any[];
        signature: string;
        hash: string;
    };
    receipts: any[];
}>;
export declare const FinalitySchema: z.ZodEnum<["optimistic", "near-final", "final"]>;
export declare const JsonRpcRequestSchema: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    method: z.ZodString;
    params: z.ZodAny;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    jsonrpc: "2.0";
    method: string;
    id: string | number;
    params?: any;
}, {
    jsonrpc: "2.0";
    method: string;
    id: string | number;
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
        publicKey: string;
        accountId: string;
        stake: string;
    }, {
        publicKey: string;
        accountId: string;
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
    validators: {
        publicKey: string;
        accountId: string;
        stake: string;
    }[];
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
    validators: {
        publicKey: string;
        accountId: string;
        stake: string;
    }[];
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
    chunks: z.ZodArray<z.ZodAny, "many">;
    header: z.ZodObject<{
        height: z.ZodNumber;
        hash: z.ZodString;
        prevHash: z.ZodString;
        timestamp: z.ZodNumber;
        gasPrice: z.ZodString;
        totalSupply: z.ZodString;
        epochId: z.ZodString;
        nextEpochId: z.ZodString;
        signature: z.ZodString;
        validatorProposals: z.ZodArray<z.ZodAny, "many">;
        chunkMask: z.ZodArray<z.ZodBoolean, "many">;
        chunksIncluded: z.ZodNumber;
        blockOrdinal: z.ZodNumber;
        approvals: z.ZodArray<z.ZodNullable<z.ZodString>, "many">;
        timestampNanosec: z.ZodString;
        randomValue: z.ZodString;
        validatorReward: z.ZodString;
        rentPaid: z.ZodString;
        blockBodyHash: z.ZodString;
        blockMerkleRoot: z.ZodString;
        outcomeRoot: z.ZodString;
        chunkReceiptsRoot: z.ZodString;
        chunkHeadersRoot: z.ZodString;
        chunkTxRoot: z.ZodString;
        challengesRoot: z.ZodString;
        challengesResult: z.ZodArray<z.ZodAny, "many">;
        prevStateRoot: z.ZodString;
        prevHeight: z.ZodNumber;
        latestProtocolVersion: z.ZodNumber;
        nextBpHash: z.ZodString;
        lastFinalBlock: z.ZodString;
        lastDsFinalBlock: z.ZodString;
        epochSyncDataHash: z.ZodOptional<z.ZodString>;
        chunkEndorsements: z.ZodArray<z.ZodAny, "many">;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        hash: string;
        latestProtocolVersion: number;
        epochId: string;
        height: number;
        prevHash: string;
        timestamp: number;
        gasPrice: string;
        totalSupply: string;
        nextEpochId: string;
        validatorProposals: any[];
        chunkMask: boolean[];
        chunksIncluded: number;
        blockOrdinal: number;
        approvals: (string | null)[];
        timestampNanosec: string;
        randomValue: string;
        validatorReward: string;
        rentPaid: string;
        blockBodyHash: string;
        blockMerkleRoot: string;
        outcomeRoot: string;
        chunkReceiptsRoot: string;
        chunkHeadersRoot: string;
        chunkTxRoot: string;
        challengesRoot: string;
        challengesResult: any[];
        prevStateRoot: string;
        prevHeight: number;
        nextBpHash: string;
        lastFinalBlock: string;
        lastDsFinalBlock: string;
        chunkEndorsements: any[];
        epochSyncDataHash?: string | undefined;
    }, {
        signature: string;
        hash: string;
        latestProtocolVersion: number;
        epochId: string;
        height: number;
        prevHash: string;
        timestamp: number;
        gasPrice: string;
        totalSupply: string;
        nextEpochId: string;
        validatorProposals: any[];
        chunkMask: boolean[];
        chunksIncluded: number;
        blockOrdinal: number;
        approvals: (string | null)[];
        timestampNanosec: string;
        randomValue: string;
        validatorReward: string;
        rentPaid: string;
        blockBodyHash: string;
        blockMerkleRoot: string;
        outcomeRoot: string;
        chunkReceiptsRoot: string;
        chunkHeadersRoot: string;
        chunkTxRoot: string;
        challengesRoot: string;
        challengesResult: any[];
        prevStateRoot: string;
        prevHeight: number;
        nextBpHash: string;
        lastFinalBlock: string;
        lastDsFinalBlock: string;
        chunkEndorsements: any[];
        epochSyncDataHash?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    author: string;
    chunks: any[];
    header: {
        signature: string;
        hash: string;
        latestProtocolVersion: number;
        epochId: string;
        height: number;
        prevHash: string;
        timestamp: number;
        gasPrice: string;
        totalSupply: string;
        nextEpochId: string;
        validatorProposals: any[];
        chunkMask: boolean[];
        chunksIncluded: number;
        blockOrdinal: number;
        approvals: (string | null)[];
        timestampNanosec: string;
        randomValue: string;
        validatorReward: string;
        rentPaid: string;
        blockBodyHash: string;
        blockMerkleRoot: string;
        outcomeRoot: string;
        chunkReceiptsRoot: string;
        chunkHeadersRoot: string;
        chunkTxRoot: string;
        challengesRoot: string;
        challengesResult: any[];
        prevStateRoot: string;
        prevHeight: number;
        nextBpHash: string;
        lastFinalBlock: string;
        lastDsFinalBlock: string;
        chunkEndorsements: any[];
        epochSyncDataHash?: string | undefined;
    };
}, {
    author: string;
    chunks: any[];
    header: {
        signature: string;
        hash: string;
        latestProtocolVersion: number;
        epochId: string;
        height: number;
        prevHash: string;
        timestamp: number;
        gasPrice: string;
        totalSupply: string;
        nextEpochId: string;
        validatorProposals: any[];
        chunkMask: boolean[];
        chunksIncluded: number;
        blockOrdinal: number;
        approvals: (string | null)[];
        timestampNanosec: string;
        randomValue: string;
        validatorReward: string;
        rentPaid: string;
        blockBodyHash: string;
        blockMerkleRoot: string;
        outcomeRoot: string;
        chunkReceiptsRoot: string;
        chunkHeadersRoot: string;
        chunkTxRoot: string;
        challengesRoot: string;
        challengesResult: any[];
        prevStateRoot: string;
        prevHeight: number;
        nextBpHash: string;
        lastFinalBlock: string;
        lastDsFinalBlock: string;
        chunkEndorsements: any[];
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
    tier1Connections: z.ZodArray<z.ZodAny, "many">;
    tier1AccountsKeys: z.ZodArray<z.ZodString, "many">;
    tier1AccountsData: z.ZodArray<z.ZodAny, "many">;
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
    tier1Connections: any[];
    tier1AccountsKeys: string[];
    tier1AccountsData: any[];
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
    tier1Connections: any[];
    tier1AccountsKeys: string[];
    tier1AccountsData: any[];
}>;
export declare const EXPERIMENTALProtocolConfigResponseSchema: z.ZodObject<{
    chainId: z.ZodString;
    genesisHeight: z.ZodNumber;
    genesisTime: z.ZodString;
    epochLength: z.ZodNumber;
    maxGasPrice: z.ZodString;
    minGasPrice: z.ZodString;
    maxInflationRate: z.ZodNumber;
    protocolVersion: z.ZodNumber;
    runtimeConfig: z.ZodObject<{
        storageAmountPerByte: z.ZodString;
        transactionCosts: z.ZodAny;
        wasmConfig: z.ZodAny;
        accountCreationConfig: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        storageAmountPerByte: string;
        transactionCosts?: any;
        wasmConfig?: any;
        accountCreationConfig?: any;
    }, {
        storageAmountPerByte: string;
        transactionCosts?: any;
        wasmConfig?: any;
        accountCreationConfig?: any;
    }>;
    protocolReward: z.ZodString;
    maxKickoutStake: z.ZodString;
    onlineMinThreshold: z.ZodNumber;
    onlineMaxThreshold: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    chainId: string;
    protocolVersion: number;
    genesisHeight: number;
    genesisTime: string;
    epochLength: number;
    maxGasPrice: string;
    minGasPrice: string;
    maxInflationRate: number;
    runtimeConfig: {
        storageAmountPerByte: string;
        transactionCosts?: any;
        wasmConfig?: any;
        accountCreationConfig?: any;
    };
    protocolReward: string;
    maxKickoutStake: string;
    onlineMinThreshold: number;
    onlineMaxThreshold: number;
}, {
    chainId: string;
    protocolVersion: number;
    genesisHeight: number;
    genesisTime: string;
    epochLength: number;
    maxGasPrice: string;
    minGasPrice: string;
    maxInflationRate: number;
    runtimeConfig: {
        storageAmountPerByte: string;
        transactionCosts?: any;
        wasmConfig?: any;
        accountCreationConfig?: any;
    };
    protocolReward: string;
    maxKickoutStake: string;
    onlineMinThreshold: number;
    onlineMaxThreshold: number;
}>;
export declare const EXPERIMENTALGenesisConfigResponseSchema: z.ZodObject<{
    protocolVersion: z.ZodNumber;
    genesisTime: z.ZodString;
    chainId: z.ZodString;
    genesisHeight: z.ZodNumber;
    numBlockProducerSeats: z.ZodNumber;
    numBlockProducerSeatsPerShard: z.ZodArray<z.ZodNumber, "many">;
    avgHiddenValidatorSeatsPerShard: z.ZodArray<z.ZodNumber, "many">;
    dynamicResharding: z.ZodBoolean;
    protocolUpgradeStakeThreshold: z.ZodNumber;
    epochLength: z.ZodNumber;
    gasLimit: z.ZodNumber;
    minGasPrice: z.ZodString;
    maxGasPrice: z.ZodString;
    blockProducerKickoutThreshold: z.ZodNumber;
    chunkProducerKickoutThreshold: z.ZodNumber;
    onlineMinThreshold: z.ZodNumber;
    onlineMaxThreshold: z.ZodNumber;
    gasPriceAdjustmentRate: z.ZodNumber;
    runtimeConfig: z.ZodAny;
    validators: z.ZodArray<z.ZodObject<{
        accountId: z.ZodString;
        publicKey: z.ZodString;
        amount: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        amount: string;
        publicKey: string;
        accountId: string;
    }, {
        amount: string;
        publicKey: string;
        accountId: string;
    }>, "many">;
    records: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    chainId: string;
    protocolVersion: number;
    validators: {
        amount: string;
        publicKey: string;
        accountId: string;
    }[];
    genesisHeight: number;
    genesisTime: string;
    epochLength: number;
    maxGasPrice: string;
    minGasPrice: string;
    onlineMinThreshold: number;
    onlineMaxThreshold: number;
    numBlockProducerSeats: number;
    numBlockProducerSeatsPerShard: number[];
    avgHiddenValidatorSeatsPerShard: number[];
    dynamicResharding: boolean;
    protocolUpgradeStakeThreshold: number;
    gasLimit: number;
    blockProducerKickoutThreshold: number;
    chunkProducerKickoutThreshold: number;
    gasPriceAdjustmentRate: number;
    records: any[];
    runtimeConfig?: any;
}, {
    chainId: string;
    protocolVersion: number;
    validators: {
        amount: string;
        publicKey: string;
        accountId: string;
    }[];
    genesisHeight: number;
    genesisTime: string;
    epochLength: number;
    maxGasPrice: string;
    minGasPrice: string;
    onlineMinThreshold: number;
    onlineMaxThreshold: number;
    numBlockProducerSeats: number;
    numBlockProducerSeatsPerShard: number[];
    avgHiddenValidatorSeatsPerShard: number[];
    dynamicResharding: boolean;
    protocolUpgradeStakeThreshold: number;
    gasLimit: number;
    blockProducerKickoutThreshold: number;
    chunkProducerKickoutThreshold: number;
    gasPriceAdjustmentRate: number;
    records: any[];
    runtimeConfig?: any;
}>;
