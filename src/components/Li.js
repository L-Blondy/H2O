import styled from "styled-components";
import { clr, bp } from "../style-variables";

const Li = styled.li`
	display: flex;
	position: relative;

	&::after,&::before {
		content:"";
		width: 100%;
		height: 3px;
		position: absolute;
		left: 0;
		background: ${ clr.prim };
		transform: scaleX(0);
		opacity: 0.7;
		transform-origin: bottom;
		transition: transform 150ms 30ms;
	}
	&::after {
		bottom:0;
	}
	&::before {
		top:0;
	}

	&:hover::after,
	&:focus::after,
	&:hover::before,
	&:focus::before{
		transform: scaleX(1);
	}
	@media screen and (max-width: ${ bp.burger }){
		display: ${ props => props.hideMobile ? "none" : "flex" };
	}
`;

export default Li;