/**
 * Improved Zod schemas for NEAR Protocol JSON-RPC API
 * Fixed: Proper schemas instead of z.record(z.unknown())
 */

import { z } from 'zod';

// Base primitive schemas
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

// Proper AccountView schema - Fixed
export const AccountViewSchema = z.object({
  amount: z.string(),
  codeHash: z.string().optional(),  // Fixed: proper camelCase
  globalContractAccountId: z.string().optional(),  // Fixed: proper camelCase
  globalContractHash: z.string().optional(),  // Fixed: proper camelCase
  locked: z.string(),
  storagePaidAt: z.number().optional(),  // Fixed: proper camelCase
  storageUsage: z.number().optional()  // Fixed: proper camelCase
});

// Proper schemas instead of z.record(z.unknown())
export const BroadcastTxAsyncResponseSchema = z.object({
  transactionHash: z.string(),
  nodeId: z.string()
});

export const BroadcastTxCommitRequestSchema = z.object({
  signedTxBase64: z.string()
});

export const BroadcastTxCommitResponseSchema = z.object({
  transactionHash: z.string(),
  status: z.object({
    successValue: z.string().optional(),
    successReceiptId: z.string().optional(),
    failure: z.object({
      errorMessage: z.string(),
      errorType: z.string()
    }).optional()
  }),
  transaction: z.object({
    signerId: z.string(),
    publicKey: z.string(),
    nonce: z.number(),
    receiverId: z.string(),
    actions: z.array(z.any()),
    signature: z.string(),
    hash: z.string()
  }),
  receipts: z.array(z.any())
});

// Common schemas
export const FinalitySchema = z.enum(['optimistic', 'near-final', 'final']);

export const JsonRpcRequestSchema = z.object({
  jsonrpc: z.literal('2.0'),
  method: z.string(),
  params: z.any(),
  id: z.union([z.string(), z.number()])
});

export const JsonRpcResponseSchema = z.object({
  jsonrpc: z.literal('2.0'),
  result: z.any().optional(),
  error: z.object({
    code: z.number(),
    message: z.string(),
    data: z.any().optional()
  }).optional(),
  id: z.union([z.string(), z.number()])
});

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
    syncing: z.boolean()
  }),
  uptimeSec: z.number(),
  validatorAccountId: z.string().optional(),
  validatorPublicKey: z.string().optional(),
  validators: z.array(z.object({
    accountId: z.string(),
    publicKey: z.string(),
    stake: z.string()
  })),
  version: z.object({
    build: z.string(),
    commit: z.string(),
    rustcVersion: z.string(),
    version: z.string()
  })
});

export const BlockResponseSchema = z.object({
  author: z.string(),
  chunks: z.array(z.any()),
  header: z.object({
    height: z.number(),
    hash: z.string(),
    prevHash: z.string(),
    timestamp: z.number(),
    gasPrice: z.string(),
    totalSupply: z.string(),
    epochId: z.string(),
    nextEpochId: z.string(),
    signature: z.string(),
    validatorProposals: z.array(z.any()),
    chunkMask: z.array(z.boolean()),
    chunksIncluded: z.number(),
    blockOrdinal: z.number(),
    approvals: z.array(z.string().nullable()),
    timestampNanosec: z.string(),
    randomValue: z.string(),
    validatorReward: z.string(),
    rentPaid: z.string(),
    blockBodyHash: z.string(),
    blockMerkleRoot: z.string(),
    outcomeRoot: z.string(),
    chunkReceiptsRoot: z.string(),
    chunkHeadersRoot: z.string(),
    chunkTxRoot: z.string(),
    challengesRoot: z.string(),
    challengesResult: z.array(z.any()),
    prevStateRoot: z.string(),
    prevHeight: z.number(),
    latestProtocolVersion: z.number(),
    nextBpHash: z.string(),
    lastFinalBlock: z.string(),
    lastDsFinalBlock: z.string(),
    epochSyncDataHash: z.string().optional(),
    chunkEndorsements: z.array(z.any())
  })
});

export const GasPriceResponseSchema = z.object({
  gasPrice: z.string()
});

export const NetworkInfoResponseSchema = z.object({
  activePeers: z.array(z.object({
    id: z.string(),
    addr: z.string(),
    accountId: z.string().optional()
  })),
  knownProducers: z.array(z.object({
    accountId: z.string(),
    addr: z.string().optional(),
    peerId: z.string()
  })),
  numActivePeers: z.number(),
  peerMaxCount: z.number(),
  sentBytesPerSec: z.number(),
  receivedBytesPerSec: z.number(),
  tier1Connections: z.array(z.any()),
  tier1AccountsKeys: z.array(z.string()),
  tier1AccountsData: z.array(z.any())
});

// Experimental config schemas - proper instead of z.record(z.unknown())
export const EXPERIMENTALProtocolConfigResponseSchema = z.object({
  chainId: z.string(),
  genesisHeight: z.number(),
  genesisTime: z.string(),
  epochLength: z.number(),
  maxGasPrice: z.string(),
  minGasPrice: z.string(),
  maxInflationRate: z.number(),
  protocolVersion: z.number(),
  runtimeConfig: z.object({
    storageAmountPerByte: z.string(),
    transactionCosts: z.any(),
    wasmConfig: z.any(),
    accountCreationConfig: z.any()
  }),
  protocolReward: z.string(),
  maxKickoutStake: z.string(),
  onlineMinThreshold: z.number(),
  onlineMaxThreshold: z.number()
});

export const EXPERIMENTALGenesisConfigResponseSchema = z.object({
  protocolVersion: z.number(),
  genesisTime: z.string(),
  chainId: z.string(),
  genesisHeight: z.number(),
  numBlockProducerSeats: z.number(),
  numBlockProducerSeatsPerShard: z.array(z.number()),
  avgHiddenValidatorSeatsPerShard: z.array(z.number()),
  dynamicResharding: z.boolean(),
  protocolUpgradeStakeThreshold: z.number(),
  epochLength: z.number(),
  gasLimit: z.number(),
  minGasPrice: z.string(),
  maxGasPrice: z.string(),
  blockProducerKickoutThreshold: z.number(),
  chunkProducerKickoutThreshold: z.number(),
  onlineMinThreshold: z.number(),
  onlineMaxThreshold: z.number(),
  gasPriceAdjustmentRate: z.number(),
  runtimeConfig: z.any(),
  validators: z.array(z.object({
    accountId: z.string(),
    publicKey: z.string(),
    amount: z.string()
  })),
  records: z.array(z.any())
});