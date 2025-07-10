/**
 * NEAR Protocol JSON-RPC Client
 */

export { NearJsonRpcClient } from './client';
export type { NearJsonRpcClientOptions } from './client';
export { NearJsonRpcError, NetworkError, ValidationError } from './errors';

// Export nearcore-generated client
export { NearJsonRpcClient as NearcoreClient } from './client-nearcore';
export type { NearJsonRpcClientConfig as NearcoreClientConfig } from './client-nearcore';