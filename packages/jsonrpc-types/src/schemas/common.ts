/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';

export const BandwidthRequestSchema = z.object({
  requestedvaluesbitmap: z.unknown().optional(),
  toshard: z.number().optional()
});

export const BandwidthRequestBitmapSchema = z.object({
  data: z.array(z.number())
});

export const BandwidthRequestsSchema = z.union([z.object({
  v1: z.unknown().optional()
}), z.unknown()]);

export const BandwidthRequestsV1Schema = z.object({
  requests: z.array(z.unknown())
});

export const CallResultSchema = z.object({
  logs: z.array(z.string()),
  result: z.array(z.number())
});

export const CompilationErrorSchema = z.union([z.object({
  codeDoesNotExist: z.object({
  accountid: z.unknown().optional()
}).optional()
}), z.object({
  prepareError: z.unknown().optional()
}), z.object({
  wasmerCompileError: z.object({
  msg: z.string()
}).optional()
})]);

export const CongestionControlConfigViewSchema = z.object({
  allowedshardoutgoinggas: z.number().optional(),
  maxcongestionincominggas: z.number().optional(),
  maxcongestionmemoryconsumption: z.number().optional(),
  maxcongestionmissedchunks: z.number().optional(),
  maxcongestionoutgoinggas: z.number().optional(),
  maxoutgoinggas: z.number().optional(),
  maxtxgas: z.number().optional(),
  minoutgoinggas: z.number().optional(),
  mintxgas: z.number().optional(),
  outgoingreceiptsbigsizelimit: z.number().optional(),
  outgoingreceiptsusualsizelimit: z.number().optional(),
  rejecttxcongestionthreshold: z.number().optional()
});

export const CongestionInfoViewSchema = z.object({
  allowedshard: z.number().optional(),
  bufferedreceiptsgas: z.string().optional(),
  delayedreceiptsgas: z.string().optional(),
  receiptbytes: z.number().optional()
});

export const CostGasUsedSchema = z.object({
  cost: z.string(),
  costcategory: z.string().optional(),
  gasused: z.string().optional()
});

export const CryptoHashSchema = z.string();

export const DataReceiverViewSchema = z.object({
  dataid: z.unknown().optional(),
  receiverid: z.unknown().optional()
});

export const DirectionSchema = z.enum(['Left', 'Right']);

export const DumpConfigSchema = z.object({
  credentialsfile: z.string().optional(),
  iterationdelay: z.unknown().optional(),
  location: z.unknown(),
  restartdumpforshards: z.array(z.unknown()).optional()
});

export const DurationAsStdSchemaProviderSchema = z.object({
  nanos: z.number(),
  secs: z.number()
});

export const EpochIdSchema = z.unknown();

export const EpochSyncConfigSchema = z.object({
  disableepochsyncforbootstrapping: z.boolean().optional(),
  epochsynchorizon: z.number().optional(),
  ignoreepochsyncnetworkrequests: z.boolean().optional(),
  timeoutforepochsync: z.unknown().optional()
});

export const ExecutionMetadataViewSchema = z.object({
  gasprofile: z.array(z.unknown()).optional(),
  version: z.number()
});

export const ExecutionOutcomeViewSchema = z.object({
  executorid: z.unknown().optional(),
  gasburnt: z.number().optional(),
  logs: z.array(z.string()),
  metadata: z.unknown().optional(),
  receiptids: z.array(z.unknown()).optional(),
  status: z.unknown(),
  tokensburnt: z.string().optional()
});

export const ExecutionOutcomeWithIdViewSchema = z.object({
  blockhash: z.unknown().optional(),
  id: z.unknown(),
  outcome: z.unknown(),
  proof: z.array(z.unknown())
});

export const ExtCostsConfigViewSchema = z.object({
  altbn128g1multiexpbase: z.number().optional(),
  altbn128g1multiexpelement: z.number().optional(),
  altbn128g1sumbase: z.number().optional(),
  altbn128g1sumelement: z.number().optional(),
  altbn128pairingcheckbase: z.number().optional(),
  altbn128pairingcheckelement: z.number().optional(),
  base: z.number(),
  bls12381g1multiexpbase: z.number().optional(),
  bls12381g1multiexpelement: z.number().optional(),
  bls12381g2multiexpbase: z.number().optional(),
  bls12381g2multiexpelement: z.number().optional(),
  bls12381mapfp2tog2base: z.number().optional(),
  bls12381mapfp2tog2element: z.number().optional(),
  bls12381mapfptog1base: z.number().optional(),
  bls12381mapfptog1element: z.number().optional(),
  bls12381p1decompressbase: z.number().optional(),
  bls12381p1decompresselement: z.number().optional(),
  bls12381p1sumbase: z.number().optional(),
  bls12381p1sumelement: z.number().optional(),
  bls12381p2decompressbase: z.number().optional(),
  bls12381p2decompresselement: z.number().optional(),
  bls12381p2sumbase: z.number().optional(),
  bls12381p2sumelement: z.number().optional(),
  bls12381pairingbase: z.number().optional(),
  bls12381pairingelement: z.number().optional(),
  contractcompilebase: z.number().optional(),
  contractcompilebytes: z.number().optional(),
  contractloadingbase: z.number().optional(),
  contractloadingbytes: z.number().optional(),
  ecrecoverbase: z.number().optional(),
  ed25519verifybase: z.number().optional(),
  ed25519verifybyte: z.number().optional(),
  keccak256base: z.number().optional(),
  keccak256byte: z.number().optional(),
  keccak512base: z.number().optional(),
  keccak512byte: z.number().optional(),
  logbase: z.number().optional(),
  logbyte: z.number().optional(),
  promiseandbase: z.number().optional(),
  promiseandperpromise: z.number().optional(),
  promisereturn: z.number().optional(),
  readcachedtrienode: z.number().optional(),
  readmemorybase: z.number().optional(),
  readmemorybyte: z.number().optional(),
  readregisterbase: z.number().optional(),
  readregisterbyte: z.number().optional(),
  ripemd160base: z.number().optional(),
  ripemd160block: z.number().optional(),
  sha256base: z.number().optional(),
  sha256byte: z.number().optional(),
  storagehaskeybase: z.number().optional(),
  storagehaskeybyte: z.number().optional(),
  storageitercreatefrombyte: z.number().optional(),
  storageitercreateprefixbase: z.number().optional(),
  storageitercreateprefixbyte: z.number().optional(),
  storageitercreaterangebase: z.number().optional(),
  storageitercreatetobyte: z.number().optional(),
  storageiternextbase: z.number().optional(),
  storageiternextkeybyte: z.number().optional(),
  storageiternextvaluebyte: z.number().optional(),
  storagelargereadoverheadbase: z.number().optional(),
  storagelargereadoverheadbyte: z.number().optional(),
  storagereadbase: z.number().optional(),
  storagereadkeybyte: z.number().optional(),
  storagereadvaluebyte: z.number().optional(),
  storageremovebase: z.number().optional(),
  storageremovekeybyte: z.number().optional(),
  storageremoveretvaluebyte: z.number().optional(),
  storagewritebase: z.number().optional(),
  storagewriteevictedbyte: z.number().optional(),
  storagewritekeybyte: z.number().optional(),
  storagewritevaluebyte: z.number().optional(),
  touchingtrienode: z.number().optional(),
  utf16decodingbase: z.number().optional(),
  utf16decodingbyte: z.number().optional(),
  utf8decodingbase: z.number().optional(),
  utf8decodingbyte: z.number().optional(),
  validatorstakebase: z.number().optional(),
  validatortotalstakebase: z.number().optional(),
  writememorybase: z.number().optional(),
  writememorybyte: z.number().optional(),
  writeregisterbase: z.number().optional(),
  writeregisterbyte: z.number().optional(),
  yieldcreatebase: z.number().optional(),
  yieldcreatebyte: z.number().optional(),
  yieldresumebase: z.number().optional(),
  yieldresumebyte: z.number().optional()
});

export const ExternalStorageConfigSchema = z.object({
  externalstoragefallbackthreshold: z.number().optional(),
  location: z.unknown(),
  numconcurrentrequests: z.number().optional(),
  numconcurrentrequestsduringcatchup: z.number().optional()
});

export const ExternalStorageLocationSchema = z.union([z.object({
  s3: z.object({
  bucket: z.string(),
  region: z.string()
}).optional()
}), z.object({
  filesystem: z.object({
  rootdir: z.string().optional()
}).optional()
}), z.object({
  gCS: z.object({
  bucket: z.string()
}).optional()
})]);

export const FeeSchema = z.object({
  execution: z.number(),
  sendnotsir: z.number().optional(),
  sendsir: z.number().optional()
});

export const FinalExecutionOutcomeViewSchema = z.object({
  receiptsoutcome: z.array(z.unknown()).optional(),
  status: z.unknown(),
  transaction: z.unknown(),
  transactionoutcome: z.unknown().optional()
});

export const FinalitySchema = z.enum(['optimistic', 'near-final', 'final']);

export const FunctionCallErrorSchema = z.union([z.enum(['WasmUnknownError', '_EVMError']), z.object({
  compilationError: z.unknown().optional()
}), z.object({
  linkError: z.object({
  msg: z.string()
}).optional()
}), z.object({
  methodResolveError: z.unknown().optional()
}), z.object({
  wasmTrap: z.unknown().optional()
}), z.object({
  hostError: z.unknown().optional()
}), z.object({
  executionError: z.string().optional()
})]);

export const FunctionCallPermissionSchema = z.object({
  allowance: z.string().optional(),
  methodnames: z.array(z.string()).optional(),
  receiverid: z.string().optional()
});

export const GCConfigSchema = z.object({
  gcblockslimit: z.number().optional(),
  gcforkcleanstep: z.number().optional(),
  gcnumepochstokeep: z.number().optional(),
  gcstepperiod: z.unknown().optional()
});

export const HostErrorSchema = z.union([z.enum(['BadUTF16']), z.enum(['BadUTF8']), z.enum(['GasExceeded']), z.enum(['GasLimitExceeded']), z.enum(['BalanceExceeded']), z.enum(['EmptyMethodName']), z.object({
  guestPanic: z.object({
  panicmsg: z.string().optional()
}).optional()
}), z.enum(['IntegerOverflow']), z.object({
  invalidPromiseIndex: z.object({
  promiseidx: z.number().optional()
}).optional()
}), z.enum(['CannotAppendActionToJointPromise']), z.enum(['CannotReturnJointPromise']), z.object({
  invalidPromiseResultIndex: z.object({
  resultidx: z.number().optional()
}).optional()
}), z.object({
  invalidRegisterId: z.object({
  registerid: z.number().optional()
}).optional()
}), z.object({
  iteratorWasInvalidated: z.object({
  iteratorindex: z.number().optional()
}).optional()
}), z.enum(['MemoryAccessViolation']), z.object({
  invalidReceiptIndex: z.object({
  receiptindex: z.number().optional()
}).optional()
}), z.object({
  invalidIteratorIndex: z.object({
  iteratorindex: z.number().optional()
}).optional()
}), z.enum(['InvalidAccountId']), z.enum(['InvalidMethodName']), z.enum(['InvalidPublicKey']), z.object({
  prohibitedInView: z.object({
  methodname: z.string().optional()
}).optional()
}), z.object({
  numberOfLogsExceeded: z.object({
  limit: z.number()
}).optional()
}), z.object({
  keyLengthExceeded: z.object({
  length: z.number(),
  limit: z.number()
}).optional()
}), z.object({
  valueLengthExceeded: z.object({
  length: z.number(),
  limit: z.number()
}).optional()
}), z.object({
  totalLogLengthExceeded: z.object({
  length: z.number(),
  limit: z.number()
}).optional()
}), z.object({
  numberPromisesExceeded: z.object({
  limit: z.number(),
  numberofpromises: z.number().optional()
}).optional()
}), z.object({
  numberInputDataDependenciesExceeded: z.object({
  limit: z.number(),
  numberofinputdatadependencies: z.number().optional()
}).optional()
}), z.object({
  returnedValueLengthExceeded: z.object({
  length: z.number(),
  limit: z.number()
}).optional()
}), z.object({
  contractSizeExceeded: z.object({
  limit: z.number(),
  size: z.number()
}).optional()
}), z.object({
  deprecated: z.object({
  methodname: z.string().optional()
}).optional()
}), z.object({
  eCRecoverError: z.object({
  msg: z.string()
}).optional()
}), z.object({
  altBn128InvalidInput: z.object({
  msg: z.string()
}).optional()
}), z.object({
  ed25519VerifyInvalidInput: z.object({
  msg: z.string()
}).optional()
})]);

export const JsonRpcRequestforEXPERIMENTALchangesSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_changes']),
  params: z.unknown()
});

export const JsonRpcRequestforEXPERIMENTALcongestionlevelSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_congestion_level']),
  params: z.unknown()
});

export const JsonRpcRequestforEXPERIMENTALlightclientproofSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_light_client_proof']),
  params: z.unknown()
});

export const JsonRpcRequestforEXPERIMENTALmaintenancewindowsSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_maintenance_windows']),
  params: z.unknown()
});

export const JsonRpcRequestforEXPERIMENTALsplitstorageinfoSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_split_storage_info']),
  params: z.unknown()
});

export const JsonRpcRequestforchangesSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['changes']),
  params: z.unknown()
});

export const JsonRpcRequestforclientconfigSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['client_config']),
  params: z.unknown()
});

export const JsonRpcRequestforgaspriceSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['gas_price']),
  params: z.unknown()
});

export const JsonRpcRequestforhealthSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['health']),
  params: z.unknown()
});

export const JsonRpcRequestforlightclientproofSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['light_client_proof']),
  params: z.unknown()
});

export const JsonRpcRequestforquerySchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['query']),
  params: z.unknown()
});

export const JsonRpcResponseforArrayofRangeofuint64andRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforCryptoHashandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforNullableRpcHealthResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcClientConfigResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcCongestionLevelResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcGasPriceResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcLightClientExecutionProofResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcQueryResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcSplitStorageInfoResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const KnownProducerViewSchema = z.object({
  accountid: z.unknown().optional(),
  nexthops: z.array(z.unknown()).optional(),
  peerid: z.unknown().optional()
});

export const LimitConfigSchema = z.object({
  accountidvalidityrulesversion: z.unknown().optional(),
  initialmemorypages: z.number().optional(),
  maxactionsperreceipt: z.number().optional(),
  maxargumentslength: z.number().optional(),
  maxcontractsize: z.number().optional(),
  maxfunctionsnumberpercontract: z.number().optional(),
  maxgasburnt: z.number().optional(),
  maxlengthmethodname: z.number().optional(),
  maxlengthreturneddata: z.number().optional(),
  maxlengthstoragekey: z.number().optional(),
  maxlengthstoragevalue: z.number().optional(),
  maxlocalspercontract: z.number().optional(),
  maxmemorypages: z.number().optional(),
  maxnumberbytesmethodnames: z.number().optional(),
  maxnumberinputdatadependencies: z.number().optional(),
  maxnumberlogs: z.number().optional(),
  maxnumberregisters: z.number().optional(),
  maxpromisesperfunctioncallaction: z.number().optional(),
  maxreceiptsize: z.number().optional(),
  maxregistersize: z.number().optional(),
  maxstackheight: z.number().optional(),
  maxtotalloglength: z.number().optional(),
  maxtotalprepaidgas: z.number().optional(),
  maxtransactionsize: z.number().optional(),
  maxyieldpayloadsize: z.number().optional(),
  perreceiptstorageproofsizelimit: z.number().optional(),
  registersmemorylimit: z.number().optional(),
  yieldtimeoutlengthinblocks: z.number().optional()
});

export const LogSummaryStyleSchema = z.enum(['plain', 'colored']);

export const MerklePathItemSchema = z.object({
  direction: z.unknown(),
  hash: z.unknown()
});

export const MethodResolveErrorSchema = z.enum(['MethodEmptyName', 'MethodNotFound', 'MethodInvalidSignature']);

export const MissingTrieValueSchema = z.object({
  context: z.unknown(),
  hash: z.unknown()
});

export const MissingTrieValueContextSchema = z.union([z.enum(['TrieIterator']), z.enum(['TriePrefetchingStorage']), z.enum(['TrieMemoryPartialStorage']), z.enum(['TrieStorage'])]);

export const MutableConfigValueSchema = z.string();

export const PeerIdSchema = z.unknown();

export const PeerInfoViewSchema = z.object({
  accountid: z.unknown().optional(),
  addr: z.string(),
  archival: z.boolean(),
  blockhash: z.unknown().optional(),
  connectionestablishedtimemillis: z.number().optional(),
  height: z.number().optional(),
  ishighestblockinvalid: z.boolean().optional(),
  isoutboundpeer: z.boolean().optional(),
  lasttimepeerrequestedmillis: z.number().optional(),
  lasttimereceivedmessagemillis: z.number().optional(),
  nonce: z.number(),
  peerid: z.unknown().optional(),
  receivedbytespersec: z.number().optional(),
  sentbytespersec: z.number().optional(),
  trackedshards: z.array(z.unknown()).optional()
});

export const PrepareErrorSchema = z.union([z.enum(['Serialization']), z.enum(['Deserialization']), z.enum(['InternalMemoryDeclared']), z.enum(['GasInstrumentation']), z.enum(['StackHeightInstrumentation']), z.enum(['Instantiate']), z.enum(['Memory']), z.enum(['TooManyFunctions']), z.enum(['TooManyLocals'])]);

export const Rangeofuint64Schema = z.object({
  end: z.number(),
  start: z.number()
});

export const RpcClientConfigRequestSchema = z.record(z.unknown());

export const RpcClientConfigResponseSchema = z.object({
  archive: z.boolean(),
  blockfetchhorizon: z.number().optional(),
  blockheaderfetchhorizon: z.number().optional(),
  blockproductiontrackingdelay: z.array(z.number()).optional(),
  catchupstepperiod: z.array(z.number()).optional(),
  chainid: z.string().optional(),
  chunkdistributionnetwork: z.unknown().optional(),
  chunkrequestretryperiod: z.array(z.number()).optional(),
  chunkwaitmult: z.array(z.number()).optional(),
  clientbackgroundmigrationthreads: z.number().optional(),
  doomslugstepperiod: z.array(z.number()).optional(),
  enablemultilinelogging: z.boolean().optional(),
  enablestatisticsexport: z.boolean().optional(),
  epochlength: z.number().optional(),
  epochsync: z.unknown().optional(),
  expectedshutdown: z.unknown().optional(),
  gc: z.unknown(),
  headersyncexpectedheightpersecond: z.number().optional(),
  headersyncinitialtimeout: z.array(z.number()).optional(),
  headersyncprogresstimeout: z.array(z.number()).optional(),
  headersyncstallbantimeout: z.array(z.number()).optional(),
  logsummaryperiod: z.array(z.number()).optional(),
  logsummarystyle: z.unknown().optional(),
  maxblockproductiondelay: z.array(z.number()).optional(),
  maxblockwaitdelay: z.array(z.number()).optional(),
  maxgasburntview: z.number().optional(),
  minblockproductiondelay: z.array(z.number()).optional(),
  minnumpeers: z.number().optional(),
  numblockproducerseats: z.number().optional(),
  orphanstatewitnessmaxsize: z.number().optional(),
  orphanstatewitnesspoolsize: z.number().optional(),
  producechunkaddtransactionstimelimit: z.string().optional(),
  produceemptyblocks: z.boolean().optional(),
  reshardingconfig: z.unknown().optional(),
  rpcaddr: z.string().optional(),
  saveinvalidwitnesses: z.boolean().optional(),
  savelatestwitnesses: z.boolean().optional(),
  savetriechanges: z.boolean().optional(),
  savetxoutcomes: z.boolean().optional(),
  skipsyncwait: z.boolean().optional(),
  statesync: z.unknown().optional(),
  statesyncenabled: z.boolean().optional(),
  statesyncexternalbackoff: z.array(z.number()).optional(),
  statesyncexternaltimeout: z.array(z.number()).optional(),
  statesyncp2ptimeout: z.array(z.number()).optional(),
  statesyncretrybackoff: z.array(z.number()).optional(),
  synccheckperiod: z.array(z.number()).optional(),
  syncheightthreshold: z.number().optional(),
  syncmaxblockrequests: z.number().optional(),
  syncstepperiod: z.array(z.number()).optional(),
  trackedshardsconfig: z.unknown().optional(),
  transactionpoolsizelimit: z.number().optional(),
  transactionrequesthandlerthreads: z.number().optional(),
  trieviewerstatesizelimit: z.number().optional(),
  ttlaccountidrouter: z.array(z.number()).optional(),
  txroutingheighthorizon: z.number().optional(),
  version: z.unknown(),
  viewclientthreads: z.number().optional(),
  viewclientthrottleperiod: z.array(z.number()).optional()
});

export const RpcCongestionLevelRequestSchema = z.record(z.unknown());

export const RpcCongestionLevelResponseSchema = z.object({
  congestionlevel: z.number().optional()
});

export const RpcErrorSchema = z.object({
  cause: z.unknown().optional(),
  code: z.number(),
  data: z.unknown().optional(),
  message: z.string(),
  name: z.unknown().optional()
});

export const RpcGasPriceRequestSchema = z.object({
  blockid: z.unknown().optional()
});

export const RpcGasPriceResponseSchema = z.object({
  gasprice: z.string().optional()
});

export const RpcHealthRequestSchema = z.record(z.unknown());

export const RpcHealthResponseSchema = z.record(z.unknown());

export const RpcKnownProducerSchema = z.object({
  accountid: z.unknown().optional(),
  addr: z.string().optional(),
  peerid: z.unknown().optional()
});

export const RpcLightClientExecutionProofRequestSchema = z.object({
  lightclienthead: z.unknown().optional()
});

export const RpcLightClientExecutionProofResponseSchema = z.object({
  blockheaderlite: z.unknown().optional(),
  blockproof: z.array(z.unknown()).optional(),
  outcomeproof: z.unknown().optional(),
  outcomerootproof: z.array(z.unknown()).optional()
});

export const RpcMaintenanceWindowsRequestSchema = z.object({
  accountid: z.unknown().optional()
});

export const RpcPeerInfoSchema = z.object({
  accountid: z.unknown().optional(),
  addr: z.string().optional(),
  id: z.unknown()
});

export const RpcQueryRequestSchema = z.record(z.unknown());

export const RpcQueryResponseSchema = z.object({
  blockhash: z.unknown().optional(),
  blockheight: z.number().optional()
});

export const RpcRequestValidationErrorKindSchema = z.union([z.object({
  info: z.object({
  methodname: z.string().optional()
}),
  name: z.enum(['METHOD_NOT_FOUND'])
}), z.object({
  info: z.object({
  errormessage: z.string().optional()
}),
  name: z.enum(['PARSE_ERROR'])
})]);

export const RpcSplitStorageInfoRequestSchema = z.record(z.unknown());

export const RpcSplitStorageInfoResponseSchema = z.object({
  coldheadheight: z.number().optional(),
  finalheadheight: z.number().optional(),
  headheight: z.number().optional(),
  hotdbkind: z.string().optional()
});

export const RuntimeConfigViewSchema = z.object({
  accountcreationconfig: z.unknown().optional(),
  congestioncontrolconfig: z.unknown().optional(),
  storageamountperbyte: z.string().optional(),
  transactioncosts: z.unknown().optional(),
  wasmconfig: z.unknown().optional(),
  witnessconfig: z.unknown().optional()
});

export const RuntimeFeesConfigViewSchema = z.object({
  actioncreationconfig: z.unknown().optional(),
  actionreceiptcreationconfig: z.unknown().optional(),
  burntgasreward: z.array(z.number()).optional(),
  datareceiptcreationconfig: z.unknown().optional(),
  pessimisticgaspriceinflationratio: z.array(z.number()).optional(),
  storageusageconfig: z.unknown().optional()
});

export const ShardIdSchema = z.number();

export const ShardLayoutSchema = z.union([z.object({
  v0: z.unknown().optional()
}), z.object({
  v1: z.unknown().optional()
}), z.object({
  v2: z.unknown().optional()
})]);

export const ShardLayoutV0Schema = z.object({
  numshards: z.number().optional(),
  version: z.number()
});

export const ShardLayoutV1Schema = z.object({
  boundaryaccounts: z.array(z.unknown()).optional(),
  shardssplitmap: z.array(z.array(z.unknown())).optional(),
  toparentshardmap: z.array(z.unknown()).optional(),
  version: z.number()
});

export const ShardLayoutV2Schema = z.object({
  boundaryaccounts: z.array(z.unknown()).optional(),
  idtoindexmap: z.record(z.unknown()).optional(),
  indextoidmap: z.record(z.unknown()).optional(),
  shardids: z.array(z.unknown()).optional(),
  shardsparentmap: z.record(z.unknown()).optional(),
  shardssplitmap: z.record(z.unknown()).optional(),
  version: z.number()
});

export const ShardUIdSchema = z.object({
  shardid: z.number().optional(),
  version: z.number()
});

export const SignatureSchema = z.string();

export const StorageErrorSchema = z.union([z.enum(['StorageInternalError']), z.object({
  missingTrieValue: z.unknown().optional()
}), z.enum(['UnexpectedTrieValue']), z.object({
  storageInconsistentState: z.string().optional()
}), z.object({
  flatStorageBlockNotSupported: z.string().optional()
}), z.object({
  memTrieLoadingError: z.string().optional()
})]);

export const StorageGetModeSchema = z.enum(['FlatStorage', 'Trie']);

export const StorageUsageConfigViewSchema = z.object({
  numbytesaccount: z.number().optional(),
  numextrabytesrecord: z.number().optional()
});

export const SyncCheckpointSchema = z.enum(['genesis', 'earliest_available']);

export const SyncConfigSchema = z.union([z.enum(['Peers']), z.object({
  externalStorage: z.unknown().optional()
})]);

export const Tier1ProxyViewSchema = z.object({
  addr: z.string(),
  peerid: z.unknown().optional()
});

export const TrackedShardsConfigSchema = z.union([z.enum(['NoShards']), z.object({
  shards: z.array(z.unknown()).optional()
}), z.enum(['AllShards']), z.object({
  shadowValidator: z.unknown().optional()
}), z.object({
  schedule: z.array(z.array(z.unknown())).optional()
}), z.object({
  accounts: z.array(z.unknown()).optional()
})]);

export const VMConfigViewSchema = z.object({
  discardcustomsections: z.boolean().optional(),
  ethimplicitaccounts: z.boolean().optional(),
  extcosts: z.unknown().optional(),
  fixcontractloadingcost: z.boolean().optional(),
  globalcontracthostfns: z.boolean().optional(),
  growmemcost: z.number().optional(),
  implicitaccountcreation: z.boolean().optional(),
  limitconfig: z.unknown().optional(),
  reftypesbulkmemory: z.boolean().optional(),
  regularopcost: z.number().optional(),
  saturatingfloattoint: z.boolean().optional(),
  storagegetmode: z.unknown().optional(),
  vmkind: z.unknown().optional()
});

export const VMKindSchema = z.union([z.enum(['Wasmer0']), z.enum(['Wasmtime']), z.enum(['Wasmer2']), z.enum(['NearVm']), z.enum(['NearVm2'])]);

export const VersionSchema = z.object({
  build: z.string(),
  commit: z.string(),
  rustcversion: z.string().optional(),
  version: z.string()
});

export const WasmTrapSchema = z.union([z.enum(['Unreachable']), z.enum(['IncorrectCallIndirectSignature']), z.enum(['MemoryOutOfBounds']), z.enum(['CallIndirectOOB']), z.enum(['IllegalArithmetic']), z.enum(['MisalignedAtomicAccess']), z.enum(['IndirectCallToNull']), z.enum(['StackOverflow']), z.enum(['GenericTrap'])]);

export const WitnessConfigViewSchema = z.object({
  combinedtransactionssizelimit: z.number().optional(),
  mainstorageproofsizesoftlimit: z.number().optional(),
  newtransactionsvalidationstatesizesoftlimit: z.number().optional()
});
