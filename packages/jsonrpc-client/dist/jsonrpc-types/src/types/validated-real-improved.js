"use strict";
/**
 * Improved TypeScript types for NEAR Protocol JSON-RPC API
 * Fixed issues:
 * 1. Proper camelCase conversion (codeHash not codehash)
 * 2. Specific types instead of [key: string]: any
 * 3. Proper Zod schemas instead of z.record(z.unknown())
 * 4. Direct method names without redundant groupings
 */
Object.defineProperty(exports, "__esModule", { value: true });
