/**
 * Utility functions for code generation
 */

/**
 * Convert string to camelCase
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '')
    .replace(/[-_]/g, '');
}

/**
 * Convert string to PascalCase
 */
export function toPascalCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
      return word.toUpperCase();
    })
    .replace(/\s+/g, '')
    .replace(/[-_]/g, '');
}

/**
 * Convert string to kebab-case
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Convert string to snake_case
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

/**
 * Convert string to SCREAMING_SNAKE_CASE
 */
export function toScreamingSnakeCase(str: string): string {
  return toSnakeCase(str).toUpperCase();
}

/**
 * Transform object keys from snake_case to camelCase recursively
 */
export function transformKeys(obj: unknown): unknown {
  if (Array.isArray(obj)) {
    return obj.map(transformKeys);
  }
  
  if (obj && typeof obj === 'object') {
    const result: Record<string, unknown> = {};
    
    for (const [key, value] of Object.entries(obj)) {
      const camelKey = toCamelCase(key);
      result[camelKey] = transformKeys(value);
    }
    
    return result;
  }
  
  return obj;
}

/**
 * Transform object keys from camelCase to snake_case recursively
 */
export function transformKeysToSnakeCase(obj: unknown): unknown {
  if (Array.isArray(obj)) {
    return obj.map(transformKeysToSnakeCase);
  }
  
  if (obj && typeof obj === 'object') {
    const result: Record<string, unknown> = {};
    
    for (const [key, value] of Object.entries(obj)) {
      const snakeKey = toSnakeCase(key);
      result[snakeKey] = transformKeysToSnakeCase(value);
    }
    
    return result;
  }
  
  return obj;
}

/**
 * Pluralize a word
 */
export function pluralize(word: string): string {
  if (word.endsWith('s') || word.endsWith('sh') || word.endsWith('ch') || word.endsWith('x') || word.endsWith('z')) {
    return word + 'es';
  }
  
  if (word.endsWith('y') && !/[aeiou]y$/.test(word)) {
    return word.slice(0, -1) + 'ies';
  }
  
  if (word.endsWith('f')) {
    return word.slice(0, -1) + 'ves';
  }
  
  if (word.endsWith('fe')) {
    return word.slice(0, -2) + 'ves';
  }
  
  return word + 's';
}

/**
 * Singularize a word
 */
export function singularize(word: string): string {
  if (word.endsWith('ies')) {
    return word.slice(0, -3) + 'y';
  }
  
  if (word.endsWith('ves')) {
    return word.slice(0, -3) + 'f';
  }
  
  if (word.endsWith('es') && (word.endsWith('ses') || word.endsWith('shes') || word.endsWith('ches') || word.endsWith('xes') || word.endsWith('zes'))) {
    return word.slice(0, -2);
  }
  
  if (word.endsWith('s') && !word.endsWith('ss')) {
    return word.slice(0, -1);
  }
  
  return word;
}

/**
 * Capitalize first letter
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Lowercase first letter
 */
export function uncapitalize(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Generate a unique identifier
 */
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Check if string is valid TypeScript identifier
 */
export function isValidIdentifier(str: string): boolean {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(str);
}

/**
 * Make string safe for use as TypeScript identifier
 */
export function makeValidIdentifier(str: string): string {
  // Remove invalid characters
  let identifier = str.replace(/[^a-zA-Z0-9_$]/g, '');
  
  // Ensure it doesn't start with a number
  if (/^[0-9]/.test(identifier)) {
    identifier = '_' + identifier;
  }
  
  // Ensure it's not empty
  if (identifier === '') {
    identifier = '_';
  }
  
  return identifier;
}

/**
 * Sort import statements
 */
export function sortImports(imports: string[]): string[] {
  return imports.sort((a, b) => {
    // External imports first
    const aExternal = !a.startsWith('./') && !a.startsWith('../');
    const bExternal = !b.startsWith('./') && !b.startsWith('../');
    
    if (aExternal && !bExternal) return -1;
    if (!aExternal && bExternal) return 1;
    
    // Then alphabetical
    return a.localeCompare(b);
  });
}

/**
 * Generate TypeScript import statement
 */
export function generateImport(imports: string[], from: string, type: 'default' | 'named' | 'namespace' = 'named'): string {
  if (type === 'default') {
    return `import ${imports[0]} from '${from}';`;
  }
  
  if (type === 'namespace') {
    return `import * as ${imports[0]} from '${from}';`;
  }
  
  if (imports.length === 1) {
    return `import { ${imports[0]} } from '${from}';`;
  }
  
  return `import {\n  ${imports.join(',\n  ')}\n} from '${from}';`;
}

/**
 * Generate TypeScript export statement
 */
export function generateExport(exports: string[], from?: string): string {
  if (from) {
    if (exports.length === 1) {
      return `export { ${exports[0]} } from '${from}';`;
    }
    return `export {\n  ${exports.join(',\n  ')}\n} from '${from}';`;
  }
  
  return `export { ${exports.join(', ')} };`;
}

/**
 * Generate re-export statement
 */
export function generateReExport(from: string): string {
  return `export * from '${from}';`;
}

/**
 * Escape string for use in TypeScript string literal
 */
export function escapeStringLiteral(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

/**
 * Format TypeScript code with basic indentation
 */
export function formatCode(code: string, indentSize: number = 2): string {
  const lines = code.split('\n');
  let indentLevel = 0;
  const formatted: string[] = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    if (trimmed.endsWith('{') || trimmed.endsWith('(') || trimmed.endsWith('[')) {
      formatted.push(' '.repeat(indentLevel * indentSize) + trimmed);
      indentLevel++;
    } else if (trimmed.startsWith('}') || trimmed.startsWith(')') || trimmed.startsWith(']')) {
      indentLevel--;
      formatted.push(' '.repeat(indentLevel * indentSize) + trimmed);
    } else {
      formatted.push(' '.repeat(indentLevel * indentSize) + trimmed);
    }
  }
  
  return formatted.join('\n');
}

/**
 * Generate JSDoc comment
 */
export function generateJSDoc(description: string, params?: Array<{ name: string; type: string; description: string }>): string {
  let jsdoc = `/**\n * ${description}\n`;
  
  if (params && params.length > 0) {
    jsdoc += ' *\n';
    for (const param of params) {
      jsdoc += ` * @param ${param.name} ${param.description}\n`;
    }
  }
  
  jsdoc += ' */';
  
  return jsdoc;
}
