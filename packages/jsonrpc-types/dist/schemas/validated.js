"use strict";
/**
 * Validated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from official nearcore OpenAPI specification
 *
 * These schemas provide runtime validation for all RPC requests and responses.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastTransactionRequestSchema = exports.TransactionRequestSchema = exports.NetworkInfoRequestSchema = exports.GasPriceRequestSchema = exports.ValidatorsRequestSchema = exports.QueryRequestSchema = exports.ChunkRequestSchema = exports.BlockRequestSchema = exports.StatusRequestSchema = exports.ChunkResponseSchema = exports.TransactionResponseSchema = exports.NetworkInfoResponseSchema = exports.GasPriceResponseSchema = exports.ValidatorsResponseSchema = exports.ViewAccessKeyListResponseSchema = exports.ViewAccessKeyResponseSchema = exports.ViewAccountResponseSchema = exports.QueryResponseSchema = exports.BlockResponseSchema = exports.StatusResponseSchema = exports.BlockIdSchema = exports.FinalitySchema = exports.JsonRpcResponseSchema = exports.JsonRpcRequestSchema = exports.TimestampSchema = exports.NonceSchema = exports.BalanceSchema = exports.GasSchema = exports.ShardIdSchema = exports.BlockHashSchema = exports.BlockHeightSchema = exports.CryptoHashSchema = exports.PublicKeySchema = exports.AccountIdSchema = void 0;
const zod_1 = require("zod");
// Base primitive schemas
exports.AccountIdSchema = zod_1.z.string().min(1);
exports.PublicKeySchema = zod_1.z.string().regex(/^(ed25519|secp256k1):/);
exports.CryptoHashSchema = zod_1.z.string().length(44);
exports.BlockHeightSchema = zod_1.z.number().int().min(0);
exports.BlockHashSchema = zod_1.z.string().length(44);
exports.ShardIdSchema = zod_1.z.number().int().min(0);
exports.GasSchema = zod_1.z.string().regex(/^\d+$/);
exports.BalanceSchema = zod_1.z.string().regex(/^\d+$/);
exports.NonceSchema = zod_1.z.number().int().min(0);
exports.TimestampSchema = zod_1.z.number().int().min(0);
// JSON-RPC 2.0 schemas
exports.JsonRpcRequestSchema = zod_1.z.object({
    jsonrpc: zod_1.z.literal('2.0'),
    method: zod_1.z.string(),
    params: zod_1.z.any(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
});
exports.JsonRpcResponseSchema = zod_1.z.object({
    jsonrpc: zod_1.z.literal('2.0'),
    result: zod_1.z.any().optional(),
    error: zod_1.z.object({
        code: zod_1.z.number(),
        message: zod_1.z.string(),
        data: zod_1.z.any().optional(),
    }).optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
});
// Common schemas
exports.FinalitySchema = zod_1.z.enum(['optimistic', 'near-final', 'final']);
exports.BlockIdSchema = zod_1.z.union([
    zod_1.z.object({ block_id: exports.BlockHeightSchema }),
    zod_1.z.object({ block_id: exports.BlockHashSchema }),
    zod_1.z.object({ finality: exports.FinalitySchema }),
]);
// Status response schema
exports.StatusResponseSchema = zod_1.z.object({
    version: zod_1.z.object({
        version: zod_1.z.string(),
        build: zod_1.z.string(),
        rustc_version: zod_1.z.string(),
    }),
    chain_id: zod_1.z.string(),
    protocol_version: zod_1.z.number(),
    latest_protocol_version: zod_1.z.number(),
    rpc_addr: zod_1.z.string().optional(),
    validators: zod_1.z.array(exports.AccountIdSchema),
    sync_info: zod_1.z.object({
        latest_block_hash: exports.CryptoHashSchema,
        latest_block_height: exports.BlockHeightSchema,
        latest_state_root: exports.CryptoHashSchema,
        latest_block_time: zod_1.z.string(),
        syncing: zod_1.z.boolean(),
        earliest_block_hash: exports.CryptoHashSchema.optional(),
        earliest_block_height: exports.BlockHeightSchema.optional(),
        earliest_block_time: zod_1.z.string().optional(),
        epoch_id: exports.CryptoHashSchema.optional(),
        epoch_start_height: exports.BlockHeightSchema.optional(),
    }),
    validator_account_id: exports.AccountIdSchema.optional(),
    validator_public_key: exports.PublicKeySchema.optional(),
    node_public_key: exports.PublicKeySchema,
    account_id: exports.AccountIdSchema.optional(),
    node_key: exports.PublicKeySchema.optional(),
    uptime_sec: zod_1.z.number(),
});
// Block response schema
exports.BlockResponseSchema = zod_1.z.object({
    author: exports.AccountIdSchema,
    header: zod_1.z.object({
        height: exports.BlockHeightSchema,
        prev_height: exports.BlockHeightSchema.optional(),
        epoch_id: exports.CryptoHashSchema,
        next_epoch_id: exports.CryptoHashSchema,
        hash: exports.CryptoHashSchema,
        prev_hash: exports.CryptoHashSchema,
        prev_state_root: exports.CryptoHashSchema,
        chunk_receipts_root: exports.CryptoHashSchema,
        chunk_headers_root: exports.CryptoHashSchema,
        chunk_tx_root: exports.CryptoHashSchema,
        outcome_root: exports.CryptoHashSchema,
        chunks_included: zod_1.z.number(),
        challenges_root: exports.CryptoHashSchema,
        timestamp: exports.TimestampSchema,
        timestamp_nanosec: zod_1.z.string(),
        random_value: exports.CryptoHashSchema,
        validator_proposals: zod_1.z.array(zod_1.z.any()),
        chunk_mask: zod_1.z.array(zod_1.z.boolean()),
        gas_price: exports.GasSchema,
        rent_paid: exports.BalanceSchema,
        validator_reward: exports.BalanceSchema,
        total_supply: exports.BalanceSchema,
        challenges_result: zod_1.z.array(zod_1.z.any()),
        last_final_block: exports.CryptoHashSchema,
        last_ds_final_block: exports.CryptoHashSchema,
        next_bp_hash: exports.CryptoHashSchema,
        block_merkle_root: exports.CryptoHashSchema,
        approvals: zod_1.z.array(zod_1.z.string().nullable()),
        signature: zod_1.z.string(),
        latest_protocol_version: zod_1.z.number(),
    }),
    chunks: zod_1.z.array(zod_1.z.object({
        chunk_hash: exports.CryptoHashSchema,
        prev_block_hash: exports.CryptoHashSchema,
        outcome_root: exports.CryptoHashSchema,
        prev_state_root: exports.CryptoHashSchema,
        encoded_merkle_root: exports.CryptoHashSchema,
        encoded_length: zod_1.z.number(),
        height_created: exports.BlockHeightSchema,
        height_included: exports.BlockHeightSchema,
        shard_id: exports.ShardIdSchema,
        gas_used: exports.GasSchema,
        gas_limit: exports.GasSchema,
        rent_paid: exports.BalanceSchema,
        validator_reward: exports.BalanceSchema,
        balance_burnt: exports.BalanceSchema,
        outgoing_receipts_root: exports.CryptoHashSchema,
        tx_root: exports.CryptoHashSchema,
        validator_proposals: zod_1.z.array(zod_1.z.any()),
        signature: zod_1.z.string(),
    })),
});
// Query response schemas
exports.QueryResponseSchema = zod_1.z.object({
    block_height: exports.BlockHeightSchema,
    block_hash: exports.CryptoHashSchema,
});
exports.ViewAccountResponseSchema = exports.QueryResponseSchema.extend({
    account_id: exports.AccountIdSchema,
    amount: exports.BalanceSchema,
    locked: exports.BalanceSchema,
    code_hash: exports.CryptoHashSchema,
    storage_usage: zod_1.z.number(),
    storage_paid_at: exports.BlockHeightSchema,
});
exports.ViewAccessKeyResponseSchema = exports.QueryResponseSchema.extend({
    nonce: exports.NonceSchema,
    permission: zod_1.z.union([
        zod_1.z.string(),
        zod_1.z.object({
            FunctionCall: zod_1.z.object({
                allowance: exports.BalanceSchema.optional(),
                receiver_id: exports.AccountIdSchema,
                method_names: zod_1.z.array(zod_1.z.string()),
            }),
        }),
    ]),
});
exports.ViewAccessKeyListResponseSchema = exports.QueryResponseSchema.extend({
    keys: zod_1.z.array(zod_1.z.object({
        public_key: exports.PublicKeySchema,
        access_key: zod_1.z.object({
            nonce: exports.NonceSchema,
            permission: zod_1.z.union([
                zod_1.z.string(),
                zod_1.z.object({
                    FunctionCall: zod_1.z.object({
                        allowance: exports.BalanceSchema.optional(),
                        receiver_id: exports.AccountIdSchema,
                        method_names: zod_1.z.array(zod_1.z.string()),
                    }),
                }),
            ]),
        }),
    })),
});
// Validator response schema
exports.ValidatorsResponseSchema = zod_1.z.object({
    current_validators: zod_1.z.array(zod_1.z.object({
        account_id: exports.AccountIdSchema,
        public_key: exports.PublicKeySchema,
        is_slashed: zod_1.z.boolean(),
        stake: exports.BalanceSchema,
        shards: zod_1.z.array(exports.ShardIdSchema),
        num_produced_blocks: zod_1.z.number(),
        num_expected_blocks: zod_1.z.number(),
    })),
    next_validators: zod_1.z.array(zod_1.z.object({
        account_id: exports.AccountIdSchema,
        public_key: exports.PublicKeySchema,
        stake: exports.BalanceSchema,
        shards: zod_1.z.array(exports.ShardIdSchema),
    })),
    current_fishermen: zod_1.z.array(zod_1.z.object({
        account_id: exports.AccountIdSchema,
        public_key: exports.PublicKeySchema,
        stake: exports.BalanceSchema,
    })),
    next_fishermen: zod_1.z.array(zod_1.z.object({
        account_id: exports.AccountIdSchema,
        public_key: exports.PublicKeySchema,
        stake: exports.BalanceSchema,
    })),
    current_proposals: zod_1.z.array(zod_1.z.object({
        account_id: exports.AccountIdSchema,
        public_key: exports.PublicKeySchema,
        stake: exports.BalanceSchema,
    })),
    epoch_start_height: exports.BlockHeightSchema,
    epoch_height: exports.BlockHeightSchema,
    prev_epoch_kickout: zod_1.z.array(zod_1.z.object({
        account_id: exports.AccountIdSchema,
        reason: zod_1.z.any(),
    })),
});
// Gas price response schema
exports.GasPriceResponseSchema = zod_1.z.object({
    gas_price: exports.GasSchema,
});
// Network info response schema
exports.NetworkInfoResponseSchema = zod_1.z.object({
    active_peers: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        addr: zod_1.z.string(),
        account_id: exports.AccountIdSchema.optional(),
    })),
    num_active_peers: zod_1.z.number(),
    peer_max_count: zod_1.z.number(),
    sent_bytes_per_sec: zod_1.z.number(),
    received_bytes_per_sec: zod_1.z.number(),
    known_producers: zod_1.z.array(zod_1.z.object({
        account_id: exports.AccountIdSchema,
        addr: zod_1.z.string().optional(),
        peer_id: zod_1.z.string(),
    })),
});
// Transaction response schema
exports.TransactionResponseSchema = zod_1.z.object({
    status: zod_1.z.union([
        zod_1.z.object({ SuccessValue: zod_1.z.string() }),
        zod_1.z.object({ SuccessReceiptId: zod_1.z.string() }),
        zod_1.z.object({
            Failure: zod_1.z.object({
                ActionError: zod_1.z.object({
                    index: zod_1.z.number(),
                    kind: zod_1.z.any(),
                }),
            }),
        }),
    ]),
    transaction: zod_1.z.object({
        signer_id: exports.AccountIdSchema,
        public_key: exports.PublicKeySchema,
        nonce: exports.NonceSchema,
        receiver_id: exports.AccountIdSchema,
        actions: zod_1.z.array(zod_1.z.any()),
        signature: zod_1.z.string(),
        hash: exports.CryptoHashSchema,
    }),
    transaction_outcome: zod_1.z.object({
        proof: zod_1.z.array(zod_1.z.any()),
        block_hash: exports.CryptoHashSchema,
        id: exports.CryptoHashSchema,
        outcome: zod_1.z.object({
            logs: zod_1.z.array(zod_1.z.string()),
            receipt_ids: zod_1.z.array(exports.CryptoHashSchema),
            gas_burnt: exports.GasSchema,
            tokens_burnt: exports.BalanceSchema,
            executor_id: exports.AccountIdSchema,
            status: zod_1.z.any(),
        }),
    }),
    receipts_outcome: zod_1.z.array(zod_1.z.object({
        proof: zod_1.z.array(zod_1.z.any()),
        block_hash: exports.CryptoHashSchema,
        id: exports.CryptoHashSchema,
        outcome: zod_1.z.object({
            logs: zod_1.z.array(zod_1.z.string()),
            receipt_ids: zod_1.z.array(exports.CryptoHashSchema),
            gas_burnt: exports.GasSchema,
            tokens_burnt: exports.BalanceSchema,
            executor_id: exports.AccountIdSchema,
            status: zod_1.z.any(),
        }),
    })),
});
// Chunk response schema
exports.ChunkResponseSchema = zod_1.z.object({
    author: exports.AccountIdSchema,
    header: zod_1.z.object({
        chunk_hash: exports.CryptoHashSchema,
        prev_block_hash: exports.CryptoHashSchema,
        outcome_root: exports.CryptoHashSchema,
        prev_state_root: exports.CryptoHashSchema,
        encoded_merkle_root: exports.CryptoHashSchema,
        encoded_length: zod_1.z.number(),
        height_created: exports.BlockHeightSchema,
        height_included: exports.BlockHeightSchema,
        shard_id: exports.ShardIdSchema,
        gas_used: exports.GasSchema,
        gas_limit: exports.GasSchema,
        rent_paid: exports.BalanceSchema,
        validator_reward: exports.BalanceSchema,
        balance_burnt: exports.BalanceSchema,
        outgoing_receipts_root: exports.CryptoHashSchema,
        tx_root: exports.CryptoHashSchema,
        validator_proposals: zod_1.z.array(zod_1.z.any()),
        signature: zod_1.z.string(),
    }),
    transactions: zod_1.z.array(zod_1.z.object({
        signer_id: exports.AccountIdSchema,
        public_key: exports.PublicKeySchema,
        nonce: exports.NonceSchema,
        receiver_id: exports.AccountIdSchema,
        actions: zod_1.z.array(zod_1.z.any()),
        signature: zod_1.z.string(),
        hash: exports.CryptoHashSchema,
    })),
    receipts: zod_1.z.array(zod_1.z.any()),
});
// Request parameter schemas
exports.StatusRequestSchema = zod_1.z.object({});
exports.BlockRequestSchema = zod_1.z.object({
    finality: exports.FinalitySchema.optional(),
    block_id: zod_1.z.union([exports.BlockHeightSchema, exports.BlockHashSchema]).optional(),
});
exports.ChunkRequestSchema = zod_1.z.object({
    chunk_id: zod_1.z.union([
        exports.CryptoHashSchema,
        zod_1.z.object({
            block_id: zod_1.z.union([exports.BlockHeightSchema, exports.BlockHashSchema]),
            shard_id: exports.ShardIdSchema,
        }),
    ]),
});
exports.QueryRequestSchema = zod_1.z.object({
    request_type: zod_1.z.string(),
    finality: exports.FinalitySchema.optional(),
    block_id: zod_1.z.union([exports.BlockHeightSchema, exports.BlockHashSchema]).optional(),
    account_id: exports.AccountIdSchema.optional(),
    public_key: exports.PublicKeySchema.optional(),
    prefix: zod_1.z.string().optional(),
    method_name: zod_1.z.string().optional(),
    args_base64: zod_1.z.string().optional(),
});
exports.ValidatorsRequestSchema = zod_1.z.object({
    finality: exports.FinalitySchema.optional(),
    block_id: zod_1.z.union([exports.BlockHeightSchema, exports.BlockHashSchema]).optional(),
    epoch_id: exports.CryptoHashSchema.optional(),
});
exports.GasPriceRequestSchema = zod_1.z.object({
    finality: exports.FinalitySchema.optional(),
    block_id: zod_1.z.union([exports.BlockHeightSchema, exports.BlockHashSchema]).optional(),
});
exports.NetworkInfoRequestSchema = zod_1.z.object({});
exports.TransactionRequestSchema = zod_1.z.object({
    tx_hash: exports.CryptoHashSchema,
    sender_account_id: exports.AccountIdSchema,
    wait_until: zod_1.z.enum(['NONE', 'INCLUDED', 'INCLUDED_FINAL', 'EXECUTED', 'EXECUTED_OPTIMISTIC', 'FINAL']).optional(),
});
exports.BroadcastTransactionRequestSchema = zod_1.z.object({
    signed_tx_base64: zod_1.z.string(),
});
