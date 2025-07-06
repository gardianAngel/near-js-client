"use strict";
/**
 * Error classes for NEAR JSON-RPC client
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockError = exports.AccountError = exports.TransactionError = exports.ValidationError = exports.NetworkError = exports.NearJsonRpcError = void 0;
exports.isNearJsonRpcError = isNearJsonRpcError;
exports.isNetworkError = isNetworkError;
exports.isValidationError = isValidationError;
exports.isTransactionError = isTransactionError;
exports.isAccountError = isAccountError;
exports.isBlockError = isBlockError;
exports.formatError = formatError;
/**
 * Base error class for all NEAR JSON-RPC client errors
 * Note: NEAR team confirmed error responses contain more data than OpenAPI spec indicates
 */
class NearJsonRpcError extends Error {
    code;
    data;
    constructor(message, code = -32603, data) {
        super(message);
        this.name = 'NearJsonRpcError';
        this.code = code;
        // Store all additional error data from server (beyond what spec describes)
        this.data = data;
    }
}
exports.NearJsonRpcError = NearJsonRpcError;
/**
 * Network-related errors (connection, timeout, etc.)
 */
class NetworkError extends NearJsonRpcError {
    statusCode;
    constructor(message, statusCode) {
        super(message, -32000);
        this.name = 'NetworkError';
        this.statusCode = statusCode;
    }
}
exports.NetworkError = NetworkError;
/**
 * Validation errors for input parameters or responses
 */
class ValidationError extends NearJsonRpcError {
    validationErrors;
    constructor(message, validationErrors) {
        super(message, -32602);
        this.name = 'ValidationError';
        this.validationErrors = validationErrors;
    }
}
exports.ValidationError = ValidationError;
/**
 * Transaction-related errors
 */
class TransactionError extends NearJsonRpcError {
    transactionHash;
    constructor(message, transactionHash, data) {
        super(message, -32001, data);
        this.name = 'TransactionError';
        this.transactionHash = transactionHash;
    }
}
exports.TransactionError = TransactionError;
/**
 * Account-related errors
 */
class AccountError extends NearJsonRpcError {
    accountId;
    constructor(message, accountId, data) {
        super(message, -32002, data);
        this.name = 'AccountError';
        this.accountId = accountId;
    }
}
exports.AccountError = AccountError;
/**
 * Block-related errors
 */
class BlockError extends NearJsonRpcError {
    blockId;
    constructor(message, blockId, data) {
        super(message, -32003, data);
        this.name = 'BlockError';
        this.blockId = blockId;
    }
}
exports.BlockError = BlockError;
/**
 * Check if error is a NEAR JSON-RPC error
 */
function isNearJsonRpcError(error) {
    return error instanceof NearJsonRpcError;
}
/**
 * Check if error is a network error
 */
function isNetworkError(error) {
    return error instanceof NetworkError;
}
/**
 * Check if error is a validation error
 */
function isValidationError(error) {
    return error instanceof ValidationError;
}
/**
 * Check if error is a transaction error
 */
function isTransactionError(error) {
    return error instanceof TransactionError;
}
/**
 * Check if error is an account error
 */
function isAccountError(error) {
    return error instanceof AccountError;
}
/**
 * Check if error is a block error
 */
function isBlockError(error) {
    return error instanceof BlockError;
}
/**
 * Format error for logging
 */
function formatError(error) {
    if (isNearJsonRpcError(error)) {
        return `${error.name}: ${error.message} (Code: ${error.code})`;
    }
    if (error instanceof Error) {
        return `${error.name}: ${error.message}`;
    }
    return String(error);
}
