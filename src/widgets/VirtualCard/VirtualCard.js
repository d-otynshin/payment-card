import cn from 'classnames';
import { useEffect, useState } from 'react';
import chipPath from '../../assets/images/chip.png';
import visaPath from '../../assets/images/visa.png';
import { formatTitleText } from '../../shared/config/helpers/formatTitleText';
import { Partners } from '../../shared/ui/Partners/Partners';
import { CVV } from '../../shared/constants';
import { useTranslation } from 'react-i18next';
import './index.css';

export const VirtualCard = ({ data, focusedField, orderData = {} }) => {
	const [isBack, setIsBack] = useState(false);
	const { t } = useTranslation();
	const { display_amount: amount = '', currency = '', external_id: id = '' } = orderData || {};

	useEffect(() => {
		const backSide = CVV === focusedField;

		setIsBack(backSide);
	}, [focusedField])

	return (
		<div className="VirtualCard">
			<h1 className="VirtualCard__title">{formatTitleText(amount, currency)}</h1>
			<p className="VirtualCard__subtitle"><b>{t('Order number')}: </b>{id || "####"}</p>


			<div className={cn("card", { "card--back": isBack })}>
				<div className="card__front card__part">
					<img alt="square" className="card__front-square card__square" src={chipPath} />
					<img alt="square" className="card__front-logo card__logo" src={visaPath} />
					<p className="card_number">{data.cardNumber || '1234 1234 1234 1234'}</p>

					<div className="card__space-75">
						<span className="card__label">Card holder</span>
						<p className="card__info">Name Surname</p>
					</div>

					<div className="card__space-25">
						<span className="card__label">Expires</span>
						<p className="card__info">{data.expirationDate || '01/23'}</p>
					</div>
				</div>

				<div className="card__back card__part">
					<div className="card__black-line" />
					<div className="card__back-content">
						<div className="card__secret">
							<p className="card__secret--last">{data.cvv  || '123'}</p>
						</div>
						<span className="card__back-info">customer signature</span>
						<img alt="square" className="card__back-logo card__logo" src={visaPath} />
					</div>
				</div>
			</div>

			<Partners className="VirtualCard__partners" />
		</div>
	)
}
