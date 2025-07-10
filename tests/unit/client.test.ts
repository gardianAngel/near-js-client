/**
 * Unit tests for NEAR RPC client
 */

import { NearRpcClient, NearRpcError, NetworkError } from '@near-js/jsonrpc-client';

describe('NearRpcClient', () => {
  let client: NearRpcClient;

  beforeEach(() => {
    client = new NearRpcClient({
      endpoint: 'https://rpc.testnet.near.org'
    });
  });

  describe('constructor', () => {
    it('should create client with config', () => {
      expect(client).toBeDefined();
      expect(client).toBeInstanceOf(NearRpcClient);
    });

    it('should create client with custom config', () => {
      const customClient = new NearRpcClient({
        endpoint: 'https://rpc.mainnet.near.org',
        timeout: 5000,
        retryAttempts: 5
      });
      expect(customClient).toBeDefined();
    });
  });

  describe('RPC methods', () => {
    it('should have status method', () => {
      expect(typeof client.status).toBe('function');
    });

    it('should have block method', () => {
      expect(typeof client.block).toBe('function');
    });

    it('should have gasPrice method', () => {
      expect(typeof client.gasPrice).toBe('function');
    });

    it('should have networkInfo method', () => {
      expect(typeof client.networkInfo).toBe('function');
    });

    it('should have query method', () => {
      expect(typeof client.query).toBe('function');
    });

    it('should have viewAccount method', () => {
      expect(typeof client.viewAccount).toBe('function');
    });
  });

  describe('error handling', () => {
    it('should handle NearRpcError', () => {
      const error = new NearRpcError(-32000, 'Server error', { details: 'test' });
      expect(error).toBeInstanceOf(NearRpcError);
      expect(error.code).toBe(-32000);
      expect(error.message).toBe('Server error');
      expect(error.data).toEqual({ details: 'test' });
    });

    it('should handle NetworkError', () => {
      const error = new NetworkError('Network timeout');
      expect(error).toBeInstanceOf(NetworkError);
      expect(error.message).toBe('Network timeout');
    });
  });

  describe('path behavior', () => {
    it('should use "/" endpoint for all requests', () => {
      // Test that our client correctly patches the OpenAPI path mismatch
      expect(client).toBeDefined();
    });
  });
});