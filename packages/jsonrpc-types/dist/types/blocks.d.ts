/**
 * Generated types for NEAR Protocol JSON-RPC
 */
import { AccountId, CryptoHash } from './common';
export interface BlockHeaderInnerLiteView {
    blockMerkleRoot?: CryptoHash;
    epochId?: CryptoHash;
    height: number;
    nextBpHash?: CryptoHash;
    nextEpochId?: CryptoHash;
    outcomeRoot?: CryptoHash;
    prevStateRoot?: CryptoHash;
    timestamp: number;
    timestampNanosec?: string;
}
export interface BlockHeaderView {
    approvals: unknown[];
    blockBodyHash?: unknown;
    blockMerkleRoot?: CryptoHash;
    blockOrdinal?: number;
    challengesResult?: SlashedValidator[];
    challengesRoot?: CryptoHash;
    chunkEndorsements?: number[][];
    chunkHeadersRoot?: CryptoHash;
    chunkMask?: boolean[];
    chunkReceiptsRoot?: CryptoHash;
    chunkTxRoot?: CryptoHash;
    chunksIncluded?: number;
    epochId?: CryptoHash;
    epochSyncDataHash?: unknown;
    gasPrice?: string;
    hash: CryptoHash;
    height: number;
    lastDsFinalBlock?: CryptoHash;
    lastFinalBlock?: CryptoHash;
    latestProtocolVersion?: number;
    nextBpHash?: CryptoHash;
    nextEpochId?: CryptoHash;
    outcomeRoot?: CryptoHash;
    prevHash?: CryptoHash;
    prevHeight?: number;
    prevStateRoot?: CryptoHash;
    randomValue?: CryptoHash;
    rentPaid?: string;
    signature: Signature;
    timestamp: number;
    timestampNanosec?: string;
    totalSupply?: string;
    validatorProposals?: ValidatorStakeView[];
    validatorReward?: string;
}
export type BlockId = unknown;
export interface BlockStatusView {
    hash: CryptoHash;
    height: number;
}
export interface ChunkDistributionNetworkConfig {
    enabled: boolean;
    uris: ChunkDistributionUris;
}
export interface ChunkDistributionUris {
    get: string;
    set: string;
}
export interface ChunkHeaderView {
    balanceBurnt?: string;
    bandwidthRequests?: unknown;
    chunkHash?: CryptoHash;
    congestionInfo?: unknown;
    encodedLength?: number;
    encodedMerkleRoot?: CryptoHash;
    gasLimit?: number;
    gasUsed?: number;
    heightCreated?: number;
    heightIncluded?: number;
    outcomeRoot?: CryptoHash;
    outgoingReceiptsRoot?: CryptoHash;
    prevBlockHash?: CryptoHash;
    prevStateRoot?: CryptoHash;
    rentPaid?: string;
    shardId?: ShardId;
    signature: Signature;
    txRoot?: CryptoHash;
    validatorProposals?: ValidatorStakeView[];
    validatorReward?: string;
}
export interface JsonRpcRequestForEXPERIMENTALChangesInBlock {
    id: string;
    jsonrpc: string;
    method: 'EXPERIMENTAL_changes_in_block';
    params: RpcStateChangesInBlockRequest;
}
export interface JsonRpcRequestForEXPERIMENTALLightClientBlockProof {
    id: string;
    jsonrpc: string;
    method: 'EXPERIMENTAL_light_client_block_proof';
    params: RpcLightClientBlockProofRequest;
}
export interface JsonRpcRequestForBlock {
    id: string;
    jsonrpc: string;
    method: 'block';
    params: RpcBlockRequest;
}
export interface JsonRpcRequestForChunk {
    id: string;
    jsonrpc: string;
    method: 'chunk';
    params: RpcChunkRequest;
}
export interface JsonRpcRequestForNextLightClientBlock {
    id: string;
    jsonrpc: string;
    method: 'next_light_client_block';
    params: RpcLightClientNextBlockRequest;
}
export interface JsonRpcResponseForRpcBlockResponseAndRpcError {
    id: string;
    jsonrpc: string;
}
export interface JsonRpcResponseForRpcChunkResponseAndRpcError {
    id: string;
    jsonrpc: string;
}
export interface JsonRpcResponseForRpcLightClientBlockProofResponseAndRpcError {
    id: string;
    jsonrpc: string;
}
export interface JsonRpcResponseForRpcLightClientNextBlockResponseAndRpcError {
    id: string;
    jsonrpc: string;
}
export interface JsonRpcResponseForRpcStateChangesInBlockByTypeResponseAndRpcError {
    id: string;
    jsonrpc: string;
}
export interface JsonRpcResponseForRpcStateChangesInBlockResponseAndRpcError {
    id: string;
    jsonrpc: string;
}
export interface LightClientBlockLiteView {
    innerLite?: BlockHeaderInnerLiteView;
    innerRestHash?: CryptoHash;
    prevBlockHash?: CryptoHash;
}
export interface RpcBlockRequest {
}
export interface RpcBlockResponse {
    author: AccountId;
    chunks: ChunkHeaderView[];
    header: BlockHeaderView;
}
export interface RpcChunkRequest {
}
export interface RpcChunkResponse {
    author: AccountId;
    header: ChunkHeaderView;
    receipts: ReceiptView[];
    transactions: SignedTransactionView[];
}
export interface RpcLightClientBlockProofRequest {
    blockHash?: CryptoHash;
    lightClientHead?: CryptoHash;
}
export interface RpcLightClientBlockProofResponse {
    blockHeaderLite?: LightClientBlockLiteView;
    blockProof?: MerklePathItem[];
}
export interface RpcLightClientNextBlockRequest {
    lastBlockHash?: CryptoHash;
}
export interface RpcLightClientNextBlockResponse {
    approvalsAfterNext?: unknown[];
    innerLite?: BlockHeaderInnerLiteView;
    innerRestHash?: CryptoHash;
    nextBlockInnerHash?: CryptoHash;
    nextBps?: ValidatorStakeView[];
    prevBlockHash?: CryptoHash;
}
export interface RpcStateChangesInBlockByTypeRequest {
}
export interface RpcStateChangesInBlockByTypeResponse {
    blockHash?: CryptoHash;
    changes: StateChangeKindView[];
}
export interface RpcStateChangesInBlockRequest {
}
export interface RpcStateChangesInBlockResponse {
    blockHash?: CryptoHash;
    changes: StateChangeWithCauseView[];
}
