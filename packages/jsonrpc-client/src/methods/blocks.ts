/**
 * Block-related methods for NEAR JSON-RPC client
 */

import { z } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class BlockMethods {
  constructor(private client: NearJsonRpcClient) {}

  /**
   * Get block details
   */
  async block(params: { block_id?: string | number; finality?: 'final' | 'optimistic' }): Promise<any> {
    return this.client.makeRequest('block', params, z.any());
  }

  /**
   * Get latest block
   */
  async getLatestBlock(): Promise<any> {
    return this.client.makeRequest('block', { finality: 'final' }, z.any());
  }

  /**
   * Get block changes
   */
  async blockChanges(params: { block_id?: string | number; finality?: 'final' | 'optimistic' }): Promise<any> {
    return this.client.makeRequest('EXPERIMENTAL_changes_in_block', params, z.any());
  }

  /**
   * Get chunk details
   */
  async chunk(params: { chunk_id?: string; block_id?: string | number; shard_id?: number }): Promise<any> {
    return this.client.makeRequest('chunk', params, z.any());
  }
}