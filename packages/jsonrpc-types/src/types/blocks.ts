/**
 * Generated types for NEAR Protocol JSON-RPC
 */



export interface BlockHeaderInnerLiteView {
  blockmerkleroot?: unknown;
  epochid?: unknown;
  height: number;
  nextbphash?: unknown;
  nextepochid?: unknown;
  outcomeroot?: unknown;
  prevstateroot?: unknown;
  timestamp: number;
  timestampnanosec?: string;
}

export interface BlockHeaderView {
  approvals: unknown[];
  blockbodyhash?: unknown;
  blockmerkleroot?: unknown;
  blockordinal?: number;
  challengesresult?: unknown[];
  challengesroot?: unknown;
  chunkendorsements?: number[][];
  chunkheadersroot?: unknown;
  chunkmask?: boolean[];
  chunkreceiptsroot?: unknown;
  chunktxroot?: unknown;
  chunksincluded?: number;
  epochid?: unknown;
  epochsyncdatahash?: unknown;
  gasprice?: string;
  hash: unknown;
  height: number;
  lastdsfinalblock?: unknown;
  lastfinalblock?: unknown;
  latestprotocolversion?: number;
  nextbphash?: unknown;
  nextepochid?: unknown;
  outcomeroot?: unknown;
  prevhash?: unknown;
  prevheight?: number;
  prevstateroot?: unknown;
  randomvalue?: unknown;
  rentpaid?: string;
  signature: unknown;
  timestamp: number;
  timestampnanosec?: string;
  totalsupply?: string;
  validatorproposals?: unknown[];
  validatorreward?: string;
}

export type BlockId = unknown;

export interface BlockStatusView {
  hash: unknown;
  height: number;
}

export interface ChunkDistributionNetworkConfig {
  enabled: boolean;
  uris: unknown;
}

export interface ChunkDistributionUris {
  get: string;
  set: string;
}

export interface ChunkHeaderView {
  balanceburnt?: string;
  bandwidthrequests?: unknown;
  chunkhash?: unknown;
  congestioninfo?: unknown;
  encodedlength?: number;
  encodedmerkleroot?: unknown;
  gaslimit?: number;
  gasused?: number;
  heightcreated?: number;
  heightincluded?: number;
  outcomeroot?: unknown;
  outgoingreceiptsroot?: unknown;
  prevblockhash?: unknown;
  prevstateroot?: unknown;
  rentpaid?: string;
  shardid?: unknown;
  signature: unknown;
  txroot?: unknown;
  validatorproposals?: unknown[];
  validatorreward?: string;
}

export interface JsonRpcRequestforEXPERIMENTALchangesinblock {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_changes_in_block';
  params: unknown;
}

export interface JsonRpcRequestforEXPERIMENTALlightclientblockproof {
  id: string;
  jsonrpc: string;
  method: 'EXPERIMENTAL_light_client_block_proof';
  params: unknown;
}

export interface JsonRpcRequestforblock {
  id: string;
  jsonrpc: string;
  method: 'block';
  params: unknown;
}

export interface JsonRpcRequestforchunk {
  id: string;
  jsonrpc: string;
  method: 'chunk';
  params: unknown;
}

export interface JsonRpcRequestfornextlightclientblock {
  id: string;
  jsonrpc: string;
  method: 'next_light_client_block';
  params: unknown;
}

export interface JsonRpcResponseforRpcBlockResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforRpcChunkResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforRpcLightClientBlockProofResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforRpcLightClientNextBlockResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforRpcStateChangesInBlockByTypeResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface JsonRpcResponseforRpcStateChangesInBlockResponseandRpcError {
  id: string;
  jsonrpc: string;
}

export interface LightClientBlockLiteView {
  innerlite?: unknown;
  innerresthash?: unknown;
  prevblockhash?: unknown;
}

export interface RpcBlockRequest {

}

export interface RpcBlockResponse {
  author: unknown;
  chunks: unknown[];
  header: unknown;
}

export interface RpcChunkRequest {

}

export interface RpcChunkResponse {
  author: unknown;
  header: unknown;
  receipts: unknown[];
  transactions: unknown[];
}

export interface RpcLightClientBlockProofRequest {
  blockhash?: unknown;
  lightclienthead?: unknown;
}

export interface RpcLightClientBlockProofResponse {
  blockheaderlite?: unknown;
  blockproof?: unknown[];
}

export interface RpcLightClientNextBlockRequest {
  lastblockhash?: unknown;
}

export interface RpcLightClientNextBlockResponse {
  approvalsafternext?: unknown[];
  innerlite?: unknown;
  innerresthash?: unknown;
  nextblockinnerhash?: unknown;
  nextbps?: unknown[];
  prevblockhash?: unknown;
}

export interface RpcStateChangesInBlockByTypeRequest {

}

export interface RpcStateChangesInBlockByTypeResponse {
  blockhash?: unknown;
  changes: unknown[];
}

export interface RpcStateChangesInBlockRequest {

}

export interface RpcStateChangesInBlockResponse {
  blockhash?: unknown;
  changes: unknown[];
}
