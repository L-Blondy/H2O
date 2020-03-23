import styled from "styled-components";
import { fontFam, clr, bp } from "../styles";



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

export const Parallax = styled.div`
	height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 1px;
`;

export const SectionTitle = styled.h2`
	font-family: ${ fontFam.prim };
	color: ${ clr.sectionTitle };
	font-weight: bold;
	width: 100%;
	text-align: ${props => props.align || "left" };
	font-size: 2.52rem;
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