/**
 * Error classes for NEAR JSON-RPC client
 */

import { z } from 'zod';

/**
 * Base error class for all NEAR JSON-RPC client errors
 * Note: NEAR team confirmed error responses contain more data than OpenAPI spec indicates
 */
export class NearJsonRpcError extends Error {
  public readonly code: number;
  public readonly data?: unknown;

  constructor(message: string, code: number = -32603, data?: unknown) {
    super(message);
    this.name = 'NearJsonRpcError';
    this.code = code;
    // Store all additional error data from server (beyond what spec describes)
    this.data = data;
  }
}

/**
 * Network-related errors (connection, timeout, etc.)
 */
export class NetworkError extends NearJsonRpcError {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message, -32000);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

/**
 * Validation errors for input parameters or responses
 */
export class ValidationError extends NearJsonRpcError {
  public readonly validationErrors: z.ZodIssue[];

  constructor(message: string, validationErrors: z.ZodIssue[]) {
    super(message, -32602);
    this.name = 'ValidationError';
    this.validationErrors = validationErrors;
  }
}

/**
 * Transaction-related errors
 */
export class TransactionError extends NearJsonRpcError {
  public readonly transactionHash?: string;

  constructor(message: string, transactionHash?: string, data?: unknown) {
    super(message, -32001, data);
    this.name = 'TransactionError';
    this.transactionHash = transactionHash;
  }
}

/**
 * Account-related errors
 */
export class AccountError extends NearJsonRpcError {
  public readonly accountId?: string;

  constructor(message: string, accountId?: string, data?: unknown) {
    super(message, -32002, data);
    this.name = 'AccountError';
    this.accountId = accountId;
  }
}

/**
 * Block-related errors
 */
export class BlockError extends NearJsonRpcError {
  public readonly blockId?: string | number;

  constructor(message: string, blockId?: string | number, data?: unknown) {
    super(message, -32003, data);
    this.name = 'BlockError';
    this.blockId = blockId;
  }
}

/**
 * Check if error is a NEAR JSON-RPC error
 */
export function isNearJsonRpcError(error: unknown): error is NearJsonRpcError {
  return error instanceof NearJsonRpcError;
}

/**
 * Check if error is a network error
 */
export function isNetworkError(error: unknown): error is NetworkError {
  return error instanceof NetworkError;
}

/**
 * Check if error is a validation error
 */
export function isValidationError(error: unknown): error is ValidationError {
  return error instanceof ValidationError;
}

/**
 * Check if error is a transaction error
 */
export function isTransactionError(error: unknown): error is TransactionError {
  return error instanceof TransactionError;
}

/**
 * Check if error is an account error
 */
export function isAccountError(error: unknown): error is AccountError {
  return error instanceof AccountError;
}

/**
 * Check if error is a block error
 */
export function isBlockError(error: unknown): error is BlockError {
  return error instanceof BlockError;
}

/**
 * Format error for logging
 */
export function formatError(error: unknown): string {
  if (isNearJsonRpcError(error)) {
    return `${error.name}: ${error.message} (Code: ${error.code})`;
  }
  if (error instanceof Error) {
    return `${error.name}: ${error.message}`;
  }
  return String(error);
}
