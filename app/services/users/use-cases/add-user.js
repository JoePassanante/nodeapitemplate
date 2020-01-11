const createUser = require('../model')
function buildAddUser ({ userDB }) {
	/**
   *
   * @param {Object} param0
   * @param {String} param0.username
   */
	async function addUser ({ username, firstname = '', lastname = '', createdAt = Date.now() }) {
		const user = createUser({ username, firstname, lastname, createdAt })
		const result = await userDB.insert({ document: user.toJSON() })
		return result
	}
	return addUser
}
module.exports = buildAddUser
