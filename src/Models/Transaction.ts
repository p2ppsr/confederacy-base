/**
 * Defines the structure of a Transaction in Confederacy
 */
export class Transaction {
    /**
     * @param id - the transactionId of the transaction (legacy?)
     * @param txid the transactionId of the transaction
     * @param inputs - a structure containing the inputs for this transaction
     * @param outputs - a structure containing the outputs for this transaction
     */
    constructor (
        public id: string,
        public txid: string,
        public inputs: Input[],
        public outputs: ParsedTransactionOutput[]
    ){}
}

// Parsed Transaction Input
interface Input {
    prevTxId: string
    outputIndex: number,
    script: object
}

// Parsed Transaction Output
interface ParsedTransactionOutput {
    satoshis: number
    script: any // bsv lib type
}