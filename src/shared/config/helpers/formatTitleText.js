export const formatTitleText = (amount, currency) => {
	if (amount && currency) {
		const displayAmount = amount / 100;
		return `${displayAmount} ${currency}`;
	}

	return '';
};
