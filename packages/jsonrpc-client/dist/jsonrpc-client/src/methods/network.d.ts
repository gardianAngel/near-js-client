/**
 * Network-related methods for NEAR JSON-RPC client
 */
import { RpcClientConfigRequest, RpcClientConfigResponse, RpcEXPERIMENTALChangesRequest, RpcEXPERIMENTALChangesResponse, RpcEXPERIMENTALCongestionLevelRequest, RpcEXPERIMENTALCongestionLevelResponse, RpcEXPERIMENTALGenesisConfigRequest, RpcEXPERIMENTALGenesisConfigResponse, RpcEXPERIMENTALLightClientProofRequest, RpcEXPERIMENTALLightClientProofResponse, RpcEXPERIMENTALMaintenanceWindowsRequest, RpcEXPERIMENTALMaintenanceWindowsResponse, RpcEXPERIMENTALProtocolConfigRequest, RpcEXPERIMENTALProtocolConfigResponse, RpcEXPERIMENTALReceiptRequest, RpcEXPERIMENTALReceiptResponse, RpcEXPERIMENTALSplitStorageInfoRequest, RpcEXPERIMENTALSplitStorageInfoResponse, RpcEXPERIMENTALValidatorsOrderedRequest, RpcEXPERIMENTALValidatorsOrderedResponse, RpcGasPriceRequest, RpcGasPriceResponse, RpcHealthRequest, RpcHealthResponse, RpcNetworkInfoRequest, RpcNetworkInfoResponse, RpcStatusRequest, RpcStatusResponse, RpcValidatorRequest, RpcValidatorResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class NetworkMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    changes(params: RpcEXPERIMENTALChangesRequest): Promise<RpcEXPERIMENTALChangesResponse>;
    congestionLevel(params: RpcEXPERIMENTALCongestionLevelRequest): Promise<RpcEXPERIMENTALCongestionLevelResponse>;
    genesisConfig(params: RpcEXPERIMENTALGenesisConfigRequest): Promise<RpcEXPERIMENTALGenesisConfigResponse>;
    lightClientProof(params: RpcEXPERIMENTALLightClientProofRequest): Promise<RpcEXPERIMENTALLightClientProofResponse>;
    maintenanceWindows(params: RpcEXPERIMENTALMaintenanceWindowsRequest): Promise<RpcEXPERIMENTALMaintenanceWindowsResponse>;
    protocolConfig(params: RpcEXPERIMENTALProtocolConfigRequest): Promise<RpcEXPERIMENTALProtocolConfigResponse>;
    receipt(params: RpcEXPERIMENTALReceiptRequest): Promise<RpcEXPERIMENTALReceiptResponse>;
    splitStorageInfo(params: RpcEXPERIMENTALSplitStorageInfoRequest): Promise<RpcEXPERIMENTALSplitStorageInfoResponse>;
    validatorsOrdered(params: RpcEXPERIMENTALValidatorsOrderedRequest): Promise<RpcEXPERIMENTALValidatorsOrderedResponse>;
    clientConfig(params: RpcClientConfigRequest): Promise<RpcClientConfigResponse>;
    gasPrice(params: RpcGasPriceRequest): Promise<RpcGasPriceResponse>;
    health(params: RpcHealthRequest): Promise<RpcHealthResponse>;
    networkInfo(params: RpcNetworkInfoRequest): Promise<RpcNetworkInfoResponse>;
    status(params: RpcStatusRequest): Promise<RpcStatusResponse>;
    validators(params: RpcValidatorRequest): Promise<RpcValidatorResponse>;
}
