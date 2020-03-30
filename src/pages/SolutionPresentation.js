import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Banner, Cards, Cases, MainContainer } from '../components';
import { Pad, SectionTitle, Text } from '../components/styled-components';
import { clr, bp, fontFam } from '../Global';
import { solutions } from "../data";

function SolutionPresentation() {

	const { sol } = useParams();
	const [ data, setData ] = useState();
	useEffect(() => {
		setData(solutions[ sol ]);
	}, [ sol ]);

	return data ? (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title={ data.banner_title }
					headLine={ data.banner_headline }
				/>
			</MainContainer>

			<MainContainer background={ clr.lightGradient }>
				<Pad height="0.5" />

				<Step
					name='Challenge'
					content={ data.challenge }
				/>
				<Step
					name='Solution'
					content={ data.solution }
				/>
				<Step
					name='Why H2O.ai'
					content={ data.why_h2o }
				/>

				<Pad height="6" heightBurger="4.5" heightPhone="3" />
			</MainContainer>

			<MainContainer background={ clr.lightGradient }>
				<SectionTitle>
					Related <b>Case Studies</b>
				</SectionTitle>

				<Cases />

				<Pad height="6" heightBurger="4.5" heightPhone="3" />
			</MainContainer>

			<MainContainer background={ clr.lightGradient }>
				<SectionTitle>
					More <b>Use Cases</b>
				</SectionTitle>

				<Cards />

				<Pad height="10" heightBurger="8" heightPhone="6" />

			</MainContainer>
		</>
	) : null;
}

function Step({ name, content }) {
	return (
		<Step$>
			<h2>
				{ name }
			</h2>
			<Text>
				{ content }
			</Text>
		</Step$>
	);
}

export default SolutionPresentation;

const Step$ = styled.div`
	display: flex;
	margin-top: 4rem;

	h2 {
		font-family: ${ fontFam.prim };
		font-size: 1.9rem;
		color: ${ clr.bigSize };
		flex-basis: 30%;
		flex-shrink: 0;
		transform: translateY(-0.25em);
	}

	@media screen and (max-width: ${ bp.burger }){
		flex-direction: column;
		margin-top: 2.5rem;

		/* h2 {
			font-size: 1.5rem;
		} */
	}
	@media screen and (max-width: ${ bp.phone }){

		h2 {
			font-size: 1.5rem;
		}
	}
`;