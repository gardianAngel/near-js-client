"use strict";
/**
 * Clean NEAR Protocol RPC Client
 * Fixed issues:
 * 1. No redundant method groupings (client.accounts.getAccount)
 * 2. Direct method names (block not getLatestBlock)
 * 3. Proper error handling
 * 4. Clean TypeScript implementation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NearRpcClient = exports.NetworkError = exports.NearRpcError = void 0;
class NearRpcError extends Error {
    code;
    data;
    constructor(code, message, data) {
        super(message);
        this.code = code;
        this.data = data;
        this.name = 'NearRpcError';
    }
}
exports.NearRpcError = NearRpcError;
class NetworkError extends Error {
    cause;
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'NetworkError';
    }
}
exports.NetworkError = NetworkError;
class NearRpcClient {
    endpoint;
    headers;
    timeout;
    retryAttempts;
    retryDelay;
    requestId = 0;
    constructor(config) {
        this.endpoint = config.endpoint.replace(/\/$/, '');
        this.headers = config.headers || {};
        this.timeout = config.timeout || 30000;
        this.retryAttempts = config.retryAttempts || 3;
        this.retryDelay = config.retryDelay || 1000;
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
                lastError = error instanceof Error ? error : new Error(String(error));
                if (error instanceof NearRpcError) {
                    throw error;
                }
                if (attempt < this.retryAttempts - 1) {
                    await this.delay(this.retryDelay * Math.pow(2, attempt));
                }
            }
        }
        throw lastError || new NetworkError('Request failed after retries');
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
            signal: AbortSignal.timeout(this.timeout),
        });
        if (!response.ok) {
            throw new NetworkError(`HTTP ${response.status}: ${response.statusText}`);
        }
        return await response.json();
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
    convertToCamelCase(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
        if (Array.isArray(obj)) {
            return obj.map(item => this.convertToCamelCase(item));
        }
        const result = {};
        for (const [key, value] of Object.entries(obj)) {
            const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
            result[camelKey] = this.convertToCamelCase(value);
        }
        return result;
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // Core RPC Methods - Direct names, no groupings
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
    // Convenience methods - but with clear names
    async viewAccount(accountId) {
        return this.query({
            requestType: 'view_account',
            accountId,
            finality: 'final'
        });
    }
    async viewAccessKeyList(accountId) {
        return this.query({
            requestType: 'view_access_key_list',
            accountId,
            finality: 'final'
        });
    }
    async viewState(accountId, prefix) {
        return this.query({
            requestType: 'view_state',
            accountId,
            prefix,
            finality: 'final'
        });
    }
    async callFunction(accountId, methodName, args = {}) {
        return this.query({
            requestType: 'call_function',
            accountId,
            methodName,
            args: Buffer.from(JSON.stringify(args)).toString('base64'),
            finality: 'final'
        });
    }
}
exports.NearRpcClient = NearRpcClient;
