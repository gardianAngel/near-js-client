/**
 * Validated TypeScript types for NEAR Protocol JSON-RPC API
 * Generated from actual API responses on 2025-07-10T04:41:31.878Z
 *
 * These types are based on real NEAR Protocol RPC responses and are guaranteed to work.
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
    nodeKey?: null;
    nodePublicKey: string;
    protocolVersion: number;
    rpcAddr: string;
    syncInfo: {
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
    };
    uptimeSec: number;
    validatorAccountId?: null;
    validatorPublicKey?: null;
    validators: any[];
    version: {
        build: string;
        commit: string;
        rustcVersion: string;
        version: string;
    };
}
export interface BlockResponse {
    author: string;
    chunks: any[];
    header: {
        approvals: string[];
        blockBodyHash: string;
        blockMerkleRoot: string;
        blockOrdinal: number;
        challengesResult: any[];
        challengesRoot: string;
        chunkEndorsements: any[];
        chunkHeadersRoot: string;
        chunkMask: boolean[];
        chunkReceiptsRoot: string;
        chunkTxRoot: string;
        chunksIncluded: number;
        epochId: string;
        epochSyncDataHash?: null;
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
        validatorProposals: any[];
        validatorReward: string;
    };
}
export interface GasPriceResponse {
    gasPrice: string;
}
export interface NetworkInfoResponse {
    activePeers: any[];
    knownProducers: any[];
    numActivePeers: number;
    peerMaxCount: number;
    receivedBytesPerSec: number;
    sentBytesPerSec: number;
}
export interface QueryResponse {
    amount: string;
    blockHash: string;
    blockHeight: number;
    codeHash: string;
    locked: string;
    storagePaidAt: number;
    storageUsage: number;
}
export interface EXPERIMENTALProtocolConfigResponse {
    avgHiddenValidatorSeatsPerShard: number[];
    blockProducerKickoutThreshold: number;
    chainId: string;
    chunkProducerKickoutThreshold: number;
    chunkValidatorOnlyKickoutThreshold: number;
    dynamicResharding: boolean;
    epochLength: number;
    fishermenThreshold: string;
    gasLimit: number;
    gasPriceAdjustmentRate: number[];
    genesisHeight: number;
    genesisTime: string;
    maxGasPrice: string;
    maxInflationRate: number[];
    maxKickoutStakePerc: number;
    minGasPrice: string;
    minimumStakeDivisor: number;
    minimumStakeRatio: number[];
    minimumValidatorsPerShard: number;
    numBlockProducerSeats: number;
    numBlockProducerSeatsPerShard: number[];
    numBlocksPerYear: number;
    onlineMaxThreshold: number[];
    onlineMinThreshold: number[];
    protocolRewardRate: number[];
    protocolTreasuryAccount: string;
    protocolUpgradeStakeThreshold: number[];
    protocolVersion: number;
    runtimeConfig: {
        accountCreationConfig: {
            minAllowedTopLevelAccountLength: number;
            registrarAccountId: string;
        };
        congestionControlConfig: {
            allowedShardOutgoingGas: number;
            maxCongestionIncomingGas: number;
            maxCongestionMemoryConsumption: number;
            maxCongestionMissedChunks: number;
            maxCongestionOutgoingGas: number;
            maxOutgoingGas: number;
            maxTxGas: number;
            minOutgoingGas: number;
            minTxGas: number;
            outgoingReceiptsBigSizeLimit: number;
            outgoingReceiptsUsualSizeLimit: number;
            rejectTxCongestionThreshold: number;
        };
        storageAmountPerByte: string;
        transactionCosts: {
            actionCreationConfig: {
                addKeyCost: {
                    fullAccessCost: {
                        execution: number;
                        sendNotSir: number;
                        sendSir: number;
                    };
                    functionCallCost: {
                        execution: number;
                        sendNotSir: number;
                        sendSir: number;
                    };
                    functionCallCostPerByte: {
                        execution: number;
                        sendNotSir: number;
                        sendSir: number;
                    };
                };
                createAccountCost: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
                delegateCost: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
                deleteAccountCost: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
                deleteKeyCost: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
                deployContractCost: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
                deployContractCostPerByte: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
                functionCallCost: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
                functionCallCostPerByte: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
                stakeCost: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
                transferCost: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
            };
            actionReceiptCreationConfig: {
                execution: number;
                sendNotSir: number;
                sendSir: number;
            };
            burntGasReward: number[];
            dataReceiptCreationConfig: {
                baseCost: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
                costPerByte: {
                    execution: number;
                    sendNotSir: number;
                    sendSir: number;
                };
            };
            pessimisticGasPriceInflationRatio: number[];
            storageUsageConfig: {
                numBytesAccount: number;
                numExtraBytesRecord: number;
            };
        };
        wasmConfig: {
            discardCustomSections: boolean;
            ethImplicitAccounts: boolean;
            extCosts: {
                altBn128G1MultiexpBase: number;
                altBn128G1MultiexpElement: number;
                altBn128G1SumBase: number;
                altBn128G1SumElement: number;
                altBn128PairingCheckBase: number;
                altBn128PairingCheckElement: number;
                base: number;
                bls12381G1MultiexpBase: number;
                bls12381G1MultiexpElement: number;
                bls12381G2MultiexpBase: number;
                bls12381G2MultiexpElement: number;
                bls12381MapFp2ToG2Base: number;
                bls12381MapFp2ToG2Element: number;
                bls12381MapFpToG1Base: number;
                bls12381MapFpToG1Element: number;
                bls12381P1DecompressBase: number;
                bls12381P1DecompressElement: number;
                bls12381P1SumBase: number;
                bls12381P1SumElement: number;
                bls12381P2DecompressBase: number;
                bls12381P2DecompressElement: number;
                bls12381P2SumBase: number;
                bls12381P2SumElement: number;
                bls12381PairingBase: number;
                bls12381PairingElement: number;
                contractCompileBase: number;
                contractCompileBytes: number;
                contractLoadingBase: number;
                contractLoadingBytes: number;
                ecrecoverBase: number;
                ed25519VerifyBase: number;
                ed25519VerifyByte: number;
                keccak256Base: number;
                keccak256Byte: number;
                keccak512Base: number;
                keccak512Byte: number;
                logBase: number;
                logByte: number;
                promiseAndBase: number;
                promiseAndPerPromise: number;
                promiseReturn: number;
                readCachedTrieNode: number;
                readMemoryBase: number;
                readMemoryByte: number;
                readRegisterBase: number;
                readRegisterByte: number;
                ripemd160Base: number;
                ripemd160Block: number;
                sha256Base: number;
                sha256Byte: number;
                storageHasKeyBase: number;
                storageHasKeyByte: number;
                storageIterCreateFromByte: number;
                storageIterCreatePrefixBase: number;
                storageIterCreatePrefixByte: number;
                storageIterCreateRangeBase: number;
                storageIterCreateToByte: number;
                storageIterNextBase: number;
                storageIterNextKeyByte: number;
                storageIterNextValueByte: number;
                storageLargeReadOverheadBase: number;
                storageLargeReadOverheadByte: number;
                storageReadBase: number;
                storageReadKeyByte: number;
                storageReadValueByte: number;
                storageRemoveBase: number;
                storageRemoveKeyByte: number;
                storageRemoveRetValueByte: number;
                storageWriteBase: number;
                storageWriteEvictedByte: number;
                storageWriteKeyByte: number;
                storageWriteValueByte: number;
                touchingTrieNode: number;
                utf16DecodingBase: number;
                utf16DecodingByte: number;
                utf8DecodingBase: number;
                utf8DecodingByte: number;
                validatorStakeBase: number;
                validatorTotalStakeBase: number;
                writeMemoryBase: number;
                writeMemoryByte: number;
                writeRegisterBase: number;
                writeRegisterByte: number;
                yieldCreateBase: number;
                yieldCreateByte: number;
                yieldResumeBase: number;
                yieldResumeByte: number;
            };
            fixContractLoadingCost: boolean;
            globalContractHostFns: boolean;
            growMemCost: number;
            implicitAccountCreation: boolean;
            limitConfig: {
                accountIdValidityRulesVersion: number;
                initialMemoryPages: number;
                maxActionsPerReceipt: number;
                maxArgumentsLength: number;
                maxContractSize: number;
                maxFunctionsNumberPerContract: number;
                maxGasBurnt: number;
                maxLengthMethodName: number;
                maxLengthReturnedData: number;
                maxLengthStorageKey: number;
                maxLengthStorageValue: number;
                maxLocalsPerContract: number;
                maxMemoryPages: number;
                maxNumberBytesMethodNames: number;
                maxNumberInputDataDependencies: number;
                maxNumberLogs: number;
                maxNumberRegisters: number;
                maxPromisesPerFunctionCallAction: number;
                maxReceiptSize: number;
                maxRegisterSize: number;
                maxStackHeight: number;
                maxTotalLogLength: number;
                maxTotalPrepaidGas: number;
                maxTransactionSize: number;
                maxYieldPayloadSize: number;
                perReceiptStorageProofSizeLimit: number;
                registersMemoryLimit: number;
                yieldTimeoutLengthInBlocks: number;
            };
            regularOpCost: number;
            saturatingFloatToInt: boolean;
            storageGetMode: string;
            vmKind: string;
        };
        witnessConfig: {
            combinedTransactionsSizeLimit: number;
            mainStorageProofSizeSoftLimit: number;
            newTransactionsValidationStateSizeSoftLimit: number;
        };
    };
    shardLayout: {
        V2: {
            boundaryAccounts: string[];
            idToIndexMap: {
                1: number;
                4: number;
                5: number;
                6: number;
                7: number;
                8: number;
                9: number;
                10: number;
                11: number;
            };
            indexToIdMap: {
                0: number;
                1: number;
                2: number;
                3: number;
                4: number;
                5: number;
                6: number;
                7: number;
                8: number;
            };
            shardIds: number[];
            shardsParentMap: {
                1: number;
                4: number;
                5: number;
                6: number;
                7: number;
                8: number;
                9: number;
                10: number;
                11: number;
            };
            shardsSplitMap: {
                0: number[];
                1: number[];
                4: number[];
                5: number[];
                6: number[];
                7: number[];
                8: number[];
                9: number[];
            };
            version: number;
        };
    };
    shuffleShardAssignmentForChunkProducers: boolean;
    targetValidatorMandatesPerShard: number;
    transactionValidityPeriod: number;
}
export interface EXPERIMENTALGenesisConfigResponse {
    avgHiddenValidatorSeatsPerShard: number[];
    blockProducerKickoutThreshold: number;
    chainId: string;
    chunkProducerAssignmentChangesLimit: number;
    chunkProducerKickoutThreshold: number;
    chunkValidatorOnlyKickoutThreshold: number;
    dynamicResharding: boolean;
    epochLength: number;
    fishermenThreshold: string;
    gasLimit: number;
    gasPriceAdjustmentRate: number[];
    genesisHeight: number;
    genesisTime: string;
    maxGasPrice: string;
    maxInflationRate: number[];
    maxKickoutStakePerc: number;
    minGasPrice: string;
    minimumStakeDivisor: number;
    minimumStakeRatio: number[];
    minimumValidatorsPerShard: number;
    numBlockProducerSeats: number;
    numBlockProducerSeatsPerShard: number[];
    numBlocksPerYear: number;
    numChunkOnlyProducerSeats: number;
    numChunkProducerSeats: number;
    numChunkValidatorSeats: number;
    onlineMaxThreshold: number[];
    onlineMinThreshold: number[];
    protocolRewardRate: number[];
    protocolTreasuryAccount: string;
    protocolUpgradeStakeThreshold: number[];
    protocolVersion: number;
    shardLayout: {
        V0: {
            numShards: number;
            version: number;
        };
    };
    shuffleShardAssignmentForChunkProducers: boolean;
    targetValidatorMandatesPerShard: number;
    totalSupply: string;
    transactionValidityPeriod: number;
    useProductionConfig: boolean;
    validators: any[];
}
