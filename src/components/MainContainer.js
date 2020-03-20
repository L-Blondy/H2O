import React from 'react';
import styled from "styled-components";
import { bp } from "../style-variables";

function MainContainer( { children, background, className } ) {
	return (
		<MC background={ background } className={ className }>
			<Contained bp={ bp }>
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
`;
const Contained = styled.div`
	width: 1000px;
	max-width: 90%;
	display: flex;
	justify-content:center;
	align-items: center;
	flex-direction: column;

	@media screen and (max-width:${bp.tablet }) {
		width: 700px;
	}
`;

export default MainContainer;