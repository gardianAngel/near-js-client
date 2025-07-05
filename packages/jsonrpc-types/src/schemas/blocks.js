"use strict";
/**
 * Zod schemas for block-related NEAR Protocol JSON-RPC types
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChunkResponseSchema = exports.ReceiptSchema = exports.ReceiptEnumSchema = exports.DataReceiptSchema = exports.ActionReceiptSchema = exports.DataReceiverSchema = exports.TransactionSchema = exports.ActionSchema = exports.DeleteAccountActionSchema = exports.DeleteKeyActionSchema = exports.AddKeyActionSchema = exports.StakeActionSchema = exports.TransferActionSchema = exports.FunctionCallActionSchema = exports.DeployContractActionSchema = exports.AccessKeySchema = exports.AccessKeyPermissionSchema = exports.FunctionCallPermissionSchema = exports.ChunkQuerySchema = exports.BlockChangesResponseSchema = exports.BlockChangeSchema = exports.BlockChangesQuerySchema = exports.BlockResponseSchema = exports.BlockHeaderSchema = exports.ChallengeResultSchema = exports.BlockQuerySchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.BlockQuerySchema = common_1.BlockReferenceSchema;
exports.ChallengeResultSchema = zod_1.z.object({
    accountId: zod_1.z.string(),
    isDoubleSign: zod_1.z.boolean(),
});
exports.BlockHeaderSchema = zod_1.z.object({
    height: zod_1.z.number(),
    epochId: zod_1.z.string(),
    nextEpochId: zod_1.z.string(),
    hash: zod_1.z.string(),
    prevHash: zod_1.z.string(),
    prevStateRoot: zod_1.z.string(),
    chunkReceiptsRoot: zod_1.z.string(),
    chunkHeadersRoot: zod_1.z.string(),
    chunkTxRoot: zod_1.z.string(),
    outcomeRoot: zod_1.z.string(),
    chunksIncluded: zod_1.z.number(),
    challengesRoot: zod_1.z.string(),
    timestamp: zod_1.z.number(),
    timestampNanosec: zod_1.z.string(),
    randomValue: zod_1.z.string(),
    validatorProposals: zod_1.z.array(common_1.ValidatorStakeSchema),
    chunkMask: zod_1.z.array(zod_1.z.boolean()),
    gasPrice: zod_1.z.string(),
    rentPaid: zod_1.z.string(),
    validatorReward: zod_1.z.string(),
    totalSupply: zod_1.z.string(),
    challengesResult: zod_1.z.array(exports.ChallengeResultSchema),
    lastFinalBlock: zod_1.z.string(),
    lastDsFinalBlock: zod_1.z.string(),
    nextBpHash: zod_1.z.string(),
    blockMerkleRoot: zod_1.z.string(),
    approvals: zod_1.z.array(zod_1.z.union([common_1.SignatureSchema, zod_1.z.null()])),
    signature: common_1.SignatureSchema,
    latestProtocolVersion: zod_1.z.number(),
});
exports.BlockResponseSchema = zod_1.z.object({
    author: zod_1.z.string(),
    header: exports.BlockHeaderSchema,
    chunks: zod_1.z.array(common_1.ChunkHeaderSchema),
});
exports.BlockChangesQuerySchema = common_1.BlockReferenceSchema;
exports.BlockChangeSchema = zod_1.z.object({
    type: zod_1.z.string(),
    account_id: zod_1.z.string(),
});
exports.BlockChangesResponseSchema = zod_1.z.object({
    blockHash: zod_1.z.string(),
    changes: zod_1.z.array(exports.BlockChangeSchema),
});
exports.ChunkQuerySchema = zod_1.z.object({
    chunkId: zod_1.z.string().optional(),
    blockId: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]).optional(),
    shardId: zod_1.z.number().optional(),
});
exports.FunctionCallPermissionSchema = zod_1.z.object({
    allowance: zod_1.z.string().optional(),
    receiverId: zod_1.z.string(),
    methodNames: zod_1.z.array(zod_1.z.string()),
});
exports.AccessKeyPermissionSchema = zod_1.z.union([
    zod_1.z.literal('FullAccess'),
    zod_1.z.object({ FunctionCall: exports.FunctionCallPermissionSchema }),
]);
exports.AccessKeySchema = zod_1.z.object({
    nonce: zod_1.z.number(),
    permission: exports.AccessKeyPermissionSchema,
});
exports.DeployContractActionSchema = zod_1.z.object({
    code: zod_1.z.string(),
});
exports.FunctionCallActionSchema = zod_1.z.object({
    methodName: zod_1.z.string(),
    args: zod_1.z.string(),
    gas: zod_1.z.number(),
    deposit: zod_1.z.string(),
});
exports.TransferActionSchema = zod_1.z.object({
    deposit: zod_1.z.string(),
});
exports.StakeActionSchema = zod_1.z.object({
    stake: zod_1.z.string(),
    publicKey: common_1.PublicKeySchema,
});
exports.AddKeyActionSchema = zod_1.z.object({
    publicKey: common_1.PublicKeySchema,
    accessKey: exports.AccessKeySchema,
});
exports.DeleteKeyActionSchema = zod_1.z.object({
    publicKey: common_1.PublicKeySchema,
});
exports.DeleteAccountActionSchema = zod_1.z.object({
    beneficiaryId: zod_1.z.string(),
});
exports.ActionSchema = zod_1.z.union([
    zod_1.z.object({ CreateAccount: zod_1.z.record(zod_1.z.never()) }),
    zod_1.z.object({ DeployContract: exports.DeployContractActionSchema }),
    zod_1.z.object({ FunctionCall: exports.FunctionCallActionSchema }),
    zod_1.z.object({ Transfer: exports.TransferActionSchema }),
    zod_1.z.object({ Stake: exports.StakeActionSchema }),
    zod_1.z.object({ AddKey: exports.AddKeyActionSchema }),
    zod_1.z.object({ DeleteKey: exports.DeleteKeyActionSchema }),
    zod_1.z.object({ DeleteAccount: exports.DeleteAccountActionSchema }),
]);
exports.TransactionSchema = zod_1.z.object({
    signerId: zod_1.z.string(),
    publicKey: common_1.PublicKeySchema,
    nonce: zod_1.z.number(),
    receiverId: zod_1.z.string(),
    actions: zod_1.z.array(exports.ActionSchema),
    signature: common_1.SignatureSchema,
    hash: zod_1.z.string(),
});
exports.DataReceiverSchema = zod_1.z.object({
    dataId: zod_1.z.string(),
    receiverId: zod_1.z.string(),
});
exports.ActionReceiptSchema = zod_1.z.object({
    signerId: zod_1.z.string(),
    signerPublicKey: common_1.PublicKeySchema,
    gasPrice: zod_1.z.string(),
    outputDataReceivers: zod_1.z.array(exports.DataReceiverSchema),
    inputDataIds: zod_1.z.array(zod_1.z.string()),
    actions: zod_1.z.array(exports.ActionSchema),
});
exports.DataReceiptSchema = zod_1.z.object({
    dataId: zod_1.z.string(),
    data: zod_1.z.string(),
});
exports.ReceiptEnumSchema = zod_1.z.union([
    zod_1.z.object({ Action: exports.ActionReceiptSchema }),
    zod_1.z.object({ Data: exports.DataReceiptSchema }),
]);
exports.ReceiptSchema = zod_1.z.object({
    predecessorId: zod_1.z.string(),
    receiverId: zod_1.z.string(),
    receiptId: zod_1.z.string(),
    receipt: exports.ReceiptEnumSchema,
});
exports.ChunkResponseSchema = zod_1.z.object({
    author: zod_1.z.string(),
    header: common_1.ChunkHeaderSchema,
    transactions: zod_1.z.array(exports.TransactionSchema),
    receipts: zod_1.z.array(exports.ReceiptSchema),
});
