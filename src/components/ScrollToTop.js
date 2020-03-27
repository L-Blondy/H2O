import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
	const { pathname } = useLocation();
	console.log(window.scrollTo);
	// Element.prototype.scrollTo = window.scrollTo;

	useEffect(() => {
		document.querySelector(".parallax").scrollTo(0, 0);
	}, [ pathname ]);

	return null;
}

export default ScrollToTop;