"use strict";
/**
 * Validated RPC methods for NEAR Protocol
 *
 * Each method includes:
 * - Proper typing with Zod validation
 * - Usage examples
 * - Error handling
 * - Documentation
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
exports.ValidatedMethods = void 0;
const Schemas = __importStar(require("../../../jsonrpc-types/src/schemas/validated"));
class ValidatedMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Get the current status of the node
     *
     * Method: status
     *
     * @example
     * // Get node status
     * const result = await client.methods.status();
     * // Result will contain: version, chainId, syncInfo
     */
    async status(params = {}) {
        try {
            const result = await this.client.request('status', params, Schemas.StatusResponseSchema);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute status: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Get block information by height or hash
     *
     * Method: block
     *
     * @example
     * // Get latest block
     * const result = await client.methods.block({"finality": "final"});
     * // Result will contain: header, chunks
     * @example
     * // Get block by height
     * const result = await client.methods.block({"blockId": 1});
     * // Result will contain: header, chunks
     */
    async block(params = {}) {
        try {
            const result = await this.client.request('block', params, Schemas.BlockResponseSchema);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute block: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Get chunk information
     *
     * Method: chunk
     *
     * @example
     * // Get chunk by ID
     * const result = await client.methods.chunk({"chunkId": "latest"});
     * // Result will contain: header, transactions
     */
    async chunk(params) {
        try {
            const result = await this.client.request('chunk', params, Schemas.ChunkResponseSchema);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute chunk: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Query the network (view account, call function, etc.)
     *
     * Method: query
     *
     * @example
     * // View account
     * const result = await client.methods.query({
     *   "requestType": "view_account",
     *   "finality": "final",
     *   "accountId": "example.testnet"
     * });
     * // Result will contain: amount, codeHash, storageUsage
     */
    async query(params) {
        try {
            const result = await this.client.request('query', params);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute query: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Get validator information
     *
     * Method: validators
     *
     * @example
     * // Get validators
     * const result = await client.methods.validators({"finality": "final"});
     * // Result will contain: currentValidators, nextValidators
     */
    async validators(params = {}) {
        try {
            const result = await this.client.request('validators', params, Schemas.ValidatorsResponseSchema);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute validators: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Get current gas price
     *
     * Method: gas_price
     *
     * @example
     * // Get gas price
     * const result = await client.methods.gasPrice({"finality": "final"});
     * // Result will contain: gasPrice
     */
    async gasPrice(params = {}) {
        try {
            const result = await this.client.request('gas_price', params, Schemas.GasPriceResponseSchema);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute gas_price: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Get network information
     *
     * Method: network_info
     *
     * @example
     * // Get network info
     * const result = await client.methods.networkInfo({});
     * // Result will contain: activePeers, knownProducers
     */
    async networkInfo(params = {}) {
        try {
            const result = await this.client.request('network_info', params, Schemas.NetworkInfoResponseSchema);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute network_info: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Get transaction information
     *
     * Method: tx
     *
     * @example
     * // Get transaction
     * const result = await client.methods.tx({
     *   "txHash": "ABC123",
     *   "senderAccountId": "example.testnet"
     * });
     * // Result will contain: status, transaction, transactionOutcome
     */
    async tx(params) {
        try {
            const result = await this.client.request('tx', params, Schemas.TransactionResponseSchema);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute tx: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Broadcast a transaction asynchronously
     *
     * Method: broadcast_tx_async
     *
     * @example
     * // Broadcast transaction
     * const result = await client.methods.broadcastTxAsync({
     *   "signedTxBase64": "base64encodedtx"
     * });
     * // Result will contain: transaction hash
     */
    async broadcastTxAsync(params) {
        try {
            const result = await this.client.request('broadcast_tx_async', params);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute broadcast_tx_async: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Broadcast a transaction and wait for commit
     *
     * Method: broadcast_tx_commit
     *
     * @example
     * // Broadcast transaction and wait
     * const result = await client.methods.broadcastTxCommit({
     *   "signedTxBase64": "base64encodedtx"
     * });
     * // Result will contain: status, transaction, transactionOutcome
     */
    async broadcastTxCommit(params) {
        try {
            const result = await this.client.request('broadcast_tx_commit', params, Schemas.TransactionResponseSchema);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute broadcast_tx_commit: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Get experimental changes
     *
     * Method: EXPERIMENTAL_changes
     *
     * @example
     * // Get changes
     * const result = await client.methods.experimentalChanges({});
     * // Result will contain: changes
     */
    async experimentalChanges(params = {}) {
        try {
            const result = await this.client.request('EXPERIMENTAL_changes', params);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute EXPERIMENTAL_changes: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Get experimental changes in block
     *
     * Method: EXPERIMENTAL_changes_in_block
     *
     * @example
     * // Get changes in block
     * const result = await client.methods.experimentalChangesInBlock({});
     * // Result will contain: changes
     */
    async experimentalChangesInBlock(params = {}) {
        try {
            const result = await this.client.request('EXPERIMENTAL_changes_in_block', params);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute EXPERIMENTAL_changes_in_block: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Get protocol configuration
     *
     * Method: EXPERIMENTAL_protocol_config
     *
     * @example
     * // Get protocol config
     * const result = await client.methods.experimentalProtocolConfig({"finality": "final"});
     * // Result will contain: protocol configuration
     */
    async experimentalProtocolConfig(params = {}) {
        try {
            const result = await this.client.request('EXPERIMENTAL_protocol_config', params);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute EXPERIMENTAL_protocol_config: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Get genesis configuration
     *
     * Method: EXPERIMENTAL_genesis_config
     *
     * @example
     * // Get genesis config
     * const result = await client.methods.experimentalGenesisConfig({});
     * // Result will contain: genesis configuration
     */
    async experimentalGenesisConfig(params = {}) {
        try {
            const result = await this.client.request('EXPERIMENTAL_genesis_config', params);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to execute EXPERIMENTAL_genesis_config: ${error.message}`);
            }
            throw error;
        }
    }
}
exports.ValidatedMethods = ValidatedMethods;
