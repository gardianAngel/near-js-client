/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
import { z } from 'zod';
export declare const ActionSchema: z.ZodUnion<[z.ZodObject<{
    createAccount: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    createAccount?: unknown;
}, {
    createAccount?: unknown;
}>, z.ZodObject<{
    deployContract: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    deployContract?: unknown;
}, {
    deployContract?: unknown;
}>, z.ZodObject<{
    functionCall: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    functionCall?: unknown;
}, {
    functionCall?: unknown;
}>, z.ZodObject<{
    transfer: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    transfer?: unknown;
}, {
    transfer?: unknown;
}>, z.ZodObject<{
    stake: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    stake?: unknown;
}, {
    stake?: unknown;
}>, z.ZodObject<{
    addKey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    addKey?: unknown;
}, {
    addKey?: unknown;
}>, z.ZodObject<{
    deleteKey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    deleteKey?: unknown;
}, {
    deleteKey?: unknown;
}>, z.ZodObject<{
    deleteAccount: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    deleteAccount?: unknown;
}, {
    deleteAccount?: unknown;
}>, z.ZodObject<{
    delegate: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    delegate?: unknown;
}, {
    delegate?: unknown;
}>, z.ZodObject<{
    deployGlobalContract: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    deployGlobalContract?: unknown;
}, {
    deployGlobalContract?: unknown;
}>, z.ZodObject<{
    useGlobalContract: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    useGlobalContract?: unknown;
}, {
    useGlobalContract?: unknown;
}>]>;
export declare const ActionCreationConfigViewSchema: z.ZodObject<{
    addkeycost: z.ZodOptional<z.ZodUnknown>;
    createaccountcost: z.ZodOptional<z.ZodUnknown>;
    delegatecost: z.ZodOptional<z.ZodUnknown>;
    deleteaccountcost: z.ZodOptional<z.ZodUnknown>;
    deletekeycost: z.ZodOptional<z.ZodUnknown>;
    deploycontractcost: z.ZodOptional<z.ZodUnknown>;
    deploycontractcostperbyte: z.ZodOptional<z.ZodUnknown>;
    functioncallcost: z.ZodOptional<z.ZodUnknown>;
    functioncallcostperbyte: z.ZodOptional<z.ZodUnknown>;
    stakecost: z.ZodOptional<z.ZodUnknown>;
    transfercost: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    addkeycost?: unknown;
    createaccountcost?: unknown;
    delegatecost?: unknown;
    deleteaccountcost?: unknown;
    deletekeycost?: unknown;
    deploycontractcost?: unknown;
    deploycontractcostperbyte?: unknown;
    functioncallcost?: unknown;
    functioncallcostperbyte?: unknown;
    stakecost?: unknown;
    transfercost?: unknown;
}, {
    addkeycost?: unknown;
    createaccountcost?: unknown;
    delegatecost?: unknown;
    deleteaccountcost?: unknown;
    deletekeycost?: unknown;
    deploycontractcost?: unknown;
    deploycontractcostperbyte?: unknown;
    functioncallcost?: unknown;
    functioncallcostperbyte?: unknown;
    stakecost?: unknown;
    transfercost?: unknown;
}>;
export declare const ActionErrorSchema: z.ZodObject<{
    index: z.ZodOptional<z.ZodNumber>;
    kind: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    index?: number | undefined;
    kind?: unknown;
}, {
    index?: number | undefined;
    kind?: unknown;
}>;
export declare const ActionErrorKindSchema: z.ZodUnion<[z.ZodObject<{
    accountAlreadyExists: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
    }, {
        accountid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    accountAlreadyExists?: {
        accountid?: unknown;
    } | undefined;
}, {
    accountAlreadyExists?: {
        accountid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    accountDoesNotExist: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
    }, {
        accountid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    accountDoesNotExist?: {
        accountid?: unknown;
    } | undefined;
}, {
    accountDoesNotExist?: {
        accountid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    createAccountOnlyByRegistrar: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
        predecessorid: z.ZodOptional<z.ZodUnknown>;
        registraraccountid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
        predecessorid?: unknown;
        registraraccountid?: unknown;
    }, {
        accountid?: unknown;
        predecessorid?: unknown;
        registraraccountid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    createAccountOnlyByRegistrar?: {
        accountid?: unknown;
        predecessorid?: unknown;
        registraraccountid?: unknown;
    } | undefined;
}, {
    createAccountOnlyByRegistrar?: {
        accountid?: unknown;
        predecessorid?: unknown;
        registraraccountid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    createAccountNotAllowed: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
        predecessorid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
        predecessorid?: unknown;
    }, {
        accountid?: unknown;
        predecessorid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    createAccountNotAllowed?: {
        accountid?: unknown;
        predecessorid?: unknown;
    } | undefined;
}, {
    createAccountNotAllowed?: {
        accountid?: unknown;
        predecessorid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    actorNoPermission: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
        actorid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
        actorid?: unknown;
    }, {
        accountid?: unknown;
        actorid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    actorNoPermission?: {
        accountid?: unknown;
        actorid?: unknown;
    } | undefined;
}, {
    actorNoPermission?: {
        accountid?: unknown;
        actorid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    deleteKeyDoesNotExist: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
        publickey: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
        publickey?: unknown;
    }, {
        accountid?: unknown;
        publickey?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    deleteKeyDoesNotExist?: {
        accountid?: unknown;
        publickey?: unknown;
    } | undefined;
}, {
    deleteKeyDoesNotExist?: {
        accountid?: unknown;
        publickey?: unknown;
    } | undefined;
}>, z.ZodObject<{
    addKeyAlreadyExists: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
        publickey: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
        publickey?: unknown;
    }, {
        accountid?: unknown;
        publickey?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    addKeyAlreadyExists?: {
        accountid?: unknown;
        publickey?: unknown;
    } | undefined;
}, {
    addKeyAlreadyExists?: {
        accountid?: unknown;
        publickey?: unknown;
    } | undefined;
}>, z.ZodObject<{
    deleteAccountStaking: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
    }, {
        accountid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    deleteAccountStaking?: {
        accountid?: unknown;
    } | undefined;
}, {
    deleteAccountStaking?: {
        accountid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    lackBalanceForState: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
        amount: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        amount: string;
        accountid?: unknown;
    }, {
        amount: string;
        accountid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    lackBalanceForState?: {
        amount: string;
        accountid?: unknown;
    } | undefined;
}, {
    lackBalanceForState?: {
        amount: string;
        accountid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    triesToUnstake: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
    }, {
        accountid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    triesToUnstake?: {
        accountid?: unknown;
    } | undefined;
}, {
    triesToUnstake?: {
        accountid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    triesToStake: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
        balance: z.ZodString;
        locked: z.ZodString;
        stake: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        stake: string;
        balance: string;
        locked: string;
        accountid?: unknown;
    }, {
        stake: string;
        balance: string;
        locked: string;
        accountid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    triesToStake?: {
        stake: string;
        balance: string;
        locked: string;
        accountid?: unknown;
    } | undefined;
}, {
    triesToStake?: {
        stake: string;
        balance: string;
        locked: string;
        accountid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    insufficientStake: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
        minimumstake: z.ZodOptional<z.ZodString>;
        stake: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        stake: string;
        accountid?: unknown;
        minimumstake?: string | undefined;
    }, {
        stake: string;
        accountid?: unknown;
        minimumstake?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    insufficientStake?: {
        stake: string;
        accountid?: unknown;
        minimumstake?: string | undefined;
    } | undefined;
}, {
    insufficientStake?: {
        stake: string;
        accountid?: unknown;
        minimumstake?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    functionCallError: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    functionCallError?: unknown;
}, {
    functionCallError?: unknown;
}>, z.ZodObject<{
    newReceiptValidationError: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    newReceiptValidationError?: unknown;
}, {
    newReceiptValidationError?: unknown;
}>, z.ZodObject<{
    onlyImplicitAccountCreationAllowed: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
    }, {
        accountid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    onlyImplicitAccountCreationAllowed?: {
        accountid?: unknown;
    } | undefined;
}, {
    onlyImplicitAccountCreationAllowed?: {
        accountid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    deleteAccountWithLargeState: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
    }, {
        accountid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    deleteAccountWithLargeState?: {
        accountid?: unknown;
    } | undefined;
}, {
    deleteAccountWithLargeState?: {
        accountid?: unknown;
    } | undefined;
}>, z.ZodEnum<["DelegateActionInvalidSignature"]>, z.ZodObject<{
    delegateActionSenderDoesNotMatchTxReceiver: z.ZodOptional<z.ZodObject<{
        receiverid: z.ZodOptional<z.ZodUnknown>;
        senderid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        receiverid?: unknown;
        senderid?: unknown;
    }, {
        receiverid?: unknown;
        senderid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    delegateActionSenderDoesNotMatchTxReceiver?: {
        receiverid?: unknown;
        senderid?: unknown;
    } | undefined;
}, {
    delegateActionSenderDoesNotMatchTxReceiver?: {
        receiverid?: unknown;
        senderid?: unknown;
    } | undefined;
}>, z.ZodEnum<["DelegateActionExpired"]>, z.ZodObject<{
    delegateActionAccessKeyError: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    delegateActionAccessKeyError?: unknown;
}, {
    delegateActionAccessKeyError?: unknown;
}>, z.ZodObject<{
    delegateActionInvalidNonce: z.ZodOptional<z.ZodObject<{
        aknonce: z.ZodOptional<z.ZodNumber>;
        delegatenonce: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        aknonce?: number | undefined;
        delegatenonce?: number | undefined;
    }, {
        aknonce?: number | undefined;
        delegatenonce?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    delegateActionInvalidNonce?: {
        aknonce?: number | undefined;
        delegatenonce?: number | undefined;
    } | undefined;
}, {
    delegateActionInvalidNonce?: {
        aknonce?: number | undefined;
        delegatenonce?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    delegateActionNonceTooLarge: z.ZodOptional<z.ZodObject<{
        delegatenonce: z.ZodOptional<z.ZodNumber>;
        upperbound: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        delegatenonce?: number | undefined;
        upperbound?: number | undefined;
    }, {
        delegatenonce?: number | undefined;
        upperbound?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    delegateActionNonceTooLarge?: {
        delegatenonce?: number | undefined;
        upperbound?: number | undefined;
    } | undefined;
}, {
    delegateActionNonceTooLarge?: {
        delegatenonce?: number | undefined;
        upperbound?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    globalContractDoesNotExist: z.ZodOptional<z.ZodObject<{
        identifier: z.ZodUnknown;
    }, "strip", z.ZodTypeAny, {
        identifier?: unknown;
    }, {
        identifier?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    globalContractDoesNotExist?: {
        identifier?: unknown;
    } | undefined;
}, {
    globalContractDoesNotExist?: {
        identifier?: unknown;
    } | undefined;
}>]>;
export declare const ActionViewSchema: z.ZodUnion<[z.ZodEnum<["CreateAccount"]>, z.ZodObject<{
    deployContract: z.ZodOptional<z.ZodObject<{
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
    }, {
        code: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    deployContract?: {
        code: string;
    } | undefined;
}, {
    deployContract?: {
        code: string;
    } | undefined;
}>, z.ZodObject<{
    functionCall: z.ZodOptional<z.ZodObject<{
        args: z.ZodString;
        deposit: z.ZodString;
        gas: z.ZodNumber;
        methodname: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        args: string;
        deposit: string;
        gas: number;
        methodname?: string | undefined;
    }, {
        args: string;
        deposit: string;
        gas: number;
        methodname?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    functionCall?: {
        args: string;
        deposit: string;
        gas: number;
        methodname?: string | undefined;
    } | undefined;
}, {
    functionCall?: {
        args: string;
        deposit: string;
        gas: number;
        methodname?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    transfer: z.ZodOptional<z.ZodObject<{
        deposit: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        deposit: string;
    }, {
        deposit: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    transfer?: {
        deposit: string;
    } | undefined;
}, {
    transfer?: {
        deposit: string;
    } | undefined;
}>, z.ZodObject<{
    stake: z.ZodOptional<z.ZodObject<{
        publickey: z.ZodOptional<z.ZodUnknown>;
        stake: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        stake: string;
        publickey?: unknown;
    }, {
        stake: string;
        publickey?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    stake?: {
        stake: string;
        publickey?: unknown;
    } | undefined;
}, {
    stake?: {
        stake: string;
        publickey?: unknown;
    } | undefined;
}>, z.ZodObject<{
    addKey: z.ZodOptional<z.ZodObject<{
        accesskey: z.ZodOptional<z.ZodUnknown>;
        publickey: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        publickey?: unknown;
        accesskey?: unknown;
    }, {
        publickey?: unknown;
        accesskey?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    addKey?: {
        publickey?: unknown;
        accesskey?: unknown;
    } | undefined;
}, {
    addKey?: {
        publickey?: unknown;
        accesskey?: unknown;
    } | undefined;
}>, z.ZodObject<{
    deleteKey: z.ZodOptional<z.ZodObject<{
        publickey: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        publickey?: unknown;
    }, {
        publickey?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    deleteKey?: {
        publickey?: unknown;
    } | undefined;
}, {
    deleteKey?: {
        publickey?: unknown;
    } | undefined;
}>, z.ZodObject<{
    deleteAccount: z.ZodOptional<z.ZodObject<{
        beneficiaryid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        beneficiaryid?: unknown;
    }, {
        beneficiaryid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    deleteAccount?: {
        beneficiaryid?: unknown;
    } | undefined;
}, {
    deleteAccount?: {
        beneficiaryid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    delegate: z.ZodOptional<z.ZodObject<{
        delegateaction: z.ZodOptional<z.ZodUnknown>;
        signature: z.ZodUnknown;
    }, "strip", z.ZodTypeAny, {
        signature?: unknown;
        delegateaction?: unknown;
    }, {
        signature?: unknown;
        delegateaction?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    delegate?: {
        signature?: unknown;
        delegateaction?: unknown;
    } | undefined;
}, {
    delegate?: {
        signature?: unknown;
        delegateaction?: unknown;
    } | undefined;
}>, z.ZodObject<{
    deployGlobalContract: z.ZodOptional<z.ZodObject<{
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
    }, {
        code: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    deployGlobalContract?: {
        code: string;
    } | undefined;
}, {
    deployGlobalContract?: {
        code: string;
    } | undefined;
}>, z.ZodObject<{
    deployGlobalContractByAccountId: z.ZodOptional<z.ZodObject<{
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
    }, {
        code: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    deployGlobalContractByAccountId?: {
        code: string;
    } | undefined;
}, {
    deployGlobalContractByAccountId?: {
        code: string;
    } | undefined;
}>, z.ZodObject<{
    useGlobalContract: z.ZodOptional<z.ZodObject<{
        codehash: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        codehash?: unknown;
    }, {
        codehash?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    useGlobalContract?: {
        codehash?: unknown;
    } | undefined;
}, {
    useGlobalContract?: {
        codehash?: unknown;
    } | undefined;
}>, z.ZodObject<{
    useGlobalContractByAccountId: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        accountid?: unknown;
    }, {
        accountid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    useGlobalContractByAccountId?: {
        accountid?: unknown;
    } | undefined;
}, {
    useGlobalContractByAccountId?: {
        accountid?: unknown;
    } | undefined;
}>]>;
export declare const ActionsValidationErrorSchema: z.ZodUnion<[z.ZodEnum<["DeleteActionMustBeFinal"]>, z.ZodObject<{
    totalPrepaidGasExceeded: z.ZodOptional<z.ZodObject<{
        limit: z.ZodNumber;
        totalprepaidgas: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        totalprepaidgas?: number | undefined;
    }, {
        limit: number;
        totalprepaidgas?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    totalPrepaidGasExceeded?: {
        limit: number;
        totalprepaidgas?: number | undefined;
    } | undefined;
}, {
    totalPrepaidGasExceeded?: {
        limit: number;
        totalprepaidgas?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    totalNumberOfActionsExceeded: z.ZodOptional<z.ZodObject<{
        limit: z.ZodNumber;
        totalnumberofactions: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        totalnumberofactions?: number | undefined;
    }, {
        limit: number;
        totalnumberofactions?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    totalNumberOfActionsExceeded?: {
        limit: number;
        totalnumberofactions?: number | undefined;
    } | undefined;
}, {
    totalNumberOfActionsExceeded?: {
        limit: number;
        totalnumberofactions?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    addKeyMethodNamesNumberOfBytesExceeded: z.ZodOptional<z.ZodObject<{
        limit: z.ZodNumber;
        totalnumberofbytes: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        totalnumberofbytes?: number | undefined;
    }, {
        limit: number;
        totalnumberofbytes?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    addKeyMethodNamesNumberOfBytesExceeded?: {
        limit: number;
        totalnumberofbytes?: number | undefined;
    } | undefined;
}, {
    addKeyMethodNamesNumberOfBytesExceeded?: {
        limit: number;
        totalnumberofbytes?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    addKeyMethodNameLengthExceeded: z.ZodOptional<z.ZodObject<{
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
    addKeyMethodNameLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}, {
    addKeyMethodNameLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}>, z.ZodEnum<["IntegerOverflow"]>, z.ZodObject<{
    invalidAccountId: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        accountid?: string | undefined;
    }, {
        accountid?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidAccountId?: {
        accountid?: string | undefined;
    } | undefined;
}, {
    invalidAccountId?: {
        accountid?: string | undefined;
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
    functionCallMethodNameLengthExceeded: z.ZodOptional<z.ZodObject<{
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
    functionCallMethodNameLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}, {
    functionCallMethodNameLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}>, z.ZodObject<{
    functionCallArgumentsLengthExceeded: z.ZodOptional<z.ZodObject<{
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
    functionCallArgumentsLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}, {
    functionCallArgumentsLengthExceeded?: {
        length: number;
        limit: number;
    } | undefined;
}>, z.ZodObject<{
    unsuitableStakingKey: z.ZodOptional<z.ZodObject<{
        publickey: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        publickey?: unknown;
    }, {
        publickey?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    unsuitableStakingKey?: {
        publickey?: unknown;
    } | undefined;
}, {
    unsuitableStakingKey?: {
        publickey?: unknown;
    } | undefined;
}>, z.ZodEnum<["FunctionCallZeroAttachedGas"]>, z.ZodEnum<["DelegateActionMustBeOnlyOne"]>, z.ZodObject<{
    unsupportedProtocolFeature: z.ZodOptional<z.ZodObject<{
        protocolfeature: z.ZodOptional<z.ZodString>;
        version: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        version: number;
        protocolfeature?: string | undefined;
    }, {
        version: number;
        protocolfeature?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    unsupportedProtocolFeature?: {
        version: number;
        protocolfeature?: string | undefined;
    } | undefined;
}, {
    unsupportedProtocolFeature?: {
        version: number;
        protocolfeature?: string | undefined;
    } | undefined;
}>]>;
export declare const AddKeyActionSchema: z.ZodObject<{
    accesskey: z.ZodOptional<z.ZodUnknown>;
    publickey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    publickey?: unknown;
    accesskey?: unknown;
}, {
    publickey?: unknown;
    accesskey?: unknown;
}>;
export declare const CreateAccountActionSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const DataReceiptCreationConfigViewSchema: z.ZodObject<{
    basecost: z.ZodOptional<z.ZodUnknown>;
    costperbyte: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    basecost?: unknown;
    costperbyte?: unknown;
}, {
    basecost?: unknown;
    costperbyte?: unknown;
}>;
export declare const DelegateActionSchema: z.ZodObject<{
    actions: z.ZodArray<z.ZodUnknown, "many">;
    maxblockheight: z.ZodOptional<z.ZodNumber>;
    nonce: z.ZodNumber;
    publickey: z.ZodOptional<z.ZodUnknown>;
    receiverid: z.ZodOptional<z.ZodUnknown>;
    senderid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    nonce: number;
    actions: unknown[];
    receiverid?: unknown;
    publickey?: unknown;
    senderid?: unknown;
    maxblockheight?: number | undefined;
}, {
    nonce: number;
    actions: unknown[];
    receiverid?: unknown;
    publickey?: unknown;
    senderid?: unknown;
    maxblockheight?: number | undefined;
}>;
export declare const DeleteAccountActionSchema: z.ZodObject<{
    beneficiaryid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    beneficiaryid?: unknown;
}, {
    beneficiaryid?: unknown;
}>;
export declare const DeleteKeyActionSchema: z.ZodObject<{
    publickey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    publickey?: unknown;
}, {
    publickey?: unknown;
}>;
export declare const DeployContractActionSchema: z.ZodObject<{
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
export declare const DeployGlobalContractActionSchema: z.ZodObject<{
    code: z.ZodString;
    deploymode: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    code: string;
    deploymode?: unknown;
}, {
    code: string;
    deploymode?: unknown;
}>;
export declare const FinalExecutionOutcomeWithReceiptViewSchema: z.ZodObject<{
    receipts: z.ZodArray<z.ZodUnknown, "many">;
    receiptsoutcome: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    status: z.ZodUnknown;
    transaction: z.ZodUnknown;
    transactionoutcome: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receipts: unknown[];
    status?: unknown;
    receiptsoutcome?: unknown[] | undefined;
    transaction?: unknown;
    transactionoutcome?: unknown;
}, {
    receipts: unknown[];
    status?: unknown;
    receiptsoutcome?: unknown[] | undefined;
    transaction?: unknown;
    transactionoutcome?: unknown;
}>;
export declare const FunctionCallActionSchema: z.ZodObject<{
    args: z.ZodString;
    deposit: z.ZodString;
    gas: z.ZodNumber;
    methodname: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    args: string;
    deposit: string;
    gas: number;
    methodname?: string | undefined;
}, {
    args: string;
    deposit: string;
    gas: number;
    methodname?: string | undefined;
}>;
export declare const InvalidTxErrorSchema: z.ZodUnion<[z.ZodObject<{
    invalidAccessKeyError: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    invalidAccessKeyError?: unknown;
}, {
    invalidAccessKeyError?: unknown;
}>, z.ZodObject<{
    invalidSignerId: z.ZodOptional<z.ZodObject<{
        signerid: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        signerid?: string | undefined;
    }, {
        signerid?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidSignerId?: {
        signerid?: string | undefined;
    } | undefined;
}, {
    invalidSignerId?: {
        signerid?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    signerDoesNotExist: z.ZodOptional<z.ZodObject<{
        signerid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        signerid?: unknown;
    }, {
        signerid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    signerDoesNotExist?: {
        signerid?: unknown;
    } | undefined;
}, {
    signerDoesNotExist?: {
        signerid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    invalidNonce: z.ZodOptional<z.ZodObject<{
        aknonce: z.ZodOptional<z.ZodNumber>;
        txnonce: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        aknonce?: number | undefined;
        txnonce?: number | undefined;
    }, {
        aknonce?: number | undefined;
        txnonce?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidNonce?: {
        aknonce?: number | undefined;
        txnonce?: number | undefined;
    } | undefined;
}, {
    invalidNonce?: {
        aknonce?: number | undefined;
        txnonce?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    nonceTooLarge: z.ZodOptional<z.ZodObject<{
        txnonce: z.ZodOptional<z.ZodNumber>;
        upperbound: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        upperbound?: number | undefined;
        txnonce?: number | undefined;
    }, {
        upperbound?: number | undefined;
        txnonce?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    nonceTooLarge?: {
        upperbound?: number | undefined;
        txnonce?: number | undefined;
    } | undefined;
}, {
    nonceTooLarge?: {
        upperbound?: number | undefined;
        txnonce?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    invalidReceiverId: z.ZodOptional<z.ZodObject<{
        receiverid: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        receiverid?: string | undefined;
    }, {
        receiverid?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidReceiverId?: {
        receiverid?: string | undefined;
    } | undefined;
}, {
    invalidReceiverId?: {
        receiverid?: string | undefined;
    } | undefined;
}>, z.ZodEnum<["InvalidSignature"]>, z.ZodObject<{
    notEnoughBalance: z.ZodOptional<z.ZodObject<{
        balance: z.ZodString;
        cost: z.ZodString;
        signerid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        cost: string;
        balance: string;
        signerid?: unknown;
    }, {
        cost: string;
        balance: string;
        signerid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    notEnoughBalance?: {
        cost: string;
        balance: string;
        signerid?: unknown;
    } | undefined;
}, {
    notEnoughBalance?: {
        cost: string;
        balance: string;
        signerid?: unknown;
    } | undefined;
}>, z.ZodObject<{
    lackBalanceForState: z.ZodOptional<z.ZodObject<{
        amount: z.ZodString;
        signerid: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        amount: string;
        signerid?: unknown;
    }, {
        amount: string;
        signerid?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    lackBalanceForState?: {
        amount: string;
        signerid?: unknown;
    } | undefined;
}, {
    lackBalanceForState?: {
        amount: string;
        signerid?: unknown;
    } | undefined;
}>, z.ZodEnum<["CostOverflow"]>, z.ZodEnum<["InvalidChain"]>, z.ZodEnum<["Expired"]>, z.ZodObject<{
    actionsValidation: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    actionsValidation?: unknown;
}, {
    actionsValidation?: unknown;
}>, z.ZodObject<{
    transactionSizeExceeded: z.ZodOptional<z.ZodObject<{
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
    transactionSizeExceeded?: {
        limit: number;
        size: number;
    } | undefined;
}, {
    transactionSizeExceeded?: {
        limit: number;
        size: number;
    } | undefined;
}>, z.ZodEnum<["InvalidTransactionVersion"]>, z.ZodObject<{
    storageError: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    storageError?: unknown;
}, {
    storageError?: unknown;
}>, z.ZodObject<{
    shardCongested: z.ZodOptional<z.ZodObject<{
        congestionlevel: z.ZodOptional<z.ZodNumber>;
        shardid: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        congestionlevel?: number | undefined;
        shardid?: number | undefined;
    }, {
        congestionlevel?: number | undefined;
        shardid?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    shardCongested?: {
        congestionlevel?: number | undefined;
        shardid?: number | undefined;
    } | undefined;
}, {
    shardCongested?: {
        congestionlevel?: number | undefined;
        shardid?: number | undefined;
    } | undefined;
}>, z.ZodObject<{
    shardStuck: z.ZodOptional<z.ZodObject<{
        missedchunks: z.ZodOptional<z.ZodNumber>;
        shardid: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        shardid?: number | undefined;
        missedchunks?: number | undefined;
    }, {
        shardid?: number | undefined;
        missedchunks?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    shardStuck?: {
        shardid?: number | undefined;
        missedchunks?: number | undefined;
    } | undefined;
}, {
    shardStuck?: {
        shardid?: number | undefined;
        missedchunks?: number | undefined;
    } | undefined;
}>]>;
export declare const JsonRpcRequestforEXPERIMENTALreceiptSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_receipt"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "EXPERIMENTAL_receipt";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "EXPERIMENTAL_receipt";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestforEXPERIMENTALtxstatusSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["EXPERIMENTAL_tx_status"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "EXPERIMENTAL_tx_status";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "EXPERIMENTAL_tx_status";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestforbroadcasttxasyncSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["broadcast_tx_async"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "broadcast_tx_async";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "broadcast_tx_async";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestforbroadcasttxcommitSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["broadcast_tx_commit"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "broadcast_tx_commit";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "broadcast_tx_commit";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestforsendtxSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["send_tx"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "send_tx";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "send_tx";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcRequestfortxSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
    method: z.ZodEnum<["tx"]>;
    params: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    method: "tx";
    id: string;
    params?: unknown;
}, {
    jsonrpc: string;
    method: "tx";
    id: string;
    params?: unknown;
}>;
export declare const JsonRpcResponseforRpcReceiptResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const JsonRpcResponseforRpcTransactionResponseandRpcErrorSchema: z.ZodObject<{
    id: z.ZodString;
    jsonrpc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jsonrpc: string;
    id: string;
}, {
    jsonrpc: string;
    id: string;
}>;
export declare const NonDelegateActionSchema: z.ZodUnknown;
export declare const ReceiptEnumViewSchema: z.ZodUnion<[z.ZodObject<{
    action: z.ZodOptional<z.ZodObject<{
        actions: z.ZodArray<z.ZodUnknown, "many">;
        gasprice: z.ZodOptional<z.ZodString>;
        inputdataids: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        ispromiseyield: z.ZodOptional<z.ZodBoolean>;
        outputdatareceivers: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        signerid: z.ZodOptional<z.ZodUnknown>;
        signerpublickey: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        actions: unknown[];
        gasprice?: string | undefined;
        signerid?: unknown;
        inputdataids?: unknown[] | undefined;
        ispromiseyield?: boolean | undefined;
        outputdatareceivers?: unknown[] | undefined;
        signerpublickey?: unknown;
    }, {
        actions: unknown[];
        gasprice?: string | undefined;
        signerid?: unknown;
        inputdataids?: unknown[] | undefined;
        ispromiseyield?: boolean | undefined;
        outputdatareceivers?: unknown[] | undefined;
        signerpublickey?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    action?: {
        actions: unknown[];
        gasprice?: string | undefined;
        signerid?: unknown;
        inputdataids?: unknown[] | undefined;
        ispromiseyield?: boolean | undefined;
        outputdatareceivers?: unknown[] | undefined;
        signerpublickey?: unknown;
    } | undefined;
}, {
    action?: {
        actions: unknown[];
        gasprice?: string | undefined;
        signerid?: unknown;
        inputdataids?: unknown[] | undefined;
        ispromiseyield?: boolean | undefined;
        outputdatareceivers?: unknown[] | undefined;
        signerpublickey?: unknown;
    } | undefined;
}>, z.ZodObject<{
    data: z.ZodOptional<z.ZodObject<{
        data: z.ZodOptional<z.ZodString>;
        dataid: z.ZodOptional<z.ZodUnknown>;
        ispromiseresume: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data?: string | undefined;
        dataid?: unknown;
        ispromiseresume?: boolean | undefined;
    }, {
        data?: string | undefined;
        dataid?: unknown;
        ispromiseresume?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    data?: {
        data?: string | undefined;
        dataid?: unknown;
        ispromiseresume?: boolean | undefined;
    } | undefined;
}, {
    data?: {
        data?: string | undefined;
        dataid?: unknown;
        ispromiseresume?: boolean | undefined;
    } | undefined;
}>, z.ZodObject<{
    globalContractDistribution: z.ZodOptional<z.ZodObject<{
        alreadydeliveredshards: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        code: z.ZodString;
        id: z.ZodUnknown;
        targetshard: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id?: unknown;
        alreadydeliveredshards?: unknown[] | undefined;
        targetshard?: unknown;
    }, {
        code: string;
        id?: unknown;
        alreadydeliveredshards?: unknown[] | undefined;
        targetshard?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    globalContractDistribution?: {
        code: string;
        id?: unknown;
        alreadydeliveredshards?: unknown[] | undefined;
        targetshard?: unknown;
    } | undefined;
}, {
    globalContractDistribution?: {
        code: string;
        id?: unknown;
        alreadydeliveredshards?: unknown[] | undefined;
        targetshard?: unknown;
    } | undefined;
}>]>;
export declare const ReceiptValidationErrorSchema: z.ZodUnion<[z.ZodObject<{
    invalidPredecessorId: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        accountid?: string | undefined;
    }, {
        accountid?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidPredecessorId?: {
        accountid?: string | undefined;
    } | undefined;
}, {
    invalidPredecessorId?: {
        accountid?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    invalidReceiverId: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        accountid?: string | undefined;
    }, {
        accountid?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidReceiverId?: {
        accountid?: string | undefined;
    } | undefined;
}, {
    invalidReceiverId?: {
        accountid?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    invalidSignerId: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        accountid?: string | undefined;
    }, {
        accountid?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidSignerId?: {
        accountid?: string | undefined;
    } | undefined;
}, {
    invalidSignerId?: {
        accountid?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    invalidDataReceiverId: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        accountid?: string | undefined;
    }, {
        accountid?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    invalidDataReceiverId?: {
        accountid?: string | undefined;
    } | undefined;
}, {
    invalidDataReceiverId?: {
        accountid?: string | undefined;
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
    actionsValidation: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    actionsValidation?: unknown;
}, {
    actionsValidation?: unknown;
}>, z.ZodObject<{
    receiptSizeExceeded: z.ZodOptional<z.ZodObject<{
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
    receiptSizeExceeded?: {
        limit: number;
        size: number;
    } | undefined;
}, {
    receiptSizeExceeded?: {
        limit: number;
        size: number;
    } | undefined;
}>]>;
export declare const ReceiptViewSchema: z.ZodObject<{
    predecessorid: z.ZodOptional<z.ZodUnknown>;
    priority: z.ZodOptional<z.ZodNumber>;
    receipt: z.ZodUnknown;
    receiptid: z.ZodOptional<z.ZodUnknown>;
    receiverid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receiverid?: unknown;
    predecessorid?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptid?: unknown;
}, {
    receiverid?: unknown;
    predecessorid?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptid?: unknown;
}>;
export declare const RpcReceiptRequestSchema: z.ZodObject<{
    receiptid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receiptid?: unknown;
}, {
    receiptid?: unknown;
}>;
export declare const RpcReceiptResponseSchema: z.ZodObject<{
    predecessorid: z.ZodOptional<z.ZodUnknown>;
    priority: z.ZodOptional<z.ZodNumber>;
    receipt: z.ZodUnknown;
    receiptid: z.ZodOptional<z.ZodUnknown>;
    receiverid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    receiverid?: unknown;
    predecessorid?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptid?: unknown;
}, {
    receiverid?: unknown;
    predecessorid?: unknown;
    priority?: number | undefined;
    receipt?: unknown;
    receiptid?: unknown;
}>;
export declare const RpcSendTransactionRequestSchema: z.ZodObject<{
    signedtxbase64: z.ZodOptional<z.ZodUnknown>;
    waituntil: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    signedtxbase64?: unknown;
    waituntil?: unknown;
}, {
    signedtxbase64?: unknown;
    waituntil?: unknown;
}>;
export declare const RpcTransactionResponseSchema: z.ZodObject<{
    finalexecutionstatus: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    finalexecutionstatus?: unknown;
}, {
    finalexecutionstatus?: unknown;
}>;
export declare const RpcTransactionStatusRequestSchema: z.ZodObject<{
    waituntil: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    waituntil?: unknown;
}, {
    waituntil?: unknown;
}>;
export declare const SignedDelegateActionSchema: z.ZodObject<{
    delegateaction: z.ZodOptional<z.ZodUnknown>;
    signature: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    signature?: unknown;
    delegateaction?: unknown;
}, {
    signature?: unknown;
    delegateaction?: unknown;
}>;
export declare const SignedTransactionSchema: z.ZodString;
export declare const SignedTransactionViewSchema: z.ZodObject<{
    actions: z.ZodArray<z.ZodUnknown, "many">;
    hash: z.ZodUnknown;
    nonce: z.ZodNumber;
    priorityfee: z.ZodOptional<z.ZodNumber>;
    publickey: z.ZodOptional<z.ZodUnknown>;
    receiverid: z.ZodOptional<z.ZodUnknown>;
    signature: z.ZodUnknown;
    signerid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    nonce: number;
    actions: unknown[];
    receiverid?: unknown;
    hash?: unknown;
    signature?: unknown;
    publickey?: unknown;
    signerid?: unknown;
    priorityfee?: number | undefined;
}, {
    nonce: number;
    actions: unknown[];
    receiverid?: unknown;
    hash?: unknown;
    signature?: unknown;
    publickey?: unknown;
    signerid?: unknown;
    priorityfee?: number | undefined;
}>;
export declare const StakeActionSchema: z.ZodObject<{
    publickey: z.ZodOptional<z.ZodUnknown>;
    stake: z.ZodString;
}, "strip", z.ZodTypeAny, {
    stake: string;
    publickey?: unknown;
}, {
    stake: string;
    publickey?: unknown;
}>;
export declare const TransferActionSchema: z.ZodObject<{
    deposit: z.ZodString;
}, "strip", z.ZodTypeAny, {
    deposit: string;
}, {
    deposit: string;
}>;
export declare const TxExecutionErrorSchema: z.ZodUnion<[z.ZodObject<{
    actionError: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    actionError?: unknown;
}, {
    actionError?: unknown;
}>, z.ZodObject<{
    invalidTxError: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    invalidTxError?: unknown;
}, {
    invalidTxError?: unknown;
}>]>;
export declare const TxExecutionStatusSchema: z.ZodUnion<[z.ZodEnum<["NONE"]>, z.ZodEnum<["INCLUDED"]>, z.ZodEnum<["EXECUTED_OPTIMISTIC"]>, z.ZodEnum<["INCLUDED_FINAL"]>, z.ZodEnum<["EXECUTED"]>, z.ZodEnum<["FINAL"]>]>;
export declare const UseGlobalContractActionSchema: z.ZodObject<{
    contractidentifier: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    contractidentifier?: unknown;
}, {
    contractidentifier?: unknown;
}>;
