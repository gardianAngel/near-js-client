/**
 * Generated types for NEAR Protocol JSON-RPC
 */
export interface JsonRpcRequest {
    jsonrpc: '2.0';
    method: string;
    params: unknown;
    id: string | number;
}
export interface JsonRpcResponse<T = unknown> {
    jsonrpc: '2.0';
    result?: T;
    error?: JsonRpcError;
    id: string | number;
}
export interface JsonRpcError {
    code: number;
    message: string;
    data?: unknown;
}
export type Finality = 'final' | 'near-final' | 'optimistic';
export type BlockId = string | number;
export interface BlockReference {
    blockId?: BlockId;
    finality?: Finality;
}
export interface RpcEXPERIMENTALchangesRequest {
    [key: string]: any;
}
export interface RpcEXPERIMENTALchangesResponse {
    [key: string]: any;
}
export interface RpcEXPERIMENTALcongestionlevelRequest {
    [key: string]: any;
}
export interface RpcEXPERIMENTALcongestionlevelResponse {
    [key: string]: any;
}
export interface RpcEXPERIMENTALlightclientproofRequest {
    [key: string]: any;
}
export interface RpcEXPERIMENTALlightclientproofResponse {
    [key: string]: any;
}
export interface RpcEXPERIMENTALmaintenancewindowsRequest {
    [key: string]: any;
}
export interface RpcEXPERIMENTALmaintenancewindowsResponse {
    [key: string]: any;
}
export interface RpcEXPERIMENTALsplitstorageinfoRequest {
    [key: string]: any;
}
export interface RpcEXPERIMENTALsplitstorageinfoResponse {
    [key: string]: any;
}
export interface RpcChangesRequest {
    [key: string]: any;
}
export interface RpcChangesResponse {
    [key: string]: any;
}
export interface RpcClientconfigRequest {
    [key: string]: any;
}
export interface RpcClientconfigResponse {
    [key: string]: any;
}
export interface RpcGaspriceRequest {
    [key: string]: any;
}
export interface RpcGaspriceResponse {
    [key: string]: any;
}
export interface RpcHealthRequest {
    [key: string]: any;
}
export interface RpcHealthResponse {
    [key: string]: any;
}
export interface RpcLightclientproofRequest {
    [key: string]: any;
}
export interface RpcLightclientproofResponse {
    [key: string]: any;
}
export interface RpcQueryRequest {
    [key: string]: any;
}
export interface RpcQueryResponse {
    [key: string]: any;
}
