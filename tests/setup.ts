/**
 * Test setup configuration for NEAR JSON-RPC client tests
 */

import { jest } from '@jest/globals';

// Set up global test environment
beforeAll(() => {
  // Set test timeout
  jest.setTimeout(30000);
  
  // Set up environment variables for testing
  process.env.NODE_ENV = 'test';
  
  // Mock console methods to reduce noise in tests
  const originalConsole = console;
  global.console = {
    ...originalConsole,
    log: jest.fn(),
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: originalConsole.error, // Keep error for debugging
  };
});

// Clean up after all tests
afterAll(() => {
  // Restore original console
  global.console = console;
});

// Set up individual test environment
beforeEach(() => {
  // Clear all mocks before each test
  jest.clearAllMocks();
  
  // Reset any module mocks
  jest.resetModules();
});

// Global test utilities
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidNearAddress(): R;
      toBeValidTransactionHash(): R;
      toBeValidBlockHash(): R;
      toBeValidPublicKey(): R;
    }
  }
}

// Custom Jest matchers for NEAR-specific validations
expect.extend({
  toBeValidNearAddress(received: string) {
    const nearAddressRegex = /^[a-z0-9._-]+\.near$|^[a-z0-9._-]+\.testnet$|^[a-f0-9]{64}$/;
    const pass = nearAddressRegex.test(received);
    
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid NEAR address`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be a valid NEAR address`,
        pass: false,
      };
    }
  },
  
  toBeValidTransactionHash(received: string) {
    const hashRegex = /^[A-Za-z0-9]+$/;
    const pass = typeof received === 'string' && 
                 received.length >= 32 && 
                 received.length <= 128 && 
                 hashRegex.test(received);
    
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid transaction hash`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be a valid transaction hash`,
        pass: false,
      };
    }
  },
  
  toBeValidBlockHash(received: string) {
    const hashRegex = /^[A-Za-z0-9]+$/;
    const pass = typeof received === 'string' && 
                 received.length >= 32 && 
                 received.length <= 128 && 
                 hashRegex.test(received);
    
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid block hash`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be a valid block hash`,
        pass: false,
      };
    }
  },
  
  toBeValidPublicKey(received: string) {
    const publicKeyRegex = /^(ed25519|secp256k1):[A-Za-z0-9]+$/;
    const pass = publicKeyRegex.test(received);
    
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid public key`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be a valid public key`,
        pass: false,
      };
    }
  },
});

// Test helper functions
export const testHelpers = {
  /**
   * Wait for a specified amount of time
   */
  wait: (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  /**
   * Create a mock timer for testing timeouts
   */
  createMockTimer: () => {
    jest.useFakeTimers();
    return {
      advanceTime: (ms: number) => jest.advanceTimersByTime(ms),
      runAllTimers: () => jest.runAllTimers(),
      restore: () => jest.useRealTimers(),
    };
  },

  /**
   * Generate a random string for testing
   */
  randomString: (length: number = 10): string => {
    return Math.random().toString(36).substring(2, length + 2);
  },

  /**
   * Generate a mock transaction hash
   */
  mockTransactionHash: (): string => {
    return Array.from({ length: 64 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
  },

  /**
   * Generate a mock block hash
   */
  mockBlockHash: (): string => {
    return Array.from({ length: 44 }, () => 
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        .charAt(Math.floor(Math.random() * 62))
    ).join('');
  },

  /**
   * Generate a mock NEAR account ID
   */
  mockAccountId: (): string => {
    const prefixes = ['test', 'user', 'account', 'demo'];
    const suffixes = ['near', 'testnet'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const random = Math.floor(Math.random() * 10000);
    return `${prefix}${random}.${suffix}`;
  },

  /**
   * Create a mock response for testing
   */
  createMockResponse: (data: any, success: boolean = true): any => {
    return {
      ok: success,
      status: success ? 200 : 500,
      statusText: success ? 'OK' : 'Internal Server Error',
      json: jest.fn().mockResolvedValue(data),
      text: jest.fn().mockResolvedValue(JSON.stringify(data)),
    };
  },

  /**
   * Suppress console output during tests
   */
  suppressConsole: () => {
    const originalMethods = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info,
    };

    beforeEach(() => {
      console.log = jest.fn();
      console.warn = jest.fn();
      console.error = jest.fn();
      console.info = jest.fn();
    });

    afterEach(() => {
      console.log = originalMethods.log;
      console.warn = originalMethods.warn;
      console.error = originalMethods.error;
      console.info = originalMethods.info;
    });
  },
};

// Export test constants
export const TEST_CONSTANTS = {
  TESTNET_RPC_URL: 'https://rpc.testnet.near.org',
  MAINNET_RPC_URL: 'https://rpc.mainnet.near.org',
  MOCK_RPC_URL: 'https://mock.rpc.near.org',
  
  TIMEOUT: {
    SHORT: 5000,
    MEDIUM: 15000,
    LONG: 30000,
  },
  
  MOCK_ACCOUNTS: {
    TESTNET: 'testnet',
    VALID: 'test.near',
    INVALID: 'invalid-account',
    NON_EXISTENT: 'non-existent-account-12345.near',
  },
  
  MOCK_HASHES: {
    BLOCK: 'ABC123DEF456GHI789JKL012MNO345PQR678STU901',
    TRANSACTION: 'DEF456GHI789JKL012MNO345PQR678STU901VWX234',
  },
};

// Global error handler for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't exit the process in tests
});

// Global error handler for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Don't exit the process in tests
});
