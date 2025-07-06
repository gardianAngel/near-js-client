/**
 * TypeScript type and Zod schema generator
 * 
 * Generates TypeScript interfaces and Zod schemas from OpenAPI specification
 */

import { OpenApiSpec, Schema, resolveSchemaRef, isSimpleType, isArrayType, isObjectType } from './openapi-parser';
import { toCamelCase, toPascalCase, toKebabCase } from './utils';

export interface GeneratedType {
  name: string;
  interface: string;
  schema: string;
  imports: string[];
}

export interface TypeGeneratorOptions {
  includeDescriptions?: boolean;
  generateHelpers?: boolean;
  strictMode?: boolean;
}

/**
 * Generate TypeScript types and Zod schemas from OpenAPI spec
 */
export async function generateTypes(
  spec: OpenApiSpec,
  options: TypeGeneratorOptions = {}
): Promise<Record<string, string>> {
  const files: Record<string, string> = {};
  
  // Generate common types
  files['types/common.ts'] = generateCommonTypes();
  files['schemas/common.ts'] = generateCommonSchemas();
  
  // Generate types from OpenAPI components
  if (spec.components?.schemas) {
    const { typeFiles, schemaFiles } = generateFromComponents(spec.components.schemas, options);
    
    Object.assign(files, typeFiles);
    Object.assign(files, schemaFiles);
  }
  
  // Generate method-specific types from paths
  const pathTypes = generateFromPaths(spec, options);
  Object.assign(files, pathTypes);
  
  // Generate index files
  files['types/index.ts'] = generateTypeIndex(files);
  files['schemas/index.ts'] = generateSchemaIndex(files);
  
  return files;
}

/**
 * Generate common types used across all NEAR RPC methods
 */
function generateCommonTypes(): string {
  return `/**
 * Common types used across NEAR Protocol JSON-RPC interface
 */

export type Finality = 'final' | 'near-final' | 'optimistic';

export type BlockId = string | number;

export interface BlockReference {
  blockId?: BlockId;
  finality?: Finality;
}

export interface JsonRpcRequest {
  jsonrpc: '2.0';
  method: string;
  params: unknown;
  id: string | number;
}

export interface JsonRpcResponse<T = unknown> {
  jsonrpc: '2.0';
  result?: T;
  error?: JsonRpcError;
  id: string | number;
}

export interface JsonRpcError {
  code: number;
  message: string;
  data?: unknown;
}

export interface PublicKey {
  keyType: number;
  data: string;
}

export interface Signature {
  keyType: number;
  data: string;
}

export interface MerkleProof {
  hash: string;
  direction: 'Left' | 'Right';
}

export interface ValidatorStake {
  accountId: string;
  publicKey: PublicKey;
  stake: string;
}

export interface ExecutionOutcome {
  logs: string[];
  receiptIds: string[];
  gasUsed: number;
  tokensBurnt: string;
  executorId: string;
  status: ExecutionStatus;
}

export type ExecutionStatus = 
  | { Unknown: Record<string, never> }
  | { Failure: ExecutionFailure }
  | { SuccessValue: string }
  | { SuccessReceiptId: string };

export interface ExecutionFailure {
  errorMessage: string;
  errorType: string;
}

export interface ExecutionOutcomeWithId {
  id: string;
  outcome: ExecutionOutcome;
  blockHash: string;
  proof: MerkleProof[];
}
`;
}

/**
 * Generate common Zod schemas
 */
function generateCommonSchemas(): string {
  return `/**
 * Zod schemas for common NEAR Protocol JSON-RPC types
 */

import { z } from 'zod';

export const FinalitySchema = z.enum(['final', 'near-final', 'optimistic']);

export const BlockIdSchema = z.union([z.string(), z.number()]);

export const BlockReferenceSchema = z.object({
  blockId: BlockIdSchema.optional(),
  finality: FinalitySchema.optional(),
});

export const JsonRpcRequestSchema = z.object({
  jsonrpc: z.literal('2.0'),
  method: z.string(),
  params: z.unknown(),
  id: z.union([z.string(), z.number()]),
});

export const JsonRpcErrorSchema = z.object({
  code: z.number(),
  message: z.string(),
  data: z.unknown().optional(),
});

export const JsonRpcResponseSchema = z.object({
  jsonrpc: z.literal('2.0'),
  result: z.unknown().optional(),
  error: JsonRpcErrorSchema.optional(),
  id: z.union([z.string(), z.number()]),
});

export const PublicKeySchema = z.object({
  keyType: z.number(),
  data: z.string(),
});

export const SignatureSchema = z.object({
  keyType: z.number(),
  data: z.string(),
});

export const MerkleProofSchema = z.object({
  hash: z.string(),
  direction: z.enum(['Left', 'Right']),
});

export const ValidatorStakeSchema = z.object({
  accountId: z.string(),
  publicKey: PublicKeySchema,
  stake: z.string(),
});

export const ExecutionFailureSchema = z.object({
  errorMessage: z.string(),
  errorType: z.string(),
});

export const ExecutionStatusSchema = z.union([
  z.object({ Unknown: z.record(z.never()) }),
  z.object({ Failure: ExecutionFailureSchema }),
  z.object({ SuccessValue: z.string() }),
  z.object({ SuccessReceiptId: z.string() }),
]);

export const ExecutionOutcomeSchema = z.object({
  logs: z.array(z.string()),
  receiptIds: z.array(z.string()),
  gasUsed: z.number(),
  tokensBurnt: z.string(),
  executorId: z.string(),
  status: ExecutionStatusSchema,
});

export const ExecutionOutcomeWithIdSchema = z.object({
  id: z.string(),
  outcome: ExecutionOutcomeSchema,
  blockHash: z.string(),
  proof: z.array(MerkleProofSchema),
});
`;
}

/**
 * Generate types from OpenAPI components
 */
function generateFromComponents(
  schemas: Record<string, Schema>,
  options: TypeGeneratorOptions
): { typeFiles: Record<string, string>; schemaFiles: Record<string, string> } {
  const typeFiles: Record<string, string> = {};
  const schemaFiles: Record<string, string> = {};
  
  // Group schemas by category
  const categories: Record<string, Record<string, Schema>> = {
    blocks: {},
    transactions: {},
    accounts: {},
    network: {},
  };
  
  // Categorize schemas
  for (const [name, schema] of Object.entries(schemas)) {
    const category = categorizeSchema(name);
    if (!categories[category]) {
      categories[category] = {};
    }
    categories[category][name] = schema;
  }
  
  // Generate files for each category
  for (const [category, categorySchemas] of Object.entries(categories)) {
    if (Object.keys(categorySchemas).length === 0) continue;
    
    const types = generateTypesForCategory(categorySchemas, options);
    const schemas = generateSchemasForCategory(categorySchemas, options);
    
    typeFiles[`types/${category}.ts`] = types;
    schemaFiles[`schemas/${category}.ts`] = schemas;
  }
  
  return { typeFiles, schemaFiles };
}

/**
 * Generate types from OpenAPI paths
 */
function generateFromPaths(spec: OpenApiSpec, options: TypeGeneratorOptions): Record<string, string> {
  const files: Record<string, string> = {};
  
  // For now, return empty object as we're using predefined types
  // In a full implementation, this would analyze paths and generate request/response types
  
  return files;
}

/**
 * Categorize schema by name
 */
function categorizeSchema(name: string): string {
  const blockKeywords = ['block', 'chunk', 'header'];
  const transactionKeywords = ['transaction', 'tx', 'receipt', 'action'];
  const accountKeywords = ['account', 'access', 'key', 'state', 'contract'];
  const networkKeywords = ['network', 'status', 'genesis', 'protocol', 'validator'];
  
  const lowerName = name.toLowerCase();
  
  if (blockKeywords.some(keyword => lowerName.includes(keyword))) {
    return 'blocks';
  }
  if (transactionKeywords.some(keyword => lowerName.includes(keyword))) {
    return 'transactions';
  }
  if (accountKeywords.some(keyword => lowerName.includes(keyword))) {
    return 'accounts';
  }
  if (networkKeywords.some(keyword => lowerName.includes(keyword))) {
    return 'network';
  }
  
  return 'common';
}

/**
 * Generate TypeScript types for a category
 */
function generateTypesForCategory(
  schemas: Record<string, Schema>,
  options: TypeGeneratorOptions
): string {
  const imports = new Set<string>();
  const types: string[] = [];
  
  for (const [name, schema] of Object.entries(schemas)) {
    const { interface: interfaceCode, imports: schemaImports } = generateTypeFromSchema(name, schema, options);
    types.push(interfaceCode);
    schemaImports.forEach(imp => imports.add(imp));
  }
  
  const importStatements = Array.from(imports).sort().join('\n');
  const typeDefinitions = types.join('\n\n');
  
  return `/**
 * Generated types for NEAR Protocol JSON-RPC
 */

${importStatements}

${typeDefinitions}
`;
}

/**
 * Generate Zod schemas for a category
 */
function generateSchemasForCategory(
  schemas: Record<string, Schema>,
  options: TypeGeneratorOptions
): string {
  const imports = new Set<string>(['z']);
  const schemas_code: string[] = [];
  
  for (const [name, schema] of Object.entries(schemas)) {
    const { schema: schemaCode, imports: schemaImports } = generateSchemaFromSchema(name, schema, options);
    schemas_code.push(schemaCode);
    schemaImports.forEach(imp => imports.add(imp));
  }
  
  const importStatements = `import { ${Array.from(imports).sort().join(', ')} } from 'zod';`;
  const schemaDefinitions = schemas_code.join('\n\n');
  
  return `/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

${importStatements}

${schemaDefinitions}
`;
}

/**
 * Generate TypeScript interface from schema
 */
function generateTypeFromSchema(
  name: string,
  schema: Schema,
  options: TypeGeneratorOptions
): { interface: string; imports: string[] } {
  const imports: string[] = [];
  const typeName = toPascalCase(name);
  
  if (isSimpleType(schema)) {
    const tsType = mapSchemaTypeToTypeScript(schema);
    return {
      interface: `export type ${typeName} = ${tsType};`,
      imports,
    };
  }
  
  if (isArrayType(schema)) {
    const itemType = schema.items ? mapSchemaTypeToTypeScript(schema.items) : 'unknown';
    return {
      interface: `export type ${typeName} = ${itemType}[];`,
      imports,
    };
  }
  
  if (isObjectType(schema)) {
    const properties = generateInterfaceProperties(schema, options);
    return {
      interface: `export interface ${typeName} {\n${properties}\n}`,
      imports,
    };
  }
  
  return {
    interface: `export type ${typeName} = unknown;`,
    imports,
  };
}

/**
 * Generate Zod schema from OpenAPI schema
 */
function generateSchemaFromSchema(
  name: string,
  schema: Schema,
  options: TypeGeneratorOptions
): { schema: string; imports: string[] } {
  const imports: string[] = [];
  const schemaName = `${toPascalCase(name)}Schema`;
  
  const zodSchema = mapSchemaToZod(schema);
  
  return {
    schema: `export const ${schemaName} = ${zodSchema};`,
    imports,
  };
}

/**
 * Generate interface properties from schema
 */
function generateInterfaceProperties(schema: Schema, options: TypeGeneratorOptions): string {
  if (!schema.properties) return '';
  
  const properties: string[] = [];
  const required = schema.required || [];
  
  for (const [propName, propSchema] of Object.entries(schema.properties)) {
    const isRequired = required.includes(propName);
    const tsType = mapSchemaTypeToTypeScript(propSchema);
    const optionalMarker = isRequired ? '' : '?';
    
    if (options.includeDescriptions && propSchema.description) {
      properties.push(`  /** ${propSchema.description} */`);
    }
    
    properties.push(`  ${toCamelCase(propName)}${optionalMarker}: ${tsType};`);
  }
  
  return properties.join('\n');
}

/**
 * Map OpenAPI schema type to TypeScript type
 */
function mapSchemaTypeToTypeScript(schema: Schema): string {
  if (schema.$ref) {
    return toPascalCase(schema.$ref.replace('#/components/schemas/', ''));
  }
  
  if (schema.enum) {
    return schema.enum.map(value => `'${value}'`).join(' | ');
  }
  
  if (schema.type === 'string') {
    return 'string';
  }
  
  if (schema.type === 'number' || schema.type === 'integer') {
    return 'number';
  }
  
  if (schema.type === 'boolean') {
    return 'boolean';
  }
  
  if (schema.type === 'array') {
    const itemType = schema.items ? mapSchemaTypeToTypeScript(schema.items) : 'unknown';
    return `${itemType}[]`;
  }
  
  if (schema.type === 'object' || schema.properties) {
    return 'Record<string, unknown>';
  }
  
  if (schema.anyOf) {
    return schema.anyOf.map(s => mapSchemaTypeToTypeScript(s)).join(' | ');
  }
  
  if (schema.oneOf) {
    return schema.oneOf.map(s => mapSchemaTypeToTypeScript(s)).join(' | ');
  }
  
  return 'unknown';
}

/**
 * Map OpenAPI schema to Zod schema
 */
function mapSchemaToZod(schema: Schema): string {
  if (schema.$ref) {
    return `${toPascalCase(schema.$ref.replace('#/components/schemas/', ''))}Schema`;
  }
  
  if (schema.enum) {
    const enumValues = schema.enum.map(value => `'${value}'`).join(', ');
    return `z.enum([${enumValues}])`;
  }
  
  if (schema.type === 'string') {
    return 'z.string()';
  }
  
  if (schema.type === 'number' || schema.type === 'integer') {
    return 'z.number()';
  }
  
  if (schema.type === 'boolean') {
    return 'z.boolean()';
  }
  
  if (schema.type === 'array') {
    const itemSchema = schema.items ? mapSchemaToZod(schema.items) : 'z.unknown()';
    return `z.array(${itemSchema})`;
  }
  
  if (schema.type === 'object' || schema.properties) {
    return generateZodObjectSchema(schema);
  }
  
  if (schema.anyOf) {
    const unions = schema.anyOf.map(s => mapSchemaToZod(s)).join(', ');
    return `z.union([${unions}])`;
  }
  
  if (schema.oneOf) {
    const unions = schema.oneOf.map(s => mapSchemaToZod(s)).join(', ');
    return `z.union([${unions}])`;
  }
  
  return 'z.unknown()';
}

/**
 * Generate Zod object schema
 */
function generateZodObjectSchema(schema: Schema): string {
  if (!schema.properties) {
    return 'z.record(z.unknown())';
  }
  
  const properties: string[] = [];
  const required = schema.required || [];
  
  for (const [propName, propSchema] of Object.entries(schema.properties)) {
    const isRequired = required.includes(propName);
    const zodProp = mapSchemaToZod(propSchema);
    const optionalModifier = isRequired ? '' : '.optional()';
    
    properties.push(`  ${toCamelCase(propName)}: ${zodProp}${optionalModifier}`);
  }
  
  return `z.object({\n${properties.join(',\n')}\n})`;
}

/**
 * Generate type index file
 */
function generateTypeIndex(files: Record<string, string>): string {
  const exports: string[] = [];
  
  for (const filename of Object.keys(files)) {
    if (filename.startsWith('types/') && filename !== 'types/index.ts') {
      const moduleName = filename.replace('types/', '').replace('.ts', '');
      exports.push(`export * from './${moduleName}';`);
    }
  }
  
  return `/**
 * Type exports for NEAR Protocol JSON-RPC
 */

${exports.join('\n')}
`;
}

/**
 * Generate schema index file
 */
function generateSchemaIndex(files: Record<string, string>): string {
  const exports: string[] = [];
  
  for (const filename of Object.keys(files)) {
    if (filename.startsWith('schemas/') && filename !== 'schemas/index.ts') {
      const moduleName = filename.replace('schemas/', '').replace('.ts', '');
      exports.push(`export * from './${moduleName}';`);
    }
  }
  
  return `/**
 * Schema exports for NEAR Protocol JSON-RPC
 */

${exports.join('\n')}
`;
}
