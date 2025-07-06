/**
 * Network-related methods for NEAR JSON-RPC client
 */

import { z } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class NetworkMethods {
  constructor(private client: NearJsonRpcClient) {}

  /**
   * Get network status
   */
  async status(): Promise<any> {
    return this.client.makeRequest('status', {}, z.any());
  }

  /**
   * Get network info
   */
  async networkInfo(): Promise<any> {
    return this.client.makeRequest('network_info', {}, z.any());
  }

  /**
   * Get current validators
   */
  async validators(params: { block_id?: string | number; epoch_id?: string } = {}): Promise<any> {
    return this.client.makeRequest('validators', params, z.any());
  }

  /**
   * Get gas price
   */
  async gasPrice(params: { block_id?: string | number } = {}): Promise<any> {
    return this.client.makeRequest('gas_price', params, z.any());
  }

  /**
   * Get protocol config
   */
  async protocolConfig(params: { block_reference?: any } = {}): Promise<any> {
    return this.client.makeRequest('EXPERIMENTAL_protocol_config', params, z.any());
  }

  /**
   * Get genesis config
   */
  async genesisConfig(): Promise<any> {
    return this.client.makeRequest('EXPERIMENTAL_genesis_config', {}, z.any());
  }
}