import React from 'react';
import { Banner, MainContainer } from "../components";
import { Cases } from "#/components";
import { clr } from "#/Global";

function CaseStudies() {

	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Case studies"
					headLine="What our customers say about us"
				/>
			</MainContainer>

			<MainContainer
				className="stand-alone"
				background={ "clr.lightGradient" }>

				<Cases />
			</MainContainer>
		</>
	);
}

export default CaseStudies;