"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnownProducerViewSchema = exports.JsonRpcResponseforRpcSplitStorageInfoResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcQueryResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcLightClientExecutionProofResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcGasPriceResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcCongestionLevelResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcClientConfigResponseandRpcErrorSchema = exports.JsonRpcResponseforNullableRpcHealthResponseandRpcErrorSchema = exports.JsonRpcResponseforCryptoHashandRpcErrorSchema = exports.JsonRpcResponseforArrayofRangeofuint64andRpcErrorSchema = exports.JsonRpcRequestforquerySchema = exports.JsonRpcRequestforlightclientproofSchema = exports.JsonRpcRequestforhealthSchema = exports.JsonRpcRequestforgaspriceSchema = exports.JsonRpcRequestforclientconfigSchema = exports.JsonRpcRequestforchangesSchema = exports.JsonRpcRequestforEXPERIMENTALsplitstorageinfoSchema = exports.JsonRpcRequestforEXPERIMENTALmaintenancewindowsSchema = exports.JsonRpcRequestforEXPERIMENTALlightclientproofSchema = exports.JsonRpcRequestforEXPERIMENTALcongestionlevelSchema = exports.JsonRpcRequestforEXPERIMENTALchangesSchema = exports.HostErrorSchema = exports.GCConfigSchema = exports.FunctionCallPermissionSchema = exports.FunctionCallErrorSchema = exports.FinalitySchema = exports.FinalExecutionOutcomeViewSchema = exports.FeeSchema = exports.ExternalStorageLocationSchema = exports.ExternalStorageConfigSchema = exports.ExtCostsConfigViewSchema = exports.ExecutionOutcomeWithIdViewSchema = exports.ExecutionOutcomeViewSchema = exports.ExecutionMetadataViewSchema = exports.EpochSyncConfigSchema = exports.EpochIdSchema = exports.DurationAsStdSchemaProviderSchema = exports.DumpConfigSchema = exports.DirectionSchema = exports.DataReceiverViewSchema = exports.CryptoHashSchema = exports.CostGasUsedSchema = exports.CongestionInfoViewSchema = exports.CongestionControlConfigViewSchema = exports.CompilationErrorSchema = exports.CallResultSchema = exports.BandwidthRequestsV1Schema = exports.BandwidthRequestsSchema = exports.BandwidthRequestBitmapSchema = exports.BandwidthRequestSchema = void 0;
exports.WasmTrapSchema = exports.VersionSchema = exports.VMKindSchema = exports.VMConfigViewSchema = exports.TrackedShardsConfigSchema = exports.Tier1ProxyViewSchema = exports.SyncConfigSchema = exports.SyncCheckpointSchema = exports.StorageUsageConfigViewSchema = exports.StorageGetModeSchema = exports.StorageErrorSchema = exports.SignatureSchema = exports.ShardUIdSchema = exports.ShardLayoutV2Schema = exports.ShardLayoutV1Schema = exports.ShardLayoutV0Schema = exports.ShardLayoutSchema = exports.ShardIdSchema = exports.RuntimeFeesConfigViewSchema = exports.RuntimeConfigViewSchema = exports.RpcSplitStorageInfoResponseSchema = exports.RpcSplitStorageInfoRequestSchema = exports.RpcRequestValidationErrorKindSchema = exports.RpcQueryResponseSchema = exports.RpcQueryRequestSchema = exports.RpcPeerInfoSchema = exports.RpcMaintenanceWindowsRequestSchema = exports.RpcLightClientExecutionProofResponseSchema = exports.RpcLightClientExecutionProofRequestSchema = exports.RpcKnownProducerSchema = exports.RpcHealthResponseSchema = exports.RpcHealthRequestSchema = exports.RpcGasPriceResponseSchema = exports.RpcGasPriceRequestSchema = exports.RpcErrorSchema = exports.RpcCongestionLevelResponseSchema = exports.RpcCongestionLevelRequestSchema = exports.RpcClientConfigResponseSchema = exports.RpcClientConfigRequestSchema = exports.Rangeofuint64Schema = exports.PrepareErrorSchema = exports.PeerInfoViewSchema = exports.PeerIdSchema = exports.MutableConfigValueSchema = exports.MissingTrieValueContextSchema = exports.MissingTrieValueSchema = exports.MethodResolveErrorSchema = exports.MerklePathItemSchema = exports.LogSummaryStyleSchema = exports.LimitConfigSchema = void 0;
exports.WitnessConfigViewSchema = void 0;
const zod_1 = require("zod");
exports.BandwidthRequestSchema = zod_1.z.object({
    requestedvaluesbitmap: zod_1.z.unknown().optional(),
    toshard: zod_1.z.number().optional()
});
exports.BandwidthRequestBitmapSchema = zod_1.z.object({
    data: zod_1.z.array(zod_1.z.number())
});
exports.BandwidthRequestsSchema = zod_1.z.object({
    v1: zod_1.z.unknown().optional()
});
exports.BandwidthRequestsV1Schema = zod_1.z.object({
    requests: zod_1.z.array(zod_1.z.unknown())
});
exports.CallResultSchema = zod_1.z.object({
    logs: zod_1.z.array(zod_1.z.string()),
    result: zod_1.z.array(zod_1.z.number())
});
exports.CompilationErrorSchema = zod_1.z.union([zod_1.z.object({
        codeDoesNotExist: zod_1.z.object({
            accountid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        prepareError: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        wasmerCompileError: zod_1.z.object({
            msg: zod_1.z.string()
        }).optional()
    })]);
exports.CongestionControlConfigViewSchema = zod_1.z.object({
    allowedshardoutgoinggas: zod_1.z.number().optional(),
    maxcongestionincominggas: zod_1.z.number().optional(),
    maxcongestionmemoryconsumption: zod_1.z.number().optional(),
    maxcongestionmissedchunks: zod_1.z.number().optional(),
    maxcongestionoutgoinggas: zod_1.z.number().optional(),
    maxoutgoinggas: zod_1.z.number().optional(),
    maxtxgas: zod_1.z.number().optional(),
    minoutgoinggas: zod_1.z.number().optional(),
    mintxgas: zod_1.z.number().optional(),
    outgoingreceiptsbigsizelimit: zod_1.z.number().optional(),
    outgoingreceiptsusualsizelimit: zod_1.z.number().optional(),
    rejecttxcongestionthreshold: zod_1.z.number().optional()
});
exports.CongestionInfoViewSchema = zod_1.z.object({
    allowedshard: zod_1.z.number().optional(),
    bufferedreceiptsgas: zod_1.z.string().optional(),
    delayedreceiptsgas: zod_1.z.string().optional(),
    receiptbytes: zod_1.z.number().optional()
});
exports.CostGasUsedSchema = zod_1.z.object({
    cost: zod_1.z.string(),
    costcategory: zod_1.z.string().optional(),
    gasused: zod_1.z.string().optional()
});
exports.CryptoHashSchema = zod_1.z.string();
exports.DataReceiverViewSchema = zod_1.z.object({
    dataid: zod_1.z.unknown().optional(),
    receiverid: zod_1.z.unknown().optional()
});
exports.DirectionSchema = zod_1.z.enum(['Left', 'Right']);
exports.DumpConfigSchema = zod_1.z.object({
    credentialsfile: zod_1.z.string().optional(),
    iterationdelay: zod_1.z.unknown().optional(),
    location: zod_1.z.unknown(),
    restartdumpforshards: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.DurationAsStdSchemaProviderSchema = zod_1.z.object({
    nanos: zod_1.z.number(),
    secs: zod_1.z.number()
});
exports.EpochIdSchema = zod_1.z.unknown();
exports.EpochSyncConfigSchema = zod_1.z.object({
    disableepochsyncforbootstrapping: zod_1.z.boolean().optional(),
    epochsynchorizon: zod_1.z.number().optional(),
    ignoreepochsyncnetworkrequests: zod_1.z.boolean().optional(),
    timeoutforepochsync: zod_1.z.unknown().optional()
});
exports.ExecutionMetadataViewSchema = zod_1.z.object({
    gasprofile: zod_1.z.array(zod_1.z.unknown()).optional(),
    version: zod_1.z.number()
});
exports.ExecutionOutcomeViewSchema = zod_1.z.object({
    executorid: zod_1.z.unknown().optional(),
    gasburnt: zod_1.z.number().optional(),
    logs: zod_1.z.array(zod_1.z.string()),
    metadata: zod_1.z.unknown().optional(),
    receiptids: zod_1.z.array(zod_1.z.unknown()).optional(),
    status: zod_1.z.unknown(),
    tokensburnt: zod_1.z.string().optional()
});
exports.ExecutionOutcomeWithIdViewSchema = zod_1.z.object({
    blockhash: zod_1.z.unknown().optional(),
    id: zod_1.z.unknown(),
    outcome: zod_1.z.unknown(),
    proof: zod_1.z.array(zod_1.z.unknown())
});
exports.ExtCostsConfigViewSchema = zod_1.z.object({
    altbn128g1multiexpbase: zod_1.z.number().optional(),
    altbn128g1multiexpelement: zod_1.z.number().optional(),
    altbn128g1sumbase: zod_1.z.number().optional(),
    altbn128g1sumelement: zod_1.z.number().optional(),
    altbn128pairingcheckbase: zod_1.z.number().optional(),
    altbn128pairingcheckelement: zod_1.z.number().optional(),
    base: zod_1.z.number(),
    bls12381g1multiexpbase: zod_1.z.number().optional(),
    bls12381g1multiexpelement: zod_1.z.number().optional(),
    bls12381g2multiexpbase: zod_1.z.number().optional(),
    bls12381g2multiexpelement: zod_1.z.number().optional(),
    bls12381mapfp2tog2base: zod_1.z.number().optional(),
    bls12381mapfp2tog2element: zod_1.z.number().optional(),
    bls12381mapfptog1base: zod_1.z.number().optional(),
    bls12381mapfptog1element: zod_1.z.number().optional(),
    bls12381p1decompressbase: zod_1.z.number().optional(),
    bls12381p1decompresselement: zod_1.z.number().optional(),
    bls12381p1sumbase: zod_1.z.number().optional(),
    bls12381p1sumelement: zod_1.z.number().optional(),
    bls12381p2decompressbase: zod_1.z.number().optional(),
    bls12381p2decompresselement: zod_1.z.number().optional(),
    bls12381p2sumbase: zod_1.z.number().optional(),
    bls12381p2sumelement: zod_1.z.number().optional(),
    bls12381pairingbase: zod_1.z.number().optional(),
    bls12381pairingelement: zod_1.z.number().optional(),
    contractcompilebase: zod_1.z.number().optional(),
    contractcompilebytes: zod_1.z.number().optional(),
    contractloadingbase: zod_1.z.number().optional(),
    contractloadingbytes: zod_1.z.number().optional(),
    ecrecoverbase: zod_1.z.number().optional(),
    ed25519verifybase: zod_1.z.number().optional(),
    ed25519verifybyte: zod_1.z.number().optional(),
    keccak256base: zod_1.z.number().optional(),
    keccak256byte: zod_1.z.number().optional(),
    keccak512base: zod_1.z.number().optional(),
    keccak512byte: zod_1.z.number().optional(),
    logbase: zod_1.z.number().optional(),
    logbyte: zod_1.z.number().optional(),
    promiseandbase: zod_1.z.number().optional(),
    promiseandperpromise: zod_1.z.number().optional(),
    promisereturn: zod_1.z.number().optional(),
    readcachedtrienode: zod_1.z.number().optional(),
    readmemorybase: zod_1.z.number().optional(),
    readmemorybyte: zod_1.z.number().optional(),
    readregisterbase: zod_1.z.number().optional(),
    readregisterbyte: zod_1.z.number().optional(),
    ripemd160base: zod_1.z.number().optional(),
    ripemd160block: zod_1.z.number().optional(),
    sha256base: zod_1.z.number().optional(),
    sha256byte: zod_1.z.number().optional(),
    storagehaskeybase: zod_1.z.number().optional(),
    storagehaskeybyte: zod_1.z.number().optional(),
    storageitercreatefrombyte: zod_1.z.number().optional(),
    storageitercreateprefixbase: zod_1.z.number().optional(),
    storageitercreateprefixbyte: zod_1.z.number().optional(),
    storageitercreaterangebase: zod_1.z.number().optional(),
    storageitercreatetobyte: zod_1.z.number().optional(),
    storageiternextbase: zod_1.z.number().optional(),
    storageiternextkeybyte: zod_1.z.number().optional(),
    storageiternextvaluebyte: zod_1.z.number().optional(),
    storagelargereadoverheadbase: zod_1.z.number().optional(),
    storagelargereadoverheadbyte: zod_1.z.number().optional(),
    storagereadbase: zod_1.z.number().optional(),
    storagereadkeybyte: zod_1.z.number().optional(),
    storagereadvaluebyte: zod_1.z.number().optional(),
    storageremovebase: zod_1.z.number().optional(),
    storageremovekeybyte: zod_1.z.number().optional(),
    storageremoveretvaluebyte: zod_1.z.number().optional(),
    storagewritebase: zod_1.z.number().optional(),
    storagewriteevictedbyte: zod_1.z.number().optional(),
    storagewritekeybyte: zod_1.z.number().optional(),
    storagewritevaluebyte: zod_1.z.number().optional(),
    touchingtrienode: zod_1.z.number().optional(),
    utf16decodingbase: zod_1.z.number().optional(),
    utf16decodingbyte: zod_1.z.number().optional(),
    utf8decodingbase: zod_1.z.number().optional(),
    utf8decodingbyte: zod_1.z.number().optional(),
    validatorstakebase: zod_1.z.number().optional(),
    validatortotalstakebase: zod_1.z.number().optional(),
    writememorybase: zod_1.z.number().optional(),
    writememorybyte: zod_1.z.number().optional(),
    writeregisterbase: zod_1.z.number().optional(),
    writeregisterbyte: zod_1.z.number().optional(),
    yieldcreatebase: zod_1.z.number().optional(),
    yieldcreatebyte: zod_1.z.number().optional(),
    yieldresumebase: zod_1.z.number().optional(),
    yieldresumebyte: zod_1.z.number().optional()
});
exports.ExternalStorageConfigSchema = zod_1.z.object({
    externalstoragefallbackthreshold: zod_1.z.number().optional(),
    location: zod_1.z.unknown(),
    numconcurrentrequests: zod_1.z.number().optional(),
    numconcurrentrequestsduringcatchup: zod_1.z.number().optional()
});
exports.ExternalStorageLocationSchema = zod_1.z.union([zod_1.z.object({
        s3: zod_1.z.object({
            bucket: zod_1.z.string(),
            region: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        filesystem: zod_1.z.object({
            rootdir: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.object({
        gCS: zod_1.z.object({
            bucket: zod_1.z.string()
        }).optional()
    })]);
exports.FeeSchema = zod_1.z.object({
    execution: zod_1.z.number(),
    sendnotsir: zod_1.z.number().optional(),
    sendsir: zod_1.z.number().optional()
});
exports.FinalExecutionOutcomeViewSchema = zod_1.z.object({
    receiptsoutcome: zod_1.z.array(zod_1.z.unknown()).optional(),
    status: zod_1.z.unknown(),
    transaction: zod_1.z.unknown(),
    transactionoutcome: zod_1.z.unknown().optional()
});
exports.FinalitySchema = zod_1.z.enum(['optimistic', 'near-final', 'final']);
exports.FunctionCallErrorSchema = zod_1.z.union([zod_1.z.enum(['WasmUnknownError', '_EVMError']), zod_1.z.object({
        compilationError: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        linkError: zod_1.z.object({
            msg: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        methodResolveError: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        wasmTrap: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        hostError: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        executionError: zod_1.z.string().optional()
    })]);
exports.FunctionCallPermissionSchema = zod_1.z.object({
    allowance: zod_1.z.string().optional(),
    methodnames: zod_1.z.array(zod_1.z.string()).optional(),
    receiverid: zod_1.z.string().optional()
});
exports.GCConfigSchema = zod_1.z.object({
    gcblockslimit: zod_1.z.number().optional(),
    gcforkcleanstep: zod_1.z.number().optional(),
    gcnumepochstokeep: zod_1.z.number().optional(),
    gcstepperiod: zod_1.z.unknown().optional()
});
exports.HostErrorSchema = zod_1.z.union([zod_1.z.enum(['BadUTF16']), zod_1.z.enum(['BadUTF8']), zod_1.z.enum(['GasExceeded']), zod_1.z.enum(['GasLimitExceeded']), zod_1.z.enum(['BalanceExceeded']), zod_1.z.enum(['EmptyMethodName']), zod_1.z.object({
        guestPanic: zod_1.z.object({
            panicmsg: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.enum(['IntegerOverflow']), zod_1.z.object({
        invalidPromiseIndex: zod_1.z.object({
            promiseidx: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.enum(['CannotAppendActionToJointPromise']), zod_1.z.enum(['CannotReturnJointPromise']), zod_1.z.object({
        invalidPromiseResultIndex: zod_1.z.object({
            resultidx: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        invalidRegisterId: zod_1.z.object({
            registerid: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        iteratorWasInvalidated: zod_1.z.object({
            iteratorindex: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.enum(['MemoryAccessViolation']), zod_1.z.object({
        invalidReceiptIndex: zod_1.z.object({
            receiptindex: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        invalidIteratorIndex: zod_1.z.object({
            iteratorindex: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.enum(['InvalidAccountId']), zod_1.z.enum(['InvalidMethodName']), zod_1.z.enum(['InvalidPublicKey']), zod_1.z.object({
        prohibitedInView: zod_1.z.object({
            methodname: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.object({
        numberOfLogsExceeded: zod_1.z.object({
            limit: zod_1.z.number()
        }).optional()
    }), zod_1.z.object({
        keyLengthExceeded: zod_1.z.object({
            length: zod_1.z.number(),
            limit: zod_1.z.number()
        }).optional()
    }), zod_1.z.object({
        valueLengthExceeded: zod_1.z.object({
            length: zod_1.z.number(),
            limit: zod_1.z.number()
        }).optional()
    }), zod_1.z.object({
        totalLogLengthExceeded: zod_1.z.object({
            length: zod_1.z.number(),
            limit: zod_1.z.number()
        }).optional()
    }), zod_1.z.object({
        numberPromisesExceeded: zod_1.z.object({
            limit: zod_1.z.number(),
            numberofpromises: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        numberInputDataDependenciesExceeded: zod_1.z.object({
            limit: zod_1.z.number(),
            numberofinputdatadependencies: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        returnedValueLengthExceeded: zod_1.z.object({
            length: zod_1.z.number(),
            limit: zod_1.z.number()
        }).optional()
    }), zod_1.z.object({
        contractSizeExceeded: zod_1.z.object({
            limit: zod_1.z.number(),
            size: zod_1.z.number()
        }).optional()
    }), zod_1.z.object({
        deprecated: zod_1.z.object({
            methodname: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.object({
        eCRecoverError: zod_1.z.object({
            msg: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        altBn128InvalidInput: zod_1.z.object({
            msg: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        ed25519VerifyInvalidInput: zod_1.z.object({
            msg: zod_1.z.string()
        }).optional()
    })]);
exports.JsonRpcRequestforEXPERIMENTALchangesSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_changes']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforEXPERIMENTALcongestionlevelSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_congestion_level']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforEXPERIMENTALlightclientproofSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_light_client_proof']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforEXPERIMENTALmaintenancewindowsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_maintenance_windows']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforEXPERIMENTALsplitstorageinfoSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_split_storage_info']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforchangesSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['changes']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforclientconfigSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['client_config']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforgaspriceSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['gas_price']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforhealthSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['health']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforlightclientproofSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['light_client_proof']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforquerySchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['query']),
    params: zod_1.z.unknown()
});
exports.JsonRpcResponseforArrayofRangeofuint64andRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforCryptoHashandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforNullableRpcHealthResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcClientConfigResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcCongestionLevelResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcGasPriceResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcLightClientExecutionProofResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcQueryResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcSplitStorageInfoResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.KnownProducerViewSchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional(),
    nexthops: zod_1.z.array(zod_1.z.unknown()).optional(),
    peerid: zod_1.z.unknown().optional()
});
exports.LimitConfigSchema = zod_1.z.object({
    accountidvalidityrulesversion: zod_1.z.unknown().optional(),
    initialmemorypages: zod_1.z.number().optional(),
    maxactionsperreceipt: zod_1.z.number().optional(),
    maxargumentslength: zod_1.z.number().optional(),
    maxcontractsize: zod_1.z.number().optional(),
    maxfunctionsnumberpercontract: zod_1.z.number().optional(),
    maxgasburnt: zod_1.z.number().optional(),
    maxlengthmethodname: zod_1.z.number().optional(),
    maxlengthreturneddata: zod_1.z.number().optional(),
    maxlengthstoragekey: zod_1.z.number().optional(),
    maxlengthstoragevalue: zod_1.z.number().optional(),
    maxlocalspercontract: zod_1.z.number().optional(),
    maxmemorypages: zod_1.z.number().optional(),
    maxnumberbytesmethodnames: zod_1.z.number().optional(),
    maxnumberinputdatadependencies: zod_1.z.number().optional(),
    maxnumberlogs: zod_1.z.number().optional(),
    maxnumberregisters: zod_1.z.number().optional(),
    maxpromisesperfunctioncallaction: zod_1.z.number().optional(),
    maxreceiptsize: zod_1.z.number().optional(),
    maxregistersize: zod_1.z.number().optional(),
    maxstackheight: zod_1.z.number().optional(),
    maxtotalloglength: zod_1.z.number().optional(),
    maxtotalprepaidgas: zod_1.z.number().optional(),
    maxtransactionsize: zod_1.z.number().optional(),
    maxyieldpayloadsize: zod_1.z.number().optional(),
    perreceiptstorageproofsizelimit: zod_1.z.number().optional(),
    registersmemorylimit: zod_1.z.number().optional(),
    yieldtimeoutlengthinblocks: zod_1.z.number().optional()
});
exports.LogSummaryStyleSchema = zod_1.z.enum(['plain', 'colored']);
exports.MerklePathItemSchema = zod_1.z.object({
    direction: zod_1.z.unknown(),
    hash: zod_1.z.unknown()
});
exports.MethodResolveErrorSchema = zod_1.z.enum(['MethodEmptyName', 'MethodNotFound', 'MethodInvalidSignature']);
exports.MissingTrieValueSchema = zod_1.z.object({
    context: zod_1.z.unknown(),
    hash: zod_1.z.unknown()
});
exports.MissingTrieValueContextSchema = zod_1.z.union([zod_1.z.enum(['TrieIterator']), zod_1.z.enum(['TriePrefetchingStorage']), zod_1.z.enum(['TrieMemoryPartialStorage']), zod_1.z.enum(['TrieStorage'])]);
exports.MutableConfigValueSchema = zod_1.z.string();
exports.PeerIdSchema = zod_1.z.unknown();
exports.PeerInfoViewSchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional(),
    addr: zod_1.z.string(),
    archival: zod_1.z.boolean(),
    blockhash: zod_1.z.unknown().optional(),
    connectionestablishedtimemillis: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    ishighestblockinvalid: zod_1.z.boolean().optional(),
    isoutboundpeer: zod_1.z.boolean().optional(),
    lasttimepeerrequestedmillis: zod_1.z.number().optional(),
    lasttimereceivedmessagemillis: zod_1.z.number().optional(),
    nonce: zod_1.z.number(),
    peerid: zod_1.z.unknown().optional(),
    receivedbytespersec: zod_1.z.number().optional(),
    sentbytespersec: zod_1.z.number().optional(),
    trackedshards: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.PrepareErrorSchema = zod_1.z.union([zod_1.z.enum(['Serialization']), zod_1.z.enum(['Deserialization']), zod_1.z.enum(['InternalMemoryDeclared']), zod_1.z.enum(['GasInstrumentation']), zod_1.z.enum(['StackHeightInstrumentation']), zod_1.z.enum(['Instantiate']), zod_1.z.enum(['Memory']), zod_1.z.enum(['TooManyFunctions']), zod_1.z.enum(['TooManyLocals'])]);
exports.Rangeofuint64Schema = zod_1.z.object({
    end: zod_1.z.number(),
    start: zod_1.z.number()
});
exports.RpcClientConfigRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcClientConfigResponseSchema = zod_1.z.object({
    archive: zod_1.z.boolean(),
    blockfetchhorizon: zod_1.z.number().optional(),
    blockheaderfetchhorizon: zod_1.z.number().optional(),
    blockproductiontrackingdelay: zod_1.z.array(zod_1.z.number()).optional(),
    catchupstepperiod: zod_1.z.array(zod_1.z.number()).optional(),
    chainid: zod_1.z.string().optional(),
    chunkdistributionnetwork: zod_1.z.unknown().optional(),
    chunkrequestretryperiod: zod_1.z.array(zod_1.z.number()).optional(),
    chunkwaitmult: zod_1.z.array(zod_1.z.number()).optional(),
    clientbackgroundmigrationthreads: zod_1.z.number().optional(),
    doomslugstepperiod: zod_1.z.array(zod_1.z.number()).optional(),
    enablemultilinelogging: zod_1.z.boolean().optional(),
    enablestatisticsexport: zod_1.z.boolean().optional(),
    epochlength: zod_1.z.number().optional(),
    epochsync: zod_1.z.unknown().optional(),
    expectedshutdown: zod_1.z.unknown().optional(),
    gc: zod_1.z.unknown(),
    headersyncexpectedheightpersecond: zod_1.z.number().optional(),
    headersyncinitialtimeout: zod_1.z.array(zod_1.z.number()).optional(),
    headersyncprogresstimeout: zod_1.z.array(zod_1.z.number()).optional(),
    headersyncstallbantimeout: zod_1.z.array(zod_1.z.number()).optional(),
    logsummaryperiod: zod_1.z.array(zod_1.z.number()).optional(),
    logsummarystyle: zod_1.z.unknown().optional(),
    maxblockproductiondelay: zod_1.z.array(zod_1.z.number()).optional(),
    maxblockwaitdelay: zod_1.z.array(zod_1.z.number()).optional(),
    maxgasburntview: zod_1.z.number().optional(),
    minblockproductiondelay: zod_1.z.array(zod_1.z.number()).optional(),
    minnumpeers: zod_1.z.number().optional(),
    numblockproducerseats: zod_1.z.number().optional(),
    orphanstatewitnessmaxsize: zod_1.z.number().optional(),
    orphanstatewitnesspoolsize: zod_1.z.number().optional(),
    producechunkaddtransactionstimelimit: zod_1.z.string().optional(),
    produceemptyblocks: zod_1.z.boolean().optional(),
    reshardingconfig: zod_1.z.unknown().optional(),
    rpcaddr: zod_1.z.string().optional(),
    saveinvalidwitnesses: zod_1.z.boolean().optional(),
    savelatestwitnesses: zod_1.z.boolean().optional(),
    savetriechanges: zod_1.z.boolean().optional(),
    savetxoutcomes: zod_1.z.boolean().optional(),
    skipsyncwait: zod_1.z.boolean().optional(),
    statesync: zod_1.z.unknown().optional(),
    statesyncenabled: zod_1.z.boolean().optional(),
    statesyncexternalbackoff: zod_1.z.array(zod_1.z.number()).optional(),
    statesyncexternaltimeout: zod_1.z.array(zod_1.z.number()).optional(),
    statesyncp2ptimeout: zod_1.z.array(zod_1.z.number()).optional(),
    statesyncretrybackoff: zod_1.z.array(zod_1.z.number()).optional(),
    synccheckperiod: zod_1.z.array(zod_1.z.number()).optional(),
    syncheightthreshold: zod_1.z.number().optional(),
    syncmaxblockrequests: zod_1.z.number().optional(),
    syncstepperiod: zod_1.z.array(zod_1.z.number()).optional(),
    trackedshardsconfig: zod_1.z.unknown().optional(),
    transactionpoolsizelimit: zod_1.z.number().optional(),
    transactionrequesthandlerthreads: zod_1.z.number().optional(),
    trieviewerstatesizelimit: zod_1.z.number().optional(),
    ttlaccountidrouter: zod_1.z.array(zod_1.z.number()).optional(),
    txroutingheighthorizon: zod_1.z.number().optional(),
    version: zod_1.z.unknown(),
    viewclientthreads: zod_1.z.number().optional(),
    viewclientthrottleperiod: zod_1.z.array(zod_1.z.number()).optional()
});
exports.RpcCongestionLevelRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcCongestionLevelResponseSchema = zod_1.z.object({
    congestionlevel: zod_1.z.number().optional()
});
exports.RpcErrorSchema = zod_1.z.object({
    cause: zod_1.z.unknown().optional(),
    code: zod_1.z.number(),
    data: zod_1.z.unknown().optional(),
    message: zod_1.z.string(),
    name: zod_1.z.unknown().optional()
});
exports.RpcGasPriceRequestSchema = zod_1.z.object({
    blockid: zod_1.z.unknown().optional()
});
exports.RpcGasPriceResponseSchema = zod_1.z.object({
    gasprice: zod_1.z.string().optional()
});
exports.RpcHealthRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcHealthResponseSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcKnownProducerSchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional(),
    addr: zod_1.z.string().optional(),
    peerid: zod_1.z.unknown().optional()
});
exports.RpcLightClientExecutionProofRequestSchema = zod_1.z.object({
    lightclienthead: zod_1.z.unknown().optional()
});
exports.RpcLightClientExecutionProofResponseSchema = zod_1.z.object({
    blockheaderlite: zod_1.z.unknown().optional(),
    blockproof: zod_1.z.array(zod_1.z.unknown()).optional(),
    outcomeproof: zod_1.z.unknown().optional(),
    outcomerootproof: zod_1.z.array(zod_1.z.unknown()).optional()
});
exports.RpcMaintenanceWindowsRequestSchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional()
});
exports.RpcPeerInfoSchema = zod_1.z.object({
    accountid: zod_1.z.unknown().optional(),
    addr: zod_1.z.string().optional(),
    id: zod_1.z.unknown()
});
exports.RpcQueryRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcQueryResponseSchema = zod_1.z.object({
    blockhash: zod_1.z.unknown().optional(),
    blockheight: zod_1.z.number().optional()
});
exports.RpcRequestValidationErrorKindSchema = zod_1.z.union([zod_1.z.object({
        info: zod_1.z.object({
            methodname: zod_1.z.string().optional()
        }),
        name: zod_1.z.enum(['METHOD_NOT_FOUND'])
    }), zod_1.z.object({
        info: zod_1.z.object({
            errormessage: zod_1.z.string().optional()
        }),
        name: zod_1.z.enum(['PARSE_ERROR'])
    })]);
exports.RpcSplitStorageInfoRequestSchema = zod_1.z.record(zod_1.z.unknown());
exports.RpcSplitStorageInfoResponseSchema = zod_1.z.object({
    coldheadheight: zod_1.z.number().optional(),
    finalheadheight: zod_1.z.number().optional(),
    headheight: zod_1.z.number().optional(),
    hotdbkind: zod_1.z.string().optional()
});
exports.RuntimeConfigViewSchema = zod_1.z.object({
    accountcreationconfig: zod_1.z.unknown().optional(),
    congestioncontrolconfig: zod_1.z.unknown().optional(),
    storageamountperbyte: zod_1.z.string().optional(),
    transactioncosts: zod_1.z.unknown().optional(),
    wasmconfig: zod_1.z.unknown().optional(),
    witnessconfig: zod_1.z.unknown().optional()
});
exports.RuntimeFeesConfigViewSchema = zod_1.z.object({
    actioncreationconfig: zod_1.z.unknown().optional(),
    actionreceiptcreationconfig: zod_1.z.unknown().optional(),
    burntgasreward: zod_1.z.array(zod_1.z.number()).optional(),
    datareceiptcreationconfig: zod_1.z.unknown().optional(),
    pessimisticgaspriceinflationratio: zod_1.z.array(zod_1.z.number()).optional(),
    storageusageconfig: zod_1.z.unknown().optional()
});
exports.ShardIdSchema = zod_1.z.number();
exports.ShardLayoutSchema = zod_1.z.union([zod_1.z.object({
        v0: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        v1: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        v2: zod_1.z.unknown().optional()
    })]);
exports.ShardLayoutV0Schema = zod_1.z.object({
    numshards: zod_1.z.number().optional(),
    version: zod_1.z.number()
});
exports.ShardLayoutV1Schema = zod_1.z.object({
    boundaryaccounts: zod_1.z.array(zod_1.z.unknown()).optional(),
    shardssplitmap: zod_1.z.array(zod_1.z.array(zod_1.z.unknown())).optional(),
    toparentshardmap: zod_1.z.array(zod_1.z.unknown()).optional(),
    version: zod_1.z.number()
});
exports.ShardLayoutV2Schema = zod_1.z.object({
    boundaryaccounts: zod_1.z.array(zod_1.z.unknown()).optional(),
    idtoindexmap: zod_1.z.record(zod_1.z.unknown()).optional(),
    indextoidmap: zod_1.z.record(zod_1.z.unknown()).optional(),
    shardids: zod_1.z.array(zod_1.z.unknown()).optional(),
    shardsparentmap: zod_1.z.record(zod_1.z.unknown()).optional(),
    shardssplitmap: zod_1.z.record(zod_1.z.unknown()).optional(),
    version: zod_1.z.number()
});
exports.ShardUIdSchema = zod_1.z.object({
    shardid: zod_1.z.number().optional(),
    version: zod_1.z.number()
});
exports.SignatureSchema = zod_1.z.string();
exports.StorageErrorSchema = zod_1.z.union([zod_1.z.enum(['StorageInternalError']), zod_1.z.object({
        missingTrieValue: zod_1.z.unknown().optional()
    }), zod_1.z.enum(['UnexpectedTrieValue']), zod_1.z.object({
        storageInconsistentState: zod_1.z.string().optional()
    }), zod_1.z.object({
        flatStorageBlockNotSupported: zod_1.z.string().optional()
    }), zod_1.z.object({
        memTrieLoadingError: zod_1.z.string().optional()
    })]);
exports.StorageGetModeSchema = zod_1.z.enum(['FlatStorage', 'Trie']);
exports.StorageUsageConfigViewSchema = zod_1.z.object({
    numbytesaccount: zod_1.z.number().optional(),
    numextrabytesrecord: zod_1.z.number().optional()
});
exports.SyncCheckpointSchema = zod_1.z.enum(['genesis', 'earliest_available']);
exports.SyncConfigSchema = zod_1.z.union([zod_1.z.enum(['Peers']), zod_1.z.object({
        externalStorage: zod_1.z.unknown().optional()
    })]);
exports.Tier1ProxyViewSchema = zod_1.z.object({
    addr: zod_1.z.string(),
    peerid: zod_1.z.unknown().optional()
});
exports.TrackedShardsConfigSchema = zod_1.z.union([zod_1.z.enum(['NoShards']), zod_1.z.object({
        shards: zod_1.z.array(zod_1.z.unknown()).optional()
    }), zod_1.z.enum(['AllShards']), zod_1.z.object({
        shadowValidator: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        schedule: zod_1.z.array(zod_1.z.array(zod_1.z.unknown())).optional()
    }), zod_1.z.object({
        accounts: zod_1.z.array(zod_1.z.unknown()).optional()
    })]);
exports.VMConfigViewSchema = zod_1.z.object({
    discardcustomsections: zod_1.z.boolean().optional(),
    ethimplicitaccounts: zod_1.z.boolean().optional(),
    extcosts: zod_1.z.unknown().optional(),
    fixcontractloadingcost: zod_1.z.boolean().optional(),
    globalcontracthostfns: zod_1.z.boolean().optional(),
    growmemcost: zod_1.z.number().optional(),
    implicitaccountcreation: zod_1.z.boolean().optional(),
    limitconfig: zod_1.z.unknown().optional(),
    reftypesbulkmemory: zod_1.z.boolean().optional(),
    regularopcost: zod_1.z.number().optional(),
    saturatingfloattoint: zod_1.z.boolean().optional(),
    storagegetmode: zod_1.z.unknown().optional(),
    vmkind: zod_1.z.unknown().optional()
});
exports.VMKindSchema = zod_1.z.union([zod_1.z.enum(['Wasmer0']), zod_1.z.enum(['Wasmtime']), zod_1.z.enum(['Wasmer2']), zod_1.z.enum(['NearVm']), zod_1.z.enum(['NearVm2'])]);
exports.VersionSchema = zod_1.z.object({
    build: zod_1.z.string(),
    commit: zod_1.z.string(),
    rustcversion: zod_1.z.string().optional(),
    version: zod_1.z.string()
});
exports.WasmTrapSchema = zod_1.z.union([zod_1.z.enum(['Unreachable']), zod_1.z.enum(['IncorrectCallIndirectSignature']), zod_1.z.enum(['MemoryOutOfBounds']), zod_1.z.enum(['CallIndirectOOB']), zod_1.z.enum(['IllegalArithmetic']), zod_1.z.enum(['MisalignedAtomicAccess']), zod_1.z.enum(['IndirectCallToNull']), zod_1.z.enum(['StackOverflow']), zod_1.z.enum(['GenericTrap'])]);
exports.WitnessConfigViewSchema = zod_1.z.object({
    combinedtransactionssizelimit: zod_1.z.number().optional(),
    mainstorageproofsizesoftlimit: zod_1.z.number().optional(),
    newtransactionsvalidationstatesizesoftlimit: zod_1.z.number().optional()
});
