import { useRef, useEffect } from 'react';

let observer;
if ( "IntersectionObserver" in window )
	observer = new IntersectionObserver( loadImg, { threshold: 0.01, rootMargin: "0px 0px 300px 0px" } );

function loadImg( entries ) {
	entries.forEach( e => {
		if ( e.intersectionRatio > 0 ) {
			const temp = document.createElement( "IMG" );
			temp.src = e.target.dataset.src;
			temp.onload = () => {
				e.target.src = temp.src;
			};
			observer.unobserve( e.target );
		}
	} );
}

function getLazyImg( img, src, placeholder ) {

	placeholder && ( img.current.src = placeholder );
	img.current.dataset.src = src;

	if ( "IntersectionObserver" in window )
		observer.observe( img.current );
	else
		img.current.src = src;
}

function useLazyImg( src, placeholder ) {
	const img = useRef();
	useEffect( () => {
		getLazyImg( img, src, placeholder );
	}, [ src ] );

	return img;
}

export default useLazyImg;
