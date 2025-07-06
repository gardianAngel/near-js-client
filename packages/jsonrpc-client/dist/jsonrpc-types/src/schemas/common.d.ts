/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
import { z } from 'zod';
export declare const BandwidthRequestSchema: z.ZodObject<{
    requestedvaluesbitmap: z.ZodOptional<z.ZodUnknown>;
    toshard: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    requestedvaluesbitmap?: unknown;
    toshard?: number | undefined;
}, {
    requestedvaluesbitmap?: unknown;
    toshard?: number | undefined;
}>;
export declare const BandwidthRequestBitmapSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    data: number[];
}, {
    data: number[];
}>;
export declare const BandwidthRequestsSchema: z.ZodObject<{
    v1: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    v1?: unknown;
}, {
    v1?: unknown;
}>;
export declare const BandwidthRequestsV1Schema: z.ZodObject<{
    requests: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    requests: unknown[];
}, {
    requests: unknown[];
}>;
export declare const CallResultSchema: z.ZodObject<{
    logs: z.ZodArray<z.ZodString, "many">;
    result: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    logs: string[];
    result: number[];
}, {
    logs: string[];
    result: number[];
}>;
export declare const CompilationErrorSchema: z.ZodUnion<[z.ZodObject<{
    codeDoesNotExist: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
    }, {
        accountid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    codeDoesNotExist?: {
        accountid?: unknown;
    } | undefined;
}, {
    codeDoesNotExist?: {
        accountid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    prepareError: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    prepareError?: unknown;
}, {
    prepareError?: unknown;
}>, z.ZodObject<{
    wasmerCompileError: z.ZodOptional<z.ZodObject<{
        msg: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        msg: string;
    }, {
        msg: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    wasmerCompileError?: {
        msg: string;
    } | undefined;
}, {
    wasmerCompileError?: {
        msg: string;
    } | undefined;
}>]>;
export declare const CongestionControlConfigViewSchema: z.ZodObject<{
    allowedshardoutgoinggas: z.ZodOptional<z.ZodNumber>;
    maxcongestionincominggas: z.ZodOptional<z.ZodNumber>;
    maxcongestionmemoryconsumption: z.ZodOptional<z.ZodNumber>;
    maxcongestionmissedchunks: z.ZodOptional<z.ZodNumber>;
    maxcongestionoutgoinggas: z.ZodOptional<z.ZodNumber>;
    maxoutgoinggas: z.ZodOptional<z.ZodNumber>;
    maxtxgas: z.ZodOptional<z.ZodNumber>;
    minoutgoinggas: z.ZodOptional<z.ZodNumber>;
    mintxgas: z.ZodOptional<z.ZodNumber>;
    outgoingreceiptsbigsizelimit: z.ZodOptional<z.ZodNumber>;
    outgoingreceiptsusualsizelimit: z.ZodOptional<z.ZodNumber>;
    rejecttxcongestionthreshold: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    allowedshardoutgoinggas?: number | undefined;
    maxcongestionincominggas?: number | undefined;
    maxcongestionmemoryconsumption?: number | undefined;
    maxcongestionmissedchunks?: number | undefined;
    maxcongestionoutgoinggas?: number | undefined;
    maxoutgoinggas?: number | undefined;
    maxtxgas?: number | undefined;
    minoutgoinggas?: number | undefined;
    mintxgas?: number | undefined;
    outgoingreceiptsbigsizelimit?: number | undefined;
    outgoingreceiptsusualsizelimit?: number | undefined;
    rejecttxcongestionthreshold?: number | undefined;
}, {
    allowedshardoutgoinggas?: number | undefined;
    maxcongestionincominggas?: number | undefined;
    maxcongestionmemoryconsumption?: number | undefined;
    maxcongestionmissedchunks?: number | undefined;
    maxcongestionoutgoinggas?: number | undefined;
    maxoutgoinggas?: number | undefined;
    maxtxgas?: number | undefined;
    minoutgoinggas?: number | undefined;
    mintxgas?: number | undefined;
    outgoingreceiptsbigsizelimit?: number | undefined;
    outgoingreceiptsusualsizelimit?: number | undefined;
    rejecttxcongestionthreshold?: number | undefined;
}>;
export declare const CongestionInfoViewSchema: z.ZodObject<{
    allowedshard: z.ZodOptional<z.ZodNumber>;
    bufferedreceiptsgas: z.ZodOptional<z.ZodString>;
    delayedreceiptsgas: z.ZodOptional<z.ZodString>;
    receiptbytes: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    allowedshard?: number | undefined;
    bufferedreceiptsgas?: string | undefined;
    delayedreceiptsgas?: string | undefined;
    receiptbytes?: number | undefined;
}, {
    allowedshard?: number | undefined;
    bufferedreceiptsgas?: string | undefined;
    delayedreceiptsgas?: string | undefined;
    receiptbytes?: number | undefined;
}>;
export declare const CostGasUsedSchema: z.ZodObject<{
    cost: z.ZodString;
    costcategory: z.ZodOptional<z.ZodString>;
    gasused: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    cost: string;
    costcategory?: string | undefined;
    gasused?: string | undefined;
}, {
    cost: string;
    costcategory?: string | undefined;
    gasused?: string | undefined;
}>;
export declare const CryptoHashSchema: z.ZodString;
export declare const DataReceiverViewSchema: z.ZodObject<{
    dataid: z.ZodOptional<z.ZodUnknown>;
    receiverid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    dataid?: unknown;
    receiverid?: unknown;
}, {
    dataid?: unknown;
    receiverid?: unknown;
}>;
export declare const DirectionSchema: z.ZodEnum<["Left", "Right"]>;
export declare const DumpConfigSchema: z.ZodObject<{
    credentialsfile: z.ZodOptional<z.ZodString>;
    iterationdelay: z.ZodOptional<z.ZodUnknown>;
    location: z.ZodUnknown;
    restartdumpforshards: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    credentialsfile?: string | undefined;
    iterationdelay?: unknown;
    location?: unknown;
    restartdumpforshards?: unknown[] | undefined;
}, {
    credentialsfile?: string | undefined;
    iterationdelay?: unknown;
    location?: unknown;
    restartdumpforshards?: unknown[] | undefined;
}>;
export declare const DurationAsStdSchemaProviderSchema: z.ZodObject<{
    nanos: z.ZodNumber;
    secs: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    nanos: number;
    secs: number;
}, {
    nanos: number;
    secs: number;
}>;
export declare const EpochIdSchema: z.ZodUnknown;
export declare const EpochSyncConfigSchema: z.ZodObject<{
    disableepochsyncforbootstrapping: z.ZodOptional<z.ZodBoolean>;
    epochsynchorizon: z.ZodOptional<z.ZodNumber>;
    ignoreepochsyncnetworkrequests: z.ZodOptional<z.ZodBoolean>;
    timeoutforepochsync: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    disableepochsyncforbootstrapping?: boolean | undefined;
    epochsynchorizon?: number | undefined;
    ignoreepochsyncnetworkrequests?: boolean | undefined;
    timeoutforepochsync?: unknown;
}, {
    disableepochsyncforbootstrapping?: boolean | undefined;
    epochsynchorizon?: number | undefined;
    ignoreepochsyncnetworkrequests?: boolean | undefined;
    timeoutforepochsync?: unknown;
}>;
export declare const ExecutionMetadataViewSchema: z.ZodObject<{
    gasprofile: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: number;
    gasprofile?: unknown[] | undefined;
}, {
    version: number;
    gasprofile?: unknown[] | undefined;
}>;
export declare const ExecutionOutcomeViewSchema: z.ZodObject<{
    executorid: z.ZodOptional<z.ZodUnknown>;
    gasburnt: z.ZodOptional<z.ZodNumber>;
    logs: z.ZodArray<z.ZodString, "many">;
    metadata: z.ZodOptional<z.ZodUnknown>;
    receiptids: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    status: z.ZodUnknown;
    tokensburnt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    logs: string[];
    status?: unknown;
    executorid?: unknown;
    gasburnt?: number | undefined;
    metadata?: unknown;
    receiptids?: unknown[] | undefined;
    tokensburnt?: string | undefined;
}, {
    logs: string[];
    status?: unknown;
    executorid?: unknown;
    gasburnt?: number | undefined;
    metadata?: unknown;
    receiptids?: unknown[] | undefined;
    tokensburnt?: string | undefined;
}>;
export declare const ExecutionOutcomeWithIdViewSchema: z.ZodObject<{
    blockhash: z.ZodOptional<z.ZodUnknown>;
    id: z.ZodUnknown;
    outcome: z.ZodUnknown;
    proof: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    proof: unknown[];
    blockhash?: unknown;
    id?: unknown;
    outcome?: unknown;
}, {
    proof: unknown[];
    blockhash?: unknown;
    id?: unknown;
    outcome?: unknown;
}>;
export declare const ExtCostsConfigViewSchema: z.ZodObject<{
    altbn128g1multiexpbase: z.ZodOptional<z.ZodNumber>;
    altbn128g1multiexpelement: z.ZodOptional<z.ZodNumber>;
    altbn128g1sumbase: z.ZodOptional<z.ZodNumber>;
    altbn128g1sumelement: z.ZodOptional<z.ZodNumber>;
    altbn128pairingcheckbase: z.ZodOptional<z.ZodNumber>;
    altbn128pairingcheckelement: z.ZodOptional<z.ZodNumber>;
    base: z.ZodNumber;
    bls12381g1multiexpbase: z.ZodOptional<z.ZodNumber>;
    bls12381g1multiexpelement: z.ZodOptional<z.ZodNumber>;
    bls12381g2multiexpbase: z.ZodOptional<z.ZodNumber>;
    bls12381g2multiexpelement: z.ZodOptional<z.ZodNumber>;
    bls12381mapfp2tog2base: z.ZodOptional<z.ZodNumber>;
    bls12381mapfp2tog2element: z.ZodOptional<z.ZodNumber>;
    bls12381mapfptog1base: z.ZodOptional<z.ZodNumber>;
    bls12381mapfptog1element: z.ZodOptional<z.ZodNumber>;
    bls12381p1decompressbase: z.ZodOptional<z.ZodNumber>;
    bls12381p1decompresselement: z.ZodOptional<z.ZodNumber>;
    bls12381p1sumbase: z.ZodOptional<z.ZodNumber>;
    bls12381p1sumelement: z.ZodOptional<z.ZodNumber>;
    bls12381p2decompressbase: z.ZodOptional<z.ZodNumber>;
    bls12381p2decompresselement: z.ZodOptional<z.ZodNumber>;
    bls12381p2sumbase: z.ZodOptional<z.ZodNumber>;
    bls12381p2sumelement: z.ZodOptional<z.ZodNumber>;
    bls12381pairingbase: z.ZodOptional<z.ZodNumber>;
    bls12381pairingelement: z.ZodOptional<z.ZodNumber>;
    contractcompilebase: z.ZodOptional<z.ZodNumber>;
    contractcompilebytes: z.ZodOptional<z.ZodNumber>;
    contractloadingbase: z.ZodOptional<z.ZodNumber>;
    contractloadingbytes: z.ZodOptional<z.ZodNumber>;
    ecrecoverbase: z.ZodOptional<z.ZodNumber>;
    ed25519verifybase: z.ZodOptional<z.ZodNumber>;
    ed25519verifybyte: z.ZodOptional<z.ZodNumber>;
    keccak256base: z.ZodOptional<z.ZodNumber>;
    keccak256byte: z.ZodOptional<z.ZodNumber>;
    keccak512base: z.ZodOptional<z.ZodNumber>;
    keccak512byte: z.ZodOptional<z.ZodNumber>;
    logbase: z.ZodOptional<z.ZodNumber>;
    logbyte: z.ZodOptional<z.ZodNumber>;
    promiseandbase: z.ZodOptional<z.ZodNumber>;
    promiseandperpromise: z.ZodOptional<z.ZodNumber>;
    promisereturn: z.ZodOptional<z.ZodNumber>;
    readcachedtrienode: z.ZodOptional<z.ZodNumber>;
    readmemorybase: z.ZodOptional<z.ZodNumber>;
    readmemorybyte: z.ZodOptional<z.ZodNumber>;
    readregisterbase: z.ZodOptional<z.ZodNumber>;
    readregisterbyte: z.ZodOptional<z.ZodNumber>;
    ripemd160base: z.ZodOptional<z.ZodNumber>;
    ripemd160block: z.ZodOptional<z.ZodNumber>;
    sha256base: z.ZodOptional<z.ZodNumber>;
    sha256byte: z.ZodOptional<z.ZodNumber>;
    storagehaskeybase: z.ZodOptional<z.ZodNumber>;
    storagehaskeybyte: z.ZodOptional<z.ZodNumber>;
    storageitercreatefrombyte: z.ZodOptional<z.ZodNumber>;
    storageitercreateprefixbase: z.ZodOptional<z.ZodNumber>;
    storageitercreateprefixbyte: z.ZodOptional<z.ZodNumber>;
    storageitercreaterangebase: z.ZodOptional<z.ZodNumber>;
    storageitercreatetobyte: z.ZodOptional<z.ZodNumber>;
    storageiternextbase: z.ZodOptional<z.ZodNumber>;
    storageiternextkeybyte: z.ZodOptional<z.ZodNumber>;
    storageiternextvaluebyte: z.ZodOptional<z.ZodNumber>;
    storagelargereadoverheadbase: z.ZodOptional<z.ZodNumber>;
    storagelargereadoverheadbyte: z.ZodOptional<z.ZodNumber>;
    storagereadbase: z.ZodOptional<z.ZodNumber>;
    storagereadkeybyte: z.ZodOptional<z.ZodNumber>;
    storagereadvaluebyte: z.ZodOptional<z.ZodNumber>;
    storageremovebase: z.ZodOptional<z.ZodNumber>;
    storageremovekeybyte: z.ZodOptional<z.ZodNumber>;
    storageremoveretvaluebyte: z.ZodOptional<z.ZodNumber>;
    storagewritebase: z.ZodOptional<z.ZodNumber>;
    storagewriteevictedbyte: z.ZodOptional<z.ZodNumber>;
    storagewritekeybyte: z.ZodOptional<z.ZodNumber>;
    storagewritevaluebyte: z.ZodOptional<z.ZodNumber>;
    touchingtrienode: z.ZodOptional<z.ZodNumber>;
    utf16decodingbase: z.ZodOptional<z.ZodNumber>;
    utf16decodingbyte: z.ZodOptional<z.ZodNumber>;
    utf8decodingbase: z.ZodOptional<z.ZodNumber>;
    utf8decodingbyte: z.ZodOptional<z.ZodNumber>;
    validatorstakebase: z.ZodOptional<z.ZodNumber>;
    validatortotalstakebase: z.ZodOptional<z.ZodNumber>;
    writememorybase: z.ZodOptional<z.ZodNumber>;
    writememorybyte: z.ZodOptional<z.ZodNumber>;
    writeregisterbase: z.ZodOptional<z.ZodNumber>;
    writeregisterbyte: z.ZodOptional<z.ZodNumber>;
    yieldcreatebase: z.ZodOptional<z.ZodNumber>;
    yieldcreatebyte: z.ZodOptional<z.ZodNumber>;
    yieldresumebase: z.ZodOptional<z.ZodNumber>;
    yieldresumebyte: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    base: number;
    altbn128g1multiexpbase?: number | undefined;
    altbn128g1multiexpelement?: number | undefined;
    altbn128g1sumbase?: number | undefined;
    altbn128g1sumelement?: number | undefined;
    altbn128pairingcheckbase?: number | undefined;
    altbn128pairingcheckelement?: number | undefined;
    bls12381g1multiexpbase?: number | undefined;
    bls12381g1multiexpelement?: number | undefined;
    bls12381g2multiexpbase?: number | undefined;
    bls12381g2multiexpelement?: number | undefined;
    bls12381mapfp2tog2base?: number | undefined;
    bls12381mapfp2tog2element?: number | undefined;
    bls12381mapfptog1base?: number | undefined;
    bls12381mapfptog1element?: number | undefined;
    bls12381p1decompressbase?: number | undefined;
    bls12381p1decompresselement?: number | undefined;
    bls12381p1sumbase?: number | undefined;
    bls12381p1sumelement?: number | undefined;
    bls12381p2decompressbase?: number | undefined;
    bls12381p2decompresselement?: number | undefined;
    bls12381p2sumbase?: number | undefined;
    bls12381p2sumelement?: number | undefined;
    bls12381pairingbase?: number | undefined;
    bls12381pairingelement?: number | undefined;
    contractcompilebase?: number | undefined;
    contractcompilebytes?: number | undefined;
    contractloadingbase?: number | undefined;
    contractloadingbytes?: number | undefined;
    ecrecoverbase?: number | undefined;
    ed25519verifybase?: number | undefined;
    ed25519verifybyte?: number | undefined;
    keccak256base?: number | undefined;
    keccak256byte?: number | undefined;
    keccak512base?: number | undefined;
    keccak512byte?: number | undefined;
    logbase?: number | undefined;
    logbyte?: number | undefined;
    promiseandbase?: number | undefined;
    promiseandperpromise?: number | undefined;
    promisereturn?: number | undefined;
    readcachedtrienode?: number | undefined;
    readmemorybase?: number | undefined;
    readmemorybyte?: number | undefined;
    readregisterbase?: number | undefined;
    readregisterbyte?: number | undefined;
    ripemd160base?: number | undefined;
    ripemd160block?: number | undefined;
    sha256base?: number | undefined;
    sha256byte?: number | undefined;
    storagehaskeybase?: number | undefined;
    storagehaskeybyte?: number | undefined;
    storageitercreatefrombyte?: number | undefined;
    storageitercreateprefixbase?: number | undefined;
    storageitercreateprefixbyte?: number | undefined;
    storageitercreaterangebase?: number | undefined;
    storageitercreatetobyte?: number | undefined;
    storageiternextbase?: number | undefined;
    storageiternextkeybyte?: number | undefined;
    storageiternextvaluebyte?: number | undefined;
    storagelargereadoverheadbase?: number | undefined;
    storagelargereadoverheadbyte?: number | undefined;
    storagereadbase?: number | undefined;
    storagereadkeybyte?: number | undefined;
    storagereadvaluebyte?: number | undefined;
    storageremovebase?: number | undefined;
    storageremovekeybyte?: number | undefined;
    storageremoveretvaluebyte?: number | undefined;
    storagewritebase?: number | undefined;
    storagewriteevictedbyte?: number | undefined;
    storagewritekeybyte?: number | undefined;
    storagewritevaluebyte?: number | undefined;
    touchingtrienode?: number | undefined;
    utf16decodingbase?: number | undefined;
    utf16decodingbyte?: number | undefined;
    utf8decodingbase?: number | undefined;
    utf8decodingbyte?: number | undefined;
    validatorstakebase?: number | undefined;
    validatortotalstakebase?: number | undefined;
    writememorybase?: number | undefined;
    writememorybyte?: number | undefined;
    writeregisterbase?: number | undefined;
    writeregisterbyte?: number | undefined;
    yieldcreatebase?: number | undefined;
    yieldcreatebyte?: number | undefined;
    yieldresumebase?: number | undefined;
    yieldresumebyte?: number | undefined;
}, {
    base: number;
    altbn128g1multiexpbase?: number | undefined;
    altbn128g1multiexpelement?: number | undefined;
    altbn128g1sumbase?: number | undefined;
    altbn128g1sumelement?: number | undefined;
    altbn128pairingcheckbase?: number | undefined;
    altbn128pairingcheckelement?: number | undefined;
    bls12381g1multiexpbase?: number | undefined;
    bls12381g1multiexpelement?: number | undefined;
    bls12381g2multiexpbase?: number | undefined;
    bls12381g2multiexpelement?: number | undefined;
    bls12381mapfp2tog2base?: number | undefined;
    bls12381mapfp2tog2element?: number | undefined;
    bls12381mapfptog1base?: number | undefined;
    bls12381mapfptog1element?: number | undefined;
    bls12381p1decompressbase?: number | undefined;
    bls12381p1decompresselement?: number | undefined;
    bls12381p1sumbase?: number | undefined;
    bls12381p1sumelement?: number | undefined;
    bls12381p2decompressbase?: number | undefined;
    bls12381p2decompresselement?: number | undefined;
    bls12381p2sumbase?: number | undefined;
    bls12381p2sumelement?: number | undefined;
    bls12381pairingbase?: number | undefined;
    bls12381pairingelement?: number | undefined;
    contractcompilebase?: number | undefined;
    contractcompilebytes?: number | undefined;
    contractloadingbase?: number | undefined;
    contractloadingbytes?: number | undefined;
    ecrecoverbase?: number | undefined;
    ed25519verifybase?: number | undefined;
    ed25519verifybyte?: number | undefined;
    keccak256base?: number | undefined;
    keccak256byte?: number | undefined;
    keccak512base?: number | undefined;
    keccak512byte?: number | undefined;
    logbase?: number | undefined;
    logbyte?: number | undefined;
    promiseandbase?: number | undefined;
    promiseandperpromise?: number | undefined;
    promisereturn?: number | undefined;
    readcachedtrienode?: number | undefined;
    readmemorybase?: number | undefined;
    readmemorybyte?: number | undefined;
    readregisterbase?: number | undefined;
    readregisterbyte?: number | undefined;
    ripemd160base?: number | undefined;
    ripemd160block?: number | undefined;
    sha256base?: number | undefined;
    sha256byte?: number | undefined;
    storagehaskeybase?: number | undefined;
    storagehaskeybyte?: number | undefined;
    storageitercreatefrombyte?: number | undefined;
    storageitercreateprefixbase?: number | undefined;
    storageitercreateprefixbyte?: number | undefined;
    storageitercreaterangebase?: number | undefined;
    storageitercreatetobyte?: number | undefined;
    storageiternextbase?: number | undefined;
    storageiternextkeybyte?: number | undefined;
    storageiternextvaluebyte?: number | undefined;
    storagelargereadoverheadbase?: number | undefined;
    storagelargereadoverheadbyte?: number | undefined;
    storagereadbase?: number | undefined;
    storagereadkeybyte?: number | undefined;
    storagereadvaluebyte?: number | undefined;
    storageremovebase?: number | undefined;
    storageremovekeybyte?: number | undefined;
    storageremoveretvaluebyte?: number | undefined;
    storagewritebase?: number | undefined;
    storagewriteevictedbyte?: number | undefined;
    storagewritekeybyte?: number | undefined;
    storagewritevaluebyte?: number | undefined;
    touchingtrienode?: number | undefined;
    utf16decodingbase?: number | undefined;
    utf16decodingbyte?: number | undefined;
    utf8decodingbase?: number | undefined;
    utf8decodingbyte?: number | undefined;
    validatorstakebase?: number | undefined;
    validatortotalstakebase?: number | undefined;
    writememorybase?: number | undefined;
    writememorybyte?: number | undefined;
    writeregisterbase?: number | undefined;
    writeregisterbyte?: number | undefined;
    yieldcreatebase?: number | undefined;
    yieldcreatebyte?: number | undefined;
    yieldresumebase?: number | undefined;
    yieldresumebyte?: number | undefined;
}>;
export declare const ExternalStorageConfigSchema: z.ZodObject<{
    externalstoragefallbackthreshold: z.ZodOptional<z.ZodNumber>;
    location: z.ZodUnknown;
    numconcurrentrequests: z.ZodOptional<z.ZodNumber>;
    numconcurrentrequestsduringcatchup: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    location?: unknown;
    externalstoragefallbackthreshold?: number | undefined;
    numconcurrentrequests?: number | undefined;
    numconcurrentrequestsduringcatchup?: number | undefined;
}, {
    location?: unknown;
    externalstoragefallbackthreshold?: number | undefined;
    numconcurrentrequests?: number | undefined;
    numconcurrentrequestsduringcatchup?: number | undefined;
}>;
export declare const ExternalStorageLocationSchema: z.ZodUnion<[z.ZodObject<{
    s3: z.ZodOptional<z.ZodObject<{
        bucket: z.ZodString;
        region: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        bucket: string;
        region: string;
    }, {
        bucket: string;
        region: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    s3?: {
        bucket: string;
        region: string;
    } | undefined;
}, {
    s3?: {
        bucket: string;
        region: string;
    } | undefined;
}>, z.ZodObject<{
    filesystem: z.ZodOptional<z.ZodObject<{
        rootdir: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        rootdir?: string | undefined;
    }, {
        rootdir?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    filesystem?: {
        rootdir?: string | undefined;
    } | undefined;
}, {
    filesystem?: {
        rootdir?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    gCS: z.ZodOptional<z.ZodObject<{
        bucket: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        bucket: string;
    }, {
        bucket: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    gCS?: {
        bucket: string;
    } | undefined;
}, {
    gCS?: {
        bucket: string;
    } | undefined;
}>]>;
export declare const FeeSchema: z.ZodObject<{
    execution: z.ZodNumber;
    sendnotsir: z.ZodOptional<z.ZodNumber>;
    sendsir: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    execution: number;
    sendnotsir?: number | undefined;
    sendsir?: number | undefined;
}, {
    execution: number;
    sendnotsir?: number | undefined;
    sendsir?: number | undefined;
}>;
export declare const FinalExecutionOutcomeViewSchema: z.ZodObject<{
    receiptsoutcome: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    status: z.ZodUnknown;
    transaction: z.ZodUnknown;
    transactionoutcome: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    status?: unknown;
    receiptsoutcome?: unknown[] | undefined;
    transaction?: unknown;
    transactionoutcome?: unknown;
}, {
    status?: unknown;
    receiptsoutcome?: unknown[] | undefined;
    transaction?: unknown;
    transactionoutcome?: unknown;
}>;
export declare const FinalitySchema: z.ZodEnum<["optimistic", "near-final", "final"]>;
export declare const FunctionCallErrorSchema: z.ZodUnion<[z.ZodEnum<["WasmUnknownError", "_EVMError"]>, z.ZodObject<{
    compilationError: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    compilationError?: unknown;
}, {
    compilationError?: unknown;
}>, z.ZodObject<{
    linkError: z.ZodOptional<z.ZodObject<{
        msg: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        msg: string;
    }, {
        msg: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    linkError?: {
        msg: string;
    } | undefined;
}, {
    linkError?: {
        msg: string;
    } | undefined;
}>, z.ZodObject<{
    methodResolveError: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    methodResolveError?: unknown;
}, {
    methodResolveError?: unknown;
}>, z.ZodObject<{
    wasmTrap: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    wasmTrap?: unknown;
}, {
    wasmTrap?: unknown;
}>, z.ZodObject<{
    hostError: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    hostError?: unknown;
}, {
    hostError?: unknown;
}>, z.ZodObject<{
    executionError: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    executionError?: string | undefined;
}, {
    executionError?: string | undefined;
}>]>;
export declare const FunctionCallPermissionSchema: z.ZodObject<{
    allowance: z.ZodOptional<z.ZodString>;
    methodnames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    receiverid: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    receiverid?: string | undefined;
    allowance?: string | undefined;
    methodnames?: string[] | undefined;
}, {
    receiverid?: string | undefined;
    allowance?: string | undefined;
    methodnames?: string[] | undefined;
}>;
export declare const GCConfigSchema: z.ZodObject<{
    gcblockslimit: z.ZodOptional<z.ZodNumber>;
    gcforkcleanstep: z.ZodOptional<z.ZodNumber>;
    gcnumepochstokeep: z.ZodOptional<z.ZodNumber>;
    gcstepperiod: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    gcblockslimit?: number | undefined;
    gcforkcleanstep?: number | undefined;
    gcnumepochstokeep?: number | undefined;
    gcstepperiod?: unknown;
}, {
    gcblockslimit?: number | undefined;
    gcforkcleanstep?: number | undefined;
    gcnumepochstokeep?: number | undefined;
    gcstepperiod?: unknown;
}>;
export declare const HostErrorSchema: z.ZodUnion<[z.ZodEnum<["BadUTF16"]>, z.ZodEnum<["BadUTF8"]>, z.ZodEnum<["GasExceeded"]>, z.ZodEnum<["GasLimitExceeded"]>, z.ZodEnum<["BalanceExceeded"]>, z.ZodEnum<["EmptyMethodName"]>, z.ZodObject<{
    guestPanic: z.ZodOptional<z.ZodObject<{
        panicmsg: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        panicmsg?: string | undefined;
    }, {
        panicmsg?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    guestPanic?: {
        panicmsg?: string | undefined;
    } | undefined;
}, {
    guestPanic?: {
        panicmsg?: string | undefined;
    } | undefined;
}>, z.ZodEnum<["IntegerOverflow"]>, z.ZodObject<{
    invalidPromiseIndex: z.ZodOptional<z.ZodObject<{
        promiseidx: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        promiseidx?: number | undefined;
    }, {
        promiseidx?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidPromiseIndex?: {
        promiseidx?: number | undefined;
    } | undefined;
}, {
    invalidPromiseIndex?: {
        promiseidx?: number | undefined;
    } | undefined;
}>, z.ZodEnum<["CannotAppendActionToJointPromise"]>, z.ZodEnum<["CannotReturnJointPromise"]>, z.ZodObject<{
    invalidPromiseResultIndex: z.ZodOptional<z.ZodObject<{
        resultidx: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        resultidx?: number | undefined;
    }, {
        resultidx?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidPromiseResultIndex?: {
        resultidx?: number | undefined;
    } | undefined;
}, {
    invalidPromiseResultIndex?: {
        resultidx?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    invalidRegisterId: z.ZodOptional<z.ZodObject<{
        registerid: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        registerid?: number | undefined;
    }, {
        registerid?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidRegisterId?: {
        registerid?: number | undefined;
    } | undefined;
}, {
    invalidRegisterId?: {
        registerid?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    iteratorWasInvalidated: z.ZodOptional<z.ZodObject<{
        iteratorindex: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        iteratorindex?: number | undefined;
    }, {
        iteratorindex?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    iteratorWasInvalidated?: {
        iteratorindex?: number | undefined;
    } | undefined;
}, {
    iteratorWasInvalidated?: {
        iteratorindex?: number | undefined;
    } | undefined;
}>, z.ZodEnum<["MemoryAccessViolation"]>, z.ZodObject<{
    invalidReceiptIndex: z.ZodOptional<z.ZodObject<{
        receiptindex: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        receiptindex?: number | undefined;
    }, {
        receiptindex?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidReceiptIndex?: {
        receiptindex?: number | undefined;
    } | undefined;
}, {
    invalidReceiptIndex?: {
        receiptindex?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    invalidIteratorIndex: z.ZodOptional<z.ZodObject<{
        iteratorindex: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        iteratorindex?: number | undefined;
    }, {
        iteratorindex?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidIteratorIndex?: {
        iteratorindex?: number | undefined;
    } | undefined;
}, {
    invalidIteratorIndex?: {
        iteratorindex?: number | undefined;
    } | undefined;
}>, z.ZodEnum<["InvalidAccountId"]>, z.ZodEnum<["InvalidMethodName"]>, z.ZodEnum<["InvalidPublicKey"]>, z.ZodObject<{
    prohibitedInView: z.ZodOptional<z.ZodObject<{
        methodname: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        methodname?: string | undefined;
    }, {
        methodname?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    prohibitedInView?: {
        methodname?: string | undefined;
    } | undefined;
}, {
    prohibitedInView?: {
        methodname?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    numberOfLogsExceeded: z.ZodOptional<z.ZodObject<{
        limit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        limit: number;
    }, {
        limit: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    numberOfLogsExceeded?: {
        limit: number;
    } | undefined;
}, {
    numberOfLogsExceeded?: {
        limit: number;
    } | undefined;
}>, z.ZodObject<{
    keyLengthExceeded: z.ZodOptional<z.ZodObject<{
        length: z.ZodNumber;
        limit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        length: number;
        limit: number;
    }, {
        length: number;
        limit: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    keyLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}, {
    keyLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}>, z.ZodObject<{
    valueLengthExceeded: z.ZodOptional<z.ZodObject<{
        length: z.ZodNumber;
        limit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        length: number;
        limit: number;
    }, {
        length: number;
        limit: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    valueLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}, {
    valueLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}>, z.ZodObject<{
    totalLogLengthExceeded: z.ZodOptional<z.ZodObject<{
        length: z.ZodNumber;
        limit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        length: number;
        limit: number;
    }, {
        length: number;
        limit: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    totalLogLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}, {
    totalLogLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}>, z.ZodObject<{
    numberPromisesExceeded: z.ZodOptional<z.ZodObject<{
        limit: z.ZodNumber;
        numberofpromises: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        numberofpromises?: number | undefined;
    }, {
        limit: number;
        numberofpromises?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    numberPromisesExceeded?: {
        limit: number;
        numberofpromises?: number | undefined;
    } | undefined;
}, {
    numberPromisesExceeded?: {
        limit: number;
        numberofpromises?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    numberInputDataDependenciesExceeded: z.ZodOptional<z.ZodObject<{
        limit: z.ZodNumber;
        numberofinputdatadependencies: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        numberofinputdatadependencies?: number | undefined;
    }, {
        limit: number;
        numberofinputdatadependencies?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    numberInputDataDependenciesExceeded?: {
        limit: number;
        numberofinputdatadependencies?: number | undefined;
    } | undefined;
}, {
    numberInputDataDependenciesExceeded?: {
        limit: number;
        numberofinputdatadependencies?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    returnedValueLengthExceeded: z.ZodOptional<z.ZodObject<{
        length: z.ZodNumber;
        limit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        length: number;
        limit: number;
    }, {
        length: number;
        limit: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    returnedValueLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}, {
    returnedValueLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}>, z.ZodObject<{
    contractSizeExceeded: z.ZodOptional<z.ZodObject<{
        limit: z.ZodNumber;
        size: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        size: number;
    }, {
        limit: number;
        size: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    contractSizeExceeded?: {
        limit: number;
        size: number;
    } | undefined;
}, {
    contractSizeExceeded?: {
        limit: number;
        size: number;
    } | undefined;
}>, z.ZodObject<{
    deprecated: z.ZodOptional<z.ZodObject<{
        methodname: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        methodname?: string | undefined;
    }, {
        methodname?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    deprecated?: {
        methodname?: string | undefined;
    } | undefined;
}, {
    deprecated?: {
        methodname?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    eCRecoverError: z.ZodOptional<z.ZodObject<{
        msg: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        msg: string;
    }, {
        msg: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    eCRecoverError?: {
        msg: string;
    } | undefined;
}, {
    eCRecoverError?: {
        msg: string;
    } | undefined;
}>, z.ZodObject<{
    altBn128InvalidInput: z.ZodOptional<z.ZodObject<{
        msg: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        msg: string;
    }, {
        msg: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    altBn128InvalidInput?: {
        msg: string;
    } | undefined;
}, {
    altBn128InvalidInput?: {
        msg: string;
    } | undefined;
}>, z.ZodObject<{
    ed25519VerifyInvalidInput: z.ZodOptional<z.ZodObject<{
        msg: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        msg: string;
    }, {
        msg: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    ed25519VerifyInvalidInput?: {
        msg: string;
    } | undefined;
}, {
    ed25519VerifyInvalidInput?: {
        msg: string;
    } | undefined;
}>]>;
export declare const JsonRpcRequestforEXPERIMENTALchangesSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_changes"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_changes";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_changes";
    params?: unknown;
}>;
export declare const JsonRpcRequestforEXPERIMENTALcongestionlevelSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_congestion_level"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_congestion_level";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_congestion_level";
    params?: unknown;
}>;
export declare const JsonRpcRequestforEXPERIMENTALlightclientproofSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_light_client_proof"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_light_client_proof";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_light_client_proof";
    params?: unknown;
}>;
export declare const JsonRpcRequestforEXPERIMENTALmaintenancewindowsSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_maintenance_windows"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_maintenance_windows";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_maintenance_windows";
    params?: unknown;
}>;
export declare const JsonRpcRequestforEXPERIMENTALsplitstorageinfoSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_split_storage_info"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_split_storage_info";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "EXPERIMENTAL_split_storage_info";
    params?: unknown;
}>;
export declare const JsonRpcRequestforchangesSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["changes"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "changes";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "changes";
    params?: unknown;
}>;
export declare const JsonRpcRequestforclientconfigSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["client_config"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "client_config";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "client_config";
    params?: unknown;
}>;
export declare const JsonRpcRequestforgaspriceSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["gas_price"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "gas_price";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "gas_price";
    params?: unknown;
}>;
export declare const JsonRpcRequestforhealthSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["health"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "health";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "health";
    params?: unknown;
}>;
export declare const JsonRpcRequestforlightclientproofSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["light_client_proof"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "light_client_proof";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "light_client_proof";
    params?: unknown;
}>;
export declare const JsonRpcRequestforquerySchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["query"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
    method: "query";
    params?: unknown;
}, {
    id: string;
    jsonrpc: string;
    method: "query";
    params?: unknown;
}>;
export declare const JsonRpcResponseforArrayofRangeofuint64andRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforCryptoHashandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforNullableRpcHealthResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcClientConfigResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcCongestionLevelResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcGasPriceResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcLightClientExecutionProofResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcQueryResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const JsonRpcResponseforRpcSplitStorageInfoResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    jsonrpc: string;
}, {
    id: string;
    jsonrpc: string;
}>;
export declare const KnownProducerViewSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    nexthops: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    peerid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountid?: unknown;
    nexthops?: unknown[] | undefined;
    peerid?: unknown;
}, {
    accountid?: unknown;
    nexthops?: unknown[] | undefined;
    peerid?: unknown;
}>;
export declare const LimitConfigSchema: z.ZodObject<{
    accountidvalidityrulesversion: z.ZodOptional<z.ZodUnknown>;
    initialmemorypages: z.ZodOptional<z.ZodNumber>;
    maxactionsperreceipt: z.ZodOptional<z.ZodNumber>;
    maxargumentslength: z.ZodOptional<z.ZodNumber>;
    maxcontractsize: z.ZodOptional<z.ZodNumber>;
    maxfunctionsnumberpercontract: z.ZodOptional<z.ZodNumber>;
    maxgasburnt: z.ZodOptional<z.ZodNumber>;
    maxlengthmethodname: z.ZodOptional<z.ZodNumber>;
    maxlengthreturneddata: z.ZodOptional<z.ZodNumber>;
    maxlengthstoragekey: z.ZodOptional<z.ZodNumber>;
    maxlengthstoragevalue: z.ZodOptional<z.ZodNumber>;
    maxlocalspercontract: z.ZodOptional<z.ZodNumber>;
    maxmemorypages: z.ZodOptional<z.ZodNumber>;
    maxnumberbytesmethodnames: z.ZodOptional<z.ZodNumber>;
    maxnumberinputdatadependencies: z.ZodOptional<z.ZodNumber>;
    maxnumberlogs: z.ZodOptional<z.ZodNumber>;
    maxnumberregisters: z.ZodOptional<z.ZodNumber>;
    maxpromisesperfunctioncallaction: z.ZodOptional<z.ZodNumber>;
    maxreceiptsize: z.ZodOptional<z.ZodNumber>;
    maxregistersize: z.ZodOptional<z.ZodNumber>;
    maxstackheight: z.ZodOptional<z.ZodNumber>;
    maxtotalloglength: z.ZodOptional<z.ZodNumber>;
    maxtotalprepaidgas: z.ZodOptional<z.ZodNumber>;
    maxtransactionsize: z.ZodOptional<z.ZodNumber>;
    maxyieldpayloadsize: z.ZodOptional<z.ZodNumber>;
    perreceiptstorageproofsizelimit: z.ZodOptional<z.ZodNumber>;
    registersmemorylimit: z.ZodOptional<z.ZodNumber>;
    yieldtimeoutlengthinblocks: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    accountidvalidityrulesversion?: unknown;
    initialmemorypages?: number | undefined;
    maxactionsperreceipt?: number | undefined;
    maxargumentslength?: number | undefined;
    maxcontractsize?: number | undefined;
    maxfunctionsnumberpercontract?: number | undefined;
    maxgasburnt?: number | undefined;
    maxlengthmethodname?: number | undefined;
    maxlengthreturneddata?: number | undefined;
    maxlengthstoragekey?: number | undefined;
    maxlengthstoragevalue?: number | undefined;
    maxlocalspercontract?: number | undefined;
    maxmemorypages?: number | undefined;
    maxnumberbytesmethodnames?: number | undefined;
    maxnumberinputdatadependencies?: number | undefined;
    maxnumberlogs?: number | undefined;
    maxnumberregisters?: number | undefined;
    maxpromisesperfunctioncallaction?: number | undefined;
    maxreceiptsize?: number | undefined;
    maxregistersize?: number | undefined;
    maxstackheight?: number | undefined;
    maxtotalloglength?: number | undefined;
    maxtotalprepaidgas?: number | undefined;
    maxtransactionsize?: number | undefined;
    maxyieldpayloadsize?: number | undefined;
    perreceiptstorageproofsizelimit?: number | undefined;
    registersmemorylimit?: number | undefined;
    yieldtimeoutlengthinblocks?: number | undefined;
}, {
    accountidvalidityrulesversion?: unknown;
    initialmemorypages?: number | undefined;
    maxactionsperreceipt?: number | undefined;
    maxargumentslength?: number | undefined;
    maxcontractsize?: number | undefined;
    maxfunctionsnumberpercontract?: number | undefined;
    maxgasburnt?: number | undefined;
    maxlengthmethodname?: number | undefined;
    maxlengthreturneddata?: number | undefined;
    maxlengthstoragekey?: number | undefined;
    maxlengthstoragevalue?: number | undefined;
    maxlocalspercontract?: number | undefined;
    maxmemorypages?: number | undefined;
    maxnumberbytesmethodnames?: number | undefined;
    maxnumberinputdatadependencies?: number | undefined;
    maxnumberlogs?: number | undefined;
    maxnumberregisters?: number | undefined;
    maxpromisesperfunctioncallaction?: number | undefined;
    maxreceiptsize?: number | undefined;
    maxregistersize?: number | undefined;
    maxstackheight?: number | undefined;
    maxtotalloglength?: number | undefined;
    maxtotalprepaidgas?: number | undefined;
    maxtransactionsize?: number | undefined;
    maxyieldpayloadsize?: number | undefined;
    perreceiptstorageproofsizelimit?: number | undefined;
    registersmemorylimit?: number | undefined;
    yieldtimeoutlengthinblocks?: number | undefined;
}>;
export declare const LogSummaryStyleSchema: z.ZodEnum<["plain", "colored"]>;
export declare const MerklePathItemSchema: z.ZodObject<{
    direction: z.ZodUnknown;
    hash: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    direction?: unknown;
    hash?: unknown;
}, {
    direction?: unknown;
    hash?: unknown;
}>;
export declare const MethodResolveErrorSchema: z.ZodEnum<["MethodEmptyName", "MethodNotFound", "MethodInvalidSignature"]>;
export declare const MissingTrieValueSchema: z.ZodObject<{
    context: z.ZodUnknown;
    hash: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    hash?: unknown;
    context?: unknown;
}, {
    hash?: unknown;
    context?: unknown;
}>;
export declare const MissingTrieValueContextSchema: z.ZodUnion<[z.ZodEnum<["TrieIterator"]>, z.ZodEnum<["TriePrefetchingStorage"]>, z.ZodEnum<["TrieMemoryPartialStorage"]>, z.ZodEnum<["TrieStorage"]>]>;
export declare const MutableConfigValueSchema: z.ZodString;
export declare const PeerIdSchema: z.ZodUnknown;
export declare const PeerInfoViewSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    addr: z.ZodString;
    archival: z.ZodBoolean;
    blockhash: z.ZodOptional<z.ZodUnknown>;
    connectionestablishedtimemillis: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    ishighestblockinvalid: z.ZodOptional<z.ZodBoolean>;
    isoutboundpeer: z.ZodOptional<z.ZodBoolean>;
    lasttimepeerrequestedmillis: z.ZodOptional<z.ZodNumber>;
    lasttimereceivedmessagemillis: z.ZodOptional<z.ZodNumber>;
    nonce: z.ZodNumber;
    peerid: z.ZodOptional<z.ZodUnknown>;
    receivedbytespersec: z.ZodOptional<z.ZodNumber>;
    sentbytespersec: z.ZodOptional<z.ZodNumber>;
    trackedshards: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    addr: string;
    archival: boolean;
    nonce: number;
    accountid?: unknown;
    blockhash?: unknown;
    peerid?: unknown;
    connectionestablishedtimemillis?: number | undefined;
    height?: number | undefined;
    ishighestblockinvalid?: boolean | undefined;
    isoutboundpeer?: boolean | undefined;
    lasttimepeerrequestedmillis?: number | undefined;
    lasttimereceivedmessagemillis?: number | undefined;
    receivedbytespersec?: number | undefined;
    sentbytespersec?: number | undefined;
    trackedshards?: unknown[] | undefined;
}, {
    addr: string;
    archival: boolean;
    nonce: number;
    accountid?: unknown;
    blockhash?: unknown;
    peerid?: unknown;
    connectionestablishedtimemillis?: number | undefined;
    height?: number | undefined;
    ishighestblockinvalid?: boolean | undefined;
    isoutboundpeer?: boolean | undefined;
    lasttimepeerrequestedmillis?: number | undefined;
    lasttimereceivedmessagemillis?: number | undefined;
    receivedbytespersec?: number | undefined;
    sentbytespersec?: number | undefined;
    trackedshards?: unknown[] | undefined;
}>;
export declare const PrepareErrorSchema: z.ZodUnion<[z.ZodEnum<["Serialization"]>, z.ZodEnum<["Deserialization"]>, z.ZodEnum<["InternalMemoryDeclared"]>, z.ZodEnum<["GasInstrumentation"]>, z.ZodEnum<["StackHeightInstrumentation"]>, z.ZodEnum<["Instantiate"]>, z.ZodEnum<["Memory"]>, z.ZodEnum<["TooManyFunctions"]>, z.ZodEnum<["TooManyLocals"]>]>;
export declare const Rangeofuint64Schema: z.ZodObject<{
    end: z.ZodNumber;
    start: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    end: number;
    start: number;
}, {
    end: number;
    start: number;
}>;
export declare const RpcClientConfigRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcClientConfigResponseSchema: z.ZodObject<{
    archive: z.ZodBoolean;
    blockfetchhorizon: z.ZodOptional<z.ZodNumber>;
    blockheaderfetchhorizon: z.ZodOptional<z.ZodNumber>;
    blockproductiontrackingdelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    catchupstepperiod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    chainid: z.ZodOptional<z.ZodString>;
    chunkdistributionnetwork: z.ZodOptional<z.ZodUnknown>;
    chunkrequestretryperiod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    chunkwaitmult: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    clientbackgroundmigrationthreads: z.ZodOptional<z.ZodNumber>;
    doomslugstepperiod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    enablemultilinelogging: z.ZodOptional<z.ZodBoolean>;
    enablestatisticsexport: z.ZodOptional<z.ZodBoolean>;
    epochlength: z.ZodOptional<z.ZodNumber>;
    epochsync: z.ZodOptional<z.ZodUnknown>;
    expectedshutdown: z.ZodOptional<z.ZodUnknown>;
    gc: z.ZodUnknown;
    headersyncexpectedheightpersecond: z.ZodOptional<z.ZodNumber>;
    headersyncinitialtimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    headersyncprogresstimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    headersyncstallbantimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    logsummaryperiod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    logsummarystyle: z.ZodOptional<z.ZodUnknown>;
    maxblockproductiondelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxblockwaitdelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    maxgasburntview: z.ZodOptional<z.ZodNumber>;
    minblockproductiondelay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    minnumpeers: z.ZodOptional<z.ZodNumber>;
    numblockproducerseats: z.ZodOptional<z.ZodNumber>;
    orphanstatewitnessmaxsize: z.ZodOptional<z.ZodNumber>;
    orphanstatewitnesspoolsize: z.ZodOptional<z.ZodNumber>;
    producechunkaddtransactionstimelimit: z.ZodOptional<z.ZodString>;
    produceemptyblocks: z.ZodOptional<z.ZodBoolean>;
    reshardingconfig: z.ZodOptional<z.ZodUnknown>;
    rpcaddr: z.ZodOptional<z.ZodString>;
    saveinvalidwitnesses: z.ZodOptional<z.ZodBoolean>;
    savelatestwitnesses: z.ZodOptional<z.ZodBoolean>;
    savetriechanges: z.ZodOptional<z.ZodBoolean>;
    savetxoutcomes: z.ZodOptional<z.ZodBoolean>;
    skipsyncwait: z.ZodOptional<z.ZodBoolean>;
    statesync: z.ZodOptional<z.ZodUnknown>;
    statesyncenabled: z.ZodOptional<z.ZodBoolean>;
    statesyncexternalbackoff: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    statesyncexternaltimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    statesyncp2ptimeout: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    statesyncretrybackoff: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    synccheckperiod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    syncheightthreshold: z.ZodOptional<z.ZodNumber>;
    syncmaxblockrequests: z.ZodOptional<z.ZodNumber>;
    syncstepperiod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    trackedshardsconfig: z.ZodOptional<z.ZodUnknown>;
    transactionpoolsizelimit: z.ZodOptional<z.ZodNumber>;
    transactionrequesthandlerthreads: z.ZodOptional<z.ZodNumber>;
    trieviewerstatesizelimit: z.ZodOptional<z.ZodNumber>;
    ttlaccountidrouter: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    txroutingheighthorizon: z.ZodOptional<z.ZodNumber>;
    version: z.ZodUnknown;
    viewclientthreads: z.ZodOptional<z.ZodNumber>;
    viewclientthrottleperiod: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    archive: boolean;
    version?: unknown;
    blockfetchhorizon?: number | undefined;
    blockheaderfetchhorizon?: number | undefined;
    blockproductiontrackingdelay?: number[] | undefined;
    catchupstepperiod?: number[] | undefined;
    chainid?: string | undefined;
    chunkdistributionnetwork?: unknown;
    chunkrequestretryperiod?: number[] | undefined;
    chunkwaitmult?: number[] | undefined;
    clientbackgroundmigrationthreads?: number | undefined;
    doomslugstepperiod?: number[] | undefined;
    enablemultilinelogging?: boolean | undefined;
    enablestatisticsexport?: boolean | undefined;
    epochlength?: number | undefined;
    epochsync?: unknown;
    expectedshutdown?: unknown;
    gc?: unknown;
    headersyncexpectedheightpersecond?: number | undefined;
    headersyncinitialtimeout?: number[] | undefined;
    headersyncprogresstimeout?: number[] | undefined;
    headersyncstallbantimeout?: number[] | undefined;
    logsummaryperiod?: number[] | undefined;
    logsummarystyle?: unknown;
    maxblockproductiondelay?: number[] | undefined;
    maxblockwaitdelay?: number[] | undefined;
    maxgasburntview?: number | undefined;
    minblockproductiondelay?: number[] | undefined;
    minnumpeers?: number | undefined;
    numblockproducerseats?: number | undefined;
    orphanstatewitnessmaxsize?: number | undefined;
    orphanstatewitnesspoolsize?: number | undefined;
    producechunkaddtransactionstimelimit?: string | undefined;
    produceemptyblocks?: boolean | undefined;
    reshardingconfig?: unknown;
    rpcaddr?: string | undefined;
    saveinvalidwitnesses?: boolean | undefined;
    savelatestwitnesses?: boolean | undefined;
    savetriechanges?: boolean | undefined;
    savetxoutcomes?: boolean | undefined;
    skipsyncwait?: boolean | undefined;
    statesync?: unknown;
    statesyncenabled?: boolean | undefined;
    statesyncexternalbackoff?: number[] | undefined;
    statesyncexternaltimeout?: number[] | undefined;
    statesyncp2ptimeout?: number[] | undefined;
    statesyncretrybackoff?: number[] | undefined;
    synccheckperiod?: number[] | undefined;
    syncheightthreshold?: number | undefined;
    syncmaxblockrequests?: number | undefined;
    syncstepperiod?: number[] | undefined;
    trackedshardsconfig?: unknown;
    transactionpoolsizelimit?: number | undefined;
    transactionrequesthandlerthreads?: number | undefined;
    trieviewerstatesizelimit?: number | undefined;
    ttlaccountidrouter?: number[] | undefined;
    txroutingheighthorizon?: number | undefined;
    viewclientthreads?: number | undefined;
    viewclientthrottleperiod?: number[] | undefined;
}, {
    archive: boolean;
    version?: unknown;
    blockfetchhorizon?: number | undefined;
    blockheaderfetchhorizon?: number | undefined;
    blockproductiontrackingdelay?: number[] | undefined;
    catchupstepperiod?: number[] | undefined;
    chainid?: string | undefined;
    chunkdistributionnetwork?: unknown;
    chunkrequestretryperiod?: number[] | undefined;
    chunkwaitmult?: number[] | undefined;
    clientbackgroundmigrationthreads?: number | undefined;
    doomslugstepperiod?: number[] | undefined;
    enablemultilinelogging?: boolean | undefined;
    enablestatisticsexport?: boolean | undefined;
    epochlength?: number | undefined;
    epochsync?: unknown;
    expectedshutdown?: unknown;
    gc?: unknown;
    headersyncexpectedheightpersecond?: number | undefined;
    headersyncinitialtimeout?: number[] | undefined;
    headersyncprogresstimeout?: number[] | undefined;
    headersyncstallbantimeout?: number[] | undefined;
    logsummaryperiod?: number[] | undefined;
    logsummarystyle?: unknown;
    maxblockproductiondelay?: number[] | undefined;
    maxblockwaitdelay?: number[] | undefined;
    maxgasburntview?: number | undefined;
    minblockproductiondelay?: number[] | undefined;
    minnumpeers?: number | undefined;
    numblockproducerseats?: number | undefined;
    orphanstatewitnessmaxsize?: number | undefined;
    orphanstatewitnesspoolsize?: number | undefined;
    producechunkaddtransactionstimelimit?: string | undefined;
    produceemptyblocks?: boolean | undefined;
    reshardingconfig?: unknown;
    rpcaddr?: string | undefined;
    saveinvalidwitnesses?: boolean | undefined;
    savelatestwitnesses?: boolean | undefined;
    savetriechanges?: boolean | undefined;
    savetxoutcomes?: boolean | undefined;
    skipsyncwait?: boolean | undefined;
    statesync?: unknown;
    statesyncenabled?: boolean | undefined;
    statesyncexternalbackoff?: number[] | undefined;
    statesyncexternaltimeout?: number[] | undefined;
    statesyncp2ptimeout?: number[] | undefined;
    statesyncretrybackoff?: number[] | undefined;
    synccheckperiod?: number[] | undefined;
    syncheightthreshold?: number | undefined;
    syncmaxblockrequests?: number | undefined;
    syncstepperiod?: number[] | undefined;
    trackedshardsconfig?: unknown;
    transactionpoolsizelimit?: number | undefined;
    transactionrequesthandlerthreads?: number | undefined;
    trieviewerstatesizelimit?: number | undefined;
    ttlaccountidrouter?: number[] | undefined;
    txroutingheighthorizon?: number | undefined;
    viewclientthreads?: number | undefined;
    viewclientthrottleperiod?: number[] | undefined;
}>;
export declare const RpcCongestionLevelRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcCongestionLevelResponseSchema: z.ZodObject<{
    congestionlevel: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    congestionlevel?: number | undefined;
}, {
    congestionlevel?: number | undefined;
}>;
export declare const RpcErrorSchema: z.ZodObject<{
    cause: z.ZodOptional<z.ZodUnknown>;
    code: z.ZodNumber;
    data: z.ZodOptional<z.ZodUnknown>;
    message: z.ZodString;
    name: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    code: number;
    message: string;
    data?: unknown;
    cause?: unknown;
    name?: unknown;
}, {
    code: number;
    message: string;
    data?: unknown;
    cause?: unknown;
    name?: unknown;
}>;
export declare const RpcGasPriceRequestSchema: z.ZodObject<{
    blockid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    blockid?: unknown;
}, {
    blockid?: unknown;
}>;
export declare const RpcGasPriceResponseSchema: z.ZodObject<{
    gasprice: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    gasprice?: string | undefined;
}, {
    gasprice?: string | undefined;
}>;
export declare const RpcHealthRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcHealthResponseSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcKnownProducerSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    addr: z.ZodOptional<z.ZodString>;
    peerid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountid?: unknown;
    peerid?: unknown;
    addr?: string | undefined;
}, {
    accountid?: unknown;
    peerid?: unknown;
    addr?: string | undefined;
}>;
export declare const RpcLightClientExecutionProofRequestSchema: z.ZodObject<{
    lightclienthead: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    lightclienthead?: unknown;
}, {
    lightclienthead?: unknown;
}>;
export declare const RpcLightClientExecutionProofResponseSchema: z.ZodObject<{
    blockheaderlite: z.ZodOptional<z.ZodUnknown>;
    blockproof: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    outcomeproof: z.ZodOptional<z.ZodUnknown>;
    outcomerootproof: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    blockheaderlite?: unknown;
    blockproof?: unknown[] | undefined;
    outcomeproof?: unknown;
    outcomerootproof?: unknown[] | undefined;
}, {
    blockheaderlite?: unknown;
    blockproof?: unknown[] | undefined;
    outcomeproof?: unknown;
    outcomerootproof?: unknown[] | undefined;
}>;
export declare const RpcMaintenanceWindowsRequestSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountid?: unknown;
}, {
    accountid?: unknown;
}>;
export declare const RpcPeerInfoSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    addr: z.ZodOptional<z.ZodString>;
    id: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    accountid?: unknown;
    id?: unknown;
    addr?: string | undefined;
}, {
    accountid?: unknown;
    id?: unknown;
    addr?: string | undefined;
}>;
export declare const RpcQueryRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcQueryResponseSchema: z.ZodObject<{
    blockhash: z.ZodOptional<z.ZodUnknown>;
    blockheight: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    blockhash?: unknown;
    blockheight?: number | undefined;
}, {
    blockhash?: unknown;
    blockheight?: number | undefined;
}>;
export declare const RpcRequestValidationErrorKindSchema: z.ZodUnion<[z.ZodObject<{
    info: z.ZodObject<{
        methodname: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        methodname?: string | undefined;
    }, {
        methodname?: string | undefined;
    }>;
    name: z.ZodEnum<["METHOD_NOT_FOUND"]>;
}, "strip", z.ZodTypeAny, {
    name: "METHOD_NOT_FOUND";
    info: {
        methodname?: string | undefined;
    };
}, {
    name: "METHOD_NOT_FOUND";
    info: {
        methodname?: string | undefined;
    };
}>, z.ZodObject<{
    info: z.ZodObject<{
        errormessage: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        errormessage?: string | undefined;
    }, {
        errormessage?: string | undefined;
    }>;
    name: z.ZodEnum<["PARSE_ERROR"]>;
}, "strip", z.ZodTypeAny, {
    name: "PARSE_ERROR";
    info: {
        errormessage?: string | undefined;
    };
}, {
    name: "PARSE_ERROR";
    info: {
        errormessage?: string | undefined;
    };
}>]>;
export declare const RpcSplitStorageInfoRequestSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const RpcSplitStorageInfoResponseSchema: z.ZodObject<{
    coldheadheight: z.ZodOptional<z.ZodNumber>;
    finalheadheight: z.ZodOptional<z.ZodNumber>;
    headheight: z.ZodOptional<z.ZodNumber>;
    hotdbkind: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    coldheadheight?: number | undefined;
    finalheadheight?: number | undefined;
    headheight?: number | undefined;
    hotdbkind?: string | undefined;
}, {
    coldheadheight?: number | undefined;
    finalheadheight?: number | undefined;
    headheight?: number | undefined;
    hotdbkind?: string | undefined;
}>;
export declare const RuntimeConfigViewSchema: z.ZodObject<{
    accountcreationconfig: z.ZodOptional<z.ZodUnknown>;
    congestioncontrolconfig: z.ZodOptional<z.ZodUnknown>;
    storageamountperbyte: z.ZodOptional<z.ZodString>;
    transactioncosts: z.ZodOptional<z.ZodUnknown>;
    wasmconfig: z.ZodOptional<z.ZodUnknown>;
    witnessconfig: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountcreationconfig?: unknown;
    congestioncontrolconfig?: unknown;
    storageamountperbyte?: string | undefined;
    transactioncosts?: unknown;
    wasmconfig?: unknown;
    witnessconfig?: unknown;
}, {
    accountcreationconfig?: unknown;
    congestioncontrolconfig?: unknown;
    storageamountperbyte?: string | undefined;
    transactioncosts?: unknown;
    wasmconfig?: unknown;
    witnessconfig?: unknown;
}>;
export declare const RuntimeFeesConfigViewSchema: z.ZodObject<{
    actioncreationconfig: z.ZodOptional<z.ZodUnknown>;
    actionreceiptcreationconfig: z.ZodOptional<z.ZodUnknown>;
    burntgasreward: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    datareceiptcreationconfig: z.ZodOptional<z.ZodUnknown>;
    pessimisticgaspriceinflationratio: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    storageusageconfig: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    actioncreationconfig?: unknown;
    actionreceiptcreationconfig?: unknown;
    burntgasreward?: number[] | undefined;
    datareceiptcreationconfig?: unknown;
    pessimisticgaspriceinflationratio?: number[] | undefined;
    storageusageconfig?: unknown;
}, {
    actioncreationconfig?: unknown;
    actionreceiptcreationconfig?: unknown;
    burntgasreward?: number[] | undefined;
    datareceiptcreationconfig?: unknown;
    pessimisticgaspriceinflationratio?: number[] | undefined;
    storageusageconfig?: unknown;
}>;
export declare const ShardIdSchema: z.ZodNumber;
export declare const ShardLayoutSchema: z.ZodUnion<[z.ZodObject<{
    v0: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    v0?: unknown;
}, {
    v0?: unknown;
}>, z.ZodObject<{
    v1: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    v1?: unknown;
}, {
    v1?: unknown;
}>, z.ZodObject<{
    v2: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    v2?: unknown;
}, {
    v2?: unknown;
}>]>;
export declare const ShardLayoutV0Schema: z.ZodObject<{
    numshards: z.ZodOptional<z.ZodNumber>;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: number;
    numshards?: number | undefined;
}, {
    version: number;
    numshards?: number | undefined;
}>;
export declare const ShardLayoutV1Schema: z.ZodObject<{
    boundaryaccounts: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    shardssplitmap: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodUnknown, "many">, "many">>;
    toparentshardmap: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: number;
    boundaryaccounts?: unknown[] | undefined;
    shardssplitmap?: unknown[][] | undefined;
    toparentshardmap?: unknown[] | undefined;
}, {
    version: number;
    boundaryaccounts?: unknown[] | undefined;
    shardssplitmap?: unknown[][] | undefined;
    toparentshardmap?: unknown[] | undefined;
}>;
export declare const ShardLayoutV2Schema: z.ZodObject<{
    boundaryaccounts: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    idtoindexmap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    indextoidmap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    shardids: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    shardsparentmap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    shardssplitmap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: number;
    boundaryaccounts?: unknown[] | undefined;
    shardssplitmap?: Record<string, unknown> | undefined;
    idtoindexmap?: Record<string, unknown> | undefined;
    indextoidmap?: Record<string, unknown> | undefined;
    shardids?: unknown[] | undefined;
    shardsparentmap?: Record<string, unknown> | undefined;
}, {
    version: number;
    boundaryaccounts?: unknown[] | undefined;
    shardssplitmap?: Record<string, unknown> | undefined;
    idtoindexmap?: Record<string, unknown> | undefined;
    indextoidmap?: Record<string, unknown> | undefined;
    shardids?: unknown[] | undefined;
    shardsparentmap?: Record<string, unknown> | undefined;
}>;
export declare const ShardUIdSchema: z.ZodObject<{
    shardid: z.ZodOptional<z.ZodNumber>;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: number;
    shardid?: number | undefined;
}, {
    version: number;
    shardid?: number | undefined;
}>;
export declare const SignatureSchema: z.ZodString;
export declare const StorageErrorSchema: z.ZodUnion<[z.ZodEnum<["StorageInternalError"]>, z.ZodObject<{
    missingTrieValue: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    missingTrieValue?: unknown;
}, {
    missingTrieValue?: unknown;
}>, z.ZodEnum<["UnexpectedTrieValue"]>, z.ZodObject<{
    storageInconsistentState: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    storageInconsistentState?: string | undefined;
}, {
    storageInconsistentState?: string | undefined;
}>, z.ZodObject<{
    flatStorageBlockNotSupported: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    flatStorageBlockNotSupported?: string | undefined;
}, {
    flatStorageBlockNotSupported?: string | undefined;
}>, z.ZodObject<{
    memTrieLoadingError: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    memTrieLoadingError?: string | undefined;
}, {
    memTrieLoadingError?: string | undefined;
}>]>;
export declare const StorageGetModeSchema: z.ZodEnum<["FlatStorage", "Trie"]>;
export declare const StorageUsageConfigViewSchema: z.ZodObject<{
    numbytesaccount: z.ZodOptional<z.ZodNumber>;
    numextrabytesrecord: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    numbytesaccount?: number | undefined;
    numextrabytesrecord?: number | undefined;
}, {
    numbytesaccount?: number | undefined;
    numextrabytesrecord?: number | undefined;
}>;
export declare const SyncCheckpointSchema: z.ZodEnum<["genesis", "earliest_available"]>;
export declare const SyncConfigSchema: z.ZodUnion<[z.ZodEnum<["Peers"]>, z.ZodObject<{
    externalStorage: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    externalStorage?: unknown;
}, {
    externalStorage?: unknown;
}>]>;
export declare const Tier1ProxyViewSchema: z.ZodObject<{
    addr: z.ZodString;
    peerid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    addr: string;
    peerid?: unknown;
}, {
    addr: string;
    peerid?: unknown;
}>;
export declare const TrackedShardsConfigSchema: z.ZodUnion<[z.ZodEnum<["NoShards"]>, z.ZodObject<{
    shards: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    shards?: unknown[] | undefined;
}, {
    shards?: unknown[] | undefined;
}>, z.ZodEnum<["AllShards"]>, z.ZodObject<{
    shadowValidator: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    shadowValidator?: unknown;
}, {
    shadowValidator?: unknown;
}>, z.ZodObject<{
    schedule: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodUnknown, "many">, "many">>;
}, "strip", z.ZodTypeAny, {
    schedule?: unknown[][] | undefined;
}, {
    schedule?: unknown[][] | undefined;
}>, z.ZodObject<{
    accounts: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
}, "strip", z.ZodTypeAny, {
    accounts?: unknown[] | undefined;
}, {
    accounts?: unknown[] | undefined;
}>]>;
export declare const VMConfigViewSchema: z.ZodObject<{
    discardcustomsections: z.ZodOptional<z.ZodBoolean>;
    ethimplicitaccounts: z.ZodOptional<z.ZodBoolean>;
    extcosts: z.ZodOptional<z.ZodUnknown>;
    fixcontractloadingcost: z.ZodOptional<z.ZodBoolean>;
    globalcontracthostfns: z.ZodOptional<z.ZodBoolean>;
    growmemcost: z.ZodOptional<z.ZodNumber>;
    implicitaccountcreation: z.ZodOptional<z.ZodBoolean>;
    limitconfig: z.ZodOptional<z.ZodUnknown>;
    reftypesbulkmemory: z.ZodOptional<z.ZodBoolean>;
    regularopcost: z.ZodOptional<z.ZodNumber>;
    saturatingfloattoint: z.ZodOptional<z.ZodBoolean>;
    storagegetmode: z.ZodOptional<z.ZodUnknown>;
    vmkind: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    discardcustomsections?: boolean | undefined;
    ethimplicitaccounts?: boolean | undefined;
    extcosts?: unknown;
    fixcontractloadingcost?: boolean | undefined;
    globalcontracthostfns?: boolean | undefined;
    growmemcost?: number | undefined;
    implicitaccountcreation?: boolean | undefined;
    limitconfig?: unknown;
    reftypesbulkmemory?: boolean | undefined;
    regularopcost?: number | undefined;
    saturatingfloattoint?: boolean | undefined;
    storagegetmode?: unknown;
    vmkind?: unknown;
}, {
    discardcustomsections?: boolean | undefined;
    ethimplicitaccounts?: boolean | undefined;
    extcosts?: unknown;
    fixcontractloadingcost?: boolean | undefined;
    globalcontracthostfns?: boolean | undefined;
    growmemcost?: number | undefined;
    implicitaccountcreation?: boolean | undefined;
    limitconfig?: unknown;
    reftypesbulkmemory?: boolean | undefined;
    regularopcost?: number | undefined;
    saturatingfloattoint?: boolean | undefined;
    storagegetmode?: unknown;
    vmkind?: unknown;
}>;
export declare const VMKindSchema: z.ZodUnion<[z.ZodEnum<["Wasmer0"]>, z.ZodEnum<["Wasmtime"]>, z.ZodEnum<["Wasmer2"]>, z.ZodEnum<["NearVm"]>, z.ZodEnum<["NearVm2"]>]>;
export declare const VersionSchema: z.ZodObject<{
    build: z.ZodString;
    commit: z.ZodString;
    rustcversion: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
}, "strip", z.ZodTypeAny, {
    version: string;
    build: string;
    commit: string;
    rustcversion?: string | undefined;
}, {
    version: string;
    build: string;
    commit: string;
    rustcversion?: string | undefined;
}>;
export declare const WasmTrapSchema: z.ZodUnion<[z.ZodEnum<["Unreachable"]>, z.ZodEnum<["IncorrectCallIndirectSignature"]>, z.ZodEnum<["MemoryOutOfBounds"]>, z.ZodEnum<["CallIndirectOOB"]>, z.ZodEnum<["IllegalArithmetic"]>, z.ZodEnum<["MisalignedAtomicAccess"]>, z.ZodEnum<["IndirectCallToNull"]>, z.ZodEnum<["StackOverflow"]>, z.ZodEnum<["GenericTrap"]>]>;
export declare const WitnessConfigViewSchema: z.ZodObject<{
    combinedtransactionssizelimit: z.ZodOptional<z.ZodNumber>;
    mainstorageproofsizesoftlimit: z.ZodOptional<z.ZodNumber>;
    newtransactionsvalidationstatesizesoftlimit: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    combinedtransactionssizelimit?: number | undefined;
    mainstorageproofsizesoftlimit?: number | undefined;
    newtransactionsvalidationstatesizesoftlimit?: number | undefined;
}, {
    combinedtransactionssizelimit?: number | undefined;
    mainstorageproofsizesoftlimit?: number | undefined;
    newtransactionsvalidationstatesizesoftlimit?: number | undefined;
}>;
