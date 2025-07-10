#!/usr/bin/env node

/**
 * Test the working NEAR Protocol TypeScript client
 * This validates the solution addresses all requirements
 */

const { NearRpcClient, NearRpcError } = require('./packages/jsonrpc-client/src/client-working');

async function testWorkingClient() {
  console.log('🧪 Testing Working NEAR Protocol Client');
  console.log('=' .repeat(50));

  const client = new NearRpcClient({
    endpoint: 'https://rpc.testnet.near.org',
    timeout: 10000,
    retryAttempts: 2,
  });

  let testsPassed = 0;
  let totalTests = 0;

  // Test 1: Path mismatch resolution
  console.log('\n1. Testing path mismatch resolution...');
  try {
    totalTests++;
    const originalFetch = global.fetch;
    const fetchCalls = [];
    
    global.fetch = async (url, options) => {
      fetchCalls.push(url);
      return originalFetch(url, options);
    };

    await client.status();
    global.fetch = originalFetch;

    if (fetchCalls.every(url => url.endsWith('/') && !url.includes('/status'))) {
      console.log('   ✅ All requests go to "/" endpoint');
      testsPassed++;
    } else {
      console.log('   ❌ Requests not going to "/" endpoint');
    }
  } catch (error) {
    console.log('   ❌ Path test failed:', error.message);
  }

  // Test 2: Case conversion
  console.log('\n2. Testing case conversion...');
  try {
    totalTests++;
    const testObj = { account_id: 'test', block_height: 123 };
    const camelCase = client.convertToCamelCase(testObj);
    const backToSnake = client.convertToSnakeCase(camelCase);
    
    if (camelCase.accountId === 'test' && camelCase.blockHeight === 123 &&
        JSON.stringify(backToSnake) === JSON.stringify(testObj)) {
      console.log('   ✅ Case conversion working correctly');
      testsPassed++;
    } else {
      console.log('   ❌ Case conversion failed');
    }
  } catch (error) {
    console.log('   ❌ Case conversion test failed:', error.message);
  }

  // Test 3: Real API integration
  console.log('\n3. Testing real API integration...');
  try {
    totalTests++;
    const status = await client.status();
    
    if (status.chainId === 'testnet' && typeof status.protocolVersion === 'number') {
      console.log('   ✅ Status API working - Chain:', status.chainId);
      testsPassed++;
    } else {
      console.log('   ❌ Invalid status response');
    }
  } catch (error) {
    console.log('   ❌ Status API failed:', error.message);
  }

  // Test 4: Block API
  console.log('\n4. Testing block API...');
  try {
    totalTests++;
    const block = await client.block({ finality: 'final' });
    
    if (block.header && typeof block.header.height === 'number') {
      console.log('   ✅ Block API working - Height:', block.header.height);
      testsPassed++;
    } else {
      console.log('   ❌ Invalid block response');
    }
  } catch (error) {
    console.log('   ❌ Block API failed:', error.message);
  }

  // Test 5: Error handling
  console.log('\n5. Testing error handling...');
  try {
    totalTests++;
    await client.request('invalid_method', {});
    console.log('   ❌ Should have thrown error for invalid method');
  } catch (error) {
    if (error instanceof NearRpcError || error.message.includes('Method not found')) {
      console.log('   ✅ Error handling working correctly');
      testsPassed++;
    } else {
      console.log('   ❌ Wrong error type:', error.constructor.name);
    }
  }

  // Test 6: Multiple methods
  console.log('\n6. Testing multiple methods...');
  try {
    totalTests++;
    const [gasPrice, networkInfo] = await Promise.all([
      client.gasPrice({ finality: 'final' }),
      client.networkInfo()
    ]);
    
    if (gasPrice.gasPrice && networkInfo.numActivePeers !== undefined) {
      console.log('   ✅ Multiple methods working');
      testsPassed++;
    } else {
      console.log('   ❌ Multiple methods failed');
    }
  } catch (error) {
    console.log('   ❌ Multiple methods test failed:', error.message);
  }

  // Results
  console.log('\n' + '=' .repeat(50));
  console.log(`📊 Test Results: ${testsPassed}/${totalTests} passed`);
  console.log(`Success Rate: ${((testsPassed / totalTests) * 100).toFixed(1)}%`);

  if (testsPassed === totalTests) {
    console.log('\n🎉 ALL TESTS PASSED!');
    console.log('✅ Path mismatch resolved');
    console.log('✅ Case conversion working');
    console.log('✅ Real API integration');
    console.log('✅ Error handling');
    console.log('✅ TypeScript client ready for production');
    return true;
  } else {
    console.log('\n⚠️ Some tests failed');
    return false;
  }
}

if (require.main === module) {
  testWorkingClient()
    .then(success => process.exit(success ? 0 : 1))
    .catch(error => {
      console.error('Test failed:', error);
      process.exit(1);
    });
}

module.exports = { testWorkingClient };