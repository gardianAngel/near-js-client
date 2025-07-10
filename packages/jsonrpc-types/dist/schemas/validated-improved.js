"use strict";
/**
 * Improved Zod schemas for NEAR Protocol JSON-RPC API
 * Fixed: Proper schemas instead of z.record(z.unknown())
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXPERIMENTALGenesisConfigResponseSchema = exports.EXPERIMENTALProtocolConfigResponseSchema = exports.NetworkInfoResponseSchema = exports.GasPriceResponseSchema = exports.BlockResponseSchema = exports.StatusResponseSchema = exports.JsonRpcResponseSchema = exports.JsonRpcRequestSchema = exports.FinalitySchema = exports.BroadcastTxCommitResponseSchema = exports.BroadcastTxCommitRequestSchema = exports.BroadcastTxAsyncResponseSchema = exports.AccountViewSchema = exports.TimestampSchema = exports.NonceSchema = exports.BalanceSchema = exports.GasSchema = exports.ShardIdSchema = exports.BlockHashSchema = exports.BlockHeightSchema = exports.CryptoHashSchema = exports.PublicKeySchema = exports.AccountIdSchema = void 0;
const zod_1 = require("zod");
// Base primitive schemas
exports.AccountIdSchema = zod_1.z.string();
exports.PublicKeySchema = zod_1.z.string();
exports.CryptoHashSchema = zod_1.z.string();
exports.BlockHeightSchema = zod_1.z.number();
exports.BlockHashSchema = zod_1.z.string();
exports.ShardIdSchema = zod_1.z.number();
exports.GasSchema = zod_1.z.string();
exports.BalanceSchema = zod_1.z.string();
exports.NonceSchema = zod_1.z.number();
exports.TimestampSchema = zod_1.z.number();
// Proper AccountView schema - Fixed
exports.AccountViewSchema = zod_1.z.object({
    amount: zod_1.z.string(),
    codeHash: zod_1.z.string().optional(), // Fixed: proper camelCase
    globalContractAccountId: zod_1.z.string().optional(), // Fixed: proper camelCase
    globalContractHash: zod_1.z.string().optional(), // Fixed: proper camelCase
    locked: zod_1.z.string(),
    storagePaidAt: zod_1.z.number().optional(), // Fixed: proper camelCase
    storageUsage: zod_1.z.number().optional() // Fixed: proper camelCase
});
// Proper schemas instead of z.record(z.unknown())
exports.BroadcastTxAsyncResponseSchema = zod_1.z.object({
    transactionHash: zod_1.z.string(),
    nodeId: zod_1.z.string()
});
exports.BroadcastTxCommitRequestSchema = zod_1.z.object({
    signedTxBase64: zod_1.z.string()
});
exports.BroadcastTxCommitResponseSchema = zod_1.z.object({
    transactionHash: zod_1.z.string(),
    status: zod_1.z.object({
        successValue: zod_1.z.string().optional(),
        successReceiptId: zod_1.z.string().optional(),
        failure: zod_1.z.object({
            errorMessage: zod_1.z.string(),
            errorType: zod_1.z.string()
        }).optional()
    }),
    transaction: zod_1.z.object({
        signerId: zod_1.z.string(),
        publicKey: zod_1.z.string(),
        nonce: zod_1.z.number(),
        receiverId: zod_1.z.string(),
        actions: zod_1.z.array(zod_1.z.any()),
        signature: zod_1.z.string(),
        hash: zod_1.z.string()
    }),
    receipts: zod_1.z.array(zod_1.z.any())
});
// Common schemas
exports.FinalitySchema = zod_1.z.enum(['optimistic', 'near-final', 'final']);
exports.JsonRpcRequestSchema = zod_1.z.object({
    jsonrpc: zod_1.z.literal('2.0'),
    method: zod_1.z.string(),
    params: zod_1.z.any(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.number()])
});
exports.JsonRpcResponseSchema = zod_1.z.object({
    jsonrpc: zod_1.z.literal('2.0'),
    result: zod_1.z.any().optional(),
    error: zod_1.z.object({
        code: zod_1.z.number(),
        message: zod_1.z.string(),
        data: zod_1.z.any().optional()
    }).optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.number()])
});
exports.StatusResponseSchema = zod_1.z.object({
    chainId: zod_1.z.string(),
    genesisHash: zod_1.z.string(),
    latestProtocolVersion: zod_1.z.number(),
    nodeKey: zod_1.z.string().optional(),
    nodePublicKey: zod_1.z.string(),
    protocolVersion: zod_1.z.number(),
    rpcAddr: zod_1.z.string(),
    syncInfo: zod_1.z.object({
        earliestBlockHash: zod_1.z.string(),
        earliestBlockHeight: zod_1.z.number(),
        earliestBlockTime: zod_1.z.string(),
        epochId: zod_1.z.string(),
        epochStartHeight: zod_1.z.number(),
        latestBlockHash: zod_1.z.string(),
        latestBlockHeight: zod_1.z.number(),
        latestBlockTime: zod_1.z.string(),
        latestStateRoot: zod_1.z.string(),
        syncing: zod_1.z.boolean()
    }),
    uptimeSec: zod_1.z.number(),
    validatorAccountId: zod_1.z.string().optional(),
    validatorPublicKey: zod_1.z.string().optional(),
    validators: zod_1.z.array(zod_1.z.object({
        accountId: zod_1.z.string(),
        publicKey: zod_1.z.string(),
        stake: zod_1.z.string()
    })),
    version: zod_1.z.object({
        build: zod_1.z.string(),
        commit: zod_1.z.string(),
        rustcVersion: zod_1.z.string(),
        version: zod_1.z.string()
    })
});
exports.BlockResponseSchema = zod_1.z.object({
    author: zod_1.z.string(),
    chunks: zod_1.z.array(zod_1.z.any()),
    header: zod_1.z.object({
        height: zod_1.z.number(),
        hash: zod_1.z.string(),
        prevHash: zod_1.z.string(),
        timestamp: zod_1.z.number(),
        gasPrice: zod_1.z.string(),
        totalSupply: zod_1.z.string(),
        epochId: zod_1.z.string(),
        nextEpochId: zod_1.z.string(),
        signature: zod_1.z.string(),
        validatorProposals: zod_1.z.array(zod_1.z.any()),
        chunkMask: zod_1.z.array(zod_1.z.boolean()),
        chunksIncluded: zod_1.z.number(),
        blockOrdinal: zod_1.z.number(),
        approvals: zod_1.z.array(zod_1.z.string().nullable()),
        timestampNanosec: zod_1.z.string(),
        randomValue: zod_1.z.string(),
        validatorReward: zod_1.z.string(),
        rentPaid: zod_1.z.string(),
        blockBodyHash: zod_1.z.string(),
        blockMerkleRoot: zod_1.z.string(),
        outcomeRoot: zod_1.z.string(),
        chunkReceiptsRoot: zod_1.z.string(),
        chunkHeadersRoot: zod_1.z.string(),
        chunkTxRoot: zod_1.z.string(),
        challengesRoot: zod_1.z.string(),
        challengesResult: zod_1.z.array(zod_1.z.any()),
        prevStateRoot: zod_1.z.string(),
        prevHeight: zod_1.z.number(),
        latestProtocolVersion: zod_1.z.number(),
        nextBpHash: zod_1.z.string(),
        lastFinalBlock: zod_1.z.string(),
        lastDsFinalBlock: zod_1.z.string(),
        epochSyncDataHash: zod_1.z.string().optional(),
        chunkEndorsements: zod_1.z.array(zod_1.z.any())
    })
});
exports.GasPriceResponseSchema = zod_1.z.object({
    gasPrice: zod_1.z.string()
});
exports.NetworkInfoResponseSchema = zod_1.z.object({
    activePeers: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        addr: zod_1.z.string(),
        accountId: zod_1.z.string().optional()
    })),
    knownProducers: zod_1.z.array(zod_1.z.object({
        accountId: zod_1.z.string(),
        addr: zod_1.z.string().optional(),
        peerId: zod_1.z.string()
    })),
    numActivePeers: zod_1.z.number(),
    peerMaxCount: zod_1.z.number(),
    sentBytesPerSec: zod_1.z.number(),
    receivedBytesPerSec: zod_1.z.number(),
    tier1Connections: zod_1.z.array(zod_1.z.any()),
    tier1AccountsKeys: zod_1.z.array(zod_1.z.string()),
    tier1AccountsData: zod_1.z.array(zod_1.z.any())
});
// Experimental config schemas - proper instead of z.record(z.unknown())
exports.EXPERIMENTALProtocolConfigResponseSchema = zod_1.z.object({
    chainId: zod_1.z.string(),
    genesisHeight: zod_1.z.number(),
    genesisTime: zod_1.z.string(),
    epochLength: zod_1.z.number(),
    maxGasPrice: zod_1.z.string(),
    minGasPrice: zod_1.z.string(),
    maxInflationRate: zod_1.z.number(),
    protocolVersion: zod_1.z.number(),
    runtimeConfig: zod_1.z.object({
        storageAmountPerByte: zod_1.z.string(),
        transactionCosts: zod_1.z.any(),
        wasmConfig: zod_1.z.any(),
        accountCreationConfig: zod_1.z.any()
    }),
    protocolReward: zod_1.z.string(),
    maxKickoutStake: zod_1.z.string(),
    onlineMinThreshold: zod_1.z.number(),
    onlineMaxThreshold: zod_1.z.number()
});
exports.EXPERIMENTALGenesisConfigResponseSchema = zod_1.z.object({
    protocolVersion: zod_1.z.number(),
    genesisTime: zod_1.z.string(),
    chainId: zod_1.z.string(),
    genesisHeight: zod_1.z.number(),
    numBlockProducerSeats: zod_1.z.number(),
    numBlockProducerSeatsPerShard: zod_1.z.array(zod_1.z.number()),
    avgHiddenValidatorSeatsPerShard: zod_1.z.array(zod_1.z.number()),
    dynamicResharding: zod_1.z.boolean(),
    protocolUpgradeStakeThreshold: zod_1.z.number(),
    epochLength: zod_1.z.number(),
    gasLimit: zod_1.z.number(),
    minGasPrice: zod_1.z.string(),
    maxGasPrice: zod_1.z.string(),
    blockProducerKickoutThreshold: zod_1.z.number(),
    chunkProducerKickoutThreshold: zod_1.z.number(),
    onlineMinThreshold: zod_1.z.number(),
    onlineMaxThreshold: zod_1.z.number(),
    gasPriceAdjustmentRate: zod_1.z.number(),
    runtimeConfig: zod_1.z.any(),
    validators: zod_1.z.array(zod_1.z.object({
        accountId: zod_1.z.string(),
        publicKey: zod_1.z.string(),
        amount: zod_1.z.string()
    })),
    records: zod_1.z.array(zod_1.z.any())
});
