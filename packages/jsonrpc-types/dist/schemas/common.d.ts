/**
 * Zod schemas for common NEAR Protocol JSON-RPC types
 */
import { z } from 'zod';
export declare const FinalitySchema: z.ZodEnum<["final", "near-final", "optimistic"]>;
export declare const BlockIdSchema: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
export declare const BlockReferenceSchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    finality: z.ZodOptional<z.ZodEnum<["final", "near-final", "optimistic"]>>;
}, "strip", z.ZodTypeAny, {
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}, {
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}>;
export declare const JsonRpcRequestSchema: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    method: z.ZodString;
    params: z.ZodUnknown;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    jsonrpc: "2.0";
    method: string;
    id: string | number;
    params?: unknown;
}, {
    jsonrpc: "2.0";
    method: string;
    id: string | number;
    params?: unknown;
}>;
export declare const JsonRpcErrorSchema: z.ZodObject<{
    code: z.ZodNumber;
    message: z.ZodString;
    data: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    code: number;
    message: string;
    data?: unknown;
}, {
    code: number;
    message: string;
    data?: unknown;
}>;
export declare const JsonRpcResponseSchema: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    result: z.ZodOptional<z.ZodUnknown>;
    error: z.ZodOptional<z.ZodObject<{
        code: z.ZodNumber;
        message: z.ZodString;
        data: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        code: number;
        message: string;
        data?: unknown;
    }, {
        code: number;
        message: string;
        data?: unknown;
    }>>;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    jsonrpc: "2.0";
    id: string | number;
    result?: unknown;
    error?: {
        code: number;
        message: string;
        data?: unknown;
    } | undefined;
}, {
    jsonrpc: "2.0";
    id: string | number;
    result?: unknown;
    error?: {
        code: number;
        message: string;
        data?: unknown;
    } | undefined;
}>;
export declare const PublicKeySchema: z.ZodObject<{
    keyType: z.ZodNumber;
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
    data: string;
    keyType: number;
}, {
    data: string;
    keyType: number;
}>;
export declare const SignatureSchema: z.ZodObject<{
    keyType: z.ZodNumber;
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
    data: string;
    keyType: number;
}, {
    data: string;
    keyType: number;
}>;
export declare const MerkleProofSchema: z.ZodObject<{
    hash: z.ZodString;
    direction: z.ZodEnum<["Left", "Right"]>;
}, "strip", z.ZodTypeAny, {
    hash: string;
    direction: "Left" | "Right";
}, {
    hash: string;
    direction: "Left" | "Right";
}>;
export declare const ValidatorStakeSchema: z.ZodObject<{
    accountId: z.ZodString;
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
    stake: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountId: string;
    publicKey: {
        data: string;
        keyType: number;
    };
    stake: string;
}, {
    accountId: string;
    publicKey: {
        data: string;
        keyType: number;
    };
    stake: string;
}>;
export declare const ChunkHeaderSchema: z.ZodObject<{
    chunkHash: z.ZodString;
    prevBlockHash: z.ZodString;
    outcomeRoot: z.ZodString;
    prevStateRoot: z.ZodString;
    encodedMerkleRoot: z.ZodString;
    encodedLength: z.ZodNumber;
    heightCreated: z.ZodNumber;
    heightIncluded: z.ZodNumber;
    shardId: z.ZodNumber;
    gasUsed: z.ZodNumber;
    gasLimit: z.ZodNumber;
    rentPaid: z.ZodString;
    validatorReward: z.ZodString;
    balanceBurnt: z.ZodString;
    outgoingReceiptsRoot: z.ZodString;
    txRoot: z.ZodString;
    validatorProposals: z.ZodArray<z.ZodObject<{
        accountId: z.ZodString;
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
        stake: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        accountId: string;
        publicKey: {
            data: string;
            keyType: number;
        };
        stake: string;
    }, {
        accountId: string;
        publicKey: {
            data: string;
            keyType: number;
        };
        stake: string;
    }>, "many">;
    signature: z.ZodObject<{
        keyType: z.ZodNumber;
        data: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data: string;
        keyType: number;
    }, {
        data: string;
        keyType: number;
    }>;
}, "strip", z.ZodTypeAny, {
    chunkHash: string;
    prevBlockHash: string;
    outcomeRoot: string;
    prevStateRoot: string;
    encodedMerkleRoot: string;
    encodedLength: number;
    heightCreated: number;
    heightIncluded: number;
    shardId: number;
    gasUsed: number;
    gasLimit: number;
    rentPaid: string;
    validatorReward: string;
    balanceBurnt: string;
    outgoingReceiptsRoot: string;
    txRoot: string;
    validatorProposals: {
        accountId: string;
        publicKey: {
            data: string;
            keyType: number;
        };
        stake: string;
    }[];
    signature: {
        data: string;
        keyType: number;
    };
}, {
    chunkHash: string;
    prevBlockHash: string;
    outcomeRoot: string;
    prevStateRoot: string;
    encodedMerkleRoot: string;
    encodedLength: number;
    heightCreated: number;
    heightIncluded: number;
    shardId: number;
    gasUsed: number;
    gasLimit: number;
    rentPaid: string;
    validatorReward: string;
    balanceBurnt: string;
    outgoingReceiptsRoot: string;
    txRoot: string;
    validatorProposals: {
        accountId: string;
        publicKey: {
            data: string;
            keyType: number;
        };
        stake: string;
    }[];
    signature: {
        data: string;
        keyType: number;
    };
}>;
export declare const ExecutionFailureSchema: z.ZodObject<{
    error_message: z.ZodString;
    error_type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    error_message: string;
    error_type: string;
}, {
    error_message: string;
    error_type: string;
}>;
export declare const ExecutionStatusSchema: z.ZodUnion<[z.ZodObject<{
    Unknown: z.ZodRecord<z.ZodString, z.ZodNever>;
}, "strip", z.ZodTypeAny, {
    Unknown: Record<string, never>;
}, {
    Unknown: Record<string, never>;
}>, z.ZodObject<{
    Failure: z.ZodObject<{
        error_message: z.ZodString;
        error_type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        error_message: string;
        error_type: string;
    }, {
        error_message: string;
        error_type: string;
    }>;
}, "strip", z.ZodTypeAny, {
    Failure: {
        error_message: string;
        error_type: string;
    };
}, {
    Failure: {
        error_message: string;
        error_type: string;
    };
}>, z.ZodObject<{
    SuccessValue: z.ZodString;
}, "strip", z.ZodTypeAny, {
    SuccessValue: string;
}, {
    SuccessValue: string;
}>, z.ZodObject<{
    SuccessReceiptId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    SuccessReceiptId: string;
}, {
    SuccessReceiptId: string;
}>]>;
export declare const ExecutionOutcomeSchema: z.ZodObject<{
    logs: z.ZodArray<z.ZodString, "many">;
    receiptIds: z.ZodArray<z.ZodString, "many">;
    gasUsed: z.ZodNumber;
    tokensBurnt: z.ZodString;
    executorId: z.ZodString;
    status: z.ZodUnion<[z.ZodObject<{
        Unknown: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, "strip", z.ZodTypeAny, {
        Unknown: Record<string, never>;
    }, {
        Unknown: Record<string, never>;
    }>, z.ZodObject<{
        Failure: z.ZodObject<{
            error_message: z.ZodString;
            error_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            error_message: string;
            error_type: string;
        }, {
            error_message: string;
            error_type: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        Failure: {
            error_message: string;
            error_type: string;
        };
    }, {
        Failure: {
            error_message: string;
            error_type: string;
        };
    }>, z.ZodObject<{
        SuccessValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        SuccessValue: string;
    }, {
        SuccessValue: string;
    }>, z.ZodObject<{
        SuccessReceiptId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        SuccessReceiptId: string;
    }, {
        SuccessReceiptId: string;
    }>]>;
}, "strip", z.ZodTypeAny, {
    status: {
        Unknown: Record<string, never>;
    } | {
        Failure: {
            error_message: string;
            error_type: string;
        };
    } | {
        SuccessValue: string;
    } | {
        SuccessReceiptId: string;
    };
    gasUsed: number;
    logs: string[];
    receiptIds: string[];
    tokensBurnt: string;
    executorId: string;
}, {
    status: {
        Unknown: Record<string, never>;
    } | {
        Failure: {
            error_message: string;
            error_type: string;
        };
    } | {
        SuccessValue: string;
    } | {
        SuccessReceiptId: string;
    };
    gasUsed: number;
    logs: string[];
    receiptIds: string[];
    tokensBurnt: string;
    executorId: string;
}>;
export declare const ExecutionOutcomeWithIdSchema: z.ZodObject<{
    id: z.ZodString;
    outcome: z.ZodObject<{
        logs: z.ZodArray<z.ZodString, "many">;
        receiptIds: z.ZodArray<z.ZodString, "many">;
        gasUsed: z.ZodNumber;
        tokensBurnt: z.ZodString;
        executorId: z.ZodString;
        status: z.ZodUnion<[z.ZodObject<{
            Unknown: z.ZodRecord<z.ZodString, z.ZodNever>;
        }, "strip", z.ZodTypeAny, {
            Unknown: Record<string, never>;
        }, {
            Unknown: Record<string, never>;
        }>, z.ZodObject<{
            Failure: z.ZodObject<{
                error_message: z.ZodString;
                error_type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                error_message: string;
                error_type: string;
            }, {
                error_message: string;
                error_type: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            Failure: {
                error_message: string;
                error_type: string;
            };
        }, {
            Failure: {
                error_message: string;
                error_type: string;
            };
        }>, z.ZodObject<{
            SuccessValue: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            SuccessValue: string;
        }, {
            SuccessValue: string;
        }>, z.ZodObject<{
            SuccessReceiptId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            SuccessReceiptId: string;
        }, {
            SuccessReceiptId: string;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        status: {
            Unknown: Record<string, never>;
        } | {
            Failure: {
                error_message: string;
                error_type: string;
            };
        } | {
            SuccessValue: string;
        } | {
            SuccessReceiptId: string;
        };
        gasUsed: number;
        logs: string[];
        receiptIds: string[];
        tokensBurnt: string;
        executorId: string;
    }, {
        status: {
            Unknown: Record<string, never>;
        } | {
            Failure: {
                error_message: string;
                error_type: string;
            };
        } | {
            SuccessValue: string;
        } | {
            SuccessReceiptId: string;
        };
        gasUsed: number;
        logs: string[];
        receiptIds: string[];
        tokensBurnt: string;
        executorId: string;
    }>;
    blockHash: z.ZodString;
    proof: z.ZodArray<z.ZodObject<{
        hash: z.ZodString;
        direction: z.ZodEnum<["Left", "Right"]>;
    }, "strip", z.ZodTypeAny, {
        hash: string;
        direction: "Left" | "Right";
    }, {
        hash: string;
        direction: "Left" | "Right";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    outcome: {
        status: {
            Unknown: Record<string, never>;
        } | {
            Failure: {
                error_message: string;
                error_type: string;
            };
        } | {
            SuccessValue: string;
        } | {
            SuccessReceiptId: string;
        };
        gasUsed: number;
        logs: string[];
        receiptIds: string[];
        tokensBurnt: string;
        executorId: string;
    };
    blockHash: string;
    proof: {
        hash: string;
        direction: "Left" | "Right";
    }[];
}, {
    id: string;
    outcome: {
        status: {
            Unknown: Record<string, never>;
        } | {
            Failure: {
                error_message: string;
                error_type: string;
            };
        } | {
            SuccessValue: string;
        } | {
            SuccessReceiptId: string;
        };
        gasUsed: number;
        logs: string[];
        receiptIds: string[];
        tokensBurnt: string;
        executorId: string;
    };
    blockHash: string;
    proof: {
        hash: string;
        direction: "Left" | "Right";
    }[];
}>;
