/**
 * Integration tests with live NEAR RPC endpoints
 * 
 * These tests make actual network requests to NEAR Protocol's RPC endpoints
 * and should be run carefully to avoid rate limiting.
 */

import { NearJsonRpcClient } from '@near-js/jsonrpc-client';
import { NearJsonRpcError, NetworkError } from '@near-js/jsonrpc-client';

// Use testnet for integration tests
const TESTNET_RPC_URL = 'https://rpc.testnet.near.org';
const MAINNET_RPC_URL = 'https://rpc.mainnet.near.org';

describe('Live RPC Integration Tests', () => {
  let testnetClient: NearJsonRpcClient;
  let mainnetClient: NearJsonRpcClient;
  
  beforeAll(() => {
    testnetClient = new NearJsonRpcClient(TESTNET_RPC_URL);
    mainnetClient = new NearJsonRpcClient(MAINNET_RPC_URL);
  });

  describe('Network Status', () => {
    it('should get testnet status', async () => {
      const status = await testnetClient.network.status({});
      
      expect(status.chainId).toBe('testnet');
      expect(status.syncInfo.latestBlockHeight).toBeGreaterThan(0);
      expect(typeof status.syncInfo.latestBlockHash).toBe('string');
      expect(status.syncInfo.latestBlockHash).toMatch(/^[A-Za-z0-9]+$/);
    }, 30000);

    it('should get mainnet status', async () => {
      const status = await mainnetClient.network.status({});
      
      expect(status.chainId).toBe('mainnet');
      expect(status.syncInfo.latestBlockHeight).toBeGreaterThan(0);
      expect(typeof status.syncInfo.latestBlockHash).toBe('string');
    }, 30000);

    it('should get chain ID', async () => {
      const testnetStatus = await testnetClient.network.status({});
      const mainnetStatus = await mainnetClient.network.status({});
      const testnetChainId = testnetStatus.chainId;
      const mainnetChainId = mainnetStatus.chainId;
      
      expect(testnetChainId).toBe('testnet');
      expect(mainnetChainId).toBe('mainnet');
    }, 30000);

    it('should check syncing status', async () => {
      const isSyncing = await testnetClient.network.isSyncing();
      
      expect(typeof isSyncing).toBe('boolean');
    }, 30000);
  });

  describe('Block Operations', () => {
    it('should get latest block', async () => {
      const block = await testnetClient.blocks.getLatestBlock();
      
      expect(block.header).toBeDefined();
      expect(block.header.height).toBeGreaterThan(0);
      expect(block.header.hash).toMatch(/^[A-Za-z0-9]+$/);
      expect(Array.isArray(block.chunks)).toBe(true);
      expect(typeof block.author).toBe('string');
    }, 30000);

    it('should get block by finality', async () => {
      const finalBlock = await testnetClient.blocks.getBlock({ finality: 'final' });
      const optimisticBlock = await testnetClient.blocks.getBlock({ finality: 'optimistic' });
      
      expect(finalBlock.header.height).toBeLessThanOrEqual(optimisticBlock.header.height);
      expect(finalBlock.header.hash).toMatch(/^[A-Za-z0-9]+$/);
      expect(optimisticBlock.header.hash).toMatch(/^[A-Za-z0-9]+$/);
    }, 30000);

    it('should get block by height', async () => {
      // Get a recent block height
      const latestBlock = await testnetClient.blocks.getLatestBlock();
      const targetHeight = latestBlock.header.height - 10;
      
      const block = await testnetClient.blocks.block({ block_id: targetHeight });
      
      expect(block.header.height).toBe(targetHeight);
      expect(block.header.hash).toMatch(/^[A-Za-z0-9]+$/);
    }, 30000);

    it('should get block by hash', async () => {
      const latestBlock = await testnetClient.blocks.getLatestBlock();
      const blockHash = latestBlock.header.hash;
      
      const block = await testnetClient.blocks.getBlockByHash(blockHash);
      
      expect(block.header.hash).toBe(blockHash);
      expect(block.header.height).toBe(latestBlock.header.height);
    }, 30000);

    it('should handle non-existent block', async () => {
      await expect(testnetClient.blocks.block({ block_id: 999999999 }))
        .rejects
        .toThrow(NearJsonRpcError);
    }, 30000);
  });

  describe('Account Operations', () => {
    // Use well-known testnet accounts
    const TESTNET_ACCOUNT = 'testnet';
    const NON_EXISTENT_ACCOUNT = 'this-account-definitely-does-not-exist-12345.testnet';

    it('should get existing account', async () => {
      const account = await testnetClient.accounts.getAccountById(TESTNET_ACCOUNT);
      
      expect(account.amount).toMatch(/^\d+$/);
      expect(account.locked).toMatch(/^\d+$/);
      expect(account.storageUsage).toBeGreaterThan(0);
      expect(account.blockHeight).toBeGreaterThan(0);
      expect(account.blockHash).toMatch(/^[A-Za-z0-9]+$/);
    }, 30000);

    it('should check if account exists', async () => {
      const exists = await testnetClient.accounts.accountExists(TESTNET_ACCOUNT);
      const notExists = await testnetClient.accounts.accountExists(NON_EXISTENT_ACCOUNT);
      
      expect(exists).toBe(true);
      expect(notExists).toBe(false);
    }, 30000);

    it('should get account balance', async () => {
      const balance = await testnetClient.accounts.getAccountBalance(TESTNET_ACCOUNT);
      
      expect(balance).toMatch(/^\d+$/);
      expect(BigInt(balance)).toBeGreaterThan(0);
    }, 30000);

    it('should get account storage usage', async () => {
      const storageUsage = await testnetClient.accounts.getAccountStorageUsage(TESTNET_ACCOUNT);
      
      expect(storageUsage).toBeGreaterThan(0);
    }, 30000);

    it('should get access keys', async () => {
      const accessKeys = await testnetClient.accounts.getAccessKeysById(TESTNET_ACCOUNT);
      
      expect(Array.isArray(accessKeys.keys)).toBe(true);
      expect(accessKeys.blockHeight).toBeGreaterThan(0);
      expect(accessKeys.blockHash).toMatch(/^[A-Za-z0-9]+$/);
    }, 30000);
  });

  describe('Gas Price', () => {
    it('should get current gas price', async () => {
      const gasPrice = await testnetClient.network.getGasPrice();
      
      expect(gasPrice).toMatch(/^\d+$/);
      expect(BigInt(gasPrice)).toBeGreaterThan(0);
    }, 30000);

    it('should estimate gas price', async () => {
      const gasEstimate = await testnetClient.network.estimateGasPrice({});
      
      expect(gasEstimate.gasUsed).toBeGreaterThan(0);
    }, 30000);
  });

  describe('Genesis Configuration', () => {
    it('should get genesis config', async () => {
      const genesis = await testnetClient.network.getGenesisConfig();
      
      expect(genesis.chainId).toBe('testnet');
      expect(genesis.protocolVersion).toBeGreaterThan(0);
      expect(genesis.genesisHeight).toBeGreaterThanOrEqual(0);
      expect(Array.isArray(genesis.validators)).toBe(true);
    }, 30000);

    it('should get protocol config', async () => {
      const config = await testnetClient.network.protocolConfig();
      
      expect(config.chainId).toBe('testnet');
      expect(config.protocolVersion).toBeGreaterThan(0);
      expect(config.epochLength).toBeGreaterThan(0);
      expect(config.gasLimit).toBeGreaterThan(0);
    }, 30000);
  });

  describe('Error Handling', () => {
    it('should handle network errors gracefully', async () => {
      const invalidClient = new NearJsonRpcClient('https://invalid-url-that-does-not-exist.com');
      
      await expect(invalidClient.network.status({}))
        .rejects
        .toThrow(NetworkError);
    }, 30000);

    it('should handle RPC errors gracefully', async () => {
      await expect(testnetClient.accounts.viewAccount({ account_id: 'invalid.account.name' }))
        .rejects
        .toThrow(NearJsonRpcError);
    }, 30000);
  });

  describe('Client Configuration', () => {
    it('should work with custom timeout', async () => {
      const fastClient = new NearJsonRpcClient({
        baseUrl: TESTNET_RPC_URL,
        timeout: 5000,
      });
      
      const status = await fastClient.network.status({});
      expect(status.chainId).toBe('testnet');
    }, 30000);

    it('should work with custom retry settings', async () => {
      const retryClient = new NearJsonRpcClient({
        baseUrl: TESTNET_RPC_URL,
        retries: 1,
        retryDelay: 100,
      });
      
      const status = await retryClient.network.status({});
      expect(status.chainId).toBe('testnet');
    }, 30000);
  });
});

describe('Transaction Tests (Limited)', () => {
  let testnetClient: NearJsonRpcClient;
  
  beforeAll(() => {
    testnetClient = new NearJsonRpcClient(TESTNET_RPC_URL);
  });

  it('should handle invalid transaction hash', async () => {
    await expect(testnetClient.transactions.transaction({ transactionHash: 'invalid-hash', senderId: 'test.near' }))
      .rejects
      .toThrow(NearJsonRpcError);
  }, 30000);

  it('should handle non-existent transaction', async () => {
    const fakeHash = 'A'.repeat(64); // Valid format but non-existent
    
    await expect(testnetClient.transactions.transaction({ transactionHash: fakeHash, senderId: 'test.near' }))
      .rejects
      .toThrow(NearJsonRpcError);
  }, 30000);
});

// Skip these tests by default to avoid making too many requests
describe.skip('Comprehensive Block Testing', () => {
  let testnetClient: NearJsonRpcClient;
  
  beforeAll(() => {
    testnetClient = new NearJsonRpcClient(TESTNET_RPC_URL);
  });

  it('should get multiple blocks in sequence', async () => {
    const latestBlock = await testnetClient.blocks.getLatestBlock();
    const startHeight = latestBlock.header.height - 5;
    
    const blocks = [];
    for (let i = 0; i < 3; i++) {
      const block = await testnetClient.blocks.block({ block_id: startHeight + i });
      blocks.push(block);
    }
    
    expect(blocks).toHaveLength(3);
    expect(blocks[0].header.height).toBe(startHeight);
    expect(blocks[1].header.height).toBe(startHeight + 1);
    expect(blocks[2].header.height).toBe(startHeight + 2);
  }, 60000);

  it('should verify block chain integrity', async () => {
    const latestBlock = await testnetClient.blocks.getLatestBlock();
    const previousBlock = await testnetClient.blocks.block({ block_id: latestBlock.header.height - 1 });
    
    expect(latestBlock.header.prevHash).toBe(previousBlock.header.hash);
  }, 30000);
});
