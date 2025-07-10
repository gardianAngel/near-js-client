/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */
import { z } from 'zod';
export declare const AccountIdSchema: z.ZodString;
export declare const PublicKeySchema: z.ZodString;
export declare const CryptoHashSchema: z.ZodString;
export declare const BlockHeightSchema: z.ZodNumber;
export declare const GasSchema: z.ZodString;
export declare const BalanceSchema: z.ZodString;
export declare const ViewAccessKeyParamsSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodString>;
    publicKey: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountId?: string | undefined;
    publicKey?: string | undefined;
}, {
    accountId?: string | undefined;
    publicKey?: string | undefined;
}>;
export declare const ViewAccessKeyResultSchema: z.ZodObject<{
    nonce: z.ZodOptional<z.ZodNumber>;
    permission: z.ZodOptional<z.ZodString>;
    blockHeight: z.ZodOptional<z.ZodNumber>;
    blockHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    blockHash?: string | undefined;
    blockHeight?: number | undefined;
    nonce?: number | undefined;
    permission?: string | undefined;
}, {
    blockHash?: string | undefined;
    blockHeight?: number | undefined;
    nonce?: number | undefined;
    permission?: string | undefined;
}>;
export declare const ViewAccessKeyListParamsSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountId?: string | undefined;
}, {
    accountId?: string | undefined;
}>;
export declare const ViewAccessKeyListResultSchema: z.ZodAny;
export declare const ViewAccountParamsSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountId?: string | undefined;
}, {
    accountId?: string | undefined;
}>;
export declare const ViewAccountResultSchema: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodString>;
    balance: z.ZodOptional<z.ZodString>;
    storageUsage: z.ZodOptional<z.ZodNumber>;
    codeHash: z.ZodOptional<z.ZodString>;
    blockHeight: z.ZodOptional<z.ZodNumber>;
    blockHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    codeHash?: string | undefined;
    storageUsage?: number | undefined;
    accountId?: string | undefined;
    blockHash?: string | undefined;
    blockHeight?: number | undefined;
    balance?: string | undefined;
}, {
    codeHash?: string | undefined;
    storageUsage?: number | undefined;
    accountId?: string | undefined;
    blockHash?: string | undefined;
    blockHeight?: number | undefined;
    balance?: string | undefined;
}>;
export declare const ViewCodeResultSchema: z.ZodAny;
export declare const ViewStateResultSchema: z.ZodAny;
export declare const CallFunctionResultSchema: z.ZodAny;
export declare const BlockParamsSchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    blockId?: string | undefined;
}, {
    blockId?: string | undefined;
}>;
export declare const BlockResultSchema: z.ZodObject<{
    header: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    chunks: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    transactions: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
}, "strip", z.ZodTypeAny, {
    chunks?: any[] | undefined;
    header?: Record<string, any> | undefined;
    transactions?: any[] | undefined;
}, {
    chunks?: any[] | undefined;
    header?: Record<string, any> | undefined;
    transactions?: any[] | undefined;
}>;
export declare const ChunkParamsSchema: z.ZodObject<{
    chunkId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    chunkId?: string | undefined;
}, {
    chunkId?: string | undefined;
}>;
export declare const ChunkResultSchema: z.ZodAny;
export declare const ChangesInBlockResultSchema: z.ZodAny;
export declare const ExperimentalChangesInBlockResultSchema: z.ZodAny;
export declare const GasPriceParamsSchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    blockId?: string | undefined;
}, {
    blockId?: string | undefined;
}>;
export declare const GasPriceResultSchema: z.ZodObject<{
    gasPrice: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    gasPrice?: string | undefined;
}, {
    gasPrice?: string | undefined;
}>;
export declare const ExperimentalGenesisConfigResultSchema: z.ZodAny;
export declare const ExperimentalProtocolConfigResultSchema: z.ZodAny;
export declare const NetworkInfoResultSchema: z.ZodObject<{
    chainId: z.ZodOptional<z.ZodString>;
    genesisHash: z.ZodOptional<z.ZodString>;
    protocolVersion: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    chainId?: string | undefined;
    genesisHash?: string | undefined;
    protocolVersion?: number | undefined;
}, {
    chainId?: string | undefined;
    genesisHash?: string | undefined;
    protocolVersion?: number | undefined;
}>;
export declare const StatusResultSchema: z.ZodAny;
export declare const ValidatorsResultSchema: z.ZodAny;
export declare const BroadcastTxAsyncParamsSchema: z.ZodObject<{
    signedTxBase64: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    signedTxBase64?: string | undefined;
}, {
    signedTxBase64?: string | undefined;
}>;
export declare const BroadcastTxAsyncResultSchema: z.ZodAny;
export declare const BroadcastTxCommitParamsSchema: z.ZodObject<{
    signedTxBase64: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    signedTxBase64?: string | undefined;
}, {
    signedTxBase64?: string | undefined;
}>;
export declare const BroadcastTxCommitResultSchema: z.ZodAny;
export declare const TxParamsSchema: z.ZodObject<{
    txHash: z.ZodOptional<z.ZodString>;
    senderAccountId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    txHash?: string | undefined;
    senderAccountId?: string | undefined;
}, {
    txHash?: string | undefined;
    senderAccountId?: string | undefined;
}>;
export declare const TxResultSchema: z.ZodAny;
export declare const ExperimentalTxStatusResultSchema: z.ZodAny;
