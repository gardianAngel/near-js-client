/**
 * Unit tests for NEAR JSON-RPC types and schemas
 */

import { z } from 'zod';
import {
  // Common schemas that exist
  FinalitySchema,
  SignatureSchema,
  
  // Block schemas that exist
  BlockIdSchema,
  RpcBlockResponseSchema,
  RpcChunkResponseSchema,
  
  // Account schemas that exist
  PublicKeySchema,
  
  // Types that exist
  Finality,
} from '@near-js/jsonrpc-types';

describe('NEAR JSON-RPC Type Validation', () => {
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
    it('should validate number block IDs', () => {
      expect(() => BlockIdSchema.parse(123)).not.toThrow();
      expect(() => BlockIdSchema.parse(0)).not.toThrow();
    });

    it('should validate unknown block IDs', () => {
      expect(() => BlockIdSchema.parse('block-hash')).not.toThrow();
      expect(() => BlockIdSchema.parse({})).not.toThrow();
    });
  });

  describe('SignatureSchema', () => {
    it('should validate signature strings', () => {
      expect(() => SignatureSchema.parse('signature-data')).not.toThrow();
      expect(() => SignatureSchema.parse('ed25519:...')).not.toThrow();
    });

    it('should reject non-string values', () => {
      expect(() => SignatureSchema.parse(123)).toThrow(z.ZodError);
      expect(() => SignatureSchema.parse({})).toThrow(z.ZodError);
    });
  });

  describe('PublicKeySchema', () => {
    it('should validate public key strings', () => {
      expect(() => PublicKeySchema.parse('ed25519:ABC123')).not.toThrow();
      expect(() => PublicKeySchema.parse('test-key')).not.toThrow();
    });

    it('should reject non-string values', () => {
      expect(() => PublicKeySchema.parse(123)).toThrow(z.ZodError);
      expect(() => PublicKeySchema.parse({})).toThrow(z.ZodError);
    });
  });

  describe('Type inference', () => {
    it('should correctly infer types from schemas', () => {
      type InferredFinality = z.infer<typeof FinalitySchema>;
      type InferredBlockId = z.infer<typeof BlockIdSchema>;
      
      // These should compile without errors
      const finality: InferredFinality = 'final';
      const blockId: InferredBlockId = 123;
      
      expect(finality).toBe('final');
      expect(blockId).toBe(123);
    });
  });
});