#!/usr/bin/env tsx

/**
 * Main code generation script for NEAR TypeScript client
 * 
 * This script fetches the OpenAPI specification from NEAR Protocol's repository
 * and generates TypeScript types and client methods with Zod validation.
 */

import { promises as fs } from 'fs';
import { join } from 'path';
import { generateTypes } from './type-generator';
import { generateClient } from './client-generator';
import { fetchOpenApiSpec, OpenApiSpec } from './openapi-parser';

const OUTPUT_BASE = join(process.cwd(), 'packages');
const TYPES_PACKAGE = join(OUTPUT_BASE, 'jsonrpc-types');
const CLIENT_PACKAGE = join(OUTPUT_BASE, 'jsonrpc-client');

async function ensureDirectories(): Promise<void> {
  const dirs = [
    join(TYPES_PACKAGE, 'src', 'types'),
    join(TYPES_PACKAGE, 'src', 'schemas'),
    join(CLIENT_PACKAGE, 'src', 'methods'),
  ];

  for (const dir of dirs) {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function generateTypesPackage(spec: OpenApiSpec): Promise<void> {
  console.log('📦 Generating types package...');
  
  const typeFiles = await generateTypes(spec);
  
  for (const [filename, content] of Object.entries(typeFiles)) {
    const filePath = join(TYPES_PACKAGE, 'src', filename);
    await fs.writeFile(filePath, content);
    console.log(`  ✅ Generated ${filename}`);
  }
}

async function generateClientPackage(spec: OpenApiSpec): Promise<void> {
  console.log('📦 Generating client package...');
  
  const clientFiles = await generateClient(spec);
  
  for (const [filename, content] of Object.entries(clientFiles)) {
    const filePath = join(CLIENT_PACKAGE, 'src', filename);
    await fs.writeFile(filePath, content);
    console.log(`  ✅ Generated ${filename}`);
  }
}

async function updatePackageVersions(): Promise<void> {
  console.log('📦 Updating package versions...');
  
  const now = new Date();
  const version = `1.0.${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  
  // Update types package version
  const typesPackageJson = JSON.parse(
    await fs.readFile(join(TYPES_PACKAGE, 'package.json'), 'utf-8')
  );
  typesPackageJson.version = version;
  await fs.writeFile(
    join(TYPES_PACKAGE, 'package.json'),
    JSON.stringify(typesPackageJson, null, 2)
  );
  
  // Update client package version
  const clientPackageJson = JSON.parse(
    await fs.readFile(join(CLIENT_PACKAGE, 'package.json'), 'utf-8')
  );
  clientPackageJson.version = version;
  clientPackageJson.dependencies['@near-js/jsonrpc-types'] = `^${version}`;
  await fs.writeFile(
    join(CLIENT_PACKAGE, 'package.json'),
    JSON.stringify(clientPackageJson, null, 2)
  );
  
  console.log(`  ✅ Updated versions to ${version}`);
}

async function main(): Promise<void> {
  try {
    console.log('🚀 Starting NEAR TypeScript client generation...');
    console.log('');
    
    // 1. Ensure output directories exist
    await ensureDirectories();
    
    // 2. Fetch OpenAPI specification
    console.log('📥 Fetching OpenAPI specification...');
    const spec = await fetchOpenApiSpec();
    console.log('  ✅ OpenAPI spec fetched successfully');
    console.log(`  📋 Found ${Object.keys(spec.paths || {}).length} endpoints`);
    console.log('');
    
    // 3. Generate types package
    await generateTypesPackage(spec);
    console.log('');
    
    // 4. Generate client package
    await generateClientPackage(spec);
    console.log('');
    
    // 5. Update package versions
    await updatePackageVersions();
    console.log('');
    
    console.log('🎉 Generation complete!');
    console.log('');
    console.log('Next steps:');
    console.log('  1. Run: npm run build');
    console.log('  2. Run: npm test');
    console.log('  3. Review generated files');
    
  } catch (error) {
    console.error('❌ Generation failed:', error);
    process.exit(1);
  }
}

// Run the generation if this file is executed directly
if (require.main === module) {
  main();
}

export { main };
