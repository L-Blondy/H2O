import styled from "styled-components";
import { bp } from "../style-variables";
import { MainContainer } from "./";

const SectionContainer = styled( MainContainer )`
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
`;

export default SectionContainer;