import { useState, useEffect } from 'react';

function useMinHeight(selector) {
	const [ minHeight, setMinHeight ] = useState();

	useEffect(() => {
		const target = document.querySelector(selector);
		window.addEventListener("resize", handleResize);
		handleResize();

		function handleResize() {
			setMinHeight(window.innerHeight - Math.abs(target.getBoundingClientRect().top));
		}
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return minHeight;
}

export default useMinHeight;