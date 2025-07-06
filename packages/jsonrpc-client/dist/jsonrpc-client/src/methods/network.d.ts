/**
 * Network-related methods for NEAR JSON-RPC client
 */
import { ClientconfigResponse, CongestionlevelResponse, GaspriceResponse, GenesisconfigResponse, HealthResponse, MaintenancewindowsResponse, NetworkinfoResponse, ProtocolconfigResponse, ReceiptResponse, SplitstorageinfoResponse, StatusResponse, ValidatorsResponse, ValidatorsorderedResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class NetworkMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    congestionlevel(params: CongestionlevelQuery): Promise<CongestionlevelResponse>;
    genesisconfig(params: GenesisconfigQuery): Promise<GenesisconfigResponse>;
    maintenancewindows(params: MaintenancewindowsQuery): Promise<MaintenancewindowsResponse>;
    protocolconfig(params: ProtocolconfigQuery): Promise<ProtocolconfigResponse>;
    receipt(params: ReceiptQuery): Promise<ReceiptResponse>;
    splitstorageinfo(params: SplitstorageinfoQuery): Promise<SplitstorageinfoResponse>;
    validatorsordered(params: ValidatorsorderedQuery): Promise<ValidatorsorderedResponse>;
    clientconfig(params: ClientconfigQuery): Promise<ClientconfigResponse>;
    gasprice(params: GaspriceQuery): Promise<GaspriceResponse>;
    health(params: HealthQuery): Promise<HealthResponse>;
    networkinfo(params: NetworkinfoQuery): Promise<NetworkinfoResponse>;
    status(params: StatusQuery): Promise<StatusResponse>;
    validators(params: ValidatorsQuery): Promise<ValidatorsResponse>;
}
