const { formatCardNumber } = require('../formatCardNumber');

describe('formatCardNumber', () => {
	it('should format the card number with space separators', () => {
		const input = '1234567890123456';
		const expectedOutput = '1234 5678 9012 3456';
		expect(formatCardNumber(input)).toBe(expectedOutput);
	});

	it('should remove non-digit characters before formatting', () => {
		const input = '12a34 567b8#90c12!34$56';
		const expectedOutput = '1234 5678 9012 3456';
		expect(formatCardNumber(input)).toBe(expectedOutput);
	});

	it('should handle shorter input with no additional space separators', () => {
		const input = '1234';
		const expectedOutput = '1234';
		expect(formatCardNumber(input)).toBe(expectedOutput);
	});

	it('should handle empty string input', () => {
		const input = '';
		const expectedOutput = '';
		expect(formatCardNumber(input)).toBe(expectedOutput);
	});

	it('should handle non-string input by throwing an error', () => {
		const input = 1234567890123456;
		expect(() => formatCardNumber(input)).toThrow(
			'Invalid input type. Input must be a string.'
		);
	});
});

