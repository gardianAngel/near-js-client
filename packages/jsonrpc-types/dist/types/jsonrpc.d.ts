/**
 * Core JSON-RPC types for NEAR Protocol
 */
export interface JsonRpcRequest {
    jsonrpc: '2.0';
    id: string | number;
    method: string;
    params?: any;
}
export interface JsonRpcResponse {
    jsonrpc: '2.0';
    id: string | number;
    result?: any;
    error?: {
        code: number;
        message: string;
        data?: any;
    };
}
export interface JsonRpcError {
    code: number;
    message: string;
    data?: any;
}
