/**
 * Network-related methods for NEAR JSON-RPC client
 */
import type { NearJsonRpcClient } from '../client';
export declare class NetworkMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    /**
     * Get network status
     */
    status(): Promise<any>;
    /**
     * Get network info
     */
    networkInfo(): Promise<any>;
    /**
     * Get current validators
     */
    validators(params?: {
        block_id?: string | number;
        epoch_id?: string;
    }): Promise<any>;
    /**
     * Get gas price
     */
    gasPrice(params?: {
        block_id?: string | number;
    }): Promise<any>;
    /**
     * Get protocol config
     */
    protocolConfig(params?: {
        block_reference?: any;
    }): Promise<any>;
    /**
     * Get genesis config
     */
    genesisConfig(): Promise<any>;
}
