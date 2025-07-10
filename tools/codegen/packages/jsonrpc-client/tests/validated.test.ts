/**
 * Comprehensive validation tests for NEAR Protocol RPC client
 * 
 * These tests validate:
 * - Client initialization and configuration
 * - JSON-RPC request formatting
 * - Snake case / camel case conversion
 * - Error handling and retries
 * - Live integration with NEAR testnet
 * - Response validation
 */

import { NearRpcClient, NearRpcError, NetworkError } from '../src/client-validated';
import * as Types from '@near-js/jsonrpc-types/types/validated';
import * as Schemas from '@near-js/jsonrpc-types/schemas/validated';

describe('NearRpcClient Validation Tests', () => {
  let client: NearRpcClient;
  let testnetClient: NearRpcClient;

  beforeEach(() => {
    client = new NearRpcClient({
      endpoint: 'https://rpc.testnet.near.org',
      timeout: 10000,
      retryAttempts: 2,
      validateResponses: true,
    });

    testnetClient = new NearRpcClient({
      endpoint: 'https://rpc.testnet.near.org',
      timeout: 30000,
      retryAttempts: 3,
      validateResponses: true,
    });
  });

  describe('Client Configuration', () => {
    it('should initialize with default configuration', () => {
      expect(client).toBeDefined();
      expect(client.methods).toBeDefined();
    });

    it('should handle endpoint normalization', () => {
      const clientWithSlash = new NearRpcClient({
        endpoint: 'https://rpc.testnet.near.org/',
      });
      expect(clientWithSlash).toBeDefined();
    });

    it('should configure validation settings', () => {
      const clientNoValidation = new NearRpcClient({
        endpoint: 'https://rpc.testnet.near.org',
        validateResponses: false,
      });
      expect(clientNoValidation).toBeDefined();
    });
  });

  describe('JSON-RPC Request Formatting', () => {
    it('should format requests correctly', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          jsonrpc: '2.0',
          result: { chain_id: 'testnet' },
          id: 1,
        }),
      });
      
      global.fetch = mockFetch;

      await client.request('status', {});

      expect(mockFetch).toHaveBeenCalledWith(
        'https://rpc.testnet.near.org/',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'status',
            params: {},
            id: 1,
          }),
        })
      );
    });

    it('should handle path mismatch correctly', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          jsonrpc: '2.0',
          result: {},
          id: 1,
        }),
      });
      
      global.fetch = mockFetch;

      // Test multiple different methods - all should go to "/" endpoint
      await client.request('status', {});
      await client.request('block', { finality: 'final' });
      await client.request('validators', {});

      // All calls should go to the same "/" endpoint
      expect(mockFetch).toHaveBeenCalledTimes(3);
      mockFetch.mock.calls.forEach(call => {
        expect(call[0]).toBe('https://rpc.testnet.near.org/');
      });
    });
  });

  describe('Case Conversion', () => {
    it('should convert camelCase to snake_case for requests', () => {
      const testObj = {
        accountId: 'test.near',
        publicKey: 'ed25519:...',
        blockHeight: 12345,
        nestedData: {
          someField: 'value',
          anotherField: 123,
        },
      };

      const snakeCase = (client as any).convertToSnakeCase(testObj);
      
      expect(snakeCase).toEqual({
        account_id: 'test.near',
        public_key: 'ed25519:...',
        block_height: 12345,
        nested_data: {
          some_field: 'value',
          another_field: 123,
        },
      });
    });

    it('should convert snake_case to camelCase for responses', () => {
      const testObj = {
        account_id: 'test.near',
        public_key: 'ed25519:...',
        block_height: 12345,
        nested_data: {
          some_field: 'value',
          another_field: 123,
        },
      };

      const camelCase = (client as any).convertToCamelCase(testObj);
      
      expect(camelCase).toEqual({
        accountId: 'test.near',
        publicKey: 'ed25519:...',
        blockHeight: 12345,
        nestedData: {
          someField: 'value',
          anotherField: 123,
        },
      });
    });
  });

  describe('Error Handling', () => {
    it('should handle RPC errors correctly', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          jsonrpc: '2.0',
          error: {
            code: -32602,
            message: 'Invalid params',
            data: { details: 'Missing required parameter' },
          },
          id: 1,
        }),
      });
      
      global.fetch = mockFetch;

      await expect(client.request('query', {})).rejects.toThrow(NearRpcError);
      
      try {
        await client.request('query', {});
      } catch (error) {
        expect(error).toBeInstanceOf(NearRpcError);
        expect((error as NearRpcError).code).toBe(-32602);
        expect((error as NearRpcError).message).toBe('Invalid params');
        expect((error as NearRpcError).method).toBe('query');
      }
    });

    it('should handle network errors correctly', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
        text: async () => 'Server Error',
      });
      
      global.fetch = mockFetch;

      await expect(client.request('status', {})).rejects.toThrow(NetworkError);
    });

    it('should handle timeout errors', async () => {
      const timeoutClient = new NearRpcClient({
        endpoint: 'https://rpc.testnet.near.org',
        timeout: 100, // Very short timeout
      });

      const mockFetch = jest.fn().mockImplementation(
        () => new Promise(resolve => setTimeout(resolve, 200))
      );
      
      global.fetch = mockFetch;

      await expect(timeoutClient.request('status', {})).rejects.toThrow(NetworkError);
    });
  });

  describe('Live Integration Tests', () => {
    it('should get node status from testnet', async () => {
      const result = await testnetClient.methods.status();
      
      expect(result).toHaveProperty('version');
      expect(result).toHaveProperty('chainId');
      expect(result).toHaveProperty('syncInfo');
      expect(result.chainId).toBe('testnet');
    });

    it('should get latest block from testnet', async () => {
      const result = await testnetClient.methods.block({ finality: 'final' });
      
      expect(result).toHaveProperty('header');
      expect(result).toHaveProperty('chunks');
      expect(result.header).toHaveProperty('height');
      expect(result.header).toHaveProperty('hash');
    });

    it('should handle validators query', async () => {
      const result = await testnetClient.methods.validators({ finality: 'final' });
      
      expect(result).toHaveProperty('currentValidators');
      expect(Array.isArray(result.currentValidators)).toBe(true);
    });

    it('should handle gas price query', async () => {
      const result = await testnetClient.methods.gasPrice({ finality: 'final' });
      
      expect(result).toHaveProperty('gasPrice');
      expect(typeof result.gasPrice).toBe('string');
    });
  });

  describe('Response Validation', () => {
    it('should validate successful responses', async () => {
      const result = await testnetClient.methods.status();
      
      // Should not throw validation errors
      expect(result).toBeDefined();
    });

    it('should handle validation errors gracefully', async () => {
      const clientWithValidation = new NearRpcClient({
        endpoint: 'https://rpc.testnet.near.org',
        validateResponses: true,
      });

      // This should work without throwing validation errors
      const result = await clientWithValidation.methods.status();
      expect(result).toBeDefined();
    });
  });
});
