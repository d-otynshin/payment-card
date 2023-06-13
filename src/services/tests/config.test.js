const { paymentConfig } = require('../config');

describe('paymentConfig', () => {
	const orderId = '123456';

	test('CREATE_ORDER_PAYMENT should build the correct path', () => {
		const expectedPath = `v2/orders/${orderId}/payments/card`;
		const createOrderPaymentPath = paymentConfig.CREATE_ORDER_PAYMENT(orderId);
		expect(createOrderPaymentPath).toBe(expectedPath);
	});

	test('GET_ORDER_BY_ID should build the correct path', () => {
		const expectedPath = `v2/orders/${orderId}`;
		const getOrderByIdPath = paymentConfig.GET_ORDER_BY_ID(orderId);
		expect(getOrderByIdPath).toBe(expectedPath);
	});
});
