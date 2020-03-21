import React from 'react';
import styled from "styled-components";
import { bp } from "../style-variables";

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
	background: ${props => props.background };
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	transform: translateZ(0);
	min-height: ${ props => props.minHeight }px;
`;
const Contained = styled.div`
	width: 1000px;
	max-width: 90%;
	display: flex;
	justify-content:${ props => props.vertical === "center" ? "center" : props.vertical === "bottom" ? "flex-end" : "initial" };
	align-items: ${ props => props.horizontal === "center" ? "center" : props.horizontal === "right" ? "flex-end" : "initial" };
	flex-direction: column;

	@media screen and (max-width:${bp.tablet }) {
		width: 700px;
	}
`;

export default MainContainer;