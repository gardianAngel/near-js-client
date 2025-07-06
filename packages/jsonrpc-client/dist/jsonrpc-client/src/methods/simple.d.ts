/**
 * Simple RPC methods for NEAR Protocol
 *
 * Basic implementations of common NEAR RPC methods using direct JSON-RPC calls.
 * This approach uses the client's makeRequest method which handles snake_case/camelCase conversion.
 */
import { NearJsonRpcClient } from '../client';
export declare class SimpleMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    /**
     * Get network status
     */
    status(params?: any): Promise<any>;
    /**
     * Get latest block
     */
    block(params?: any): Promise<any>;
    /**
     * Get transaction status
     */
    txStatus(params: any): Promise<any>;
    /**
     * View account details
     */
    viewAccount(params: any): Promise<any>;
    /**
     * Get gas price
     */
    gasPrice(params?: any): Promise<any>;
    /**
     * Broadcast transaction (async)
     */
    broadcastTxAsync(params: any): Promise<any>;
    /**
     * Broadcast transaction (commit)
     */
    broadcastTxCommit(params: any): Promise<any>;
    /**
     * Send transaction
     */
    sendTx(params: any): Promise<any>;
}
