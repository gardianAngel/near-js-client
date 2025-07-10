/**
 * NEAR Protocol JSON-RPC Client
 */

// Export working validated client (recommended for production use)
export { NearRpcClient } from './client-clean';
export type { NearRpcClientConfig } from './client-clean';
export { NearRpcError, NetworkError } from './client-clean';