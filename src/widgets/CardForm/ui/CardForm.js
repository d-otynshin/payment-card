import { useState } from 'react';
import { Button } from '../../../shared/ui/Button/Button';
import { Formik } from 'formik';
import { validationSchema } from '../model/schema';
import { formatCVV } from '../helpers/formatCVV';
import { formatExpirationDate } from '../helpers/formatExpirationDate';
import { formatCardNumber } from '../helpers/formatCardNumber';
import { handleInputChange } from '../helpers/handleInputChange';
import { getInitialFormInitialValues } from '../helpers/getInitialFormInitialValues';
import { formatTitleText } from '../../../shared/config/helpers/formatTitleText';
import { shouldDisableButton } from '../helpers/shouldDisableButton';
import { formatCreditCardNumber } from '../../../shared/config/helpers/formatCreditCardNumber';
import { CARD_NUMBER, CVV, EXPIRATION_DATE } from '../../../shared/constants';
import { FormField } from '../../../shared/ui/FormField/FormField';
import './index.css';
import { useTranslation } from 'react-i18next';

export const CardForm = ({ setData, setFocusedField, orderData, handleSubmit }) => {
	const [isSave, setIsSave] = useState(false);
	const [cardNumber, setCardNumber] = useState('');
	const [expirationDate, setExpirationDate] = useState('')
	const [cvv, setCVV] = useState('');
	const { t } = useTranslation();

	const { display_amount: amount = '', currency = '' } = orderData || {};

	const handleCheckboxChange = (event) => {
		const { checked } = event.target;
		setIsSave(checked);
	};

	const handleCardNumberChange = (event, setFieldValue) => {
		const input = event.target.value;
		const formattedInput = formatCardNumber(input).trim();


		setFieldValue(CARD_NUMBER, formatCreditCardNumber(formattedInput));
		setData((prevState) => ({ ...prevState, cardNumber: formattedInput }));
		setCardNumber(formattedInput);
	};

	const handleExpirationDateChange = (event, setFieldValue) => {
		handleInputChange(
			event,
			formatExpirationDate,
			EXPIRATION_DATE,
			setFieldValue,
			setData,
			setExpirationDate
		)
	}

	const handleCVVChange = (event, setFieldValue) => {
		handleInputChange(
			event,
			formatCVV,
			CVV,
			setFieldValue,
			setData,
			setCVV
		)
	};

	return (
		<div className="Card">
			<h1 className="Card__title">Оплата картой</h1>

			<Formik
				initialValues={getInitialFormInitialValues()}
				validateOnBlur={true}
				validateOnChange={true}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ handleBlur, errors, touched, setFieldValue }) => {
					return (
						<form className="Card__form" onSubmit={handleSubmit}>
							<FormField
								onFocus={() => setFocusedField(CARD_NUMBER)}
								name={CARD_NUMBER}
								legend={t('Card number')}
								placeholder="1234 1234 1234 1234"
								onChange={(event) => handleCardNumberChange(event, setFieldValue)}
								onBlur={handleBlur}
								maxLength={19}
								value={cardNumber}
								error={touched.cardNumber && errors.cardNumber}
							/>

							<div className="PaymentPage__input-wrapper">
								<FormField
									onFocus={() => setFocusedField(EXPIRATION_DATE)}
									name={EXPIRATION_DATE}
									value={expirationDate}
									onChange={(event) => handleExpirationDateChange(event, setFieldValue)}
									type="text"
									legend={t('Expiration date')}
									width="50%"
									onBlur={handleBlur}
									placeholder="01/23"
									error={touched.expirationDate && errors.expirationDate}
								/>
								<FormField
									onFocus={() => setFocusedField(CVV)}
									onBlur={handleBlur}
									name={CVV}
									value={cvv}
									onChange={(event) => handleCVVChange(event, setFieldValue)}
									type="text"
									legend="CVC / CVV"
									width="50%"
									placeholder="123"
									error={touched.cvv && errors.cvv}
								/>
							</div>
							<label className="Card__form-label">
								<input
									type="checkbox"
									checked={isSave}
									onChange={handleCheckboxChange}
								/>
								{t('Save cart on this website')}
							</label>
							<Button
								text={t('Pay') + " " + formatTitleText(amount, currency)}
								disabled={shouldDisableButton(errors, touched) || !amount}
							/>
						</form>
					)
				}}
			</Formik>

			<ul className="description">
				{t('All rights are secured by')} <b>ioka</b>
			</ul>
		</div>
	)
}
