/**
 * Validated Zod schemas for NEAR Protocol JSON-RPC API
 * Generated from official nearcore OpenAPI specification
 * 
 * These schemas provide runtime validation for all RPC requests and responses.
 */

import { z } from 'zod';

// Base primitive schemas
export const AccountIdSchema = z.string().min(1);
export const PublicKeySchema = z.string().regex(/^(ed25519|secp256k1):/);
export const CryptoHashSchema = z.string().length(44);
export const BlockHeightSchema = z.number().int().min(0);
export const BlockHashSchema = z.string().length(44);
export const ShardIdSchema = z.number().int().min(0);
export const GasSchema = z.string().regex(/^\d+$/);
export const BalanceSchema = z.string().regex(/^\d+$/);
export const NonceSchema = z.number().int().min(0);
export const TimestampSchema = z.number().int().min(0);

// JSON-RPC 2.0 schemas
export const JsonRpcRequestSchema = z.object({
  jsonrpc: z.literal('2.0'),
  method: z.string(),
  params: z.any(),
  id: z.union([z.string(), z.number()]),
});

export const JsonRpcResponseSchema = z.object({
  jsonrpc: z.literal('2.0'),
  result: z.any().optional(),
  error: z.object({
    code: z.number(),
    message: z.string(),
    data: z.any().optional(),
  }).optional(),
  id: z.union([z.string(), z.number()]),
});

// Common schemas
export const FinalitySchema = z.enum(['optimistic', 'near-final', 'final']);

export const BlockIdSchema = z.union([
  z.object({ block_id: BlockHeightSchema }),
  z.object({ block_id: BlockHashSchema }),
  z.object({ finality: FinalitySchema }),
]);

// Status response schema
export const StatusResponseSchema = z.object({
  version: z.object({
    version: z.string(),
    build: z.string(),
    rustc_version: z.string(),
  }),
  chain_id: z.string(),
  protocol_version: z.number(),
  latest_protocol_version: z.number(),
  rpc_addr: z.string().optional(),
  validators: z.array(AccountIdSchema),
  sync_info: z.object({
    latest_block_hash: CryptoHashSchema,
    latest_block_height: BlockHeightSchema,
    latest_state_root: CryptoHashSchema,
    latest_block_time: z.string(),
    syncing: z.boolean(),
    earliest_block_hash: CryptoHashSchema.optional(),
    earliest_block_height: BlockHeightSchema.optional(),
    earliest_block_time: z.string().optional(),
    epoch_id: CryptoHashSchema.optional(),
    epoch_start_height: BlockHeightSchema.optional(),
  }),
  validator_account_id: AccountIdSchema.optional(),
  validator_public_key: PublicKeySchema.optional(),
  node_public_key: PublicKeySchema,
  account_id: AccountIdSchema.optional(),
  node_key: PublicKeySchema.optional(),
  uptime_sec: z.number(),
});

// Block response schema
export const BlockResponseSchema = z.object({
  author: AccountIdSchema,
  header: z.object({
    height: BlockHeightSchema,
    prev_height: BlockHeightSchema.optional(),
    epoch_id: CryptoHashSchema,
    next_epoch_id: CryptoHashSchema,
    hash: CryptoHashSchema,
    prev_hash: CryptoHashSchema,
    prev_state_root: CryptoHashSchema,
    chunk_receipts_root: CryptoHashSchema,
    chunk_headers_root: CryptoHashSchema,
    chunk_tx_root: CryptoHashSchema,
    outcome_root: CryptoHashSchema,
    chunks_included: z.number(),
    challenges_root: CryptoHashSchema,
    timestamp: TimestampSchema,
    timestamp_nanosec: z.string(),
    random_value: CryptoHashSchema,
    validator_proposals: z.array(z.any()),
    chunk_mask: z.array(z.boolean()),
    gas_price: GasSchema,
    rent_paid: BalanceSchema,
    validator_reward: BalanceSchema,
    total_supply: BalanceSchema,
    challenges_result: z.array(z.any()),
    last_final_block: CryptoHashSchema,
    last_ds_final_block: CryptoHashSchema,
    next_bp_hash: CryptoHashSchema,
    block_merkle_root: CryptoHashSchema,
    approvals: z.array(z.string().nullable()),
    signature: z.string(),
    latest_protocol_version: z.number(),
  }),
  chunks: z.array(z.object({
    chunk_hash: CryptoHashSchema,
    prev_block_hash: CryptoHashSchema,
    outcome_root: CryptoHashSchema,
    prev_state_root: CryptoHashSchema,
    encoded_merkle_root: CryptoHashSchema,
    encoded_length: z.number(),
    height_created: BlockHeightSchema,
    height_included: BlockHeightSchema,
    shard_id: ShardIdSchema,
    gas_used: GasSchema,
    gas_limit: GasSchema,
    rent_paid: BalanceSchema,
    validator_reward: BalanceSchema,
    balance_burnt: BalanceSchema,
    outgoing_receipts_root: CryptoHashSchema,
    tx_root: CryptoHashSchema,
    validator_proposals: z.array(z.any()),
    signature: z.string(),
  })),
});

// Query response schemas
export const QueryResponseSchema = z.object({
  block_height: BlockHeightSchema,
  block_hash: CryptoHashSchema,
});

export const ViewAccountResponseSchema = QueryResponseSchema.extend({
  account_id: AccountIdSchema,
  amount: BalanceSchema,
  locked: BalanceSchema,
  code_hash: CryptoHashSchema,
  storage_usage: z.number(),
  storage_paid_at: BlockHeightSchema,
});

export const ViewAccessKeyResponseSchema = QueryResponseSchema.extend({
  nonce: NonceSchema,
  permission: z.union([
    z.string(),
    z.object({
      FunctionCall: z.object({
        allowance: BalanceSchema.optional(),
        receiver_id: AccountIdSchema,
        method_names: z.array(z.string()),
      }),
    }),
  ]),
});

export const ViewAccessKeyListResponseSchema = QueryResponseSchema.extend({
  keys: z.array(z.object({
    public_key: PublicKeySchema,
    access_key: z.object({
      nonce: NonceSchema,
      permission: z.union([
        z.string(),
        z.object({
          FunctionCall: z.object({
            allowance: BalanceSchema.optional(),
            receiver_id: AccountIdSchema,
            method_names: z.array(z.string()),
          }),
        }),
      ]),
    }),
  })),
});

// Validator response schema
export const ValidatorsResponseSchema = z.object({
  current_validators: z.array(z.object({
    account_id: AccountIdSchema,
    public_key: PublicKeySchema,
    is_slashed: z.boolean(),
    stake: BalanceSchema,
    shards: z.array(ShardIdSchema),
    num_produced_blocks: z.number(),
    num_expected_blocks: z.number(),
  })),
  next_validators: z.array(z.object({
    account_id: AccountIdSchema,
    public_key: PublicKeySchema,
    stake: BalanceSchema,
    shards: z.array(ShardIdSchema),
  })),
  current_fishermen: z.array(z.object({
    account_id: AccountIdSchema,
    public_key: PublicKeySchema,
    stake: BalanceSchema,
  })),
  next_fishermen: z.array(z.object({
    account_id: AccountIdSchema,
    public_key: PublicKeySchema,
    stake: BalanceSchema,
  })),
  current_proposals: z.array(z.object({
    account_id: AccountIdSchema,
    public_key: PublicKeySchema,
    stake: BalanceSchema,
  })),
  epoch_start_height: BlockHeightSchema,
  epoch_height: BlockHeightSchema,
  prev_epoch_kickout: z.array(z.object({
    account_id: AccountIdSchema,
    reason: z.any(),
  })),
});

// Gas price response schema
export const GasPriceResponseSchema = z.object({
  gas_price: GasSchema,
});

// Network info response schema
export const NetworkInfoResponseSchema = z.object({
  active_peers: z.array(z.object({
    id: z.string(),
    addr: z.string(),
    account_id: AccountIdSchema.optional(),
  })),
  num_active_peers: z.number(),
  peer_max_count: z.number(),
  sent_bytes_per_sec: z.number(),
  received_bytes_per_sec: z.number(),
  known_producers: z.array(z.object({
    account_id: AccountIdSchema,
    addr: z.string().optional(),
    peer_id: z.string(),
  })),
});

// Transaction response schema
export const TransactionResponseSchema = z.object({
  status: z.union([
    z.object({ SuccessValue: z.string() }),
    z.object({ SuccessReceiptId: z.string() }),
    z.object({
      Failure: z.object({
        ActionError: z.object({
          index: z.number(),
          kind: z.any(),
        }),
      }),
    }),
  ]),
  transaction: z.object({
    signer_id: AccountIdSchema,
    public_key: PublicKeySchema,
    nonce: NonceSchema,
    receiver_id: AccountIdSchema,
    actions: z.array(z.any()),
    signature: z.string(),
    hash: CryptoHashSchema,
  }),
  transaction_outcome: z.object({
    proof: z.array(z.any()),
    block_hash: CryptoHashSchema,
    id: CryptoHashSchema,
    outcome: z.object({
      logs: z.array(z.string()),
      receipt_ids: z.array(CryptoHashSchema),
      gas_burnt: GasSchema,
      tokens_burnt: BalanceSchema,
      executor_id: AccountIdSchema,
      status: z.any(),
    }),
  }),
  receipts_outcome: z.array(z.object({
    proof: z.array(z.any()),
    block_hash: CryptoHashSchema,
    id: CryptoHashSchema,
    outcome: z.object({
      logs: z.array(z.string()),
      receipt_ids: z.array(CryptoHashSchema),
      gas_burnt: GasSchema,
      tokens_burnt: BalanceSchema,
      executor_id: AccountIdSchema,
      status: z.any(),
    }),
  })),
});

// Chunk response schema
export const ChunkResponseSchema = z.object({
  author: AccountIdSchema,
  header: z.object({
    chunk_hash: CryptoHashSchema,
    prev_block_hash: CryptoHashSchema,
    outcome_root: CryptoHashSchema,
    prev_state_root: CryptoHashSchema,
    encoded_merkle_root: CryptoHashSchema,
    encoded_length: z.number(),
    height_created: BlockHeightSchema,
    height_included: BlockHeightSchema,
    shard_id: ShardIdSchema,
    gas_used: GasSchema,
    gas_limit: GasSchema,
    rent_paid: BalanceSchema,
    validator_reward: BalanceSchema,
    balance_burnt: BalanceSchema,
    outgoing_receipts_root: CryptoHashSchema,
    tx_root: CryptoHashSchema,
    validator_proposals: z.array(z.any()),
    signature: z.string(),
  }),
  transactions: z.array(z.object({
    signer_id: AccountIdSchema,
    public_key: PublicKeySchema,
    nonce: NonceSchema,
    receiver_id: AccountIdSchema,
    actions: z.array(z.any()),
    signature: z.string(),
    hash: CryptoHashSchema,
  })),
  receipts: z.array(z.any()),
});

// Request parameter schemas
export const StatusRequestSchema = z.object({});

export const BlockRequestSchema = z.object({
  finality: FinalitySchema.optional(),
  block_id: z.union([BlockHeightSchema, BlockHashSchema]).optional(),
});

export const ChunkRequestSchema = z.object({
  chunk_id: z.union([
    CryptoHashSchema,
    z.object({
      block_id: z.union([BlockHeightSchema, BlockHashSchema]),
      shard_id: ShardIdSchema,
    }),
  ]),
});

export const QueryRequestSchema = z.object({
  request_type: z.string(),
  finality: FinalitySchema.optional(),
  block_id: z.union([BlockHeightSchema, BlockHashSchema]).optional(),
  account_id: AccountIdSchema.optional(),
  public_key: PublicKeySchema.optional(),
  prefix: z.string().optional(),
  method_name: z.string().optional(),
  args_base64: z.string().optional(),
});

export const ValidatorsRequestSchema = z.object({
  finality: FinalitySchema.optional(),
  block_id: z.union([BlockHeightSchema, BlockHashSchema]).optional(),
  epoch_id: CryptoHashSchema.optional(),
});

export const GasPriceRequestSchema = z.object({
  finality: FinalitySchema.optional(),
  block_id: z.union([BlockHeightSchema, BlockHashSchema]).optional(),
});

export const NetworkInfoRequestSchema = z.object({});

export const TransactionRequestSchema = z.object({
  tx_hash: CryptoHashSchema,
  sender_account_id: AccountIdSchema,
  wait_until: z.enum(['NONE', 'INCLUDED', 'INCLUDED_FINAL', 'EXECUTED', 'EXECUTED_OPTIMISTIC', 'FINAL']).optional(),
});

export const BroadcastTransactionRequestSchema = z.object({
  signed_tx_base64: z.string(),
});