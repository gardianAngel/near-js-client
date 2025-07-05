/**
 * Unit tests for NEAR JSON-RPC client
 */

import { NearJsonRpcClient } from '@near-js/jsonrpc-client';
import { NearJsonRpcError, NetworkError, ValidationError } from '@near-js/jsonrpc-client';
import { z } from 'zod';

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('NearJsonRpcClient', () => {
  let client: NearJsonRpcClient;
  
  beforeEach(() => {
    client = new NearJsonRpcClient('https://rpc.testnet.near.org');
    mockFetch.mockClear();
  });

  describe('constructor', () => {
    it('should create client with string URL', () => {
      const testClient = new NearJsonRpcClient('https://rpc.mainnet.near.org');
      expect(testClient.getBaseUrl()).toBe('https://rpc.mainnet.near.org');
      expect(testClient.hasApiKey()).toBe(false);
    });

    it('should create client with options object', () => {
      const testClient = new NearJsonRpcClient({
        baseUrl: 'https://rpc.mainnet.near.org',
        apiKey: 'test-key',
        timeout: 5000,
        retries: 5,
      });
      expect(testClient.getBaseUrl()).toBe('https://rpc.mainnet.near.org');
      expect(testClient.hasApiKey()).toBe(true);
    });
  });

  describe('makeRequest', () => {
    const mockSchema = z.object({
      result: z.string(),
    });

    it('should make successful request', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          result: { result: 'test' },
          id: 1,
        }),
      };
      
      mockFetch.mockResolvedValue(mockResponse);

      const result = await client.makeRequest('test_method', {}, mockSchema);
      
      expect(mockFetch).toHaveBeenCalledWith('https://rpc.testnet.near.org/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'test_method',
          params: {},
          id: 1,
        }),
        signal: expect.any(AbortSignal),
      });
      
      expect(result).toEqual({ result: 'test' });
    });

    it('should include API key in headers when provided', async () => {
      const clientWithKey = new NearJsonRpcClient({
        baseUrl: 'https://rpc.testnet.near.org',
        apiKey: 'test-key',
      });

      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          result: { result: 'test' },
          id: 1,
        }),
      };
      
      mockFetch.mockResolvedValue(mockResponse);

      await clientWithKey.makeRequest('test_method', {}, mockSchema);
      
      expect(mockFetch).toHaveBeenCalledWith('https://rpc.testnet.near.org/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer test-key',
        },
        body: expect.any(String),
        signal: expect.any(AbortSignal),
      });
    });

    it('should throw NetworkError on HTTP error', async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });

      await expect(client.makeRequest('test_method', {}, mockSchema))
        .rejects
        .toThrow(NetworkError);
    });

    it('should throw NearJsonRpcError on RPC error', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          error: {
            code: -32601,
            message: 'Method not found',
          },
          id: 1,
        }),
      });

      await expect(client.makeRequest('test_method', {}, mockSchema))
        .rejects
        .toThrow(NearJsonRpcError);
    });

    it('should throw ValidationError on schema validation failure', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          result: { invalid: 'data' },
          id: 1,
        }),
      });

      await expect(client.makeRequest('test_method', {}, mockSchema))
        .rejects
        .toThrow(ValidationError);
    });

    it('should retry on network errors', async () => {
      const clientWithRetries = new NearJsonRpcClient({
        baseUrl: 'https://rpc.testnet.near.org',
        retries: 2,
        retryDelay: 10,
      });

      mockFetch
        .mockRejectedValueOnce(new TypeError('Network error'))
        .mockRejectedValueOnce(new TypeError('Network error'))
        .mockResolvedValue({
          ok: true,
          json: jest.fn().mockResolvedValue({
            jsonrpc: '2.0',
            result: { result: 'test' },
            id: 1,
          }),
        });

      const result = await clientWithRetries.makeRequest('test_method', {}, mockSchema);
      
      expect(mockFetch).toHaveBeenCalledTimes(3);
      expect(result).toEqual({ result: 'test' });
    });

    it('should handle timeout', async () => {
      const clientWithTimeout = new NearJsonRpcClient({
        baseUrl: 'https://rpc.testnet.near.org',
        timeout: 100,
      });

      mockFetch.mockImplementation(() => 
        new Promise(resolve => setTimeout(resolve, 200))
      );

      await expect(clientWithTimeout.makeRequest('test_method', {}, mockSchema))
        .rejects
        .toThrow(NetworkError);
    });
  });

  describe('block methods', () => {
    it('should get block by finality', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          result: {
            author: 'test.near',
            header: {
              height: 100,
              hash: 'test-hash',
              prevHash: 'prev-hash',
              timestamp: Date.now(),
            },
            chunks: [],
          },
          id: 1,
        }),
      };
      
      mockFetch.mockResolvedValue(mockResponse);

      const block = await client.blocks.getBlock({ finality: 'final' });
      
      expect(mockFetch).toHaveBeenCalledWith('https://rpc.testnet.near.org/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: expect.stringContaining('"method":"block"'),
        signal: expect.any(AbortSignal),
      });
      
      expect(block.author).toBe('test.near');
      expect(block.header.height).toBe(100);
    });

    it('should get latest block', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          result: {
            author: 'test.near',
            header: { height: 100 },
            chunks: [],
          },
          id: 1,
        }),
      };
      
      mockFetch.mockResolvedValue(mockResponse);

      await client.blocks.getLatestBlock();
      
      expect(mockFetch).toHaveBeenCalledWith('https://rpc.testnet.near.org/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: expect.stringContaining('"finality":"final"'),
        signal: expect.any(AbortSignal),
      });
    });
  });

  describe('transaction methods', () => {
    it('should get transaction', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          result: {
            status: { SuccessValue: '' },
            transaction: {
              hash: 'test-hash',
              signerId: 'test.near',
              receiverId: 'receiver.near',
              actions: [],
            },
            transactionOutcome: {
              id: 'test-hash',
              outcome: {
                logs: [],
                receiptIds: [],
                gasUsed: 1000,
                tokensBurnt: '0',
                executorId: 'test.near',
                status: { SuccessValue: '' },
              },
              blockHash: 'block-hash',
              proof: [],
            },
            receiptsOutcome: [],
          },
          id: 1,
        }),
      };
      
      mockFetch.mockResolvedValue(mockResponse);

      const transaction = await client.transactions.getTransaction({
        transactionHash: 'test-hash',
        senderId: 'test.near',
      });
      
      expect(mockFetch).toHaveBeenCalledWith('https://rpc.testnet.near.org/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: expect.stringContaining('"method":"tx"'),
        signal: expect.any(AbortSignal),
      });
      
      expect(transaction.transaction.hash).toBe('test-hash');
      expect(transaction.transaction.signerId).toBe('test.near');
    });
  });

  describe('account methods', () => {
    it('should get account', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          result: {
            amount: '1000000000000000000000000',
            locked: '0',
            codeHash: '11111111111111111111111111111111',
            storageUsage: 182,
            storagePaidAt: 0,
            blockHeight: 100,
            blockHash: 'block-hash',
          },
          id: 1,
        }),
      };
      
      mockFetch.mockResolvedValue(mockResponse);

      const account = await client.accounts.getAccount({
        accountId: 'test.near',
        finality: 'final',
      });
      
      expect(mockFetch).toHaveBeenCalledWith('https://rpc.testnet.near.org/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: expect.stringContaining('"method":"query"'),
        signal: expect.any(AbortSignal),
      });
      
      expect(account.amount).toBe('1000000000000000000000000');
      expect(account.storageUsage).toBe(182);
    });

    it('should check if account exists', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          result: {
            amount: '1000000000000000000000000',
            locked: '0',
            codeHash: '11111111111111111111111111111111',
            storageUsage: 182,
            storagePaidAt: 0,
            blockHeight: 100,
            blockHash: 'block-hash',
          },
          id: 1,
        }),
      };
      
      mockFetch.mockResolvedValue(mockResponse);

      const exists = await client.accounts.accountExists('test.near');
      
      expect(exists).toBe(true);
    });

    it('should return false for non-existent account', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          error: {
            code: -32000,
            message: 'Account test.near does not exist',
          },
          id: 1,
        }),
      });

      const exists = await client.accounts.accountExists('test.near');
      
      expect(exists).toBe(false);
    });
  });

  describe('network methods', () => {
    it('should get network status', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          result: {
            chainId: 'testnet',
            rpcAddr: 'https://rpc.testnet.near.org',
            syncInfo: {
              latestBlockHash: 'latest-hash',
              latestBlockHeight: 100,
              latestBlockTime: '2023-01-01T00:00:00Z',
              latestStateRoot: 'state-root',
              syncing: false,
            },
            validators: [],
          },
          id: 1,
        }),
      };
      
      mockFetch.mockResolvedValue(mockResponse);

      const status = await client.network.getNetworkStatus();
      
      expect(mockFetch).toHaveBeenCalledWith('https://rpc.testnet.near.org/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: expect.stringContaining('"method":"status"'),
        signal: expect.any(AbortSignal),
      });
      
      expect(status.chainId).toBe('testnet');
      expect(status.syncInfo.latestBlockHeight).toBe(100);
    });

    it('should get chain ID', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          jsonrpc: '2.0',
          result: {
            chainId: 'mainnet',
            syncInfo: {
              latestBlockHeight: 100,
              syncing: false,
            },
            validators: [],
          },
          id: 1,
        }),
      };
      
      mockFetch.mockResolvedValue(mockResponse);

      const chainId = await client.network.getChainId();
      
      expect(chainId).toBe('mainnet');
    });
  });
});
