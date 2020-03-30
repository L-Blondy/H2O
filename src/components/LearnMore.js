import React from 'react';
import styled from "styled-components";
import { BtnContained, BtnOutlined, SectionTitle, Text } from "./styled-components";
import { clr, bp } from "../Global";

function LearnMore() {
	return (
		<>
			<SectionTitle align="center">
				Want to <b>Learn More ?</b>
			</SectionTitle>

			<HeadLine>Looking to learn more about how to make your company an AI company ?</HeadLine>

			<CTA>Share your case with us !</CTA>

			<BtnWrapper>
				<BtnContained to="/contact" color={ clr.prim }>
					Contact us
				</BtnContained>

				<BtnOutlined to="/solutions" color={ clr.prim }>
					Learn More
				</BtnOutlined>
			</BtnWrapper>
		</>
	);
}

export default LearnMore;

/*****************
 * STYLING
 */

const HeadLine = styled(Text)`
	text-align: center;
	font-size: 1.3rem;

	@media screen and (max-width: ${ bp.phone } ){
		font-size: 1.17rem;
	}
`;

const CTA = styled(Text)`
	text-align: center;
	font-size: 1.6rem;
	font-weight: bold;
	letter-spacing: 0.02em;
	color: ${ clr.bigSize };

	padding: 3.5rem 0;

	@media screen and (max-width: ${ bp.burger } ){
		padding: 3rem 0;
	}
	@media screen and (max-width: ${ bp.phone } ){
		padding: 2rem 0;
		font-size: 1.25rem;
	}
`;
const BtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1.04rem;
	width: 21em;
	margin: auto;
	padding-bottom: 2em;

	& > a {
		margin: 0 0.5em;
		flex-grow: 1;
	}

	@media screen and (max-width: ${ bp.burger } ){
		font-size: 1rem;
	}
	@media screen and (max-width: ${ bp.phone } ){
		font-size: 1rem;
		flex-direction: column;
		width: 11.5em;

		& > a {
			margin: 0.3em 0.5em;
		}
	}
`;
