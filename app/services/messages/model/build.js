/**
 * Holds the dependencies required for createMessage function.
 * @param {Object} param0
 * @param {Function} param0.createID
 * @param {Function} param0.isValidID
 * @param {Function} param0.isValidOwnerID
 */
function buildCreateMessage ({ createID, isValidID, isValidOwnerID }) {
	return createMessage
	/**
   * Creates a new message model. Read only.
   * @param {Object} param0
   * @param {String} param0.text
   * @param {String} param0.ownerID
   * @param {String} param0.id
   * @param {Number | Date} param0.createdAt
   * @param {Number | Date} param0.modifiedAt
   */
	function createMessage ({ text, ownerID, id = createID(), createdAt = Date.now(), modifiedAt = Date.now() }) {
		// Validate parameters
		if (!isValidOwnerID(ownerID)) {
			throw new TypeError('Invalid message owner.')
		}
		if (typeof text !== 'string') {
			throw new TypeError('Invalid message text.')
		}
		if (!isValidID(id)) {
			throw new TypeError('Invalid message id.')
		}

		// Validate dates
		if (Number.isNaN(new Date(createdAt).valueOf())) {
			throw new TypeError('Invalid createdAt date.')
		}
		if (Number.isNaN(new Date(modifiedAt).valueOf())) {
			throw new TypeError('Invalid modifiedAt date.')
		}
		/**
		 * Generates a valid model, in JSON.
		 */
		function toJSON () {
			return Object.freeze({
				text,
				ownerID,
				id,
				createdAt: new Date(createdAt).valueOf(),
				modifiedAt: new Date(modifiedAt).valueOf()
			})
		}

		// Expose only via getters
		return Object.freeze({
			getID: () => id,
			getText: () => text,
			getOwnerID: () => ownerID,
			getCreatedAt: () => new Date(createdAt).valueOf(),
			getModifiedAt: () => new Date(modifiedAt).valueOf(),
			toJSON
		})
	}
}
module.exports = buildCreateMessage
