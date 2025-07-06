/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */
import { z } from 'zod';
export declare const AccessKeySchema: z.ZodObject<{
    nonce: z.ZodNumber;
    permission: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    nonce: number;
    permission?: unknown;
}, {
    nonce: number;
    permission?: unknown;
}>;
export declare const AccessKeyCreationConfigViewSchema: z.ZodObject<{
    fullaccesscost: z.ZodOptional<z.ZodUnknown>;
    functioncallcost: z.ZodOptional<z.ZodUnknown>;
    functioncallcostperbyte: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    functioncallcost?: unknown;
    functioncallcostperbyte?: unknown;
    fullaccesscost?: unknown;
}, {
    functioncallcost?: unknown;
    functioncallcostperbyte?: unknown;
    fullaccesscost?: unknown;
}>;
export declare const AccessKeyInfoViewSchema: z.ZodObject<{
    accesskey: z.ZodOptional<z.ZodUnknown>;
    publickey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    publickey?: unknown;
    accesskey?: unknown;
}, {
    publickey?: unknown;
    accesskey?: unknown;
}>;
export declare const AccessKeyListSchema: z.ZodObject<{
    keys: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    keys: unknown[];
}, {
    keys: unknown[];
}>;
export declare const AccessKeyPermissionSchema: z.ZodUnion<[z.ZodObject<{
    functionCall: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    functionCall?: unknown;
}, {
    functionCall?: unknown;
}>, z.ZodEnum<["FullAccess"]>]>;
export declare const AccessKeyPermissionViewSchema: z.ZodUnion<[z.ZodEnum<["FullAccess"]>, z.ZodObject<{
    functionCall: z.ZodOptional<z.ZodObject<{
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
    }>>;
}, "strip", z.ZodTypeAny, {
    functionCall?: {
        receiverid?: string | undefined;
        allowance?: string | undefined;
        methodnames?: string[] | undefined;
    } | undefined;
}, {
    functionCall?: {
        receiverid?: string | undefined;
        allowance?: string | undefined;
        methodnames?: string[] | undefined;
    } | undefined;
}>]>;
export declare const AccessKeyViewSchema: z.ZodObject<{
    nonce: z.ZodNumber;
    permission: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    nonce: number;
    permission?: unknown;
}, {
    nonce: number;
    permission?: unknown;
}>;
export declare const AccountCreationConfigViewSchema: z.ZodObject<{
    minallowedtoplevelaccountlength: z.ZodOptional<z.ZodNumber>;
    registraraccountid: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    registraraccountid?: unknown;
    minallowedtoplevelaccountlength?: number | undefined;
}, {
    registraraccountid?: unknown;
    minallowedtoplevelaccountlength?: number | undefined;
}>;
export declare const AccountDataViewSchema: z.ZodObject<{
    accountkey: z.ZodOptional<z.ZodUnknown>;
    peerid: z.ZodOptional<z.ZodUnknown>;
    proxies: z.ZodArray<z.ZodUnknown, "many">;
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    timestamp: string;
    proxies: unknown[];
    peerid?: unknown;
    accountkey?: unknown;
}, {
    timestamp: string;
    proxies: unknown[];
    peerid?: unknown;
    accountkey?: unknown;
}>;
export declare const AccountIdSchema: z.ZodString;
export declare const AccountIdValidityRulesVersionSchema: z.ZodNumber;
export declare const AccountInfoSchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    amount: z.ZodString;
    publickey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    amount: string;
    accountid?: unknown;
    publickey?: unknown;
}, {
    amount: string;
    accountid?: unknown;
    publickey?: unknown;
}>;
export declare const AccountViewSchema: z.ZodObject<{
    amount: z.ZodString;
    codehash: z.ZodOptional<z.ZodUnknown>;
    globalcontractaccountid: z.ZodOptional<z.ZodUnknown>;
    globalcontracthash: z.ZodOptional<z.ZodUnknown>;
    locked: z.ZodString;
    storagepaidat: z.ZodOptional<z.ZodNumber>;
    storageusage: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    amount: string;
    locked: string;
    codehash?: unknown;
    globalcontractaccountid?: unknown;
    globalcontracthash?: unknown;
    storagepaidat?: number | undefined;
    storageusage?: number | undefined;
}, {
    amount: string;
    locked: string;
    codehash?: unknown;
    globalcontractaccountid?: unknown;
    globalcontracthash?: unknown;
    storagepaidat?: number | undefined;
    storageusage?: number | undefined;
}>;
export declare const AccountWithPublicKeySchema: z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    publickey: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountid?: unknown;
    publickey?: unknown;
}, {
    accountid?: unknown;
    publickey?: unknown;
}>;
export declare const ContractCodeViewSchema: z.ZodObject<{
    codebase64: z.ZodOptional<z.ZodString>;
    hash: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    hash?: unknown;
    codebase64?: string | undefined;
}, {
    hash?: unknown;
    codebase64?: string | undefined;
}>;
export declare const GasKeyViewSchema: z.ZodObject<{
    balance: z.ZodNumber;
    numnonces: z.ZodOptional<z.ZodNumber>;
    permission: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    balance: number;
    permission?: unknown;
    numnonces?: number | undefined;
}, {
    balance: number;
    permission?: unknown;
    numnonces?: number | undefined;
}>;
export declare const GlobalContractDeployModeSchema: z.ZodUnion<[z.ZodEnum<["CodeHash"]>, z.ZodEnum<["AccountId"]>]>;
export declare const GlobalContractIdentifierSchema: z.ZodUnion<[z.ZodObject<{
    codeHash: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    codeHash?: unknown;
}, {
    codeHash?: unknown;
}>, z.ZodObject<{
    accountId: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    accountId?: unknown;
}, {
    accountId?: unknown;
}>]>;
export declare const InvalidAccessKeyErrorSchema: z.ZodUnion<[z.ZodObject<{
    accessKeyNotFound: z.ZodOptional<z.ZodObject<{
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
    accessKeyNotFound?: {
        accountid?: unknown;
        publickey?: unknown;
    } | undefined;
}, {
    accessKeyNotFound?: {
        accountid?: unknown;
        publickey?: unknown;
    } | undefined;
}>, z.ZodObject<{
    receiverMismatch: z.ZodOptional<z.ZodObject<{
        akreceiver: z.ZodOptional<z.ZodString>;
        txreceiver: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        akreceiver?: string | undefined;
        txreceiver?: unknown;
    }, {
        akreceiver?: string | undefined;
        txreceiver?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    receiverMismatch?: {
        akreceiver?: string | undefined;
        txreceiver?: unknown;
    } | undefined;
}, {
    receiverMismatch?: {
        akreceiver?: string | undefined;
        txreceiver?: unknown;
    } | undefined;
}>, z.ZodObject<{
    methodNameMismatch: z.ZodOptional<z.ZodObject<{
        methodname: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        methodname?: string | undefined;
    }, {
        methodname?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    methodNameMismatch?: {
        methodname?: string | undefined;
    } | undefined;
}, {
    methodNameMismatch?: {
        methodname?: string | undefined;
    } | undefined;
}>, z.ZodEnum<["RequiresFullAccess"]>, z.ZodObject<{
    notEnoughAllowance: z.ZodOptional<z.ZodObject<{
        accountid: z.ZodOptional<z.ZodUnknown>;
        allowance: z.ZodString;
        cost: z.ZodString;
        publickey: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        cost: string;
        allowance: string;
        accountid?: unknown;
        publickey?: unknown;
    }, {
        cost: string;
        allowance: string;
        accountid?: unknown;
        publickey?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    notEnoughAllowance?: {
        cost: string;
        allowance: string;
        accountid?: unknown;
        publickey?: unknown;
    } | undefined;
}, {
    notEnoughAllowance?: {
        cost: string;
        allowance: string;
        accountid?: unknown;
        publickey?: unknown;
    } | undefined;
}>, z.ZodEnum<["DepositWithFunctionCall"]>]>;
export declare const PublicKeySchema: z.ZodString;
export declare const StateChangeCauseViewSchema: z.ZodUnion<[z.ZodObject<{
    type: z.ZodEnum<["not_writable_to_disk"]>;
}, "strip", z.ZodTypeAny, {
    type: "not_writable_to_disk";
}, {
    type: "not_writable_to_disk";
}>, z.ZodObject<{
    type: z.ZodEnum<["initial_state"]>;
}, "strip", z.ZodTypeAny, {
    type: "initial_state";
}, {
    type: "initial_state";
}>, z.ZodObject<{
    txhash: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodEnum<["transaction_processing"]>;
}, "strip", z.ZodTypeAny, {
    type: "transaction_processing";
    txhash?: unknown;
}, {
    type: "transaction_processing";
    txhash?: unknown;
}>, z.ZodObject<{
    receipthash: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodEnum<["action_receipt_processing_started"]>;
}, "strip", z.ZodTypeAny, {
    type: "action_receipt_processing_started";
    receipthash?: unknown;
}, {
    type: "action_receipt_processing_started";
    receipthash?: unknown;
}>, z.ZodObject<{
    receipthash: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodEnum<["action_receipt_gas_reward"]>;
}, "strip", z.ZodTypeAny, {
    type: "action_receipt_gas_reward";
    receipthash?: unknown;
}, {
    type: "action_receipt_gas_reward";
    receipthash?: unknown;
}>, z.ZodObject<{
    receipthash: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodEnum<["receipt_processing"]>;
}, "strip", z.ZodTypeAny, {
    type: "receipt_processing";
    receipthash?: unknown;
}, {
    type: "receipt_processing";
    receipthash?: unknown;
}>, z.ZodObject<{
    receipthash: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodEnum<["postponed_receipt"]>;
}, "strip", z.ZodTypeAny, {
    type: "postponed_receipt";
    receipthash?: unknown;
}, {
    type: "postponed_receipt";
    receipthash?: unknown;
}>, z.ZodObject<{
    type: z.ZodEnum<["updated_delayed_receipts"]>;
}, "strip", z.ZodTypeAny, {
    type: "updated_delayed_receipts";
}, {
    type: "updated_delayed_receipts";
}>, z.ZodObject<{
    type: z.ZodEnum<["validator_accounts_update"]>;
}, "strip", z.ZodTypeAny, {
    type: "validator_accounts_update";
}, {
    type: "validator_accounts_update";
}>, z.ZodObject<{
    type: z.ZodEnum<["migration"]>;
}, "strip", z.ZodTypeAny, {
    type: "migration";
}, {
    type: "migration";
}>, z.ZodObject<{
    type: z.ZodEnum<["bandwidth_scheduler_state_update"]>;
}, "strip", z.ZodTypeAny, {
    type: "bandwidth_scheduler_state_update";
}, {
    type: "bandwidth_scheduler_state_update";
}>]>;
export declare const StateChangeKindViewSchema: z.ZodUnion<[z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodEnum<["account_touched"]>;
}, "strip", z.ZodTypeAny, {
    type: "account_touched";
    accountid?: unknown;
}, {
    type: "account_touched";
    accountid?: unknown;
}>, z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodEnum<["access_key_touched"]>;
}, "strip", z.ZodTypeAny, {
    type: "access_key_touched";
    accountid?: unknown;
}, {
    type: "access_key_touched";
    accountid?: unknown;
}>, z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodEnum<["data_touched"]>;
}, "strip", z.ZodTypeAny, {
    type: "data_touched";
    accountid?: unknown;
}, {
    type: "data_touched";
    accountid?: unknown;
}>, z.ZodObject<{
    accountid: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodEnum<["contract_code_touched"]>;
}, "strip", z.ZodTypeAny, {
    type: "contract_code_touched";
    accountid?: unknown;
}, {
    type: "contract_code_touched";
    accountid?: unknown;
}>]>;
export declare const StateChangeWithCauseViewSchema: z.ZodObject<{
    cause: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    cause?: unknown;
}, {
    cause?: unknown;
}>;
export declare const StateItemSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    key: string;
}, {
    value: string;
    key: string;
}>;
export declare const StateSyncConfigSchema: z.ZodObject<{
    dump: z.ZodOptional<z.ZodUnknown>;
    sync: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    dump?: unknown;
    sync?: unknown;
}, {
    dump?: unknown;
    sync?: unknown;
}>;
export declare const ViewStateResultSchema: z.ZodObject<{
    proof: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    values: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    values: unknown[];
    proof?: string[] | undefined;
}, {
    values: unknown[];
    proof?: string[] | undefined;
}>;
