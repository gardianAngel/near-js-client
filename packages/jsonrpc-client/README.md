# @near-js/jsonrpc-client

[![NPM Version](https://img.shields.io/npm/v/@near-js/jsonrpc-client)](https://www.npmjs.com/package/@near-js/jsonrpc-client)
[![License](https://img.shields.io/npm/l/@near-js/jsonrpc-client)](https://github.com/near/near-js-client/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)

A fully type-safe, auto-generated TypeScript client for NEAR Protocol's JSON-RPC interface. Built with runtime validation, comprehensive error handling, and optimized for developer experience.

## Features

- **🔒 Full Type Safety**: Complete TypeScript coverage with runtime validation
- **🚀 Zero Configuration**: Works out of the box with sensible defaults  
- **⚡ Auto-Retry**: Built-in retry logic with exponential backoff
- **🛡️ Input Validation**: Zod-powered request/response validation
- **📦 Tree Shakable**: Import only the methods you need
- **🔄 Auto-Generated**: Always up-to-date with NEAR Protocol's latest API

## Installation

```bash
npm install @near-js/jsonrpc-client
```

## Quick Start

```typescript
import { NearJsonRpcClient } from '@near-js/jsonrpc-client';

// Initialize client
const client = new NearJsonRpcClient('https://rpc.mainnet.near.org');

// Get latest block
const block = await client.blocks.getLatestBlock();
console.log(`Latest block height: ${block.header.height}`);

// Get account info
const account = await client.accounts.getAccount({ 
  accountId: 'near' 
});
console.log(`Account balance: ${account.amount}`);

// Get transaction status
const tx = await client.transactions.getTransaction({
  txHash: 'your-transaction-hash',
  accountId: 'sender.near'
});
```

## API Reference

### Client Initialization

```typescript
// Basic usage
const client = new NearJsonRpcClient('https://rpc.mainnet.near.org');

// With options
const client = new NearJsonRpcClient({
  baseUrl: 'https://rpc.mainnet.near.org',
  apiKey: 'your-api-key', // Optional
  timeout: 30000,         // 30 seconds (default: 30000)
  retries: 3,             // Retry attempts (default: 3)
  retryDelay: 1000        // Initial delay between retries (default: 1000ms)
});
```

### Network Endpoints

```typescript
// Mainnet
const mainnet = new NearJsonRpcClient('https://rpc.mainnet.near.org');

// Testnet  
const testnet = new NearJsonRpcClient('https://rpc.testnet.near.org');

// Custom RPC
const custom = new NearJsonRpcClient('https://your-rpc-endpoint.com');
```

### Block Methods

```typescript
// Get latest block
const latest = await client.blocks.getLatestBlock();

// Get block by height
const block = await client.blocks.getBlockByHeight({ blockHeight: 100 });

// Get block by hash
const block = await client.blocks.getBlockByHash({ 
  blockHash: 'block-hash-here' 
});

// Get block with finality
const final = await client.blocks.getBlock({ finality: 'final' });
```

### Transaction Methods

```typescript
// Get transaction status
const tx = await client.transactions.getTransaction({
  txHash: 'transaction-hash',
  accountId: 'sender.near'
});

// Get transaction with receipts
const txWithReceipts = await client.transactions.getTransactionWithReceipts({
  txHash: 'transaction-hash', 
  accountId: 'sender.near'
});
```

### Account Methods

```typescript
// Get account information
const account = await client.accounts.getAccount({
  accountId: 'example.near'
});

// Get access keys for account
const keys = await client.accounts.getAccessKeyList({
  accountId: 'example.near'
});

// Get specific access key
const key = await client.accounts.getAccessKey({
  accountId: 'example.near',
  publicKey: 'ed25519:...'
});

// Call view method
const result = await client.accounts.callViewMethod({
  accountId: 'contract.near',
  methodName: 'get_balance',
  argsBase64: btoa(JSON.stringify({ account_id: 'user.near' }))
});
```

### Network Methods

```typescript
// Get network status
const status = await client.network.getNetworkStatus();

// Get current gas price
const gasPrice = await client.network.getGasPrice({ 
  finality: 'final' 
});

// Get protocol configuration
const config = await client.network.getProtocolConfig({
  finality: 'final'
});
```

## Error Handling

The client provides specific error types for different failure scenarios:

```typescript
import { 
  NearJsonRpcError, 
  NetworkError, 
  ValidationError 
} from '@near-js/jsonrpc-client';

try {
  const account = await client.accounts.getAccount({
    accountId: 'nonexistent.near'
  });
} catch (error) {
  if (error instanceof NearJsonRpcError) {
    console.log('RPC Error:', error.message);
    console.log('Error code:', error.code);
    console.log('Error data:', error.data);
  } else if (error instanceof NetworkError) {
    console.log('Network Error:', error.message);
  } else if (error instanceof ValidationError) {
    console.log('Validation Error:', error.message);
    console.log('Validation details:', error.validationErrors);
  }
}
```

### Error Types

- **`NearJsonRpcError`**: JSON-RPC protocol errors from NEAR
- **`NetworkError`**: HTTP/network related errors
- **`ValidationError`**: Request/response validation failures

## Advanced Usage

### Custom Fetch Configuration

```typescript
// The client uses the native fetch API internally
// All requests go to the root path "/" with method in JSON-RPC body
// This is the correct NEAR Protocol implementation
```

### Type Safety

```typescript
import type { BlockResponse } from '@near-js/jsonrpc-client';

// All methods return properly typed responses
const block: BlockResponse = await client.blocks.getLatestBlock();

// TypeScript will catch errors at compile time
const height: number = block.header.height; // ✅ Correct
const invalid: string = block.header.height; // ❌ Type error
```

### Tree Shaking

Import only what you need for optimal bundle size:

```typescript
// Import specific method groups
import { NearJsonRpcClient } from '@near-js/jsonrpc-client/client';
import type { BlockResponse } from '@near-js/jsonrpc-client/types';
```

## Contributing

This package is auto-generated from NEAR Protocol's OpenAPI specification. To contribute:

1. Visit the [main repository](https://github.com/near/near-js-client)
2. Check existing issues and feature requests
3. Submit issues for bugs or missing functionality
4. Contribute to the upstream OpenAPI specification

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm test

# Type check
npm run typecheck
```

## License

MIT - see [LICENSE](../../LICENSE) file for details.

## Related Packages

- [`@near-js/jsonrpc-types`](../jsonrpc-types) - TypeScript types and Zod schemas only