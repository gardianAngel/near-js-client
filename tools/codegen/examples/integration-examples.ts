/**
 * Integration examples for NEAR Protocol RPC client
 * 
 * This file demonstrates how to use the validated client in real applications.
 */

import { NearRpcClient } from '../src/client-validated';

/**
 * Example 1: Basic usage with error handling
 */
async function basicUsage() {
  const client = new NearRpcClient({
    endpoint: 'https://rpc.testnet.near.org',
    timeout: 15000,
    retryAttempts: 3,
  });

  try {
    // Get node status
    const status = await client.methods.status();
    console.log('Node status:', {
      version: status.version,
      chainId: status.chainId,
      latestBlockHeight: status.syncInfo.latestBlockHeight,
    });

    // Get latest block
    const block = await client.methods.block({ finality: 'final' });
    console.log('Latest block:', {
      height: block.header.height,
      hash: block.header.hash,
      timestamp: block.header.timestamp,
    });

  } catch (error) {
    console.error('RPC Error:', error);
  }
}

/**
 * Example 2: Account information and balance checking
 */
async function accountInfo() {
  const client = new NearRpcClient({
    endpoint: 'https://rpc.mainnet.near.org',
  });

  const accountId = 'example.near';

  try {
    // View account information
    const account = await client.methods.query({
      requestType: 'view_account',
      finality: 'final',
      accountId: accountId,
    });

    console.log('Account info:', {
      accountId,
      balance: account.amount,
      storageUsage: account.storageUsage,
      codeHash: account.codeHash,
    });

    // Get access keys
    const accessKeys = await client.methods.query({
      requestType: 'view_access_key_list',
      finality: 'final',
      accountId: accountId,
    });

    console.log('Access keys:', accessKeys.keys.length);

  } catch (error) {
    console.error('Failed to get account info:', error);
  }
}

/**
 * Example 3: Block and transaction monitoring
 */
async function blockMonitoring() {
  const client = new NearRpcClient({
    endpoint: 'https://rpc.testnet.near.org',
  });

  try {
    // Get current block height
    const status = await client.methods.status();
    const currentHeight = status.syncInfo.latestBlockHeight;

    // Get last 5 blocks
    const blocks = [];
    for (let i = 0; i < 5; i++) {
      const block = await client.methods.block({
        blockId: currentHeight - i,
      });
      blocks.push({
        height: block.header.height,
        hash: block.header.hash,
        timestamp: block.header.timestamp,
        transactionCount: block.chunks.reduce((sum, chunk) => sum + chunk.txCount, 0),
      });
    }

    console.log('Recent blocks:', blocks);

  } catch (error) {
    console.error('Block monitoring error:', error);
  }
}

/**
 * Example 4: Network information and validators
 */
async function networkInfo() {
  const client = new NearRpcClient({
    endpoint: 'https://rpc.mainnet.near.org',
  });

  try {
    // Get network information
    const networkInfo = await client.methods.networkInfo();
    console.log('Network info:', {
      activePeers: networkInfo.activePeers?.length || 0,
      sentBytesPerSec: networkInfo.sentBytesPerSec,
      receivedBytesPerSec: networkInfo.receivedBytesPerSec,
    });

    // Get validators
    const validators = await client.methods.validators({ finality: 'final' });
    console.log('Validators:', {
      currentValidators: validators.currentValidators.length,
      nextValidators: validators.nextValidators.length,
      totalStake: validators.currentValidators.reduce(
        (sum, validator) => sum + BigInt(validator.stake),
        BigInt(0)
      ).toString(),
    });

    // Get gas price
    const gasPrice = await client.methods.gasPrice({ finality: 'final' });
    console.log('Current gas price:', gasPrice.gasPrice);

  } catch (error) {
    console.error('Network info error:', error);
  }
}

/**
 * Example 5: Error handling and retries
 */
async function errorHandling() {
  const client = new NearRpcClient({
    endpoint: 'https://rpc.testnet.near.org',
    retryAttempts: 5,
    retryDelay: 1000,
  });

  try {
    // This will retry if it fails
    const result = await client.methods.query({
      requestType: 'view_account',
      finality: 'final',
      accountId: 'nonexistent.account.testnet',
    });

    console.log('Account found:', result);

  } catch (error) {
    if (error instanceof Error) {
      console.error('Account not found:', error.message);
    }
  }
}

// Export examples for use in applications
export {
  basicUsage,
  accountInfo,
  blockMonitoring,
  networkInfo,
  errorHandling,
};
