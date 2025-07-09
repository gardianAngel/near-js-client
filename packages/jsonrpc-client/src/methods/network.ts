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
    return this.client.makeRequest('EXPERIMENTALChanges', validatedParams, RpcEXPERIMENTALChangesResponseSchema);
  }

  async congestionLevel(params: RpcEXPERIMENTALCongestionLevelRequest): Promise<RpcEXPERIMENTALCongestionLevelResponse> {
    const validatedParams = RpcEXPERIMENTALCongestionLevelRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALCongestionLevel', validatedParams, RpcEXPERIMENTALCongestionLevelResponseSchema);
  }

  async genesisConfig(params: RpcEXPERIMENTALGenesisConfigRequest): Promise<RpcEXPERIMENTALGenesisConfigResponse> {
    const validatedParams = RpcEXPERIMENTALGenesisConfigRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALGenesisConfig', validatedParams, RpcEXPERIMENTALGenesisConfigResponseSchema);
  }

  async lightClientProof(params: RpcEXPERIMENTALLightClientProofRequest): Promise<RpcEXPERIMENTALLightClientProofResponse> {
    const validatedParams = RpcEXPERIMENTALLightClientProofRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALLightClientProof', validatedParams, RpcEXPERIMENTALLightClientProofResponseSchema);
  }

  async maintenanceWindows(params: RpcEXPERIMENTALMaintenanceWindowsRequest): Promise<RpcEXPERIMENTALMaintenanceWindowsResponse> {
    const validatedParams = RpcEXPERIMENTALMaintenanceWindowsRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALMaintenanceWindows', validatedParams, RpcEXPERIMENTALMaintenanceWindowsResponseSchema);
  }

  async protocolConfig(params: RpcEXPERIMENTALProtocolConfigRequest): Promise<RpcEXPERIMENTALProtocolConfigResponse> {
    const validatedParams = RpcEXPERIMENTALProtocolConfigRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALProtocolConfig', validatedParams, RpcEXPERIMENTALProtocolConfigResponseSchema);
  }

  async receipt(params: RpcEXPERIMENTALReceiptRequest): Promise<RpcEXPERIMENTALReceiptResponse> {
    const validatedParams = RpcEXPERIMENTALReceiptRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALReceipt', validatedParams, RpcEXPERIMENTALReceiptResponseSchema);
  }

  async splitStorageInfo(params: RpcEXPERIMENTALSplitStorageInfoRequest): Promise<RpcEXPERIMENTALSplitStorageInfoResponse> {
    const validatedParams = RpcEXPERIMENTALSplitStorageInfoRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALSplitStorageInfo', validatedParams, RpcEXPERIMENTALSplitStorageInfoResponseSchema);
  }

  async validatorsOrdered(params: RpcEXPERIMENTALValidatorsOrderedRequest): Promise<RpcEXPERIMENTALValidatorsOrderedResponse> {
    const validatedParams = RpcEXPERIMENTALValidatorsOrderedRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALValidatorsOrdered', validatedParams, RpcEXPERIMENTALValidatorsOrderedResponseSchema);
  }

  async changes(params: RpcChangesRequest): Promise<RpcChangesResponse> {
    const validatedParams = RpcChangesRequestSchema.parse(params);
    return this.client.makeRequest('changes', validatedParams, RpcChangesResponseSchema);
  }

  async clientConfig(params: RpcClientConfigRequest): Promise<RpcClientConfigResponse> {
    const validatedParams = RpcClientConfigRequestSchema.parse(params);
    return this.client.makeRequest('clientConfig', validatedParams, RpcClientConfigResponseSchema);
  }

  async gasPrice(params: RpcGasPriceRequest): Promise<RpcGasPriceResponse> {
    const validatedParams = RpcGasPriceRequestSchema.parse(params);
    return this.client.makeRequest('gasPrice', validatedParams, RpcGasPriceResponseSchema);
  }

  async health(params: RpcHealthRequest): Promise<RpcHealthResponse> {
    const validatedParams = RpcHealthRequestSchema.parse(params);
    return this.client.makeRequest('health', validatedParams, RpcHealthResponseSchema);
  }

  async lightClientProof(params: RpcLightClientProofRequest): Promise<RpcLightClientProofResponse> {
    const validatedParams = RpcLightClientProofRequestSchema.parse(params);
    return this.client.makeRequest('lightClientProof', validatedParams, RpcLightClientProofResponseSchema);
  }

  async networkInfo(params: RpcNetworkInfoRequest): Promise<RpcNetworkInfoResponse> {
    const validatedParams = RpcNetworkInfoRequestSchema.parse(params);
    return this.client.makeRequest('networkInfo', validatedParams, RpcNetworkInfoResponseSchema);
  }

  async status(params: RpcStatusRequest): Promise<RpcStatusResponse> {
    const validatedParams = RpcStatusRequestSchema.parse(params);
    return this.client.makeRequest('status', validatedParams, RpcStatusResponseSchema);
  }

  async validators(params: RpcValidatorRequest): Promise<RpcValidatorResponse> {
    const validatedParams = RpcValidatorRequestSchema.parse(params);
    return this.client.makeRequest('validators', validatedParams, RpcValidatorResponseSchema);
  }
}
