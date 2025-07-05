/**
 * Zod schemas for block-related NEAR Protocol JSON-RPC types
 */
import { z } from 'zod';
export declare const BlockQuerySchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    finality: z.ZodOptional<z.ZodEnum<["final", "near-final", "optimistic"]>>;
}, "strip", z.ZodTypeAny, {
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}, {
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}>;
export declare const ChallengeResultSchema: z.ZodObject<{
    accountId: z.ZodString;
    isDoubleSign: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    accountId: string;
    isDoubleSign: boolean;
}, {
    accountId: string;
    isDoubleSign: boolean;
}>;
export declare const BlockHeaderSchema: z.ZodObject<{
    height: z.ZodNumber;
    epochId: z.ZodString;
    nextEpochId: z.ZodString;
    hash: z.ZodString;
    prevHash: z.ZodString;
    prevStateRoot: z.ZodString;
    chunkReceiptsRoot: z.ZodString;
    chunkHeadersRoot: z.ZodString;
    chunkTxRoot: z.ZodString;
    outcomeRoot: z.ZodString;
    chunksIncluded: z.ZodNumber;
    challengesRoot: z.ZodString;
    timestamp: z.ZodNumber;
    timestampNanosec: z.ZodString;
    randomValue: z.ZodString;
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
    chunkMask: z.ZodArray<z.ZodBoolean, "many">;
    gasPrice: z.ZodString;
    rentPaid: z.ZodString;
    validatorReward: z.ZodString;
    totalSupply: z.ZodString;
    challengesResult: z.ZodArray<z.ZodObject<{
        accountId: z.ZodString;
        isDoubleSign: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        accountId: string;
        isDoubleSign: boolean;
    }, {
        accountId: string;
        isDoubleSign: boolean;
    }>, "many">;
    lastFinalBlock: z.ZodString;
    lastDsFinalBlock: z.ZodString;
    nextBpHash: z.ZodString;
    blockMerkleRoot: z.ZodString;
    approvals: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        keyType: z.ZodNumber;
        data: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data: string;
        keyType: number;
    }, {
        data: string;
        keyType: number;
    }>, z.ZodNull]>, "many">;
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
    latestProtocolVersion: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    hash: string;
    outcomeRoot: string;
    prevStateRoot: string;
    rentPaid: string;
    validatorReward: string;
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
    height: number;
    epochId: string;
    nextEpochId: string;
    prevHash: string;
    chunkReceiptsRoot: string;
    chunkHeadersRoot: string;
    chunkTxRoot: string;
    chunksIncluded: number;
    challengesRoot: string;
    timestamp: number;
    timestampNanosec: string;
    randomValue: string;
    chunkMask: boolean[];
    gasPrice: string;
    totalSupply: string;
    challengesResult: {
        accountId: string;
        isDoubleSign: boolean;
    }[];
    lastFinalBlock: string;
    lastDsFinalBlock: string;
    nextBpHash: string;
    blockMerkleRoot: string;
    approvals: ({
        data: string;
        keyType: number;
    } | null)[];
    latestProtocolVersion: number;
}, {
    hash: string;
    outcomeRoot: string;
    prevStateRoot: string;
    rentPaid: string;
    validatorReward: string;
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
    height: number;
    epochId: string;
    nextEpochId: string;
    prevHash: string;
    chunkReceiptsRoot: string;
    chunkHeadersRoot: string;
    chunkTxRoot: string;
    chunksIncluded: number;
    challengesRoot: string;
    timestamp: number;
    timestampNanosec: string;
    randomValue: string;
    chunkMask: boolean[];
    gasPrice: string;
    totalSupply: string;
    challengesResult: {
        accountId: string;
        isDoubleSign: boolean;
    }[];
    lastFinalBlock: string;
    lastDsFinalBlock: string;
    nextBpHash: string;
    blockMerkleRoot: string;
    approvals: ({
        data: string;
        keyType: number;
    } | null)[];
    latestProtocolVersion: number;
}>;
export declare const BlockResponseSchema: z.ZodObject<{
    author: z.ZodString;
    header: z.ZodObject<{
        height: z.ZodNumber;
        epochId: z.ZodString;
        nextEpochId: z.ZodString;
        hash: z.ZodString;
        prevHash: z.ZodString;
        prevStateRoot: z.ZodString;
        chunkReceiptsRoot: z.ZodString;
        chunkHeadersRoot: z.ZodString;
        chunkTxRoot: z.ZodString;
        outcomeRoot: z.ZodString;
        chunksIncluded: z.ZodNumber;
        challengesRoot: z.ZodString;
        timestamp: z.ZodNumber;
        timestampNanosec: z.ZodString;
        randomValue: z.ZodString;
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
        chunkMask: z.ZodArray<z.ZodBoolean, "many">;
        gasPrice: z.ZodString;
        rentPaid: z.ZodString;
        validatorReward: z.ZodString;
        totalSupply: z.ZodString;
        challengesResult: z.ZodArray<z.ZodObject<{
            accountId: z.ZodString;
            isDoubleSign: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            accountId: string;
            isDoubleSign: boolean;
        }, {
            accountId: string;
            isDoubleSign: boolean;
        }>, "many">;
        lastFinalBlock: z.ZodString;
        lastDsFinalBlock: z.ZodString;
        nextBpHash: z.ZodString;
        blockMerkleRoot: z.ZodString;
        approvals: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            keyType: z.ZodNumber;
            data: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data: string;
            keyType: number;
        }, {
            data: string;
            keyType: number;
        }>, z.ZodNull]>, "many">;
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
        latestProtocolVersion: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        hash: string;
        outcomeRoot: string;
        prevStateRoot: string;
        rentPaid: string;
        validatorReward: string;
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
        height: number;
        epochId: string;
        nextEpochId: string;
        prevHash: string;
        chunkReceiptsRoot: string;
        chunkHeadersRoot: string;
        chunkTxRoot: string;
        chunksIncluded: number;
        challengesRoot: string;
        timestamp: number;
        timestampNanosec: string;
        randomValue: string;
        chunkMask: boolean[];
        gasPrice: string;
        totalSupply: string;
        challengesResult: {
            accountId: string;
            isDoubleSign: boolean;
        }[];
        lastFinalBlock: string;
        lastDsFinalBlock: string;
        nextBpHash: string;
        blockMerkleRoot: string;
        approvals: ({
            data: string;
            keyType: number;
        } | null)[];
        latestProtocolVersion: number;
    }, {
        hash: string;
        outcomeRoot: string;
        prevStateRoot: string;
        rentPaid: string;
        validatorReward: string;
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
        height: number;
        epochId: string;
        nextEpochId: string;
        prevHash: string;
        chunkReceiptsRoot: string;
        chunkHeadersRoot: string;
        chunkTxRoot: string;
        chunksIncluded: number;
        challengesRoot: string;
        timestamp: number;
        timestampNanosec: string;
        randomValue: string;
        chunkMask: boolean[];
        gasPrice: string;
        totalSupply: string;
        challengesResult: {
            accountId: string;
            isDoubleSign: boolean;
        }[];
        lastFinalBlock: string;
        lastDsFinalBlock: string;
        nextBpHash: string;
        blockMerkleRoot: string;
        approvals: ({
            data: string;
            keyType: number;
        } | null)[];
        latestProtocolVersion: number;
    }>;
    chunks: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    author: string;
    header: {
        hash: string;
        outcomeRoot: string;
        prevStateRoot: string;
        rentPaid: string;
        validatorReward: string;
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
        height: number;
        epochId: string;
        nextEpochId: string;
        prevHash: string;
        chunkReceiptsRoot: string;
        chunkHeadersRoot: string;
        chunkTxRoot: string;
        chunksIncluded: number;
        challengesRoot: string;
        timestamp: number;
        timestampNanosec: string;
        randomValue: string;
        chunkMask: boolean[];
        gasPrice: string;
        totalSupply: string;
        challengesResult: {
            accountId: string;
            isDoubleSign: boolean;
        }[];
        lastFinalBlock: string;
        lastDsFinalBlock: string;
        nextBpHash: string;
        blockMerkleRoot: string;
        approvals: ({
            data: string;
            keyType: number;
        } | null)[];
        latestProtocolVersion: number;
    };
    chunks: {
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
    }[];
}, {
    author: string;
    header: {
        hash: string;
        outcomeRoot: string;
        prevStateRoot: string;
        rentPaid: string;
        validatorReward: string;
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
        height: number;
        epochId: string;
        nextEpochId: string;
        prevHash: string;
        chunkReceiptsRoot: string;
        chunkHeadersRoot: string;
        chunkTxRoot: string;
        chunksIncluded: number;
        challengesRoot: string;
        timestamp: number;
        timestampNanosec: string;
        randomValue: string;
        chunkMask: boolean[];
        gasPrice: string;
        totalSupply: string;
        challengesResult: {
            accountId: string;
            isDoubleSign: boolean;
        }[];
        lastFinalBlock: string;
        lastDsFinalBlock: string;
        nextBpHash: string;
        blockMerkleRoot: string;
        approvals: ({
            data: string;
            keyType: number;
        } | null)[];
        latestProtocolVersion: number;
    };
    chunks: {
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
    }[];
}>;
export declare const BlockChangesQuerySchema: z.ZodObject<{
    blockId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    finality: z.ZodOptional<z.ZodEnum<["final", "near-final", "optimistic"]>>;
}, "strip", z.ZodTypeAny, {
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}, {
    blockId?: string | number | undefined;
    finality?: "final" | "near-final" | "optimistic" | undefined;
}>;
export declare const BlockChangeSchema: z.ZodObject<{
    type: z.ZodString;
    account_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    account_id: string;
}, {
    type: string;
    account_id: string;
}>;
export declare const BlockChangesResponseSchema: z.ZodObject<{
    blockHash: z.ZodString;
    changes: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        account_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        account_id: string;
    }, {
        type: string;
        account_id: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    blockHash: string;
    changes: {
        type: string;
        account_id: string;
    }[];
}, {
    blockHash: string;
    changes: {
        type: string;
        account_id: string;
    }[];
}>;
export declare const ChunkQuerySchema: z.ZodObject<{
    chunkId: z.ZodOptional<z.ZodString>;
    blockId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    shardId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    blockId?: string | number | undefined;
    shardId?: number | undefined;
    chunkId?: string | undefined;
}, {
    blockId?: string | number | undefined;
    shardId?: number | undefined;
    chunkId?: string | undefined;
}>;
export declare const FunctionCallPermissionSchema: z.ZodObject<{
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
export declare const AccessKeyPermissionSchema: z.ZodUnion<[z.ZodLiteral<"FullAccess">, z.ZodObject<{
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
export declare const AccessKeySchema: z.ZodObject<{
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
export declare const DeployContractActionSchema: z.ZodObject<{
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
export declare const FunctionCallActionSchema: z.ZodObject<{
    methodName: z.ZodString;
    args: z.ZodString;
    gas: z.ZodNumber;
    deposit: z.ZodString;
}, "strip", z.ZodTypeAny, {
    methodName: string;
    args: string;
    gas: number;
    deposit: string;
}, {
    methodName: string;
    args: string;
    gas: number;
    deposit: string;
}>;
export declare const TransferActionSchema: z.ZodObject<{
    deposit: z.ZodString;
}, "strip", z.ZodTypeAny, {
    deposit: string;
}, {
    deposit: string;
}>;
export declare const StakeActionSchema: z.ZodObject<{
    stake: z.ZodString;
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
}, "strip", z.ZodTypeAny, {
    publicKey: {
        data: string;
        keyType: number;
    };
    stake: string;
}, {
    publicKey: {
        data: string;
        keyType: number;
    };
    stake: string;
}>;
export declare const AddKeyActionSchema: z.ZodObject<{
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
export declare const DeleteKeyActionSchema: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    publicKey: {
        data: string;
        keyType: number;
    };
}, {
    publicKey: {
        data: string;
        keyType: number;
    };
}>;
export declare const DeleteAccountActionSchema: z.ZodObject<{
    beneficiaryId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    beneficiaryId: string;
}, {
    beneficiaryId: string;
}>;
export declare const ActionSchema: z.ZodUnion<[z.ZodObject<{
    CreateAccount: z.ZodRecord<z.ZodString, z.ZodNever>;
}, "strip", z.ZodTypeAny, {
    CreateAccount: Record<string, never>;
}, {
    CreateAccount: Record<string, never>;
}>, z.ZodObject<{
    DeployContract: z.ZodObject<{
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
    }, {
        code: string;
    }>;
}, "strip", z.ZodTypeAny, {
    DeployContract: {
        code: string;
    };
}, {
    DeployContract: {
        code: string;
    };
}>, z.ZodObject<{
    FunctionCall: z.ZodObject<{
        methodName: z.ZodString;
        args: z.ZodString;
        gas: z.ZodNumber;
        deposit: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        methodName: string;
        args: string;
        gas: number;
        deposit: string;
    }, {
        methodName: string;
        args: string;
        gas: number;
        deposit: string;
    }>;
}, "strip", z.ZodTypeAny, {
    FunctionCall: {
        methodName: string;
        args: string;
        gas: number;
        deposit: string;
    };
}, {
    FunctionCall: {
        methodName: string;
        args: string;
        gas: number;
        deposit: string;
    };
}>, z.ZodObject<{
    Transfer: z.ZodObject<{
        deposit: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        deposit: string;
    }, {
        deposit: string;
    }>;
}, "strip", z.ZodTypeAny, {
    Transfer: {
        deposit: string;
    };
}, {
    Transfer: {
        deposit: string;
    };
}>, z.ZodObject<{
    Stake: z.ZodObject<{
        stake: z.ZodString;
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
    }, "strip", z.ZodTypeAny, {
        publicKey: {
            data: string;
            keyType: number;
        };
        stake: string;
    }, {
        publicKey: {
            data: string;
            keyType: number;
        };
        stake: string;
    }>;
}, "strip", z.ZodTypeAny, {
    Stake: {
        publicKey: {
            data: string;
            keyType: number;
        };
        stake: string;
    };
}, {
    Stake: {
        publicKey: {
            data: string;
            keyType: number;
        };
        stake: string;
    };
}>, z.ZodObject<{
    AddKey: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    AddKey: {
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
    };
}, {
    AddKey: {
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
    };
}>, z.ZodObject<{
    DeleteKey: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        publicKey: {
            data: string;
            keyType: number;
        };
    }, {
        publicKey: {
            data: string;
            keyType: number;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    DeleteKey: {
        publicKey: {
            data: string;
            keyType: number;
        };
    };
}, {
    DeleteKey: {
        publicKey: {
            data: string;
            keyType: number;
        };
    };
}>, z.ZodObject<{
    DeleteAccount: z.ZodObject<{
        beneficiaryId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        beneficiaryId: string;
    }, {
        beneficiaryId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    DeleteAccount: {
        beneficiaryId: string;
    };
}, {
    DeleteAccount: {
        beneficiaryId: string;
    };
}>]>;
export declare const TransactionSchema: z.ZodObject<{
    signerId: z.ZodString;
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
    nonce: z.ZodNumber;
    receiverId: z.ZodString;
    actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        CreateAccount: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, "strip", z.ZodTypeAny, {
        CreateAccount: Record<string, never>;
    }, {
        CreateAccount: Record<string, never>;
    }>, z.ZodObject<{
        DeployContract: z.ZodObject<{
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
        }, {
            code: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        DeployContract: {
            code: string;
        };
    }, {
        DeployContract: {
            code: string;
        };
    }>, z.ZodObject<{
        FunctionCall: z.ZodObject<{
            methodName: z.ZodString;
            args: z.ZodString;
            gas: z.ZodNumber;
            deposit: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        }, {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        FunctionCall: {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        };
    }, {
        FunctionCall: {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        };
    }>, z.ZodObject<{
        Transfer: z.ZodObject<{
            deposit: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            deposit: string;
        }, {
            deposit: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        Transfer: {
            deposit: string;
        };
    }, {
        Transfer: {
            deposit: string;
        };
    }>, z.ZodObject<{
        Stake: z.ZodObject<{
            stake: z.ZodString;
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
        }, "strip", z.ZodTypeAny, {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        }, {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        Stake: {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        };
    }, {
        Stake: {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        };
    }>, z.ZodObject<{
        AddKey: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        AddKey: {
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
        };
    }, {
        AddKey: {
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
        };
    }>, z.ZodObject<{
        DeleteKey: z.ZodObject<{
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
        }, "strip", z.ZodTypeAny, {
            publicKey: {
                data: string;
                keyType: number;
            };
        }, {
            publicKey: {
                data: string;
                keyType: number;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        DeleteKey: {
            publicKey: {
                data: string;
                keyType: number;
            };
        };
    }, {
        DeleteKey: {
            publicKey: {
                data: string;
                keyType: number;
            };
        };
    }>, z.ZodObject<{
        DeleteAccount: z.ZodObject<{
            beneficiaryId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            beneficiaryId: string;
        }, {
            beneficiaryId: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        DeleteAccount: {
            beneficiaryId: string;
        };
    }, {
        DeleteAccount: {
            beneficiaryId: string;
        };
    }>]>, "many">;
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
    hash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    hash: string;
    publicKey: {
        data: string;
        keyType: number;
    };
    signature: {
        data: string;
        keyType: number;
    };
    receiverId: string;
    nonce: number;
    signerId: string;
    actions: ({
        CreateAccount: Record<string, never>;
    } | {
        DeployContract: {
            code: string;
        };
    } | {
        FunctionCall: {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        };
    } | {
        Transfer: {
            deposit: string;
        };
    } | {
        Stake: {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        };
    } | {
        AddKey: {
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
        };
    } | {
        DeleteKey: {
            publicKey: {
                data: string;
                keyType: number;
            };
        };
    } | {
        DeleteAccount: {
            beneficiaryId: string;
        };
    })[];
}, {
    hash: string;
    publicKey: {
        data: string;
        keyType: number;
    };
    signature: {
        data: string;
        keyType: number;
    };
    receiverId: string;
    nonce: number;
    signerId: string;
    actions: ({
        CreateAccount: Record<string, never>;
    } | {
        DeployContract: {
            code: string;
        };
    } | {
        FunctionCall: {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        };
    } | {
        Transfer: {
            deposit: string;
        };
    } | {
        Stake: {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        };
    } | {
        AddKey: {
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
        };
    } | {
        DeleteKey: {
            publicKey: {
                data: string;
                keyType: number;
            };
        };
    } | {
        DeleteAccount: {
            beneficiaryId: string;
        };
    })[];
}>;
export declare const DataReceiverSchema: z.ZodObject<{
    dataId: z.ZodString;
    receiverId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    receiverId: string;
    dataId: string;
}, {
    receiverId: string;
    dataId: string;
}>;
export declare const ActionReceiptSchema: z.ZodObject<{
    signerId: z.ZodString;
    signerPublicKey: z.ZodObject<{
        keyType: z.ZodNumber;
        data: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data: string;
        keyType: number;
    }, {
        data: string;
        keyType: number;
    }>;
    gasPrice: z.ZodString;
    outputDataReceivers: z.ZodArray<z.ZodObject<{
        dataId: z.ZodString;
        receiverId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        receiverId: string;
        dataId: string;
    }, {
        receiverId: string;
        dataId: string;
    }>, "many">;
    inputDataIds: z.ZodArray<z.ZodString, "many">;
    actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        CreateAccount: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, "strip", z.ZodTypeAny, {
        CreateAccount: Record<string, never>;
    }, {
        CreateAccount: Record<string, never>;
    }>, z.ZodObject<{
        DeployContract: z.ZodObject<{
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
        }, {
            code: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        DeployContract: {
            code: string;
        };
    }, {
        DeployContract: {
            code: string;
        };
    }>, z.ZodObject<{
        FunctionCall: z.ZodObject<{
            methodName: z.ZodString;
            args: z.ZodString;
            gas: z.ZodNumber;
            deposit: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        }, {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        FunctionCall: {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        };
    }, {
        FunctionCall: {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        };
    }>, z.ZodObject<{
        Transfer: z.ZodObject<{
            deposit: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            deposit: string;
        }, {
            deposit: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        Transfer: {
            deposit: string;
        };
    }, {
        Transfer: {
            deposit: string;
        };
    }>, z.ZodObject<{
        Stake: z.ZodObject<{
            stake: z.ZodString;
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
        }, "strip", z.ZodTypeAny, {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        }, {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        Stake: {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        };
    }, {
        Stake: {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        };
    }>, z.ZodObject<{
        AddKey: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        AddKey: {
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
        };
    }, {
        AddKey: {
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
        };
    }>, z.ZodObject<{
        DeleteKey: z.ZodObject<{
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
        }, "strip", z.ZodTypeAny, {
            publicKey: {
                data: string;
                keyType: number;
            };
        }, {
            publicKey: {
                data: string;
                keyType: number;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        DeleteKey: {
            publicKey: {
                data: string;
                keyType: number;
            };
        };
    }, {
        DeleteKey: {
            publicKey: {
                data: string;
                keyType: number;
            };
        };
    }>, z.ZodObject<{
        DeleteAccount: z.ZodObject<{
            beneficiaryId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            beneficiaryId: string;
        }, {
            beneficiaryId: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        DeleteAccount: {
            beneficiaryId: string;
        };
    }, {
        DeleteAccount: {
            beneficiaryId: string;
        };
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    gasPrice: string;
    signerId: string;
    actions: ({
        CreateAccount: Record<string, never>;
    } | {
        DeployContract: {
            code: string;
        };
    } | {
        FunctionCall: {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        };
    } | {
        Transfer: {
            deposit: string;
        };
    } | {
        Stake: {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        };
    } | {
        AddKey: {
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
        };
    } | {
        DeleteKey: {
            publicKey: {
                data: string;
                keyType: number;
            };
        };
    } | {
        DeleteAccount: {
            beneficiaryId: string;
        };
    })[];
    signerPublicKey: {
        data: string;
        keyType: number;
    };
    outputDataReceivers: {
        receiverId: string;
        dataId: string;
    }[];
    inputDataIds: string[];
}, {
    gasPrice: string;
    signerId: string;
    actions: ({
        CreateAccount: Record<string, never>;
    } | {
        DeployContract: {
            code: string;
        };
    } | {
        FunctionCall: {
            methodName: string;
            args: string;
            gas: number;
            deposit: string;
        };
    } | {
        Transfer: {
            deposit: string;
        };
    } | {
        Stake: {
            publicKey: {
                data: string;
                keyType: number;
            };
            stake: string;
        };
    } | {
        AddKey: {
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
        };
    } | {
        DeleteKey: {
            publicKey: {
                data: string;
                keyType: number;
            };
        };
    } | {
        DeleteAccount: {
            beneficiaryId: string;
        };
    })[];
    signerPublicKey: {
        data: string;
        keyType: number;
    };
    outputDataReceivers: {
        receiverId: string;
        dataId: string;
    }[];
    inputDataIds: string[];
}>;
export declare const DataReceiptSchema: z.ZodObject<{
    dataId: z.ZodString;
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
    data: string;
    dataId: string;
}, {
    data: string;
    dataId: string;
}>;
export declare const ReceiptEnumSchema: z.ZodUnion<[z.ZodObject<{
    Action: z.ZodObject<{
        signerId: z.ZodString;
        signerPublicKey: z.ZodObject<{
            keyType: z.ZodNumber;
            data: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data: string;
            keyType: number;
        }, {
            data: string;
            keyType: number;
        }>;
        gasPrice: z.ZodString;
        outputDataReceivers: z.ZodArray<z.ZodObject<{
            dataId: z.ZodString;
            receiverId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            receiverId: string;
            dataId: string;
        }, {
            receiverId: string;
            dataId: string;
        }>, "many">;
        inputDataIds: z.ZodArray<z.ZodString, "many">;
        actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            CreateAccount: z.ZodRecord<z.ZodString, z.ZodNever>;
        }, "strip", z.ZodTypeAny, {
            CreateAccount: Record<string, never>;
        }, {
            CreateAccount: Record<string, never>;
        }>, z.ZodObject<{
            DeployContract: z.ZodObject<{
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
            }, {
                code: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            DeployContract: {
                code: string;
            };
        }, {
            DeployContract: {
                code: string;
            };
        }>, z.ZodObject<{
            FunctionCall: z.ZodObject<{
                methodName: z.ZodString;
                args: z.ZodString;
                gas: z.ZodNumber;
                deposit: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            }, {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        }, {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        }>, z.ZodObject<{
            Transfer: z.ZodObject<{
                deposit: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                deposit: string;
            }, {
                deposit: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            Transfer: {
                deposit: string;
            };
        }, {
            Transfer: {
                deposit: string;
            };
        }>, z.ZodObject<{
            Stake: z.ZodObject<{
                stake: z.ZodString;
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
            }, "strip", z.ZodTypeAny, {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            }, {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        }, {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        }>, z.ZodObject<{
            AddKey: z.ZodObject<{
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
        }, "strip", z.ZodTypeAny, {
            AddKey: {
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
            };
        }, {
            AddKey: {
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
            };
        }>, z.ZodObject<{
            DeleteKey: z.ZodObject<{
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
            }, "strip", z.ZodTypeAny, {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            }, {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            }>;
        }, "strip", z.ZodTypeAny, {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        }, {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        }>, z.ZodObject<{
            DeleteAccount: z.ZodObject<{
                beneficiaryId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                beneficiaryId: string;
            }, {
                beneficiaryId: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            DeleteAccount: {
                beneficiaryId: string;
            };
        }, {
            DeleteAccount: {
                beneficiaryId: string;
            };
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        gasPrice: string;
        signerId: string;
        actions: ({
            CreateAccount: Record<string, never>;
        } | {
            DeployContract: {
                code: string;
            };
        } | {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        } | {
            Transfer: {
                deposit: string;
            };
        } | {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        } | {
            AddKey: {
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
            };
        } | {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        } | {
            DeleteAccount: {
                beneficiaryId: string;
            };
        })[];
        signerPublicKey: {
            data: string;
            keyType: number;
        };
        outputDataReceivers: {
            receiverId: string;
            dataId: string;
        }[];
        inputDataIds: string[];
    }, {
        gasPrice: string;
        signerId: string;
        actions: ({
            CreateAccount: Record<string, never>;
        } | {
            DeployContract: {
                code: string;
            };
        } | {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        } | {
            Transfer: {
                deposit: string;
            };
        } | {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        } | {
            AddKey: {
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
            };
        } | {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        } | {
            DeleteAccount: {
                beneficiaryId: string;
            };
        })[];
        signerPublicKey: {
            data: string;
            keyType: number;
        };
        outputDataReceivers: {
            receiverId: string;
            dataId: string;
        }[];
        inputDataIds: string[];
    }>;
}, "strip", z.ZodTypeAny, {
    Action: {
        gasPrice: string;
        signerId: string;
        actions: ({
            CreateAccount: Record<string, never>;
        } | {
            DeployContract: {
                code: string;
            };
        } | {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        } | {
            Transfer: {
                deposit: string;
            };
        } | {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        } | {
            AddKey: {
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
            };
        } | {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        } | {
            DeleteAccount: {
                beneficiaryId: string;
            };
        })[];
        signerPublicKey: {
            data: string;
            keyType: number;
        };
        outputDataReceivers: {
            receiverId: string;
            dataId: string;
        }[];
        inputDataIds: string[];
    };
}, {
    Action: {
        gasPrice: string;
        signerId: string;
        actions: ({
            CreateAccount: Record<string, never>;
        } | {
            DeployContract: {
                code: string;
            };
        } | {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        } | {
            Transfer: {
                deposit: string;
            };
        } | {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        } | {
            AddKey: {
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
            };
        } | {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        } | {
            DeleteAccount: {
                beneficiaryId: string;
            };
        })[];
        signerPublicKey: {
            data: string;
            keyType: number;
        };
        outputDataReceivers: {
            receiverId: string;
            dataId: string;
        }[];
        inputDataIds: string[];
    };
}>, z.ZodObject<{
    Data: z.ZodObject<{
        dataId: z.ZodString;
        data: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data: string;
        dataId: string;
    }, {
        data: string;
        dataId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    Data: {
        data: string;
        dataId: string;
    };
}, {
    Data: {
        data: string;
        dataId: string;
    };
}>]>;
export declare const ReceiptSchema: z.ZodObject<{
    predecessorId: z.ZodString;
    receiverId: z.ZodString;
    receiptId: z.ZodString;
    receipt: z.ZodUnion<[z.ZodObject<{
        Action: z.ZodObject<{
            signerId: z.ZodString;
            signerPublicKey: z.ZodObject<{
                keyType: z.ZodNumber;
                data: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                data: string;
                keyType: number;
            }, {
                data: string;
                keyType: number;
            }>;
            gasPrice: z.ZodString;
            outputDataReceivers: z.ZodArray<z.ZodObject<{
                dataId: z.ZodString;
                receiverId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                receiverId: string;
                dataId: string;
            }, {
                receiverId: string;
                dataId: string;
            }>, "many">;
            inputDataIds: z.ZodArray<z.ZodString, "many">;
            actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                CreateAccount: z.ZodRecord<z.ZodString, z.ZodNever>;
            }, "strip", z.ZodTypeAny, {
                CreateAccount: Record<string, never>;
            }, {
                CreateAccount: Record<string, never>;
            }>, z.ZodObject<{
                DeployContract: z.ZodObject<{
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                }, {
                    code: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                DeployContract: {
                    code: string;
                };
            }, {
                DeployContract: {
                    code: string;
                };
            }>, z.ZodObject<{
                FunctionCall: z.ZodObject<{
                    methodName: z.ZodString;
                    args: z.ZodString;
                    gas: z.ZodNumber;
                    deposit: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    methodName: string;
                    args: string;
                    gas: number;
                    deposit: string;
                }, {
                    methodName: string;
                    args: string;
                    gas: number;
                    deposit: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                FunctionCall: {
                    methodName: string;
                    args: string;
                    gas: number;
                    deposit: string;
                };
            }, {
                FunctionCall: {
                    methodName: string;
                    args: string;
                    gas: number;
                    deposit: string;
                };
            }>, z.ZodObject<{
                Transfer: z.ZodObject<{
                    deposit: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    deposit: string;
                }, {
                    deposit: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                Transfer: {
                    deposit: string;
                };
            }, {
                Transfer: {
                    deposit: string;
                };
            }>, z.ZodObject<{
                Stake: z.ZodObject<{
                    stake: z.ZodString;
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
                }, "strip", z.ZodTypeAny, {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                    stake: string;
                }, {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                    stake: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                Stake: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                    stake: string;
                };
            }, {
                Stake: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                    stake: string;
                };
            }>, z.ZodObject<{
                AddKey: z.ZodObject<{
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
            }, "strip", z.ZodTypeAny, {
                AddKey: {
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
                };
            }, {
                AddKey: {
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
                };
            }>, z.ZodObject<{
                DeleteKey: z.ZodObject<{
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
                }, "strip", z.ZodTypeAny, {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                }, {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                }>;
            }, "strip", z.ZodTypeAny, {
                DeleteKey: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                };
            }, {
                DeleteKey: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                };
            }>, z.ZodObject<{
                DeleteAccount: z.ZodObject<{
                    beneficiaryId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    beneficiaryId: string;
                }, {
                    beneficiaryId: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                DeleteAccount: {
                    beneficiaryId: string;
                };
            }, {
                DeleteAccount: {
                    beneficiaryId: string;
                };
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            gasPrice: string;
            signerId: string;
            actions: ({
                CreateAccount: Record<string, never>;
            } | {
                DeployContract: {
                    code: string;
                };
            } | {
                FunctionCall: {
                    methodName: string;
                    args: string;
                    gas: number;
                    deposit: string;
                };
            } | {
                Transfer: {
                    deposit: string;
                };
            } | {
                Stake: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                    stake: string;
                };
            } | {
                AddKey: {
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
                };
            } | {
                DeleteKey: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                };
            } | {
                DeleteAccount: {
                    beneficiaryId: string;
                };
            })[];
            signerPublicKey: {
                data: string;
                keyType: number;
            };
            outputDataReceivers: {
                receiverId: string;
                dataId: string;
            }[];
            inputDataIds: string[];
        }, {
            gasPrice: string;
            signerId: string;
            actions: ({
                CreateAccount: Record<string, never>;
            } | {
                DeployContract: {
                    code: string;
                };
            } | {
                FunctionCall: {
                    methodName: string;
                    args: string;
                    gas: number;
                    deposit: string;
                };
            } | {
                Transfer: {
                    deposit: string;
                };
            } | {
                Stake: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                    stake: string;
                };
            } | {
                AddKey: {
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
                };
            } | {
                DeleteKey: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                };
            } | {
                DeleteAccount: {
                    beneficiaryId: string;
                };
            })[];
            signerPublicKey: {
                data: string;
                keyType: number;
            };
            outputDataReceivers: {
                receiverId: string;
                dataId: string;
            }[];
            inputDataIds: string[];
        }>;
    }, "strip", z.ZodTypeAny, {
        Action: {
            gasPrice: string;
            signerId: string;
            actions: ({
                CreateAccount: Record<string, never>;
            } | {
                DeployContract: {
                    code: string;
                };
            } | {
                FunctionCall: {
                    methodName: string;
                    args: string;
                    gas: number;
                    deposit: string;
                };
            } | {
                Transfer: {
                    deposit: string;
                };
            } | {
                Stake: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                    stake: string;
                };
            } | {
                AddKey: {
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
                };
            } | {
                DeleteKey: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                };
            } | {
                DeleteAccount: {
                    beneficiaryId: string;
                };
            })[];
            signerPublicKey: {
                data: string;
                keyType: number;
            };
            outputDataReceivers: {
                receiverId: string;
                dataId: string;
            }[];
            inputDataIds: string[];
        };
    }, {
        Action: {
            gasPrice: string;
            signerId: string;
            actions: ({
                CreateAccount: Record<string, never>;
            } | {
                DeployContract: {
                    code: string;
                };
            } | {
                FunctionCall: {
                    methodName: string;
                    args: string;
                    gas: number;
                    deposit: string;
                };
            } | {
                Transfer: {
                    deposit: string;
                };
            } | {
                Stake: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                    stake: string;
                };
            } | {
                AddKey: {
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
                };
            } | {
                DeleteKey: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                };
            } | {
                DeleteAccount: {
                    beneficiaryId: string;
                };
            })[];
            signerPublicKey: {
                data: string;
                keyType: number;
            };
            outputDataReceivers: {
                receiverId: string;
                dataId: string;
            }[];
            inputDataIds: string[];
        };
    }>, z.ZodObject<{
        Data: z.ZodObject<{
            dataId: z.ZodString;
            data: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data: string;
            dataId: string;
        }, {
            data: string;
            dataId: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        Data: {
            data: string;
            dataId: string;
        };
    }, {
        Data: {
            data: string;
            dataId: string;
        };
    }>]>;
}, "strip", z.ZodTypeAny, {
    receiverId: string;
    predecessorId: string;
    receiptId: string;
    receipt: {
        Action: {
            gasPrice: string;
            signerId: string;
            actions: ({
                CreateAccount: Record<string, never>;
            } | {
                DeployContract: {
                    code: string;
                };
            } | {
                FunctionCall: {
                    methodName: string;
                    args: string;
                    gas: number;
                    deposit: string;
                };
            } | {
                Transfer: {
                    deposit: string;
                };
            } | {
                Stake: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                    stake: string;
                };
            } | {
                AddKey: {
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
                };
            } | {
                DeleteKey: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                };
            } | {
                DeleteAccount: {
                    beneficiaryId: string;
                };
            })[];
            signerPublicKey: {
                data: string;
                keyType: number;
            };
            outputDataReceivers: {
                receiverId: string;
                dataId: string;
            }[];
            inputDataIds: string[];
        };
    } | {
        Data: {
            data: string;
            dataId: string;
        };
    };
}, {
    receiverId: string;
    predecessorId: string;
    receiptId: string;
    receipt: {
        Action: {
            gasPrice: string;
            signerId: string;
            actions: ({
                CreateAccount: Record<string, never>;
            } | {
                DeployContract: {
                    code: string;
                };
            } | {
                FunctionCall: {
                    methodName: string;
                    args: string;
                    gas: number;
                    deposit: string;
                };
            } | {
                Transfer: {
                    deposit: string;
                };
            } | {
                Stake: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                    stake: string;
                };
            } | {
                AddKey: {
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
                };
            } | {
                DeleteKey: {
                    publicKey: {
                        data: string;
                        keyType: number;
                    };
                };
            } | {
                DeleteAccount: {
                    beneficiaryId: string;
                };
            })[];
            signerPublicKey: {
                data: string;
                keyType: number;
            };
            outputDataReceivers: {
                receiverId: string;
                dataId: string;
            }[];
            inputDataIds: string[];
        };
    } | {
        Data: {
            data: string;
            dataId: string;
        };
    };
}>;
export declare const ChunkResponseSchema: z.ZodObject<{
    author: z.ZodString;
    header: z.ZodObject<{
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
    transactions: z.ZodArray<z.ZodObject<{
        signerId: z.ZodString;
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
        nonce: z.ZodNumber;
        receiverId: z.ZodString;
        actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            CreateAccount: z.ZodRecord<z.ZodString, z.ZodNever>;
        }, "strip", z.ZodTypeAny, {
            CreateAccount: Record<string, never>;
        }, {
            CreateAccount: Record<string, never>;
        }>, z.ZodObject<{
            DeployContract: z.ZodObject<{
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
            }, {
                code: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            DeployContract: {
                code: string;
            };
        }, {
            DeployContract: {
                code: string;
            };
        }>, z.ZodObject<{
            FunctionCall: z.ZodObject<{
                methodName: z.ZodString;
                args: z.ZodString;
                gas: z.ZodNumber;
                deposit: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            }, {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        }, {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        }>, z.ZodObject<{
            Transfer: z.ZodObject<{
                deposit: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                deposit: string;
            }, {
                deposit: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            Transfer: {
                deposit: string;
            };
        }, {
            Transfer: {
                deposit: string;
            };
        }>, z.ZodObject<{
            Stake: z.ZodObject<{
                stake: z.ZodString;
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
            }, "strip", z.ZodTypeAny, {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            }, {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        }, {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        }>, z.ZodObject<{
            AddKey: z.ZodObject<{
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
        }, "strip", z.ZodTypeAny, {
            AddKey: {
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
            };
        }, {
            AddKey: {
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
            };
        }>, z.ZodObject<{
            DeleteKey: z.ZodObject<{
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
            }, "strip", z.ZodTypeAny, {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            }, {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            }>;
        }, "strip", z.ZodTypeAny, {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        }, {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        }>, z.ZodObject<{
            DeleteAccount: z.ZodObject<{
                beneficiaryId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                beneficiaryId: string;
            }, {
                beneficiaryId: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            DeleteAccount: {
                beneficiaryId: string;
            };
        }, {
            DeleteAccount: {
                beneficiaryId: string;
            };
        }>]>, "many">;
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
        hash: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        hash: string;
        publicKey: {
            data: string;
            keyType: number;
        };
        signature: {
            data: string;
            keyType: number;
        };
        receiverId: string;
        nonce: number;
        signerId: string;
        actions: ({
            CreateAccount: Record<string, never>;
        } | {
            DeployContract: {
                code: string;
            };
        } | {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        } | {
            Transfer: {
                deposit: string;
            };
        } | {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        } | {
            AddKey: {
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
            };
        } | {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        } | {
            DeleteAccount: {
                beneficiaryId: string;
            };
        })[];
    }, {
        hash: string;
        publicKey: {
            data: string;
            keyType: number;
        };
        signature: {
            data: string;
            keyType: number;
        };
        receiverId: string;
        nonce: number;
        signerId: string;
        actions: ({
            CreateAccount: Record<string, never>;
        } | {
            DeployContract: {
                code: string;
            };
        } | {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        } | {
            Transfer: {
                deposit: string;
            };
        } | {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        } | {
            AddKey: {
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
            };
        } | {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        } | {
            DeleteAccount: {
                beneficiaryId: string;
            };
        })[];
    }>, "many">;
    receipts: z.ZodArray<z.ZodObject<{
        predecessorId: z.ZodString;
        receiverId: z.ZodString;
        receiptId: z.ZodString;
        receipt: z.ZodUnion<[z.ZodObject<{
            Action: z.ZodObject<{
                signerId: z.ZodString;
                signerPublicKey: z.ZodObject<{
                    keyType: z.ZodNumber;
                    data: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    data: string;
                    keyType: number;
                }, {
                    data: string;
                    keyType: number;
                }>;
                gasPrice: z.ZodString;
                outputDataReceivers: z.ZodArray<z.ZodObject<{
                    dataId: z.ZodString;
                    receiverId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    receiverId: string;
                    dataId: string;
                }, {
                    receiverId: string;
                    dataId: string;
                }>, "many">;
                inputDataIds: z.ZodArray<z.ZodString, "many">;
                actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    CreateAccount: z.ZodRecord<z.ZodString, z.ZodNever>;
                }, "strip", z.ZodTypeAny, {
                    CreateAccount: Record<string, never>;
                }, {
                    CreateAccount: Record<string, never>;
                }>, z.ZodObject<{
                    DeployContract: z.ZodObject<{
                        code: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        code: string;
                    }, {
                        code: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    DeployContract: {
                        code: string;
                    };
                }, {
                    DeployContract: {
                        code: string;
                    };
                }>, z.ZodObject<{
                    FunctionCall: z.ZodObject<{
                        methodName: z.ZodString;
                        args: z.ZodString;
                        gas: z.ZodNumber;
                        deposit: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    }, {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    FunctionCall: {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    };
                }, {
                    FunctionCall: {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    };
                }>, z.ZodObject<{
                    Transfer: z.ZodObject<{
                        deposit: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        deposit: string;
                    }, {
                        deposit: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    Transfer: {
                        deposit: string;
                    };
                }, {
                    Transfer: {
                        deposit: string;
                    };
                }>, z.ZodObject<{
                    Stake: z.ZodObject<{
                        stake: z.ZodString;
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
                    }, "strip", z.ZodTypeAny, {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    }, {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    Stake: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    };
                }, {
                    Stake: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    };
                }>, z.ZodObject<{
                    AddKey: z.ZodObject<{
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
                }, "strip", z.ZodTypeAny, {
                    AddKey: {
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
                    };
                }, {
                    AddKey: {
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
                    };
                }>, z.ZodObject<{
                    DeleteKey: z.ZodObject<{
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
                    }, "strip", z.ZodTypeAny, {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    }, {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    }>;
                }, "strip", z.ZodTypeAny, {
                    DeleteKey: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    };
                }, {
                    DeleteKey: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    };
                }>, z.ZodObject<{
                    DeleteAccount: z.ZodObject<{
                        beneficiaryId: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        beneficiaryId: string;
                    }, {
                        beneficiaryId: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    DeleteAccount: {
                        beneficiaryId: string;
                    };
                }, {
                    DeleteAccount: {
                        beneficiaryId: string;
                    };
                }>]>, "many">;
            }, "strip", z.ZodTypeAny, {
                gasPrice: string;
                signerId: string;
                actions: ({
                    CreateAccount: Record<string, never>;
                } | {
                    DeployContract: {
                        code: string;
                    };
                } | {
                    FunctionCall: {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    };
                } | {
                    Transfer: {
                        deposit: string;
                    };
                } | {
                    Stake: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    };
                } | {
                    AddKey: {
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
                    };
                } | {
                    DeleteKey: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    };
                } | {
                    DeleteAccount: {
                        beneficiaryId: string;
                    };
                })[];
                signerPublicKey: {
                    data: string;
                    keyType: number;
                };
                outputDataReceivers: {
                    receiverId: string;
                    dataId: string;
                }[];
                inputDataIds: string[];
            }, {
                gasPrice: string;
                signerId: string;
                actions: ({
                    CreateAccount: Record<string, never>;
                } | {
                    DeployContract: {
                        code: string;
                    };
                } | {
                    FunctionCall: {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    };
                } | {
                    Transfer: {
                        deposit: string;
                    };
                } | {
                    Stake: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    };
                } | {
                    AddKey: {
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
                    };
                } | {
                    DeleteKey: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    };
                } | {
                    DeleteAccount: {
                        beneficiaryId: string;
                    };
                })[];
                signerPublicKey: {
                    data: string;
                    keyType: number;
                };
                outputDataReceivers: {
                    receiverId: string;
                    dataId: string;
                }[];
                inputDataIds: string[];
            }>;
        }, "strip", z.ZodTypeAny, {
            Action: {
                gasPrice: string;
                signerId: string;
                actions: ({
                    CreateAccount: Record<string, never>;
                } | {
                    DeployContract: {
                        code: string;
                    };
                } | {
                    FunctionCall: {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    };
                } | {
                    Transfer: {
                        deposit: string;
                    };
                } | {
                    Stake: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    };
                } | {
                    AddKey: {
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
                    };
                } | {
                    DeleteKey: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    };
                } | {
                    DeleteAccount: {
                        beneficiaryId: string;
                    };
                })[];
                signerPublicKey: {
                    data: string;
                    keyType: number;
                };
                outputDataReceivers: {
                    receiverId: string;
                    dataId: string;
                }[];
                inputDataIds: string[];
            };
        }, {
            Action: {
                gasPrice: string;
                signerId: string;
                actions: ({
                    CreateAccount: Record<string, never>;
                } | {
                    DeployContract: {
                        code: string;
                    };
                } | {
                    FunctionCall: {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    };
                } | {
                    Transfer: {
                        deposit: string;
                    };
                } | {
                    Stake: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    };
                } | {
                    AddKey: {
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
                    };
                } | {
                    DeleteKey: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    };
                } | {
                    DeleteAccount: {
                        beneficiaryId: string;
                    };
                })[];
                signerPublicKey: {
                    data: string;
                    keyType: number;
                };
                outputDataReceivers: {
                    receiverId: string;
                    dataId: string;
                }[];
                inputDataIds: string[];
            };
        }>, z.ZodObject<{
            Data: z.ZodObject<{
                dataId: z.ZodString;
                data: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                data: string;
                dataId: string;
            }, {
                data: string;
                dataId: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            Data: {
                data: string;
                dataId: string;
            };
        }, {
            Data: {
                data: string;
                dataId: string;
            };
        }>]>;
    }, "strip", z.ZodTypeAny, {
        receiverId: string;
        predecessorId: string;
        receiptId: string;
        receipt: {
            Action: {
                gasPrice: string;
                signerId: string;
                actions: ({
                    CreateAccount: Record<string, never>;
                } | {
                    DeployContract: {
                        code: string;
                    };
                } | {
                    FunctionCall: {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    };
                } | {
                    Transfer: {
                        deposit: string;
                    };
                } | {
                    Stake: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    };
                } | {
                    AddKey: {
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
                    };
                } | {
                    DeleteKey: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    };
                } | {
                    DeleteAccount: {
                        beneficiaryId: string;
                    };
                })[];
                signerPublicKey: {
                    data: string;
                    keyType: number;
                };
                outputDataReceivers: {
                    receiverId: string;
                    dataId: string;
                }[];
                inputDataIds: string[];
            };
        } | {
            Data: {
                data: string;
                dataId: string;
            };
        };
    }, {
        receiverId: string;
        predecessorId: string;
        receiptId: string;
        receipt: {
            Action: {
                gasPrice: string;
                signerId: string;
                actions: ({
                    CreateAccount: Record<string, never>;
                } | {
                    DeployContract: {
                        code: string;
                    };
                } | {
                    FunctionCall: {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    };
                } | {
                    Transfer: {
                        deposit: string;
                    };
                } | {
                    Stake: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    };
                } | {
                    AddKey: {
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
                    };
                } | {
                    DeleteKey: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    };
                } | {
                    DeleteAccount: {
                        beneficiaryId: string;
                    };
                })[];
                signerPublicKey: {
                    data: string;
                    keyType: number;
                };
                outputDataReceivers: {
                    receiverId: string;
                    dataId: string;
                }[];
                inputDataIds: string[];
            };
        } | {
            Data: {
                data: string;
                dataId: string;
            };
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    author: string;
    header: {
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
    };
    transactions: {
        hash: string;
        publicKey: {
            data: string;
            keyType: number;
        };
        signature: {
            data: string;
            keyType: number;
        };
        receiverId: string;
        nonce: number;
        signerId: string;
        actions: ({
            CreateAccount: Record<string, never>;
        } | {
            DeployContract: {
                code: string;
            };
        } | {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        } | {
            Transfer: {
                deposit: string;
            };
        } | {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        } | {
            AddKey: {
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
            };
        } | {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        } | {
            DeleteAccount: {
                beneficiaryId: string;
            };
        })[];
    }[];
    receipts: {
        receiverId: string;
        predecessorId: string;
        receiptId: string;
        receipt: {
            Action: {
                gasPrice: string;
                signerId: string;
                actions: ({
                    CreateAccount: Record<string, never>;
                } | {
                    DeployContract: {
                        code: string;
                    };
                } | {
                    FunctionCall: {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    };
                } | {
                    Transfer: {
                        deposit: string;
                    };
                } | {
                    Stake: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    };
                } | {
                    AddKey: {
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
                    };
                } | {
                    DeleteKey: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    };
                } | {
                    DeleteAccount: {
                        beneficiaryId: string;
                    };
                })[];
                signerPublicKey: {
                    data: string;
                    keyType: number;
                };
                outputDataReceivers: {
                    receiverId: string;
                    dataId: string;
                }[];
                inputDataIds: string[];
            };
        } | {
            Data: {
                data: string;
                dataId: string;
            };
        };
    }[];
}, {
    author: string;
    header: {
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
    };
    transactions: {
        hash: string;
        publicKey: {
            data: string;
            keyType: number;
        };
        signature: {
            data: string;
            keyType: number;
        };
        receiverId: string;
        nonce: number;
        signerId: string;
        actions: ({
            CreateAccount: Record<string, never>;
        } | {
            DeployContract: {
                code: string;
            };
        } | {
            FunctionCall: {
                methodName: string;
                args: string;
                gas: number;
                deposit: string;
            };
        } | {
            Transfer: {
                deposit: string;
            };
        } | {
            Stake: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
                stake: string;
            };
        } | {
            AddKey: {
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
            };
        } | {
            DeleteKey: {
                publicKey: {
                    data: string;
                    keyType: number;
                };
            };
        } | {
            DeleteAccount: {
                beneficiaryId: string;
            };
        })[];
    }[];
    receipts: {
        receiverId: string;
        predecessorId: string;
        receiptId: string;
        receipt: {
            Action: {
                gasPrice: string;
                signerId: string;
                actions: ({
                    CreateAccount: Record<string, never>;
                } | {
                    DeployContract: {
                        code: string;
                    };
                } | {
                    FunctionCall: {
                        methodName: string;
                        args: string;
                        gas: number;
                        deposit: string;
                    };
                } | {
                    Transfer: {
                        deposit: string;
                    };
                } | {
                    Stake: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                        stake: string;
                    };
                } | {
                    AddKey: {
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
                    };
                } | {
                    DeleteKey: {
                        publicKey: {
                            data: string;
                            keyType: number;
                        };
                    };
                } | {
                    DeleteAccount: {
                        beneficiaryId: string;
                    };
                })[];
                signerPublicKey: {
                    data: string;
                    keyType: number;
                };
                outputDataReceivers: {
                    receiverId: string;
                    dataId: string;
                }[];
                inputDataIds: string[];
            };
        } | {
            Data: {
                data: string;
                dataId: string;
            };
        };
    }[];
}>;
