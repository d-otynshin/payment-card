/**
 * Formats the cvv for card number by taking only 3 digits.
 * @param {string} input - The input string representing the card cvv.
 * @returns {string} The formatted cvv.
 */
export const formatCVV = (input) => {
	if (typeof input !== 'string') {
		return ''
	}

	const digitsOnly = input.replace(/\D/g, '');
	return digitsOnly.slice(0, 3);
};
