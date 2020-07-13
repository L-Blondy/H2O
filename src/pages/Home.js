import React, { useContext, useState, useEffect } from 'react';
import styled from "styled-components";
import { MainContainer, Cards, Cases, LearnMore } from "../components";
import { Text, SectionTitle } from "#/components/styled-components";
import { fontFam, clr, bp } from "#/Global";
import { NavbarHeightCtx, WindowSizeCtx } from "#/Context";

function Home() {

	const navbarHeight = useContext(NavbarHeightCtx);
	const windowSize = useContext(WindowSizeCtx);
	const [ halfTop_bg, setHalfTop_bg ] = useState();

	useEffect(() => {
		const width = windowSize.width;
		width < 400 ? setHalfTop_bg(require("#/assets/home-header-bg/home-header-bg_x400w.jpg")) :
			width < 500 ? setHalfTop_bg(require("#/assets/home-header-bg/home-header-bg_x500w.jpg")) :
				width < 800 ? setHalfTop_bg(require("#/assets/home-header-bg/home-header-bg_x800w.jpg")) :
					width < 1100 ? setHalfTop_bg(require("#/assets/home-header-bg/home-header-bg_x1100w.jpg")) :
						width < 1600 ? setHalfTop_bg(require("#/assets/home-header-bg/home-header-bg_x1600w.jpg")) :
							setHalfTop_bg(require("#/assets/home-header-bg/home-header-bg.jpg"));

	}, [ windowSize ]);

	return (
		<>
			<Headers
				className={ "headers-full-height" }
				navbarHeight={ navbarHeight }
				halfTop_bg={ halfTop_bg }>

				<MainContainer
					className="half half--top"
					vertical="center" >

					<h1>
						AI Serving Healthcare
					</h1>
				</MainContainer>

				<MainContainer
					className="half"
					vertical="center"
					horizontal="center"
					background={ clr.lightGradient }>

					<h2>
						Use prediction models { windowSize.width <= 400 && <br /> }
						to { (windowSize.width <= 768 && windowSize.width >= 400) && <br /> }
						improve { windowSize.width <= 400 && <br /> }
						clinical workflow
					</h2>

					<Text className="text">
						Our products are built for healthcare professionals dedicated to improving disease outcomes and medication costs.
						Our intuitive software platform allows for better collection and application of real world data for all healthcare related decisions,
						for the benefit of the patient.
					</Text>

				</MainContainer>

			</Headers>

			<MainContainer
				className="section-container"
				vertical="top"
				background={ "white" }>

				<SectionTitle align="center">
					Our <b>Solutions</b>
				</SectionTitle>

				<Cards />

			</MainContainer>

			<MainContainer
				className="section-container"
				background={ clr.lightGradient }>

				<SectionTitle align={ windowSize.width <= bp.phone.slice(0, 3) && "center" }>
					What { windowSize.width >= bp.phone.slice(0, 3) && "our" } <b>Customers Say</b>
				</SectionTitle>

				<Cases />

			</MainContainer>

			<MainContainer className="section-container">
				<LearnMore />
			</MainContainer>
		</>
	);
}

export default Home;

/*****************
 * STYLING
 */

const Headers = styled.div`
	width: 100%;
	min-height: calc(100vh - ${ props => props.navbarHeight });
	transform-style: preserve-3d;

	/* half */
	.half {
		min-height: calc((100vh - ${ props => props.navbarHeight }) / 2);
		padding-top: 4rem;
		padding-bottom: 3rem;
	}
	
	/* half--top */
	.half--top {
		position: relative;
		transform-style: preserve-3d;
		height: calc((100vh - ${ props => props.navbarHeight }) / 2);
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
			background-image: url(${ props => props.halfTop_bg });
			top: 50%;
			left: 50%;
			height: 120%;
			width: 100%;
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			z-index: -100;
			transform: translateX(-50%) translateY(-50%);

			@media screen and (min-width:1200px) and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
				transform: translateX(-50%) translateY(-90%)  translateZ(-1px) scale(2.05);
			}
			@-moz-document url-prefix() { 
				transform: translateX(-50%) translateY(-90%)  translateZ(-1px) scale(2.05);
			}
		}
	}

	/* h1 */
	h1 {
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
	}

	/* h2 */
	h2 {
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
	}

	/* text */
	.text {
		max-width: 600px;
		padding-top: 1.5em;

		@media screen and (max-width: 768px){
			max-width: 500px;
		}

		@media screen and (max-width: ${bp.phone }){
			max-width: 400px;
		}
	}
`;


