import { useEffect, useState } from 'react';

/**
 * Custom hook for handling asynchronous operations.
 * @param {Function} asyncFunction - The async function to be executed.
 * @param {Array} params - The parameters to be passed to the async function.
 * @param {Array} dependencies - The dependencies to trigger the async function.
 * @param {boolean} condition - The condition to execute the async function.
 * @returns {Object} An object containing the data, loading, and error states.
 */
const useAsync = (asyncFunction, params = [], dependencies = [], condition) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		let isMounted = true;

		(async () => {
			setLoading(true);

			try {
				if (condition) {
					console.log(params)
					const result = await asyncFunction(condition);

					isMounted && setData(result);
				}
			} catch (error) {
				isMounted && setError(error);
			} finally {
				isMounted && setLoading(false);
			}
		})();

		return () => {
			isMounted = false;
		};
	}, dependencies);

	return { data, loading, error };
};

export default useAsync;

