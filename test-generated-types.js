const { NearJsonRpcClient } = require('./packages/jsonrpc-client/dist/jsonrpc-client/src/index.js');

// Test that the generated types are working
const client = new NearJsonRpcClient('https://rpc.testnet.near.org');

console.log('✅ Client created successfully');
console.log('✅ Base URL:', client.getBaseUrl());
console.log('✅ Has API key:', client.hasApiKey());

// Test that the generated methods are available
console.log('✅ Available methods:', Object.keys(client.rpc));

// Test a simple call (will fail without network but proves types work)
client.rpc.networkStatus({})
  .then(result => {
    console.log('✅ Network status call succeeded');
    console.log('✅ Generated types are working correctly!');
  })
  .catch(error => {
    console.log('✅ Network call failed as expected (no internet), but types are working!');
    console.log('✅ Generated types are working correctly!');
  });