/**
 * Improved TypeScript types for NEAR Protocol JSON-RPC API
 * Fixed issues:
 * 1. Proper camelCase conversion (codeHash not codehash)
 * 2. Specific types instead of [key: string]: any
 * 3. Proper Zod schemas instead of z.record(z.unknown())
 * 4. Direct method names without redundant groupings
 */
export type AccountId = string;
export type PublicKey = string;
export type CryptoHash = string;
export type BlockHeight = number;
export type BlockHash = string;
export type ShardId = number;
export type Gas = string;
export type Balance = string;
export type Nonce = number;
export type Timestamp = number;
export interface AccountView {
    amount: string;
    codeHash?: string;
    globalContractAccountId?: string;
    globalContractHash?: string;
    locked: string;
    storagePaidAt?: number;
    storageUsage?: number;
}
export interface BroadcastTxAsyncResponse {
    transactionHash: string;
    nodeId: string;
}
export interface BroadcastTxCommitRequest {
    signedTxBase64: string;
}
export interface BroadcastTxCommitResponse {
    transactionHash: string;
    status: TransactionStatus;
    transaction: Transaction;
    receipts: Receipt[];
}
export interface TransactionStatus {
    successValue?: string;
    successReceiptId?: string;
    failure?: {
        errorMessage: string;
        errorType: string;
    };
}
export interface Transaction {
    signerId: string;
    publicKey: string;
    nonce: number;
    receiverId: string;
    actions: Action[];
    signature: string;
    hash: string;
}
export interface Action {
    transfer?: {
        deposit: string;
    };
    createAccount?: {};
    deployContract?: {
        code: string;
    };
    functionCall?: {
        methodName: string;
        args: string;
        gas: string;
        deposit: string;
    };
    stake?: {
        stake: string;
        publicKey: string;
    };
    addKey?: {
        publicKey: string;
        accessKey: AccessKey;
    };
    deleteKey?: {
        publicKey: string;
    };
    deleteAccount?: {
        beneficiaryId: string;
    };
}
export interface AccessKey {
    nonce: number;
    permission: AccessKeyPermission;
}
export type AccessKeyPermission = 'FullAccess' | {
    functionCall: {
        allowance?: string;
        receiverId: string;
        methodNames: string[];
    };
};
export interface Receipt {
    predecessorId: string;
    receiverId: string;
    receiptId: string;
    receipt: {
        action?: {
            signerId: string;
            signerPublicKey: string;
            gasPrice: string;
            outputDataReceivers: DataReceiver[];
            inputDataIds: string[];
            actions: Action[];
        };
        data?: {
            dataId: string;
            data: string;
        };
    };
}
export interface DataReceiver {
    dataId: string;
    receiverId: string;
}
export interface JsonRpcRequest<T = any> {
    jsonrpc: '2.0';
    method: string;
    params: T;
    id: string | number;
}
export interface JsonRpcResponse<T = any> {
    jsonrpc: '2.0';
    result?: T;
    error?: JsonRpcError;
    id: string | number;
}
export interface JsonRpcError {
    code: number;
    message: string;
    data?: any;
}
export type Finality = 'optimistic' | 'near-final' | 'final';
export interface StatusResponse {
    chainId: string;
    genesisHash: string;
    latestProtocolVersion: number;
    nodeKey?: string;
    nodePublicKey: string;
    protocolVersion: number;
    rpcAddr: string;
    syncInfo: SyncInfo;
    uptimeSec: number;
    validatorAccountId?: string;
    validatorPublicKey?: string;
    validators: ValidatorInfo[];
    version: VersionInfo;
}
export interface SyncInfo {
    earliestBlockHash: string;
    earliestBlockHeight: number;
    earliestBlockTime: string;
    epochId: string;
    epochStartHeight: number;
    latestBlockHash: string;
    latestBlockHeight: number;
    latestBlockTime: string;
    latestStateRoot: string;
    syncing: boolean;
}
export interface ValidatorInfo {
    accountId: string;
    publicKey: string;
    stake: string;
}
export interface VersionInfo {
    build: string;
    commit: string;
    rustcVersion: string;
    version: string;
}
export interface BlockResponse {
    author: string;
    chunks: ChunkHeader[];
    header: BlockHeader;
}
export interface BlockHeader {
    approvals: (string | null)[];
    blockBodyHash: string;
    blockMerkleRoot: string;
    blockOrdinal: number;
    challengesResult: ChallengeResult[];
    challengesRoot: string;
    chunkEndorsements: ChunkEndorsement[];
    chunkHeadersRoot: string;
    chunkMask: boolean[];
    chunkReceiptsRoot: string;
    chunkTxRoot: string;
    chunksIncluded: number;
    epochId: string;
    epochSyncDataHash?: string;
    gasPrice: string;
    hash: string;
    height: number;
    lastDsFinalBlock: string;
    lastFinalBlock: string;
    latestProtocolVersion: number;
    nextBpHash: string;
    nextEpochId: string;
    outcomeRoot: string;
    prevHash: string;
    prevHeight: number;
    prevStateRoot: string;
    randomValue: string;
    rentPaid: string;
    signature: string;
    timestamp: number;
    timestampNanosec: string;
    totalSupply: string;
    validatorProposals: ValidatorProposal[];
    validatorReward: string;
}
export interface ChunkHeader {
    balanceBurnt: string;
    chunkHash: string;
    encodedLength: number;
    encodedMerkleRoot: string;
    gasLimit: number;
    gasUsed: number;
    heightCreated: number;
    heightIncluded: number;
    outcomeRoot: string;
    outgoingReceiptsRoot: string;
    prevBlockHash: string;
    prevStateRoot: string;
    rentPaid: string;
    shardId: number;
    signature: string;
    txRoot: string;
    validatorProposals: ValidatorProposal[];
    validatorReward: string;
}
export interface ChallengeResult {
    challengeIndex: number;
    result: string;
}
export interface ChunkEndorsement {
    accountId: string;
    signature: string;
}
export interface ValidatorProposal {
    accountId: string;
    publicKey: string;
    stake: string;
}
export interface GasPriceResponse {
    gasPrice: string;
}
export interface NetworkInfoResponse {
    activePeers: PeerInfo[];
    knownProducers: KnownProducer[];
    numActivePeers: number;
    peerMaxCount: number;
    sentBytesPerSec: number;
    receivedBytesPerSec: number;
    tier1Connections: PeerInfo[];
    tier1AccountsKeys: string[];
    tier1AccountsData: AccountData[];
}
export interface PeerInfo {
    id: string;
    addr: string;
    accountId?: string;
}
export interface KnownProducer {
    accountId: string;
    addr?: string;
    peerId: string;
}
export interface AccountData {
    accountId: string;
    publicKey: string;
    epoch: number;
}
export interface QueryResponse<T = any> {
    blockHash: string;
    blockHeight: number;
    values: T;
}
export interface ViewAccountResponse {
    accountId: string;
    amount: string;
    codeHash: string;
    locked: string;
    storagePaidAt: number;
    storageUsage: number;
}
export interface ViewStateResponse {
    values: KeyValuePair[];
    proof: string[];
}
export interface KeyValuePair {
    key: string;
    value: string;
}
export interface AccessKeyListResponse {
    keys: AccessKeyInfo[];
}
export interface AccessKeyInfo {
    publicKey: string;
    accessKey: AccessKey;
}
export interface EXPERIMENTALProtocolConfigResponse {
    chainId: string;
    genesisHeight: number;
    genesisTime: string;
    epochLength: number;
    maxGasPrice: string;
    minGasPrice: string;
    maxInflationRate: number;
    protocolVersion: number;
    runtimeConfig: RuntimeConfig;
    protocolReward: string;
    maxKickoutStake: string;
    onlineMinThreshold: number;
    onlineMaxThreshold: number;
}
export interface RuntimeConfig {
    storageAmountPerByte: string;
    transactionCosts: TransactionCosts;
    wasmConfig: WasmConfig;
    accountCreationConfig: AccountCreationConfig;
}
export interface TransactionCosts {
    actionCreationConfig: ActionCreationConfig;
    actionReceiptCreationConfig: ActionReceiptCreationConfig;
    dataReceiptCreationConfig: DataReceiptCreationConfig;
    storageUsageConfig: StorageUsageConfig;
}
export interface ActionCreationConfig {
    createAccountCost: Cost;
    deployContractCost: Cost;
    deployContractCostPerByte: Cost;
    functionCallCost: Cost;
    functionCallCostPerByte: Cost;
    transferCost: Cost;
    stakeCost: Cost;
    addKeyCost: Cost;
    deleteKeyCost: Cost;
    deleteAccountCost: Cost;
}
export interface ActionReceiptCreationConfig {
    sendSir: Cost;
    sendNotSir: Cost;
    execution: Cost;
}
export interface DataReceiptCreationConfig {
    baseCost: Cost;
    costPerByte: Cost;
}
export interface StorageUsageConfig {
    numBytesAccount: number;
    numExtraBytesRecord: number;
}
export interface Cost {
    sendSir: number;
    sendNotSir: number;
    execution: number;
}
export interface WasmConfig {
    extCosts: ExtCosts;
    growMemCost: number;
    regularOpCost: number;
    limitConfig: LimitConfig;
}
export interface ExtCosts {
    base: number;
    contractLoadingBase: number;
    contractLoadingBytes: number;
    readMemoryBase: number;
    readMemoryByte: number;
    writeMemoryBase: number;
    writeMemoryByte: number;
    readRegisterBase: number;
    readRegisterByte: number;
    writeRegisterBase: number;
    writeRegisterByte: number;
    utf8DecodingBase: number;
    utf8DecodingByte: number;
    utf16DecodingBase: number;
    utf16DecodingByte: number;
    sha256Base: number;
    sha256Byte: number;
    keccak256Base: number;
    keccak256Byte: number;
    keccak512Base: number;
    keccak512Byte: number;
    logBase: number;
    logByte: number;
    storageWriteBase: number;
    storageWriteKeyByte: number;
    storageWriteValueByte: number;
    storageWriteEvictedByte: number;
    storageReadBase: number;
    storageReadKeyByte: number;
    storageReadValueByte: number;
    storageRemoveBase: number;
    storageRemoveKeyByte: number;
    storageRemoveRetValueByte: number;
    storageHasKeyBase: number;
    storageHasKeyByte: number;
    storageIterCreatePrefixBase: number;
    storageIterCreatePrefixByte: number;
    storageIterCreateRangeBase: number;
    storageIterCreateFromByte: number;
    storageIterCreateToByte: number;
    storageIterNextBase: number;
    storageIterNextKeyByte: number;
    storageIterNextValueByte: number;
    touchingTrieNode: number;
    promiseAndBase: number;
    promiseAndPerPromise: number;
    promiseReturn: number;
    validatorStake: number;
    validatorTotalStake: number;
}
export interface LimitConfig {
    maxGasburnt: number;
    maxStackHeight: number;
    initialMemoryPages: number;
    maxMemoryPages: number;
    registersMemoryLimit: number;
    maxRegisterSize: number;
    maxNumberRegisters: number;
    maxNumberLogs: number;
    maxTotalLogLength: number;
    maxTotalPrepaidGas: number;
    maxActionsPerReceipt: number;
    maxNumberBytesMethodNames: number;
    maxLengthMethodName: number;
    maxArgumentsLength: number;
    maxLengthReturnedData: number;
    maxContractSize: number;
    maxTransactionSize: number;
    maxReceiptSize: number;
    maxTotalTxGas: number;
    maxOutstandingReceiptsMemoeryLimit: number;
}
export interface AccountCreationConfig {
    minAllowedTopLevelAccountLength: number;
    registrarAccountId: string;
}
export interface EXPERIMENTALGenesisConfigResponse {
    protocolVersion: number;
    genesisTime: string;
    chainId: string;
    genesisHeight: number;
    numBlockProducerSeats: number;
    numBlockProducerSeatsPerShard: number[];
    avgHiddenValidatorSeatsPerShard: number[];
    dynamicResharding: boolean;
    protocolUpgradeStakeThreshold: number;
    epochLength: number;
    gasLimit: number;
    minGasPrice: string;
    maxGasPrice: string;
    blockProducerKickoutThreshold: number;
    chunkProducerKickoutThreshold: number;
    onlineMinThreshold: number;
    onlineMaxThreshold: number;
    gasPriceAdjustmentRate: number;
    runtimeConfig: RuntimeConfig;
    validators: GenesisValidator[];
    records: GenesisRecord[];
}
export interface GenesisValidator {
    accountId: string;
    publicKey: string;
    amount: string;
}
export interface GenesisRecord {
    Account?: {
        accountId: string;
        amount: string;
        locked: string;
        codeHash: string;
        storageUsage: number;
    };
    AccessKey?: {
        accountId: string;
        publicKey: string;
        accessKey: AccessKey;
    };
    Contract?: {
        accountId: string;
        code: string;
    };
    Data?: {
        accountId: string;
        dataKey: string;
        value: string;
    };
}
