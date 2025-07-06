/**
 * Blocks-related methods for NEAR JSON-RPC client
 */
import { RpcBlockRequest, RpcBlockResponse, RpcChunkRequest, RpcChunkResponse, RpcEXPERIMENTALchangesinblockRequest, RpcEXPERIMENTALchangesinblockResponse, RpcEXPERIMENTALlightclientblockproofRequest, RpcEXPERIMENTALlightclientblockproofResponse, RpcNextlightclientblockRequest, RpcNextlightclientblockResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class BlocksMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    changesinblock(params: RpcEXPERIMENTALchangesinblockRequest): Promise<RpcEXPERIMENTALchangesinblockResponse>;
    lightclientblockproof(params: RpcEXPERIMENTALlightclientblockproofRequest): Promise<RpcEXPERIMENTALlightclientblockproofResponse>;
    block(params: RpcBlockRequest): Promise<RpcBlockResponse>;
    chunk(params: RpcChunkRequest): Promise<RpcChunkResponse>;
    nextlightclientblock(params: RpcNextlightclientblockRequest): Promise<RpcNextlightclientblockResponse>;
}
