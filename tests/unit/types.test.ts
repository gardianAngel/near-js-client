/**
 * Unit tests for NEAR JSON-RPC types and schemas
 */

import { z } from 'zod';
import {
  // Common schemas
  FinalitySchema,
  BlockIdSchema,
  BlockReferenceSchema,
  JsonRpcRequestSchema,
  JsonRpcResponseSchema,
  PublicKeySchema,
  SignatureSchema,
  
  // Block schemas
  BlockQuerySchema,
  BlockResponseSchema,
  ChunkQuerySchema,
  ChunkResponseSchema,
  
  // Transaction schemas
  TransactionQuerySchema,
  TransactionResponseSchema,
  
  // Account schemas
  AccountQuerySchema,
  AccountResponseSchema,
  AccessKeyQuerySchema,
  AccessKeyResponseSchema,
  
  // Types
  Finality,
  BlockId,
  BlockReference,
  JsonRpcRequest,
  JsonRpcResponse,
  PublicKey,
  Signature,
} from '@near-js/jsonrpc-types';

describe('Common Types and Schemas', () => {
  describe('FinalitySchema', () => {
    it('should validate valid finality values', () => {
      expect(() => FinalitySchema.parse('final')).not.toThrow();
      expect(() => FinalitySchema.parse('near-final')).not.toThrow();
      expect(() => FinalitySchema.parse('optimistic')).not.toThrow();
    });

    it('should reject invalid finality values', () => {
      expect(() => FinalitySchema.parse('invalid')).toThrow(z.ZodError);
      expect(() => FinalitySchema.parse(123)).toThrow(z.ZodError);
      expect(() => FinalitySchema.parse(null)).toThrow(z.ZodError);
    });
  });

  describe('BlockIdSchema', () => {
    it('should validate string block IDs', () => {
      expect(() => BlockIdSchema.parse('block-hash')).not.toThrow();
      expect(() => BlockIdSchema.parse('ABC123')).not.toThrow();
    });

    it('should validate number block IDs', () => {
      expect(() => BlockIdSchema.parse(123)).not.toThrow();
      expect(() => BlockIdSchema.parse(0)).not.toThrow();
    });

    it('should reject invalid block IDs', () => {
      expect(() => BlockIdSchema.parse(true)).toThrow(z.ZodError);
      expect(() => BlockIdSchema.parse({})).toThrow(z.ZodError);
      expect(() => BlockIdSchema.parse(null)).toThrow(z.ZodError);
    });
  });

  describe('BlockReferenceSchema', () => {
    it('should validate block reference with blockId', () => {
      const validRef = { blockId: 'block-hash' };
      expect(() => BlockReferenceSchema.parse(validRef)).not.toThrow();
      
      const validRef2 = { blockId: 123 };
      expect(() => BlockReferenceSchema.parse(validRef2)).not.toThrow();
    });

    it('should validate block reference with finality', () => {
      const validRef = { finality: 'final' };
      expect(() => BlockReferenceSchema.parse(validRef)).not.toThrow();
    });

    it('should validate block reference with both blockId and finality', () => {
      const validRef = { blockId: 'block-hash', finality: 'final' };
      expect(() => BlockReferenceSchema.parse(validRef)).not.toThrow();
    });

    it('should validate empty block reference', () => {
      expect(() => BlockReferenceSchema.parse({})).not.toThrow();
    });

    it('should reject invalid block reference', () => {
      expect(() => BlockReferenceSchema.parse({ blockId: true })).toThrow(z.ZodError);
      expect(() => BlockReferenceSchema.parse({ finality: 'invalid' })).toThrow(z.ZodError);
    });
  });

  describe('JsonRpcRequestSchema', () => {
    it('should validate valid JSON-RPC request', () => {
      const validRequest = {
        jsonrpc: '2.0' as const,
        method: 'block',
        params: { finality: 'final' },
        id: 1,
      };
      expect(() => JsonRpcRequestSchema.parse(validRequest)).not.toThrow();
    });

    it('should validate JSON-RPC request with string ID', () => {
      const validRequest = {
        jsonrpc: '2.0' as const,
        method: 'status',
        params: [],
        id: 'test-id',
      };
      expect(() => JsonRpcRequestSchema.parse(validRequest)).not.toThrow();
    });

    it('should reject invalid JSON-RPC version', () => {
      const invalidRequest = {
        jsonrpc: '1.0',
        method: 'block',
        params: {},
        id: 1,
      };
      expect(() => JsonRpcRequestSchema.parse(invalidRequest)).toThrow(z.ZodError);
    });

    it('should reject missing required fields', () => {
      expect(() => JsonRpcRequestSchema.parse({})).toThrow(z.ZodError);
      expect(() => JsonRpcRequestSchema.parse({ jsonrpc: '2.0' })).toThrow(z.ZodError);
    });
  });

  describe('JsonRpcResponseSchema', () => {
    it('should validate successful JSON-RPC response', () => {
      const validResponse = {
        jsonrpc: '2.0' as const,
        result: { data: 'test' },
        id: 1,
      };
      expect(() => JsonRpcResponseSchema.parse(validResponse)).not.toThrow();
    });

    it('should validate error JSON-RPC response', () => {
      const validResponse = {
        jsonrpc: '2.0' as const,
        error: {
          code: -32601,
          message: 'Method not found',
        },
        id: 1,
      };
      expect(() => JsonRpcResponseSchema.parse(validResponse)).not.toThrow();
    });

    it('should reject invalid JSON-RPC response', () => {
      const invalidResponse = {
        jsonrpc: '1.0',
        result: {},
        id: 1,
      };
      expect(() => JsonRpcResponseSchema.parse(invalidResponse)).toThrow(z.ZodError);
    });
  });

  describe('PublicKeySchema', () => {
    it('should validate valid public key', () => {
      const validKey = {
        keyType: 0,
        data: 'ed25519:ABC123',
      };
      expect(() => PublicKeySchema.parse(validKey)).not.toThrow();
    });

    it('should reject invalid public key', () => {
      expect(() => PublicKeySchema.parse({ keyType: 'invalid' })).toThrow(z.ZodError);
      expect(() => PublicKeySchema.parse({ data: 'key-data' })).toThrow(z.ZodError);
    });
  });

  describe('SignatureSchema', () => {
    it('should validate valid signature', () => {
      const validSignature = {
        keyType: 0,
        data: 'signature-data',
      };
      expect(() => SignatureSchema.parse(validSignature)).not.toThrow();
    });

    it('should reject invalid signature', () => {
      expect(() => SignatureSchema.parse({ keyType: 'invalid' })).toThrow(z.ZodError);
      expect(() => SignatureSchema.parse({ data: 123 })).toThrow(z.ZodError);
    });
  });
});

describe('Block Types and Schemas', () => {
  describe('BlockQuerySchema', () => {
    it('should validate block query with finality', () => {
      const validQuery = { finality: 'final' };
      expect(() => BlockQuerySchema.parse(validQuery)).not.toThrow();
    });

    it('should validate block query with blockId', () => {
      const validQuery = { blockId: 'block-hash' };
      expect(() => BlockQuerySchema.parse(validQuery)).not.toThrow();
    });

    it('should validate empty block query', () => {
      expect(() => BlockQuerySchema.parse({})).not.toThrow();
    });
  });

  describe('ChunkQuerySchema', () => {
    it('should validate chunk query with chunk ID', () => {
      const validQuery = { chunkId: 'chunk-hash' };
      expect(() => ChunkQuerySchema.parse(validQuery)).not.toThrow();
    });

    it('should validate chunk query with block ID and shard ID', () => {
      const validQuery = { blockId: 'block-hash', shardId: 0 };
      expect(() => ChunkQuerySchema.parse(validQuery)).not.toThrow();
    });

    it('should validate empty chunk query', () => {
      expect(() => ChunkQuerySchema.parse({})).not.toThrow();
    });
  });
});

describe('Transaction Types and Schemas', () => {
  describe('TransactionQuerySchema', () => {
    it('should validate transaction query', () => {
      const validQuery = {
        transactionHash: 'tx-hash',
        senderId: 'sender.near',
      };
      expect(() => TransactionQuerySchema.parse(validQuery)).not.toThrow();
    });

    it('should validate transaction query with waitUntil', () => {
      const validQuery = {
        transactionHash: 'tx-hash',
        senderId: 'sender.near',
        waitUntil: 'FINAL' as const,
      };
      expect(() => TransactionQuerySchema.parse(validQuery)).not.toThrow();
    });

    it('should reject invalid waitUntil value', () => {
      const invalidQuery = {
        transactionHash: 'tx-hash',
        senderId: 'sender.near',
        waitUntil: 'INVALID',
      };
      expect(() => TransactionQuerySchema.parse(invalidQuery)).toThrow(z.ZodError);
    });
  });
});

describe('Account Types and Schemas', () => {
  describe('AccountQuerySchema', () => {
    it('should validate account query', () => {
      const validQuery = {
        accountId: 'test.near',
        finality: 'final' as const,
      };
      expect(() => AccountQuerySchema.parse(validQuery)).not.toThrow();
    });

    it('should validate account query with blockId', () => {
      const validQuery = {
        accountId: 'test.near',
        blockId: 'block-hash',
      };
      expect(() => AccountQuerySchema.parse(validQuery)).not.toThrow();
    });

    it('should reject missing accountId', () => {
      const invalidQuery = { finality: 'final' };
      expect(() => AccountQuerySchema.parse(invalidQuery)).toThrow(z.ZodError);
    });
  });

  describe('AccessKeyQuerySchema', () => {
    it('should validate access key query', () => {
      const validQuery = {
        accountId: 'test.near',
        publicKey: 'ed25519:ABC123',
        finality: 'final' as const,
      };
      expect(() => AccessKeyQuerySchema.parse(validQuery)).not.toThrow();
    });

    it('should reject missing required fields', () => {
      expect(() => AccessKeyQuerySchema.parse({ accountId: 'test.near' })).toThrow(z.ZodError);
      expect(() => AccessKeyQuerySchema.parse({ publicKey: 'ed25519:ABC123' })).toThrow(z.ZodError);
    });
  });
});

describe('Type Inference', () => {
  it('should infer correct types from schemas', () => {
    // Test type inference
    type InferredFinality = z.infer<typeof FinalitySchema>;
    type InferredBlockId = z.infer<typeof BlockIdSchema>;
    type InferredBlockReference = z.infer<typeof BlockReferenceSchema>;
    
    // These should compile without errors
    const finality: InferredFinality = 'final';
    const blockId: InferredBlockId = 'block-hash';
    const blockRef: InferredBlockReference = { finality: 'final' };
    
    expect(finality).toBe('final');
    expect(blockId).toBe('block-hash');
    expect(blockRef.finality).toBe('final');
  });
});
