#!/usr/bin/env node

/**
 * OpenAPI Method Extraction and Path Mismatch Analysis
 * 
 * This script extracts all method definitions from the NEAR Protocol OpenAPI spec
 * and demonstrates the critical path mismatch issue.
 */

const fs = require('fs');

function extractMethodsFromOpenAPI() {
  console.log('🔍 NEAR Protocol OpenAPI Method Extraction');
  console.log('=' .repeat(60));
  
  // Load the official nearcore OpenAPI specification
  const openApiSpec = JSON.parse(fs.readFileSync('./nearcore-openapi.json', 'utf8'));
  
  console.log('\n📋 OpenAPI Specification Details:');
  console.log(`   Title: ${openApiSpec.info.title}`);
  console.log(`   Version: ${openApiSpec.info.version}`);
  console.log(`   Total file size: ${fs.statSync('./nearcore-openapi.json').size} bytes`);
  console.log(`   Total lines: ${fs.readFileSync('./nearcore-openapi.json', 'utf8').split('\n').length}`);
  
  // Extract all paths (methods) from the OpenAPI spec
  const paths = Object.keys(openApiSpec.paths);
  console.log(`   Total methods defined: ${paths.length}`);
  
  console.log('\n📊 All Method Definitions from OpenAPI Spec:');
  console.log('-' .repeat(60));
  
  const methods = [];
  paths.forEach((path, index) => {
    const pathObj = openApiSpec.paths[path];
    const operationId = pathObj.post?.operationId || path.replace('/', '');
    
    methods.push({
      index: index + 1,
      operationId,
      path,
      method: operationId
    });
    
    console.log(`${(index + 1).toString().padStart(2, ' ')}. ${operationId.padEnd(35, ' ')} → ${path}`);
  });
  
  console.log('\n🚨 CRITICAL PATH MISMATCH ISSUE:');
  console.log('-' .repeat(60));
  console.log('❌ OpenAPI Spec: Each method has a unique path (e.g., /status, /block, /query)');
  console.log('✅ JSON-RPC Reality: ALL requests must go to "/" with method in request body');
  console.log('');
  console.log('OpenAPI shows:');
  console.log('   POST /status     ← WRONG');
  console.log('   POST /block      ← WRONG');
  console.log('   POST /query      ← WRONG');
  console.log('');
  console.log('JSON-RPC requires:');
  console.log('   POST /           ← CORRECT (with method: "status" in body)');
  console.log('   POST /           ← CORRECT (with method: "block" in body)');  
  console.log('   POST /           ← CORRECT (with method: "query" in body)');
  
  console.log('\n📋 Method Categories:');
  console.log('-' .repeat(60));
  
  const categories = {
    'Core Protocol': methods.filter(m => ['status', 'block', 'gas_price', 'network_info'].includes(m.method)),
    'Query Operations': methods.filter(m => ['query'].includes(m.method)),
    'Validator Info': methods.filter(m => ['validators'].includes(m.method)),
    'Experimental': methods.filter(m => m.method.startsWith('EXPERIMENTAL_')),
    'Transactions': methods.filter(m => ['tx', 'broadcast_tx_async', 'broadcast_tx_commit', 'receipts'].includes(m.method)),
    'Chunks': methods.filter(m => ['chunk'].includes(m.method)),
    'Others': methods.filter(m => !['status', 'block', 'gas_price', 'network_info', 'query', 'validators', 'tx', 'broadcast_tx_async', 'broadcast_tx_commit', 'receipts', 'chunk'].includes(m.method) && !m.method.startsWith('EXPERIMENTAL_'))
  };
  
  Object.entries(categories).forEach(([category, categoryMethods]) => {
    if (categoryMethods.length > 0) {
      console.log(`\n${category} (${categoryMethods.length} methods):`);
      categoryMethods.forEach(method => {
        console.log(`   • ${method.method}`);
      });
    }
  });
  
  console.log('\n🔧 Required Fix for TypeScript Client:');
  console.log('-' .repeat(60));
  console.log('1. ✅ Ignore OpenAPI paths completely');
  console.log('2. ✅ Always use "/" endpoint for ALL requests');
  console.log('3. ✅ Pass method name in JSON-RPC request body');
  console.log('4. ✅ Use snake_case for method names (e.g., "gas_price" not "gasPrice")');
  console.log('5. ✅ Convert response fields from snake_case to camelCase');
  
  console.log('\n📊 TypeScript Client Method Mapping:');
  console.log('-' .repeat(60));
  
  const clientMethods = [
    { tsMethod: 'status()', rpcMethod: 'status', description: 'Get node status' },
    { tsMethod: 'block(params)', rpcMethod: 'block', description: 'Get block info' },
    { tsMethod: 'gasPrice(params)', rpcMethod: 'gas_price', description: 'Get gas price' },
    { tsMethod: 'networkInfo()', rpcMethod: 'network_info', description: 'Get network info' },
    { tsMethod: 'query(params)', rpcMethod: 'query', description: 'Query blockchain state' },
    { tsMethod: 'validators(params)', rpcMethod: 'validators', description: 'Get validator info' },
    { tsMethod: 'transaction(hash, sender)', rpcMethod: 'tx', description: 'Get transaction status' },
    { tsMethod: 'receipts(ids)', rpcMethod: 'receipts', description: 'Get receipts' },
    { tsMethod: 'broadcastTxAsync(tx)', rpcMethod: 'broadcast_tx_async', description: 'Broadcast transaction async' },
    { tsMethod: 'broadcastTxCommit(tx)', rpcMethod: 'broadcast_tx_commit', description: 'Broadcast transaction sync' },
    { tsMethod: 'chunk(params)', rpcMethod: 'chunk', description: 'Get chunk info' },
    { tsMethod: 'experimentalProtocolConfig()', rpcMethod: 'EXPERIMENTAL_protocol_config', description: 'Get protocol config' },
    { tsMethod: 'experimentalGenesisConfig()', rpcMethod: 'EXPERIMENTAL_genesis_config', description: 'Get genesis config' },
  ];
  
  clientMethods.forEach(({ tsMethod, rpcMethod, description }) => {
    console.log(`${tsMethod.padEnd(30, ' ')} → ${rpcMethod.padEnd(25, ' ')} (${description})`);
  });
  
  console.log('\n✅ Solution Summary:');
  console.log('-' .repeat(60));
  console.log('• OpenAPI spec contains all method definitions and schemas');
  console.log('• Path mismatch issue is known and must be handled in client');
  console.log('• All requests go to "/" with method in JSON-RPC request body');
  console.log('• TypeScript client provides clean method names and camelCase conversion');
  console.log('• Total methods supported: ' + methods.length);
  
  return {
    totalMethods: methods.length,
    methods,
    categories,
    clientMethods,
    pathMismatchFixed: true
  };
}

// Execute the extraction
const result = extractMethodsFromOpenAPI();

console.log('\n🎯 Analysis Complete!');
console.log(`✅ Successfully extracted ${result.totalMethods} methods from OpenAPI spec`);
console.log('✅ Path mismatch issue documented and solution provided');
console.log('✅ TypeScript client method mapping completed');