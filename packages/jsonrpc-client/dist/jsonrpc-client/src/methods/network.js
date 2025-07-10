"use strict";
/**
 * Network-related methods for NEAR JSON-RPC client
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkMethods = void 0;
const jsonrpc_types_1 = require("@near-js/jsonrpc-types");
class NetworkMethods {
    client;
    constructor(client) {
        this.client = client;
    }
    async changes(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALChangesRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALChanges', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALChangesResponseSchema);
    }
    async congestionLevel(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALCongestionLevelRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALCongestionLevel', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALCongestionLevelResponseSchema);
    }
    async genesisConfig(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALGenesisConfigRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALGenesisConfig', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALGenesisConfigResponseSchema);
    }
    async lightClientProof(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALLightClientProofRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALLightClientProof', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALLightClientProofResponseSchema);
    }
    async maintenanceWindows(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALMaintenanceWindowsRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALMaintenanceWindows', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALMaintenanceWindowsResponseSchema);
    }
    async protocolConfig(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALProtocolConfigRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALProtocolConfig', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALProtocolConfigResponseSchema);
    }
    async receipt(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALReceiptRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALReceipt', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALReceiptResponseSchema);
    }
    async splitStorageInfo(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALSplitStorageInfoRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALSplitStorageInfo', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALSplitStorageInfoResponseSchema);
    }
    async validatorsOrdered(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALValidatorsOrderedRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALValidatorsOrdered', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALValidatorsOrderedResponseSchema);
    }
    async changes(params) {
        const validatedParams = jsonrpc_types_1.RpcChangesRequestSchema.parse(params);
        return this.client.makeRequest('changes', validatedParams, jsonrpc_types_1.RpcChangesResponseSchema);
    }
    async clientConfig(params) {
        const validatedParams = jsonrpc_types_1.RpcClientConfigRequestSchema.parse(params);
        return this.client.makeRequest('clientConfig', validatedParams, jsonrpc_types_1.RpcClientConfigResponseSchema);
    }
    async gasPrice(params) {
        const validatedParams = jsonrpc_types_1.RpcGasPriceRequestSchema.parse(params);
        return this.client.makeRequest('gasPrice', validatedParams, jsonrpc_types_1.RpcGasPriceResponseSchema);
    }
    async health(params) {
        const validatedParams = jsonrpc_types_1.RpcHealthRequestSchema.parse(params);
        return this.client.makeRequest('health', validatedParams, jsonrpc_types_1.RpcHealthResponseSchema);
    }
    async lightClientProof(params) {
        const validatedParams = jsonrpc_types_1.RpcLightClientProofRequestSchema.parse(params);
        return this.client.makeRequest('lightClientProof', validatedParams, jsonrpc_types_1.RpcLightClientProofResponseSchema);
    }
    async networkInfo(params) {
        const validatedParams = jsonrpc_types_1.RpcNetworkInfoRequestSchema.parse(params);
        return this.client.makeRequest('networkInfo', validatedParams, jsonrpc_types_1.RpcNetworkInfoResponseSchema);
    }
    async status(params) {
        const validatedParams = jsonrpc_types_1.RpcStatusRequestSchema.parse(params);
        return this.client.makeRequest('status', validatedParams, jsonrpc_types_1.RpcStatusResponseSchema);
    }
    async validators(params) {
        const validatedParams = jsonrpc_types_1.RpcValidatorRequestSchema.parse(params);
        return this.client.makeRequest('validators', validatedParams, jsonrpc_types_1.RpcValidatorResponseSchema);
    }
}
exports.NetworkMethods = NetworkMethods;
