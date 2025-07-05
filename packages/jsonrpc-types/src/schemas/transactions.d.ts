/**
 * Zod schemas for transaction-related NEAR Protocol JSON-RPC types
 */
import { z } from 'zod';
export declare const TransactionQuerySchema: z.ZodObject<{
    transactionHash: z.ZodString;
    senderId: z.ZodString;
    waitUntil: z.ZodOptional<z.ZodEnum<["NONE", "INCLUDED", "INCLUDED_FINAL", "EXECUTED", "FINAL"]>>;
}, "strip", z.ZodTypeAny, {
    transactionHash: string;
    senderId: string;
    waitUntil?: "NONE" | "INCLUDED" | "INCLUDED_FINAL" | "EXECUTED" | "FINAL" | undefined;
}, {
    transactionHash: string;
    senderId: string;
    waitUntil?: "NONE" | "INCLUDED" | "INCLUDED_FINAL" | "EXECUTED" | "FINAL" | undefined;
}>;
export declare const TransactionFailureSchema: z.ZodObject<{
    error_message: z.ZodString;
    error_type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    error_message: string;
    error_type: string;
}, {
    error_message: string;
    error_type: string;
}>;
export declare const TransactionStatusSchema: z.ZodUnion<[z.ZodObject<{
    Unknown: z.ZodRecord<z.ZodString, z.ZodNever>;
}, "strip", z.ZodTypeAny, {
    Unknown: Record<string, never>;
}, {
    Unknown: Record<string, never>;
}>, z.ZodObject<{
    Pending: z.ZodRecord<z.ZodString, z.ZodNever>;
}, "strip", z.ZodTypeAny, {
    Pending: Record<string, never>;
}, {
    Pending: Record<string, never>;
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
export declare const TransactionResponseSchema: z.ZodObject<{
    status: z.ZodUnion<[z.ZodObject<{
        Unknown: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, "strip", z.ZodTypeAny, {
        Unknown: Record<string, never>;
    }, {
        Unknown: Record<string, never>;
    }>, z.ZodObject<{
        Pending: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, "strip", z.ZodTypeAny, {
        Pending: Record<string, never>;
    }, {
        Pending: Record<string, never>;
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
    transaction: z.ZodObject<{
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
    transactionOutcome: z.ZodObject<{
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
    receiptsOutcome: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    status: {
        Unknown: Record<string, never>;
    } | {
        Pending: Record<string, never>;
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
    transaction: {
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
    };
    transactionOutcome: {
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
    };
    receiptsOutcome: {
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
    }[];
}, {
    status: {
        Unknown: Record<string, never>;
    } | {
        Pending: Record<string, never>;
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
    transaction: {
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
    };
    transactionOutcome: {
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
    };
    receiptsOutcome: {
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
    }[];
}>;
export declare const SendTransactionRequestSchema: z.ZodObject<{
    signedTransaction: z.ZodString;
}, "strip", z.ZodTypeAny, {
    signedTransaction: string;
}, {
    signedTransaction: string;
}>;
export declare const SendTransactionResponseSchema: z.ZodObject<{
    transactionHash: z.ZodString;
    status: z.ZodUnion<[z.ZodObject<{
        Unknown: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, "strip", z.ZodTypeAny, {
        Unknown: Record<string, never>;
    }, {
        Unknown: Record<string, never>;
    }>, z.ZodObject<{
        Pending: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, "strip", z.ZodTypeAny, {
        Pending: Record<string, never>;
    }, {
        Pending: Record<string, never>;
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
        Pending: Record<string, never>;
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
    transactionHash: string;
}, {
    status: {
        Unknown: Record<string, never>;
    } | {
        Pending: Record<string, never>;
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
    transactionHash: string;
}>;
export declare const ReceiptQuerySchema: z.ZodObject<{
    receiptId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    receiptId: string;
}, {
    receiptId: string;
}>;
export declare const ReceiptResponseSchema: z.ZodObject<{
    receipt: z.ZodObject<{
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
    blockHash: z.ZodString;
    blockHeight: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    blockHash: string;
    receipt: {
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
    };
    blockHeight: number;
}, {
    blockHash: string;
    receipt: {
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
    };
    blockHeight: number;
}>;
export declare const TransactionReceiptQuerySchema: z.ZodObject<{
    transactionHash: z.ZodString;
    senderId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transactionHash: string;
    senderId: string;
}, {
    transactionHash: string;
    senderId: string;
}>;
export declare const TransactionReceiptResponseSchema: z.ZodObject<{
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
export declare const SignedTransactionSchema: z.ZodObject<{
    transaction: z.ZodObject<{
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
    signature: {
        data: string;
        keyType: number;
    };
    transaction: {
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
    };
}, {
    signature: {
        data: string;
        keyType: number;
    };
    transaction: {
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
    };
}>;
export declare const BroadcastTransactionRequestSchema: z.ZodObject<{
    signedTransaction: z.ZodString;
}, "strip", z.ZodTypeAny, {
    signedTransaction: string;
}, {
    signedTransaction: string;
}>;
export declare const BroadcastTransactionResponseSchema: z.ZodObject<{
    transactionHash: z.ZodString;
    status: z.ZodUnion<[z.ZodObject<{
        Unknown: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, "strip", z.ZodTypeAny, {
        Unknown: Record<string, never>;
    }, {
        Unknown: Record<string, never>;
    }>, z.ZodObject<{
        Pending: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, "strip", z.ZodTypeAny, {
        Pending: Record<string, never>;
    }, {
        Pending: Record<string, never>;
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
        Pending: Record<string, never>;
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
    transactionHash: string;
}, {
    status: {
        Unknown: Record<string, never>;
    } | {
        Pending: Record<string, never>;
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
    transactionHash: string;
}>;
export declare const TransactionDetailsSchema: z.ZodObject<{
    hash: z.ZodString;
    nonce: z.ZodNumber;
    signerId: z.ZodString;
    receiverId: z.ZodString;
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
    blockHash: z.ZodString;
    blockHeight: z.ZodNumber;
    transactionIndex: z.ZodNumber;
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
    blockHash: string;
    receiverId: string;
    nonce: number;
    signerId: string;
    blockHeight: number;
    transactionIndex: number;
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
    blockHash: string;
    receiverId: string;
    nonce: number;
    signerId: string;
    blockHeight: number;
    transactionIndex: number;
}>;
