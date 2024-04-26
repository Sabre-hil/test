import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number): string => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		if (handler) {
			clearTimeout(handler)
		}
		
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	return debouncedValue;
};
