const { formatExpirationDate } = require('../formatExpirationDate');

describe('formatExpirationDate', () => {
	test('should format expiration date with more than 2 digits', () => {
		const input = '123456';
		const formattedDate = formatExpirationDate(input);
		expect(formattedDate).toBe('12/34');
	});

	test('should return the input as is if it has 2 or fewer digits', () => {
		const input1 = '12';
		const input2 = '1234';
		const formattedDate1 = formatExpirationDate(input1);
		const formattedDate2 = formatExpirationDate(input2);
		expect(formattedDate1).toBe('12');
		expect(formattedDate2).toBe('12/34');
	});

	test('should return an empty string if input is not provided', () => {
		const formattedDate = formatExpirationDate(null);
		expect(formattedDate).toBe('');
	});
});
