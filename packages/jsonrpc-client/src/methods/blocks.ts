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
  RpcEXPERIMENTALChangesInBlockRequest,
  RpcEXPERIMENTALChangesInBlockRequestSchema,
  RpcEXPERIMENTALChangesInBlockResponse,
  RpcEXPERIMENTALChangesInBlockResponseSchema,
  RpcEXPERIMENTALLightClientBlockProofRequest,
  RpcEXPERIMENTALLightClientBlockProofRequestSchema,
  RpcEXPERIMENTALLightClientBlockProofResponse,
  RpcEXPERIMENTALLightClientBlockProofResponseSchema,
  RpcNextLightClientBlockRequest,
  RpcNextLightClientBlockRequestSchema,
  RpcNextLightClientBlockResponse,
  RpcNextLightClientBlockResponseSchema
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class BlocksMethods {
  constructor(private client: NearJsonRpcClient) {}

  async changesInBlock(params: RpcEXPERIMENTALChangesInBlockRequest): Promise<RpcEXPERIMENTALChangesInBlockResponse> {
    const validatedParams = RpcEXPERIMENTALChangesInBlockRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALChangesInBlock', validatedParams, RpcEXPERIMENTALChangesInBlockResponseSchema) as Promise<RpcEXPERIMENTALChangesInBlockResponse>;
  }

  async lightClientBlockProof(params: RpcEXPERIMENTALLightClientBlockProofRequest): Promise<RpcEXPERIMENTALLightClientBlockProofResponse> {
    const validatedParams = RpcEXPERIMENTALLightClientBlockProofRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALLightClientBlockProof', validatedParams, RpcEXPERIMENTALLightClientBlockProofResponseSchema) as Promise<RpcEXPERIMENTALLightClientBlockProofResponse>;
  }

  async block(params: RpcBlockRequest): Promise<RpcBlockResponse> {
    const validatedParams = RpcBlockRequestSchema.parse(params);
    return this.client.makeRequest('block', validatedParams, RpcBlockResponseSchema) as Promise<RpcBlockResponse>;
  }

  async chunk(params: RpcChunkRequest): Promise<RpcChunkResponse> {
    const validatedParams = RpcChunkRequestSchema.parse(params);
    return this.client.makeRequest('chunk', validatedParams, RpcChunkResponseSchema) as Promise<RpcChunkResponse>;
  }

  async nextLightClientBlock(params: RpcNextLightClientBlockRequest): Promise<RpcNextLightClientBlockResponse> {
    const validatedParams = RpcNextLightClientBlockRequestSchema.parse(params);
    return this.client.makeRequest('nextLightClientBlock', validatedParams, RpcNextLightClientBlockResponseSchema) as Promise<RpcNextLightClientBlockResponse>;
  }
}
