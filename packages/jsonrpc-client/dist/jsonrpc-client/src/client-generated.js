"use strict";
/**
 * Generated NEAR Protocol JSON-RPC Client
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NearJsonRpcClient = void 0;
const generated_1 = require("./methods/generated");
class NearJsonRpcClient {
    endpoint;
    headers;
    timeout;
    methods;
    constructor(config) {
        this.endpoint = config.endpoint;
        this.headers = config.headers || {};
        this.timeout = config.timeout || 30000;
        this.methods = new generated_1.GeneratedMethods(this);
    }
    async request(method, params = {}) {
        const request = {
            jsonrpc: '2.0',
            method,
            params: this.convertToSnakeCase(params),
            id: this.generateId(),
        };
        const response = await this.httpRequest(request);
        if (response.error) {
            throw new Error(`RPC Error: ${response.error.message}`);
        }
        return this.convertToCamelCase(response.result);
    }
    async httpRequest(request) {
        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
            },
            body: JSON.stringify(request),
            signal: AbortSignal.timeout(this.timeout),
        });
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
    convertToSnakeCase(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
        if (Array.isArray(obj)) {
            return obj.map(this.convertToSnakeCase.bind(this));
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
            return obj.map(this.convertToCamelCase.bind(this));
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
}
exports.NearJsonRpcClient = NearJsonRpcClient;
