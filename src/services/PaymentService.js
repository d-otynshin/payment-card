import axios from 'axios';
import { paymentConfig } from './config';
import { APIClient } from './APIClient';

class PaymentService extends APIClient {
	async createCardPayment(order_id, parameters) {
		const path = paymentConfig.CREATE_ORDER_PAYMENT(order_id);
		const response = await axios.post(
			path,
			parameters
		);

		if (!this.isSuccess(response)) {
			await this.handleError(response);
		}

		return response.data;
	}

	async getOrderById(order_id) {
		const path = paymentConfig.GET_ORDER_BY_ID(order_id);
		const response = await axios.get(path);

		if (!this.isSuccess(response)) {
			await this.handleError(response);
		}

		return response.data;
	}
}

export const paymentService = new PaymentService();
