# @near-js/jsonrpc-types

[![NPM Version](https://img.shields.io/npm/v/@near-js/jsonrpc-types)](https://www.npmjs.com/package/@near-js/jsonrpc-types)
[![License](https://img.shields.io/npm/l/@near-js/jsonrpc-types)](https://github.com/near/near-js-client/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)

TypeScript types and Zod validation schemas for NEAR Protocol's JSON-RPC interface. This package provides comprehensive type safety and runtime validation for all NEAR Protocol RPC methods.

## Features

- **Complete Type Coverage**: TypeScript interfaces for all NEAR JSON-RPC methods
- **Runtime Validation**: Zod schemas for request/response validation
- **Tree Shakable**: Import only what you need
- **Auto-Generated**: Automatically updated from NEAR Protocol's OpenAPI specification
- **Snake Case → Camel Case**: Automatic conversion for JavaScript conventions

## Installation

```bash
npm install @near-js/jsonrpc-types
```

## Usage

### TypeScript Types

```typescript
import type { 
  BlockResponse, 
  TransactionResponse, 
  AccountResponse 
} from '@near-js/jsonrpc-types';

// Use types in your functions
function processBlock(block: BlockResponse) {
  console.log(`Block height: ${block.header.height}`);
}
```

### Zod Validation Schemas

```typescript
import { 
  BlockResponseSchema, 
  TransactionResponseSchema,
  BlockReferenceSchema 
} from '@near-js/jsonrpc-types';

// Validate runtime data
const blockRef = BlockReferenceSchema.parse({
  finality: 'final'
});

// Validate API responses
const block = BlockResponseSchema.parse(apiResponse);
```

### Available Types

#### Common Types
- `Finality` - Block finality states ('final', 'near-final', 'optimistic')
- `BlockReference` - Block reference by height, hash, or finality
- `PublicKey` - NEAR public key format
- `Signature` - Cryptographic signature
- `AccountId` - NEAR account identifier

#### RPC Method Types

**Block Methods:**
- `BlockResponse` - Complete block information
- `BlockQuery` - Parameters for block queries
- `ChunkResponse` - Chunk details

**Transaction Methods:**
- `TransactionResponse` - Transaction with outcomes
- `TransactionQuery` - Transaction lookup parameters
- `ReceiptView` - Transaction receipt details

**Account Methods:**
- `AccountResponse` - Account state information
- `AccessKeyResponse` - Access key details
- `AccessKeyListResponse` - All account access keys

**Network Methods:**
- `NetworkStatusResponse` - Network status and validators
- `GasPriceResponse` - Current gas price

### Schema Validation

All types come with corresponding Zod schemas for runtime validation:

```typescript
import { z } from 'zod';
import { BlockQuerySchema, FinalitySchema } from '@near-js/jsonrpc-types';

// Type-safe parsing with validation
const query = BlockQuerySchema.parse({
  finality: 'final'
});

// Infer TypeScript types from schemas
type BlockQuery = z.infer<typeof BlockQuerySchema>;
```

## Tree Shaking

This package is optimized for tree shaking. Import only what you need:

```typescript
// Import specific types
import type { BlockResponse } from '@near-js/jsonrpc-types/types/blocks';

// Import specific schemas  
import { BlockResponseSchema } from '@near-js/jsonrpc-types/schemas/blocks';
```

## Contributing

This package is auto-generated from NEAR Protocol's OpenAPI specification. To contribute:

1. Check the [main repository](https://github.com/near/near-js-client) for the code generation tools
2. Submit issues for missing types or incorrect schemas
3. Contribute to the OpenAPI specification upstream

## License

MIT - see [LICENSE](../../LICENSE) file for details.

## Related Packages

- [`@near-js/jsonrpc-client`](../jsonrpc-client) - Complete RPC client using these types