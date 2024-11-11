/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

const useMatchMedia = (query: string) => {
	const [matches, setMatches] = useState(window.matchMedia(query).matches);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query);
		const handleChange = (event: any) => {
			setMatches(event.matches);
		};

		mediaQueryList.addEventListener('change', handleChange);
		return () => mediaQueryList.removeEventListener('change', handleChange);
	}, [query]);

	return matches;
};

export default useMatchMedia;
