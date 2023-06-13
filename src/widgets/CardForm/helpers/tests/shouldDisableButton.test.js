const { shouldDisableButton } = require('../shouldDisableButton');

describe('shouldDisableButton', () => {
	test('should return disable with errors and and no touched', () => {
		const errors = { cvv: 'required' };
		const touched = {};

		expect(shouldDisableButton(errors, touched)).toBe(true)
	})

	test('should return not disable with empty errors and touched', () => {
		const errors = {};
		const touched = { cvv: true };

		expect(shouldDisableButton(errors, touched)).toBe(false)
	})
})
