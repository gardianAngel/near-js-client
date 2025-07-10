/**
 * Blocks-related methods for NEAR JSON-RPC client
 */
import { RpcBlockRequest, RpcBlockResponse, RpcChunkRequest, RpcChunkResponse, RpcEXPERIMENTALChangesInBlockRequest, RpcEXPERIMENTALChangesInBlockResponse, RpcEXPERIMENTALLightClientBlockProofRequest, RpcEXPERIMENTALLightClientBlockProofResponse, RpcNextLightClientBlockRequest, RpcNextLightClientBlockResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class BlocksMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    changesInBlock(params: RpcEXPERIMENTALChangesInBlockRequest): Promise<RpcEXPERIMENTALChangesInBlockResponse>;
    lightClientBlockProof(params: RpcEXPERIMENTALLightClientBlockProofRequest): Promise<RpcEXPERIMENTALLightClientBlockProofResponse>;
    block(params: RpcBlockRequest): Promise<RpcBlockResponse>;
    chunk(params: RpcChunkRequest): Promise<RpcChunkResponse>;
    nextLightClientBlock(params: RpcNextLightClientBlockRequest): Promise<RpcNextLightClientBlockResponse>;
    getLatestBlock(): Promise<RpcBlockResponse>;
}
