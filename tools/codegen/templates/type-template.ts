/**
 * TypeScript type template
 * 
 * Template for generating TypeScript interfaces and types
 */

export interface TypeTemplate {
  name: string;
  description?: string;
  properties: PropertyTemplate[];
  extends?: string;
  imports?: string[];
}

export interface PropertyTemplate {
  name: string;
  type: string;
  optional?: boolean;
  description?: string;
  readonly?: boolean;
}

/**
 * Generate TypeScript interface from template
 */
export function generateInterface(template: TypeTemplate): string {
  const { name, description, properties, extends: extendsType, imports } = template;
  
  let result = '';
  
  // Add imports
  if (imports && imports.length > 0) {
    result += imports.map(imp => `import ${imp};`).join('\n') + '\n\n';
  }
  
  // Add description
  if (description) {
    result += `/**\n * ${description}\n */\n`;
  }
  
  // Add interface declaration
  const extendsClause = extendsType ? ` extends ${extendsType}` : '';
  result += `export interface ${name}${extendsClause} {\n`;
  
  // Add properties
  properties.forEach(prop => {
    if (prop.description) {
      result += `  /** ${prop.description} */\n`;
    }
    
    const readonly = prop.readonly ? 'readonly ' : '';
    const optional = prop.optional ? '?' : '';
    result += `  ${readonly}${prop.name}${optional}: ${prop.type};\n`;
  });
  
  result += '}\n';
  
  return result;
}

/**
 * Generate TypeScript type alias from template
 */
export function generateTypeAlias(name: string, type: string, description?: string): string {
  let result = '';
  
  if (description) {
    result += `/**\n * ${description}\n */\n`;
  }
  
  result += `export type ${name} = ${type};\n`;
  
  return result;
}

/**
 * Generate TypeScript enum from template
 */
export function generateEnum(name: string, values: string[], description?: string): string {
  let result = '';
  
  if (description) {
    result += `/**\n * ${description}\n */\n`;
  }
  
  result += `export enum ${name} {\n`;
  values.forEach(value => {
    result += `  ${value} = '${value}',\n`;
  });
  result += '}\n';
  
  return result;
}

/**
 * Generate union type from values
 */
export function generateUnionType(name: string, values: string[], description?: string): string {
  const unionType = values.map(value => `'${value}'`).join(' | ');
  return generateTypeAlias(name, unionType, description);
}

/**
 * Generate discriminated union type
 */
export function generateDiscriminatedUnion(
  name: string,
  variants: Array<{ tag: string; type: string }>,
  description?: string
): string {
  const unionType = variants
    .map(variant => `{ ${variant.tag}: ${variant.type} }`)
    .join(' | ');
  
  return generateTypeAlias(name, unionType, description);
}

/**
 * Common type templates for NEAR Protocol
 */
export const NEAR_TYPE_TEMPLATES = {
  blockReference: {
    name: 'BlockReference',
    description: 'Reference to a block by ID or finality',
    properties: [
      { name: 'blockId', type: 'BlockId', optional: true, description: 'Block ID (hash or height)' },
      { name: 'finality', type: 'Finality', optional: true, description: 'Block finality level' },
    ],
  } as TypeTemplate,
  
  jsonRpcRequest: {
    name: 'JsonRpcRequest',
    description: 'JSON-RPC 2.0 request format',
    properties: [
      { name: 'jsonrpc', type: "'2.0'", description: 'JSON-RPC version' },
      { name: 'method', type: 'string', description: 'Method name' },
      { name: 'params', type: 'unknown', description: 'Method parameters' },
      { name: 'id', type: 'string | number', description: 'Request ID' },
    ],
  } as TypeTemplate,
  
  jsonRpcResponse: {
    name: 'JsonRpcResponse',
    description: 'JSON-RPC 2.0 response format',
    properties: [
      { name: 'jsonrpc', type: "'2.0'", description: 'JSON-RPC version' },
      { name: 'result', type: 'T', optional: true, description: 'Success result' },
      { name: 'error', type: 'JsonRpcError', optional: true, description: 'Error object' },
      { name: 'id', type: 'string | number', description: 'Request ID' },
    ],
  } as TypeTemplate,
};

/**
 * Generate file header with imports and exports
 */
export function generateFileHeader(
  description: string,
  imports: string[] = [],
  exports: string[] = []
): string {
  let result = `/**\n * ${description}\n */\n\n`;
  
  if (imports.length > 0) {
    result += imports.join('\n') + '\n\n';
  }
  
  return result;
}

/**
 * Generate re-export statements
 */
export function generateReExports(modules: string[]): string {
  return modules.map(module => `export * from '${module}';`).join('\n');
}
