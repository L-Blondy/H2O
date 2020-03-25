import React from 'react';
import { Banner, MainContainer } from "../components";
import { clr } from "../styles";
import { BtnContained } from "../components/styled-components";

function OurTeam() {
	return (
		<MainContainer background={ clr.bannerGradient }>
			<Banner
				title="Our Team"
				headLine="Meet the people that work with us"
				Btn={ () => (
					<BtnContained
						to="/"
						color={ clr.primDark }>
						Join the Team
					</BtnContained>
				) }
			/>
		</MainContainer>
	);
}

export default OurTeam;