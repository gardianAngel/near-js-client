/**
 * Generated tests for NEAR Protocol JSON-RPC Client
 * Generated from nearcore OpenAPI specification
 */

import { NearJsonRpcClient } from '../src/client-nearcore';
import * as Types from '../src/types/nearcore';

describe('NearJsonRpcClient', () => {
  let client: NearJsonRpcClient;

  beforeEach(() => {
    client = new NearJsonRpcClient({
      endpoint: 'https://rpc.testnet.near.org',
      timeout: 10000,
    });
  });

  describe('Configuration', () => {
    it('should create client with default configuration', () => {
      expect(client).toBeDefined();
      expect(client.methods).toBeDefined();
    });

    it('should create client with custom configuration', () => {
      const customClient = new NearJsonRpcClient({
        endpoint: 'https://rpc.mainnet.near.org',
        headers: { 'X-Custom-Header': 'test' },
        timeout: 20000,
        retryAttempts: 5,
        retryDelay: 2000,
      });

      expect(customClient).toBeDefined();
    });
  });

  describe('Snake case conversion', () => {
    it('should convert camelCase to snake_case', () => {
      const testObj = {
        accountId: 'test.near',
        publicKey: 'ed25519:...',
        blockHeight: 12345,
        nestedData: {
          someField: 'value',
          anotherField: 123,
        },
      };

      // Access private method for testing
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

    it('should convert snake_case to camelCase', () => {
      const testObj = {
        account_id: 'test.near',
        public_key: 'ed25519:...',
        block_height: 12345,
        nested_data: {
          some_field: 'value',
          another_field: 123,
        },
      };

      // Access private method for testing
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

  describe('Error handling', () => {
    it('should handle RPC errors', async () => {
      // Mock fetch to return RPC error
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          jsonrpc: '2.0',
          error: {
            code: -32600,
            message: 'Invalid request',
          },
          id: 'test',
        }),
      });

      await expect(
        client.request('invalid_method', {})
      ).rejects.toThrow('Invalid request');
    });

    it('should handle network errors', async () => {
      // Mock fetch to return network error
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });

      await expect(
        client.request('status', {})
      ).rejects.toThrow('HTTP 500: Internal Server Error');
    });
  });
});
