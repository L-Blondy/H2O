import React from 'react';
import styled from "styled-components";
import { MainContainer, Banner, Cards, MinHeightWrapper } from "#/components";
import { clr, bp } from "#/Global";

function Solutions() {

	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Solutions"
					headLine="Check out what our services might help you with"
				/>
			</MainContainer>

			<MainContainer background={ "clr.lightGradient" }>
				<MinHeightWrapper>
					<Cards$ />
				</MinHeightWrapper>
			</MainContainer>
		</>
	);
}

export default Solutions;

/*****************
 * STYLING
 */

const Cards$ = styled(Cards)`
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