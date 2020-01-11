/**
 *
 * @param {Object} param0
 * @param {Function} param0.createConnection Must return promise to mognodb collection connection.
 */
function buildAuthorDB ({ createConnection }) {
	// This is a promise, must use await in DB functions
	const connection = createConnection()
	async function insert ({ document } = {}) {
		const collection = (await connection)
		if (document == null) {
			throw new Error('Invalid document insertion. Document is null.')
		}
		const result = await collection.insert({ ...document })
		return result
	}
	async function remove () {

	}
	async function update () {

	}
	async function findByName ({ firstname = '', lastname = '' }) {

	}
	async function findByID () {

	}
	return Object.freeze({
		insert,
		remove,
		findByName,
		findByID,
		update
	})
}
module.exports = buildAuthorDB
