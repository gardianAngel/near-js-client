"use strict";
/**
 * Generated NEAR Protocol JSON-RPC Client
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkError = exports.NearJsonRpcError = exports.NearJsonRpcClient = void 0;
const nearcore_1 = require("./methods/nearcore");
class NearJsonRpcClient {
    endpoint;
    headers;
    timeout;
    retryAttempts;
    retryDelay;
    methods;
    constructor(config) {
        this.endpoint = config.endpoint;
        this.headers = config.headers || {};
        this.timeout = config.timeout || 30000;
        this.retryAttempts = config.retryAttempts || 3;
        this.retryDelay = config.retryDelay || 1000;
        this.methods = new nearcore_1.NearcoreMethods(this);
    }
    /**
     * Make a JSON-RPC request to the NEAR Protocol RPC endpoint
     * All requests use POST to "/" path as per JSON-RPC 2.0 specification
     */
    async request(method, params = {}) {
        const request = {
            jsonrpc: '2.0',
            method,
            params: this.convertToSnakeCase(params),
            id: this.generateId(),
        };
        let lastError = null;
        for (let attempt = 0; attempt < this.retryAttempts; attempt++) {
            try {
                const response = await this.httpRequest(request);
                if (response.error) {
                    throw new NearJsonRpcError(response.error.code, response.error.message, response.error.data);
                }
                return this.convertToCamelCase(response.result);
            }
            catch (error) {
                lastError = error;
                if (attempt < this.retryAttempts - 1) {
                    await this.delay(this.retryDelay * Math.pow(2, attempt));
                }
            }
        }
        throw lastError;
    }
    async httpRequest(request) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        try {
            const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...this.headers,
                },
                body: JSON.stringify(request),
                signal: controller.signal,
            });
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new NetworkError(`HTTP ${response.status}: ${response.statusText}`, response.status);
            }
            return await response.json();
        }
        catch (error) {
            clearTimeout(timeoutId);
            if (error instanceof TypeError && error.message.includes('fetch')) {
                throw new NetworkError('Network request failed', 0);
            }
            throw error;
        }
    }
    /**
     * Convert camelCase object to snake_case for API requests
     */
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
    /**
     * Convert snake_case object to camelCase for TypeScript usage
     */
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
    generateId() {
        return Math.random().toString(36).substring(2, 15);
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.NearJsonRpcClient = NearJsonRpcClient;
class NearJsonRpcError extends Error {
    code;
    data;
    constructor(code, message, data) {
        super(message);
        this.code = code;
        this.data = data;
        this.name = 'NearJsonRpcError';
    }
}
exports.NearJsonRpcError = NearJsonRpcError;
class NetworkError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'NetworkError';
    }
}
exports.NetworkError = NetworkError;
