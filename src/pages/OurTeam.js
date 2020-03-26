import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import { Banner, MainContainer } from "../components";
import { WindowSizeCtx } from "../Context";
import { clr, fontFam, bp } from "../Global";
import { BtnContained, BtnOutlined, Pad, SectionTitle, Text } from "../components/styled-components";
import { useLazyImg } from "../hooks";
import { members } from "../data";
import * as src_desktop from "../assets/team/desktop/*.*";
import * as src_mobile from "../assets/team/mobile/*.*";
import * as src_bg from "../assets/team/bg/*.*";

function OurTeam() {

	const windowSize = useContext(WindowSizeCtx);
	const [ SRC, setSRC ] = useState();
	const [ bgSRC, setBgSRC ] = useState();
	const bg = useLazyImg(bgSRC);

	useEffect(() => {
		const { width } = windowSize;
		if (windowSize.width > bp.burger.slice(0, 3))
			setSRC(src_desktop);
		else
			setSRC(src_mobile);

		const size = (
			width <= 400 ? "-400" :
				width <= 600 ? "-600" :
					width <= 800 ? "-800" :
						width <= 1100 ? "-1100" :
							width <= 1400 ? "-1400" : ""
		);
		setBgSRC(src_bg[ "team-bg" + size ].jpg);

	}, [ windowSize ]);

	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Our Team"
					headLine="Meet the people that work with us"
					Btn={ () => (
						<BtnContained$ to="/" color={ clr.primDark }>
							{ windowSize.width > bp.burger.slice(0, 3) ? "Join the Team" : "Join us" }
						</BtnContained$>
					) }
				/>
			</MainContainer>

			<MainContainer background={ clr.lightGradient }>
				<FlexGrid>
					{ members.map(member => (
						<Member
							src={ SRC && SRC[ member.src ].jpg }
							placeholder={ SRC && SRC.placeholder.jpg }
							name={ member.name }
							job={ member.job }
							key={ member.name }
						/>
					)) }
				</FlexGrid>
			</MainContainer>

			<BgContainer>
				<img ref={ bg } alt="team-bg" />
			</BgContainer>

			<MainContainer
				horizontal="left"
				className="section-container"
				background={ clr.lightGradient }>

				<SectionTitle>
					Want to <b>Join us ?</b>
				</SectionTitle>

				<Text>
					H2O.ai is nurturing a grassroots movement of developers and data scientists to herald a new wave of discovery powered by machine learning.
					Come join us to change the world in a meaningful way ! If you have a startup mentality and a desire to help some of the world’s largest
					organizations leverage the world’s most powerful algorithms we want to hear from you.
				</Text>

				<Pad height={ 1 } />

				<Text>
					A competitive salary, terrific health benefits, a great location,
					complimentary meals and snacks and unlimited PTO are only a few of the perks we offer.
					Join us!
				</Text>

				<Pad height={ 3 } />

				<BtnOutlined to="/" color={ clr.prim }>
					Candidate now
				</BtnOutlined>

				<Pad height={ 1 } />

			</MainContainer>

		</>
	);
}

function Member({ src, placeholder, name, job }) {

	const img = useLazyImg(src, placeholder);

	return (
		<Member$>

			<div className="img-wrapper">
				<img ref={ img } />
			</div>

			<div className="name">
				{ name }
			</div>

			<div className="job">
				<i>{ job }</i>
			</div>

		</Member$>
	);
}

export default OurTeam;

const FlexGrid = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 8rem;
	padding-bottom: 4rem;

	@media screen and (max-width: ${bp.burger }){
		padding-top: 6rem;
		padding-bottom: 2rem;
	}
	@media screen and (max-width: ${bp.phone }){
		padding-top: 4rem;
		padding-bottom: 0rem;
		justify-content:space-evenly;
	}
	@media screen and (max-width: 500px){
		justify-content: space-between;
	}
`;

const Member$ = styled.div`
	text-align: center;
	font-family: ${ fontFam.sec };
	color: ${ clr.sec };
	margin-bottom: 4rem;
	max-width: 22%;

	@media screen and (max-width: ${ bp.tablet }) {
		max-width: 195px;
	}	
	@media screen and (max-width: ${ bp.burger }) {
		max-width: 31%;
	}	
	@media screen and (max-width: ${ bp.phone }) {
		max-width: 46%;
		margin-bottom: 2rem;
	}	

	/* img-wrapper  */
	.img-wrapper {
		font-size: 0;
	}

	img {
		max-width: 100%;
		min-height: 195px;
		min-width: 195px;

		@media screen and (max-width: ${ bp.burger }) {
			min-height: 120px;
			min-width: 120px;
		}	
		@media screen and (max-width: ${ bp.phone }) {
			min-height: 100px;
			min-width: 100px;
		}	
	}

	/* name */
	.name {
		font-weight: bold;
		padding-top: 0.6rem;
		padding-bottom: 0.3rem;
		font-size: 1.07rem;

		@media screen and (max-width: ${ bp.burger }) {
			font-size: 1rem;
		}
	}

	/* job */
	.job{
		font-size: 0.95rem;
		line-height: 1.3em;

		@media screen and (max-width: ${ bp.burger }) {
			font-size: 0.9rem;
		}
	}
`;

const BgContainer = styled.div`
	height: 450px;
	position: relative;
	transform-style: preserve-3d;
	z-index: -1;

	@media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
		transform: translateZ(0);
	}
	@-moz-document url-prefix() { 
		transform: none;
	} 

	img {
		position: absolute;
		min-height: 160%;
		z-index: -1;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);

		@media screen and (min-width:1200px) and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
			transform: translateX(-50%) translateY(-50%) translateZ(-1px) scale(2);
		}
		@-moz-document url-prefix() { 
			transform: translateX(-50%) translateY(-50%) translateZ(-1px) scale(2);
		} 
	}

	@media screen and (max-width: ${ bp.tablet }) {
		height: 300px;
		img {
			height: auto;
			width: 100%;
			min-height: 100%;
			object-fit: cover;
		}
	}
`;

const BtnContained$ = styled(BtnContained)`
	@media screen and (max-width: ${ bp.phone }){
		font-size: 1.05rem;
	}
`;