/**
 * Account-related methods for NEAR JSON-RPC client
 */

import { z } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class AccountMethods {
  constructor(private client: NearJsonRpcClient) {}

  /**
   * Get account information
   */
  async viewAccount(params: { 
    account_id: string; 
    block_id?: string | number; 
    finality?: 'final' | 'optimistic' 
  }): Promise<any> {
    return this.client.makeRequest('query', {
      request_type: 'view_account',
      ...params
    }, z.any());
  }

  /**
   * Get account access keys
   */
  async viewAccessKeyList(params: { 
    account_id: string; 
    block_id?: string | number; 
    finality?: 'final' | 'optimistic' 
  }): Promise<any> {
    return this.client.makeRequest('query', {
      request_type: 'view_access_key_list',
      ...params
    }, z.any());
  }

  /**
   * Get specific access key
   */
  async viewAccessKey(params: { 
    account_id: string; 
    public_key: string;
    block_id?: string | number; 
    finality?: 'final' | 'optimistic' 
  }): Promise<any> {
    return this.client.makeRequest('query', {
      request_type: 'view_access_key',
      ...params
    }, z.any());
  }

  /**
   * Call contract view method
   */
  async viewFunction(params: {
    account_id: string;
    method_name: string;
    args_base64?: string;
    block_id?: string | number;
    finality?: 'final' | 'optimistic';
  }): Promise<any> {
    return this.client.makeRequest('query', {
      request_type: 'call_function',
      ...params
    }, z.any());
  }

  /**
   * Get contract state
   */
  async viewState(params: {
    account_id: string;
    prefix_base64?: string;
    block_id?: string | number;
    finality?: 'final' | 'optimistic';
  }): Promise<any> {
    return this.client.makeRequest('query', {
      request_type: 'view_state',
      ...params
    }, z.any());
  }
}