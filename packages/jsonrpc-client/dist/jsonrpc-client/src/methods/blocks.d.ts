/**
 * Block-related methods for NEAR JSON-RPC client
 */
import type { NearJsonRpcClient } from '../client';
export declare class BlockMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    /**
     * Get block details
     */
    block(params: {
        block_id?: string | number;
        finality?: 'final' | 'optimistic';
    }): Promise<any>;
    /**
     * Get latest block
     */
    getLatestBlock(): Promise<any>;
    /**
     * Get block changes
     */
    blockChanges(params: {
        block_id?: string | number;
        finality?: 'final' | 'optimistic';
    }): Promise<any>;
    /**
     * Get chunk details
     */
    chunk(params: {
        chunk_id?: string;
        block_id?: string | number;
        shard_id?: number;
    }): Promise<any>;
}
