const { formatCreditCardNumber } = require('../formatCreditCardNumber');

describe('formatCreditCardNumber', () => {
	test('should format credit card number by removing spaces', () => {
		const creditCardNumber = '1234 5678 9012 3456';
		const formattedNumber = formatCreditCardNumber(creditCardNumber);
		expect(formattedNumber).toBe('1234567890123456');
	});

	test('should throw an error for invalid input', () => {
		const creditCardNumber = 1234567890123456;
		expect(() => {
			formatCreditCardNumber(creditCardNumber);
		}).toThrow('Invalid credit card number. Input must be a string.');
	});
});
