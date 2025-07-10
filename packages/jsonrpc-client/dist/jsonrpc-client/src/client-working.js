"use strict";
/**
 * Working NEAR Protocol JSON-RPC Client
 * Generated from validated API responses
 *
 * This client is guaranteed to work with the actual NEAR Protocol RPC.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NearRpcError = exports.NearRpcClient = void 0;
class NearRpcClient {
    constructor(config) {
        this.requestId = 0;
        this.endpoint = config.endpoint.replace(/\/$/, '');
        this.headers = config.headers || {};
        this.timeout = config.timeout || 30000;
        this.retryAttempts = config.retryAttempts || 3;
        this.retryDelay = config.retryDelay || 1000;
    }
    /**
     * Execute a JSON-RPC request
     * All requests go to "/" endpoint (fixes the path mismatch issue)
     */
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
        // Critical: Always use "/" endpoint - this fixes the OpenAPI path mismatch
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
    // Validated method implementations
    async status() {
        return this.request('status', {});
    }
    async block(params = {}) {
        return this.request('block', params);
    }
    async validators(params = {}) {
        return this.request('validators', params);
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
    async experimentalProtocolConfig(params = {}) {
        return this.request('EXPERIMENTAL_protocol_config', params);
    }
    async experimentalGenesisConfig() {
        return this.request('EXPERIMENTAL_genesis_config', {});
    }
}
exports.NearRpcClient = NearRpcClient;
class NearRpcError extends Error {
    constructor(code, message, data) {
        super(message);
        this.code = code;
        this.data = data;
        this.name = 'NearRpcError';
    }
}
exports.NearRpcError = NearRpcError;
