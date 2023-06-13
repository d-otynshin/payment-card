const URL = 'https://stage-api.ioka.kz';
const ROOT_PATH = URL;

const V2 = 'v2';
const ORDERS = 'orders';
const PAYMENTS = 'payments';
const CARD = 'card';

const buildPath = (params, rootPath = ROOT_PATH) => {
	return `${rootPath}/${params.join('/')}`;
};

export const paymentConfig = {
	CREATE_ORDER_PAYMENT: (orderId) => buildPath([V2, ORDERS, orderId, PAYMENTS, CARD]),
	GET_ORDER_BY_ID: (orderId) => buildPath([V2, ORDERS, orderId])
};
