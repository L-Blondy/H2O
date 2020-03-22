import React, { useContext } from 'react';
import styled from "styled-components";
import { MainContainer, Text, Cards, SectionTitle, SectionContainer } from "../components";
import { fontFam, clr, bp } from "../style-variables";
import headerBg from "../assets/header-bg.jpg";
import { NavbarHeightCtx, WindowSizeCtx } from "../Context";

function Home() {

	const navbarHeight = useContext( NavbarHeightCtx );
	const windowSize = useContext( WindowSizeCtx );

	return (
		<>
			<Headers className={ "headers-full-height" } navbarHeight={ navbarHeight }>
				<HalfTop vertical="center" navbarHeight={ navbarHeight }>
					<H1>AI Serving Healthcare</H1>
				</HalfTop>

				<Half vertical="center" horizontal="center" background={ clr.lightGradient } navbarHeight={ navbarHeight }>
					<H2>
						Use prediction models { windowSize.width <= 400 && <br /> }
						to { ( windowSize.width <= 768 && windowSize.width >= 400 ) && <br /> }
						improve { windowSize.width <= 400 && <br /> }
						clinical workflow
					</H2>
					<TextStyled>
						Our products are built for healthcare professionals dedicated to improving disease outcomes and medication costs.
						Our intuitive software platform allows for better collection and application of real world data for all healthcare related decisions,
						for the benefit of the patient.
					</TextStyled>
				</Half>

			</Headers>

			<SectionContainer vertical="top" background={ "white" }>
				<SectionTitle align="center">
					Our <b>Solutions</b>
				</SectionTitle>
				<Cards />
			</SectionContainer>

			<SectionContainer background={ clr.lightGradient }>
				<SectionTitle align={ windowSize.width <= bp.phone.slice( 0, 3 ) && "center" }>
					What { windowSize.width >= bp.phone.slice( 0, 3 ) && "our" } <b>Customers Say</b>
				</SectionTitle>
			</SectionContainer>

		</>
	);
}

export default Home;

const Headers = styled.div`
	width: 100%;
	min-height: calc(100vh - ${ props => props.navbarHeight });
`;
const Half = styled( MainContainer )`
	min-height: calc((100vh - ${ props => props.navbarHeight }) / 2);
	padding-top: 4rem;
	padding-bottom: 3rem;
`;
const HalfTop = styled( Half )`
	position: relative;
	transform-style: preserve-3d;
	z-index: -1;

	&::before {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #004549;
		opacity: 0.5;
	}
	&::after {
		position: absolute;
		content: "";
		background-image: url(${ headerBg });
		bottom: 0;
		left: 50%;
		height: 130%;
		width: 100%;
		transform: translateX(-50%)  translateZ(-1px) scale(2.1);
		background-position: center;
		background-size: cover;
		z-index: -100;
	}
`;
const H1 = styled.h1`
	position: relative;
	z-index: 1;
	color: ${ clr.fontLight };
	font-size: 2.76rem;
	letter-spacing: 0.05em;
	font-family: ${ fontFam.prim };
	text-align: center;

	@media screen and (max-width: ${ bp.phone }){
		font-size: 2.3rem;
	}
`;
const H2 = styled.h2`
	font-family: ${ fontFam.prim };
	color: ${ clr.prim };
	font-size: 1.76rem;
	text-align: center;
	white-space: nowrap;

	@media screen and (max-width: 768px){
		font-size: 2rem;
		letter-spacing: 0.02em;
	}

	@media screen and (max-width: ${ bp.phone }){
		font-size: 1.8rem;
	}

	@media screen and (max-width: 450px){
		font-size: 1.6rem;
		letter-spacing: 0em;
	}
`;
const TextStyled = styled( Text )`
	max-width: 600px;
	padding-top: 1.5em;

	@media screen and (max-width: 768px){
		max-width: 500px;
	}

	@media screen and (max-width: ${bp.phone }){
		max-width: 400px;
	}
`;

