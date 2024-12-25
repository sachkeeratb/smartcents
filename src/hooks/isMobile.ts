import { useEffect, useState } from 'react';

export const isMobile = () => {
	const [mobile, setMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth <= 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return mobile;
};
