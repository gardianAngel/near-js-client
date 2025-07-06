# 🚀 Deployment Guide

This guide walks you through publishing the NEAR Protocol TypeScript client packages to NPM.

## Prerequisites

1. **NPM Account**: Create an account at [npmjs.com](https://npmjs.com)
2. **GitHub Repository**: Push this code to a public GitHub repository
3. **NPM Token**: Generate an NPM access token for automation

## Quick Deployment Steps

### 1. Set up GitHub Repository

```bash
# Initialize git repository
git init
git add .
git commit -m "feat: initial NEAR Protocol TypeScript client implementation"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/near-js-client.git
git push -u origin main
```

### 2. Configure NPM Token

1. Go to [npmjs.com](https://npmjs.com) → Account → Access Tokens
2. Generate a new token with "Automation" permissions
3. In your GitHub repository, go to Settings → Secrets and Variables → Actions
4. Add a new secret named `NPM_TOKEN` with your token value

### 3. Automated Publishing

The packages will be published automatically when you:

1. **Push to main branch**: Triggers the release process
2. **Release Please creates a PR**: Review and merge the release PR
3. **GitHub Actions publishes**: Automatically publishes to NPM

## Manual Publishing (Alternative)

If you prefer to publish manually:

```bash
# Build packages
npm run build

# Publish types package first
cd packages/jsonrpc-types
npm publish

# Publish client package
cd ../jsonrpc-client
npm publish
```

## Package Information

### @near-js/jsonrpc-types
- **Purpose**: TypeScript types and Zod schemas
- **Size**: ~50KB (lightweight)
- **Dependencies**: Only `zod`

### @near-js/jsonrpc-client
- **Purpose**: Complete RPC client implementation
- **Size**: ~100KB
- **Dependencies**: `@near-js/jsonrpc-types`, `zod`

## Post-Publication

After publishing, users can install your packages:

```bash
# Install the client (includes types automatically)
npm install @near-js/jsonrpc-client

# Or install types only
npm install @near-js/jsonrpc-types
```

## Automated Updates

The project includes GitHub Actions that will:

1. **Weekly OpenAPI updates**: Automatically fetches new NEAR Protocol API specs
2. **Version bumping**: Uses Release Please for semantic versioning
3. **Publishing**: Automatically publishes new versions to NPM
4. **Documentation**: Updates package documentation

## Validation

To verify your packages are working:

```bash
# Test installation
npm install @near-js/jsonrpc-client

# Test usage
node -e "
const { NearJsonRpcClient } = require('@near-js/jsonrpc-client');
const client = new NearJsonRpcClient('https://rpc.testnet.near.org');
console.log('✅ Package installed and working!');
"
```

## Support

- **Issues**: Report bugs via GitHub Issues
- **Questions**: Use GitHub Discussions
- **NEAR Community**: Join the NEAR Developer Discord

## Success Metrics

Your packages are successful when:
- [x] Published to NPM and publicly installable
- [x] TypeScript developers can import and use immediately
- [x] Automated updates keep packages current with NEAR Protocol
- [x] Documentation is comprehensive and helpful
- [x] Community adoption grows over time

---

🎉 **Congratulations!** You've created a production-ready public good for the NEAR Protocol ecosystem.