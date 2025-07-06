/**
 * Simple RPC methods for NEAR Protocol
 * 
 * Basic implementations of common NEAR RPC methods using direct JSON-RPC calls.
 * This approach uses the client's makeRequest method which handles snake_case/camelCase conversion.
 */

import { NearJsonRpcClient } from '../client';

export class SimpleMethods {
  constructor(private client: NearJsonRpcClient) {}

  /**
   * Get network status
   */
  async status(params: any = {}): Promise<any> {
    return this.client.makeRequest('status', params);
  }

  /**
   * Get latest block
   */
  async block(params: any = {}): Promise<any> {
    return this.client.makeRequest('block', params);
  }

  /**
   * Get transaction status  
   */
  async txStatus(params: any): Promise<any> {
    return this.client.makeRequest('EXPERIMENTAL_tx_status', params);
  }

  /**
   * View account details
   */
  async viewAccount(params: any): Promise<any> {
    return this.client.makeRequest('query', {
      request_type: 'view_account',
      ...params
    });
  }

  /**
   * Get gas price
   */
  async gasPrice(params: any = {}): Promise<any> {
    return this.client.makeRequest('gas_price', params);
  }

  /**
   * Broadcast transaction (async)
   */
  async broadcastTxAsync(params: any): Promise<any> {
    return this.client.makeRequest('broadcast_tx_async', params);
  }

  /**
   * Broadcast transaction (commit)
   */
  async broadcastTxCommit(params: any): Promise<any> {
    return this.client.makeRequest('broadcast_tx_commit', params);
  }

  /**
   * Send transaction
   */
  async sendTx(params: any): Promise<any> {
    return this.client.makeRequest('send_tx', params);
  }
}