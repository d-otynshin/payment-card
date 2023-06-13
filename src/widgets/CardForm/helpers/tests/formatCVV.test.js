const { formatCVV } = require('../formatCVV');

describe('formatCVV', () => {
	test('should format cvv with more than 3 digits', () => {
		const input = '123456';
		const formattedCVV = formatCVV(input);
		expect(formattedCVV).toBe('123');
	});

	test('should return the input as is if it has 3 or fewer digits', () => {
		const input1 = '12';
		const formattedCVV = formatCVV(input1);
		expect(formattedCVV).toBe('12');
	});

	test('should return an empty string if input is not provided', () => {
		const formattedCVV = formatCVV(null);
		expect(formattedCVV).toBe('');
	});
});
