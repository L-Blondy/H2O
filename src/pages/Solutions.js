import React from 'react';
import { MainContainer, Banner, Cards } from "../components";
import { clr } from "../style-variables";

function Solutions() {
	return (
		<>
			<Banner
				title="Solutions"
				headLine="Check out what our services might help you with"
			/>
			<MainContainer background={ clr.lightGradient }>
				<Cards fullHeight />
			</MainContainer>
		</>
	);
}

export default Solutions;
