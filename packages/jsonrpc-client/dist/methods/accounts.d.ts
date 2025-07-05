/**
 * Account-related methods for NEAR JSON-RPC client
 */
import { AccountQuery, AccountResponse, AccessKeyQuery, AccessKeyResponse, AccessKeyListQuery, AccessKeyListResponse, CodeQuery, CodeResponse, ContractStateQuery, ContractStateResponse, ContractStateChangesQuery, ContractStateChangesResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class AccountMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    /**
     * Get account information
     */
    getAccount(params: AccountQuery): Promise<AccountResponse>;
    /**
     * Get access key information
     */
    getAccessKey(params: AccessKeyQuery): Promise<AccessKeyResponse>;
    /**
     * Get all access keys for an account
     */
    getAccessKeyList(params: AccessKeyListQuery): Promise<AccessKeyListResponse>;
    /**
     * Get contract code
     */
    getCode(params: CodeQuery): Promise<CodeResponse>;
    /**
     * Get contract state
     */
    getContractState(params: ContractStateQuery): Promise<ContractStateResponse>;
    /**
     * Get contract state changes
     */
    getContractStateChanges(params: ContractStateChangesQuery): Promise<ContractStateChangesResponse>;
    /**
     * Get account by ID with finality
     */
    getAccountById(accountId: string, finality?: 'final' | 'optimistic'): Promise<AccountResponse>;
    /**
     * Check if account exists
     */
    accountExists(accountId: string): Promise<boolean>;
    /**
     * Get account balance
     */
    getAccountBalance(accountId: string): Promise<string>;
    /**
     * Get account storage usage
     */
    getAccountStorageUsage(accountId: string): Promise<number>;
    /**
     * Get all access keys for an account by ID
     */
    getAccessKeysById(accountId: string): Promise<AccessKeyListResponse>;
    /**
     * Get specific access key by account ID and public key
     */
    getAccessKeyById(accountId: string, publicKey: string): Promise<AccessKeyResponse>;
}
