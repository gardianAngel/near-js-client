/**
 * Zod schemas for block-related NEAR Protocol JSON-RPC types
 */

import { z } from 'zod';
import {
  BlockReferenceSchema,
  ChunkHeaderSchema,
  PublicKeySchema,
  SignatureSchema,
  ValidatorStakeSchema,
} from './common';

export const BlockQuerySchema = BlockReferenceSchema;

export const ChallengeResultSchema = z.object({
  accountId: z.string(),
  isDoubleSign: z.boolean(),
});

export const BlockHeaderSchema = z.object({
  height: z.number(),
  epochId: z.string(),
  nextEpochId: z.string(),
  hash: z.string(),
  prevHash: z.string(),
  prevStateRoot: z.string(),
  chunkReceiptsRoot: z.string(),
  chunkHeadersRoot: z.string(),
  chunkTxRoot: z.string(),
  outcomeRoot: z.string(),
  chunksIncluded: z.number(),
  challengesRoot: z.string(),
  timestamp: z.number(),
  timestampNanosec: z.string(),
  randomValue: z.string(),
  validatorProposals: z.array(ValidatorStakeSchema),
  chunkMask: z.array(z.boolean()),
  gasPrice: z.string(),
  rentPaid: z.string(),
  validatorReward: z.string(),
  totalSupply: z.string(),
  challengesResult: z.array(ChallengeResultSchema),
  lastFinalBlock: z.string(),
  lastDsFinalBlock: z.string(),
  nextBpHash: z.string(),
  blockMerkleRoot: z.string(),
  approvals: z.array(z.union([SignatureSchema, z.null()])),
  signature: SignatureSchema,
  latestProtocolVersion: z.number(),
});

export const BlockResponseSchema = z.object({
  author: z.string(),
  header: BlockHeaderSchema,
  chunks: z.array(ChunkHeaderSchema),
});

export const BlockChangesQuerySchema = BlockReferenceSchema;

export const BlockChangeSchema = z.object({
  type: z.string(),
  account_id: z.string(),
});

export const BlockChangesResponseSchema = z.object({
  blockHash: z.string(),
  changes: z.array(BlockChangeSchema),
});

export const ChunkQuerySchema = z.object({
  chunkId: z.string().optional(),
  blockId: z.union([z.string(), z.number()]).optional(),
  shardId: z.number().optional(),
});

export const FunctionCallPermissionSchema = z.object({
  allowance: z.string().optional(),
  receiverId: z.string(),
  methodNames: z.array(z.string()),
});

export const AccessKeyPermissionSchema = z.union([
  z.literal('FullAccess'),
  z.object({ FunctionCall: FunctionCallPermissionSchema }),
]);

export const AccessKeySchema = z.object({
  nonce: z.number(),
  permission: AccessKeyPermissionSchema,
});

export const DeployContractActionSchema = z.object({
  code: z.string(),
});

export const FunctionCallActionSchema = z.object({
  methodName: z.string(),
  args: z.string(),
  gas: z.number(),
  deposit: z.string(),
});

export const TransferActionSchema = z.object({
  deposit: z.string(),
});

export const StakeActionSchema = z.object({
  stake: z.string(),
  publicKey: PublicKeySchema,
});

export const AddKeyActionSchema = z.object({
  publicKey: PublicKeySchema,
  accessKey: AccessKeySchema,
});

export const DeleteKeyActionSchema = z.object({
  publicKey: PublicKeySchema,
});

export const DeleteAccountActionSchema = z.object({
  beneficiaryId: z.string(),
});

export const ActionSchema = z.union([
  z.object({ CreateAccount: z.record(z.never()) }),
  z.object({ DeployContract: DeployContractActionSchema }),
  z.object({ FunctionCall: FunctionCallActionSchema }),
  z.object({ Transfer: TransferActionSchema }),
  z.object({ Stake: StakeActionSchema }),
  z.object({ AddKey: AddKeyActionSchema }),
  z.object({ DeleteKey: DeleteKeyActionSchema }),
  z.object({ DeleteAccount: DeleteAccountActionSchema }),
]);

export const TransactionSchema = z.object({
  signerId: z.string(),
  publicKey: PublicKeySchema,
  nonce: z.number(),
  receiverId: z.string(),
  actions: z.array(ActionSchema),
  signature: SignatureSchema,
  hash: z.string(),
});

export const DataReceiverSchema = z.object({
  dataId: z.string(),
  receiverId: z.string(),
});

export const ActionReceiptSchema = z.object({
  signerId: z.string(),
  signerPublicKey: PublicKeySchema,
  gasPrice: z.string(),
  outputDataReceivers: z.array(DataReceiverSchema),
  inputDataIds: z.array(z.string()),
  actions: z.array(ActionSchema),
});

export const DataReceiptSchema = z.object({
  dataId: z.string(),
  data: z.string(),
});

export const ReceiptEnumSchema = z.union([
  z.object({ Action: ActionReceiptSchema }),
  z.object({ Data: DataReceiptSchema }),
]);

export const ReceiptSchema = z.object({
  predecessorId: z.string(),
  receiverId: z.string(),
  receiptId: z.string(),
  receipt: ReceiptEnumSchema,
});

export const ChunkResponseSchema = z.object({
  author: z.string(),
  header: ChunkHeaderSchema,
  transactions: z.array(TransactionSchema),
  receipts: z.array(ReceiptSchema),
});
