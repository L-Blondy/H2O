import React from 'react';
import { MainContainer, Banner, Cards } from "../components";
import styled from "styled-components";
import { clr, bp } from "../style-variables";
import { useMinHeight } from "../hooks";

function Solutions() {

	const minHeight = useMinHeight( ".cards-container" );

	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Solutions"
					headLine="Check out what our services might help you with"
				/>
			</MainContainer>

			<MainContainer minHeight={ minHeight } background={ "clr.lightGradient" }>
				<CardsStyled />
			</MainContainer>
		</>
	);
}

export default Solutions;

const CardsStyled = styled( Cards )`
	padding-top: 4rem;
	padding-bottom: 4rem;

	@media screen and (max-width: ${bp.burger }) {
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
	@media screen and (max-width: ${bp.phone }) {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
`;