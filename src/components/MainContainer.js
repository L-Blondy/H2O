import React from 'react';
import styled from "styled-components";
import { bp } from "../style-variables";

function MainContainer( { children, background } ) {
	return (
		<MC background={ background }>
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
`;
const Contained = styled.div`
	width: 1000px;
	max-width: 90%;

	@media screen and (max-width:${bp.tablet }) {
		width: 700px;
	}
`;

export default MainContainer;