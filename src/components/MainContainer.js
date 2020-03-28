import React from 'react';
import styled from "styled-components";
import { bp } from "../Global";

function MainContainer({ children, className, background, vertical, horizontal }) {
	return (
		<MC
			background={ background }
			className={ className }>

			<Contained
				bp={ bp }
				vertical={ vertical }
				horizontal={ horizontal }>
				{ children }
			</Contained>
		</MC>
	);
}

export default MainContainer;

/*****************
 * STYLING
 */

const MC = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items:stretch;
	background: ${ props => props.background };
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	transform-style: preserve-3d;

	@media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
		transform: translateZ(0);
	}
	@-moz-document url-prefix() { 
		transform: none;
	} 
	/* section-container */
	&.section-container {
		padding-top: 6rem;
		padding-bottom: 6rem;

		@media screen and (max-width: ${bp.burger }){
			padding-top: 5rem;
			padding-bottom: 5rem;
		}
		@media screen and (max-width: ${bp.phone }){
			padding-top: 4rem;
			padding-bottom: 4rem;
		}
	}
	&.stand-alone {
		padding-top: 8rem;
		padding-bottom: 12rem;

		@media screen and (max-width: ${bp.burger }){
			padding-top: 6rem;
			padding-bottom: 19rem;
		}
		@media screen and (max-width: ${bp.phone }){
			padding-top: 4rem;
			padding-bottom: 6rem;
		}
	}
`;
const Contained = styled.div`
	width: 1000px;
	max-width: 85%;
	display: flex;
	flex-direction: column;
	justify-content:${ props => props.vertical === "center" ? "center" : props.vertical === "bottom" ? "flex-end" : "initial" };
	align-items: ${ props => props.horizontal === "center" ? "center" : props.horizontal === "right" ? "flex-end" : props.horizontal === "left" ? "flex-start" : "initial" };
	transform-style: preserve-3d;

	@media screen and (max-width:${bp.tablet }) {
		width: 700px;
	}
`;
