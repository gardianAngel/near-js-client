/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
import { z } from 'zod';
export declare const BlockHeaderInnerLiteViewSchema: z.ZodObject<{
    blockMerkleRoot: z.ZodOptional<z.ZodUnknown>;
    epochId: z.ZodOptional<z.ZodUnknown>;
    height: z.ZodNumber;
    nextBpHash: z.ZodOptional<z.ZodUnknown>;
    nextEpochId: z.ZodOptional<z.ZodUnknown>;
    outcomeRoot: z.ZodOptional<z.ZodUnknown>;
    prevStateRoot: z.ZodOptional<z.ZodUnknown>;
    timestamp: z.ZodNumber;
    timestampNanosec: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    height: number;
    timestamp: number;
    epochId?: unknown;
    outcomeRoot?: unknown;
    prevStateRoot?: unknown;
    blockMerkleRoot?: unknown;
    nextBpHash?: unknown;
    nextEpochId?: unknown;
    timestampNanosec?: string | undefined;
}, {
    height: number;
    timestamp: number;
    epochId?: unknown;
    outcomeRoot?: unknown;
    prevStateRoot?: unknown;
    blockMerkleRoot?: unknown;
    nextBpHash?: unknown;
    nextEpochId?: unknown;
    timestampNanosec?: string | undefined;
}>;
export declare const BlockHeaderViewSchema: z.ZodObject<{
    approvals: z.ZodArray<z.ZodUnknown, "many">;
    blockBodyHash: z.ZodOptional<z.ZodUnknown>;
    blockMerkleRoot: z.ZodOptional<z.ZodUnknown>;
    blockOrdinal: z.ZodOptional<z.ZodNumber>;
    challengesResult: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    challengesRoot: z.ZodOptional<z.ZodUnknown>;
    chunkEndorsements: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodNumber, "many">, "many">>;
    chunkHeadersRoot: z.ZodOptional<z.ZodUnknown>;
    chunkMask: z.ZodOptional<z.ZodArray<z.ZodBoolean, "many">>;
    chunkReceiptsRoot: z.ZodOptional<z.ZodUnknown>;
    chunkTxRoot: z.ZodOptional<z.ZodUnknown>;
    chunksIncluded: z.ZodOptional<z.ZodNumber>;
    epochId: z.ZodOptional<z.ZodUnknown>;
    epochSyncDataHash: z.ZodOptional<z.ZodUnknown>;
    gasPrice: z.ZodOptional<z.ZodString>;
    hash: z.ZodUnknown;
    height: z.ZodNumber;
    lastDsFinalBlock: z.ZodOptional<z.ZodUnknown>;
    lastFinalBlock: z.ZodOptional<z.ZodUnknown>;
    latestProtocolVersion: z.ZodOptional<z.ZodNumber>;
    nextBpHash: z.ZodOptional<z.ZodUnknown>;
    nextEpochId: z.ZodOptional<z.ZodUnknown>;
    outcomeRoot: z.ZodOptional<z.ZodUnknown>;
    prevHash: z.ZodOptional<z.ZodUnknown>;
    prevHeight: z.ZodOptional<z.ZodNumber>;
    prevStateRoot: z.ZodOptional<z.ZodUnknown>;
    randomValue: z.ZodOptional<z.ZodUnknown>;
    rentPaid: z.ZodOptional<z.ZodString>;
    signature: z.ZodUnknown;
    timestamp: z.ZodNumber;
    timestampNanosec: z.ZodOptional<z.ZodString>;
    totalSupply: z.ZodOptional<z.ZodString>;
    validatorProposals: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    validatorReward: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    approvals: unknown[];
    height: number;
    timestamp: number;
    latestProtocolVersion?: number | undefined;
    epochId?: unknown;
    outcomeRoot?: unknown;
    prevStateRoot?: unknown;
    rentPaid?: string | undefined;
    signature?: unknown;
    validatorProposals?: unknown[] | undefined;
    validatorReward?: string | undefined;
    blockBodyHash?: unknown;
    blockMerkleRoot?: unknown;
    blockOrdinal?: number | undefined;
    challengesResult?: unknown[] | undefined;
    challengesRoot?: unknown;
    chunkEndorsements?: number[][] | undefined;
    chunkHeadersRoot?: unknown;
    chunkMask?: boolean[] | undefined;
    chunkReceiptsRoot?: unknown;
    chunkTxRoot?: unknown;
    chunksIncluded?: number | undefined;
    epochSyncDataHash?: unknown;
    gasPrice?: string | undefined;
    hash?: unknown;
    lastDsFinalBlock?: unknown;
    lastFinalBlock?: unknown;
    nextBpHash?: unknown;
    nextEpochId?: unknown;
    prevHash?: unknown;
    prevHeight?: number | undefined;
    randomValue?: unknown;
    timestampNanosec?: string | undefined;
    totalSupply?: string | undefined;
}, {
    approvals: unknown[];
    height: number;
    timestamp: number;
    latestProtocolVersion?: number | undefined;
    epochId?: unknown;
    outcomeRoot?: unknown;
    prevStateRoot?: unknown;
    rentPaid?: string | undefined;
    signature?: unknown;
    validatorProposals?: unknown[] | undefined;
    validatorReward?: string | undefined;
    blockBodyHash?: unknown;
    blockMerkleRoot?: unknown;
    blockOrdinal?: number | undefined;
    challengesResult?: unknown[] | undefined;
    challengesRoot?: unknown;
    chunkEndorsements?: number[][] | undefined;
    chunkHeadersRoot?: unknown;
    chunkMask?: boolean[] | undefined;
    chunkReceiptsRoot?: unknown;
    chunkTxRoot?: unknown;
    chunksIncluded?: number | undefined;
    epochSyncDataHash?: unknown;
    gasPrice?: string | undefined;
    hash?: unknown;
    lastDsFinalBlock?: unknown;
    lastFinalBlock?: unknown;
    nextBpHash?: unknown;
    nextEpochId?: unknown;
    prevHash?: unknown;
    prevHeight?: number | undefined;
    randomValue?: unknown;
    timestampNanosec?: string | undefined;
    totalSupply?: string | undefined;
}>;
export declare const BlockIdSchema: z.ZodUnknown;
export declare const BlockStatusViewSchema: z.ZodObject<{
    hash: z.ZodUnknown;
    height: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    height: number;
    hash?: unknown;
}, {
    height: number;
    hash?: unknown;
}>;
export declare const ChunkDistributionNetworkConfigSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    uris: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    uris?: unknown;
}, {
    enabled: boolean;
    uris?: unknown;
}>;
export declare const ChunkDistributionUrisSchema: z.ZodObject<{
    get: z.ZodString;
    set: z.ZodString;
}, "strip", z.ZodTypeAny, {
    set: string;
    get: string;
}, {
    set: string;
    get: string;
}>;
export declare const ChunkHeaderViewSchema: z.ZodObject<{
    balanceBurnt: z.ZodOptional<z.ZodString>;
    bandwidthRequests: z.ZodOptional<z.ZodUnknown>;
    chunkHash: z.ZodOptional<z.ZodUnknown>;
    congestionInfo: z.ZodOptional<z.ZodUnknown>;
    encodedLength: z.ZodOptional<z.ZodNumber>;
    encodedMerkleRoot: z.ZodOptional<z.ZodUnknown>;
    gasLimit: z.ZodOptional<z.ZodNumber>;
    gasUsed: z.ZodOptional<z.ZodNumber>;
    heightCreated: z.ZodOptional<z.ZodNumber>;
    heightIncluded: z.ZodOptional<z.ZodNumber>;
    outcomeRoot: z.ZodOptional<z.ZodUnknown>;
    outgoingReceiptsRoot: z.ZodOptional<z.ZodUnknown>;
    prevBlockHash: z.ZodOptional<z.ZodUnknown>;
    prevStateRoot: z.ZodOptional<z.ZodUnknown>;
    rentPaid: z.ZodOptional<z.ZodString>;
    shardId: z.ZodOptional<z.ZodUnknown>;
    signature: z.ZodUnknown;
    txRoot: z.ZodOptional<z.ZodUnknown>;
    validatorProposals: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    validatorReward: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    balanceBurnt?: string | undefined;
    chunkHash?: unknown;
    encodedLength?: number | undefined;
    encodedMerkleRoot?: unknown;
    gasLimit?: number | undefined;
    gasUsed?: number | undefined;
    heightCreated?: number | undefined;
    heightIncluded?: number | undefined;
    outcomeRoot?: unknown;
    outgoingReceiptsRoot?: unknown;
    prevBlockHash?: unknown;
    prevStateRoot?: unknown;
    rentPaid?: string | undefined;
    shardId?: unknown;
    signature?: unknown;
    txRoot?: unknown;
    validatorProposals?: unknown[] | undefined;
    validatorReward?: string | undefined;
    bandwidthRequests?: unknown;
    congestionInfo?: unknown;
}, {
    balanceBurnt?: string | undefined;
    chunkHash?: unknown;
    encodedLength?: number | undefined;
    encodedMerkleRoot?: unknown;
    gasLimit?: number | undefined;
    gasUsed?: number | undefined;
    heightCreated?: number | undefined;
    heightIncluded?: number | undefined;
    outcomeRoot?: unknown;
    outgoingReceiptsRoot?: unknown;
    prevBlockHash?: unknown;
    prevStateRoot?: unknown;
    rentPaid?: string | undefined;
    shardId?: unknown;
    signature?: unknown;
    txRoot?: unknown;
    validatorProposals?: unknown[] | undefined;
    validatorReward?: string | undefined;
    bandwidthRequests?: unknown;
    congestionInfo?: unknown;
}>;
export declare const JsonRpcRequestForEXPERIMENTALChangesInBlockSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_changes_in_block"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "EXPERIMENTAL_changes_in_block";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "EXPERIMENTAL_changes_in_block";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForEXPERIMENTALLightClientBlockProofSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_light_client_block_proof"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "EXPERIMENTAL_light_client_block_proof";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "EXPERIMENTAL_light_client_block_proof";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForBlockSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["block"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "block";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "block";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForChunkSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["chunk"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "chunk";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "chunk";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestForNextLightClientBlockSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["next_light_client_block"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "next_light_client_block";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "next_light_client_block";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcResponseForRpcBlockResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseForRpcChunkResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseForRpcLightClientBlockProofResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseForRpcLightClientNextBlockResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseForRpcStateChangesInBlockByTypeResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseForRpcStateChangesInBlockResponseAndRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const LightClientBlockLiteViewSchema: z.ZodObject<{
    innerLite: z.ZodOptional<z.ZodUnknown>;
    innerRestHash: z.ZodOptional<z.ZodUnknown>;
    prevBlockHash: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    prevBlockHash?: unknown;
    innerLite?: unknown;
    innerRestHash?: unknown;
}, {
    prevBlockHash?: unknown;
    innerLite?: unknown;
    innerRestHash?: unknown;
}>;
export declare const RpcBlockRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcBlockResponseSchema: z.ZodObject<{
    author: z.ZodUnknown;
    chunks: z.ZodArray<z.ZodUnknown, "many">;
    header: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    chunks: unknown[];
    author?: unknown;
    header?: unknown;
}, {
    chunks: unknown[];
    author?: unknown;
    header?: unknown;
}>;
export declare const RpcChunkRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcChunkResponseSchema: z.ZodObject<{
    author: z.ZodUnknown;
    header: z.ZodUnknown;
    receipts: z.ZodArray<z.ZodUnknown, "many">;
    transactions: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    receipts: unknown[];
    transactions: unknown[];
    author?: unknown;
    header?: unknown;
}, {
    receipts: unknown[];
    transactions: unknown[];
    author?: unknown;
    header?: unknown;
}>;
export declare const RpcLightClientBlockProofRequestSchema: z.ZodObject<{
    blockHash: z.ZodOptional<z.ZodUnknown>;
    lightClientHead: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    blockHash?: unknown;
    lightClientHead?: unknown;
}, {
    blockHash?: unknown;
    lightClientHead?: unknown;
}>;
export declare const RpcLightClientBlockProofResponseSchema: z.ZodObject<{
    blockHeaderLite: z.ZodOptional<z.ZodUnknown>;
    blockProof: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    blockHeaderLite?: unknown;
    blockProof?: unknown[] | undefined;
}, {
    blockHeaderLite?: unknown;
    blockProof?: unknown[] | undefined;
}>;
export declare const RpcLightClientNextBlockRequestSchema: z.ZodObject<{
    lastBlockHash: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    lastBlockHash?: unknown;
}, {
    lastBlockHash?: unknown;
}>;
export declare const RpcLightClientNextBlockResponseSchema: z.ZodObject<{
    approvalsAfterNext: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    innerLite: z.ZodOptional<z.ZodUnknown>;
    innerRestHash: z.ZodOptional<z.ZodUnknown>;
    nextBlockInnerHash: z.ZodOptional<z.ZodUnknown>;
    nextBps: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    prevBlockHash: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    prevBlockHash?: unknown;
    innerLite?: unknown;
    innerRestHash?: unknown;
    approvalsAfterNext?: unknown[] | undefined;
    nextBlockInnerHash?: unknown;
    nextBps?: unknown[] | undefined;
}, {
    prevBlockHash?: unknown;
    innerLite?: unknown;
    innerRestHash?: unknown;
    approvalsAfterNext?: unknown[] | undefined;
    nextBlockInnerHash?: unknown;
    nextBps?: unknown[] | undefined;
}>;
export declare const RpcStateChangesInBlockByTypeRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcStateChangesInBlockByTypeResponseSchema: z.ZodObject<{
    blockHash: z.ZodOptional<z.ZodUnknown>;
    changes: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    changes: unknown[];
    blockHash?: unknown;
}, {
    changes: unknown[];
    blockHash?: unknown;
}>;
export declare const RpcStateChangesInBlockRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcStateChangesInBlockResponseSchema: z.ZodObject<{
    blockHash: z.ZodOptional<z.ZodUnknown>;
    changes: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    changes: unknown[];
    blockHash?: unknown;
}, {
    changes: unknown[];
    blockHash?: unknown;
}>;
