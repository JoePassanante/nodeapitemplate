const buildCreateMessage = require('./build')
const uuidv4 = require('uuid/v4')
/**
 * Creates UUID
 */
function createID () {
	return uuidv4()
}
/**
 * Validates that the ID is a UUID
 * @param {String} id
 */
function isValidID (id) {
	// https://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid
	return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)
}
module.exports = buildCreateMessage({ createID, isValidID, isValidOwnerID: isValidID })
