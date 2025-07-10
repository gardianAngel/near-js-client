/**
 * @near-js/jsonrpc-types
 * 
 * TypeScript types and Zod schemas for NEAR Protocol JSON-RPC interface
 */

export { z } from 'zod';

// Export working validated types and schemas (generated from real API responses)
export * as ValidatedTypes from './types/validated-real-improved';
export * as ValidatedSchemas from './schemas/validated-improved';