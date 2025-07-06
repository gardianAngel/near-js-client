/**
 * Error classes for NEAR JSON-RPC client
 */
import { z } from 'zod';
/**
 * Base error class for all NEAR JSON-RPC client errors
 * Note: NEAR team confirmed error responses contain more data than OpenAPI spec indicates
 */
export declare class NearJsonRpcError extends Error {
    readonly code: number;
    readonly data?: unknown;
    constructor(message: string, code?: number, data?: unknown);
}
/**
 * Network-related errors (connection, timeout, etc.)
 */
export declare class NetworkError extends NearJsonRpcError {
    readonly statusCode: number;
    constructor(message: string, statusCode: number);
}
/**
 * Validation errors for input parameters or responses
 */
export declare class ValidationError extends NearJsonRpcError {
    readonly validationErrors: z.ZodIssue[];
    constructor(message: string, validationErrors: z.ZodIssue[]);
}
/**
 * Transaction-related errors
 */
export declare class TransactionError extends NearJsonRpcError {
    readonly transactionHash?: string;
    constructor(message: string, transactionHash?: string, data?: unknown);
}
/**
 * Account-related errors
 */
export declare class AccountError extends NearJsonRpcError {
    readonly accountId?: string;
    constructor(message: string, accountId?: string, data?: unknown);
}
/**
 * Block-related errors
 */
export declare class BlockError extends NearJsonRpcError {
    readonly blockId?: string | number;
    constructor(message: string, blockId?: string | number, data?: unknown);
}
/**
 * Check if error is a NEAR JSON-RPC error
 */
export declare function isNearJsonRpcError(error: unknown): error is NearJsonRpcError;
/**
 * Check if error is a network error
 */
export declare function isNetworkError(error: unknown): error is NetworkError;
/**
 * Check if error is a validation error
 */
export declare function isValidationError(error: unknown): error is ValidationError;
/**
 * Check if error is a transaction error
 */
export declare function isTransactionError(error: unknown): error is TransactionError;
/**
 * Check if error is an account error
 */
export declare function isAccountError(error: unknown): error is AccountError;
/**
 * Check if error is a block error
 */
export declare function isBlockError(error: unknown): error is BlockError;
/**
 * Format error for logging
 */
export declare function formatError(error: unknown): string;
