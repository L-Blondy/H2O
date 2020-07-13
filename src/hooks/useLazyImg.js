import { useRef, useEffect, useContext } from 'react';
import { ObsCtx } from "#/Context";

function getLazyImg(img, src, placeholder, observer) {

	if ("IntersectionObserver" in window && !observer)
		return;

	placeholder && (img.current.src = placeholder);
	img.current.dataset.src = src;

	if ("IntersectionObserver" in window)
		observer.observe(img.current);
	else {
		img.current.src = src;
	}
}

function useLazyImg(src, placeholder) {
	const img = useRef();
	const [ observer ] = useContext(ObsCtx);

	useEffect(() => {
		getLazyImg(img, src, placeholder, observer);
	}, [ src ]);

	return img;
}

export default useLazyImg;
