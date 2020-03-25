import React from "react";
import styled from "styled-components";
import { fontFam, clr, bp } from "../styles";

export default function Banner({ title, headLine, Btn }) {
	return (
		<BannerContainer>
			<div>
				<h1>{ title }</h1>
				<h3>{ headLine }</h3>
			</div>
			{ Btn && <Btn /> }
		</BannerContainer>
	);
}

const BannerContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 3em;
	padding-bottom: 3em;

	@media screen and (max-width: ${bp.phone }){
		padding-top: 1.1em;
		padding-bottom: 1.1em;;
	}

	/* h1 */
	h1 {
		color: ${ clr.fontLight };
		font-family: ${fontFam.prim };
		font-weight: bold;
		font-size: 2.35rem;
		letter-spacing: 0.07em;

		@media screen and (max-width: ${bp.phone }){
			font-size: 1.65rem;
		}
	}

	/* h3 */
	h3 {
		color: ${ clr.fontLight };
		font-family: ${fontFam.sec };
		font-weight: 400;
		font-size: 1.17rem;
		letter-spacing: 0.02em;
		padding-top:0.3em;
		padding-bottom:0.7em;

		@media screen and (max-width: ${ bp.burger }) {
			letter-spacing: 0;
		}

		@media screen and (max-width: ${bp.phone }){
			display: none;
		}
	}
`;


