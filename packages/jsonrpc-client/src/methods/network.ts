/**
 * Network-related methods for NEAR JSON-RPC client
 */

import {
  ChangesQuerySchema,
  ChangesRequest,
  ChangesResponse,
  ChangesResponseSchema,
  ClientconfigQuerySchema,
  ClientconfigRequest,
  ClientconfigResponse,
  ClientconfigResponseSchema,
  CongestionlevelQuerySchema,
  CongestionlevelRequest,
  CongestionlevelResponse,
  CongestionlevelResponseSchema,
  GaspriceQuerySchema,
  GaspriceRequest,
  GaspriceResponse,
  GaspriceResponseSchema,
  GenesisconfigQuerySchema,
  GenesisconfigRequest,
  GenesisconfigResponse,
  GenesisconfigResponseSchema,
  HealthQuerySchema,
  HealthRequest,
  HealthResponse,
  HealthResponseSchema,
  LightclientproofQuerySchema,
  LightclientproofRequest,
  LightclientproofResponse,
  LightclientproofResponseSchema,
  MaintenancewindowsQuerySchema,
  MaintenancewindowsRequest,
  MaintenancewindowsResponse,
  MaintenancewindowsResponseSchema,
  NetworkinfoQuerySchema,
  NetworkinfoRequest,
  NetworkinfoResponse,
  NetworkinfoResponseSchema,
  ProtocolconfigQuerySchema,
  ProtocolconfigRequest,
  ProtocolconfigResponse,
  ProtocolconfigResponseSchema,
  ReceiptQuerySchema,
  ReceiptRequest,
  ReceiptResponse,
  ReceiptResponseSchema,
  SplitstorageinfoQuerySchema,
  SplitstorageinfoRequest,
  SplitstorageinfoResponse,
  SplitstorageinfoResponseSchema,
  StatusQuerySchema,
  StatusRequest,
  StatusResponse,
  StatusResponseSchema,
  ValidatorsQuerySchema,
  ValidatorsRequest,
  ValidatorsResponse,
  ValidatorsResponseSchema,
  ValidatorsorderedQuerySchema,
  ValidatorsorderedRequest,
  ValidatorsorderedResponse,
  ValidatorsorderedResponseSchema
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class NetworkMethods {
  constructor(private client: NearJsonRpcClient) {}

  async changes(params: ChangesQuery): Promise<ChangesResponse> {
    const validatedParams = ChangesQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALchanges', validatedParams, ChangesResponseSchema);
  }

  async congestionlevel(params: CongestionlevelQuery): Promise<CongestionlevelResponse> {
    const validatedParams = CongestionlevelQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALcongestionlevel', validatedParams, CongestionlevelResponseSchema);
  }

  async genesisconfig(params: GenesisconfigQuery): Promise<GenesisconfigResponse> {
    const validatedParams = GenesisconfigQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALgenesisconfig', validatedParams, GenesisconfigResponseSchema);
  }

  async lightclientproof(params: LightclientproofQuery): Promise<LightclientproofResponse> {
    const validatedParams = LightclientproofQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALlightclientproof', validatedParams, LightclientproofResponseSchema);
  }

  async maintenancewindows(params: MaintenancewindowsQuery): Promise<MaintenancewindowsResponse> {
    const validatedParams = MaintenancewindowsQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALmaintenancewindows', validatedParams, MaintenancewindowsResponseSchema);
  }

  async protocolconfig(params: ProtocolconfigQuery): Promise<ProtocolconfigResponse> {
    const validatedParams = ProtocolconfigQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALprotocolconfig', validatedParams, ProtocolconfigResponseSchema);
  }

  async receipt(params: ReceiptQuery): Promise<ReceiptResponse> {
    const validatedParams = ReceiptQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALreceipt', validatedParams, ReceiptResponseSchema);
  }

  async splitstorageinfo(params: SplitstorageinfoQuery): Promise<SplitstorageinfoResponse> {
    const validatedParams = SplitstorageinfoQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALsplitstorageinfo', validatedParams, SplitstorageinfoResponseSchema);
  }

  async validatorsordered(params: ValidatorsorderedQuery): Promise<ValidatorsorderedResponse> {
    const validatedParams = ValidatorsorderedQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTALvalidatorsordered', validatedParams, ValidatorsorderedResponseSchema);
  }

  async changes(params: ChangesQuery): Promise<ChangesResponse> {
    const validatedParams = ChangesQuerySchema.parse(params);
    return this.client.makeRequest('Changes', validatedParams, ChangesResponseSchema);
  }

  async clientconfig(params: ClientconfigQuery): Promise<ClientconfigResponse> {
    const validatedParams = ClientconfigQuerySchema.parse(params);
    return this.client.makeRequest('Clientconfig', validatedParams, ClientconfigResponseSchema);
  }

  async gasprice(params: GaspriceQuery): Promise<GaspriceResponse> {
    const validatedParams = GaspriceQuerySchema.parse(params);
    return this.client.makeRequest('Gasprice', validatedParams, GaspriceResponseSchema);
  }

  async health(params: HealthQuery): Promise<HealthResponse> {
    const validatedParams = HealthQuerySchema.parse(params);
    return this.client.makeRequest('Health', validatedParams, HealthResponseSchema);
  }

  async lightclientproof(params: LightclientproofQuery): Promise<LightclientproofResponse> {
    const validatedParams = LightclientproofQuerySchema.parse(params);
    return this.client.makeRequest('Lightclientproof', validatedParams, LightclientproofResponseSchema);
  }

  async networkinfo(params: NetworkinfoQuery): Promise<NetworkinfoResponse> {
    const validatedParams = NetworkinfoQuerySchema.parse(params);
    return this.client.makeRequest('Networkinfo', validatedParams, NetworkinfoResponseSchema);
  }

  async status(params: StatusQuery): Promise<StatusResponse> {
    const validatedParams = StatusQuerySchema.parse(params);
    return this.client.makeRequest('Status', validatedParams, StatusResponseSchema);
  }

  async validators(params: ValidatorsQuery): Promise<ValidatorsResponse> {
    const validatedParams = ValidatorsQuerySchema.parse(params);
    return this.client.makeRequest('Validators', validatedParams, ValidatorsResponseSchema);
  }
}
