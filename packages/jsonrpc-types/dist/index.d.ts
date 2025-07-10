/**
 * @near-js/jsonrpc-types
 *
 * TypeScript types and Zod schemas for NEAR Protocol JSON-RPC interface
 */
export { z } from 'zod';
export * as ValidatedTypes from './types/validated-real-improved';
export * as ValidatedSchemas from './schemas/validated-improved';
export type { StatusResponse, BlockResponse, GasPriceResponse, NetworkInfoResponse, QueryResponse, EXPERIMENTALProtocolConfigResponse, EXPERIMENTALGenesisConfigResponse, Finality, AccountId, PublicKey, CryptoHash, BlockHeight, BlockHash, JsonRpcRequest, JsonRpcResponse, JsonRpcError } from './types/validated-real-improved';
