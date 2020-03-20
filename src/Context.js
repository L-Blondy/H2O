import React, { createContext, useState } from "react";

export const navigationContext = createContext();



export default function Context( { children } ) {

	const [ isOpen, setIsOpen ] = useState( false );

	return (
		<navigationContext.Provider value={ [ isOpen, setIsOpen ] }>
			{ children }
		</navigationContext.Provider>
	);
}