import React from 'react';
import styled from "styled-components";
import { bp } from "../styles";

function MainContainer( { children, className, background, minHeight, vertical, horizontal } ) {
	return (
		<MC background={ background } className={ className } minHeight={ minHeight } >
			<Contained bp={ bp } vertical={ vertical } horizontal={ horizontal }>
				{ children }
			</Contained>
		</MC>
	);
}

const MC = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items:stretch;
	background: ${props => props.background };
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	transform: translateZ(0);
	min-height: ${ props => props.minHeight }px;

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
`;
const Contained = styled.div`
	width: 1000px;
	max-width: 85%;
	display: flex;
	flex-direction: column;
	justify-content:${ props => props.vertical === "center" ? "center" : props.vertical === "bottom" ? "flex-end" : "initial" };;
	align-items: ${ props => props.horizontal === "center" ? "center" : props.horizontal === "right" ? "flex-end" : "initial" };

	@media screen and (max-width:${bp.tablet }) {
		width: 700px;
	}
`;

export default MainContainer;