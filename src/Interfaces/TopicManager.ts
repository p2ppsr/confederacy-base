import { Transaction } from "../Models/Transaction";
import { Output } from "../Models/Output";

/**
 * Defines a Confederacy TopicManager interface that can be implemented
 */
export interface TopicManager {
  /**
   * Returns the outputs from the transaction that are admissible.
   * @param {Array<Output>} previousUTXOs - UTXOs belonging to the current topic being spent as input in the transaction
   * @param {Transaction} parsedTransaction - transaction containing outputs to admit into the current topic
   */
  identifyAdmissibleOutputs({ previousUTXOs, parsedTransaction }: { previousUTXOs: Array<Output>, parsedTransaction: Transaction }): Promise<number[] | AdmissableOutputs>

   /**
   * Returns a Markdown-formatted documentation string for the topic manager.
   */
  getDocumentation?(): Promise<String>

  /**
   * Returns a metadata object that can be used to identify the topic manager.
   */
  getMetaData?(): Promise<{ name: String, shortDescription: String, iconURL?: String, version?: String, informationURL?: String }>
}

/**
 * Represents the structure of new admissible outputs returned from a lookup service
 * @param {number[]} outputsToAdmit - references the vouts of all admissable outputs of a transaction
 * @param {number[]} outputsToRetain - references the ids of all outputs to retain as history
 */
export type AdmissableOutputs = {
  outputsToAdmit: number[]
  outputsToRetain: number[]
}