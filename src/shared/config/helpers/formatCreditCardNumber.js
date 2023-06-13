/**
 * Formats the credit card number by removing spaces.
 * @param {string} creditCardNumber - The credit card number to be formatted.
 * @returns {string} The formatted credit card number.
 */
export const formatCreditCardNumber = (creditCardNumber) => {
	if (typeof creditCardNumber !== 'string') {
		throw new Error('Invalid credit card number. Input must be a string.');
	}

	return creditCardNumber.replaceAll(' ', '');
};
