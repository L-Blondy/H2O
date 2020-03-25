import React, { useContext, useEffect, useRef } from 'react';
import { ObsCtx } from "../Context";
import { setupLazyObs } from "../utils";

function Parallax({ className, children }) {

	const self = useRef();
	const [ , setObserver ] = useContext(ObsCtx);

	useEffect(() => {
		const obs = setupLazyObs(self.current);
		setObserver(obs);
	}, [ self ]);

	return (
		<div
			className={ className }
			ref={ self } >

			{ children }
		</div>
	);
}

export default Parallax;

