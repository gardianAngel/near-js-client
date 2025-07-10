/**
 * Generated RPC methods for NEAR Protocol JSON-RPC API
 * Generated from OpenAPI specification
 * DO NOT EDIT MANUALLY
 */

import { NearJsonRpcClient } from '../client-generated';
import * as Types from '@near-js/jsonrpc-types';
import * as Schemas from '@near-js/jsonrpc-types';

export class GeneratedMethods {
  constructor(private client: NearJsonRpcClient) {}

  /**
   * Execute _view_access_key RPC method
   */
  async ViewAccessKey(params: Types.ViewAccessKeyParams): Promise<Types.ViewAccessKeyResult> {
    const result = await this.client.request('_view_access_key', params);
    return Schemas.ViewAccessKeyResultSchema.parse(result);
  }

  /**
   * Execute _view_access_key_list RPC method
   */
  async ViewAccessKeyList(params: Types.ViewAccessKeyListParams): Promise<Types.ViewAccessKeyListResult> {
    const result = await this.client.request('_view_access_key_list', params);
    return Schemas.ViewAccessKeyListResultSchema.parse(result);
  }

  /**
   * Execute _view_account RPC method
   */
  async ViewAccount(params: Types.ViewAccountParams): Promise<Types.ViewAccountResult> {
    const result = await this.client.request('_view_account', params);
    return Schemas.ViewAccountResultSchema.parse(result);
  }

  /**
   * Execute _view_code RPC method
   */
  async ViewCode(params: Types.ViewCodeParams): Promise<Types.ViewCodeResult> {
    const result = await this.client.request('_view_code', params);
    return Schemas.ViewCodeResultSchema.parse(result);
  }

  /**
   * Execute _view_state RPC method
   */
  async ViewState(params: Types.ViewStateParams): Promise<Types.ViewStateResult> {
    const result = await this.client.request('_view_state', params);
    return Schemas.ViewStateResultSchema.parse(result);
  }

  /**
   * Execute _call_function RPC method
   */
  async CallFunction(params: Types.CallFunctionParams): Promise<Types.CallFunctionResult> {
    const result = await this.client.request('_call_function', params);
    return Schemas.CallFunctionResultSchema.parse(result);
  }

  /**
   * Execute _block RPC method
   */
  async Block(params: Types.BlockParams): Promise<Types.BlockResult> {
    const result = await this.client.request('_block', params);
    return Schemas.BlockResultSchema.parse(result);
  }

  /**
   * Execute _chunk RPC method
   */
  async Chunk(params: Types.ChunkParams): Promise<Types.ChunkResult> {
    const result = await this.client.request('_chunk', params);
    return Schemas.ChunkResultSchema.parse(result);
  }

  /**
   * Execute _changes_in_block RPC method
   */
  async ChangesInBlock(params: Types.ChangesInBlockParams): Promise<Types.ChangesInBlockResult> {
    const result = await this.client.request('_changes_in_block', params);
    return Schemas.ChangesInBlockResultSchema.parse(result);
  }

  /**
   * Execute _experimental_changes_in_block RPC method
   */
  async ExperimentalChangesInBlock(params: Types.ExperimentalChangesInBlockParams): Promise<Types.ExperimentalChangesInBlockResult> {
    const result = await this.client.request('_experimental_changes_in_block', params);
    return Schemas.ExperimentalChangesInBlockResultSchema.parse(result);
  }

  /**
   * Execute _gas_price RPC method
   */
  async GasPrice(params: Types.GasPriceParams): Promise<Types.GasPriceResult> {
    const result = await this.client.request('_gas_price', params);
    return Schemas.GasPriceResultSchema.parse(result);
  }

  /**
   * Execute _experimental_genesis_config RPC method
   */
  async ExperimentalGenesisConfig(params: Types.ExperimentalGenesisConfigParams): Promise<Types.ExperimentalGenesisConfigResult> {
    const result = await this.client.request('_experimental_genesis_config', params);
    return Schemas.ExperimentalGenesisConfigResultSchema.parse(result);
  }

  /**
   * Execute _experimental_protocol_config RPC method
   */
  async ExperimentalProtocolConfig(params: Types.ExperimentalProtocolConfigParams): Promise<Types.ExperimentalProtocolConfigResult> {
    const result = await this.client.request('_experimental_protocol_config', params);
    return Schemas.ExperimentalProtocolConfigResultSchema.parse(result);
  }

  /**
   * Execute _network_info RPC method
   */
  async NetworkInfo(params: Types.NetworkInfoParams): Promise<Types.NetworkInfoResult> {
    const result = await this.client.request('_network_info', params);
    return Schemas.NetworkInfoResultSchema.parse(result);
  }

  /**
   * Execute _status RPC method
   */
  async Status(params: Types.StatusParams): Promise<Types.StatusResult> {
    const result = await this.client.request('_status', params);
    return Schemas.StatusResultSchema.parse(result);
  }

  /**
   * Execute _validators RPC method
   */
  async Validators(params: Types.ValidatorsParams): Promise<Types.ValidatorsResult> {
    const result = await this.client.request('_validators', params);
    return Schemas.ValidatorsResultSchema.parse(result);
  }

  /**
   * Execute _broadcast_tx_async RPC method
   */
  async BroadcastTxAsync(params: Types.BroadcastTxAsyncParams): Promise<Types.BroadcastTxAsyncResult> {
    const result = await this.client.request('_broadcast_tx_async', params);
    return Schemas.BroadcastTxAsyncResultSchema.parse(result);
  }

  /**
   * Execute _broadcast_tx_commit RPC method
   */
  async BroadcastTxCommit(params: Types.BroadcastTxCommitParams): Promise<Types.BroadcastTxCommitResult> {
    const result = await this.client.request('_broadcast_tx_commit', params);
    return Schemas.BroadcastTxCommitResultSchema.parse(result);
  }

  /**
   * Execute _tx RPC method
   */
  async Tx(params: Types.TxParams): Promise<Types.TxResult> {
    const result = await this.client.request('_tx', params);
    return Schemas.TxResultSchema.parse(result);
  }

  /**
   * Execute _experimental_tx_status RPC method
   */
  async ExperimentalTxStatus(params: Types.ExperimentalTxStatusParams): Promise<Types.ExperimentalTxStatusResult> {
    const result = await this.client.request('_experimental_tx_status', params);
    return Schemas.ExperimentalTxStatusResultSchema.parse(result);
  }

}
