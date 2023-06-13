/**
 * Formats the expiration date by adding a slash separator.
 * @param {string} input - The input string representing the expiration date.
 * @returns {string} The formatted expiration date.
 */
export const formatExpirationDate = (input) => {
	if (typeof input !== 'string') {
		return '';
	}

	const digitsOnly = input.replace(/\D/g, '');

	if (digitsOnly.length > 2) {
		return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2, 4)}`;
	}

	return digitsOnly;
};
