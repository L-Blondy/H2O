import React from 'react';
import { Banner, MainContainer } from "../components";
import { clr } from "../style-variables";

function CaseStudies() {
	return (
		<MainContainer background={ clr.bannerGradient }>
			<Banner
				title="Case studies"
				headLine="What our customers say about us"
			/>
		</MainContainer>
	);
}

export default CaseStudies;