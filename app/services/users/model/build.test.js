const buildCreateModel = require('./build')
function testID () {
	return String(Math.random() * 1000)
}
function isValidID () {
	return true
}
function isValidUsername (text) {
	return typeof text === 'string'
}
const createModel = buildCreateModel({ createID: testID, isValidID, isValidUsername })
describe('Create User', () => {
	it('can generate with only a username', () => {
		const model = createModel({ username: 'testingusername' })
		expect(model.getUsername()).toMatch('testingusername')
	})
	it('throws on missing username', () => {
		// const model = createModel({ username: undefined })
		expect(() => { createModel({ username: undefined }) }).toThrow()
	})
	it('returns proper getters', () => {
		const testModel = {
			username: 'testa',
			firstname: 'testb',
			lastname: 'testc',
			createdAt: 10,
			modifiedAt: 10
		}
		const model = createModel(testModel)
		expect(model.getFirstName()).toMatch(testModel.firstname)
		expect(model.getLastName()).toMatch(testModel.lastname)
		expect(model.getModifiedAt()).toBe(testModel.modifiedAt)
		expect(model.getCreatedAt()).toBe(testModel.createdAt)
		expect(typeof model.getID()).toMatch('string')
	})
	it('throws on invalid date parameters', () => {
		expect(() => { createModel({ username: 'testmodel', createdAt: 'invalid type' }) }).toThrow()
		expect(() => { createModel({ username: 'testmodel', createdAt: Number.NaN() }) }).toThrow()
		expect(() => { createModel({ username: 'testmodel', modifiedAt: 'invalid type' }) }).toThrow()
		expect(() => { createModel({ username: 'testmodel', modifiedAt: Number.NaN() }) }).toThrow()
	})
	it('throws on invalid parameters', () => {
		expect(() => { createModel({ username: 'testmodel', firstname: 0 }) }).toThrow()
		expect(() => { createModel({ username: 'testmodel', lastname: 0 }) }).toThrow()
	})
})
