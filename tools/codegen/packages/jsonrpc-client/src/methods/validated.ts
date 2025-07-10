/**
 * Validated RPC methods for NEAR Protocol
 * 
 * Each method includes:
 * - Proper typing with Zod validation
 * - Usage examples
 * - Error handling
 * - Documentation
 */

import { NearRpcClient } from '../client-validated';
import * as Types from '@near-js/jsonrpc-types/types/validated';
import * as Schemas from '@near-js/jsonrpc-types/schemas/validated';
import { z } from 'zod';

export class ValidatedMethods {
  constructor(private client: NearRpcClient) {}

  /**
   * Execute EXPERIMENTAL_changes RPC method
   * 
   * Method: EXPERIMENTAL_changes
   * 
   * @example
   * // Execute EXPERIMENTAL_changes
   * const result = await client.methods.EXPERIMENTALChanges({});
   * // Result will contain: result
   */
  async EXPERIMENTALChanges(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_changes', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_changes: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute EXPERIMENTAL_changes_in_block RPC method
   * 
   * Method: EXPERIMENTAL_changes_in_block
   * 
   * @example
   * // Execute EXPERIMENTAL_changes_in_block
   * const result = await client.methods.EXPERIMENTALChangesInBlock({});
   * // Result will contain: result
   */
  async EXPERIMENTALChangesInBlock(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_changes_in_block', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_changes_in_block: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute EXPERIMENTAL_congestion_level RPC method
   * 
   * Method: EXPERIMENTAL_congestion_level
   * 
   * @example
   * // Execute EXPERIMENTAL_congestion_level
   * const result = await client.methods.EXPERIMENTALCongestionLevel({});
   * // Result will contain: result
   */
  async EXPERIMENTALCongestionLevel(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_congestion_level', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_congestion_level: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute EXPERIMENTAL_genesis_config RPC method
   * 
   * Method: EXPERIMENTAL_genesis_config
   * 
   * @example
   * // Execute EXPERIMENTAL_genesis_config
   * const result = await client.methods.EXPERIMENTALGenesisConfig({});
   * // Result will contain: result
   */
  async EXPERIMENTALGenesisConfig(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_genesis_config', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_genesis_config: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute EXPERIMENTAL_light_client_block_proof RPC method
   * 
   * Method: EXPERIMENTAL_light_client_block_proof
   * 
   * @example
   * // Execute EXPERIMENTAL_light_client_block_proof
   * const result = await client.methods.EXPERIMENTALLightClientBlockProof({});
   * // Result will contain: result
   */
  async EXPERIMENTALLightClientBlockProof(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_light_client_block_proof', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_light_client_block_proof: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute EXPERIMENTAL_light_client_proof RPC method
   * 
   * Method: EXPERIMENTAL_light_client_proof
   * 
   * @example
   * // Execute EXPERIMENTAL_light_client_proof
   * const result = await client.methods.EXPERIMENTALLightClientProof({});
   * // Result will contain: result
   */
  async EXPERIMENTALLightClientProof(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_light_client_proof', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_light_client_proof: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute EXPERIMENTAL_maintenance_windows RPC method
   * 
   * Method: EXPERIMENTAL_maintenance_windows
   * 
   * @example
   * // Execute EXPERIMENTAL_maintenance_windows
   * const result = await client.methods.EXPERIMENTALMaintenanceWindows({});
   * // Result will contain: result
   */
  async EXPERIMENTALMaintenanceWindows(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_maintenance_windows', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_maintenance_windows: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute EXPERIMENTAL_protocol_config RPC method
   * 
   * Method: EXPERIMENTAL_protocol_config
   * 
   * @example
   * // Execute EXPERIMENTAL_protocol_config
   * const result = await client.methods.EXPERIMENTALProtocolConfig({});
   * // Result will contain: result
   */
  async EXPERIMENTALProtocolConfig(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_protocol_config', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_protocol_config: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute EXPERIMENTAL_receipt RPC method
   * 
   * Method: EXPERIMENTAL_receipt
   * 
   * @example
   * // Execute EXPERIMENTAL_receipt
   * const result = await client.methods.EXPERIMENTALReceipt({});
   * // Result will contain: result
   */
  async EXPERIMENTALReceipt(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_receipt', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_receipt: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute EXPERIMENTAL_split_storage_info RPC method
   * 
   * Method: EXPERIMENTAL_split_storage_info
   * 
   * @example
   * // Execute EXPERIMENTAL_split_storage_info
   * const result = await client.methods.EXPERIMENTALSplitStorageInfo({});
   * // Result will contain: result
   */
  async EXPERIMENTALSplitStorageInfo(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_split_storage_info', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_split_storage_info: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute EXPERIMENTAL_tx_status RPC method
   * 
   * Method: EXPERIMENTAL_tx_status
   * 
   * @example
   * // Execute EXPERIMENTAL_tx_status
   * const result = await client.methods.EXPERIMENTALTxStatus({});
   * // Result will contain: result
   */
  async EXPERIMENTALTxStatus(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_tx_status', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_tx_status: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute EXPERIMENTAL_validators_ordered RPC method
   * 
   * Method: EXPERIMENTAL_validators_ordered
   * 
   * @example
   * // Execute EXPERIMENTAL_validators_ordered
   * const result = await client.methods.EXPERIMENTALValidatorsOrdered({});
   * // Result will contain: result
   */
  async EXPERIMENTALValidatorsOrdered(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('EXPERIMENTAL_validators_ordered', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute EXPERIMENTAL_validators_ordered: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get block information by height or hash
   * 
   * Method: block
   * 
   * @example
   * // Get latest block
   * const result = await client.methods.block({
  "finality": "final"
});
   * // Result will contain: header, chunks
   * @example
   * // Get block by height
   * const result = await client.methods.block({
  "block_id": 1
});
   * // Result will contain: header, chunks
   */
  async block(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('block', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute block: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Broadcast a transaction asynchronously
   * 
   * Method: broadcast_tx_async
   * 
   * @example
   * // Execute broadcast_tx_async
   * const result = await client.methods.broadcastTxAsync({});
   * // Result will contain: result
   */
  async broadcastTxAsync(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('broadcast_tx_async', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute broadcast_tx_async: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Broadcast a transaction and wait for commit
   * 
   * Method: broadcast_tx_commit
   * 
   * @example
   * // Execute broadcast_tx_commit
   * const result = await client.methods.broadcastTxCommit({});
   * // Result will contain: result
   */
  async broadcastTxCommit(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('broadcast_tx_commit', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute broadcast_tx_commit: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute changes RPC method
   * 
   * Method: changes
   * 
   * @example
   * // Execute changes
   * const result = await client.methods.changes({});
   * // Result will contain: result
   */
  async changes(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('changes', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute changes: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get chunk information
   * 
   * Method: chunk
   * 
   * @example
   * // Execute chunk
   * const result = await client.methods.chunk({});
   * // Result will contain: result
   */
  async chunk(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('chunk', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute chunk: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute client_config RPC method
   * 
   * Method: client_config
   * 
   * @example
   * // Execute client_config
   * const result = await client.methods.clientConfig({});
   * // Result will contain: result
   */
  async clientConfig(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('client_config', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute client_config: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get current gas price
   * 
   * Method: gas_price
   * 
   * @example
   * // Execute gas_price
   * const result = await client.methods.gasPrice({});
   * // Result will contain: result
   */
  async gasPrice(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('gas_price', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute gas_price: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute health RPC method
   * 
   * Method: health
   * 
   * @example
   * // Execute health
   * const result = await client.methods.health({});
   * // Result will contain: result
   */
  async health(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('health', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute health: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute light_client_proof RPC method
   * 
   * Method: light_client_proof
   * 
   * @example
   * // Execute light_client_proof
   * const result = await client.methods.lightClientProof({});
   * // Result will contain: result
   */
  async lightClientProof(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('light_client_proof', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute light_client_proof: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get network information
   * 
   * Method: network_info
   * 
   * @example
   * // Execute network_info
   * const result = await client.methods.networkInfo({});
   * // Result will contain: result
   */
  async networkInfo(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('network_info', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute network_info: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute next_light_client_block RPC method
   * 
   * Method: next_light_client_block
   * 
   * @example
   * // Execute next_light_client_block
   * const result = await client.methods.nextLightClientBlock({});
   * // Result will contain: result
   */
  async nextLightClientBlock(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('next_light_client_block', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute next_light_client_block: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Query the network (view account, call function, etc.)
   * 
   * Method: query
   * 
   * @example
   * // View account
   * const result = await client.methods.query({
  "request_type": "view_account",
  "finality": "final",
  "account_id": "example.testnet"
});
   * // Result will contain: amount, code_hash, storage_usage
   */
  async query(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('query', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute query: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute send_tx RPC method
   * 
   * Method: send_tx
   * 
   * @example
   * // Execute send_tx
   * const result = await client.methods.sendTx({});
   * // Result will contain: result
   */
  async sendTx(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('send_tx', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute send_tx: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get the current status of the node
   * 
   * Method: status
   * 
   * @example
   * // Get node status
   * const result = await client.methods.status({});
   * // Result will contain: version, chain_id, sync_info
   */
  async status(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('status', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute status: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get transaction information
   * 
   * Method: tx
   * 
   * @example
   * // Execute tx
   * const result = await client.methods.tx({});
   * // Result will contain: result
   */
  async tx(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('tx', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute tx: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get validator information
   * 
   * Method: validators
   * 
   * @example
   * // Execute validators
   * const result = await client.methods.validators({});
   * // Result will contain: result
   */
  async validators(params: any = {}): Promise<any> {
    try {
      const result = await this.client.request('validators', params);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to execute validators: ${error.message}`);
      }
      throw error;
    }
  }

}
