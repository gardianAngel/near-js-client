/**
 * Blocks-related methods for NEAR JSON-RPC client
 */

import {
  RpcBlockRequest,
  RpcBlockRequestSchema,
  RpcBlockResponse,
  RpcBlockResponseSchema,
  RpcChunkRequest,
  RpcChunkRequestSchema,
  RpcChunkResponse,
  RpcChunkResponseSchema,
  RpcEXPERIMENTALchangesinblockRequest,
  RpcEXPERIMENTALchangesinblockRequestSchema,
  RpcEXPERIMENTALchangesinblockResponse,
  RpcEXPERIMENTALchangesinblockResponseSchema,
  RpcEXPERIMENTALlightclientblockproofRequest,
  RpcEXPERIMENTALlightclientblockproofRequestSchema,
  RpcEXPERIMENTALlightclientblockproofResponse,
  RpcEXPERIMENTALlightclientblockproofResponseSchema,
  RpcNextlightclientblockRequest,
  RpcNextlightclientblockRequestSchema,
  RpcNextlightclientblockResponse,
  RpcNextlightclientblockResponseSchema
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class BlocksMethods {
  constructor(private client: NearJsonRpcClient) {}

  async changesinblock(params: RpcEXPERIMENTALchangesinblockRequest): Promise<RpcEXPERIMENTALchangesinblockResponse> {
    const validatedParams = RpcEXPERIMENTALchangesinblockRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALchangesinblock', validatedParams, RpcEXPERIMENTALchangesinblockResponseSchema);
  }

  async lightclientblockproof(params: RpcEXPERIMENTALlightclientblockproofRequest): Promise<RpcEXPERIMENTALlightclientblockproofResponse> {
    const validatedParams = RpcEXPERIMENTALlightclientblockproofRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALlightclientblockproof', validatedParams, RpcEXPERIMENTALlightclientblockproofResponseSchema);
  }

  async block(params: RpcBlockRequest): Promise<RpcBlockResponse> {
    const validatedParams = RpcBlockRequestSchema.parse(params);
    return this.client.makeRequest('Block', validatedParams, RpcBlockResponseSchema);
  }

  async chunk(params: RpcChunkRequest): Promise<RpcChunkResponse> {
    const validatedParams = RpcChunkRequestSchema.parse(params);
    return this.client.makeRequest('Chunk', validatedParams, RpcChunkResponseSchema);
  }

  async nextlightclientblock(params: RpcNextlightclientblockRequest): Promise<RpcNextlightclientblockResponse> {
    const validatedParams = RpcNextlightclientblockRequestSchema.parse(params);
    return this.client.makeRequest('Nextlightclientblock', validatedParams, RpcNextlightclientblockResponseSchema);
  }
}
