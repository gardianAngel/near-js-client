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
import * as Types from '../../../jsonrpc-types/src/types/validated';
export declare class ValidatedMethods {
    private client;
    constructor(client: NearRpcClient);
    /**
     * Get the current status of the node
     *
     * Method: status
     *
     * @example
     * // Get node status
     * const result = await client.methods.status();
     * // Result will contain: version, chainId, syncInfo
     */
    status(params?: Types.StatusRequest): Promise<Types.StatusResponse>;
    /**
     * Get block information by height or hash
     *
     * Method: block
     *
     * @example
     * // Get latest block
     * const result = await client.methods.block({"finality": "final"});
     * // Result will contain: header, chunks
     * @example
     * // Get block by height
     * const result = await client.methods.block({"blockId": 1});
     * // Result will contain: header, chunks
     */
    block(params?: Types.BlockRequest): Promise<Types.BlockResponse>;
    /**
     * Get chunk information
     *
     * Method: chunk
     *
     * @example
     * // Get chunk by ID
     * const result = await client.methods.chunk({"chunkId": "latest"});
     * // Result will contain: header, transactions
     */
    chunk(params: Types.ChunkRequest): Promise<Types.ChunkResponse>;
    /**
     * Query the network (view account, call function, etc.)
     *
     * Method: query
     *
     * @example
     * // View account
     * const result = await client.methods.query({
     *   "requestType": "view_account",
     *   "finality": "final",
     *   "accountId": "example.testnet"
     * });
     * // Result will contain: amount, codeHash, storageUsage
     */
    query(params: Types.QueryRequest): Promise<Types.QueryResponse>;
    /**
     * Get validator information
     *
     * Method: validators
     *
     * @example
     * // Get validators
     * const result = await client.methods.validators({"finality": "final"});
     * // Result will contain: currentValidators, nextValidators
     */
    validators(params?: Types.ValidatorsRequest): Promise<Types.ValidatorsResponse>;
    /**
     * Get current gas price
     *
     * Method: gas_price
     *
     * @example
     * // Get gas price
     * const result = await client.methods.gasPrice({"finality": "final"});
     * // Result will contain: gasPrice
     */
    gasPrice(params?: Types.GasPriceRequest): Promise<Types.GasPriceResponse>;
    /**
     * Get network information
     *
     * Method: network_info
     *
     * @example
     * // Get network info
     * const result = await client.methods.networkInfo({});
     * // Result will contain: activePeers, knownProducers
     */
    networkInfo(params?: Types.NetworkInfoRequest): Promise<Types.NetworkInfoResponse>;
    /**
     * Get transaction information
     *
     * Method: tx
     *
     * @example
     * // Get transaction
     * const result = await client.methods.tx({
     *   "txHash": "ABC123",
     *   "senderAccountId": "example.testnet"
     * });
     * // Result will contain: status, transaction, transactionOutcome
     */
    tx(params: Types.TransactionRequest): Promise<Types.TransactionResponse>;
    /**
     * Broadcast a transaction asynchronously
     *
     * Method: broadcast_tx_async
     *
     * @example
     * // Broadcast transaction
     * const result = await client.methods.broadcastTxAsync({
     *   "signedTxBase64": "base64encodedtx"
     * });
     * // Result will contain: transaction hash
     */
    broadcastTxAsync(params: Types.BroadcastTransactionRequest): Promise<string>;
    /**
     * Broadcast a transaction and wait for commit
     *
     * Method: broadcast_tx_commit
     *
     * @example
     * // Broadcast transaction and wait
     * const result = await client.methods.broadcastTxCommit({
     *   "signedTxBase64": "base64encodedtx"
     * });
     * // Result will contain: status, transaction, transactionOutcome
     */
    broadcastTxCommit(params: Types.BroadcastTransactionRequest): Promise<Types.TransactionResponse>;
    /**
     * Get experimental changes
     *
     * Method: EXPERIMENTAL_changes
     *
     * @example
     * // Get changes
     * const result = await client.methods.experimentalChanges({});
     * // Result will contain: changes
     */
    experimentalChanges(params?: any): Promise<any>;
    /**
     * Get experimental changes in block
     *
     * Method: EXPERIMENTAL_changes_in_block
     *
     * @example
     * // Get changes in block
     * const result = await client.methods.experimentalChangesInBlock({});
     * // Result will contain: changes
     */
    experimentalChangesInBlock(params?: any): Promise<any>;
    /**
     * Get protocol configuration
     *
     * Method: EXPERIMENTAL_protocol_config
     *
     * @example
     * // Get protocol config
     * const result = await client.methods.experimentalProtocolConfig({"finality": "final"});
     * // Result will contain: protocol configuration
     */
    experimentalProtocolConfig(params?: any): Promise<any>;
    /**
     * Get genesis configuration
     *
     * Method: EXPERIMENTAL_genesis_config
     *
     * @example
     * // Get genesis config
     * const result = await client.methods.experimentalGenesisConfig({});
     * // Result will contain: genesis configuration
     */
    experimentalGenesisConfig(params?: any): Promise<any>;
}
