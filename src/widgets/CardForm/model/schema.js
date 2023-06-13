import * as yup from 'yup';

export const validationSchema = yup.object({
	cardNumber: yup
		.string()
		.matches(/^\d{16}$/, 'Invalid card number')
		.required('Card number is required'),
	expirationDate: yup
		.string()
		.matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiration date')
		.required('Expiration date is required'),
	cvv: yup
		.string()
		.matches(/^\d{3}$/, 'Invalid CVV')
		.required('CVV is required'),
});
