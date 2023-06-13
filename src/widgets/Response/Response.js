import './index.css';
import { useTranslation } from 'react-i18next';

export const Response = ({ isSuccess }) => {
	const { t } = useTranslation();

	return (
		<div className="Response">
			{isSuccess ? t('Success') : t('Failed')}
		</div>
	)
}
