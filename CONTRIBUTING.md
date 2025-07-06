# Contributing to NEAR Protocol TypeScript Client

Thank you for your interest in contributing to the NEAR Protocol TypeScript client! This project provides type-safe, auto-generated TypeScript bindings for NEAR Protocol's JSON-RPC interface.

## 🤝 How to Contribute

### Types of Contributions

Since this project is largely auto-generated, the most valuable contributions are:

1. **Code Generation Improvements**: Enhance the OpenAPI parsing and code generation tools
2. **Testing**: Add test cases and improve test coverage
3. **Documentation**: Improve examples, guides, and API documentation
4. **Bug Reports**: Report issues with generated code or type safety
5. **Feature Requests**: Suggest improvements to the client interface

### What NOT to Contribute

- **Manual type definitions**: Types are auto-generated from OpenAPI specs
- **Manual client methods**: Client methods are auto-generated
- **Direct API changes**: Submit changes to NEAR Protocol's OpenAPI spec instead

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 8+
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/near/near-js-client.git
cd near-js-client

# Install dependencies
npm install

# Build packages
npm run build

# Run tests
npm test

# Run type checking
npm run typecheck
```

### Development Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Focus on code generation tools (`tools/codegen/`)
   - Add tests for new functionality
   - Update documentation if needed

3. **Test your changes**:
   ```bash
   npm test
   npm run typecheck
   npm run build
   ```

4. **Commit your changes**:
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. **Push and create a PR**:
   ```bash
   git push origin feature/your-feature-name
   ```

## 📁 Project Structure

```
near-js-client/
├── packages/
│   ├── jsonrpc-types/     # Generated TypeScript types & Zod schemas
│   └── jsonrpc-client/    # Generated RPC client implementation
├── tools/
│   └── codegen/           # Code generation tools (CONTRIBUTE HERE)
├── tests/                 # Test suite (CONTRIBUTE HERE)
├── .github/workflows/     # CI/CD automation
└── docs/                  # Documentation (CONTRIBUTE HERE)
```

### Key Files for Contributors

- `tools/codegen/generate.ts`: Main code generation script
- `tools/codegen/openapi-parser.ts`: OpenAPI specification parser
- `tools/codegen/type-generator.ts`: TypeScript type generation
- `tools/codegen/client-generator.ts`: Client method generation
- `tests/`: Test files for validation and functionality

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run specific test suite
npm run test:unit
npm run test:integration

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- **Unit Tests**: Test individual functions and components
- **Integration Tests**: Test the complete client functionality
- **Type Tests**: Validate TypeScript type correctness
- **Mock Tests**: Use realistic mock data for CI/CD

Example test structure:
```typescript
describe('NearJsonRpcClient', () => {
  it('should make type-safe RPC calls', async () => {
    // Test implementation
  });
});
```

## 🔧 Code Generation

The project uses automated code generation from NEAR Protocol's OpenAPI specification:

### Regenerating Code

```bash
# Fetch latest OpenAPI spec and regenerate all code
npm run generate

# This will update:
# - packages/jsonrpc-types/src/
# - packages/jsonrpc-client/src/
```

### Code Generation Pipeline

1. **Fetch OpenAPI Spec**: Downloads from NEAR Protocol repository
2. **Parse Specification**: Extracts method definitions and schemas
3. **Generate Types**: Creates TypeScript interfaces and Zod schemas
4. **Generate Client**: Creates type-safe client methods
5. **Apply Patches**: Ensures "/" path usage (NEAR Protocol requirement)

## 📝 Documentation

### Improving Documentation

- **README files**: Main project and package documentation
- **API documentation**: Method and type documentation
- **Examples**: Usage examples and tutorials
- **Guides**: Setup and contribution guides

### Documentation Standards

- Use clear, concise language
- Provide working code examples
- Include both basic and advanced usage
- Keep examples up-to-date with latest API

## 🐛 Bug Reports

### Before Reporting

1. Check existing issues
2. Test with the latest version
3. Verify the bug isn't in NEAR Protocol's API

### Bug Report Template

```markdown
## Bug Description
Brief description of the issue

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Node.js version:
- Package version:
- Operating system:

## Additional Context
Any other relevant information
```

## 💡 Feature Requests

### Before Requesting

1. Check if the feature exists in NEAR Protocol's API
2. Consider if it belongs in the upstream OpenAPI specification
3. Review existing feature requests

### Feature Request Template

```markdown
## Feature Description
Clear description of the proposed feature

## Use Case
Why this feature would be valuable

## Proposed Implementation
How you think it should work

## Alternatives Considered
Other approaches you've considered
```

## 🎯 Pull Request Process

### PR Checklist

- [ ] Tests pass (`npm test`)
- [ ] Code builds without errors (`npm run build`)
- [ ] Types are valid (`npm run typecheck`)
- [ ] Documentation is updated
- [ ] Commit messages follow conventional commits
- [ ] PR description explains the changes

### PR Review Process

1. **Automated checks**: CI/CD pipeline runs tests
2. **Code review**: Maintainers review changes
3. **Feedback**: Address any review comments
4. **Merge**: Approved PRs are merged to main

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: resolve bug
docs: update documentation
test: add test cases
refactor: improve code structure
```

## 📋 Code Style

### TypeScript Guidelines

- Use strict TypeScript configuration
- Prefer type safety over convenience
- Document complex types and interfaces
- Use meaningful variable and function names

### Code Formatting

- Use Prettier for consistent formatting
- Follow ESLint rules
- Use 2-space indentation
- Prefer const over let

## 🏆 Recognition

Contributors are recognized in:
- Repository contributors list
- Release notes and changelogs
- Community acknowledgments

## 📞 Getting Help

- **GitHub Issues**: Technical questions and bug reports
- **GitHub Discussions**: General questions and ideas
- **NEAR Discord**: Community support and real-time help

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping improve the NEAR Protocol TypeScript client! Every contribution makes the NEAR ecosystem stronger. 🚀