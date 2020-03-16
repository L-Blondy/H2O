import styled from "styled-components";
import { fontFam, clr, bp } from "../style-variables";

export const MainContainer = styled.div`
	width: 100%;
	padding: 0 20%;
	background: ${props => props.background };

	@media screen and (max-width:1299.8px) {
		padding-left: 17.5%;
		padding-right: 17.5%;
	}
	@media screen and (max-width:1199.8px) {
		padding-left: 15%;
		padding-right: 15%;
	}
	@media screen and (max-width:899.8px) {
		padding-left: 10%;
		padding-right: 10%;
	}
	@media screen and (max-width:576px) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
`;
export const BannerContainer = styled( MainContainer )`
	background:${ clr.bannerGradient };
	padding-top: 3.3em;
	padding-bottom: 3.3em;
`;

export const BannerTitle = styled.h1`
	color: ${ clr.fontLight };
	font-family: ${fontFam.prim };
	font-weight: bold;
	font-size: 2.35rem;
	letter-spacing: 0.07em;

	@media screen and (max-width: ${bp.phone }){
		font-size: 1.65rem;
	}
`;

export const BannerHeadline = styled.h3`
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



