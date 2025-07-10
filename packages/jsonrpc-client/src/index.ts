/**
 * NEAR Protocol JSON-RPC Client
 */

export { NearJsonRpcClient } from './client';
export type { NearJsonRpcClientOptions } from './client';
export { NearJsonRpcError, NetworkError, ValidationError } from './errors';

// Export nearcore-generated client
export { NearJsonRpcClient as NearcoreClient } from './client-nearcore';
export type { NearJsonRpcClientConfig as NearcoreClientConfig } from './client-nearcore';

// Export validated client (recommended for production use)
export { NearRpcClient as ValidatedClient } from './client-validated';
export type { NearRpcClientConfig as ValidatedClientConfig } from './client-validated';
export { NearRpcError, NetworkError as ValidatedNetworkError, ValidationError as ValidatedValidationError } from './client-validated';