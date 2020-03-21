import React, { createContext, useState } from "react";
import { useWindowSize, useNavbarHeight } from "./hooks";

export const NavbarHeightCtx = createContext();
export const WindowSizeCtx = createContext();


export default function Context( { children } ) {

	const windowSize = useWindowSize();
	const navbarHeight = useNavbarHeight( windowSize );

	return (
		<WindowSizeCtx.Provider value={ windowSize }>
			<NavbarHeightCtx.Provider value={ navbarHeight }>
				{ children }
			</NavbarHeightCtx.Provider >
		</WindowSizeCtx.Provider>
	);
}