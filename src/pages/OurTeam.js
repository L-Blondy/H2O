import React from 'react';
import { Banner, MainContainer } from "../components";
import { clr } from "../styles";

function OurTeam() {
	return (
		<MainContainer background={ clr.bannerGradient }>
			<Banner
				title="Our Team"
				headLine="Meet the people that work with us"
			/>
		</MainContainer>
	);
}

export default OurTeam;