/**
 * Validated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from official nearcore OpenAPI specification
 *
 * These schemas provide runtime validation for all RPC requests and responses.
 */
import { z } from 'zod';
export declare const AccountIdSchema: z.ZodString;
export declare const PublicKeySchema: z.ZodString;
export declare const CryptoHashSchema: z.ZodString;
export declare const BlockHeightSchema: z.ZodNumber;
export declare const BlockHashSchema: z.ZodString;
export declare const ShardIdSchema: z.ZodNumber;
export declare const GasSchema: z.ZodString;
export declare const BalanceSchema: z.ZodString;
export declare const NonceSchema: z.ZodNumber;
export declare const TimestampSchema: z.ZodNumber;
export declare const JsonRpcRequestSchema: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    method: z.ZodString;
    params: z.ZodAny;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    jsonrpc: "2.0";
    method: string;
    id: string | number;
    params?: any;
}, {
    jsonrpc: "2.0";
    method: string;
    id: string | number;
    params?: any;
}>;
export declare const JsonRpcResponseSchema: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    result: z.ZodOptional<z.ZodAny>;
    error: z.ZodOptional<z.ZodObject<{
        code: z.ZodNumber;
        message: z.ZodString;
        data: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        code: number;
        message: string;
        data?: any;
    }, {
        code: number;
        message: string;
        data?: any;
    }>>;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    jsonrpc: "2.0";
    id: string | number;
    result?: any;
    error?: {
        code: number;
        message: string;
        data?: any;
    } | undefined;
}, {
    jsonrpc: "2.0";
    id: string | number;
    result?: any;
    error?: {
        code: number;
        message: string;
        data?: any;
    } | undefined;
}>;
export declare const FinalitySchema: z.ZodEnum<["optimistic", "near-final", "final"]>;
export declare const BlockIdSchema: z.ZodUnion<[z.ZodObject<{
    block_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    block_id: number;
}, {
    block_id: number;
}>, z.ZodObject<{
    block_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    block_id: string;
}, {
    block_id: string;
}>, z.ZodObject<{
    finality: z.ZodEnum<["optimistic", "near-final", "final"]>;
}, "strip", z.ZodTypeAny, {
    finality: "optimistic" | "near-final" | "final";
}, {
    finality: "optimistic" | "near-final" | "final";
}>]>;
export declare const StatusResponseSchema: z.ZodObject<{
    version: z.ZodObject<{
        version: z.ZodString;
        build: z.ZodString;
        rustc_version: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        version: string;
        build: string;
        rustc_version: string;
    }, {
        version: string;
        build: string;
        rustc_version: string;
    }>;
    chain_id: z.ZodString;
    protocol_version: z.ZodNumber;
    latest_protocol_version: z.ZodNumber;
    rpc_addr: z.ZodOptional<z.ZodString>;
    validators: z.ZodArray<z.ZodString, "many">;
    sync_info: z.ZodObject<{
        latest_block_hash: z.ZodString;
        latest_block_height: z.ZodNumber;
        latest_state_root: z.ZodString;
        latest_block_time: z.ZodString;
        syncing: z.ZodBoolean;
        earliest_block_hash: z.ZodOptional<z.ZodString>;
        earliest_block_height: z.ZodOptional<z.ZodNumber>;
        earliest_block_time: z.ZodOptional<z.ZodString>;
        epoch_id: z.ZodOptional<z.ZodString>;
        epoch_start_height: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        syncing: boolean;
        latest_block_hash: string;
        latest_block_height: number;
        latest_state_root: string;
        latest_block_time: string;
        earliest_block_hash?: string | undefined;
        earliest_block_height?: number | undefined;
        earliest_block_time?: string | undefined;
        epoch_id?: string | undefined;
        epoch_start_height?: number | undefined;
    }, {
        syncing: boolean;
        latest_block_hash: string;
        latest_block_height: number;
        latest_state_root: string;
        latest_block_time: string;
        earliest_block_hash?: string | undefined;
        earliest_block_height?: number | undefined;
        earliest_block_time?: string | undefined;
        epoch_id?: string | undefined;
        epoch_start_height?: number | undefined;
    }>;
    validator_account_id: z.ZodOptional<z.ZodString>;
    validator_public_key: z.ZodOptional<z.ZodString>;
    node_public_key: z.ZodString;
    account_id: z.ZodOptional<z.ZodString>;
    node_key: z.ZodOptional<z.ZodString>;
    uptime_sec: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: {
        version: string;
        build: string;
        rustc_version: string;
    };
    validators: string[];
    chain_id: string;
    protocol_version: number;
    latest_protocol_version: number;
    sync_info: {
        syncing: boolean;
        latest_block_hash: string;
        latest_block_height: number;
        latest_state_root: string;
        latest_block_time: string;
        earliest_block_hash?: string | undefined;
        earliest_block_height?: number | undefined;
        earliest_block_time?: string | undefined;
        epoch_id?: string | undefined;
        epoch_start_height?: number | undefined;
    };
    node_public_key: string;
    uptime_sec: number;
    rpc_addr?: string | undefined;
    validator_account_id?: string | undefined;
    validator_public_key?: string | undefined;
    account_id?: string | undefined;
    node_key?: string | undefined;
}, {
    version: {
        version: string;
        build: string;
        rustc_version: string;
    };
    validators: string[];
    chain_id: string;
    protocol_version: number;
    latest_protocol_version: number;
    sync_info: {
        syncing: boolean;
        latest_block_hash: string;
        latest_block_height: number;
        latest_state_root: string;
        latest_block_time: string;
        earliest_block_hash?: string | undefined;
        earliest_block_height?: number | undefined;
        earliest_block_time?: string | undefined;
        epoch_id?: string | undefined;
        epoch_start_height?: number | undefined;
    };
    node_public_key: string;
    uptime_sec: number;
    rpc_addr?: string | undefined;
    validator_account_id?: string | undefined;
    validator_public_key?: string | undefined;
    account_id?: string | undefined;
    node_key?: string | undefined;
}>;
export declare const BlockResponseSchema: z.ZodObject<{
    author: z.ZodString;
    header: z.ZodObject<{
        height: z.ZodNumber;
        prev_height: z.ZodOptional<z.ZodNumber>;
        epoch_id: z.ZodString;
        next_epoch_id: z.ZodString;
        hash: z.ZodString;
        prev_hash: z.ZodString;
        prev_state_root: z.ZodString;
        chunk_receipts_root: z.ZodString;
        chunk_headers_root: z.ZodString;
        chunk_tx_root: z.ZodString;
        outcome_root: z.ZodString;
        chunks_included: z.ZodNumber;
        challenges_root: z.ZodString;
        timestamp: z.ZodNumber;
        timestamp_nanosec: z.ZodString;
        random_value: z.ZodString;
        validator_proposals: z.ZodArray<z.ZodAny, "many">;
        chunk_mask: z.ZodArray<z.ZodBoolean, "many">;
        gas_price: z.ZodString;
        rent_paid: z.ZodString;
        validator_reward: z.ZodString;
        total_supply: z.ZodString;
        challenges_result: z.ZodArray<z.ZodAny, "many">;
        last_final_block: z.ZodString;
        last_ds_final_block: z.ZodString;
        next_bp_hash: z.ZodString;
        block_merkle_root: z.ZodString;
        approvals: z.ZodArray<z.ZodNullable<z.ZodString>, "many">;
        signature: z.ZodString;
        latest_protocol_version: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        timestamp: number;
        height: number;
        approvals: (string | null)[];
        hash: string;
        signature: string;
        latest_protocol_version: number;
        epoch_id: string;
        next_epoch_id: string;
        prev_hash: string;
        prev_state_root: string;
        chunk_receipts_root: string;
        chunk_headers_root: string;
        chunk_tx_root: string;
        outcome_root: string;
        chunks_included: number;
        challenges_root: string;
        timestamp_nanosec: string;
        random_value: string;
        validator_proposals: any[];
        chunk_mask: boolean[];
        gas_price: string;
        rent_paid: string;
        validator_reward: string;
        total_supply: string;
        challenges_result: any[];
        last_final_block: string;
        last_ds_final_block: string;
        next_bp_hash: string;
        block_merkle_root: string;
        prev_height?: number | undefined;
    }, {
        timestamp: number;
        height: number;
        approvals: (string | null)[];
        hash: string;
        signature: string;
        latest_protocol_version: number;
        epoch_id: string;
        next_epoch_id: string;
        prev_hash: string;
        prev_state_root: string;
        chunk_receipts_root: string;
        chunk_headers_root: string;
        chunk_tx_root: string;
        outcome_root: string;
        chunks_included: number;
        challenges_root: string;
        timestamp_nanosec: string;
        random_value: string;
        validator_proposals: any[];
        chunk_mask: boolean[];
        gas_price: string;
        rent_paid: string;
        validator_reward: string;
        total_supply: string;
        challenges_result: any[];
        last_final_block: string;
        last_ds_final_block: string;
        next_bp_hash: string;
        block_merkle_root: string;
        prev_height?: number | undefined;
    }>;
    chunks: z.ZodArray<z.ZodObject<{
        chunk_hash: z.ZodString;
        prev_block_hash: z.ZodString;
        outcome_root: z.ZodString;
        prev_state_root: z.ZodString;
        encoded_merkle_root: z.ZodString;
        encoded_length: z.ZodNumber;
        height_created: z.ZodNumber;
        height_included: z.ZodNumber;
        shard_id: z.ZodNumber;
        gas_used: z.ZodString;
        gas_limit: z.ZodString;
        rent_paid: z.ZodString;
        validator_reward: z.ZodString;
        balance_burnt: z.ZodString;
        outgoing_receipts_root: z.ZodString;
        tx_root: z.ZodString;
        validator_proposals: z.ZodArray<z.ZodAny, "many">;
        signature: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        prev_state_root: string;
        outcome_root: string;
        validator_proposals: any[];
        rent_paid: string;
        validator_reward: string;
        chunk_hash: string;
        prev_block_hash: string;
        encoded_merkle_root: string;
        encoded_length: number;
        height_created: number;
        height_included: number;
        shard_id: number;
        gas_used: string;
        gas_limit: string;
        balance_burnt: string;
        outgoing_receipts_root: string;
        tx_root: string;
    }, {
        signature: string;
        prev_state_root: string;
        outcome_root: string;
        validator_proposals: any[];
        rent_paid: string;
        validator_reward: string;
        chunk_hash: string;
        prev_block_hash: string;
        encoded_merkle_root: string;
        encoded_length: number;
        height_created: number;
        height_included: number;
        shard_id: number;
        gas_used: string;
        gas_limit: string;
        balance_burnt: string;
        outgoing_receipts_root: string;
        tx_root: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    header: {
        timestamp: number;
        height: number;
        approvals: (string | null)[];
        hash: string;
        signature: string;
        latest_protocol_version: number;
        epoch_id: string;
        next_epoch_id: string;
        prev_hash: string;
        prev_state_root: string;
        chunk_receipts_root: string;
        chunk_headers_root: string;
        chunk_tx_root: string;
        outcome_root: string;
        chunks_included: number;
        challenges_root: string;
        timestamp_nanosec: string;
        random_value: string;
        validator_proposals: any[];
        chunk_mask: boolean[];
        gas_price: string;
        rent_paid: string;
        validator_reward: string;
        total_supply: string;
        challenges_result: any[];
        last_final_block: string;
        last_ds_final_block: string;
        next_bp_hash: string;
        block_merkle_root: string;
        prev_height?: number | undefined;
    };
    chunks: {
        signature: string;
        prev_state_root: string;
        outcome_root: string;
        validator_proposals: any[];
        rent_paid: string;
        validator_reward: string;
        chunk_hash: string;
        prev_block_hash: string;
        encoded_merkle_root: string;
        encoded_length: number;
        height_created: number;
        height_included: number;
        shard_id: number;
        gas_used: string;
        gas_limit: string;
        balance_burnt: string;
        outgoing_receipts_root: string;
        tx_root: string;
    }[];
    author: string;
}, {
    header: {
        timestamp: number;
        height: number;
        approvals: (string | null)[];
        hash: string;
        signature: string;
        latest_protocol_version: number;
        epoch_id: string;
        next_epoch_id: string;
        prev_hash: string;
        prev_state_root: string;
        chunk_receipts_root: string;
        chunk_headers_root: string;
        chunk_tx_root: string;
        outcome_root: string;
        chunks_included: number;
        challenges_root: string;
        timestamp_nanosec: string;
        random_value: string;
        validator_proposals: any[];
        chunk_mask: boolean[];
        gas_price: string;
        rent_paid: string;
        validator_reward: string;
        total_supply: string;
        challenges_result: any[];
        last_final_block: string;
        last_ds_final_block: string;
        next_bp_hash: string;
        block_merkle_root: string;
        prev_height?: number | undefined;
    };
    chunks: {
        signature: string;
        prev_state_root: string;
        outcome_root: string;
        validator_proposals: any[];
        rent_paid: string;
        validator_reward: string;
        chunk_hash: string;
        prev_block_hash: string;
        encoded_merkle_root: string;
        encoded_length: number;
        height_created: number;
        height_included: number;
        shard_id: number;
        gas_used: string;
        gas_limit: string;
        balance_burnt: string;
        outgoing_receipts_root: string;
        tx_root: string;
    }[];
    author: string;
}>;
export declare const QueryResponseSchema: z.ZodObject<{
    block_height: z.ZodNumber;
    block_hash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    block_height: number;
    block_hash: string;
}, {
    block_height: number;
    block_hash: string;
}>;
export declare const ViewAccountResponseSchema: z.ZodObject<{
    block_height: z.ZodNumber;
    block_hash: z.ZodString;
} & {
    account_id: z.ZodString;
    amount: z.ZodString;
    locked: z.ZodString;
    code_hash: z.ZodString;
    storage_usage: z.ZodNumber;
    storage_paid_at: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    amount: string;
    locked: string;
    account_id: string;
    block_height: number;
    block_hash: string;
    code_hash: string;
    storage_usage: number;
    storage_paid_at: number;
}, {
    amount: string;
    locked: string;
    account_id: string;
    block_height: number;
    block_hash: string;
    code_hash: string;
    storage_usage: number;
    storage_paid_at: number;
}>;
export declare const ViewAccessKeyResponseSchema: z.ZodObject<{
    block_height: z.ZodNumber;
    block_hash: z.ZodString;
} & {
    nonce: z.ZodNumber;
    permission: z.ZodUnion<[z.ZodString, z.ZodObject<{
        FunctionCall: z.ZodObject<{
            allowance: z.ZodOptional<z.ZodString>;
            receiver_id: z.ZodString;
            method_names: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            receiver_id: string;
            method_names: string[];
            allowance?: string | undefined;
        }, {
            receiver_id: string;
            method_names: string[];
            allowance?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        FunctionCall: {
            receiver_id: string;
            method_names: string[];
            allowance?: string | undefined;
        };
    }, {
        FunctionCall: {
            receiver_id: string;
            method_names: string[];
            allowance?: string | undefined;
        };
    }>]>;
}, "strip", z.ZodTypeAny, {
    nonce: number;
    permission: string | {
        FunctionCall: {
            receiver_id: string;
            method_names: string[];
            allowance?: string | undefined;
        };
    };
    block_height: number;
    block_hash: string;
}, {
    nonce: number;
    permission: string | {
        FunctionCall: {
            receiver_id: string;
            method_names: string[];
            allowance?: string | undefined;
        };
    };
    block_height: number;
    block_hash: string;
}>;
export declare const ViewAccessKeyListResponseSchema: z.ZodObject<{
    block_height: z.ZodNumber;
    block_hash: z.ZodString;
} & {
    keys: z.ZodArray<z.ZodObject<{
        public_key: z.ZodString;
        access_key: z.ZodObject<{
            nonce: z.ZodNumber;
            permission: z.ZodUnion<[z.ZodString, z.ZodObject<{
                FunctionCall: z.ZodObject<{
                    allowance: z.ZodOptional<z.ZodString>;
                    receiver_id: z.ZodString;
                    method_names: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    receiver_id: string;
                    method_names: string[];
                    allowance?: string | undefined;
                }, {
                    receiver_id: string;
                    method_names: string[];
                    allowance?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                FunctionCall: {
                    receiver_id: string;
                    method_names: string[];
                    allowance?: string | undefined;
                };
            }, {
                FunctionCall: {
                    receiver_id: string;
                    method_names: string[];
                    allowance?: string | undefined;
                };
            }>]>;
        }, "strip", z.ZodTypeAny, {
            nonce: number;
            permission: string | {
                FunctionCall: {
                    receiver_id: string;
                    method_names: string[];
                    allowance?: string | undefined;
                };
            };
        }, {
            nonce: number;
            permission: string | {
                FunctionCall: {
                    receiver_id: string;
                    method_names: string[];
                    allowance?: string | undefined;
                };
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        public_key: string;
        access_key: {
            nonce: number;
            permission: string | {
                FunctionCall: {
                    receiver_id: string;
                    method_names: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }, {
        public_key: string;
        access_key: {
            nonce: number;
            permission: string | {
                FunctionCall: {
                    receiver_id: string;
                    method_names: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    keys: {
        public_key: string;
        access_key: {
            nonce: number;
            permission: string | {
                FunctionCall: {
                    receiver_id: string;
                    method_names: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }[];
    block_height: number;
    block_hash: string;
}, {
    keys: {
        public_key: string;
        access_key: {
            nonce: number;
            permission: string | {
                FunctionCall: {
                    receiver_id: string;
                    method_names: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }[];
    block_height: number;
    block_hash: string;
}>;
export declare const ValidatorsResponseSchema: z.ZodObject<{
    current_validators: z.ZodArray<z.ZodObject<{
        account_id: z.ZodString;
        public_key: z.ZodString;
        is_slashed: z.ZodBoolean;
        stake: z.ZodString;
        shards: z.ZodArray<z.ZodNumber, "many">;
        num_produced_blocks: z.ZodNumber;
        num_expected_blocks: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        shards: number[];
        stake: string;
        account_id: string;
        public_key: string;
        is_slashed: boolean;
        num_produced_blocks: number;
        num_expected_blocks: number;
    }, {
        shards: number[];
        stake: string;
        account_id: string;
        public_key: string;
        is_slashed: boolean;
        num_produced_blocks: number;
        num_expected_blocks: number;
    }>, "many">;
    next_validators: z.ZodArray<z.ZodObject<{
        account_id: z.ZodString;
        public_key: z.ZodString;
        stake: z.ZodString;
        shards: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        shards: number[];
        stake: string;
        account_id: string;
        public_key: string;
    }, {
        shards: number[];
        stake: string;
        account_id: string;
        public_key: string;
    }>, "many">;
    current_fishermen: z.ZodArray<z.ZodObject<{
        account_id: z.ZodString;
        public_key: z.ZodString;
        stake: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        stake: string;
        account_id: string;
        public_key: string;
    }, {
        stake: string;
        account_id: string;
        public_key: string;
    }>, "many">;
    next_fishermen: z.ZodArray<z.ZodObject<{
        account_id: z.ZodString;
        public_key: z.ZodString;
        stake: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        stake: string;
        account_id: string;
        public_key: string;
    }, {
        stake: string;
        account_id: string;
        public_key: string;
    }>, "many">;
    current_proposals: z.ZodArray<z.ZodObject<{
        account_id: z.ZodString;
        public_key: z.ZodString;
        stake: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        stake: string;
        account_id: string;
        public_key: string;
    }, {
        stake: string;
        account_id: string;
        public_key: string;
    }>, "many">;
    epoch_start_height: z.ZodNumber;
    epoch_height: z.ZodNumber;
    prev_epoch_kickout: z.ZodArray<z.ZodObject<{
        account_id: z.ZodString;
        reason: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        account_id: string;
        reason?: any;
    }, {
        account_id: string;
        reason?: any;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    epoch_start_height: number;
    current_validators: {
        shards: number[];
        stake: string;
        account_id: string;
        public_key: string;
        is_slashed: boolean;
        num_produced_blocks: number;
        num_expected_blocks: number;
    }[];
    next_validators: {
        shards: number[];
        stake: string;
        account_id: string;
        public_key: string;
    }[];
    current_fishermen: {
        stake: string;
        account_id: string;
        public_key: string;
    }[];
    next_fishermen: {
        stake: string;
        account_id: string;
        public_key: string;
    }[];
    current_proposals: {
        stake: string;
        account_id: string;
        public_key: string;
    }[];
    epoch_height: number;
    prev_epoch_kickout: {
        account_id: string;
        reason?: any;
    }[];
}, {
    epoch_start_height: number;
    current_validators: {
        shards: number[];
        stake: string;
        account_id: string;
        public_key: string;
        is_slashed: boolean;
        num_produced_blocks: number;
        num_expected_blocks: number;
    }[];
    next_validators: {
        shards: number[];
        stake: string;
        account_id: string;
        public_key: string;
    }[];
    current_fishermen: {
        stake: string;
        account_id: string;
        public_key: string;
    }[];
    next_fishermen: {
        stake: string;
        account_id: string;
        public_key: string;
    }[];
    current_proposals: {
        stake: string;
        account_id: string;
        public_key: string;
    }[];
    epoch_height: number;
    prev_epoch_kickout: {
        account_id: string;
        reason?: any;
    }[];
}>;
export declare const GasPriceResponseSchema: z.ZodObject<{
    gas_price: z.ZodString;
}, "strip", z.ZodTypeAny, {
    gas_price: string;
}, {
    gas_price: string;
}>;
export declare const NetworkInfoResponseSchema: z.ZodObject<{
    active_peers: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        addr: z.ZodString;
        account_id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        addr: string;
        account_id?: string | undefined;
    }, {
        id: string;
        addr: string;
        account_id?: string | undefined;
    }>, "many">;
    num_active_peers: z.ZodNumber;
    peer_max_count: z.ZodNumber;
    sent_bytes_per_sec: z.ZodNumber;
    received_bytes_per_sec: z.ZodNumber;
    known_producers: z.ZodArray<z.ZodObject<{
        account_id: z.ZodString;
        addr: z.ZodOptional<z.ZodString>;
        peer_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        account_id: string;
        peer_id: string;
        addr?: string | undefined;
    }, {
        account_id: string;
        peer_id: string;
        addr?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    active_peers: {
        id: string;
        addr: string;
        account_id?: string | undefined;
    }[];
    num_active_peers: number;
    peer_max_count: number;
    sent_bytes_per_sec: number;
    received_bytes_per_sec: number;
    known_producers: {
        account_id: string;
        peer_id: string;
        addr?: string | undefined;
    }[];
}, {
    active_peers: {
        id: string;
        addr: string;
        account_id?: string | undefined;
    }[];
    num_active_peers: number;
    peer_max_count: number;
    sent_bytes_per_sec: number;
    received_bytes_per_sec: number;
    known_producers: {
        account_id: string;
        peer_id: string;
        addr?: string | undefined;
    }[];
}>;
export declare const TransactionResponseSchema: z.ZodObject<{
    status: z.ZodUnion<[z.ZodObject<{
        SuccessValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        SuccessValue: string;
    }, {
        SuccessValue: string;
    }>, z.ZodObject<{
        SuccessReceiptId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        SuccessReceiptId: string;
    }, {
        SuccessReceiptId: string;
    }>, z.ZodObject<{
        Failure: z.ZodObject<{
            ActionError: z.ZodObject<{
                index: z.ZodNumber;
                kind: z.ZodAny;
            }, "strip", z.ZodTypeAny, {
                index: number;
                kind?: any;
            }, {
                index: number;
                kind?: any;
            }>;
        }, "strip", z.ZodTypeAny, {
            ActionError: {
                index: number;
                kind?: any;
            };
        }, {
            ActionError: {
                index: number;
                kind?: any;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        Failure: {
            ActionError: {
                index: number;
                kind?: any;
            };
        };
    }, {
        Failure: {
            ActionError: {
                index: number;
                kind?: any;
            };
        };
    }>]>;
    transaction: z.ZodObject<{
        signer_id: z.ZodString;
        public_key: z.ZodString;
        nonce: z.ZodNumber;
        receiver_id: z.ZodString;
        actions: z.ZodArray<z.ZodAny, "many">;
        signature: z.ZodString;
        hash: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        nonce: number;
        hash: string;
        signature: string;
        actions: any[];
        receiver_id: string;
        public_key: string;
        signer_id: string;
    }, {
        nonce: number;
        hash: string;
        signature: string;
        actions: any[];
        receiver_id: string;
        public_key: string;
        signer_id: string;
    }>;
    transaction_outcome: z.ZodObject<{
        proof: z.ZodArray<z.ZodAny, "many">;
        block_hash: z.ZodString;
        id: z.ZodString;
        outcome: z.ZodObject<{
            logs: z.ZodArray<z.ZodString, "many">;
            receipt_ids: z.ZodArray<z.ZodString, "many">;
            gas_burnt: z.ZodString;
            tokens_burnt: z.ZodString;
            executor_id: z.ZodString;
            status: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        }, {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        outcome: {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        };
        proof: any[];
        block_hash: string;
    }, {
        id: string;
        outcome: {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        };
        proof: any[];
        block_hash: string;
    }>;
    receipts_outcome: z.ZodArray<z.ZodObject<{
        proof: z.ZodArray<z.ZodAny, "many">;
        block_hash: z.ZodString;
        id: z.ZodString;
        outcome: z.ZodObject<{
            logs: z.ZodArray<z.ZodString, "many">;
            receipt_ids: z.ZodArray<z.ZodString, "many">;
            gas_burnt: z.ZodString;
            tokens_burnt: z.ZodString;
            executor_id: z.ZodString;
            status: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        }, {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        outcome: {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        };
        proof: any[];
        block_hash: string;
    }, {
        id: string;
        outcome: {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        };
        proof: any[];
        block_hash: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    status: {
        SuccessValue: string;
    } | {
        SuccessReceiptId: string;
    } | {
        Failure: {
            ActionError: {
                index: number;
                kind?: any;
            };
        };
    };
    transaction: {
        nonce: number;
        hash: string;
        signature: string;
        actions: any[];
        receiver_id: string;
        public_key: string;
        signer_id: string;
    };
    transaction_outcome: {
        id: string;
        outcome: {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        };
        proof: any[];
        block_hash: string;
    };
    receipts_outcome: {
        id: string;
        outcome: {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        };
        proof: any[];
        block_hash: string;
    }[];
}, {
    status: {
        SuccessValue: string;
    } | {
        SuccessReceiptId: string;
    } | {
        Failure: {
            ActionError: {
                index: number;
                kind?: any;
            };
        };
    };
    transaction: {
        nonce: number;
        hash: string;
        signature: string;
        actions: any[];
        receiver_id: string;
        public_key: string;
        signer_id: string;
    };
    transaction_outcome: {
        id: string;
        outcome: {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        };
        proof: any[];
        block_hash: string;
    };
    receipts_outcome: {
        id: string;
        outcome: {
            logs: string[];
            receipt_ids: string[];
            gas_burnt: string;
            tokens_burnt: string;
            executor_id: string;
            status?: any;
        };
        proof: any[];
        block_hash: string;
    }[];
}>;
export declare const ChunkResponseSchema: z.ZodObject<{
    author: z.ZodString;
    header: z.ZodObject<{
        chunk_hash: z.ZodString;
        prev_block_hash: z.ZodString;
        outcome_root: z.ZodString;
        prev_state_root: z.ZodString;
        encoded_merkle_root: z.ZodString;
        encoded_length: z.ZodNumber;
        height_created: z.ZodNumber;
        height_included: z.ZodNumber;
        shard_id: z.ZodNumber;
        gas_used: z.ZodString;
        gas_limit: z.ZodString;
        rent_paid: z.ZodString;
        validator_reward: z.ZodString;
        balance_burnt: z.ZodString;
        outgoing_receipts_root: z.ZodString;
        tx_root: z.ZodString;
        validator_proposals: z.ZodArray<z.ZodAny, "many">;
        signature: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        prev_state_root: string;
        outcome_root: string;
        validator_proposals: any[];
        rent_paid: string;
        validator_reward: string;
        chunk_hash: string;
        prev_block_hash: string;
        encoded_merkle_root: string;
        encoded_length: number;
        height_created: number;
        height_included: number;
        shard_id: number;
        gas_used: string;
        gas_limit: string;
        balance_burnt: string;
        outgoing_receipts_root: string;
        tx_root: string;
    }, {
        signature: string;
        prev_state_root: string;
        outcome_root: string;
        validator_proposals: any[];
        rent_paid: string;
        validator_reward: string;
        chunk_hash: string;
        prev_block_hash: string;
        encoded_merkle_root: string;
        encoded_length: number;
        height_created: number;
        height_included: number;
        shard_id: number;
        gas_used: string;
        gas_limit: string;
        balance_burnt: string;
        outgoing_receipts_root: string;
        tx_root: string;
    }>;
    transactions: z.ZodArray<z.ZodObject<{
        signer_id: z.ZodString;
        public_key: z.ZodString;
        nonce: z.ZodNumber;
        receiver_id: z.ZodString;
        actions: z.ZodArray<z.ZodAny, "many">;
        signature: z.ZodString;
        hash: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        nonce: number;
        hash: string;
        signature: string;
        actions: any[];
        receiver_id: string;
        public_key: string;
        signer_id: string;
    }, {
        nonce: number;
        hash: string;
        signature: string;
        actions: any[];
        receiver_id: string;
        public_key: string;
        signer_id: string;
    }>, "many">;
    receipts: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    header: {
        signature: string;
        prev_state_root: string;
        outcome_root: string;
        validator_proposals: any[];
        rent_paid: string;
        validator_reward: string;
        chunk_hash: string;
        prev_block_hash: string;
        encoded_merkle_root: string;
        encoded_length: number;
        height_created: number;
        height_included: number;
        shard_id: number;
        gas_used: string;
        gas_limit: string;
        balance_burnt: string;
        outgoing_receipts_root: string;
        tx_root: string;
    };
    transactions: {
        nonce: number;
        hash: string;
        signature: string;
        actions: any[];
        receiver_id: string;
        public_key: string;
        signer_id: string;
    }[];
    receipts: any[];
    author: string;
}, {
    header: {
        signature: string;
        prev_state_root: string;
        outcome_root: string;
        validator_proposals: any[];
        rent_paid: string;
        validator_reward: string;
        chunk_hash: string;
        prev_block_hash: string;
        encoded_merkle_root: string;
        encoded_length: number;
        height_created: number;
        height_included: number;
        shard_id: number;
        gas_used: string;
        gas_limit: string;
        balance_burnt: string;
        outgoing_receipts_root: string;
        tx_root: string;
    };
    transactions: {
        nonce: number;
        hash: string;
        signature: string;
        actions: any[];
        receiver_id: string;
        public_key: string;
        signer_id: string;
    }[];
    receipts: any[];
    author: string;
}>;
export declare const StatusRequestSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const BlockRequestSchema: z.ZodObject<{
    finality: z.ZodOptional<z.ZodEnum<["optimistic", "near-final", "final"]>>;
    block_id: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
}, "strip", z.ZodTypeAny, {
    block_id?: string | number | undefined;
    finality?: "optimistic" | "near-final" | "final" | undefined;
}, {
    block_id?: string | number | undefined;
    finality?: "optimistic" | "near-final" | "final" | undefined;
}>;
export declare const ChunkRequestSchema: z.ZodObject<{
    chunk_id: z.ZodUnion<[z.ZodString, z.ZodObject<{
        block_id: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
        shard_id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        block_id: string | number;
        shard_id: number;
    }, {
        block_id: string | number;
        shard_id: number;
    }>]>;
}, "strip", z.ZodTypeAny, {
    chunk_id: string | {
        block_id: string | number;
        shard_id: number;
    };
}, {
    chunk_id: string | {
        block_id: string | number;
        shard_id: number;
    };
}>;
export declare const QueryRequestSchema: z.ZodObject<{
    request_type: z.ZodString;
    finality: z.ZodOptional<z.ZodEnum<["optimistic", "near-final", "final"]>>;
    block_id: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    account_id: z.ZodOptional<z.ZodString>;
    public_key: z.ZodOptional<z.ZodString>;
    prefix: z.ZodOptional<z.ZodString>;
    method_name: z.ZodOptional<z.ZodString>;
    args_base64: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    request_type: string;
    block_id?: string | number | undefined;
    finality?: "optimistic" | "near-final" | "final" | undefined;
    account_id?: string | undefined;
    public_key?: string | undefined;
    prefix?: string | undefined;
    method_name?: string | undefined;
    args_base64?: string | undefined;
}, {
    request_type: string;
    block_id?: string | number | undefined;
    finality?: "optimistic" | "near-final" | "final" | undefined;
    account_id?: string | undefined;
    public_key?: string | undefined;
    prefix?: string | undefined;
    method_name?: string | undefined;
    args_base64?: string | undefined;
}>;
export declare const ValidatorsRequestSchema: z.ZodObject<{
    finality: z.ZodOptional<z.ZodEnum<["optimistic", "near-final", "final"]>>;
    block_id: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    epoch_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    block_id?: string | number | undefined;
    finality?: "optimistic" | "near-final" | "final" | undefined;
    epoch_id?: string | undefined;
}, {
    block_id?: string | number | undefined;
    finality?: "optimistic" | "near-final" | "final" | undefined;
    epoch_id?: string | undefined;
}>;
export declare const GasPriceRequestSchema: z.ZodObject<{
    finality: z.ZodOptional<z.ZodEnum<["optimistic", "near-final", "final"]>>;
    block_id: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
}, "strip", z.ZodTypeAny, {
    block_id?: string | number | undefined;
    finality?: "optimistic" | "near-final" | "final" | undefined;
}, {
    block_id?: string | number | undefined;
    finality?: "optimistic" | "near-final" | "final" | undefined;
}>;
export declare const NetworkInfoRequestSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const TransactionRequestSchema: z.ZodObject<{
    tx_hash: z.ZodString;
    sender_account_id: z.ZodString;
    wait_until: z.ZodOptional<z.ZodEnum<["NONE", "INCLUDED", "INCLUDED_FINAL", "EXECUTED", "EXECUTED_OPTIMISTIC", "FINAL"]>>;
}, "strip", z.ZodTypeAny, {
    tx_hash: string;
    sender_account_id: string;
    wait_until?: "NONE" | "INCLUDED" | "INCLUDED_FINAL" | "EXECUTED" | "EXECUTED_OPTIMISTIC" | "FINAL" | undefined;
}, {
    tx_hash: string;
    sender_account_id: string;
    wait_until?: "NONE" | "INCLUDED" | "INCLUDED_FINAL" | "EXECUTED" | "EXECUTED_OPTIMISTIC" | "FINAL" | undefined;
}>;
export declare const BroadcastTransactionRequestSchema: z.ZodObject<{
    signed_tx_base64: z.ZodString;
}, "strip", z.ZodTypeAny, {
    signed_tx_base64: string;
}, {
    signed_tx_base64: string;
}>;
