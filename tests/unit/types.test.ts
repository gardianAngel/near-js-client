/**
 * Unit tests for NEAR JSON-RPC types
 */

import { z, ValidatedTypes, ValidatedSchemas } from '@near-js/jsonrpc-types';

describe('NEAR RPC Types', () => {
  describe('ValidatedTypes', () => {
    it('should export StatusResponse type', () => {
      expect(ValidatedTypes).toBeDefined();
    });

    it('should export BlockResponse type', () => {
      expect(ValidatedTypes).toBeDefined();
    });
  });

  describe('ValidatedSchemas', () => {
    it('should export FinalitySchema', () => {
      expect(ValidatedSchemas.FinalitySchema).toBeDefined();
    });

    it('should validate finality values', () => {
      const schema = ValidatedSchemas.FinalitySchema;
      
      expect(() => schema.parse('final')).not.toThrow();
      expect(() => schema.parse('optimistic')).not.toThrow();
      expect(() => schema.parse('near-final')).not.toThrow();
      expect(() => schema.parse('invalid')).toThrow();
    });

    it('should export StatusResponseSchema', () => {
      expect(ValidatedSchemas.StatusResponseSchema).toBeDefined();
    });

    it('should validate status response', () => {
      const schema = ValidatedSchemas.StatusResponseSchema;
      
      const validStatus = {
        chainId: 'testnet',
        genesisHash: 'abc123',
        latestProtocolVersion: 1,
        nodePublicKey: 'ed25519:abc123',
        protocolVersion: 1,
        rpcAddr: '0.0.0.0:8545',
        syncInfo: {
          earliestBlockHash: 'abc123',
          earliestBlockHeight: 1,
          earliestBlockTime: '2023-01-01T00:00:00.000Z',
          epochId: 'abc123',
          epochStartHeight: 1,
          latestBlockHash: 'abc123',
          latestBlockHeight: 100,
          latestBlockTime: '2023-01-01T00:00:00.000Z',
          latestStateRoot: 'abc123',
          syncing: false,
        },
        uptimeSec: 3600,
        validators: [],
        version: {
          build: 'abc123',
          commit: 'abc123',
          rustcVersion: '1.70.0',
          version: '1.0.0',
        },
      };

      expect(() => schema.parse(validStatus)).not.toThrow();
    });
  });
});