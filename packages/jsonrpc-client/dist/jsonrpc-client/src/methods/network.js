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
        const validatedParams = jsonrpc_types_1.ChangesQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALchanges', validatedParams, jsonrpc_types_1.ChangesResponseSchema);
    }
    async congestionlevel(params) {
        const validatedParams = jsonrpc_types_1.CongestionlevelQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALcongestionlevel', validatedParams, jsonrpc_types_1.CongestionlevelResponseSchema);
    }
    async genesisconfig(params) {
        const validatedParams = jsonrpc_types_1.GenesisconfigQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALgenesisconfig', validatedParams, jsonrpc_types_1.GenesisconfigResponseSchema);
    }
    async lightclientproof(params) {
        const validatedParams = jsonrpc_types_1.LightclientproofQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALlightclientproof', validatedParams, jsonrpc_types_1.LightclientproofResponseSchema);
    }
    async maintenancewindows(params) {
        const validatedParams = jsonrpc_types_1.MaintenancewindowsQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALmaintenancewindows', validatedParams, jsonrpc_types_1.MaintenancewindowsResponseSchema);
    }
    async protocolconfig(params) {
        const validatedParams = jsonrpc_types_1.ProtocolconfigQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALprotocolconfig', validatedParams, jsonrpc_types_1.ProtocolconfigResponseSchema);
    }
    async receipt(params) {
        const validatedParams = jsonrpc_types_1.ReceiptQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALreceipt', validatedParams, jsonrpc_types_1.ReceiptResponseSchema);
    }
    async splitstorageinfo(params) {
        const validatedParams = jsonrpc_types_1.SplitstorageinfoQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALsplitstorageinfo', validatedParams, jsonrpc_types_1.SplitstorageinfoResponseSchema);
    }
    async validatorsordered(params) {
        const validatedParams = jsonrpc_types_1.ValidatorsorderedQuerySchema.parse(params);
        return this.client.makeRequest('EXPERIMENTALvalidatorsordered', validatedParams, jsonrpc_types_1.ValidatorsorderedResponseSchema);
    }
    async changes(params) {
        const validatedParams = jsonrpc_types_1.ChangesQuerySchema.parse(params);
        return this.client.makeRequest('Changes', validatedParams, jsonrpc_types_1.ChangesResponseSchema);
    }
    async clientconfig(params) {
        const validatedParams = jsonrpc_types_1.ClientconfigQuerySchema.parse(params);
        return this.client.makeRequest('Clientconfig', validatedParams, jsonrpc_types_1.ClientconfigResponseSchema);
    }
    async gasprice(params) {
        const validatedParams = jsonrpc_types_1.GaspriceQuerySchema.parse(params);
        return this.client.makeRequest('Gasprice', validatedParams, jsonrpc_types_1.GaspriceResponseSchema);
    }
    async health(params) {
        const validatedParams = jsonrpc_types_1.HealthQuerySchema.parse(params);
        return this.client.makeRequest('Health', validatedParams, jsonrpc_types_1.HealthResponseSchema);
    }
    async lightclientproof(params) {
        const validatedParams = jsonrpc_types_1.LightclientproofQuerySchema.parse(params);
        return this.client.makeRequest('Lightclientproof', validatedParams, jsonrpc_types_1.LightclientproofResponseSchema);
    }
    async networkinfo(params) {
        const validatedParams = jsonrpc_types_1.NetworkinfoQuerySchema.parse(params);
        return this.client.makeRequest('Networkinfo', validatedParams, jsonrpc_types_1.NetworkinfoResponseSchema);
    }
    async status(params) {
        const validatedParams = jsonrpc_types_1.StatusQuerySchema.parse(params);
        return this.client.makeRequest('Status', validatedParams, jsonrpc_types_1.StatusResponseSchema);
    }
    async validators(params) {
        const validatedParams = jsonrpc_types_1.ValidatorsQuerySchema.parse(params);
        return this.client.makeRequest('Validators', validatedParams, jsonrpc_types_1.ValidatorsResponseSchema);
    }
}
exports.NetworkMethods = NetworkMethods;
