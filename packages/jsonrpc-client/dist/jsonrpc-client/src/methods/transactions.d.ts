/**
 * Transaction-related methods for NEAR JSON-RPC client
 */
import type { NearJsonRpcClient } from '../client';
export declare class TransactionMethods {
    private client;
    constructor(client: NearJsonRpcClient);
    /**
     * Get transaction status
     */
    txStatus(params: {
        tx_hash: string;
        sender_account_id: string;
    }): Promise<any>;
    /**
     * Broadcast transaction asynchronously
     */
    broadcastTxAsync(params: {
        signed_tx_base64: string;
    }): Promise<any>;
    /**
     * Broadcast transaction and wait for commit
     */
    broadcastTxCommit(params: {
        signed_tx_base64: string;
    }): Promise<any>;
    /**
     * Send transaction
     */
    sendTx(params: {
        signed_tx_base64: string;
    }): Promise<any>;
    /**
     * Get transaction details
     */
    tx(params: {
        tx_hash: string;
        sender_account_id: string;
    }): Promise<any>;
}
