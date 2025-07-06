"use strict";
/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseGlobalContractActionSchema = exports.TxExecutionStatusSchema = exports.TxExecutionErrorSchema = exports.TransferActionSchema = exports.StakeActionSchema = exports.SignedTransactionViewSchema = exports.SignedTransactionSchema = exports.SignedDelegateActionSchema = exports.RpcTransactionStatusRequestSchema = exports.RpcTransactionResponseSchema = exports.RpcSendTransactionRequestSchema = exports.RpcReceiptResponseSchema = exports.RpcReceiptRequestSchema = exports.ReceiptViewSchema = exports.ReceiptValidationErrorSchema = exports.ReceiptEnumViewSchema = exports.NonDelegateActionSchema = exports.JsonRpcResponseforRpcTransactionResponseandRpcErrorSchema = exports.JsonRpcResponseforRpcReceiptResponseandRpcErrorSchema = exports.JsonRpcRequestfortxSchema = exports.JsonRpcRequestforsendtxSchema = exports.JsonRpcRequestforbroadcasttxcommitSchema = exports.JsonRpcRequestforbroadcasttxasyncSchema = exports.JsonRpcRequestforEXPERIMENTALtxstatusSchema = exports.JsonRpcRequestforEXPERIMENTALreceiptSchema = exports.InvalidTxErrorSchema = exports.FunctionCallActionSchema = exports.FinalExecutionOutcomeWithReceiptViewSchema = exports.DeployGlobalContractActionSchema = exports.DeployContractActionSchema = exports.DeleteKeyActionSchema = exports.DeleteAccountActionSchema = exports.DelegateActionSchema = exports.DataReceiptCreationConfigViewSchema = exports.CreateAccountActionSchema = exports.AddKeyActionSchema = exports.ActionsValidationErrorSchema = exports.ActionViewSchema = exports.ActionErrorKindSchema = exports.ActionErrorSchema = exports.ActionCreationConfigViewSchema = exports.ActionSchema = void 0;
const zod_1 = require("zod");
exports.ActionSchema = zod_1.z.union([zod_1.z.object({
        createAccount: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        deployContract: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        functionCall: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        transfer: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        stake: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        addKey: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        deleteKey: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        deleteAccount: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        delegate: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        deployGlobalContract: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        useGlobalContract: zod_1.z.unknown().optional()
    })]);
exports.ActionCreationConfigViewSchema = zod_1.z.object({
    addkeycost: zod_1.z.unknown().optional(),
    createaccountcost: zod_1.z.unknown().optional(),
    delegatecost: zod_1.z.unknown().optional(),
    deleteaccountcost: zod_1.z.unknown().optional(),
    deletekeycost: zod_1.z.unknown().optional(),
    deploycontractcost: zod_1.z.unknown().optional(),
    deploycontractcostperbyte: zod_1.z.unknown().optional(),
    functioncallcost: zod_1.z.unknown().optional(),
    functioncallcostperbyte: zod_1.z.unknown().optional(),
    stakecost: zod_1.z.unknown().optional(),
    transfercost: zod_1.z.unknown().optional()
});
exports.ActionErrorSchema = zod_1.z.object({
    index: zod_1.z.number().optional(),
    kind: zod_1.z.unknown()
});
exports.ActionErrorKindSchema = zod_1.z.union([zod_1.z.object({
        accountAlreadyExists: zod_1.z.object({
            accountid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        accountDoesNotExist: zod_1.z.object({
            accountid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        createAccountOnlyByRegistrar: zod_1.z.object({
            accountid: zod_1.z.unknown().optional(),
            predecessorid: zod_1.z.unknown().optional(),
            registraraccountid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        createAccountNotAllowed: zod_1.z.object({
            accountid: zod_1.z.unknown().optional(),
            predecessorid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        actorNoPermission: zod_1.z.object({
            accountid: zod_1.z.unknown().optional(),
            actorid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        deleteKeyDoesNotExist: zod_1.z.object({
            accountid: zod_1.z.unknown().optional(),
            publickey: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        addKeyAlreadyExists: zod_1.z.object({
            accountid: zod_1.z.unknown().optional(),
            publickey: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        deleteAccountStaking: zod_1.z.object({
            accountid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        lackBalanceForState: zod_1.z.object({
            accountid: zod_1.z.unknown().optional(),
            amount: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        triesToUnstake: zod_1.z.object({
            accountid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        triesToStake: zod_1.z.object({
            accountid: zod_1.z.unknown().optional(),
            balance: zod_1.z.string(),
            locked: zod_1.z.string(),
            stake: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        insufficientStake: zod_1.z.object({
            accountid: zod_1.z.unknown().optional(),
            minimumstake: zod_1.z.string().optional(),
            stake: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        functionCallError: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        newReceiptValidationError: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        onlyImplicitAccountCreationAllowed: zod_1.z.object({
            accountid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        deleteAccountWithLargeState: zod_1.z.object({
            accountid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.enum(['DelegateActionInvalidSignature']), zod_1.z.object({
        delegateActionSenderDoesNotMatchTxReceiver: zod_1.z.object({
            receiverid: zod_1.z.unknown().optional(),
            senderid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.enum(['DelegateActionExpired']), zod_1.z.object({
        delegateActionAccessKeyError: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        delegateActionInvalidNonce: zod_1.z.object({
            aknonce: zod_1.z.number().optional(),
            delegatenonce: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        delegateActionNonceTooLarge: zod_1.z.object({
            delegatenonce: zod_1.z.number().optional(),
            upperbound: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        globalContractDoesNotExist: zod_1.z.object({
            identifier: zod_1.z.unknown()
        }).optional()
    })]);
exports.ActionViewSchema = zod_1.z.union([zod_1.z.enum(['CreateAccount']), zod_1.z.object({
        deployContract: zod_1.z.object({
            code: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        functionCall: zod_1.z.object({
            args: zod_1.z.string(),
            deposit: zod_1.z.string(),
            gas: zod_1.z.number(),
            methodname: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.object({
        transfer: zod_1.z.object({
            deposit: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        stake: zod_1.z.object({
            publickey: zod_1.z.unknown().optional(),
            stake: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        addKey: zod_1.z.object({
            accesskey: zod_1.z.unknown().optional(),
            publickey: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        deleteKey: zod_1.z.object({
            publickey: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        deleteAccount: zod_1.z.object({
            beneficiaryid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        delegate: zod_1.z.object({
            delegateaction: zod_1.z.unknown().optional(),
            signature: zod_1.z.unknown()
        }).optional()
    }), zod_1.z.object({
        deployGlobalContract: zod_1.z.object({
            code: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        deployGlobalContractByAccountId: zod_1.z.object({
            code: zod_1.z.string()
        }).optional()
    }), zod_1.z.object({
        useGlobalContract: zod_1.z.object({
            codehash: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        useGlobalContractByAccountId: zod_1.z.object({
            accountid: zod_1.z.unknown().optional()
        }).optional()
    })]);
exports.ActionsValidationErrorSchema = zod_1.z.union([zod_1.z.enum(['DeleteActionMustBeFinal']), zod_1.z.object({
        totalPrepaidGasExceeded: zod_1.z.object({
            limit: zod_1.z.number(),
            totalprepaidgas: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        totalNumberOfActionsExceeded: zod_1.z.object({
            limit: zod_1.z.number(),
            totalnumberofactions: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        addKeyMethodNamesNumberOfBytesExceeded: zod_1.z.object({
            limit: zod_1.z.number(),
            totalnumberofbytes: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        addKeyMethodNameLengthExceeded: zod_1.z.object({
            length: zod_1.z.number(),
            limit: zod_1.z.number()
        }).optional()
    }), zod_1.z.enum(['IntegerOverflow']), zod_1.z.object({
        invalidAccountId: zod_1.z.object({
            accountid: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.object({
        contractSizeExceeded: zod_1.z.object({
            limit: zod_1.z.number(),
            size: zod_1.z.number()
        }).optional()
    }), zod_1.z.object({
        functionCallMethodNameLengthExceeded: zod_1.z.object({
            length: zod_1.z.number(),
            limit: zod_1.z.number()
        }).optional()
    }), zod_1.z.object({
        functionCallArgumentsLengthExceeded: zod_1.z.object({
            length: zod_1.z.number(),
            limit: zod_1.z.number()
        }).optional()
    }), zod_1.z.object({
        unsuitableStakingKey: zod_1.z.object({
            publickey: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.enum(['FunctionCallZeroAttachedGas']), zod_1.z.enum(['DelegateActionMustBeOnlyOne']), zod_1.z.object({
        unsupportedProtocolFeature: zod_1.z.object({
            protocolfeature: zod_1.z.string().optional(),
            version: zod_1.z.number()
        }).optional()
    })]);
exports.AddKeyActionSchema = zod_1.z.object({
    accesskey: zod_1.z.unknown().optional(),
    publickey: zod_1.z.unknown().optional()
});
exports.CreateAccountActionSchema = zod_1.z.record(zod_1.z.unknown());
exports.DataReceiptCreationConfigViewSchema = zod_1.z.object({
    basecost: zod_1.z.unknown().optional(),
    costperbyte: zod_1.z.unknown().optional()
});
exports.DelegateActionSchema = zod_1.z.object({
    actions: zod_1.z.array(zod_1.z.unknown()),
    maxblockheight: zod_1.z.number().optional(),
    nonce: zod_1.z.number(),
    publickey: zod_1.z.unknown().optional(),
    receiverid: zod_1.z.unknown().optional(),
    senderid: zod_1.z.unknown().optional()
});
exports.DeleteAccountActionSchema = zod_1.z.object({
    beneficiaryid: zod_1.z.unknown().optional()
});
exports.DeleteKeyActionSchema = zod_1.z.object({
    publickey: zod_1.z.unknown().optional()
});
exports.DeployContractActionSchema = zod_1.z.object({
    code: zod_1.z.string()
});
exports.DeployGlobalContractActionSchema = zod_1.z.object({
    code: zod_1.z.string(),
    deploymode: zod_1.z.unknown().optional()
});
exports.FinalExecutionOutcomeWithReceiptViewSchema = zod_1.z.object({
    receipts: zod_1.z.array(zod_1.z.unknown()),
    receiptsoutcome: zod_1.z.array(zod_1.z.unknown()).optional(),
    status: zod_1.z.unknown(),
    transaction: zod_1.z.unknown(),
    transactionoutcome: zod_1.z.unknown().optional()
});
exports.FunctionCallActionSchema = zod_1.z.object({
    args: zod_1.z.string(),
    deposit: zod_1.z.string(),
    gas: zod_1.z.number(),
    methodname: zod_1.z.string().optional()
});
exports.InvalidTxErrorSchema = zod_1.z.union([zod_1.z.object({
        invalidAccessKeyError: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        invalidSignerId: zod_1.z.object({
            signerid: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.object({
        signerDoesNotExist: zod_1.z.object({
            signerid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        invalidNonce: zod_1.z.object({
            aknonce: zod_1.z.number().optional(),
            txnonce: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        nonceTooLarge: zod_1.z.object({
            txnonce: zod_1.z.number().optional(),
            upperbound: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        invalidReceiverId: zod_1.z.object({
            receiverid: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.enum(['InvalidSignature']), zod_1.z.object({
        notEnoughBalance: zod_1.z.object({
            balance: zod_1.z.string(),
            cost: zod_1.z.string(),
            signerid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        lackBalanceForState: zod_1.z.object({
            amount: zod_1.z.string(),
            signerid: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.enum(['CostOverflow']), zod_1.z.enum(['InvalidChain']), zod_1.z.enum(['Expired']), zod_1.z.object({
        actionsValidation: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        transactionSizeExceeded: zod_1.z.object({
            limit: zod_1.z.number(),
            size: zod_1.z.number()
        }).optional()
    }), zod_1.z.enum(['InvalidTransactionVersion']), zod_1.z.object({
        storageError: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        shardCongested: zod_1.z.object({
            congestionlevel: zod_1.z.number().optional(),
            shardid: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        shardStuck: zod_1.z.object({
            missedchunks: zod_1.z.number().optional(),
            shardid: zod_1.z.number().optional()
        }).optional()
    })]);
exports.JsonRpcRequestforEXPERIMENTALreceiptSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_receipt']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforEXPERIMENTALtxstatusSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['EXPERIMENTAL_tx_status']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforbroadcasttxasyncSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['broadcast_tx_async']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforbroadcasttxcommitSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['broadcast_tx_commit']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestforsendtxSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['send_tx']),
    params: zod_1.z.unknown()
});
exports.JsonRpcRequestfortxSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string(),
    method: zod_1.z.enum(['tx']),
    params: zod_1.z.unknown()
});
exports.JsonRpcResponseforRpcReceiptResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.JsonRpcResponseforRpcTransactionResponseandRpcErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    jsonrpc: zod_1.z.string()
});
exports.NonDelegateActionSchema = zod_1.z.unknown();
exports.ReceiptEnumViewSchema = zod_1.z.union([zod_1.z.object({
        action: zod_1.z.object({
            actions: zod_1.z.array(zod_1.z.unknown()),
            gasprice: zod_1.z.string().optional(),
            inputdataids: zod_1.z.array(zod_1.z.unknown()).optional(),
            ispromiseyield: zod_1.z.boolean().optional(),
            outputdatareceivers: zod_1.z.array(zod_1.z.unknown()).optional(),
            signerid: zod_1.z.unknown().optional(),
            signerpublickey: zod_1.z.unknown().optional()
        }).optional()
    }), zod_1.z.object({
        data: zod_1.z.object({
            data: zod_1.z.string().optional(),
            dataid: zod_1.z.unknown().optional(),
            ispromiseresume: zod_1.z.boolean().optional()
        }).optional()
    }), zod_1.z.object({
        globalContractDistribution: zod_1.z.object({
            alreadydeliveredshards: zod_1.z.array(zod_1.z.unknown()).optional(),
            code: zod_1.z.string(),
            id: zod_1.z.unknown(),
            targetshard: zod_1.z.unknown().optional()
        }).optional()
    })]);
exports.ReceiptValidationErrorSchema = zod_1.z.union([zod_1.z.object({
        invalidPredecessorId: zod_1.z.object({
            accountid: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.object({
        invalidReceiverId: zod_1.z.object({
            accountid: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.object({
        invalidSignerId: zod_1.z.object({
            accountid: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.object({
        invalidDataReceiverId: zod_1.z.object({
            accountid: zod_1.z.string().optional()
        }).optional()
    }), zod_1.z.object({
        returnedValueLengthExceeded: zod_1.z.object({
            length: zod_1.z.number(),
            limit: zod_1.z.number()
        }).optional()
    }), zod_1.z.object({
        numberInputDataDependenciesExceeded: zod_1.z.object({
            limit: zod_1.z.number(),
            numberofinputdatadependencies: zod_1.z.number().optional()
        }).optional()
    }), zod_1.z.object({
        actionsValidation: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        receiptSizeExceeded: zod_1.z.object({
            limit: zod_1.z.number(),
            size: zod_1.z.number()
        }).optional()
    })]);
exports.ReceiptViewSchema = zod_1.z.object({
    predecessorid: zod_1.z.unknown().optional(),
    priority: zod_1.z.number().optional(),
    receipt: zod_1.z.unknown(),
    receiptid: zod_1.z.unknown().optional(),
    receiverid: zod_1.z.unknown().optional()
});
exports.RpcReceiptRequestSchema = zod_1.z.object({
    receiptid: zod_1.z.unknown().optional()
});
exports.RpcReceiptResponseSchema = zod_1.z.object({
    predecessorid: zod_1.z.unknown().optional(),
    priority: zod_1.z.number().optional(),
    receipt: zod_1.z.unknown(),
    receiptid: zod_1.z.unknown().optional(),
    receiverid: zod_1.z.unknown().optional()
});
exports.RpcSendTransactionRequestSchema = zod_1.z.object({
    signedtxbase64: zod_1.z.unknown().optional(),
    waituntil: zod_1.z.unknown().optional()
});
exports.RpcTransactionResponseSchema = zod_1.z.object({
    finalexecutionstatus: zod_1.z.unknown().optional()
});
exports.RpcTransactionStatusRequestSchema = zod_1.z.object({
    waituntil: zod_1.z.unknown().optional()
});
exports.SignedDelegateActionSchema = zod_1.z.object({
    delegateaction: zod_1.z.unknown().optional(),
    signature: zod_1.z.unknown()
});
exports.SignedTransactionSchema = zod_1.z.string();
exports.SignedTransactionViewSchema = zod_1.z.object({
    actions: zod_1.z.array(zod_1.z.unknown()),
    hash: zod_1.z.unknown(),
    nonce: zod_1.z.number(),
    priorityfee: zod_1.z.number().optional(),
    publickey: zod_1.z.unknown().optional(),
    receiverid: zod_1.z.unknown().optional(),
    signature: zod_1.z.unknown(),
    signerid: zod_1.z.unknown().optional()
});
exports.StakeActionSchema = zod_1.z.object({
    publickey: zod_1.z.unknown().optional(),
    stake: zod_1.z.string()
});
exports.TransferActionSchema = zod_1.z.object({
    deposit: zod_1.z.string()
});
exports.TxExecutionErrorSchema = zod_1.z.union([zod_1.z.object({
        actionError: zod_1.z.unknown().optional()
    }), zod_1.z.object({
        invalidTxError: zod_1.z.unknown().optional()
    })]);
exports.TxExecutionStatusSchema = zod_1.z.union([zod_1.z.enum(['NONE']), zod_1.z.enum(['INCLUDED']), zod_1.z.enum(['EXECUTED_OPTIMISTIC']), zod_1.z.enum(['INCLUDED_FINAL']), zod_1.z.enum(['EXECUTED']), zod_1.z.enum(['FINAL'])]);
exports.UseGlobalContractActionSchema = zod_1.z.object({
    contractidentifier: zod_1.z.unknown().optional()
});
