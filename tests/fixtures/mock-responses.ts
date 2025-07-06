/**
 * Mock responses for testing NEAR JSON-RPC client
 * 
 * Contains realistic mock data based on actual NEAR Protocol responses
 */

// Mock responses for testing NEAR JSON-RPC client

// Mock block response
export const mockBlockResponse = {
  author: 'test.near',
  header: {
    height: 100,
    epochId: 'epoch-123',
    nextEpochId: 'epoch-124',
    hash: 'ABC123DEF456',
    prevHash: 'DEF456ABC123',
    prevStateRoot: 'state-root-123',
    chunkReceiptsRoot: 'chunk-receipts-root',
    chunkHeadersRoot: 'chunk-headers-root',
    chunkTxRoot: 'chunk-tx-root',
    outcomeRoot: 'outcome-root',
    chunksIncluded: 4,
    challengesRoot: 'challenges-root',
    timestamp: 1640995200000,
    timestampNanosec: '1640995200000000000',
    randomValue: 'random-value',
    validatorProposals: [],
    chunkMask: [true, true, true, true],
    gasPrice: '1000000000',
    rentPaid: '0',
    validatorReward: '1000000000000000000',
    totalSupply: '1000000000000000000000000000',
    challengesResult: [],
    lastFinalBlock: 'last-final-block',
    lastDsFinalBlock: 'last-ds-final-block',
    nextBpHash: 'next-bp-hash',
    blockMerkleRoot: 'block-merkle-root',
    approvals: [null, null, null, null],
    signature: {
      keyType: 0,
      data: 'signature-data',
    },
    latestProtocolVersion: 62,
  },
  chunks: [
    {
      chunkHash: 'chunk-hash-1',
      prevBlockHash: 'prev-block-hash',
      outcomeRoot: 'outcome-root',
      prevStateRoot: 'prev-state-root',
      encodedMerkleRoot: 'encoded-merkle-root',
      encodedLength: 100,
      heightCreated: 100,
      heightIncluded: 100,
      shardId: 0,
      gasUsed: 1000000,
      gasLimit: 1000000000,
      rentPaid: '0',
      validatorReward: '1000000000000000000',
      balanceBurnt: '0',
      outgoingReceiptsRoot: 'outgoing-receipts-root',
      txRoot: 'tx-root',
      validatorProposals: [],
      signature: {
        keyType: 0,
        data: 'chunk-signature-data',
      },
    },
  ],
};

// Mock transaction response
export const mockTransactionResponse = {
  status: { SuccessValue: '' },
  transaction: {
    signerId: 'sender.near',
    publicKey: {
      keyType: 0,
      data: 'ed25519:ABC123',
    },
    nonce: 123,
    receiverId: 'receiver.near',
    actions: [
      {
        Transfer: {
          deposit: '1000000000000000000000000',
        },
      },
    ],
    signature: {
      keyType: 0,
      data: 'transaction-signature',
    },
    hash: 'transaction-hash-123',
  },
  transactionOutcome: {
    id: 'transaction-hash-123',
    outcome: {
      logs: [],
      receiptIds: ['receipt-id-1'],
      gasUsed: 2428000000000,
      tokensBurnt: '242800000000000000000',
      executorId: 'sender.near',
      status: { SuccessValue: '' },
    },
    blockHash: 'block-hash-123',
    proof: [],
  },
  receiptsOutcome: [
    {
      id: 'receipt-id-1',
      outcome: {
        logs: [],
        receiptIds: [],
        gasUsed: 2428000000000,
        tokensBurnt: '242800000000000000000',
        executorId: 'receiver.near',
        status: { SuccessValue: '' },
      },
      blockHash: 'block-hash-123',
      proof: [],
    },
  ],
};

// Mock account response
export const mockAccountResponse = {
  amount: '1000000000000000000000000',
  locked: '0',
  codeHash: '11111111111111111111111111111111',
  storageUsage: 182,
  storagePaidAt: 0,
  blockHeight: 100,
  blockHash: 'block-hash-123',
};

// Mock access key list response
export const mockAccessKeyListResponse = {
  keys: [
    {
      publicKey: {
        keyType: 0,
        data: 'ed25519:ABC123',
      },
      accessKey: {
        nonce: 123,
        permission: 'FullAccess',
      },
    },
    {
      publicKey: {
        keyType: 0,
        data: 'ed25519:DEF456',
      },
      accessKey: {
        nonce: 456,
        permission: {
          FunctionCall: {
            allowance: '1000000000000000000000000',
            receiverId: 'contract.near',
            methodNames: ['method1', 'method2'],
          },
        },
      },
    },
  ],
  blockHeight: 100,
  blockHash: 'block-hash-123',
};

// Mock network status response
export const mockNetworkStatusResponse = {
  chainId: 'testnet',
  rpcAddr: 'https://rpc.testnet.near.org',
  syncInfo: {
    latestBlockHash: 'latest-block-hash',
    latestBlockHeight: 100,
    latestBlockTime: '2023-01-01T00:00:00.000Z',
    latestStateRoot: 'latest-state-root',
    syncing: false,
  },
  validators: [
    {
      accountId: 'validator1.near',
      isSlashed: false,
    },
    {
      accountId: 'validator2.near',
      isSlashed: false,
    },
  ],
};

// Mock error responses
export const mockRpcError = {
  code: -32601,
  message: 'Method not found',
  data: {
    name: 'METHOD_NOT_FOUND',
  },
};

export const mockAccountNotFoundError = {
  code: -32000,
  message: 'Server error',
  data: {
    name: 'UNKNOWN_ACCOUNT',
    info: {
      account_id: 'nonexistent.near',
    },
  },
};

export const mockTransactionNotFoundError = {
  code: -32000,
  message: 'Server error',
  data: {
    name: 'UNKNOWN_TRANSACTION',
    info: {
      transaction_hash: 'nonexistent-hash',
    },
  },
};

// Helper functions to create JSON-RPC responses
export function createSuccessResponse<T>(result: T, id: number = 1): any {
  return {
    jsonrpc: '2.0',
    result,
    id,
  };
}

export function createErrorResponse(error: any, id: number = 1): any {
  return {
    jsonrpc: '2.0',
    error,
    id,
  };
}

// Mock responses for different scenarios
export const mockResponses = {
  // Block responses
  getLatestBlock: createSuccessResponse(mockBlockResponse),
  getBlockByHeight: createSuccessResponse(mockBlockResponse),
  getBlockByHash: createSuccessResponse(mockBlockResponse),
  getBlockNotFound: createErrorResponse({
    code: -32000,
    message: 'Block not found',
  }),

  // Transaction responses  
  getTransaction: createSuccessResponse(mockTransactionResponse),
  getTransactionNotFound: createErrorResponse(mockTransactionNotFoundError),

  // Account responses
  getAccount: createSuccessResponse(mockAccountResponse),
  getAccountNotFound: createErrorResponse(mockAccountNotFoundError),
  getAccessKeyList: createSuccessResponse(mockAccessKeyListResponse),

  // Network responses
  getNetworkStatus: createSuccessResponse(mockNetworkStatusResponse),
  getGasPrice: createSuccessResponse('1000000000'),

  // Error responses
  methodNotFound: createErrorResponse(mockRpcError),
  internalError: createErrorResponse({
    code: -32603,
    message: 'Internal error',
  }),
  parseError: createErrorResponse({
    code: -32700,
    message: 'Parse error',
  }),
  invalidRequest: createErrorResponse({
    code: -32600,
    message: 'Invalid Request',
  }),
  invalidParams: createErrorResponse({
    code: -32602,
    message: 'Invalid params',
  }),
};

// Test data for validation
export const testData = {
  validBlockId: 'ABC123DEF456',
  validBlockHeight: 100,
  validAccountId: 'test.near',
  validTransactionHash: 'transaction-hash-123',
  validPublicKey: 'ed25519:ABC123',
  validFinality: 'final' as const,
  
  // Invalid data for testing validation
  invalidBlockId: true,
  invalidAccountId: '',
  invalidFinality: 'invalid',
  invalidTransactionHash: 123,
};

// Helper to create mock fetch responses
export function createMockFetch(response: any, ok: boolean = true): jest.Mock {
  return jest.fn().mockResolvedValue({
    ok,
    status: ok ? 200 : 500,
    statusText: ok ? 'OK' : 'Internal Server Error',
    json: jest.fn().mockResolvedValue(response),
  });
}

// Helper to create mock fetch with network error
export function createMockFetchWithNetworkError(error: Error): jest.Mock {
  return jest.fn().mockRejectedValue(error);
}

// Helper to create mock fetch with timeout
export function createMockFetchWithTimeout(delay: number): jest.Mock {
  return jest.fn().mockImplementation(() => 
    new Promise((resolve) => setTimeout(resolve, delay))
  );
}
