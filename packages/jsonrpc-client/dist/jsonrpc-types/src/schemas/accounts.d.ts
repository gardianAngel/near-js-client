/**
 * Zod schemas for account-related NEAR Protocol JSON-RPC types
 */
import { z } from 'zod';
export declare const AccountQuerySchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    finality: z.ZodOptional<z.ZodEnum<["final", "near-final", "optimistic"]>>;
} & {
    accountId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountId: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}, {
    accountId: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}>;
export declare const AccountResponseSchema: z.ZodObject<{
    amount: z.ZodString;
    locked: z.ZodString;
    codeHash: z.ZodString;
    storageUsage: z.ZodNumber;
    storagePaidAt: z.ZodNumber;
    blockHeight: z.ZodNumber;
    blockHash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    blockHash: string;
    blockHeight: number;
    amount: string;
    locked: string;
    codeHash: string;
    storageUsage: number;
    storagePaidAt: number;
}, {
    blockHash: string;
    blockHeight: number;
    amount: string;
    locked: string;
    codeHash: string;
    storageUsage: number;
    storagePaidAt: number;
}>;
export declare const AccessKeyQuerySchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    finality: z.ZodOptional<z.ZodEnum<["final", "near-final", "optimistic"]>>;
} & {
    accountId: z.ZodString;
    publicKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountId: string;
    publicKey: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}, {
    accountId: string;
    publicKey: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}>;
export declare const AccessKeyResponseSchema: z.ZodObject<{
    nonce: z.ZodNumber;
    permission: z.ZodUnion<[z.ZodLiteral<"FullAccess">, z.ZodObject<{
        FunctionCall: z.ZodObject<{
            allowance: z.ZodOptional<z.ZodString>;
            receiverId: z.ZodString;
            methodNames: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            receiverId: string;
            methodNames: string[];
            allowance?: string | undefined;
        }, {
            receiverId: string;
            methodNames: string[];
            allowance?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        FunctionCall: {
            receiverId: string;
            methodNames: string[];
            allowance?: string | undefined;
        };
    }, {
        FunctionCall: {
            receiverId: string;
            methodNames: string[];
            allowance?: string | undefined;
        };
    }>]>;
    blockHeight: z.ZodNumber;
    blockHash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    blockHash: string;
    nonce: number;
    permission: "FullAccess" | {
        FunctionCall: {
            receiverId: string;
            methodNames: string[];
            allowance?: string | undefined;
        };
    };
    blockHeight: number;
}, {
    blockHash: string;
    nonce: number;
    permission: "FullAccess" | {
        FunctionCall: {
            receiverId: string;
            methodNames: string[];
            allowance?: string | undefined;
        };
    };
    blockHeight: number;
}>;
export declare const AccessKeyListQuerySchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    finality: z.ZodOptional<z.ZodEnum<["final", "near-final", "optimistic"]>>;
} & {
    accountId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountId: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}, {
    accountId: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}>;
export declare const AccessKeyWithPublicKeySchema: z.ZodObject<{
    publicKey: z.ZodObject<{
        keyType: z.ZodNumber;
        data: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data: string;
        keyType: number;
    }, {
        data: string;
        keyType: number;
    }>;
    accessKey: z.ZodObject<{
        nonce: z.ZodNumber;
        permission: z.ZodUnion<[z.ZodLiteral<"FullAccess">, z.ZodObject<{
            FunctionCall: z.ZodObject<{
                allowance: z.ZodOptional<z.ZodString>;
                receiverId: z.ZodString;
                methodNames: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            }, {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        }, {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        }>]>;
    }, "strip", z.ZodTypeAny, {
        nonce: number;
        permission: "FullAccess" | {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        };
    }, {
        nonce: number;
        permission: "FullAccess" | {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        };
    }>;
}, "strip", z.ZodTypeAny, {
    publicKey: {
        data: string;
        keyType: number;
    };
    accessKey: {
        nonce: number;
        permission: "FullAccess" | {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        };
    };
}, {
    publicKey: {
        data: string;
        keyType: number;
    };
    accessKey: {
        nonce: number;
        permission: "FullAccess" | {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        };
    };
}>;
export declare const AccessKeyListResponseSchema: z.ZodObject<{
    keys: z.ZodArray<z.ZodObject<{
        publicKey: z.ZodObject<{
            keyType: z.ZodNumber;
            data: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data: string;
            keyType: number;
        }, {
            data: string;
            keyType: number;
        }>;
        accessKey: z.ZodObject<{
            nonce: z.ZodNumber;
            permission: z.ZodUnion<[z.ZodLiteral<"FullAccess">, z.ZodObject<{
                FunctionCall: z.ZodObject<{
                    allowance: z.ZodOptional<z.ZodString>;
                    receiverId: z.ZodString;
                    methodNames: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                }, {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            }, {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            }>]>;
        }, "strip", z.ZodTypeAny, {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        }, {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        publicKey: {
            data: string;
            keyType: number;
        };
        accessKey: {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }, {
        publicKey: {
            data: string;
            keyType: number;
        };
        accessKey: {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }>, "many">;
    blockHeight: z.ZodNumber;
    blockHash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    keys: {
        publicKey: {
            data: string;
            keyType: number;
        };
        accessKey: {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }[];
    blockHash: string;
    blockHeight: number;
}, {
    keys: {
        publicKey: {
            data: string;
            keyType: number;
        };
        accessKey: {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        };
    }[];
    blockHash: string;
    blockHeight: number;
}>;
export declare const CodeQuerySchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    finality: z.ZodOptional<z.ZodEnum<["final", "near-final", "optimistic"]>>;
} & {
    accountId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountId: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}, {
    accountId: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}>;
export declare const CodeResponseSchema: z.ZodObject<{
    codeBase64: z.ZodString;
    hash: z.ZodString;
    blockHeight: z.ZodNumber;
    blockHash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    hash: string;
    blockHash: string;
    blockHeight: number;
    codeBase64: string;
}, {
    hash: string;
    blockHash: string;
    blockHeight: number;
    codeBase64: string;
}>;
export declare const ContractCodeQuerySchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    finality: z.ZodOptional<z.ZodEnum<["final", "near-final", "optimistic"]>>;
} & {
    accountId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountId: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}, {
    accountId: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}>;
export declare const ContractCodeResponseSchema: z.ZodObject<{
    result: z.ZodString;
    logs: z.ZodArray<z.ZodString, "many">;
    blockHeight: z.ZodNumber;
    blockHash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    result: string;
    logs: string[];
    blockHash: string;
    blockHeight: number;
}, {
    result: string;
    logs: string[];
    blockHash: string;
    blockHeight: number;
}>;
export declare const ContractStateQuerySchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    finality: z.ZodOptional<z.ZodEnum<["final", "near-final", "optimistic"]>>;
} & {
    accountId: z.ZodString;
    keyPrefix: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountId: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
    keyPrefix?: string | undefined;
}, {
    accountId: string;
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
    keyPrefix?: string | undefined;
}>;
export declare const StateItemSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
    proof: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    value: string;
    proof: string[];
    key: string;
}, {
    value: string;
    proof: string[];
    key: string;
}>;
export declare const ContractStateResponseSchema: z.ZodObject<{
    values: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
        proof: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        value: string;
        proof: string[];
        key: string;
    }, {
        value: string;
        proof: string[];
        key: string;
    }>, "many">;
    proof: z.ZodArray<z.ZodString, "many">;
    blockHeight: z.ZodNumber;
    blockHash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    values: {
        value: string;
        proof: string[];
        key: string;
    }[];
    blockHash: string;
    proof: string[];
    blockHeight: number;
}, {
    values: {
        value: string;
        proof: string[];
        key: string;
    }[];
    blockHash: string;
    proof: string[];
    blockHeight: number;
}>;
export declare const ContractStateChangesQuerySchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    finality: z.ZodOptional<z.ZodEnum<["final", "near-final", "optimistic"]>>;
} & {
    accountIds: z.ZodArray<z.ZodString, "many">;
    keyPrefix: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountIds: string[];
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
    keyPrefix?: string | undefined;
}, {
    accountIds: string[];
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
    keyPrefix?: string | undefined;
}>;
export declare const StateChangeCauseSchema: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"transaction_processing">;
    tx_hash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "transaction_processing";
    tx_hash: string;
}, {
    type: "transaction_processing";
    tx_hash: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"action_receipt_processing_started">;
    receipt_hash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "action_receipt_processing_started";
    receipt_hash: string;
}, {
    type: "action_receipt_processing_started";
    receipt_hash: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"action_receipt_gas_reward">;
    receipt_hash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "action_receipt_gas_reward";
    receipt_hash: string;
}, {
    type: "action_receipt_gas_reward";
    receipt_hash: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"receipt_processing">;
    receipt_hash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "receipt_processing";
    receipt_hash: string;
}, {
    type: "receipt_processing";
    receipt_hash: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"postponed_receipt">;
    receipt_hash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "postponed_receipt";
    receipt_hash: string;
}, {
    type: "postponed_receipt";
    receipt_hash: string;
}>]>;
export declare const StateChangeTypeSchema: z.ZodEnum<["account_update", "account_deletion", "access_key_update", "access_key_deletion", "data_update", "data_deletion", "contract_code_update", "contract_code_deletion"]>;
export declare const StateChangeValueSchema: z.ZodObject<{
    account_id: z.ZodString;
    key_base64: z.ZodOptional<z.ZodString>;
    value_base64: z.ZodOptional<z.ZodString>;
    public_key: z.ZodOptional<z.ZodObject<{
        keyType: z.ZodNumber;
        data: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data: string;
        keyType: number;
    }, {
        data: string;
        keyType: number;
    }>>;
    access_key: z.ZodOptional<z.ZodObject<{
        nonce: z.ZodNumber;
        permission: z.ZodUnion<[z.ZodLiteral<"FullAccess">, z.ZodObject<{
            FunctionCall: z.ZodObject<{
                allowance: z.ZodOptional<z.ZodString>;
                receiverId: z.ZodString;
                methodNames: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            }, {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        }, {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        }>]>;
    }, "strip", z.ZodTypeAny, {
        nonce: number;
        permission: "FullAccess" | {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        };
    }, {
        nonce: number;
        permission: "FullAccess" | {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        };
    }>>;
    account: z.ZodOptional<z.ZodObject<{
        amount: z.ZodString;
        locked: z.ZodString;
        codeHash: z.ZodString;
        storageUsage: z.ZodNumber;
        storagePaidAt: z.ZodNumber;
        blockHeight: z.ZodNumber;
        blockHash: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blockHash: string;
        blockHeight: number;
        amount: string;
        locked: string;
        codeHash: string;
        storageUsage: number;
        storagePaidAt: number;
    }, {
        blockHash: string;
        blockHeight: number;
        amount: string;
        locked: string;
        codeHash: string;
        storageUsage: number;
        storagePaidAt: number;
    }>>;
    code_base64: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    account_id: string;
    key_base64?: string | undefined;
    value_base64?: string | undefined;
    public_key?: {
        data: string;
        keyType: number;
    } | undefined;
    access_key?: {
        nonce: number;
        permission: "FullAccess" | {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        };
    } | undefined;
    account?: {
        blockHash: string;
        blockHeight: number;
        amount: string;
        locked: string;
        codeHash: string;
        storageUsage: number;
        storagePaidAt: number;
    } | undefined;
    code_base64?: string | undefined;
}, {
    account_id: string;
    key_base64?: string | undefined;
    value_base64?: string | undefined;
    public_key?: {
        data: string;
        keyType: number;
    } | undefined;
    access_key?: {
        nonce: number;
        permission: "FullAccess" | {
            FunctionCall: {
                receiverId: string;
                methodNames: string[];
                allowance?: string | undefined;
            };
        };
    } | undefined;
    account?: {
        blockHash: string;
        blockHeight: number;
        amount: string;
        locked: string;
        codeHash: string;
        storageUsage: number;
        storagePaidAt: number;
    } | undefined;
    code_base64?: string | undefined;
}>;
export declare const StateChangeSchema: z.ZodObject<{
    cause: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"transaction_processing">;
        tx_hash: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "transaction_processing";
        tx_hash: string;
    }, {
        type: "transaction_processing";
        tx_hash: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"action_receipt_processing_started">;
        receipt_hash: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "action_receipt_processing_started";
        receipt_hash: string;
    }, {
        type: "action_receipt_processing_started";
        receipt_hash: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"action_receipt_gas_reward">;
        receipt_hash: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "action_receipt_gas_reward";
        receipt_hash: string;
    }, {
        type: "action_receipt_gas_reward";
        receipt_hash: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"receipt_processing">;
        receipt_hash: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "receipt_processing";
        receipt_hash: string;
    }, {
        type: "receipt_processing";
        receipt_hash: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"postponed_receipt">;
        receipt_hash: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "postponed_receipt";
        receipt_hash: string;
    }, {
        type: "postponed_receipt";
        receipt_hash: string;
    }>]>;
    type: z.ZodEnum<["account_update", "account_deletion", "access_key_update", "access_key_deletion", "data_update", "data_deletion", "contract_code_update", "contract_code_deletion"]>;
    change: z.ZodObject<{
        account_id: z.ZodString;
        key_base64: z.ZodOptional<z.ZodString>;
        value_base64: z.ZodOptional<z.ZodString>;
        public_key: z.ZodOptional<z.ZodObject<{
            keyType: z.ZodNumber;
            data: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data: string;
            keyType: number;
        }, {
            data: string;
            keyType: number;
        }>>;
        access_key: z.ZodOptional<z.ZodObject<{
            nonce: z.ZodNumber;
            permission: z.ZodUnion<[z.ZodLiteral<"FullAccess">, z.ZodObject<{
                FunctionCall: z.ZodObject<{
                    allowance: z.ZodOptional<z.ZodString>;
                    receiverId: z.ZodString;
                    methodNames: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                }, {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            }, {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            }>]>;
        }, "strip", z.ZodTypeAny, {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        }, {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        }>>;
        account: z.ZodOptional<z.ZodObject<{
            amount: z.ZodString;
            locked: z.ZodString;
            codeHash: z.ZodString;
            storageUsage: z.ZodNumber;
            storagePaidAt: z.ZodNumber;
            blockHeight: z.ZodNumber;
            blockHash: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            blockHash: string;
            blockHeight: number;
            amount: string;
            locked: string;
            codeHash: string;
            storageUsage: number;
            storagePaidAt: number;
        }, {
            blockHash: string;
            blockHeight: number;
            amount: string;
            locked: string;
            codeHash: string;
            storageUsage: number;
            storagePaidAt: number;
        }>>;
        code_base64: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        account_id: string;
        key_base64?: string | undefined;
        value_base64?: string | undefined;
        public_key?: {
            data: string;
            keyType: number;
        } | undefined;
        access_key?: {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        } | undefined;
        account?: {
            blockHash: string;
            blockHeight: number;
            amount: string;
            locked: string;
            codeHash: string;
            storageUsage: number;
            storagePaidAt: number;
        } | undefined;
        code_base64?: string | undefined;
    }, {
        account_id: string;
        key_base64?: string | undefined;
        value_base64?: string | undefined;
        public_key?: {
            data: string;
            keyType: number;
        } | undefined;
        access_key?: {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        } | undefined;
        account?: {
            blockHash: string;
            blockHeight: number;
            amount: string;
            locked: string;
            codeHash: string;
            storageUsage: number;
            storagePaidAt: number;
        } | undefined;
        code_base64?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "account_update" | "account_deletion" | "access_key_update" | "access_key_deletion" | "data_update" | "data_deletion" | "contract_code_update" | "contract_code_deletion";
    cause: {
        type: "transaction_processing";
        tx_hash: string;
    } | {
        type: "action_receipt_processing_started";
        receipt_hash: string;
    } | {
        type: "action_receipt_gas_reward";
        receipt_hash: string;
    } | {
        type: "receipt_processing";
        receipt_hash: string;
    } | {
        type: "postponed_receipt";
        receipt_hash: string;
    };
    change: {
        account_id: string;
        key_base64?: string | undefined;
        value_base64?: string | undefined;
        public_key?: {
            data: string;
            keyType: number;
        } | undefined;
        access_key?: {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        } | undefined;
        account?: {
            blockHash: string;
            blockHeight: number;
            amount: string;
            locked: string;
            codeHash: string;
            storageUsage: number;
            storagePaidAt: number;
        } | undefined;
        code_base64?: string | undefined;
    };
}, {
    type: "account_update" | "account_deletion" | "access_key_update" | "access_key_deletion" | "data_update" | "data_deletion" | "contract_code_update" | "contract_code_deletion";
    cause: {
        type: "transaction_processing";
        tx_hash: string;
    } | {
        type: "action_receipt_processing_started";
        receipt_hash: string;
    } | {
        type: "action_receipt_gas_reward";
        receipt_hash: string;
    } | {
        type: "receipt_processing";
        receipt_hash: string;
    } | {
        type: "postponed_receipt";
        receipt_hash: string;
    };
    change: {
        account_id: string;
        key_base64?: string | undefined;
        value_base64?: string | undefined;
        public_key?: {
            data: string;
            keyType: number;
        } | undefined;
        access_key?: {
            nonce: number;
            permission: "FullAccess" | {
                FunctionCall: {
                    receiverId: string;
                    methodNames: string[];
                    allowance?: string | undefined;
                };
            };
        } | undefined;
        account?: {
            blockHash: string;
            blockHeight: number;
            amount: string;
            locked: string;
            codeHash: string;
            storageUsage: number;
            storagePaidAt: number;
        } | undefined;
        code_base64?: string | undefined;
    };
}>;
export declare const ContractStateChangesResponseSchema: z.ZodObject<{
    changes: z.ZodArray<z.ZodObject<{
        cause: z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"transaction_processing">;
            tx_hash: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "transaction_processing";
            tx_hash: string;
        }, {
            type: "transaction_processing";
            tx_hash: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"action_receipt_processing_started">;
            receipt_hash: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "action_receipt_processing_started";
            receipt_hash: string;
        }, {
            type: "action_receipt_processing_started";
            receipt_hash: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"action_receipt_gas_reward">;
            receipt_hash: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "action_receipt_gas_reward";
            receipt_hash: string;
        }, {
            type: "action_receipt_gas_reward";
            receipt_hash: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"receipt_processing">;
            receipt_hash: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "receipt_processing";
            receipt_hash: string;
        }, {
            type: "receipt_processing";
            receipt_hash: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"postponed_receipt">;
            receipt_hash: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "postponed_receipt";
            receipt_hash: string;
        }, {
            type: "postponed_receipt";
            receipt_hash: string;
        }>]>;
        type: z.ZodEnum<["account_update", "account_deletion", "access_key_update", "access_key_deletion", "data_update", "data_deletion", "contract_code_update", "contract_code_deletion"]>;
        change: z.ZodObject<{
            account_id: z.ZodString;
            key_base64: z.ZodOptional<z.ZodString>;
            value_base64: z.ZodOptional<z.ZodString>;
            public_key: z.ZodOptional<z.ZodObject<{
                keyType: z.ZodNumber;
                data: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                data: string;
                keyType: number;
            }, {
                data: string;
                keyType: number;
            }>>;
            access_key: z.ZodOptional<z.ZodObject<{
                nonce: z.ZodNumber;
                permission: z.ZodUnion<[z.ZodLiteral<"FullAccess">, z.ZodObject<{
                    FunctionCall: z.ZodObject<{
                        allowance: z.ZodOptional<z.ZodString>;
                        receiverId: z.ZodString;
                        methodNames: z.ZodArray<z.ZodString, "many">;
                    }, "strip", z.ZodTypeAny, {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    }, {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    FunctionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                }, {
                    FunctionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                }>]>;
            }, "strip", z.ZodTypeAny, {
                nonce: number;
                permission: "FullAccess" | {
                    FunctionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            }, {
                nonce: number;
                permission: "FullAccess" | {
                    FunctionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            }>>;
            account: z.ZodOptional<z.ZodObject<{
                amount: z.ZodString;
                locked: z.ZodString;
                codeHash: z.ZodString;
                storageUsage: z.ZodNumber;
                storagePaidAt: z.ZodNumber;
                blockHeight: z.ZodNumber;
                blockHash: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                blockHash: string;
                blockHeight: number;
                amount: string;
                locked: string;
                codeHash: string;
                storageUsage: number;
                storagePaidAt: number;
            }, {
                blockHash: string;
                blockHeight: number;
                amount: string;
                locked: string;
                codeHash: string;
                storageUsage: number;
                storagePaidAt: number;
            }>>;
            code_base64: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            account_id: string;
            key_base64?: string | undefined;
            value_base64?: string | undefined;
            public_key?: {
                data: string;
                keyType: number;
            } | undefined;
            access_key?: {
                nonce: number;
                permission: "FullAccess" | {
                    FunctionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            } | undefined;
            account?: {
                blockHash: string;
                blockHeight: number;
                amount: string;
                locked: string;
                codeHash: string;
                storageUsage: number;
                storagePaidAt: number;
            } | undefined;
            code_base64?: string | undefined;
        }, {
            account_id: string;
            key_base64?: string | undefined;
            value_base64?: string | undefined;
            public_key?: {
                data: string;
                keyType: number;
            } | undefined;
            access_key?: {
                nonce: number;
                permission: "FullAccess" | {
                    FunctionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            } | undefined;
            account?: {
                blockHash: string;
                blockHeight: number;
                amount: string;
                locked: string;
                codeHash: string;
                storageUsage: number;
                storagePaidAt: number;
            } | undefined;
            code_base64?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "account_update" | "account_deletion" | "access_key_update" | "access_key_deletion" | "data_update" | "data_deletion" | "contract_code_update" | "contract_code_deletion";
        cause: {
            type: "transaction_processing";
            tx_hash: string;
        } | {
            type: "action_receipt_processing_started";
            receipt_hash: string;
        } | {
            type: "action_receipt_gas_reward";
            receipt_hash: string;
        } | {
            type: "receipt_processing";
            receipt_hash: string;
        } | {
            type: "postponed_receipt";
            receipt_hash: string;
        };
        change: {
            account_id: string;
            key_base64?: string | undefined;
            value_base64?: string | undefined;
            public_key?: {
                data: string;
                keyType: number;
            } | undefined;
            access_key?: {
                nonce: number;
                permission: "FullAccess" | {
                    FunctionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            } | undefined;
            account?: {
                blockHash: string;
                blockHeight: number;
                amount: string;
                locked: string;
                codeHash: string;
                storageUsage: number;
                storagePaidAt: number;
            } | undefined;
            code_base64?: string | undefined;
        };
    }, {
        type: "account_update" | "account_deletion" | "access_key_update" | "access_key_deletion" | "data_update" | "data_deletion" | "contract_code_update" | "contract_code_deletion";
        cause: {
            type: "transaction_processing";
            tx_hash: string;
        } | {
            type: "action_receipt_processing_started";
            receipt_hash: string;
        } | {
            type: "action_receipt_gas_reward";
            receipt_hash: string;
        } | {
            type: "receipt_processing";
            receipt_hash: string;
        } | {
            type: "postponed_receipt";
            receipt_hash: string;
        };
        change: {
            account_id: string;
            key_base64?: string | undefined;
            value_base64?: string | undefined;
            public_key?: {
                data: string;
                keyType: number;
            } | undefined;
            access_key?: {
                nonce: number;
                permission: "FullAccess" | {
                    FunctionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            } | undefined;
            account?: {
                blockHash: string;
                blockHeight: number;
                amount: string;
                locked: string;
                codeHash: string;
                storageUsage: number;
                storagePaidAt: number;
            } | undefined;
            code_base64?: string | undefined;
        };
    }>, "many">;
    blockHash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    blockHash: string;
    changes: {
        type: "account_update" | "account_deletion" | "access_key_update" | "access_key_deletion" | "data_update" | "data_deletion" | "contract_code_update" | "contract_code_deletion";
        cause: {
            type: "transaction_processing";
            tx_hash: string;
        } | {
            type: "action_receipt_processing_started";
            receipt_hash: string;
        } | {
            type: "action_receipt_gas_reward";
            receipt_hash: string;
        } | {
            type: "receipt_processing";
            receipt_hash: string;
        } | {
            type: "postponed_receipt";
            receipt_hash: string;
        };
        change: {
            account_id: string;
            key_base64?: string | undefined;
            value_base64?: string | undefined;
            public_key?: {
                data: string;
                keyType: number;
            } | undefined;
            access_key?: {
                nonce: number;
                permission: "FullAccess" | {
                    FunctionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            } | undefined;
            account?: {
                blockHash: string;
                blockHeight: number;
                amount: string;
                locked: string;
                codeHash: string;
                storageUsage: number;
                storagePaidAt: number;
            } | undefined;
            code_base64?: string | undefined;
        };
    }[];
}, {
    blockHash: string;
    changes: {
        type: "account_update" | "account_deletion" | "access_key_update" | "access_key_deletion" | "data_update" | "data_deletion" | "contract_code_update" | "contract_code_deletion";
        cause: {
            type: "transaction_processing";
            tx_hash: string;
        } | {
            type: "action_receipt_processing_started";
            receipt_hash: string;
        } | {
            type: "action_receipt_gas_reward";
            receipt_hash: string;
        } | {
            type: "receipt_processing";
            receipt_hash: string;
        } | {
            type: "postponed_receipt";
            receipt_hash: string;
        };
        change: {
            account_id: string;
            key_base64?: string | undefined;
            value_base64?: string | undefined;
            public_key?: {
                data: string;
                keyType: number;
            } | undefined;
            access_key?: {
                nonce: number;
                permission: "FullAccess" | {
                    FunctionCall: {
                        receiverId: string;
                        methodNames: string[];
                        allowance?: string | undefined;
                    };
                };
            } | undefined;
            account?: {
                blockHash: string;
                blockHeight: number;
                amount: string;
                locked: string;
                codeHash: string;
                storageUsage: number;
                storagePaidAt: number;
            } | undefined;
            code_base64?: string | undefined;
        };
    }[];
}>;
