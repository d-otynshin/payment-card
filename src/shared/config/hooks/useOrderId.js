import { useEffect, useState } from 'react';

const useOrderId = () => {
	const [orderId, setOrderId] = useState();

	useEffect(() => {
		setOrderId(window.location.href.split('/').at(-1))
	}, [])

	return orderId;
};

export default useOrderId;
