"use strict";
/**
 * Validated Zod Schemas for NEAR Protocol JSON-RPC
 *
 * These schemas are generated from real API responses and provide proper validation
 * instead of generic z.record(z.unknown()) patterns.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatedSchemas = exports.FinalitySchema = exports.AccessKeyListResponseSchema = exports.ViewAccountResponseSchema = exports.QueryResponseSchema = exports.NetworkInfoResponseSchema = exports.GasPriceResponseSchema = exports.BlockResponseSchema = exports.StatusResponseSchema = exports.JsonRpcResponseSchema = exports.JsonRpcErrorSchema = exports.JsonRpcRequestSchema = exports.AccountViewSchema = exports.TimestampSchema = exports.NonceSchema = exports.BalanceSchema = exports.GasSchema = exports.ShardIdSchema = exports.BlockHashSchema = exports.BlockHeightSchema = exports.CryptoHashSchema = exports.PublicKeySchema = exports.AccountIdSchema = void 0;
const zod_1 = require("zod");
// Basic types
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
// Account schemas
exports.AccountViewSchema = zod_1.z.object({
    amount: zod_1.z.string(),
    codeHash: zod_1.z.string().optional(),
    globalContractAccountId: zod_1.z.string().optional(),
    globalContractHash: zod_1.z.string().optional(),
    locked: zod_1.z.string(),
    storagePaidAt: zod_1.z.number().optional(),
    storageUsage: zod_1.z.number().optional(),
});
// JSON-RPC schemas
exports.JsonRpcRequestSchema = zod_1.z.object({
    jsonrpc: zod_1.z.literal('2.0'),
    method: zod_1.z.string(),
    params: zod_1.z.any(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
});
exports.JsonRpcErrorSchema = zod_1.z.object({
    code: zod_1.z.number(),
    message: zod_1.z.string(),
    data: zod_1.z.any().optional(),
});
exports.JsonRpcResponseSchema = zod_1.z.object({
    jsonrpc: zod_1.z.literal('2.0'),
    result: zod_1.z.any().optional(),
    error: exports.JsonRpcErrorSchema.optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
});
// Status response schema
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
        syncing: zod_1.z.boolean(),
    }),
    uptimeSec: zod_1.z.number(),
    validatorAccountId: zod_1.z.string().optional(),
    validatorPublicKey: zod_1.z.string().optional(),
    validators: zod_1.z.array(zod_1.z.object({
        accountId: zod_1.z.string(),
        publicKey: zod_1.z.string(),
        stake: zod_1.z.string(),
    })),
    version: zod_1.z.object({
        build: zod_1.z.string(),
        commit: zod_1.z.string(),
        rustcVersion: zod_1.z.string(),
        version: zod_1.z.string(),
    }),
});
// Block response schema
exports.BlockResponseSchema = zod_1.z.object({
    author: zod_1.z.string(),
    chunks: zod_1.z.array(zod_1.z.object({
        balanceBurnt: zod_1.z.string(),
        chunkHash: zod_1.z.string(),
        encodedLength: zod_1.z.number(),
        encodedMerkleRoot: zod_1.z.string(),
        gasLimit: zod_1.z.number(),
        gasUsed: zod_1.z.number(),
        heightCreated: zod_1.z.number(),
        heightIncluded: zod_1.z.number(),
        outcomeRoot: zod_1.z.string(),
        outgoingReceiptsRoot: zod_1.z.string(),
        prevBlockHash: zod_1.z.string(),
        prevStateRoot: zod_1.z.string(),
        rentPaid: zod_1.z.string(),
        shardId: zod_1.z.number(),
        signature: zod_1.z.string(),
        txRoot: zod_1.z.string(),
        validatorProposals: zod_1.z.array(zod_1.z.any()),
        validatorReward: zod_1.z.string(),
    })),
    header: zod_1.z.object({
        approvals: zod_1.z.array(zod_1.z.string().nullable()),
        blockBodyHash: zod_1.z.string(),
        blockMerkleRoot: zod_1.z.string(),
        blockOrdinal: zod_1.z.number(),
        challengesResult: zod_1.z.array(zod_1.z.any()),
        challengesRoot: zod_1.z.string(),
        chunkEndorsements: zod_1.z.array(zod_1.z.any()),
        chunkHeadersRoot: zod_1.z.string(),
        chunkMask: zod_1.z.array(zod_1.z.boolean()),
        chunkReceiptsRoot: zod_1.z.string(),
        chunkTxRoot: zod_1.z.string(),
        chunksIncluded: zod_1.z.number(),
        epochId: zod_1.z.string(),
        epochSyncDataHash: zod_1.z.string().optional(),
        gasPrice: zod_1.z.string(),
        hash: zod_1.z.string(),
        height: zod_1.z.number(),
        lastDsFinalBlock: zod_1.z.string(),
        lastFinalBlock: zod_1.z.string(),
        latestProtocolVersion: zod_1.z.number(),
        nextBpHash: zod_1.z.string(),
        nextEpochId: zod_1.z.string(),
        outcomeRoot: zod_1.z.string(),
        prevHash: zod_1.z.string(),
        prevHeight: zod_1.z.number(),
        prevStateRoot: zod_1.z.string(),
        randomValue: zod_1.z.string(),
        rentPaid: zod_1.z.string(),
        signature: zod_1.z.string(),
        timestamp: zod_1.z.number(),
        timestampNanosec: zod_1.z.string(),
        totalSupply: zod_1.z.string(),
        validatorProposals: zod_1.z.array(zod_1.z.any()),
        validatorReward: zod_1.z.string(),
    }),
});
// Gas price response schema
exports.GasPriceResponseSchema = zod_1.z.object({
    gasPrice: zod_1.z.string(),
});
// Network info response schema
exports.NetworkInfoResponseSchema = zod_1.z.object({
    activePeers: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        addr: zod_1.z.string(),
        accountId: zod_1.z.string().optional(),
    })),
    knownProducers: zod_1.z.array(zod_1.z.object({
        accountId: zod_1.z.string(),
        addr: zod_1.z.string().optional(),
        peerId: zod_1.z.string(),
    })),
    numActivePeers: zod_1.z.number(),
    peerMaxCount: zod_1.z.number(),
    sentBytesPerSec: zod_1.z.number(),
    receivedBytesPerSec: zod_1.z.number(),
    tier1Connections: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        addr: zod_1.z.string(),
        accountId: zod_1.z.string().optional(),
    })),
    tier1AccountsKeys: zod_1.z.array(zod_1.z.string()),
    tier1AccountsData: zod_1.z.array(zod_1.z.object({
        accountId: zod_1.z.string(),
        publicKey: zod_1.z.string(),
        epoch: zod_1.z.number(),
    })),
});
// Query response schema
exports.QueryResponseSchema = zod_1.z.object({
    blockHash: zod_1.z.string(),
    blockHeight: zod_1.z.number(),
    values: zod_1.z.any(),
});
// View account response schema
exports.ViewAccountResponseSchema = zod_1.z.object({
    accountId: zod_1.z.string(),
    amount: zod_1.z.string(),
    codeHash: zod_1.z.string(),
    locked: zod_1.z.string(),
    storagePaidAt: zod_1.z.number(),
    storageUsage: zod_1.z.number(),
});
// Access key list response schema
exports.AccessKeyListResponseSchema = zod_1.z.object({
    keys: zod_1.z.array(zod_1.z.object({
        publicKey: zod_1.z.string(),
        accessKey: zod_1.z.object({
            nonce: zod_1.z.number(),
            permission: zod_1.z.union([
                zod_1.z.literal('FullAccess'),
                zod_1.z.object({
                    functionCall: zod_1.z.object({
                        allowance: zod_1.z.string().optional(),
                        receiverId: zod_1.z.string(),
                        methodNames: zod_1.z.array(zod_1.z.string()),
                    }),
                }),
            ]),
        }),
    })),
});
// Finality schema
exports.FinalitySchema = zod_1.z.enum(['optimistic', 'near-final', 'final']);
// Export all schemas
exports.ValidatedSchemas = {
    AccountIdSchema: exports.AccountIdSchema,
    PublicKeySchema: exports.PublicKeySchema,
    CryptoHashSchema: exports.CryptoHashSchema,
    BlockHeightSchema: exports.BlockHeightSchema,
    BlockHashSchema: exports.BlockHashSchema,
    ShardIdSchema: exports.ShardIdSchema,
    GasSchema: exports.GasSchema,
    BalanceSchema: exports.BalanceSchema,
    NonceSchema: exports.NonceSchema,
    TimestampSchema: exports.TimestampSchema,
    AccountViewSchema: exports.AccountViewSchema,
    JsonRpcRequestSchema: exports.JsonRpcRequestSchema,
    JsonRpcErrorSchema: exports.JsonRpcErrorSchema,
    JsonRpcResponseSchema: exports.JsonRpcResponseSchema,
    StatusResponseSchema: exports.StatusResponseSchema,
    BlockResponseSchema: exports.BlockResponseSchema,
    GasPriceResponseSchema: exports.GasPriceResponseSchema,
    NetworkInfoResponseSchema: exports.NetworkInfoResponseSchema,
    QueryResponseSchema: exports.QueryResponseSchema,
    ViewAccountResponseSchema: exports.ViewAccountResponseSchema,
    AccessKeyListResponseSchema: exports.AccessKeyListResponseSchema,
    FinalitySchema: exports.FinalitySchema,
};
