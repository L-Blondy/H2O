import React, { useContext } from 'react';
import styled from "styled-components";
import { MainContainer, Text, Cards } from "../components";
import { fontFam, clr } from "../style-variables";
import headerBg from "../assets/header-bg.jpg";
import { NavbarHeightCtx } from "../Context";

function Home() {

	const navbarHeight = useContext( NavbarHeightCtx );

	return (
		<>
			<Headers className={ "headers-full-height" } navbarHeight={ navbarHeight }>
				<HalfTop vertical="center">
					<H1>AI Serving Healthcare</H1>
				</HalfTop>

				<Half vertical="center" horizontal="center" background={ clr.lightGradient }>
					<H2>Use prediction models to improve clinical workflow</H2>
					<TextStyled>
						Our products are built for healthcare professionals deicated to improving disease outcomes and medication costs.
						Our intuitive software platform allows for better collection and application of real world data for all healthcare related decisions,
						for the benefit of the patient.
						</TextStyled>
				</Half>

			</Headers>
			<MainContainer vertical="top" background={ clr.lightGradient }>
				<Cards />
			</MainContainer>

		</>
	);
}

export default Home;

const Headers = styled.div`
	width: 100%;
	height: calc(100vh - ${ props => props.navbarHeight });
`;
const Half = styled( MainContainer )`
	height: 50%;
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
`;
const H2 = styled.h2`
	font-family: ${ fontFam.prim };
	color: ${ clr.prim };
	font-size: 1.76rem;
	text-align: center;
`;
const TextStyled = styled( Text )`
	width: 600px;
	padding-top: 1em;
`;
