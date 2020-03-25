import React, { useContext, useEffect, useRef } from 'react';
import { ObsCtx } from "../Context";
import { setupLazyObs } from "../utils";

function Parallax({ className, children }) {

	const self = useRef();
	const [ , setObserver ] = useContext(ObsCtx);

	useEffect(() => {
		const obs = setupLazyObs(self.current);
		setObserver(obs);
	}, []);

	return (
		<div
			className={ className }
			style={ style }
			ref={ self } >

			{ children }
		</div>
	);
}

export default Parallax;

const style = {
	"height": "100vh",
	"overflowX": "hidden",
	"overflowY": "auto",
	"perspective": "1px",
};
