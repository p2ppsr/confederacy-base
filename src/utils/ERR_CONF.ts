import { CwiError } from 'cwi-base'

/**
 * An internal server error has occurred.
 */
export class ERR_CONF_TOPIC_NOT_SUPPORTED extends CwiError { constructor(description?: string) { super('ERR_TOPIC_NOT_SUPPORTED', description || 'Topics must be provided as an array!') } }
export class ERR_CONF_INVALID_ENVELOPE extends CwiError { constructor(description?: string) { super('ERR_INVALID_ENVELOPE', description || 'Invalid SPV Envelope for the given transaction') } }
export class ERR_CONF_LOOKUP_SERVICE_NOT_SUPPORTED extends CwiError { constructor(description?: string) { super('ERR_LOOKUP_SERVICE_NOT_SUPPORTED', description || 'Lookup service not found for the given provider.') } }
export class ERR_CONF_UTXO_NOT_FOUND extends CwiError { constructor(description?: string) { super('ERR_UTXO_NOT_FOUND', description || 'A matching UTXO was not found!') } }