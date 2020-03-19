import { useState, useEffect } from 'react';

function useFullMinHeight( selector, fullHeight = true ) {
	if ( !fullHeight ) {
		return "initial";
	}
	const [ minHeight, setMinHeight ] = useState();

	useEffect( () => {
		const target = document.querySelector( selector );
		window.addEventListener( "resize", handleResize );
		handleResize();

		function handleResize() {
			setMinHeight( window.innerHeight - target.getBoundingClientRect().top + document.documentElement.getBoundingClientRect().top );
		}
		return () => window.removeEventListener( "resize", handleResize );
	}, [] );

	return minHeight + "px";
}

export default useFullMinHeight;