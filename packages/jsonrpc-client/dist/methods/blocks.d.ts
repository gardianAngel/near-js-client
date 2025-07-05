/**
 * Block-related methods for NEAR JSON-RPC client
 */
import { BlockQuery, BlockResponse, ChunkQuery, ChunkResponse, BlockChangesQuery, BlockChangesResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class BlockMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    /**
     * Get block information
     */
    getBlock(params: BlockQuery): Promise<BlockResponse>;
    /**
     * Get chunk information
     */
    getChunk(params: ChunkQuery): Promise<ChunkResponse>;
    /**
     * Get block changes
     */
    getBlockChanges(params: BlockChangesQuery): Promise<BlockChangesResponse>;
    /**
     * Get latest block
     */
    getLatestBlock(): Promise<BlockResponse>;
    /**
     * Get block by height
     */
    getBlockByHeight(height: number): Promise<BlockResponse>;
    /**
     * Get block by hash
     */
    getBlockByHash(hash: string): Promise<BlockResponse>;
}
