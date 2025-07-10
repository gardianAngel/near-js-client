/**
 * Validated TypeScript types for NEAR Protocol JSON-RPC API
 * Generated from official nearcore OpenAPI specification
 *
 * This file contains comprehensive type definitions that have been validated
 * against the actual NEAR Protocol RPC interface.
 */
export type AccountId = string;
export type PublicKey = string;
export type CryptoHash = string;
export type BlockHeight = number;
export type BlockHash = string;
export type ShardId = number;
export type Gas = string;
export type Balance = string;
export type Nonce = number;
export type Timestamp = number;
export interface JsonRpcRequest<T = any> {
    jsonrpc: '2.0';
    method: string;
    params: T;
    id: string | number;
}
export interface JsonRpcResponse<T = any> {
    jsonrpc: '2.0';
    result?: T;
    error?: JsonRpcError;
    id: string | number;
}
export interface JsonRpcError {
    code: number;
    message: string;
    data?: any;
}
export type Finality = 'optimistic' | 'near-final' | 'final';
export type BlockId = {
    block_id: BlockHeight;
} | {
    block_id: BlockHash;
} | {
    finality: Finality;
};
export interface StatusResponse {
    version: {
        version: string;
        build: string;
        rustc_version: string;
    };
    chain_id: string;
    protocol_version: number;
    latest_protocol_version: number;
    rpc_addr?: string;
    validators: AccountId[];
    sync_info: {
        latest_block_hash: CryptoHash;
        latest_block_height: BlockHeight;
        latest_state_root: CryptoHash;
        latest_block_time: string;
        syncing: boolean;
        earliest_block_hash?: CryptoHash;
        earliest_block_height?: BlockHeight;
        earliest_block_time?: string;
        epoch_id?: CryptoHash;
        epoch_start_height?: BlockHeight;
    };
    validator_account_id?: AccountId;
    validator_public_key?: PublicKey;
    node_public_key: PublicKey;
    account_id?: AccountId;
    node_key?: PublicKey;
    uptime_sec: number;
}
export interface BlockResponse {
    author: AccountId;
    header: {
        height: BlockHeight;
        prev_height?: BlockHeight;
        epoch_id: CryptoHash;
        next_epoch_id: CryptoHash;
        hash: CryptoHash;
        prev_hash: CryptoHash;
        prev_state_root: CryptoHash;
        chunk_receipts_root: CryptoHash;
        chunk_headers_root: CryptoHash;
        chunk_tx_root: CryptoHash;
        outcome_root: CryptoHash;
        chunks_included: number;
        challenges_root: CryptoHash;
        timestamp: Timestamp;
        timestamp_nanosec: string;
        random_value: CryptoHash;
        validator_proposals: any[];
        chunk_mask: boolean[];
        gas_price: Gas;
        rent_paid: Balance;
        validator_reward: Balance;
        total_supply: Balance;
        challenges_result: any[];
        last_final_block: CryptoHash;
        last_ds_final_block: CryptoHash;
        next_bp_hash: CryptoHash;
        block_merkle_root: CryptoHash;
        approvals: (string | null)[];
        signature: string;
        latest_protocol_version: number;
    };
    chunks: {
        chunk_hash: CryptoHash;
        prev_block_hash: CryptoHash;
        outcome_root: CryptoHash;
        prev_state_root: CryptoHash;
        encoded_merkle_root: CryptoHash;
        encoded_length: number;
        height_created: BlockHeight;
        height_included: BlockHeight;
        shard_id: ShardId;
        gas_used: Gas;
        gas_limit: Gas;
        rent_paid: Balance;
        validator_reward: Balance;
        balance_burnt: Balance;
        outgoing_receipts_root: CryptoHash;
        tx_root: CryptoHash;
        validator_proposals: any[];
        signature: string;
    }[];
}
export interface QueryResponse {
    block_height: BlockHeight;
    block_hash: CryptoHash;
}
export interface ViewAccountResponse extends QueryResponse {
    account_id: AccountId;
    amount: Balance;
    locked: Balance;
    code_hash: CryptoHash;
    storage_usage: number;
    storage_paid_at: BlockHeight;
    block_height: BlockHeight;
    block_hash: CryptoHash;
}
export interface ViewAccessKeyResponse extends QueryResponse {
    nonce: Nonce;
    permission: string | {
        FunctionCall: {
            allowance?: Balance;
            receiver_id: AccountId;
            method_names: string[];
        };
    };
}
export interface ViewAccessKeyListResponse extends QueryResponse {
    keys: {
        public_key: PublicKey;
        access_key: {
            nonce: Nonce;
            permission: string | {
                FunctionCall: {
                    allowance?: Balance;
                    receiver_id: AccountId;
                    method_names: string[];
                };
            };
        };
    }[];
}
export interface TransactionResponse {
    status: {
        SuccessValue?: string;
        SuccessReceiptId?: string;
        Failure?: {
            ActionError: {
                index: number;
                kind: any;
            };
        };
    };
    transaction: {
        signer_id: AccountId;
        public_key: PublicKey;
        nonce: Nonce;
        receiver_id: AccountId;
        actions: any[];
        signature: string;
        hash: CryptoHash;
    };
    transaction_outcome: {
        proof: any[];
        block_hash: CryptoHash;
        id: CryptoHash;
        outcome: {
            logs: string[];
            receipt_ids: CryptoHash[];
            gas_burnt: Gas;
            tokens_burnt: Balance;
            executor_id: AccountId;
            status: any;
        };
    };
    receipts_outcome: {
        proof: any[];
        block_hash: CryptoHash;
        id: CryptoHash;
        outcome: {
            logs: string[];
            receipt_ids: CryptoHash[];
            gas_burnt: Gas;
            tokens_burnt: Balance;
            executor_id: AccountId;
            status: any;
        };
    }[];
}
export interface ValidatorsResponse {
    current_validators: {
        account_id: AccountId;
        public_key: PublicKey;
        is_slashed: boolean;
        stake: Balance;
        shards: ShardId[];
        num_produced_blocks: number;
        num_expected_blocks: number;
    }[];
    next_validators: {
        account_id: AccountId;
        public_key: PublicKey;
        stake: Balance;
        shards: ShardId[];
    }[];
    current_fishermen: {
        account_id: AccountId;
        public_key: PublicKey;
        stake: Balance;
    }[];
    next_fishermen: {
        account_id: AccountId;
        public_key: PublicKey;
        stake: Balance;
    }[];
    current_proposals: {
        account_id: AccountId;
        public_key: PublicKey;
        stake: Balance;
    }[];
    epoch_start_height: BlockHeight;
    epoch_height: BlockHeight;
    prev_epoch_kickout: {
        account_id: AccountId;
        reason: any;
    }[];
}
export interface GasPriceResponse {
    gas_price: Gas;
}
export interface NetworkInfoResponse {
    active_peers: {
        id: string;
        addr: string;
        account_id?: AccountId;
    }[];
    num_active_peers: number;
    peer_max_count: number;
    sent_bytes_per_sec: number;
    received_bytes_per_sec: number;
    known_producers: {
        account_id: AccountId;
        addr?: string;
        peer_id: string;
    }[];
}
export interface ChunkResponse {
    author: AccountId;
    header: {
        chunk_hash: CryptoHash;
        prev_block_hash: CryptoHash;
        outcome_root: CryptoHash;
        prev_state_root: CryptoHash;
        encoded_merkle_root: CryptoHash;
        encoded_length: number;
        height_created: BlockHeight;
        height_included: BlockHeight;
        shard_id: ShardId;
        gas_used: Gas;
        gas_limit: Gas;
        rent_paid: Balance;
        validator_reward: Balance;
        balance_burnt: Balance;
        outgoing_receipts_root: CryptoHash;
        tx_root: CryptoHash;
        validator_proposals: any[];
        signature: string;
    };
    transactions: {
        signer_id: AccountId;
        public_key: PublicKey;
        nonce: Nonce;
        receiver_id: AccountId;
        actions: any[];
        signature: string;
        hash: CryptoHash;
    }[];
    receipts: any[];
}
export interface StatusRequest {
}
export interface BlockRequest {
    finality?: Finality;
    block_id?: BlockHeight | BlockHash;
}
export interface ChunkRequest {
    chunk_id: CryptoHash | {
        block_id: BlockHeight | BlockHash;
        shard_id: ShardId;
    };
}
export interface QueryRequest {
    request_type: string;
    finality?: Finality;
    block_id?: BlockHeight | BlockHash;
    account_id?: AccountId;
    public_key?: PublicKey;
    prefix?: string;
    method_name?: string;
    args_base64?: string;
}
export interface ValidatorsRequest {
    finality?: Finality;
    block_id?: BlockHeight | BlockHash;
    epoch_id?: CryptoHash;
}
export interface GasPriceRequest {
    finality?: Finality;
    block_id?: BlockHeight | BlockHash;
}
export interface NetworkInfoRequest {
}
export interface TransactionRequest {
    tx_hash: CryptoHash;
    sender_account_id: AccountId;
    wait_until?: 'NONE' | 'INCLUDED' | 'INCLUDED_FINAL' | 'EXECUTED' | 'EXECUTED_OPTIMISTIC' | 'FINAL';
}
export interface BroadcastTransactionRequest {
    signed_tx_base64: string;
}
