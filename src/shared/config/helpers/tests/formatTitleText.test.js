const { formatTitleText } = require('../formatTitleText');

describe('formatTitleText', () => {
	test('should format title text with amount and currency', () => {
		const amount = 1000;
		const currency = 'USD';
		const titleText = formatTitleText(amount, currency);
		expect(titleText).toBe('10 USD');
	});

	test('should return an empty string if amount or currency is not provided', () => {
		const titleText1 = formatTitleText(1000, null);
		const titleText2 = formatTitleText(null, 'USD');
		const titleText3 = formatTitleText(null, null);
		expect(titleText1).toBe('');
		expect(titleText2).toBe('');
		expect(titleText3).toBe('');
	});
});
