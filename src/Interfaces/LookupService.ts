import { Output } from "../Models/Output"

/**
 * Defines a Confederacy LookupService interface to be implemented for specific use-cases
 */
export interface LookupService {

  /**
   * Process the event when a new UTXO is let into a topic
   * @param txid 
   * @param vout 
   * @param outputScript 
   * @param topic 
   */
  outputAdded(params: { txid: string, vout: number, outputScript: Buffer, topic: string }): Promise<void>

  /**
   * Process the spend event for a UTXO
   * @param txid 
   * @param vout 
   * @param topic 
   */
  outputSpent(params: { txid: string, vout: number, topic: string }): Promise<void>

    /**
   * Process the deletion event for a UTXO
   * @param txid 
   * @param vout 
   * @param topic 
   */
  outputDeleted?(params: { txid: string, vout: number, topic: string }): Promise<void>

  /**
   * Queries the lookup service for particular UTXOs
   * @param {object} query - lookup query given as an object
   * @returns {Promise<object[]>} - the data returned from the query
   */
  lookup(query: { query: object }): Promise<Array<LookupResult>>

  /**
   * Returns a Markdown-formatted documentation string for the lookup service.
   */
  getDocumentation?(): Promise<String>

  /**
   * Returns a metadata object that can be used to identify the lookup service.
   */
  getMetaData?(): Promise<{ name: String, shortDescription: String, iconURL?: String, version?: String, informationURL?: String }>
}

/**
 * Defines the results a lookup services should return
 */
export interface LookupResult {
  txid: string,
  vout: number,
  history?: ((output: Output, currentDepth: number) => Promise<boolean>) | number
}
