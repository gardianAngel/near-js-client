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
    async experimentalChanges(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALchangesRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALchanges', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALchangesResponseSchema);
    }
    async congestionlevel(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALcongestionlevelRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALcongestionlevel', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALcongestionlevelResponseSchema);
    }
    async genesisconfig(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALgenesisconfigRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALgenesisconfig', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALgenesisconfigResponseSchema);
    }
    async experimentalLightClientProof(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALlightclientproofRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALlightclientproof', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALlightclientproofResponseSchema);
    }
    async maintenancewindows(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALmaintenancewindowsRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALmaintenancewindows', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALmaintenancewindowsResponseSchema);
    }
    async protocolconfig(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALprotocolconfigRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALprotocolconfig', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALprotocolconfigResponseSchema);
    }
    async receipt(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALreceiptRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALreceipt', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALreceiptResponseSchema);
    }
    async splitstorageinfo(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALsplitstorageinfoRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALsplitstorageinfo', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALsplitstorageinfoResponseSchema);
    }
    async validatorsordered(params) {
        const validatedParams = jsonrpc_types_1.RpcEXPERIMENTALvalidatorsorderedRequestSchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALvalidatorsordered', validatedParams, jsonrpc_types_1.RpcEXPERIMENTALvalidatorsorderedResponseSchema);
    }
    async changes(params) {
        const validatedParams = jsonrpc_types_1.RpcChangesRequestSchema.parse(params);
        return this.client.makeRequest('Changes', validatedParams, jsonrpc_types_1.RpcChangesResponseSchema);
    }
    async clientconfig(params) {
        const validatedParams = jsonrpc_types_1.RpcClientconfigRequestSchema.parse(params);
        return this.client.makeRequest('Clientconfig', validatedParams, jsonrpc_types_1.RpcClientconfigResponseSchema);
    }
    async gasprice(params) {
        const validatedParams = jsonrpc_types_1.RpcGaspriceRequestSchema.parse(params);
        return this.client.makeRequest('Gasprice', validatedParams, jsonrpc_types_1.RpcGaspriceResponseSchema);
    }
    async health(params) {
        const validatedParams = jsonrpc_types_1.RpcHealthRequestSchema.parse(params);
        return this.client.makeRequest('Health', validatedParams, jsonrpc_types_1.RpcHealthResponseSchema);
    }
    async lightclientproof(params) {
        const validatedParams = jsonrpc_types_1.RpcLightclientproofRequestSchema.parse(params);
        return this.client.makeRequest('Lightclientproof', validatedParams, jsonrpc_types_1.RpcLightclientproofResponseSchema);
    }
    async networkinfo(params) {
        const validatedParams = jsonrpc_types_1.RpcNetworkinfoRequestSchema.parse(params);
        return this.client.makeRequest('Networkinfo', validatedParams, jsonrpc_types_1.RpcNetworkinfoResponseSchema);
    }
    async status(params) {
        const validatedParams = jsonrpc_types_1.RpcStatusRequestSchema.parse(params);
        return this.client.makeRequest('Status', validatedParams, jsonrpc_types_1.RpcStatusResponseSchema);
    }
    async validators(params) {
        const validatedParams = jsonrpc_types_1.RpcValidatorsRequestSchema.parse(params);
        return this.client.makeRequest('Validators', validatedParams, jsonrpc_types_1.RpcValidatorsResponseSchema);
    }
}
exports.NetworkMethods = NetworkMethods;
