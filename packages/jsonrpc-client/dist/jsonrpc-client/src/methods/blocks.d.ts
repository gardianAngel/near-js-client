/**
 * Blocks-related methods for NEAR JSON-RPC client
 */
import { BlockResponse, ChangesinblockResponse, ChunkResponse, LightclientblockproofResponse, NextlightclientblockResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class BlocksMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    changesinblock(params: ChangesinblockQuery): Promise<ChangesinblockResponse>;
    lightclientblockproof(params: LightclientblockproofQuery): Promise<LightclientblockproofResponse>;
    block(params: BlockQuery): Promise<BlockResponse>;
    chunk(params: ChunkQuery): Promise<ChunkResponse>;
    nextlightclientblock(params: NextlightclientblockQuery): Promise<NextlightclientblockResponse>;
}
