/**
 * Blocks-related methods for NEAR JSON-RPC client
 */

import {
  BlockQuerySchema,
  BlockRequest,
  BlockResponse,
  BlockResponseSchema,
  ChangesinblockQuerySchema,
  ChangesinblockRequest,
  ChangesinblockResponse,
  ChangesinblockResponseSchema,
  ChunkQuerySchema,
  ChunkRequest,
  ChunkResponse,
  ChunkResponseSchema,
  LightclientblockproofQuerySchema,
  LightclientblockproofRequest,
  LightclientblockproofResponse,
  LightclientblockproofResponseSchema,
  NextlightclientblockQuerySchema,
  NextlightclientblockRequest,
  NextlightclientblockResponse,
  NextlightclientblockResponseSchema
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class BlocksMethods {
  constructor(private client: NearJsonRpcClient) {}

  async changesinblock(params: ChangesinblockQuery): Promise<ChangesinblockResponse> {
    const validatedParams = ChangesinblockQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALchangesinblock', validatedParams, ChangesinblockResponseSchema);
  }

  async lightclientblockproof(params: LightclientblockproofQuery): Promise<LightclientblockproofResponse> {
    const validatedParams = LightclientblockproofQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALlightclientblockproof', validatedParams, LightclientblockproofResponseSchema);
  }

  async block(params: BlockQuery): Promise<BlockResponse> {
    const validatedParams = BlockQuerySchema.parse(params);
    return this.client.makeRequest('Block', validatedParams, BlockResponseSchema);
  }

  async chunk(params: ChunkQuery): Promise<ChunkResponse> {
    const validatedParams = ChunkQuerySchema.parse(params);
    return this.client.makeRequest('Chunk', validatedParams, ChunkResponseSchema);
  }

  async nextlightclientblock(params: NextlightclientblockQuery): Promise<NextlightclientblockResponse> {
    const validatedParams = NextlightclientblockQuerySchema.parse(params);
    return this.client.makeRequest('Nextlightclientblock', validatedParams, NextlightclientblockResponseSchema);
  }
}
