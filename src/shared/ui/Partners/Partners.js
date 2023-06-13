import './index.css';

import masterPassPath from '../../../assets/vectors/masterpass-logo.svg';
import visaVerifiedPath from '../../../assets/vectors/verified-visa-logo.svg';
import masterCardPath from '../../../assets/vectors/verified-mastercard-logo.svg';
import pciPath from '../../../assets/vectors/verified-pci-dss-logo.svg';
import classNames from 'classnames';

const partnersData = [
	{ alt: 'masterPass', src: masterPassPath },
	{ alt: 'visa', src: visaVerifiedPath },
	{ alt: 'masterCard', src: masterCardPath },
	{ alt: 'pciPass', src: pciPath },
]

export const Partners = ({ className }) => {
	return (
		<ul className={classNames('Partners', {[className]: className})}  >
			{partnersData.map((value, index) => {
				return (
					<li key={index} className="Partners__item">
						<img src={value.src} alt={value.alt} />
					</li>
				)
			})}
		</ul>
	)
}
