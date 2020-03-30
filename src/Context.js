import React, { createContext, useState } from "react";
import { useWindowSize, useNavbarHeight } from "./hooks";

export const NavbarHeightCtx = createContext();
export const WindowSizeCtx = createContext();
export const ObsCtx = createContext();

export default function Context({ children }) {
	const windowSize = useWindowSize();
	const navbarHeight = useNavbarHeight(windowSize);
	const [ observer, setObserver ] = useState();

	return (
		<WindowSizeCtx.Provider value={ windowSize }>
			<NavbarHeightCtx.Provider value={ navbarHeight }>
				<ObsCtx.Provider value={ [ observer, setObserver ] }>
					{ children }
				</ObsCtx.Provider>
			</NavbarHeightCtx.Provider>
		</WindowSizeCtx.Provider>
	);
}