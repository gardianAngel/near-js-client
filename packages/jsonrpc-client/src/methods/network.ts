/**
 * Network-related methods for NEAR JSON-RPC client
 */

import {
  RpcChangesRequest,
  RpcChangesRequestSchema,
  RpcChangesResponse,
  RpcChangesResponseSchema,
  RpcClientconfigRequest,
  RpcClientconfigRequestSchema,
  RpcClientconfigResponse,
  RpcClientconfigResponseSchema,
  RpcEXPERIMENTALchangesRequest,
  RpcEXPERIMENTALchangesRequestSchema,
  RpcEXPERIMENTALchangesResponse,
  RpcEXPERIMENTALchangesResponseSchema,
  RpcEXPERIMENTALcongestionlevelRequest,
  RpcEXPERIMENTALcongestionlevelRequestSchema,
  RpcEXPERIMENTALcongestionlevelResponse,
  RpcEXPERIMENTALcongestionlevelResponseSchema,
  RpcEXPERIMENTALgenesisconfigRequest,
  RpcEXPERIMENTALgenesisconfigRequestSchema,
  RpcEXPERIMENTALgenesisconfigResponse,
  RpcEXPERIMENTALgenesisconfigResponseSchema,
  RpcEXPERIMENTALlightclientproofRequest,
  RpcEXPERIMENTALlightclientproofRequestSchema,
  RpcEXPERIMENTALlightclientproofResponse,
  RpcEXPERIMENTALlightclientproofResponseSchema,
  RpcEXPERIMENTALmaintenancewindowsRequest,
  RpcEXPERIMENTALmaintenancewindowsRequestSchema,
  RpcEXPERIMENTALmaintenancewindowsResponse,
  RpcEXPERIMENTALmaintenancewindowsResponseSchema,
  RpcEXPERIMENTALprotocolconfigRequest,
  RpcEXPERIMENTALprotocolconfigRequestSchema,
  RpcEXPERIMENTALprotocolconfigResponse,
  RpcEXPERIMENTALprotocolconfigResponseSchema,
  RpcEXPERIMENTALreceiptRequest,
  RpcEXPERIMENTALreceiptRequestSchema,
  RpcEXPERIMENTALreceiptResponse,
  RpcEXPERIMENTALreceiptResponseSchema,
  RpcEXPERIMENTALsplitstorageinfoRequest,
  RpcEXPERIMENTALsplitstorageinfoRequestSchema,
  RpcEXPERIMENTALsplitstorageinfoResponse,
  RpcEXPERIMENTALsplitstorageinfoResponseSchema,
  RpcEXPERIMENTALvalidatorsorderedRequest,
  RpcEXPERIMENTALvalidatorsorderedRequestSchema,
  RpcEXPERIMENTALvalidatorsorderedResponse,
  RpcEXPERIMENTALvalidatorsorderedResponseSchema,
  RpcGaspriceRequest,
  RpcGaspriceRequestSchema,
  RpcGaspriceResponse,
  RpcGaspriceResponseSchema,
  RpcHealthRequest,
  RpcHealthRequestSchema,
  RpcHealthResponse,
  RpcHealthResponseSchema,
  RpcLightclientproofRequest,
  RpcLightclientproofRequestSchema,
  RpcLightclientproofResponse,
  RpcLightclientproofResponseSchema,
  RpcNetworkinfoRequest,
  RpcNetworkinfoRequestSchema,
  RpcNetworkinfoResponse,
  RpcNetworkinfoResponseSchema,
  RpcStatusRequest,
  RpcStatusRequestSchema,
  RpcStatusResponse,
  RpcStatusResponseSchema,
  RpcValidatorsRequest,
  RpcValidatorsRequestSchema,
  RpcValidatorsResponse,
  RpcValidatorsResponseSchema
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class NetworkMethods {
  constructor(private client: NearJsonRpcClient) {}

  async changes(params: RpcEXPERIMENTALchangesRequest): Promise<RpcEXPERIMENTALchangesResponse> {
    const validatedParams = RpcEXPERIMENTALchangesRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALchanges', validatedParams, RpcEXPERIMENTALchangesResponseSchema);
  }

  async congestionlevel(params: RpcEXPERIMENTALcongestionlevelRequest): Promise<RpcEXPERIMENTALcongestionlevelResponse> {
    const validatedParams = RpcEXPERIMENTALcongestionlevelRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALcongestionlevel', validatedParams, RpcEXPERIMENTALcongestionlevelResponseSchema);
  }

  async genesisconfig(params: RpcEXPERIMENTALgenesisconfigRequest): Promise<RpcEXPERIMENTALgenesisconfigResponse> {
    const validatedParams = RpcEXPERIMENTALgenesisconfigRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALgenesisconfig', validatedParams, RpcEXPERIMENTALgenesisconfigResponseSchema);
  }

  async lightclientproof(params: RpcEXPERIMENTALlightclientproofRequest): Promise<RpcEXPERIMENTALlightclientproofResponse> {
    const validatedParams = RpcEXPERIMENTALlightclientproofRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALlightclientproof', validatedParams, RpcEXPERIMENTALlightclientproofResponseSchema);
  }

  async maintenancewindows(params: RpcEXPERIMENTALmaintenancewindowsRequest): Promise<RpcEXPERIMENTALmaintenancewindowsResponse> {
    const validatedParams = RpcEXPERIMENTALmaintenancewindowsRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALmaintenancewindows', validatedParams, RpcEXPERIMENTALmaintenancewindowsResponseSchema);
  }

  async protocolconfig(params: RpcEXPERIMENTALprotocolconfigRequest): Promise<RpcEXPERIMENTALprotocolconfigResponse> {
    const validatedParams = RpcEXPERIMENTALprotocolconfigRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALprotocolconfig', validatedParams, RpcEXPERIMENTALprotocolconfigResponseSchema);
  }

  async receipt(params: RpcEXPERIMENTALreceiptRequest): Promise<RpcEXPERIMENTALreceiptResponse> {
    const validatedParams = RpcEXPERIMENTALreceiptRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALreceipt', validatedParams, RpcEXPERIMENTALreceiptResponseSchema);
  }

  async splitstorageinfo(params: RpcEXPERIMENTALsplitstorageinfoRequest): Promise<RpcEXPERIMENTALsplitstorageinfoResponse> {
    const validatedParams = RpcEXPERIMENTALsplitstorageinfoRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALsplitstorageinfo', validatedParams, RpcEXPERIMENTALsplitstorageinfoResponseSchema);
  }

  async validatorsordered(params: RpcEXPERIMENTALvalidatorsorderedRequest): Promise<RpcEXPERIMENTALvalidatorsorderedResponse> {
    const validatedParams = RpcEXPERIMENTALvalidatorsorderedRequestSchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALvalidatorsordered', validatedParams, RpcEXPERIMENTALvalidatorsorderedResponseSchema);
  }

  async changes(params: RpcChangesRequest): Promise<RpcChangesResponse> {
    const validatedParams = RpcChangesRequestSchema.parse(params);
    return this.client.makeRequest('Changes', validatedParams, RpcChangesResponseSchema);
  }

  async clientconfig(params: RpcClientconfigRequest): Promise<RpcClientconfigResponse> {
    const validatedParams = RpcClientconfigRequestSchema.parse(params);
    return this.client.makeRequest('Clientconfig', validatedParams, RpcClientconfigResponseSchema);
  }

  async gasprice(params: RpcGaspriceRequest): Promise<RpcGaspriceResponse> {
    const validatedParams = RpcGaspriceRequestSchema.parse(params);
    return this.client.makeRequest('Gasprice', validatedParams, RpcGaspriceResponseSchema);
  }

  async health(params: RpcHealthRequest): Promise<RpcHealthResponse> {
    const validatedParams = RpcHealthRequestSchema.parse(params);
    return this.client.makeRequest('Health', validatedParams, RpcHealthResponseSchema);
  }

  async lightclientproof(params: RpcLightclientproofRequest): Promise<RpcLightclientproofResponse> {
    const validatedParams = RpcLightclientproofRequestSchema.parse(params);
    return this.client.makeRequest('Lightclientproof', validatedParams, RpcLightclientproofResponseSchema);
  }

  async networkinfo(params: RpcNetworkinfoRequest): Promise<RpcNetworkinfoResponse> {
    const validatedParams = RpcNetworkinfoRequestSchema.parse(params);
    return this.client.makeRequest('Networkinfo', validatedParams, RpcNetworkinfoResponseSchema);
  }

  async status(params: RpcStatusRequest): Promise<RpcStatusResponse> {
    const validatedParams = RpcStatusRequestSchema.parse(params);
    return this.client.makeRequest('Status', validatedParams, RpcStatusResponseSchema);
  }

  async validators(params: RpcValidatorsRequest): Promise<RpcValidatorsResponse> {
    const validatedParams = RpcValidatorsRequestSchema.parse(params);
    return this.client.makeRequest('Validators', validatedParams, RpcValidatorsResponseSchema);
  }
}
