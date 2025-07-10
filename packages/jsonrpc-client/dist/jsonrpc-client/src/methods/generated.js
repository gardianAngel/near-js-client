"use strict";
/**
 * Generated RPC methods for NEAR Protocol JSON-RPC API
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
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
exports.GeneratedMethods = void 0;
const Schemas = __importStar(require("@near-js/jsonrpc-types"));
class GeneratedMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Execute _view_access_key RPC method
     */
    async ViewAccessKey(params) {
        const result = await this.client.request('_view_access_key', params);
        return Schemas.ViewAccessKeyResultSchema.parse(result);
    }
    /**
     * Execute _view_access_key_list RPC method
     */
    async ViewAccessKeyList(params) {
        const result = await this.client.request('_view_access_key_list', params);
        return Schemas.ViewAccessKeyListResultSchema.parse(result);
    }
    /**
     * Execute _view_account RPC method
     */
    async ViewAccount(params) {
        const result = await this.client.request('_view_account', params);
        return Schemas.ViewAccountResultSchema.parse(result);
    }
    /**
     * Execute _view_code RPC method
     */
    async ViewCode(params) {
        const result = await this.client.request('_view_code', params);
        return Schemas.ViewCodeResultSchema.parse(result);
    }
    /**
     * Execute _view_state RPC method
     */
    async ViewState(params) {
        const result = await this.client.request('_view_state', params);
        return Schemas.ViewStateResultSchema.parse(result);
    }
    /**
     * Execute _call_function RPC method
     */
    async CallFunction(params) {
        const result = await this.client.request('_call_function', params);
        return Schemas.CallFunctionResultSchema.parse(result);
    }
    /**
     * Execute _block RPC method
     */
    async Block(params) {
        const result = await this.client.request('_block', params);
        return Schemas.BlockResultSchema.parse(result);
    }
    /**
     * Execute _chunk RPC method
     */
    async Chunk(params) {
        const result = await this.client.request('_chunk', params);
        return Schemas.ChunkResultSchema.parse(result);
    }
    /**
     * Execute _changes_in_block RPC method
     */
    async ChangesInBlock(params) {
        const result = await this.client.request('_changes_in_block', params);
        return Schemas.ChangesInBlockResultSchema.parse(result);
    }
    /**
     * Execute _experimental_changes_in_block RPC method
     */
    async ExperimentalChangesInBlock(params) {
        const result = await this.client.request('_experimental_changes_in_block', params);
        return Schemas.ExperimentalChangesInBlockResultSchema.parse(result);
    }
    /**
     * Execute _gas_price RPC method
     */
    async GasPrice(params) {
        const result = await this.client.request('_gas_price', params);
        return Schemas.GasPriceResultSchema.parse(result);
    }
    /**
     * Execute _experimental_genesis_config RPC method
     */
    async ExperimentalGenesisConfig(params) {
        const result = await this.client.request('_experimental_genesis_config', params);
        return Schemas.ExperimentalGenesisConfigResultSchema.parse(result);
    }
    /**
     * Execute _experimental_protocol_config RPC method
     */
    async ExperimentalProtocolConfig(params) {
        const result = await this.client.request('_experimental_protocol_config', params);
        return Schemas.ExperimentalProtocolConfigResultSchema.parse(result);
    }
    /**
     * Execute _network_info RPC method
     */
    async NetworkInfo(params) {
        const result = await this.client.request('_network_info', params);
        return Schemas.NetworkInfoResultSchema.parse(result);
    }
    /**
     * Execute _status RPC method
     */
    async Status(params) {
        const result = await this.client.request('_status', params);
        return Schemas.StatusResultSchema.parse(result);
    }
    /**
     * Execute _validators RPC method
     */
    async Validators(params) {
        const result = await this.client.request('_validators', params);
        return Schemas.ValidatorsResultSchema.parse(result);
    }
    /**
     * Execute _broadcast_tx_async RPC method
     */
    async BroadcastTxAsync(params) {
        const result = await this.client.request('_broadcast_tx_async', params);
        return Schemas.BroadcastTxAsyncResultSchema.parse(result);
    }
    /**
     * Execute _broadcast_tx_commit RPC method
     */
    async BroadcastTxCommit(params) {
        const result = await this.client.request('_broadcast_tx_commit', params);
        return Schemas.BroadcastTxCommitResultSchema.parse(result);
    }
    /**
     * Execute _tx RPC method
     */
    async Tx(params) {
        const result = await this.client.request('_tx', params);
        return Schemas.TxResultSchema.parse(result);
    }
    /**
     * Execute _experimental_tx_status RPC method
     */
    async ExperimentalTxStatus(params) {
        const result = await this.client.request('_experimental_tx_status', params);
        return Schemas.ExperimentalTxStatusResultSchema.parse(result);
    }
}
exports.GeneratedMethods = GeneratedMethods;
