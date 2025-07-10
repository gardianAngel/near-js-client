"use strict";
/**
 * Validated NEAR Protocol JSON-RPC Client
 *
 * This client properly handles the path mismatch between OpenAPI specification
 * and actual JSON-RPC implementation. All requests go to "/" endpoint.
 *
 * Features:
 * - Fetch-based HTTP requests
 * - Automatic snake_case ↔ camelCase conversion
 * - Comprehensive error handling with retries
 * - Runtime validation with Zod
 * - Full TypeScript type safety
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.NetworkError = exports.NearRpcError = exports.NearRpcClient = void 0;
const validated_1 = require("./methods/validated");
const Schemas = __importStar(require("../../jsonrpc-types/src/schemas/validated"));
const zod_1 = require("zod");
class NearRpcClient {
    endpoint;
    headers;
    timeout;
    retryAttempts;
    retryDelay;
    validateResponses;
    requestId = 0;
    methods;
    constructor(config) {
        this.endpoint = config.endpoint.replace(/\/$/, ''); // Remove trailing slash
        this.headers = config.headers || {};
        this.timeout = config.timeout || 30000;
        this.retryAttempts = config.retryAttempts || 3;
        this.retryDelay = config.retryDelay || 1000;
        this.validateResponses = config.validateResponses ?? true;
        this.methods = new validated_1.ValidatedMethods(this);
    }
    /**
     * Execute a JSON-RPC request
     * All requests go to "/" endpoint regardless of method
     */
    async request(method, params = {}, schema) {
        const request = {
            jsonrpc: '2.0',
            method,
            params: this.convertToSnakeCase(params),
            id: ++this.requestId,
        };
        // Validate request
        if (this.validateResponses) {
            Schemas.JsonRpcRequestSchema.parse(request);
        }
        let lastError = null;
        for (let attempt = 0; attempt < this.retryAttempts; attempt++) {
            try {
                const response = await this.httpRequest(request);
                if (response.error) {
                    throw new NearRpcError(response.error.code, response.error.message, response.error.data, method, params);
                }
                if (!response.result) {
                    throw new NearRpcError(-32603, 'No result in response', response, method, params);
                }
                const result = this.convertToCamelCase(response.result);
                // Validate response if schema provided
                if (schema && this.validateResponses) {
                    return schema.parse(result);
                }
                return result;
            }
            catch (error) {
                lastError = error;
                // Don't retry on validation errors or RPC errors
                if (error instanceof zod_1.z.ZodError || error instanceof NearRpcError) {
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
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        try {
            // Always use "/" endpoint - this is the key fix for the path mismatch
            const response = await fetch(`${this.endpoint}/`, {
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
                throw new NetworkError(`HTTP ${response.status}: ${response.statusText}`, response.status, await response.text());
            }
            const jsonResponse = await response.json();
            // Validate response structure
            if (this.validateResponses) {
                Schemas.JsonRpcResponseSchema.parse(jsonResponse);
            }
            return jsonResponse;
        }
        catch (error) {
            clearTimeout(timeoutId);
            if (error instanceof DOMException && error.name === 'AbortError') {
                throw new NetworkError('Request timeout', 408, `Request timed out after ${this.timeout}ms`);
            }
            if (error instanceof TypeError && error.message.includes('fetch')) {
                throw new NetworkError('Network request failed', 0, error.message);
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
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.NearRpcClient = NearRpcClient;
class NearRpcError extends Error {
    code;
    data;
    method;
    params;
    constructor(code, message, data, method, params) {
        super(message);
        this.code = code;
        this.data = data;
        this.method = method;
        this.params = params;
        this.name = 'NearRpcError';
    }
}
exports.NearRpcError = NearRpcError;
class NetworkError extends Error {
    statusCode;
    responseText;
    constructor(message, statusCode, responseText) {
        super(message);
        this.statusCode = statusCode;
        this.responseText = responseText;
        this.name = 'NetworkError';
    }
}
exports.NetworkError = NetworkError;
class ValidationError extends Error {
    originalError;
    constructor(message, originalError) {
        super(message);
        this.originalError = originalError;
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
