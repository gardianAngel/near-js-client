"use strict";
/**
 * NEAR Protocol JSON-RPC Client
 *
 * Production-ready TypeScript client with proper RPC path behavior
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkError = exports.NearRpcError = exports.NearRpcClient = void 0;
class NearRpcClient {
    endpoint;
    headers;
    timeout;
    retryAttempts;
    retryDelay;
    requestId;
    constructor(config) {
        this.endpoint = config.endpoint.replace(/\/$/, '');
        this.headers = config.headers || {};
        this.timeout = config.timeout || 30000;
        this.retryAttempts = config.retryAttempts || 3;
        this.retryDelay = config.retryDelay || 1000;
        this.requestId = 0;
    }
    async request(method, params = {}) {
        const request = {
            jsonrpc: '2.0',
            method,
            params: this.convertToSnakeCase(params),
            id: ++this.requestId,
        };
        let lastError = null;
        for (let attempt = 0; attempt < this.retryAttempts; attempt++) {
            try {
                const response = await this.httpRequest(request);
                if (response.error) {
                    throw new NearRpcError(response.error.code, response.error.message, response.error.data);
                }
                return this.convertToCamelCase(response.result);
            }
            catch (error) {
                lastError = error;
                if (error instanceof NearRpcError) {
                    throw error;
                }
                if (attempt < this.retryAttempts - 1) {
                    await this.delay(this.retryDelay * Math.pow(2, attempt));
                }
            }
        }
        throw lastError;
    }
    async httpRequest(request) {
        // CRITICAL: Always use "/" endpoint - fixes OpenAPI path mismatch
        const response = await fetch(`${this.endpoint}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
            },
            body: JSON.stringify(request),
        });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    }
    convertToCamelCase(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
        if (Array.isArray(obj)) {
            return obj.map(item => this.convertToCamelCase(item));
        }
        const result = {};
        for (const [key, value] of Object.entries(obj)) {
            let camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
            // Fix specific cases for proper TypeScript naming
            camelKey = camelKey.replace(/hash$/, 'Hash');
            camelKey = camelKey.replace(/id$/, 'Id');
            camelKey = camelKey.replace(/key$/, 'Key');
            result[camelKey] = this.convertToCamelCase(value);
        }
        return result;
    }
    convertToSnakeCase(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
        if (Array.isArray(obj)) {
            return obj.map(item => this.convertToSnakeCase(item));
        }
        const result = {};
        for (const [key, value] of Object.entries(obj)) {
            const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
            result[snakeKey] = this.convertToSnakeCase(value);
        }
        return result;
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // Core RPC Methods
    async status() {
        return this.request('status', {});
    }
    async block(params = {}) {
        return this.request('block', params);
    }
    async gasPrice(params = {}) {
        return this.request('gas_price', params);
    }
    async networkInfo() {
        return this.request('network_info', {});
    }
    async query(params) {
        return this.request('query', params);
    }
    async validators(params = {}) {
        return this.request('validators', params);
    }
    async experimentalProtocolConfig(params = {}) {
        return this.request('EXPERIMENTAL_protocol_config', params);
    }
    async experimentalGenesisConfig() {
        return this.request('EXPERIMENTAL_genesis_config', {});
    }
    // Convenience methods
    async viewAccount(accountId) {
        return this.query({
            request_type: 'view_account',
            account_id: accountId,
            finality: 'final'
        });
    }
    async viewAccessKeyList(accountId) {
        return this.query({
            request_type: 'view_access_key_list',
            account_id: accountId,
            finality: 'final'
        });
    }
    async viewState(accountId, prefix = '') {
        return this.query({
            request_type: 'view_state',
            account_id: accountId,
            prefix,
            finality: 'final'
        });
    }
    async callFunction(accountId, methodName, args = {}) {
        return this.query({
            request_type: 'call_function',
            account_id: accountId,
            method_name: methodName,
            args_base64: Buffer.from(JSON.stringify(args)).toString('base64'),
            finality: 'final'
        });
    }
    async transaction(transactionHash, senderId) {
        return this.request('tx', {
            transaction_hash: transactionHash,
            sender_id: senderId
        });
    }
    async receipts(receiptIds) {
        return this.request('receipts', {
            receipt_ids: receiptIds
        });
    }
    async broadcastTxAsync(signedTransaction) {
        return this.request('broadcast_tx_async', {
            signed_tx_base64: signedTransaction
        });
    }
    async broadcastTxCommit(signedTransaction) {
        return this.request('broadcast_tx_commit', {
            signed_tx_base64: signedTransaction
        });
    }
}
exports.NearRpcClient = NearRpcClient;
class NearRpcError extends Error {
    code;
    data;
    constructor(code, message, data) {
        super(message);
        this.name = 'NearRpcError';
        this.code = code;
        this.data = data;
    }
}
exports.NearRpcError = NearRpcError;
class NetworkError extends Error {
    cause;
    constructor(message, cause) {
        super(message);
        this.name = 'NetworkError';
        this.cause = cause;
    }
}
exports.NetworkError = NetworkError;
