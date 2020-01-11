const buildAddUser = require('./add-user')

describe('Create User', () => {
	it('properly passes object', async () => {
		function insert ({ document }) {
			return document
		}
		const addUser = buildAddUser({ userDB: { insert } })
		const user = {
			username: 'testingusername',
			firstname: 'testingfirstname',
			lastname: 'testinglastname'
		}
		const userModel = await addUser({ ...user })
		expect(userModel).toMatchObject(user)
	})
})
