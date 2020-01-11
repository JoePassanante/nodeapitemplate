const buildCreateModel = require('./build')
function testID () {
	return String(Math.random() * 1000)
}
function isValidID () {
	return true
}
const createModel = buildCreateModel({ createID: testID, isValidID: isValidID, isValidOwnerID: isValidID })
describe('Create Message', () => {
	it('can generate with only a text and owner', () => {
		const demoMessage = {
			text: 'text of the message', ownerID: 'abc123'
		}
		const model = createModel({ ...demoMessage })
		expect(model.getOwnerID()).toMatch(demoMessage.ownerID)
		expect(model.getText()).toMatch(demoMessage.text)
	})
	it('cannot generate without text and owner', () => {
		const demoMessage = {
			text: 'text of the message', ownerID: 'abc123'
		}
		expect(() => { createModel({ ...demoMessage, text: undefined }) }).toThrow()
		expect(() => { createModel({ ...demoMessage, ownerID: undefined }) }).toThrow()
	})
	// TODO - Finish adding cases.
})
