import React from 'react';
import { Banner, MainContainer } from "../components";
import { Cases } from "../components";
import { clr } from "../styles";
import styled from "styled-components";

function CaseStudies() {
	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Case studies"
					headLine="What our customers say about us"
				/>
			</MainContainer>

			<MainContainer background={ "clr.lightGradient" }>
				<Cases />
			</MainContainer>
		</>
	);
}


export default CaseStudies;
