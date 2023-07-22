import { Output } from "../Models/Output"

/**
 * Defines a Confederacy LookupService interface to be implemented for specific use-cases
 */
export interface LookupService {
  
    /**
     * Notifies the lookup service of a new output added.
     * @param txid 
     * @param vout 
     * @param outputScript 
     * @param topic 
     */
    outputAdded (params: { txid: string, vout: number, outputScript: Buffer, topic: string }): Promise<void>

    /**
     * Deletes the output record once the UTXO has been spent
     * @param txid 
     * @param vout 
     * @param topic 
     */
    outputSpent (params: { txid: string, vout: number, topic: string }): Promise<void>
 
    /**
     * Queries the lookup service for particular UTXOs
     * @param {object} query - lookup query given as an object
     * @returns {Promise<object[]>} - the data returned from the query
     */
    lookup (query: { query: object }): Promise<Array<LookupResult>>
}

/**
 * Defines the results a lookup services should return
 */
export interface LookupResult {
    txid: string,
    vout: number,
    history?:((output: Output, currentDepth: number) => Promise<boolean>) | number
}
