import { useEffect, useState } from 'react';
import { bp } from "../styles";

function useNavbarHeight( windowSize ) {
	const [ navbarHeight, setNavbarHeight ] = useState( '90px' );

	useEffect( () => {
		let height;
		if ( windowSize.width > bp.burger.slice( 0, 3 ) )
			height = "90px";
		else
			height = "60px";
		if ( height != navbarHeight )
			setNavbarHeight( height );
	}, [ windowSize ] );

	return navbarHeight;
}
export default useNavbarHeight;