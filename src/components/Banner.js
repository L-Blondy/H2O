import React from "react";
import styled from "styled-components";
import { MainContainer } from "./";
import { fontFam, clr, bp } from "../style-variables";

export default function Banner( { title, headLine } ) {
	return (
		<MainContainer background={ clr.bannerGradient }>
			<BannerContainer>
				<BannerTitle>{ title }</BannerTitle>
				<BannerHeadline>{ headLine }</BannerHeadline>
			</BannerContainer>
		</MainContainer>
	);
}

const BannerContainer = styled.div`
	padding-top: 3em;
	padding-bottom: 3em;

	@media screen and (max-width: ${bp.phone }){
		padding-top: 1.1em;
		padding-bottom: 1.1em;;
	}
`;

const BannerTitle = styled.h1`
	color: ${ clr.fontLight };
	font-family: ${fontFam.prim };
	font-weight: bold;
	font-size: 2.35rem;
	letter-spacing: 0.07em;

	@media screen and (max-width: ${bp.phone }){
		font-size: 1.65rem;
	}
`;

const BannerHeadline = styled.h3`
	color: ${ clr.fontLight };
	font-family: ${fontFam.sec };
	font-weight: 400;
	font-size: 1.17rem;
	letter-spacing: 0.02em;
	padding-top:0.3em;
	padding-bottom:0.7em;

	@media screen and (max-width: ${bp.phone }){
		display: none;
	}
`;



