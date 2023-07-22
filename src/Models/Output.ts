import { EnvelopeInputMapApi, MapiResponseApi, TscMerkleProofApi } from "cwi-external-services";

/**
 * Defines the structure of a UTXO in Confederacy
 */
export class Output {
   /**
    * 
    * @param {string} txid - the transactionId of the transaction this UTXO is apart of
    * @param {number} vout - index of the output
    * @param {Buffer | string} outputScript - the outputScript data for the given UTXO
    * @param {string} topic - the topic this UTXO is apart of
    * @param {number} satoshis - amount of this UTXO
    * @param {string} rawTx - the raw transaction data
    * @param {boolean} spent - indicates whether this output has been spent
    * @param {string} proof - SPV envelope for the associated transaction
    * @param {string} mapiResponses - mapi responses from miners for the associated transaction
    * @param {string} inputs - a structure containing the inputs for the transaction this output is apart of
    * @param {string} utxosConsumed - a stringified array that represents the outputs consumed by this UTXO
    * @param {Output[]} history - all previous outputs apart of this UTXO's history to n depth
    * @param {number} id - the id of the output database entry
    */
    constructor(
        public txid: string, 
        public vout: number, 
        public outputScript: Buffer | string,
        public satoshis: number,
        public rawTx: string, 
        public spent?: boolean,
        public topic?: string,
        public proof?: TscMerkleProofApi, 
        public mapiResponses?: MapiResponseApi[], 
        public inputs?: EnvelopeInputMapApi,
        public utxosConsumed?: string,
        public history?: Output[],
        public id?: number,
        public consumedBy?: string
    ) {}
}