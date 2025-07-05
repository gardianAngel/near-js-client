/**
 * Transaction-related methods for NEAR JSON-RPC client
 */

import {
  TransactionQuery,
  TransactionResponse,
  TransactionQuerySchema,
  TransactionResponseSchema,
  SendTransactionRequest,
  SendTransactionResponse,
  SendTransactionRequestSchema,
  SendTransactionResponseSchema,
  BroadcastTransactionRequest,
  BroadcastTransactionResponse,
  BroadcastTransactionRequestSchema,
  BroadcastTransactionResponseSchema,
} from '@near-js/jsonrpc-types';
import type { NearJsonRpcClient } from '../client';

export class TransactionMethods {
  constructor(private client: NearJsonRpcClient) {}

  /**
   * Get transaction status and details
   */
  async getTransaction(params: TransactionQuery): Promise<TransactionResponse> {
    const validatedParams = TransactionQuerySchema.parse(params);
    return this.client.makeRequest('tx', validatedParams, TransactionResponseSchema);
  }

  /**
   * Send a signed transaction
   */
  async sendTransaction(params: SendTransactionRequest): Promise<SendTransactionResponse> {
    const validatedParams = SendTransactionRequestSchema.parse(params);
    return this.client.makeRequest('send_tx', validatedParams, SendTransactionResponseSchema);
  }

  /**
   * Broadcast a signed transaction (async)
   */
  async broadcastTransaction(params: BroadcastTransactionRequest): Promise<BroadcastTransactionResponse> {
    const validatedParams = BroadcastTransactionRequestSchema.parse(params);
    return this.client.makeRequest('broadcast_tx_async', validatedParams, BroadcastTransactionResponseSchema);
  }

  /**
   * Broadcast a signed transaction and wait for commit
   */
  async broadcastTransactionCommit(params: BroadcastTransactionRequest): Promise<TransactionResponse> {
    const validatedParams = BroadcastTransactionRequestSchema.parse(params);
    return this.client.makeRequest('broadcast_tx_commit', validatedParams, TransactionResponseSchema);
  }

  /**
   * Get transaction by hash with sender ID
   */
  async getTransactionByHash(transactionHash: string, senderId: string): Promise<TransactionResponse> {
    return this.getTransaction({ transactionHash, senderId });
  }

  /**
   * Get transaction status only
   */
  async getTransactionStatus(transactionHash: string, senderId: string): Promise<TransactionResponse> {
    return this.getTransaction({ 
      transactionHash, 
      senderId, 
      waitUntil: 'NONE' 
    });
  }

  /**
   * Wait for transaction to be included in a block
   */
  async waitForTransaction(transactionHash: string, senderId: string): Promise<TransactionResponse> {
    return this.getTransaction({ 
      transactionHash, 
      senderId, 
      waitUntil: 'INCLUDED_FINAL' 
    });
  }

  /**
   * Wait for transaction to be fully executed
   */
  async waitForTransactionExecution(transactionHash: string, senderId: string): Promise<TransactionResponse> {
    return this.getTransaction({ 
      transactionHash, 
      senderId, 
      waitUntil: 'EXECUTED' 
    });
  }
}
