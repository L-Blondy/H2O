import styled from "styled-components";
import { fontFam, clr } from "../style-variables";

const Text = styled.p`
	font-family: ${ fontFam.sec };
	color: ${ clr.sec };
	font-size: 1rem;
	line-height: 1.5em;
`;

export default Text;
