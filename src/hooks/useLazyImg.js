import { useState, useEffect } from 'react';

function useLazyImg( src, placeholder ) {
	const [ SRC, setSRC ] = useState( placeholder );

	useEffect( () => {
		const loader = document.createElement( "IMG" );
		loader.src = src;
		loader.onload = () => setSRC( src );
	}, [] );

	return SRC;
}

export default useLazyImg;
