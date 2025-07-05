/**
 * Block-related methods for NEAR JSON-RPC client
 */

import {
  BlockQuery,
  BlockResponse,
  BlockQuerySchema,
  BlockResponseSchema,
  ChunkQuery,
  ChunkResponse,
  ChunkQuerySchema,
  ChunkResponseSchema,
  BlockChangesQuery,
  BlockChangesResponse,
  BlockChangesQuerySchema,
  BlockChangesResponseSchema,
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class BlockMethods {
  constructor(private client: NearJsonRpcClient) {}

  /**
   * Get block information
   */
  async getBlock(params: BlockQuery): Promise<BlockResponse> {
    const validatedParams = BlockQuerySchema.parse(params);
    return this.client.makeRequest('block', validatedParams, BlockResponseSchema);
  }

  /**
   * Get chunk information
   */
  async getChunk(params: ChunkQuery): Promise<ChunkResponse> {
    const validatedParams = ChunkQuerySchema.parse(params);
    return this.client.makeRequest('chunk', validatedParams, ChunkResponseSchema);
  }

  /**
   * Get block changes
   */
  async getBlockChanges(params: BlockChangesQuery): Promise<BlockChangesResponse> {
    const validatedParams = BlockChangesQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTAL_changes_in_block', validatedParams, BlockChangesResponseSchema);
  }

  /**
   * Get latest block
   */
  async getLatestBlock(): Promise<BlockResponse> {
    return this.getBlock({ finality: 'final' });
  }

  /**
   * Get block by height
   */
  async getBlockByHeight(height: number): Promise<BlockResponse> {
    return this.getBlock({ blockId: height });
  }

  /**
   * Get block by hash
   */
  async getBlockByHash(hash: string): Promise<BlockResponse> {
    return this.getBlock({ blockId: hash });
  }
}
