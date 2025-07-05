/**
 * Account-related methods for NEAR JSON-RPC client
 */

import {
  AccountQuery,
  AccountResponse,
  AccountQuerySchema,
  AccountResponseSchema,
  AccessKeyQuery,
  AccessKeyResponse,
  AccessKeyQuerySchema,
  AccessKeyResponseSchema,
  AccessKeyListQuery,
  AccessKeyListResponse,
  AccessKeyListQuerySchema,
  AccessKeyListResponseSchema,
  CodeQuery,
  CodeResponse,
  CodeQuerySchema,
  CodeResponseSchema,
  ContractStateQuery,
  ContractStateResponse,
  ContractStateQuerySchema,
  ContractStateResponseSchema,
  ContractStateChangesQuery,
  ContractStateChangesResponse,
  ContractStateChangesQuerySchema,
  ContractStateChangesResponseSchema,
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class AccountMethods {
  constructor(private client: NearJsonRpcClient) {}

  /**
   * Get account information
   */
  async getAccount(params: AccountQuery): Promise<AccountResponse> {
    const validatedParams = AccountQuerySchema.parse(params);
    return this.client.makeRequest('query', {
      request_type: 'view_account',
      ...validatedParams,
    }, AccountResponseSchema);
  }

  /**
   * Get access key information
   */
  async getAccessKey(params: AccessKeyQuery): Promise<AccessKeyResponse> {
    const validatedParams = AccessKeyQuerySchema.parse(params);
    return this.client.makeRequest('query', {
      request_type: 'view_access_key',
      ...validatedParams,
    }, AccessKeyResponseSchema);
  }

  /**
   * Get all access keys for an account
   */
  async getAccessKeyList(params: AccessKeyListQuery): Promise<AccessKeyListResponse> {
    const validatedParams = AccessKeyListQuerySchema.parse(params);
    return this.client.makeRequest('query', {
      request_type: 'view_access_key_list',
      ...validatedParams,
    }, AccessKeyListResponseSchema);
  }

  /**
   * Get contract code
   */
  async getCode(params: CodeQuery): Promise<CodeResponse> {
    const validatedParams = CodeQuerySchema.parse(params);
    return this.client.makeRequest('query', {
      request_type: 'view_code',
      ...validatedParams,
    }, CodeResponseSchema);
  }

  /**
   * Get contract state
   */
  async getContractState(params: ContractStateQuery): Promise<ContractStateResponse> {
    const validatedParams = ContractStateQuerySchema.parse(params);
    return this.client.makeRequest('query', {
      request_type: 'view_state',
      ...validatedParams,
    }, ContractStateResponseSchema);
  }

  /**
   * Get contract state changes
   */
  async getContractStateChanges(params: ContractStateChangesQuery): Promise<ContractStateChangesResponse> {
    const validatedParams = ContractStateChangesQuerySchema.parse(params);
    return this.client.makeRequest('EXPERIMENTAL_changes', {
      changes_type: 'data_changes',
      ...validatedParams,
    }, ContractStateChangesResponseSchema);
  }

  /**
   * Get account by ID with finality
   */
  async getAccountById(accountId: string, finality: 'final' | 'optimistic' = 'final'): Promise<AccountResponse> {
    return this.getAccount({ accountId, finality });
  }

  /**
   * Check if account exists
   */
  async accountExists(accountId: string): Promise<boolean> {
    try {
      await this.getAccount({ accountId, finality: 'final' });
      return true;
    } catch (error) {
      if (error instanceof Error && error.message.includes('does not exist')) {
        return false;
      }
      throw error;
    }
  }

  /**
   * Get account balance
   */
  async getAccountBalance(accountId: string): Promise<string> {
    const account = await this.getAccount({ accountId, finality: 'final' });
    return account.amount;
  }

  /**
   * Get account storage usage
   */
  async getAccountStorageUsage(accountId: string): Promise<number> {
    const account = await this.getAccount({ accountId, finality: 'final' });
    return account.storageUsage;
  }

  /**
   * Get all access keys for an account by ID
   */
  async getAccessKeysById(accountId: string): Promise<AccessKeyListResponse> {
    return this.getAccessKeyList({ accountId, finality: 'final' });
  }

  /**
   * Get specific access key by account ID and public key
   */
  async getAccessKeyById(accountId: string, publicKey: string): Promise<AccessKeyResponse> {
    return this.getAccessKey({ accountId, publicKey, finality: 'final' });
  }
}
