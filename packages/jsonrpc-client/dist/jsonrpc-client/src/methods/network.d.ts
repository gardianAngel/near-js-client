/**
 * Network-related methods for NEAR JSON-RPC client
 */
import { RpcClientconfigRequest, RpcClientconfigResponse, RpcEXPERIMENTALcongestionlevelRequest, RpcEXPERIMENTALcongestionlevelResponse, RpcEXPERIMENTALgenesisconfigRequest, RpcEXPERIMENTALgenesisconfigResponse, RpcEXPERIMENTALmaintenancewindowsRequest, RpcEXPERIMENTALmaintenancewindowsResponse, RpcEXPERIMENTALprotocolconfigRequest, RpcEXPERIMENTALprotocolconfigResponse, RpcEXPERIMENTALreceiptRequest, RpcEXPERIMENTALreceiptResponse, RpcEXPERIMENTALsplitstorageinfoRequest, RpcEXPERIMENTALsplitstorageinfoResponse, RpcEXPERIMENTALvalidatorsorderedRequest, RpcEXPERIMENTALvalidatorsorderedResponse, RpcGaspriceRequest, RpcGaspriceResponse, RpcHealthRequest, RpcHealthResponse, RpcNetworkinfoRequest, RpcNetworkinfoResponse, RpcStatusRequest, RpcStatusResponse, RpcValidatorsRequest, RpcValidatorsResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class NetworkMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    congestionlevel(params: RpcEXPERIMENTALcongestionlevelRequest): Promise<RpcEXPERIMENTALcongestionlevelResponse>;
    genesisconfig(params: RpcEXPERIMENTALgenesisconfigRequest): Promise<RpcEXPERIMENTALgenesisconfigResponse>;
    maintenancewindows(params: RpcEXPERIMENTALmaintenancewindowsRequest): Promise<RpcEXPERIMENTALmaintenancewindowsResponse>;
    protocolconfig(params: RpcEXPERIMENTALprotocolconfigRequest): Promise<RpcEXPERIMENTALprotocolconfigResponse>;
    receipt(params: RpcEXPERIMENTALreceiptRequest): Promise<RpcEXPERIMENTALreceiptResponse>;
    splitstorageinfo(params: RpcEXPERIMENTALsplitstorageinfoRequest): Promise<RpcEXPERIMENTALsplitstorageinfoResponse>;
    validatorsordered(params: RpcEXPERIMENTALvalidatorsorderedRequest): Promise<RpcEXPERIMENTALvalidatorsorderedResponse>;
    clientconfig(params: RpcClientconfigRequest): Promise<RpcClientconfigResponse>;
    gasprice(params: RpcGaspriceRequest): Promise<RpcGaspriceResponse>;
    health(params: RpcHealthRequest): Promise<RpcHealthResponse>;
    networkinfo(params: RpcNetworkinfoRequest): Promise<RpcNetworkinfoResponse>;
    status(params: RpcStatusRequest): Promise<RpcStatusResponse>;
    validators(params: RpcValidatorsRequest): Promise<RpcValidatorsResponse>;
}
