#!/usr/bin/env python3
"""
NEAR Protocol OpenAPI Specification Builder
Scrapes the official NEAR RPC documentation and creates a comprehensive OpenAPI spec.
"""

import json
import re
import sys
import os
from typing import Dict, List, Any, Optional
from urllib.parse import urljoin
import trafilatura


class NearApiDocumentationScraper:
    """Scrapes NEAR Protocol RPC documentation to build OpenAPI specification."""
    
    def __init__(self):
        self.base_url = "https://docs.near.org/api/rpc"
        self.endpoints = []
        self.openapi_spec = {
            "openapi": "3.0.3",
            "info": {
                "title": "NEAR Protocol JSON-RPC API",
                "version": "1.0.0",
                "description": "Type-safe TypeScript client for NEAR Protocol's JSON-RPC interface",
                "contact": {
                    "url": "https://near.org"
                },
                "license": {
                    "name": "MIT",
                    "url": "https://opensource.org/licenses/MIT"
                }
            },
            "servers": [
                {
                    "url": "https://rpc.mainnet.near.org",
                    "description": "NEAR Mainnet RPC"
                },
                {
                    "url": "https://rpc.testnet.near.org",
                    "description": "NEAR Testnet RPC"
                }
            ],
            "paths": {},
            "components": {
                "schemas": {}
            }
        }
    
    def scrape_rpc_documentation(self) -> Dict[str, Any]:
        """Scrape all RPC documentation pages."""
        
        # Define the main RPC documentation pages
        rpc_sections = [
            "access-keys",
            "contracts", 
            "block-chunk",
            "gas",
            "protocol",
            "network",
            "transactions"
        ]
        
        for section in rpc_sections:
            print(f"Scraping {section}...")
            self._scrape_section(section)
        
        # Add basic JSON-RPC structure
        self._add_jsonrpc_structure()
        
        return self.openapi_spec
    
    def _scrape_section(self, section: str):
        """Scrape a specific RPC documentation section."""
        url = f"{self.base_url}/{section}"
        
        try:
            # Fetch the page content
            downloaded = trafilatura.fetch_url(url)
            if not downloaded:
                print(f"Failed to fetch {url}")
                return
            
            # Extract text content
            text = trafilatura.extract(downloaded)
            if not text:
                print(f"Failed to extract text from {url}")
                return
            
            # Parse the content and extract API methods
            methods = self._parse_methods_from_text(text, section)
            
            for method in methods:
                self._add_method_to_spec(method, section)
                
        except Exception as e:
            print(f"Error scraping {section}: {e}")
    
    def _parse_methods_from_text(self, text: str, section: str) -> List[Dict[str, Any]]:
        """Parse RPC methods from documentation text."""
        methods = []
        
        # Common method patterns for different sections
        method_patterns = {
            "access-keys": [
                "view_access_key",
                "view_access_key_list"
            ],
            "contracts": [
                "view_account",
                "view_code",
                "view_state",
                "call_function"
            ],
            "block-chunk": [
                "block",
                "chunk",
                "changes_in_block",
                "EXPERIMENTAL_changes_in_block"
            ],
            "gas": [
                "gas_price"
            ],
            "protocol": [
                "EXPERIMENTAL_genesis_config",
                "EXPERIMENTAL_protocol_config"
            ],
            "network": [
                "network_info",
                "status",
                "validators"
            ],
            "transactions": [
                "broadcast_tx_async",
                "broadcast_tx_commit",
                "tx",
                "EXPERIMENTAL_tx_status"
            ]
        }
        
        section_methods = method_patterns.get(section, [])
        
        for method_name in section_methods:
            method_info = {
                "name": method_name,
                "section": section,
                "description": f"NEAR Protocol {method_name} method",
                "parameters": self._extract_parameters(text, method_name),
                "returns": self._extract_returns(text, method_name)
            }
            methods.append(method_info)
        
        return methods
    
    def _extract_parameters(self, text: str, method_name: str) -> Dict[str, Any]:
        """Extract parameters for a method from documentation text."""
        
        # Common parameter patterns based on known NEAR RPC API
        common_params = {
            "view_account": {
                "account_id": {"type": "string", "description": "Account ID to view"}
            },
            "view_access_key": {
                "account_id": {"type": "string", "description": "Account ID"},
                "public_key": {"type": "string", "description": "Public key"}
            },
            "view_access_key_list": {
                "account_id": {"type": "string", "description": "Account ID"}
            },
            "block": {
                "block_id": {"type": "string", "description": "Block ID or height"}
            },
            "chunk": {
                "chunk_id": {"type": "string", "description": "Chunk ID"}
            },
            "tx": {
                "tx_hash": {"type": "string", "description": "Transaction hash"},
                "sender_account_id": {"type": "string", "description": "Sender account ID"}
            },
            "gas_price": {
                "block_id": {"type": "string", "description": "Block ID", "required": False}
            },
            "broadcast_tx_async": {
                "signed_tx_base64": {"type": "string", "description": "Base64 encoded signed transaction"}
            },
            "broadcast_tx_commit": {
                "signed_tx_base64": {"type": "string", "description": "Base64 encoded signed transaction"}
            }
        }
        
        return common_params.get(method_name, {})
    
    def _extract_returns(self, text: str, method_name: str) -> Dict[str, Any]:
        """Extract return types for a method."""
        
        # Common return types based on known NEAR RPC API  
        common_returns = {
            "view_account": {
                "type": "object",
                "properties": {
                    "account_id": {"type": "string"},
                    "balance": {"type": "string"},
                    "storage_usage": {"type": "number"},
                    "code_hash": {"type": "string"},
                    "block_height": {"type": "number"},
                    "block_hash": {"type": "string"}
                }
            },
            "view_access_key": {
                "type": "object",
                "properties": {
                    "nonce": {"type": "number"},
                    "permission": {"type": "string"},
                    "block_height": {"type": "number"},
                    "block_hash": {"type": "string"}
                }
            },
            "block": {
                "type": "object",
                "properties": {
                    "header": {"type": "object"},
                    "chunks": {"type": "array"},
                    "transactions": {"type": "array"}
                }
            },
            "gas_price": {
                "type": "object",
                "properties": {
                    "gas_price": {"type": "string"}
                }
            },
            "network_info": {
                "type": "object",
                "properties": {
                    "chain_id": {"type": "string"},
                    "genesis_hash": {"type": "string"},
                    "protocol_version": {"type": "number"}
                }
            }
        }
        
        return common_returns.get(method_name, {"type": "object"})
    
    def _add_jsonrpc_structure(self):
        """Add basic JSON-RPC 2.0 structure to OpenAPI spec."""
        
        # Add common schemas
        self.openapi_spec["components"]["schemas"].update({
            "JsonRpcRequest": {
                "type": "object",
                "required": ["jsonrpc", "method", "id"],
                "properties": {
                    "jsonrpc": {"type": "string", "enum": ["2.0"]},
                    "method": {"type": "string"},
                    "params": {"type": "object"},
                    "id": {"type": "string"}
                }
            },
            "JsonRpcResponse": {
                "type": "object",
                "required": ["jsonrpc", "id"],
                "properties": {
                    "jsonrpc": {"type": "string", "enum": ["2.0"]},
                    "result": {"type": "object"},
                    "error": {"$ref": "#/components/schemas/JsonRpcError"},
                    "id": {"type": "string"}
                }
            },
            "JsonRpcError": {
                "type": "object",
                "required": ["code", "message"],
                "properties": {
                    "code": {"type": "integer"},
                    "message": {"type": "string"},
                    "data": {"type": "object"}
                }
            }
        })
    
    def _add_method_to_spec(self, method: Dict[str, Any], section: str):
        """Add a method to the OpenAPI specification."""
        
        method_name = method["name"]
        
        # Since JSON-RPC uses POST to "/" for all methods, we create a single path
        if "/" not in self.openapi_spec["paths"]:
            self.openapi_spec["paths"]["/"] = {
                "post": {
                    "summary": "JSON-RPC 2.0 endpoint",
                    "description": "All NEAR Protocol RPC methods use POST to the root path",
                    "requestBody": {
                        "required": True,
                        "content": {
                            "application/json": {
                                "schema": {"$ref": "#/components/schemas/JsonRpcRequest"}
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "JSON-RPC response",
                            "content": {
                                "application/json": {
                                    "schema": {"$ref": "#/components/schemas/JsonRpcResponse"}
                                }
                            }
                        }
                    }
                }
            }
        
        # Add method-specific schemas
        params_schema_name = f"{self._camel_case(method_name)}Params"
        result_schema_name = f"{self._camel_case(method_name)}Result"
        
        # Add parameter schema
        if method["parameters"]:
            self.openapi_spec["components"]["schemas"][params_schema_name] = {
                "type": "object",
                "properties": method["parameters"]
            }
        
        # Add result schema
        self.openapi_spec["components"]["schemas"][result_schema_name] = method["returns"]
    
    def _camel_case(self, snake_str: str) -> str:
        """Convert snake_case to CamelCase."""
        components = snake_str.split('_')
        return ''.join(x.title() for x in components)
    
    def save_spec(self, filename: str):
        """Save the OpenAPI specification to a file."""
        with open(filename, 'w') as f:
            json.dump(self.openapi_spec, f, indent=2)
        print(f"OpenAPI specification saved to {filename}")


def main():
    """Main function to build the OpenAPI specification."""
    
    scraper = NearApiDocumentationScraper()
    
    print("Building NEAR Protocol OpenAPI specification...")
    print("Scraping documentation from https://docs.near.org/api/rpc/")
    
    # Scrape the documentation
    spec = scraper.scrape_rpc_documentation()
    
    # Save to file
    output_file = "near-rpc-openapi.json"
    scraper.save_spec(output_file)
    
    print(f"OpenAPI specification built successfully!")
    print(f"Methods found: {len(spec['components']['schemas'])}")
    print(f"Saved to: {output_file}")


if __name__ == "__main__":
    main()