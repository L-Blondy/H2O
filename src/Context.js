import React, { createContext } from "react";
import { useWindowSize, useNavbarHeight } from "./hooks";
import { getLazyObs } from "./utils";

export const NavbarHeightCtx = createContext();
export const WindowSizeCtx = createContext();
export const ObsCtx = createContext();


export default function Context( { children } ) {
	const observer = getLazyObs( document.querySelector( ".parallax" ) );
	const windowSize = useWindowSize();
	const navbarHeight = useNavbarHeight( windowSize );

	return (
		<WindowSizeCtx.Provider value={ windowSize }>
			<NavbarHeightCtx.Provider value={ navbarHeight }>
				<ObsCtx.Provider value={ observer }>
					{ children }
				</ObsCtx.Provider>
			</NavbarHeightCtx.Provider>
		</WindowSizeCtx.Provider>
	);
}