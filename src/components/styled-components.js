import styled from "styled-components";
import { Link } from "react-router-dom";
import { fontFam, clr, bp } from "../Global";

const Btn = styled(Link)`
	display: inline-block;
	font-size: 1.175em;
	font-family: ${ fontFam.sec };
	border-radius: 3px;
	border: currentColor solid 2px;
	padding: 0.4em 1.1em;
	letter-spacing: 0.02em;
	text-align: center;

	&:hover,
	&:focus {
		@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
			opacity: 0.8;
		}
		filter: brightness(1.2);
	}
`;

export const BtnContained = styled(Btn)`
	border-color: ${ props => props.color };;
	color: ${ clr.fontLight };
	background: ${ props => props.color };
`;

export const BtnOutlined = styled(Btn)`
	color: ${ props => props.color };
	background: none;
	font-weight: 600;
`;

export const ContactData = styled.div`
	width: 21em;
	max-width: 45%;
	padding: 2.5rem 0 3.5rem 0;
	min-height: 640px;

	.text {
		font-size: 1.1em;
		padding: 1.0rem 0;
	}

	@media screen and (max-width: ${ bp.burger }){
		width: 100%;
		max-width: 500px;
		margin: auto;

		.text {
			font-size: 1em;
		}
	}
`;

export const Li = styled.li`
	display: flex;
	position: relative;

	&::after,&::before {
		content:"";
		width: 100%;
		height: 3px;
		position: absolute;
		left: 0;
		background: ${ clr.prim };
		transform: scaleX(0);
		opacity: 0.7;
		transform-origin: bottom;
		transition: transform 150ms 30ms;
	}
	&::after {
		bottom:0;
	}
	&::before {
		top:0;
	}

	&:hover::after,
	&:focus::after,
	&:hover::before,
	&:focus::before{
		transform: scaleX(1);
	}
	@media screen and (max-width: ${ bp.burger }){
		display: ${ props => props.hideMobile ? "none" : "flex" };
	}
`;

export const Pad = styled.div`
	height: ${ props => props.height }rem;

	@media screen and (max-width: ${ bp.burger }){
		height: ${ props => props.heightBurger }rem;
	}
	@media screen and (max-width: ${ bp.phone }){
		height: ${ props => props.heightPhone }rem;
	}
`;

export const SectionTitle = styled.h2`
	font-family: ${ fontFam.prim };
	color: ${ clr.sectionTitle };
	font-weight: bold;
	width: 100%;
	text-align: ${props => props.align || "left" };
	font-size: 2.35rem;
	padding-bottom: 3.5rem;

	@media screen and (max-width: ${ bp.tablet } ){
		font-size: calc(1.2rem + 2vw);
	}
	@media screen and (max-width: ${ bp.burger } ){
		padding-bottom: 3rem;
	}
	@media screen and (max-width: ${ bp.phone } ){
		font-size: calc(1.2rem + 2vw);
		padding-bottom: 2rem;
	}
`;

export const Text = styled.p`
	font-family: ${ fontFam.sec };
	color: ${ clr.sec };
	font-size: 1rem;
	line-height: 1.5em;
`;