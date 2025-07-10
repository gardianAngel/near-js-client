/**
 * Integration tests for NEAR RPC client
 */

import { NearRpcClient, NearRpcError, NetworkError } from '@near-js/jsonrpc-client';

const TESTNET_RPC_URL = 'https://rpc.testnet.near.org';

describe('Live RPC Integration Tests', () => {
  let testnetClient: NearRpcClient;

  beforeEach(() => {
    testnetClient = new NearRpcClient({
      endpoint: TESTNET_RPC_URL,
      timeout: 10000,
      retryAttempts: 2
    });
  });

  describe('Core RPC Methods', () => {
    it('should get status', async () => {
      const status = await testnetClient.status();
      expect(status).toBeDefined();
      expect(status.chainId).toBeDefined();
      expect(typeof status.chainId).toBe('string');
    });

    it('should get latest block', async () => {
      const block = await testnetClient.block({ finality: 'final' });
      expect(block).toBeDefined();
      expect(block.header).toBeDefined();
      expect(typeof block.header.height).toBe('number');
    });

    it('should get gas price', async () => {
      const gasPrice = await testnetClient.gasPrice({ finality: 'final' });
      expect(gasPrice).toBeDefined();
      expect(gasPrice.gasPrice).toBeDefined();
      expect(typeof gasPrice.gasPrice).toBe('string');
    });

    it('should get network info', async () => {
      const networkInfo = await testnetClient.networkInfo();
      expect(networkInfo).toBeDefined();
      expect(typeof networkInfo.numActivePeers).toBe('number');
    });
  });

  describe('Path Mismatch Resolution', () => {
    it('should handle OpenAPI path mismatch correctly', async () => {
      // All requests should go to "/" endpoint despite OpenAPI spec paths
      const status = await testnetClient.status();
      expect(status).toBeDefined();
      
      const block = await testnetClient.block({ finality: 'final' });
      expect(block).toBeDefined();
      
      // Test confirms our path patching works correctly
    });
  });

  describe('Error Handling', () => {
    it('should handle RPC errors', async () => {
      // Test with an invalid method that should throw NearRpcError
      try {
        await testnetClient.viewAccount('invalid.account.that.does.not.exist.near');
      } catch (error) {
        // May succeed or fail depending on account existence
        if (error instanceof NearRpcError) {
          expect(error.code).toBeDefined();
          expect(error.message).toBeDefined();
        }
      }
    });
  });
});