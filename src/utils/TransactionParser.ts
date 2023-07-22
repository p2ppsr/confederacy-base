import bsv from 'babbage-bsv'
import { Transaction } from '../Models/Transaction'

export class TransactionParser {
    /**
     * Parses a transaction object from raw tx data
     * @param {string} rawTx - Raw transaction data
     * @returns {object} - parsed transaction object
     */
    parse (rawTx: string): Transaction {
        const parsedTransaction = new bsv.Transaction(rawTx)
        // TODO: improve structure
        return parsedTransaction
    }
}
