/**
 * Block-related types for NEAR Protocol JSON-RPC interface
 */

import { BlockReference, ChunkHeader, PublicKey, Signature, ValidatorStake } from './common';

export interface BlockQuery extends BlockReference {}

export interface BlockHeader {
  height: number;
  epochId: string;
  nextEpochId: string;
  hash: string;
  prevHash: string;
  prevStateRoot: string;
  chunkReceiptsRoot: string;
  chunkHeadersRoot: string;
  chunkTxRoot: string;
  outcomeRoot: string;
  chunksIncluded: number;
  challengesRoot: string;
  timestamp: number;
  timestampNanosec: string;
  randomValue: string;
  validatorProposals: ValidatorStake[];
  chunkMask: boolean[];
  gasPrice: string;
  rentPaid: string;
  validatorReward: string;
  totalSupply: string;
  challengesResult: ChallengeResult[];
  lastFinalBlock: string;
  lastDsFinalBlock: string;
  nextBpHash: string;
  blockMerkleRoot: string;
  approvals: (Signature | null)[];
  signature: Signature;
  latestProtocolVersion: number;
}

export interface ChallengeResult {
  accountId: string;
  isDoubleSign: boolean;
}

export interface BlockResponse {
  author: string;
  header: BlockHeader;
  chunks: ChunkHeader[];
}

export interface BlockChangesQuery extends BlockReference {}

export interface BlockChange {
  type: string;
  account_id: string;
}

export interface BlockChangesResponse {
  blockHash: string;
  changes: BlockChange[];
}

export interface ChunkQuery {
  chunkId?: string;
  blockId?: string | number;
  shardId?: number;
}

export interface ChunkResponse {
  author: string;
  header: ChunkHeader;
  transactions: Transaction[];
  receipts: Receipt[];
}

export interface Transaction {
  signerId: string;
  publicKey: PublicKey;
  nonce: number;
  receiverId: string;
  actions: Action[];
  signature: Signature;
  hash: string;
}

export interface Receipt {
  predecessorId: string;
  receiverId: string;
  receiptId: string;
  receipt: ReceiptEnum;
}

export type ReceiptEnum = 
  | { Action: ActionReceipt }
  | { Data: DataReceipt };

export interface ActionReceipt {
  signerId: string;
  signerPublicKey: PublicKey;
  gasPrice: string;
  outputDataReceivers: DataReceiver[];
  inputDataIds: string[];
  actions: Action[];
}

export interface DataReceipt {
  dataId: string;
  data: string;
}

export interface DataReceiver {
  dataId: string;
  receiverId: string;
}

export type Action = 
  | { CreateAccount: Record<string, never> }
  | { DeployContract: DeployContractAction }
  | { FunctionCall: FunctionCallAction }
  | { Transfer: TransferAction }
  | { Stake: StakeAction }
  | { AddKey: AddKeyAction }
  | { DeleteKey: DeleteKeyAction }
  | { DeleteAccount: DeleteAccountAction };

export interface DeployContractAction {
  code: string;
}

export interface FunctionCallAction {
  methodName: string;
  args: string;
  gas: number;
  deposit: string;
}

export interface TransferAction {
  deposit: string;
}

export interface StakeAction {
  stake: string;
  publicKey: PublicKey;
}

export interface AddKeyAction {
  publicKey: PublicKey;
  accessKey: AccessKey;
}

export interface DeleteKeyAction {
  publicKey: PublicKey;
}

export interface DeleteAccountAction {
  beneficiaryId: string;
}

export interface AccessKey {
  nonce: number;
  permission: AccessKeyPermission;
}

export type AccessKeyPermission = 
  | 'FullAccess'
  | { FunctionCall: FunctionCallPermission };

export interface FunctionCallPermission {
  allowance?: string;
  receiverId: string;
  methodNames: string[];
}
