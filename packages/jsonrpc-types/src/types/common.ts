/**
 * Common types used across NEAR Protocol JSON-RPC interface
 */

export type Finality = 'final' | 'near-final' | 'optimistic';

export type BlockId = string | number;

export interface BlockReference {
  blockId?: BlockId;
  finality?: Finality;
}

export interface JsonRpcRequest {
  jsonrpc: '2.0';
  method: string;
  params: unknown;
  id: string | number;
}

export interface JsonRpcResponse<T = unknown> {
  jsonrpc: '2.0';
  result?: T;
  error?: JsonRpcError;
  id: string | number;
}

export interface JsonRpcError {
  code: number;
  message: string;
  data?: unknown;
}

export interface PublicKey {
  keyType: number;
  data: string;
}

export interface Signature {
  keyType: number;
  data: string;
}

export interface MerkleProof {
  hash: string;
  direction: 'Left' | 'Right';
}

export interface ValidatorStake {
  accountId: string;
  publicKey: PublicKey;
  stake: string;
}

export interface ChunkHeader {
  chunkHash: string;
  prevBlockHash: string;
  outcomeRoot: string;
  prevStateRoot: string;
  encodedMerkleRoot: string;
  encodedLength: number;
  heightCreated: number;
  heightIncluded: number;
  shardId: number;
  gasUsed: number;
  gasLimit: number;
  rentPaid: string;
  validatorReward: string;
  balanceBurnt: string;
  outgoingReceiptsRoot: string;
  txRoot: string;
  validatorProposals: ValidatorStake[];
  signature: Signature;
}

export interface ExecutionOutcome {
  logs: string[];
  receiptIds: string[];
  gasUsed: number;
  tokensBurnt: string;
  executorId: string;
  status: ExecutionStatus;
}

export type ExecutionStatus = 
  | { Unknown: Record<string, never> }
  | { Failure: ExecutionFailure }
  | { SuccessValue: string }
  | { SuccessReceiptId: string };

export interface ExecutionFailure {
  error_message: string;
  error_type: string;
}

export interface ExecutionOutcomeWithId {
  id: string;
  outcome: ExecutionOutcome;
  blockHash: string;
  proof: MerkleProof[];
}
