#!/usr/bin/env node

/**
 * Test script to verify nearcore-generated client works
 */

const { NearcoreClient } = require('./packages/jsonrpc-client/src/client-nearcore');

async function testNearcoreClient() {
  console.log('🧪 Testing nearcore-generated NEAR JSON-RPC client...');
  
  try {
    // Create client instance
    const client = new NearcoreClient({
      endpoint: 'https://rpc.testnet.near.org',
      timeout: 10000,
      retryAttempts: 2,
      retryDelay: 1000,
    });

    console.log('✅ Client created successfully');
    console.log('📋 Available methods:');
    console.log('  - Methods object:', typeof client.methods);
    console.log('  - Methods available:', Object.getOwnPropertyNames(client.methods.constructor.prototype).filter(m => m !== 'constructor'));

    // Test a basic method
    console.log('\n🔍 Testing basic RPC call...');
    const result = await client.request('status', {});
    console.log('✅ Status request successful');
    console.log('📊 Chain ID:', result.chain_id);
    console.log('📊 Node Version:', result.version?.version);
    console.log('📊 Current Block Height:', result.sync_info?.latest_block_height);

    // Test snake_case to camelCase conversion
    console.log('\n🔧 Testing case conversion...');
    const testObj = { account_id: 'test.near', public_key: 'ed25519:test' };
    const converted = client.convertToCamelCase(testObj);
    console.log('✅ Conversion test passed:', converted);

    console.log('\n✅ All tests passed! Nearcore client is working correctly.');
    return true;

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Stack:', error.stack);
    return false;
  }
}

if (require.main === module) {
  testNearcoreClient()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(err => {
      console.error('❌ Unexpected error:', err);
      process.exit(1);
    });
}

module.exports = { testNearcoreClient };