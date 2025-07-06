/**
 * Transaction-related methods for NEAR JSON-RPC client
 */

import { z } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class TransactionMethods {
  constructor(private client: NearJsonRpcClient) {}

  /**
   * Get transaction status
   */
  async txStatus(params: { tx_hash: string; sender_account_id: string }): Promise<any> {
    return this.client.makeRequest('EXPERIMENTAL_tx_status', params, z.any());
  }

  /**
   * Broadcast transaction asynchronously
   */
  async broadcastTxAsync(params: { signed_tx_base64: string }): Promise<any> {
    return this.client.makeRequest('broadcast_tx_async', params, z.any());
  }

  /**
   * Broadcast transaction and wait for commit
   */
  async broadcastTxCommit(params: { signed_tx_base64: string }): Promise<any> {
    return this.client.makeRequest('broadcast_tx_commit', params, z.any());
  }

  /**
   * Send transaction
   */
  async sendTx(params: { signed_tx_base64: string }): Promise<any> {
    return this.client.makeRequest('send_tx', params, z.any());
  }

  /**
   * Get transaction details
   */
  async tx(params: { tx_hash: string; sender_account_id: string }): Promise<any> {
    return this.client.makeRequest('tx', params, z.any());
  }
}