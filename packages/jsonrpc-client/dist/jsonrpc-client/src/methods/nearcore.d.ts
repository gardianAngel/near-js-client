/**
 * Generated RPC methods for NEAR Protocol JSON-RPC API
 * Generated from nearcore OpenAPI specification
 * DO NOT EDIT MANUALLY - Regenerate using tools/codegen/nearcore-client-generator.ts
 */
import { NearJsonRpcClient } from '../client-nearcore';
export declare class NearcoreMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    /**
     * Execute EXPERIMENTAL_changes RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALChanges(params?: any): Promise<any>;
    /**
     * Execute EXPERIMENTAL_changes_in_block RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALChangesInBlock(params?: any): Promise<any>;
    /**
     * Execute EXPERIMENTAL_congestion_level RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALCongestionLevel(params?: any): Promise<any>;
    /**
     * Execute EXPERIMENTAL_genesis_config RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALGenesisConfig(params?: any): Promise<any>;
    /**
     * Execute EXPERIMENTAL_light_client_block_proof RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALLightClientBlockProof(params?: any): Promise<any>;
    /**
     * Execute EXPERIMENTAL_light_client_proof RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALLightClientProof(params?: any): Promise<any>;
    /**
     * Execute EXPERIMENTAL_maintenance_windows RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALMaintenanceWindows(params?: any): Promise<any>;
    /**
     * Execute EXPERIMENTAL_protocol_config RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALProtocolConfig(params?: any): Promise<any>;
    /**
     * Execute EXPERIMENTAL_receipt RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALReceipt(params?: any): Promise<any>;
    /**
     * Execute EXPERIMENTAL_split_storage_info RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALSplitStorageInfo(params?: any): Promise<any>;
    /**
     * Execute EXPERIMENTAL_tx_status RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALTxStatus(params?: any): Promise<any>;
    /**
     * Execute EXPERIMENTAL_validators_ordered RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    EXPERIMENTALValidatorsOrdered(params?: any): Promise<any>;
    /**
     * Execute block RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    block(params?: any): Promise<any>;
    /**
     * Execute broadcast_tx_async RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    broadcastTxAsync(params?: any): Promise<any>;
    /**
     * Execute broadcast_tx_commit RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    broadcastTxCommit(params?: any): Promise<any>;
    /**
     * Execute changes RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    changes(params?: any): Promise<any>;
    /**
     * Execute chunk RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    chunk(params?: any): Promise<any>;
    /**
     * Execute client_config RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    clientConfig(params?: any): Promise<any>;
    /**
     * Execute gas_price RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    gasPrice(params?: any): Promise<any>;
    /**
     * Execute health RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    health(params?: any): Promise<any>;
    /**
     * Execute light_client_proof RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    lightClientProof(params?: any): Promise<any>;
    /**
     * Execute network_info RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    networkInfo(params?: any): Promise<any>;
    /**
     * Execute next_light_client_block RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    nextLightClientBlock(params?: any): Promise<any>;
    /**
     * Execute query RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    query(params?: any): Promise<any>;
    /**
     * Execute send_tx RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    sendTx(params?: any): Promise<any>;
    /**
     * Execute status RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    status(params?: any): Promise<any>;
    /**
     * Execute tx RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    tx(params?: any): Promise<any>;
    /**
     * Execute validators RPC method
     *
     * @param params - Request parameters
     * @returns Promise resolving to the response
     */
    validators(params?: any): Promise<any>;
}
