/**
 * @near-js/jsonrpc-types
 * 
 * TypeScript types and Zod schemas for NEAR Protocol JSON-RPC interface
 */

export { z } from 'zod';

// Export working validated types and schemas (generated from real API responses)
export * as ValidatedTypes from './types/validated-real-improved';
export * as ValidatedSchemas from './schemas/validated-improved';

// Re-export specific types for convenience
export type {
  StatusResponse,
  BlockResponse,
  GasPriceResponse,
  NetworkInfoResponse,
  QueryResponse,
  EXPERIMENTALProtocolConfigResponse,
  EXPERIMENTALGenesisConfigResponse,
  Finality,
  AccountId,
  PublicKey,
  CryptoHash,
  BlockHeight,
  BlockHash,
  JsonRpcRequest,
  JsonRpcResponse,
  JsonRpcError
} from './types/validated-real-improved';