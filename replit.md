# NEAR Protocol TypeScript Client

## Overview

This is a fully type-safe, auto-generated TypeScript client for NEAR Protocol's JSON-RPC interface. The project is structured as a monorepo with two main packages: one for TypeScript types and Zod schemas, and another for the complete RPC client implementation. The system emphasizes type safety, runtime validation, and automated code generation from OpenAPI specifications.

## System Architecture

The project follows a monorepo architecture with clear separation of concerns:

1. **Code Generation Layer**: Automated TypeScript and Zod schema generation from OpenAPI specs
2. **Types Package**: Pure TypeScript types and Zod validation schemas
3. **Client Package**: Full RPC client implementation with method groupings
4. **Testing Layer**: Comprehensive unit and integration tests

The architecture prioritizes:
- Type safety through TypeScript and Zod validation
- Automation through OpenAPI specification parsing
- Maintainability through clear package separation
- Reliability through comprehensive testing

## Key Components

### Types Package (`@near-js/jsonrpc-types`)
- **Purpose**: Provides TypeScript interfaces and Zod schemas for all NEAR JSON-RPC methods
- **Key Features**: 
  - Runtime validation with Zod
  - Auto-generated from OpenAPI specs
  - No external dependencies except Zod
  - Separate types and schemas for better tree-shaking

### Client Package (`@near-js/jsonrpc-client`)
- **Purpose**: Complete RPC client implementation with method groupings
- **Key Features**:
  - Type-safe method calls
  - Automatic request/response validation
  - Error handling with custom error classes
  - Retry mechanisms and timeout handling
  - Method grouping (blocks, transactions, accounts, network)

### Code Generation Tools
- **OpenAPI Parser**: Fetches and parses NEAR Protocol's OpenAPI specification
- **Type Generator**: Creates TypeScript interfaces and Zod schemas
- **Client Generator**: Generates method implementations with proper typing
- **Template System**: Reusable templates for consistent code generation

### Testing Infrastructure
- **Unit Tests**: Comprehensive testing of client methods and type validation
- **Integration Tests**: Live testing against NEAR Protocol RPC endpoints
- **Mock System**: Realistic mock responses for testing
- **Test Utilities**: Custom Jest matchers for NEAR-specific validation

## Data Flow

1. **Code Generation Flow**:
   - Fetch OpenAPI spec from NEAR Protocol repository
   - Parse specification and extract method definitions
   - Generate TypeScript types and Zod schemas
   - Generate client method implementations
   - Output to respective packages

2. **Runtime Request Flow**:
   - Client method called with parameters
   - Input validation using Zod schemas
   - JSON-RPC request construction
   - HTTP request to NEAR endpoint
   - Response validation and parsing
   - Return typed response or throw typed error

3. **Error Handling Flow**:
   - Network errors mapped to `NetworkError`
   - Validation errors mapped to `ValidationError`
   - JSON-RPC errors mapped to `NearJsonRpcError`
   - All errors include proper context and debugging information

## External Dependencies

### Production Dependencies
- **Zod**: Runtime validation and schema definition
- **Native Fetch**: HTTP client (uses browser/Node.js native fetch)

### Development Dependencies
- **TypeScript**: Language and compilation
- **Jest**: Testing framework with ts-jest for TypeScript support
- **ESLint**: Code linting with TypeScript-specific rules
- **tsx**: TypeScript execution for development scripts

### External Services
- **NEAR Protocol RPC**: Primary data source for blockchain information
- **OpenAPI Specification**: Source for automated code generation
- **npm Registry**: Package distribution

## Deployment Strategy

### Package Publishing
- **Automated**: GitHub Actions workflow for CI/CD
- **Versioning**: Semantic versioning with automated changelog
- **Distribution**: npm packages with proper type declarations
- **Documentation**: Auto-generated API documentation

### Development Workflow
- **Monorepo**: Lerna/npm workspaces for package management
- **Code Generation**: Automated regeneration from OpenAPI specs
- **Testing**: Comprehensive test suite before publishing
- **Quality Gates**: ESLint, TypeScript compiler, and test coverage

### Release Process
- **Feature Development**: Branch-based development with PR reviews
- **Version Bumping**: Automated based on conventional commits
- **Package Building**: TypeScript compilation with declaration files
- **Publishing**: Automated npm publishing on release tags

## Changelog

- July 05, 2025. Initial setup
- July 05, 2025. Complete NEAR Protocol TypeScript client implementation with:
  - Types package (@near-js/jsonrpc-types) with TypeScript interfaces and Zod schemas
  - Client package (@near-js/jsonrpc-client) with type-safe RPC methods
  - Automated code generation tools for OpenAPI specifications
  - Comprehensive testing framework with unit and integration tests
  - Build system with TypeScript compilation and proper module structure
  - GitHub Actions automation (CI/CD, weekly updates, releases)
  - Complete documentation (README files, API docs, examples)
  - Production-ready error handling and retry logic
  - Full specification compliance including critical path patching
- July 06, 2025. Community validation and fixes:
  - Confirmed correct "/" path implementation with NEAR team
  - Updated error handling for underspecified OpenAPI responses
  - Fixed TypeScript compilation issues from type/schema mismatches
  - Enhanced defensive programming approach based on community feedback

## User Preferences

Preferred communication style: Simple, everyday language.