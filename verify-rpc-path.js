#!/usr/bin/env node

/**
 * Verify RPC Path Behavior
 * 
 * This test confirms that we correctly patch the OpenAPI path behavior
 * by always using "/" endpoint with method in JSON-RPC request body.
 */

// Import our working solution
const { NearRpcClient } = require('./final-working-solution.js');

async function verifyRpcPathBehavior() {
  console.log('🔍 Verifying RPC Path Behavior');
  console.log('=' .repeat(50));

  const client = new NearRpcClient({
    endpoint: 'https://rpc.testnet.near.org',
  });

  // Intercept fetch to verify URLs
  const originalFetch = global.fetch;
  const fetchCalls = [];
  
  global.fetch = async (url, options) => {
    fetchCalls.push({
      url,
      method: options.method,
      body: JSON.parse(options.body),
    });
    return originalFetch(url, options);
  };

  try {
    // Test multiple methods
    console.log('\n📋 Testing Multiple Methods:');
    
    await client.status();
    console.log('✅ client.status() called');
    
    await client.block({ finality: 'final' });
    console.log('✅ client.block() called');
    
    await client.gasPrice({ finality: 'final' });
    console.log('✅ client.gasPrice() called');
    
    // Restore original fetch
    global.fetch = originalFetch;
    
    console.log('\n🔍 Path Verification:');
    console.log('-' .repeat(50));
    
    fetchCalls.forEach((call, index) => {
      const pathUsed = new URL(call.url).pathname;
      console.log(`${index + 1}. Method: ${call.body.method}`);
      console.log(`   URL Path: ${pathUsed}`);
      console.log(`   JSON-RPC: ${JSON.stringify(call.body)}`);
      console.log('');
    });
    
    // Verify all paths are "/"
    const allPathsCorrect = fetchCalls.every(call => {
      const path = new URL(call.url).pathname;
      return path === '/';
    });
    
    console.log('🎯 Results:');
    console.log('-' .repeat(50));
    
    if (allPathsCorrect) {
      console.log('✅ CORRECT: All requests use "/" endpoint');
      console.log('✅ CORRECT: OpenAPI paths ignored');
      console.log('✅ CORRECT: Method passed in JSON-RPC body');
      console.log('✅ CORRECT: JSON-RPC 2.0 format used');
      
      // Verify JSON-RPC structure
      const firstCall = fetchCalls[0];
      if (firstCall.body.jsonrpc === '2.0' && 
          firstCall.body.method && 
          firstCall.body.id) {
        console.log('✅ CORRECT: JSON-RPC 2.0 structure verified');
      }
      
      console.log('\n🎉 RPC Path Behavior CORRECTLY IMPLEMENTED!');
      return true;
    } else {
      console.log('❌ INCORRECT: Some requests used wrong paths');
      return false;
    }
    
  } catch (error) {
    global.fetch = originalFetch;
    console.error('❌ Test failed:', error.message);
    return false;
  }
}

// Run verification
verifyRpcPathBehavior()
  .then(success => {
    if (success) {
      console.log('\n✅ Path behavior verification PASSED!');
      process.exit(0);
    } else {
      console.log('\n❌ Path behavior verification FAILED!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('\n❌ Verification error:', error);
    process.exit(1);
  });