import React from 'react';
import styled from "styled-components";
import { clr, bp } from "../Global";

function Burger(props) {

	return (
		<BurgerStyled { ...props }>
			<div className="wrapper">
				<div className="l1"></div>
				<div className="l2"></div>
				<div className="l3"></div>
			</div>
		</BurgerStyled>
	);
}
export default Burger;

const duration = "1000ms";
const curve = "";

const BurgerStyled = styled.div`
	position: fixed;
	bottom: calc(1.2rem + 4vmin);
	right: calc(0.6rem + 4vmin);
	height: calc(4vw + 45px);
	width: calc(4vw + 45px);
	border-radius: 50%;
	background: ${ clr.prim };
	z-index: 1001;
	display: none;
	animation-duration: 2000ms;
	animation-fill-mode: forwards;
	animation-timing-function: ${ curve };

	@media screen and (max-width: ${ bp.burger }){
		display: initial;
	}

	&.open > .wrapper,
	&.close > .wrapper {
		position: relative;
		height:100%;
		width: 100%;
		animation-duration: ${ duration };
		animation-fill-mode: forwards;
		animation-timing-function: ${ curve }
	}
	.l1,.l2,.l3 {
		position: absolute;
		top: 50%;
		left: 50%;
		height: 3px;
		width: 55%;
		background: white;
		transition: transform ${ duration };
		animation-duration: ${ duration };
		animation-fill-mode: forwards;
		animation-timing-function: ${ curve }
	}
	&.open > .wrapper {
		animation-name: rotation-open;

		.l1 {
			animation-name: l1-open;
		}
		.l2 {
			animation-name: l2-open;
		}
		.l3 {
			animation-name: l3-open;
		}
	}
	&.close > .wrapper {
		animation-name: rotation-close;

		.l1 {
			animation-name: l1-close;
		}
		.l2 {
			animation-name: l2-close;
		}
		.l3 {
			animation-name: l3-close;
		}
	}
	&.roll {
		animation-name: roll;
	}


	@keyframes rotation-open {
		25% {
			transform: rotate(-195deg)
		}
		40% {
			transform: rotate(-190deg)
		}
		60% {
			transform: rotate(-35deg)
		}
		100% {
			transform: rotate(-90deg)
		}
	}
	@keyframes rotation-close {
		0% {
			transform: rotate(-90deg)
		}
		20% {
			transform: rotate(-190deg)
		}
		30% {
			transform: rotate(-180deg)
		}
		50% {
			transform: rotate(-180deg)
		}
		100% {
			transform: rotate(-180deg)
		}
	}
	@keyframes l1-open {
		0% {
			transform: translate(-50%,calc(-50% - 12px));
		}
		25% {
			transform: translate(-50%, -50%);
		}
		35% {
			transform: translate(-50%, -50%);
		}
		100% {
			transform: translate(-50%, -50%) rotate(45deg);
		}
	}
	@keyframes l2-open {
		0% {
			transform: translate(-50%,-50%);
		}
		25% {
			transform: translate(-50%, -50%);
		}
		35% {
			transform: translate(-50%, -50%);
		}
		100% {
			transform: translate(-50%, -50%) rotate(45deg);
		}
	}
	@keyframes l3-open {
		0% {
			transform: translate(-50%,calc(-50% + 12px));
		}
		25% {
			transform: translate(-50%, -50%);
		}
		35% {
			transform: translate(-50%, -50%);
		}
		100% {
			transform: translate(-50%, -50%) rotate(135deg);
		}
	}
	@keyframes l1-close {
		0% {
			transform: translate(-50%, -50%) rotate(45deg);
		}
		30% {
			transform: translate(-50%, -50%);
		}
		60% {
			transform: translate(-50%,calc(-50% - 13px));
		}
		100% {
			transform: translate(-50%,calc(-50% - 12px));
		}
	}
	@keyframes l2-close {
		0% {
			transform: translate(-50%, -50%) rotate(45deg);
		}
		30% {
			transform: translate(-50%, -50%);
		}
		100% {
			transform: translate(-50%,-50%);
		}
	}
	@keyframes l3-close {
		0% {
			transform: translate(-50%, -50%) rotate(135deg);
		}
		30% {
			transform: translate(-50%, -50%);
		}
		60% {
			transform: translate(-50%,calc(-50% + 13px));
		}
		100% {
			transform: translate(-50%,calc(-50% + 12px));
		}
	}
	@keyframes roll {
		0% {
			transform: translateX(0);
		}
		20% {
			transform: translateX(150%) rotate(135deg);
		}
		70% {
			transform: translateX(150%) rotate(135deg);
		}
		0% {
			transform: translateX(0);
		}
	}
`;
