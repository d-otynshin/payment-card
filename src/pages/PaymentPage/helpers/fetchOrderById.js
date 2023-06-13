import { paymentService } from '../../../services/PaymentService';

export const fetchOrderById = (orderId) => paymentService.getOrderById(orderId)
