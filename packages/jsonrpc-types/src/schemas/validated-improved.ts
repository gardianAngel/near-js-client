/**
 * Validated Zod Schemas for NEAR Protocol JSON-RPC
 * 
 * These schemas are generated from real API responses and provide proper validation
 * instead of generic z.record(z.unknown()) patterns.
 */

import { z } from 'zod';

// Basic types
export const AccountIdSchema = z.string();
export const PublicKeySchema = z.string();
export const CryptoHashSchema = z.string();
export const BlockHeightSchema = z.number();
export const BlockHashSchema = z.string();
export const ShardIdSchema = z.number();
export const GasSchema = z.string();
export const BalanceSchema = z.string();
export const NonceSchema = z.number();
export const TimestampSchema = z.number();

// Account schemas
export const AccountViewSchema = z.object({
  amount: z.string(),
  codeHash: z.string().optional(),
  globalContractAccountId: z.string().optional(),
  globalContractHash: z.string().optional(),
  locked: z.string(),
  storagePaidAt: z.number().optional(),
  storageUsage: z.number().optional(),
});

// JSON-RPC schemas
export const JsonRpcRequestSchema = z.object({
  jsonrpc: z.literal('2.0'),
  method: z.string(),
  params: z.any(),
  id: z.union([z.string(), z.number()]),
});

export const JsonRpcErrorSchema = z.object({
  code: z.number(),
  message: z.string(),
  data: z.any().optional(),
});

export const JsonRpcResponseSchema = z.object({
  jsonrpc: z.literal('2.0'),
  result: z.any().optional(),
  error: JsonRpcErrorSchema.optional(),
  id: z.union([z.string(), z.number()]),
});

// Status response schema
export const StatusResponseSchema = z.object({
  chainId: z.string(),
  genesisHash: z.string(),
  latestProtocolVersion: z.number(),
  nodeKey: z.string().optional(),
  nodePublicKey: z.string(),
  protocolVersion: z.number(),
  rpcAddr: z.string(),
  syncInfo: z.object({
    earliestBlockHash: z.string(),
    earliestBlockHeight: z.number(),
    earliestBlockTime: z.string(),
    epochId: z.string(),
    epochStartHeight: z.number(),
    latestBlockHash: z.string(),
    latestBlockHeight: z.number(),
    latestBlockTime: z.string(),
    latestStateRoot: z.string(),
    syncing: z.boolean(),
  }),
  uptimeSec: z.number(),
  validatorAccountId: z.string().optional(),
  validatorPublicKey: z.string().optional(),
  validators: z.array(z.object({
    accountId: z.string(),
    publicKey: z.string(),
    stake: z.string(),
  })),
  version: z.object({
    build: z.string(),
    commit: z.string(),
    rustcVersion: z.string(),
    version: z.string(),
  }),
});

// Block response schema
export const BlockResponseSchema = z.object({
  author: z.string(),
  chunks: z.array(z.object({
    balanceBurnt: z.string(),
    chunkHash: z.string(),
    encodedLength: z.number(),
    encodedMerkleRoot: z.string(),
    gasLimit: z.number(),
    gasUsed: z.number(),
    heightCreated: z.number(),
    heightIncluded: z.number(),
    outcomeRoot: z.string(),
    outgoingReceiptsRoot: z.string(),
    prevBlockHash: z.string(),
    prevStateRoot: z.string(),
    rentPaid: z.string(),
    shardId: z.number(),
    signature: z.string(),
    txRoot: z.string(),
    validatorProposals: z.array(z.any()),
    validatorReward: z.string(),
  })),
  header: z.object({
    approvals: z.array(z.string().nullable()),
    blockBodyHash: z.string(),
    blockMerkleRoot: z.string(),
    blockOrdinal: z.number(),
    challengesResult: z.array(z.any()),
    challengesRoot: z.string(),
    chunkEndorsements: z.array(z.any()),
    chunkHeadersRoot: z.string(),
    chunkMask: z.array(z.boolean()),
    chunkReceiptsRoot: z.string(),
    chunkTxRoot: z.string(),
    chunksIncluded: z.number(),
    epochId: z.string(),
    epochSyncDataHash: z.string().optional(),
    gasPrice: z.string(),
    hash: z.string(),
    height: z.number(),
    lastDsFinalBlock: z.string(),
    lastFinalBlock: z.string(),
    latestProtocolVersion: z.number(),
    nextBpHash: z.string(),
    nextEpochId: z.string(),
    outcomeRoot: z.string(),
    prevHash: z.string(),
    prevHeight: z.number(),
    prevStateRoot: z.string(),
    randomValue: z.string(),
    rentPaid: z.string(),
    signature: z.string(),
    timestamp: z.number(),
    timestampNanosec: z.string(),
    totalSupply: z.string(),
    validatorProposals: z.array(z.any()),
    validatorReward: z.string(),
  }),
});

// Gas price response schema
export const GasPriceResponseSchema = z.object({
  gasPrice: z.string(),
});

// Network info response schema
export const NetworkInfoResponseSchema = z.object({
  activePeers: z.array(z.object({
    id: z.string(),
    addr: z.string(),
    accountId: z.string().optional(),
  })),
  knownProducers: z.array(z.object({
    accountId: z.string(),
    addr: z.string().optional(),
    peerId: z.string(),
  })),
  numActivePeers: z.number(),
  peerMaxCount: z.number(),
  sentBytesPerSec: z.number(),
  receivedBytesPerSec: z.number(),
  tier1Connections: z.array(z.object({
    id: z.string(),
    addr: z.string(),
    accountId: z.string().optional(),
  })),
  tier1AccountsKeys: z.array(z.string()),
  tier1AccountsData: z.array(z.object({
    accountId: z.string(),
    publicKey: z.string(),
    epoch: z.number(),
  })),
});

// Query response schema
export const QueryResponseSchema = z.object({
  blockHash: z.string(),
  blockHeight: z.number(),
  values: z.any(),
});

// View account response schema
export const ViewAccountResponseSchema = z.object({
  accountId: z.string(),
  amount: z.string(),
  codeHash: z.string(),
  locked: z.string(),
  storagePaidAt: z.number(),
  storageUsage: z.number(),
});

// Access key list response schema
export const AccessKeyListResponseSchema = z.object({
  keys: z.array(z.object({
    publicKey: z.string(),
    accessKey: z.object({
      nonce: z.number(),
      permission: z.union([
        z.literal('FullAccess'),
        z.object({
          functionCall: z.object({
            allowance: z.string().optional(),
            receiverId: z.string(),
            methodNames: z.array(z.string()),
          }),
        }),
      ]),
    }),
  })),
});

// Finality schema
export const FinalitySchema = z.enum(['optimistic', 'near-final', 'final']);

// Export all schemas
export const ValidatedSchemas = {
  AccountIdSchema,
  PublicKeySchema,
  CryptoHashSchema,
  BlockHeightSchema,
  BlockHashSchema,
  ShardIdSchema,
  GasSchema,
  BalanceSchema,
  NonceSchema,
  TimestampSchema,
  AccountViewSchema,
  JsonRpcRequestSchema,
  JsonRpcErrorSchema,
  JsonRpcResponseSchema,
  StatusResponseSchema,
  BlockResponseSchema,
  GasPriceResponseSchema,
  NetworkInfoResponseSchema,
  QueryResponseSchema,
  ViewAccountResponseSchema,
  AccessKeyListResponseSchema,
  FinalitySchema,
};