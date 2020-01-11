/**
 * Holds the dependencies required for createUser function.
 * @param {Object} param0
 * @param {Function} param0.createID
 * @param {Function} param0.isValidID
 */
function buildCreateUser ({ createID, isValidID, isValidUsername }) {
	return createUser
	/**
   * Creates a new user model. Read only.
   * @param {Object} param0
   * @param {String} param0.username
   * @param {String} param0.firstname
   * @param {String} param0.lastname
   * @param {String} param0.id
   * @param {Number | Date} param0.createdAt
   * @param {Number | Date} param0.modifiedAt
   */
	function createUser ({ username, firstname = '', lastname = '', id = createID(), createdAt = Date.now(), modifiedAt = Date.now() }) {
		// Validate parameters
		if (!isValidUsername(username)) {
			throw new TypeError('Invalid user username.')
		}
		if (typeof firstname !== 'string') {
			throw new TypeError('Invalid user firstname.')
		}
		if (typeof lastname !== 'string') {
			throw new TypeError('Invalid user lastname.')
		}
		if (!isValidID(id)) {
			throw new TypeError('Invalid user id.')
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
				username,
				firstname,
				lastname,
				id,
				createdAt: new Date(createdAt).valueOf(),
				modifiedAt: new Date(modifiedAt).valueOf()
			})
		}

		// Expose only via getters
		return Object.freeze({
			getID: () => id,
			getUsername: () => username,
			getFirstName: () => firstname,
			getLastName: () => lastname,
			getCreatedAt: () => new Date(createdAt).valueOf(),
			getModifiedAt: () => new Date(modifiedAt).valueOf(),
			toJSON
		})
	}
}
module.exports = buildCreateUser
