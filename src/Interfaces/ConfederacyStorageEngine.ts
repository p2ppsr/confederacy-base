import { Output } from "../Models/Output"

/**
 * Defines a StorageEngine interface that can be implemented for specific use cases
 */
export interface ConfederacyStorageEngine {
    /**
     * Adds a new UTXO to the storage medium
     * @param utxo
     */
    addUTXO (
        utxo: Output,
    ): Promise<number>
    
    /**
     * Gets a UTXO from the storage medium
     * @param txid 
     * @param vout 
     * @param topic 
     */
    findUTXO (txid: string, vout: number, topic?: string, spent?: boolean): Promise<Output[]>

    /**
     * Gets a UTXO from the storage medium
     * @param {number} id - reference the unique data in the database
     */
    findUTXOById (id: number): Promise<Output[]>

    /**
     * Deletes a UTXO from the storage medium
     * @param txid 
     * @param vout 
     * @param topic 
     */
    deleteUTXO (txid: string, vout: number, topic: string): Promise<void>

        /**
     * Deletes a UTXO from the storage medium by id
     * @param id
     */
    deleteUTXOById (id: number): Promise<void>

    /**
    * Updates a UTXO as spent
    * @param txid 
    * @param vout 
    * @param topic 
    */
    markUTXOAsSpent(txid: string, vout: number, topic: string): Promise<void>

    /**
    * Updates the consumedBy field
    * @param id
    * @param consumedBy
    */
    updateConsumedBy(id:number, consumedBy: string): Promise<void>

    /**
     * Inserts record of the applied transaction
     * @param txid 
     * @param topic 
     */
    insertAppliedTransaction (txid: string, topic: string): Promise<void>

   /**
    * Checks if a duplicate transaction exists
    * @param txid 
    * @param topic 
    */
    findAppliedTransaction(txid: string, topic: string): Promise<object>
}