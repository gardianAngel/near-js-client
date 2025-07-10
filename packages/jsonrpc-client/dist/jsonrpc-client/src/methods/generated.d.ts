/**
 * Generated RPC methods for NEAR Protocol JSON-RPC API
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */
import { NearJsonRpcClient } from '../client-generated';
import * as Types from '@near-js/jsonrpc-types';
export declare class GeneratedMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    /**
     * Execute _view_access_key RPC method
     */
    ViewAccessKey(params: Types.ViewAccessKeyParams): Promise<Types.ViewAccessKeyResult>;
    /**
     * Execute _view_access_key_list RPC method
     */
    ViewAccessKeyList(params: Types.ViewAccessKeyListParams): Promise<Types.ViewAccessKeyListResult>;
    /**
     * Execute _view_account RPC method
     */
    ViewAccount(params: Types.ViewAccountParams): Promise<Types.ViewAccountResult>;
    /**
     * Execute _view_code RPC method
     */
    ViewCode(params: Types.ViewCodeParams): Promise<Types.ViewCodeResult>;
    /**
     * Execute _view_state RPC method
     */
    ViewState(params: Types.ViewStateParams): Promise<Types.ViewStateResult>;
    /**
     * Execute _call_function RPC method
     */
    CallFunction(params: Types.CallFunctionParams): Promise<Types.CallFunctionResult>;
    /**
     * Execute _block RPC method
     */
    Block(params: Types.BlockParams): Promise<Types.BlockResult>;
    /**
     * Execute _chunk RPC method
     */
    Chunk(params: Types.ChunkParams): Promise<Types.ChunkResult>;
    /**
     * Execute _changes_in_block RPC method
     */
    ChangesInBlock(params: Types.ChangesInBlockParams): Promise<Types.ChangesInBlockResult>;
    /**
     * Execute _experimental_changes_in_block RPC method
     */
    ExperimentalChangesInBlock(params: Types.ExperimentalChangesInBlockParams): Promise<Types.ExperimentalChangesInBlockResult>;
    /**
     * Execute _gas_price RPC method
     */
    GasPrice(params: Types.GasPriceParams): Promise<Types.GasPriceResult>;
    /**
     * Execute _experimental_genesis_config RPC method
     */
    ExperimentalGenesisConfig(params: Types.ExperimentalGenesisConfigParams): Promise<Types.ExperimentalGenesisConfigResult>;
    /**
     * Execute _experimental_protocol_config RPC method
     */
    ExperimentalProtocolConfig(params: Types.ExperimentalProtocolConfigParams): Promise<Types.ExperimentalProtocolConfigResult>;
    /**
     * Execute _network_info RPC method
     */
    NetworkInfo(params: Types.NetworkInfoParams): Promise<Types.NetworkInfoResult>;
    /**
     * Execute _status RPC method
     */
    Status(params: Types.StatusParams): Promise<Types.StatusResult>;
    /**
     * Execute _validators RPC method
     */
    Validators(params: Types.ValidatorsParams): Promise<Types.ValidatorsResult>;
    /**
     * Execute _broadcast_tx_async RPC method
     */
    BroadcastTxAsync(params: Types.BroadcastTxAsyncParams): Promise<Types.BroadcastTxAsyncResult>;
    /**
     * Execute _broadcast_tx_commit RPC method
     */
    BroadcastTxCommit(params: Types.BroadcastTxCommitParams): Promise<Types.BroadcastTxCommitResult>;
    /**
     * Execute _tx RPC method
     */
    Tx(params: Types.TxParams): Promise<Types.TxResult>;
    /**
     * Execute _experimental_tx_status RPC method
     */
    ExperimentalTxStatus(params: Types.ExperimentalTxStatusParams): Promise<Types.ExperimentalTxStatusResult>;
}
