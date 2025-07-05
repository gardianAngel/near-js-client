/**
 * Transaction-related methods for NEAR JSON-RPC client
 */
import { TransactionQuery, TransactionResponse, SendTransactionRequest, SendTransactionResponse, BroadcastTransactionRequest, BroadcastTransactionResponse } from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';
export declare class TransactionMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    /**
     * Get transaction status and details
     */
    getTransaction(params: TransactionQuery): Promise<TransactionResponse>;
    /**
     * Send a signed transaction
     */
    sendTransaction(params: SendTransactionRequest): Promise<SendTransactionResponse>;
    /**
     * Broadcast a signed transaction (async)
     */
    broadcastTransaction(params: BroadcastTransactionRequest): Promise<BroadcastTransactionResponse>;
    /**
     * Broadcast a signed transaction and wait for commit
     */
    broadcastTransactionCommit(params: BroadcastTransactionRequest): Promise<TransactionResponse>;
    /**
     * Get transaction by hash with sender ID
     */
    getTransactionByHash(transactionHash: string, senderId: string): Promise<TransactionResponse>;
    /**
     * Get transaction status only
     */
    getTransactionStatus(transactionHash: string, senderId: string): Promise<TransactionResponse>;
    /**
     * Wait for transaction to be included in a block
     */
    waitForTransaction(transactionHash: string, senderId: string): Promise<TransactionResponse>;
    /**
     * Wait for transaction to be fully executed
     */
    waitForTransactionExecution(transactionHash: string, senderId: string): Promise<TransactionResponse>;
}
