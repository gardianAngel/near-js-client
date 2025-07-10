/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */

import { z } from 'zod';

// Base schemas
export const AccountIdSchema = z.string();
export const PublicKeySchema = z.string();
export const CryptoHashSchema = z.string();
export const BlockHeightSchema = z.number();
export const GasSchema = z.string();
export const BalanceSchema = z.string();

// Generated schemas from OpenAPI spec
export const ViewAccessKeyParamsSchema = z.object({
    accountId: z.string().optional(),
    publicKey: z.string().optional()
});

export const ViewAccessKeyResultSchema = z.object({
    nonce: z.number().optional(),
    permission: z.string().optional(),
    blockHeight: z.number().optional(),
    blockHash: z.string().optional()
});

export const ViewAccessKeyListParamsSchema = z.object({
    accountId: z.string().optional()
});

export const ViewAccessKeyListResultSchema = z.any();

export const ViewAccountParamsSchema = z.object({
    accountId: z.string().optional()
});

export const ViewAccountResultSchema = z.object({
    accountId: z.string().optional(),
    balance: z.string().optional(),
    storageUsage: z.number().optional(),
    codeHash: z.string().optional(),
    blockHeight: z.number().optional(),
    blockHash: z.string().optional()
});

export const ViewCodeResultSchema = z.any();

export const ViewStateResultSchema = z.any();

export const CallFunctionResultSchema = z.any();

export const BlockParamsSchema = z.object({
    blockId: z.string().optional()
});

export const BlockResultSchema = z.object({
    header: z.record(z.any()).optional(),
    chunks: z.array(z.any()).optional(),
    transactions: z.array(z.any()).optional()
});

export const ChunkParamsSchema = z.object({
    chunkId: z.string().optional()
});

export const ChunkResultSchema = z.any();

export const ChangesInBlockResultSchema = z.any();

export const ExperimentalChangesInBlockResultSchema = z.any();

export const GasPriceParamsSchema = z.object({
    blockId: z.string().optional()
});

export const GasPriceResultSchema = z.object({
    gasPrice: z.string().optional()
});

export const ExperimentalGenesisConfigResultSchema = z.any();

export const ExperimentalProtocolConfigResultSchema = z.any();

export const NetworkInfoResultSchema = z.object({
    chainId: z.string().optional(),
    genesisHash: z.string().optional(),
    protocolVersion: z.number().optional()
});

export const StatusResultSchema = z.any();

export const ValidatorsResultSchema = z.any();

export const BroadcastTxAsyncParamsSchema = z.object({
    signedTxBase64: z.string().optional()
});

export const BroadcastTxAsyncResultSchema = z.any();

export const BroadcastTxCommitParamsSchema = z.object({
    signedTxBase64: z.string().optional()
});

export const BroadcastTxCommitResultSchema = z.any();

export const TxParamsSchema = z.object({
    txHash: z.string().optional(),
    senderAccountId: z.string().optional()
});

export const TxResultSchema = z.any();

export const ExperimentalTxStatusResultSchema = z.any();

