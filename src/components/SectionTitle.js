import styled from "styled-components";
import { fontFam, clr, bp } from "../style-variables";

const SectionTitle = styled.h2`
	font-family: ${ fontFam.prim };
	color: ${ clr.sectionTitle };
	font-weight: bold;
	width: 100%;
	text-align: ${props => props.align || "left" };

	b {
		color: ${ clr.prim };
	}

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

export default SectionTitle;
