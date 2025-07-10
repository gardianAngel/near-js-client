"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperimentalTxStatusResultSchema = exports.TxResultSchema = exports.TxParamsSchema = exports.BroadcastTxCommitResultSchema = exports.BroadcastTxCommitParamsSchema = exports.BroadcastTxAsyncResultSchema = exports.BroadcastTxAsyncParamsSchema = exports.ValidatorsResultSchema = exports.StatusResultSchema = exports.NetworkInfoResultSchema = exports.ExperimentalProtocolConfigResultSchema = exports.ExperimentalGenesisConfigResultSchema = exports.GasPriceResultSchema = exports.GasPriceParamsSchema = exports.ExperimentalChangesInBlockResultSchema = exports.ChangesInBlockResultSchema = exports.ChunkResultSchema = exports.ChunkParamsSchema = exports.BlockResultSchema = exports.BlockParamsSchema = exports.CallFunctionResultSchema = exports.ViewStateResultSchema = exports.ViewCodeResultSchema = exports.ViewAccountResultSchema = exports.ViewAccountParamsSchema = exports.ViewAccessKeyListResultSchema = exports.ViewAccessKeyListParamsSchema = exports.ViewAccessKeyResultSchema = exports.ViewAccessKeyParamsSchema = exports.BalanceSchema = exports.GasSchema = exports.BlockHeightSchema = exports.CryptoHashSchema = exports.PublicKeySchema = exports.AccountIdSchema = void 0;
const zod_1 = require("zod");
// Base schemas
exports.AccountIdSchema = zod_1.z.string();
exports.PublicKeySchema = zod_1.z.string();
exports.CryptoHashSchema = zod_1.z.string();
exports.BlockHeightSchema = zod_1.z.number();
exports.GasSchema = zod_1.z.string();
exports.BalanceSchema = zod_1.z.string();
// Generated schemas from OpenAPI spec
exports.ViewAccessKeyParamsSchema = zod_1.z.object({
    accountId: zod_1.z.string().optional(),
    publicKey: zod_1.z.string().optional()
});
exports.ViewAccessKeyResultSchema = zod_1.z.object({
    nonce: zod_1.z.number().optional(),
    permission: zod_1.z.string().optional(),
    blockHeight: zod_1.z.number().optional(),
    blockHash: zod_1.z.string().optional()
});
exports.ViewAccessKeyListParamsSchema = zod_1.z.object({
    accountId: zod_1.z.string().optional()
});
exports.ViewAccessKeyListResultSchema = zod_1.z.any();
exports.ViewAccountParamsSchema = zod_1.z.object({
    accountId: zod_1.z.string().optional()
});
exports.ViewAccountResultSchema = zod_1.z.object({
    accountId: zod_1.z.string().optional(),
    balance: zod_1.z.string().optional(),
    storageUsage: zod_1.z.number().optional(),
    codeHash: zod_1.z.string().optional(),
    blockHeight: zod_1.z.number().optional(),
    blockHash: zod_1.z.string().optional()
});
exports.ViewCodeResultSchema = zod_1.z.any();
exports.ViewStateResultSchema = zod_1.z.any();
exports.CallFunctionResultSchema = zod_1.z.any();
exports.BlockParamsSchema = zod_1.z.object({
    blockId: zod_1.z.string().optional()
});
exports.BlockResultSchema = zod_1.z.object({
    header: zod_1.z.record(zod_1.z.any()).optional(),
    chunks: zod_1.z.array(zod_1.z.any()).optional(),
    transactions: zod_1.z.array(zod_1.z.any()).optional()
});
exports.ChunkParamsSchema = zod_1.z.object({
    chunkId: zod_1.z.string().optional()
});
exports.ChunkResultSchema = zod_1.z.any();
exports.ChangesInBlockResultSchema = zod_1.z.any();
exports.ExperimentalChangesInBlockResultSchema = zod_1.z.any();
exports.GasPriceParamsSchema = zod_1.z.object({
    blockId: zod_1.z.string().optional()
});
exports.GasPriceResultSchema = zod_1.z.object({
    gasPrice: zod_1.z.string().optional()
});
exports.ExperimentalGenesisConfigResultSchema = zod_1.z.any();
exports.ExperimentalProtocolConfigResultSchema = zod_1.z.any();
exports.NetworkInfoResultSchema = zod_1.z.object({
    chainId: zod_1.z.string().optional(),
    genesisHash: zod_1.z.string().optional(),
    protocolVersion: zod_1.z.number().optional()
});
exports.StatusResultSchema = zod_1.z.any();
exports.ValidatorsResultSchema = zod_1.z.any();
exports.BroadcastTxAsyncParamsSchema = zod_1.z.object({
    signedTxBase64: zod_1.z.string().optional()
});
exports.BroadcastTxAsyncResultSchema = zod_1.z.any();
exports.BroadcastTxCommitParamsSchema = zod_1.z.object({
    signedTxBase64: zod_1.z.string().optional()
});
exports.BroadcastTxCommitResultSchema = zod_1.z.any();
exports.TxParamsSchema = zod_1.z.object({
    txHash: zod_1.z.string().optional(),
    senderAccountId: zod_1.z.string().optional()
});
exports.TxResultSchema = zod_1.z.any();
exports.ExperimentalTxStatusResultSchema = zod_1.z.any();
