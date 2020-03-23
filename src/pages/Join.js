import React from 'react';
import { Banner, MainContainer } from "../components";
import { clr } from "../styles";

function Join() {
	return (
		<MainContainer background={ clr.bannerGradient }>
			<Banner
				title="Join us"
				headLine="The right place to apply !"
			/>
		</MainContainer>
	);
}

export default Join;