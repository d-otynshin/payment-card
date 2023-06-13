/**
 * Formats the card number by adding space separators.
 * @param {string} input - The input string representing the card number.
 * @returns {string} The formatted card number.
 * @throws {Error} If the input is not a string.
 */
export const formatCardNumber = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Invalid input type. Input must be a string.');
	}

	const digitsOnly = input.replace(/\D/g, '');
	let formattedInput = '';

	for (let i = 0; i < digitsOnly.length; i += 4) {
		formattedInput += digitsOnly.slice(i, i + 4) + ' ';
	}

	return formattedInput.trim();
};
