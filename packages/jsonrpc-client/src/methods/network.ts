/**
 * Network-related methods for NEAR JSON-RPC client
 */

import {
  RpcChangesRequest,
  RpcChangesRequestSchema,
  RpcChangesResponse,
  RpcChangesResponseSchema,
  RpcClientConfigRequest,
  RpcClientConfigRequestSchema,
  RpcClientConfigResponse,
  RpcClientConfigResponseSchema,
  RpcEXPERIMENTALChangesRequest,
  RpcEXPERIMENTALChangesRequestSchema,
  RpcEXPERIMENTALChangesResponse,
  RpcEXPERIMENTALChangesResponseSchema,
  RpcEXPERIMENTALCongestionLevelRequest,
  RpcEXPERIMENTALCongestionLevelRequestSchema,
  RpcEXPERIMENTALCongestionLevelResponse,
  RpcEXPERIMENTALCongestionLevelResponseSchema,
  RpcEXPERIMENTALGenesisConfigRequest,
  RpcEXPERIMENTALGenesisConfigRequestSchema,
  RpcEXPERIMENTALGenesisConfigResponse,
  RpcEXPERIMENTALGenesisConfigResponseSchema,
  RpcEXPERIMENTALLightClientProofRequest,
  RpcEXPERIMENTALLightClientProofRequestSchema,
  RpcEXPERIMENTALLightClientProofResponse,
  RpcEXPERIMENTALLightClientProofResponseSchema,
  RpcEXPERIMENTALMaintenanceWindowsRequest,
  RpcEXPERIMENTALMaintenanceWindowsRequestSchema,
  RpcEXPERIMENTALMaintenanceWindowsResponse,
  RpcEXPERIMENTALMaintenanceWindowsResponseSchema,
  RpcEXPERIMENTALProtocolConfigRequest,
  RpcEXPERIMENTALProtocolConfigRequestSchema,
  RpcEXPERIMENTALProtocolConfigResponse,
  RpcEXPERIMENTALProtocolConfigResponseSchema,
  RpcEXPERIMENTALReceiptRequest,
  RpcEXPERIMENTALReceiptRequestSchema,
  RpcEXPERIMENTALReceiptResponse,
  RpcEXPERIMENTALReceiptResponseSchema,
  RpcEXPERIMENTALSplitStorageInfoRequest,
  RpcEXPERIMENTALSplitStorageInfoRequestSchema,
  RpcEXPERIMENTALSplitStorageInfoResponse,
  RpcEXPERIMENTALSplitStorageInfoResponseSchema,
  RpcEXPERIMENTALValidatorsOrderedRequest,
  RpcEXPERIMENTALValidatorsOrderedRequestSchema,
  RpcEXPERIMENTALValidatorsOrderedResponse,
  RpcEXPERIMENTALValidatorsOrderedResponseSchema,
  RpcGasPriceRequest,
  RpcGasPriceRequestSchema,
  RpcGasPriceResponse,
  RpcGasPriceResponseSchema,
  RpcHealthRequest,
  RpcHealthRequestSchema,
  RpcHealthResponse,
  RpcHealthResponseSchema,
  RpcLightClientProofRequest,
  RpcLightClientProofRequestSchema,
  RpcLightClientProofResponse,
  RpcLightClientProofResponseSchema,
  RpcNetworkInfoRequest,
  RpcNetworkInfoRequestSchema,
  RpcNetworkInfoResponse,
  RpcNetworkInfoResponseSchema,
  RpcStatusRequest,
  RpcStatusRequestSchema,
  RpcStatusResponse,
  RpcStatusResponseSchema,
  RpcValidatorRequest,
  RpcValidatorRequestSchema,
  RpcValidatorResponse,
  RpcValidatorResponseSchema
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class NetworkMethods {
  constructor(private client: NearJsonRpcClient) {}

  async changes(params: RpcEXPERIMENTALChangesRequest): Promise<RpcEXPERIMENTALChangesResponse> {
    const validatedParams = RpcEXPERIMENTALChangesRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALChanges', validatedParams, RpcEXPERIMENTALChangesResponseSchema) as Promise<RpcEXPERIMENTALChangesResponse>;
  }

  async congestionLevel(params: RpcEXPERIMENTALCongestionLevelRequest): Promise<RpcEXPERIMENTALCongestionLevelResponse> {
    const validatedParams = RpcEXPERIMENTALCongestionLevelRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALCongestionLevel', validatedParams, RpcEXPERIMENTALCongestionLevelResponseSchema) as Promise<RpcEXPERIMENTALCongestionLevelResponse>;
  }

  async genesisConfig(params: RpcEXPERIMENTALGenesisConfigRequest): Promise<RpcEXPERIMENTALGenesisConfigResponse> {
    const validatedParams = RpcEXPERIMENTALGenesisConfigRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALGenesisConfig', validatedParams, RpcEXPERIMENTALGenesisConfigResponseSchema) as Promise<RpcEXPERIMENTALGenesisConfigResponse>;
  }

  async lightClientProof(params: RpcEXPERIMENTALLightClientProofRequest): Promise<RpcEXPERIMENTALLightClientProofResponse> {
    const validatedParams = RpcEXPERIMENTALLightClientProofRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALLightClientProof', validatedParams, RpcEXPERIMENTALLightClientProofResponseSchema) as Promise<RpcEXPERIMENTALLightClientProofResponse>;
  }

  async maintenanceWindows(params: RpcEXPERIMENTALMaintenanceWindowsRequest): Promise<RpcEXPERIMENTALMaintenanceWindowsResponse> {
    const validatedParams = RpcEXPERIMENTALMaintenanceWindowsRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALMaintenanceWindows', validatedParams, RpcEXPERIMENTALMaintenanceWindowsResponseSchema) as Promise<RpcEXPERIMENTALMaintenanceWindowsResponse>;
  }

  async protocolConfig(params: RpcEXPERIMENTALProtocolConfigRequest): Promise<RpcEXPERIMENTALProtocolConfigResponse> {
    const validatedParams = RpcEXPERIMENTALProtocolConfigRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALProtocolConfig', validatedParams, RpcEXPERIMENTALProtocolConfigResponseSchema) as Promise<RpcEXPERIMENTALProtocolConfigResponse>;
  }

  async receipt(params: RpcEXPERIMENTALReceiptRequest): Promise<RpcEXPERIMENTALReceiptResponse> {
    const validatedParams = RpcEXPERIMENTALReceiptRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALReceipt', validatedParams, RpcEXPERIMENTALReceiptResponseSchema) as Promise<RpcEXPERIMENTALReceiptResponse>;
  }

  async splitStorageInfo(params: RpcEXPERIMENTALSplitStorageInfoRequest): Promise<RpcEXPERIMENTALSplitStorageInfoResponse> {
    const validatedParams = RpcEXPERIMENTALSplitStorageInfoRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALSplitStorageInfo', validatedParams, RpcEXPERIMENTALSplitStorageInfoResponseSchema) as Promise<RpcEXPERIMENTALSplitStorageInfoResponse>;
  }

  async validatorsOrdered(params: RpcEXPERIMENTALValidatorsOrderedRequest): Promise<RpcEXPERIMENTALValidatorsOrderedResponse> {
    const validatedParams = RpcEXPERIMENTALValidatorsOrderedRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALValidatorsOrdered', validatedParams, RpcEXPERIMENTALValidatorsOrderedResponseSchema) as Promise<RpcEXPERIMENTALValidatorsOrderedResponse>;
  }

  async clientConfig(params: RpcClientConfigRequest): Promise<RpcClientConfigResponse> {
    const validatedParams = RpcClientConfigRequestSchema.parse(params);
    return this.client.makeRequest('clientConfig', validatedParams, RpcClientConfigResponseSchema) as Promise<RpcClientConfigResponse>;
  }

  async gasPrice(params: RpcGasPriceRequest): Promise<RpcGasPriceResponse> {
    const validatedParams = RpcGasPriceRequestSchema.parse(params);
    return this.client.makeRequest('gasPrice', validatedParams, RpcGasPriceResponseSchema) as Promise<RpcGasPriceResponse>;
  }

  async health(params: RpcHealthRequest): Promise<RpcHealthResponse> {
    const validatedParams = RpcHealthRequestSchema.parse(params);
    return this.client.makeRequest('health', validatedParams, RpcHealthResponseSchema) as Promise<RpcHealthResponse>;
  }

  async networkInfo(params: RpcNetworkInfoRequest): Promise<RpcNetworkInfoResponse> {
    const validatedParams = RpcNetworkInfoRequestSchema.parse(params);
    return this.client.makeRequest('networkInfo', validatedParams, RpcNetworkInfoResponseSchema) as Promise<RpcNetworkInfoResponse>;
  }

  async status(params: RpcStatusRequest): Promise<RpcStatusResponse> {
    const validatedParams = RpcStatusRequestSchema.parse(params);
    return this.client.makeRequest('status', validatedParams, RpcStatusResponseSchema) as Promise<RpcStatusResponse>;
  }

  async validators(params: RpcValidatorRequest): Promise<RpcValidatorResponse> {
    const validatedParams = RpcValidatorRequestSchema.parse(params);
    return this.client.makeRequest('validators', validatedParams, RpcValidatorResponseSchema) as Promise<RpcValidatorResponse>;
  }
}
