/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';

export const CatchupStatusViewSchema = z.object({
  blockstocatchup: z.array(z.unknown()).optional(),
  shardsyncstatus: z.record(z.unknown()).optional(),
  syncblockhash: z.unknown().optional(),
  syncblockheight: z.number().optional()
});

export const CurrentEpochValidatorInfoSchema = z.object({
  accountid: z.unknown().optional(),
  isslashed: z.boolean().optional(),
  numexpectedblocks: z.number().optional(),
  numexpectedchunks: z.number().optional(),
  numexpectedchunkspershard: z.array(z.number()).optional(),
  numexpectedendorsements: z.number().optional(),
  numexpectedendorsementspershard: z.array(z.number()).optional(),
  numproducedblocks: z.number().optional(),
  numproducedchunks: z.number().optional(),
  numproducedchunkspershard: z.array(z.number()).optional(),
  numproducedendorsements: z.number().optional(),
  numproducedendorsementspershard: z.array(z.number()).optional(),
  publickey: z.unknown().optional(),
  shards: z.array(z.unknown()),
  shardsendorsed: z.array(z.unknown()).optional(),
  stake: z.string()
});

export const DetailedDebugStatusSchema = z.object({
  blockproductiondelaymillis: z.number().optional(),
  catchupstatus: z.array(z.unknown()).optional(),
  currentheadstatus: z.unknown().optional(),
  currentheaderheadstatus: z.unknown().optional(),
  networkinfo: z.unknown().optional(),
  syncstatus: z.string().optional()
});

export const ExecutionStatusViewSchema = z.union([z.enum(['Unknown']), z.object({
  failure: z.unknown().optional()
}), z.object({
  successValue: z.string().optional()
}), z.object({
  successReceiptId: z.unknown().optional()
})]);

export const FinalExecutionStatusSchema = z.union([z.enum(['NotStarted']), z.enum(['Started']), z.object({
  failure: z.unknown().optional()
}), z.object({
  successValue: z.string().optional()
})]);

export const GenesisConfigSchema = z.object({
  avghiddenvalidatorseatspershard: z.array(z.number()).optional(),
  blockproducerkickoutthreshold: z.number().optional(),
  chainid: z.string().optional(),
  chunkproducerassignmentchangeslimit: z.number().optional(),
  chunkproducerkickoutthreshold: z.number().optional(),
  chunkvalidatoronlykickoutthreshold: z.number().optional(),
  dynamicresharding: z.boolean().optional(),
  epochlength: z.number().optional(),
  fishermenthreshold: z.string().optional(),
  gaslimit: z.number().optional(),
  gaspriceadjustmentrate: z.array(z.number()).optional(),
  genesisheight: z.number().optional(),
  genesistime: z.string().optional(),
  maxgasprice: z.string().optional(),
  maxinflationrate: z.array(z.number()).optional(),
  maxkickoutstakeperc: z.number().optional(),
  mingasprice: z.string().optional(),
  minimumstakedivisor: z.number().optional(),
  minimumstakeratio: z.array(z.number()).optional(),
  minimumvalidatorspershard: z.number().optional(),
  numblockproducerseats: z.number().optional(),
  numblockproducerseatspershard: z.array(z.number()).optional(),
  numblocksperyear: z.number().optional(),
  numchunkonlyproducerseats: z.number().optional(),
  numchunkproducerseats: z.number().optional(),
  numchunkvalidatorseats: z.number().optional(),
  onlinemaxthreshold: z.array(z.number()).optional(),
  onlineminthreshold: z.array(z.number()).optional(),
  protocolrewardrate: z.array(z.number()).optional(),
  protocoltreasuryaccount: z.unknown().optional(),
  protocolupgradestakethreshold: z.array(z.number()).optional(),
  protocolversion: z.number().optional(),
  shardlayout: z.unknown().optional(),
  shuffleshardassignmentforchunkproducers: z.boolean().optional(),
  targetvalidatormandatespershard: z.number().optional(),
  totalsupply: z.string().optional(),
  transactionvalidityperiod: z.number().optional(),
  useproductionconfig: z.boolean().optional(),
  validators: z.array(z.unknown())
});

export const GenesisConfigRequestSchema = z.record(z.unknown());

export const JsonRpcRequestforEXPERIMENTALgenesisconfigSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_genesis_config']),
  params: z.unknown()
});

export const JsonRpcRequestforEXPERIMENTALprotocolconfigSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_protocol_config']),
  params: z.unknown()
});

export const JsonRpcRequestforEXPERIMENTALvalidatorsorderedSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_validators_ordered']),
  params: z.unknown()
});

export const JsonRpcRequestfornetworkinfoSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['network_info']),
  params: z.unknown()
});

export const JsonRpcRequestforstatusSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['status']),
  params: z.unknown()
});

export const JsonRpcRequestforvalidatorsSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['validators']),
  params: z.unknown()
});

export const JsonRpcResponseforArrayofValidatorStakeViewandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforGenesisConfigandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcNetworkInfoResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcProtocolConfigResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcStatusResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcValidatorResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const NetworkInfoViewSchema = z.object({
  connectedpeers: z.array(z.unknown()).optional(),
  knownproducers: z.array(z.unknown()).optional(),
  numconnectedpeers: z.number().optional(),
  peermaxcount: z.number().optional(),
  tier1accountsdata: z.array(z.unknown()).optional(),
  tier1accountskeys: z.array(z.unknown()).optional(),
  tier1connections: z.array(z.unknown()).optional()
});

export const NextEpochValidatorInfoSchema = z.object({
  accountid: z.unknown().optional(),
  publickey: z.unknown().optional(),
  shards: z.array(z.unknown()),
  stake: z.string()
});

export const RpcNetworkInfoRequestSchema = z.record(z.unknown());

export const RpcNetworkInfoResponseSchema = z.object({
  activepeers: z.array(z.unknown()).optional(),
  knownproducers: z.array(z.unknown()).optional(),
  numactivepeers: z.number().optional(),
  peermaxcount: z.number().optional(),
  receivedbytespersec: z.number().optional(),
  sentbytespersec: z.number().optional()
});

export const RpcProtocolConfigRequestSchema = z.record(z.unknown());

export const RpcProtocolConfigResponseSchema = z.object({
  avghiddenvalidatorseatspershard: z.array(z.number()).optional(),
  blockproducerkickoutthreshold: z.number().optional(),
  chainid: z.string().optional(),
  chunkproducerkickoutthreshold: z.number().optional(),
  chunkvalidatoronlykickoutthreshold: z.number().optional(),
  dynamicresharding: z.boolean().optional(),
  epochlength: z.number().optional(),
  fishermenthreshold: z.string().optional(),
  gaslimit: z.number().optional(),
  gaspriceadjustmentrate: z.array(z.number()).optional(),
  genesisheight: z.number().optional(),
  genesistime: z.string().optional(),
  maxgasprice: z.string().optional(),
  maxinflationrate: z.array(z.number()).optional(),
  maxkickoutstakeperc: z.number().optional(),
  mingasprice: z.string().optional(),
  minimumstakedivisor: z.number().optional(),
  minimumstakeratio: z.array(z.number()).optional(),
  minimumvalidatorspershard: z.number().optional(),
  numblockproducerseats: z.number().optional(),
  numblockproducerseatspershard: z.array(z.number()).optional(),
  numblocksperyear: z.number().optional(),
  onlinemaxthreshold: z.array(z.number()).optional(),
  onlineminthreshold: z.array(z.number()).optional(),
  protocolrewardrate: z.array(z.number()).optional(),
  protocoltreasuryaccount: z.unknown().optional(),
  protocolupgradestakethreshold: z.array(z.number()).optional(),
  protocolversion: z.number().optional(),
  runtimeconfig: z.unknown().optional(),
  shardlayout: z.unknown().optional(),
  shuffleshardassignmentforchunkproducers: z.boolean().optional(),
  targetvalidatormandatespershard: z.number().optional(),
  transactionvalidityperiod: z.number().optional()
});

export const RpcStatusRequestSchema = z.record(z.unknown());

export const RpcStatusResponseSchema = z.object({
  chainid: z.string().optional(),
  detaileddebugstatus: z.unknown().optional(),
  genesishash: z.unknown().optional(),
  latestprotocolversion: z.number().optional(),
  nodekey: z.unknown().optional(),
  nodepublickey: z.unknown().optional(),
  protocolversion: z.number().optional(),
  rpcaddr: z.string().optional(),
  syncinfo: z.unknown().optional(),
  uptimesec: z.number().optional(),
  validatoraccountid: z.unknown().optional(),
  validatorpublickey: z.unknown().optional(),
  validators: z.array(z.unknown()),
  version: z.unknown()
});

export const RpcValidatorRequestSchema = z.record(z.unknown());

export const RpcValidatorResponseSchema = z.object({
  currentfishermen: z.array(z.unknown()).optional(),
  currentproposals: z.array(z.unknown()).optional(),
  currentvalidators: z.array(z.unknown()).optional(),
  epochheight: z.number().optional(),
  epochstartheight: z.number().optional(),
  nextfishermen: z.array(z.unknown()).optional(),
  nextvalidators: z.array(z.unknown()).optional(),
  prevepochkickout: z.array(z.unknown()).optional()
});

export const RpcValidatorsOrderedRequestSchema = z.object({
  blockid: z.unknown().optional()
});

export const SlashedValidatorSchema = z.object({
  accountid: z.unknown().optional(),
  isdoublesign: z.boolean().optional()
});

export const StatusSyncInfoSchema = z.object({
  earliestblockhash: z.unknown().optional(),
  earliestblockheight: z.number().optional(),
  earliestblocktime: z.string().optional(),
  epochid: z.unknown().optional(),
  epochstartheight: z.number().optional(),
  latestblockhash: z.unknown().optional(),
  latestblockheight: z.number().optional(),
  latestblocktime: z.string().optional(),
  lateststateroot: z.unknown().optional(),
  syncing: z.boolean()
});

export const ValidatorInfoSchema = z.object({
  accountid: z.unknown().optional()
});

export const ValidatorKickoutReasonSchema = z.union([z.enum(['_UnusedSlashed']), z.object({
  notEnoughBlocks: z.object({
  expected: z.number(),
  produced: z.number()
}).optional()
}), z.object({
  notEnoughChunks: z.object({
  expected: z.number(),
  produced: z.number()
}).optional()
}), z.enum(['Unstaked']), z.object({
  notEnoughStake: z.object({
  stakeu128: z.string().optional(),
  thresholdu128: z.string().optional()
}).optional()
}), z.enum(['DidNotGetASeat']), z.object({
  notEnoughChunkEndorsements: z.object({
  expected: z.number(),
  produced: z.number()
}).optional()
}), z.object({
  protocolVersionTooOld: z.object({
  networkversion: z.number().optional(),
  version: z.number()
}).optional()
})]);

export const ValidatorKickoutViewSchema = z.object({
  accountid: z.unknown().optional(),
  reason: z.unknown()
});

export const ValidatorStakeViewSchema = z.union([z.object({
  validatorstakestructversion: z.enum(['V1']).optional()
}), z.unknown()]);

export const ValidatorStakeViewV1Schema = z.object({
  accountid: z.unknown().optional(),
  publickey: z.unknown().optional(),
  stake: z.string()
});
