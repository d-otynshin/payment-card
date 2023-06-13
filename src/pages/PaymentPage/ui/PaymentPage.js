import { useEffect, useState } from 'react';
import { VirtualCard } from '../../../widgets/VirtualCard/VirtualCard';
import { CardForm } from '../../../widgets/CardForm';
import { Response } from '../../../widgets/Response/Response';
import { paymentService } from '../../../services/PaymentService';
import { getDefaultCardData } from '../helpers/getDefaultCardData';
import { fetchOrderById } from '../helpers/fetchOrderById';
import useAsync from '../../../shared/config/hooks/useAsync';
import useOrderId from '../../../shared/config/hooks/useOrderId';
import { APPROVED, ON_HOLD } from '../constants';
import { formatCreditCardNumber } from '../../../shared/config/helpers/formatCreditCardNumber';
import './index.css';

export const PaymentPage = () => {
	const [isPaid, setIsPaid] = useState(false);
	const [focusedField, setFocusedField] = useState('');
	const [cardFormData, setCardFormData] = useState(getDefaultCardData());
	const orderId = useOrderId();
	const { data: orderData } = useAsync(fetchOrderById, [orderId], [orderId], orderId);

	useEffect(() => {
		if (orderData) {
			const onHold = orderData.status === ON_HOLD;

			setIsPaid(onHold)
		}
	}, [orderData])

	const handlePayment = async (requestData) => {
		const response = await paymentService.createCardPayment(orderId, requestData);
		return response.status === APPROVED;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const {
			cardNumber,
			expirationDate,
			cvv,
			save
		} = cardFormData;

		const requestData = {
			pan: formatCreditCardNumber(cardNumber),
			exp: expirationDate,
			cvc: cvv,
			save: save
		}

		const isPaymentApproved = await handlePayment(requestData);
		setIsPaid(isPaymentApproved);
	}

	return (
		<div className="PaymentPage">
			{isPaid
				? <Response isSuccess={isPaid} />
				: <>
						<div className="PaymentPage__virtual-card">
							<VirtualCard
								data={cardFormData}
								orderData={orderData}
								focusedField={focusedField}
							/>
						</div>
						<div className="PaymentPage__card-form">
							<CardForm
								setData={setCardFormData}
								setFocusedField={setFocusedField}
								orderData={orderData}
								handleSubmit={handleSubmit}
							/>
						</div>
				</>
			}
		</div>
	)
}
