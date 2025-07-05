"use strict";
/**
 * NEAR Protocol JSON-RPC Client
 *
 * Main client class that provides type-safe methods for all NEAR JSON-RPC endpoints
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NearJsonRpcClient = void 0;
const zod_1 = require("zod");
const errors_1 = require("./errors");
const blocks_1 = require("./methods/blocks");
const transactions_1 = require("./methods/transactions");
const accounts_1 = require("./methods/accounts");
const network_1 = require("./methods/network");
class NearJsonRpcClient {
    baseUrl;
    apiKey;
    timeout;
    retries;
    retryDelay;
    requestId = 0;
    // Method groups
    blocks;
    transactions;
    accounts;
    network;
    constructor(options) {
        if (typeof options === 'string') {
            this.baseUrl = options;
            this.timeout = 30000;
            this.retries = 3;
            this.retryDelay = 1000;
        }
        else {
            this.baseUrl = options.baseUrl;
            this.apiKey = options.apiKey;
            this.timeout = options.timeout ?? 30000;
            this.retries = options.retries ?? 3;
            this.retryDelay = options.retryDelay ?? 1000;
        }
        // Initialize method groups
        this.blocks = new blocks_1.BlockMethods(this);
        this.transactions = new transactions_1.TransactionMethods(this);
        this.accounts = new accounts_1.AccountMethods(this);
        this.network = new network_1.NetworkMethods(this);
    }
    /**
     * Make a JSON-RPC request with type validation
     * CRITICAL: Always use '/' as path, not the OpenAPI spec paths
     */
    async makeRequest(method, params, responseSchema) {
        const request = {
            jsonrpc: '2.0',
            method,
            params,
            id: ++this.requestId,
        };
        let lastError = null;
        for (let attempt = 0; attempt <= this.retries; attempt++) {
            try {
                const response = await this.executeRequest(request);
                if (response.error) {
                    throw new errors_1.NearJsonRpcError(response.error.message, response.error.code, response.error.data);
                }
                if (response.result === undefined) {
                    throw new errors_1.NearJsonRpcError('No result in response', -32603);
                }
                try {
                    return responseSchema.parse(response.result);
                }
                catch (parseError) {
                    if (parseError instanceof zod_1.z.ZodError) {
                        throw new errors_1.ValidationError(`Response validation failed: ${parseError.message}`, parseError.errors);
                    }
                    throw parseError;
                }
            }
            catch (error) {
                lastError = error instanceof Error ? error : new Error(String(error));
                if (attempt === this.retries) {
                    break;
                }
                // Only retry on network errors
                if (error instanceof errors_1.NetworkError) {
                    await this.delay(this.retryDelay * Math.pow(2, attempt));
                    continue;
                }
                // Don't retry on validation or RPC errors
                throw error;
            }
        }
        throw lastError;
    }
    async executeRequest(request) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        try {
            const response = await fetch(`${this.baseUrl}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(this.apiKey && { 'Authorization': `Bearer ${this.apiKey}` }),
                },
                body: JSON.stringify(request),
                signal: controller.signal,
            });
            if (!response.ok) {
                throw new errors_1.NetworkError(`HTTP ${response.status}: ${response.statusText}`, response.status);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    throw new errors_1.NetworkError('Request timeout', 0);
                }
                if (error.name === 'TypeError' && error.message.includes('fetch')) {
                    throw new errors_1.NetworkError('Network error', 0);
                }
            }
            throw error;
        }
        finally {
            clearTimeout(timeoutId);
        }
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    /**
     * Get the base URL of the client
     */
    getBaseUrl() {
        return this.baseUrl;
    }
    /**
     * Check if the client has an API key configured
     */
    hasApiKey() {
        return !!this.apiKey;
    }
}
exports.NearJsonRpcClient = NearJsonRpcClient;
