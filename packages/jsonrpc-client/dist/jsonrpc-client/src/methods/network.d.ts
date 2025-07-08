/**
 * Network-related methods for NEAR JSON-RPC client
 */
import { RpcChangesRequest, RpcChangesResponse, RpcClientconfigRequest, RpcClientconfigResponse, RpcEXPERIMENTALchangesRequest, RpcEXPERIMENTALchangesResponse, RpcEXPERIMENTALcongestionlevelRequest, RpcEXPERIMENTALcongestionlevelResponse, RpcEXPERIMENTALgenesisconfigRequest, RpcEXPERIMENTALgenesisconfigResponse, RpcEXPERIMENTALlightclientproofRequest, RpcEXPERIMENTALlightclientproofResponse, RpcEXPERIMENTALmaintenancewindowsRequest, RpcEXPERIMENTALmaintenancewindowsResponse, RpcEXPERIMENTALprotocolconfigRequest, RpcEXPERIMENTALprotocolconfigResponse, RpcEXPERIMENTALreceiptRequest, RpcEXPERIMENTALreceiptResponse, RpcEXPERIMENTALsplitstorageinfoRequest, RpcEXPERIMENTALsplitstorageinfoResponse, RpcEXPERIMENTALvalidatorsorderedRequest, RpcEXPERIMENTALvalidatorsorderedResponse, RpcGaspriceRequest, RpcGaspriceResponse, RpcHealthRequest, RpcHealthResponse, RpcLightclientproofRequest, RpcLightclientproofResponse, RpcNetworkinfoRequest, RpcNetworkinfoResponse, RpcStatusRequest, RpcStatusResponse, RpcValidatorsRequest, RpcValidatorsResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class NetworkMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    experimentalChanges(params: RpcEXPERIMENTALchangesRequest): Promise<RpcEXPERIMENTALchangesResponse>;
    congestionlevel(params: RpcEXPERIMENTALcongestionlevelRequest): Promise<RpcEXPERIMENTALcongestionlevelResponse>;
    genesisconfig(params: RpcEXPERIMENTALgenesisconfigRequest): Promise<RpcEXPERIMENTALgenesisconfigResponse>;
    experimentalLightClientProof(params: RpcEXPERIMENTALlightclientproofRequest): Promise<RpcEXPERIMENTALlightclientproofResponse>;
    maintenancewindows(params: RpcEXPERIMENTALmaintenancewindowsRequest): Promise<RpcEXPERIMENTALmaintenancewindowsResponse>;
    protocolconfig(params: RpcEXPERIMENTALprotocolconfigRequest): Promise<RpcEXPERIMENTALprotocolconfigResponse>;
    receipt(params: RpcEXPERIMENTALreceiptRequest): Promise<RpcEXPERIMENTALreceiptResponse>;
    splitstorageinfo(params: RpcEXPERIMENTALsplitstorageinfoRequest): Promise<RpcEXPERIMENTALsplitstorageinfoResponse>;
    validatorsordered(params: RpcEXPERIMENTALvalidatorsorderedRequest): Promise<RpcEXPERIMENTALvalidatorsorderedResponse>;
    changes(params: RpcChangesRequest): Promise<RpcChangesResponse>;
    clientconfig(params: RpcClientconfigRequest): Promise<RpcClientconfigResponse>;
    gasprice(params: RpcGaspriceRequest): Promise<RpcGaspriceResponse>;
    health(params: RpcHealthRequest): Promise<RpcHealthResponse>;
    lightclientproof(params: RpcLightclientproofRequest): Promise<RpcLightclientproofResponse>;
    networkinfo(params: RpcNetworkinfoRequest): Promise<RpcNetworkinfoResponse>;
    status(params: RpcStatusRequest): Promise<RpcStatusResponse>;
    validators(params: RpcValidatorsRequest): Promise<RpcValidatorsResponse>;
}
