import React from 'react';
import { MainContainer } from "../components";
import { clr } from "../style-variables";

function Home() {
	return (
		<MainContainer background={ clr.bannerGradient }>
			<div>HOME</div>
		</MainContainer>
	);
}

export default Home;
