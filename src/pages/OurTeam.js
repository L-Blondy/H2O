import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import { Banner, MainContainer } from "../components";
import { WindowSizeCtx } from "../Context";
import { clr, fontFam, bp } from "../Global";
import { BtnContained, BtnOutlined, Pad, SectionTitle, Text } from "../components/styled-components";
import { useLazyImg } from "../hooks";
import * as src_desktop from "../assets/team/desktop/*.*";
import * as src_mobile from "../assets/team/mobile/*.*";

function OurTeam() {

	const windowSize = useContext(WindowSizeCtx);
	const [ SRC, setSRC ] = useState();

	useEffect(() => {
		if (windowSize.width > bp.burger.slice(0, 3))
			setSRC(src_desktop);
		else
			setSRC(src_mobile);
	}, [ windowSize ]);

	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Our Team"
					headLine="Meet the people that work with us"
					Btn={ () => {
						if (windowSize.width > bp.burger.slice(0, 3))
							return (
								<BtnContained to="/" color={ clr.primDark }>
									Join the Team
								</BtnContained>
							);
						else
							return (
								<BtnContained to="/" color={ clr.primDark }>
									Join us
								</BtnContained>
							);
					} }
				/>
			</MainContainer>

			<MainContainer background={ clr.lightGradient }>

				<FlexGrid>
					<Member
						src={ SRC && SRC.jamar_harris.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Jamar Harris"
						job="Cloud Sofware and network Engineer"
					/>
					<Member
						src={ SRC && SRC.steven_andrews.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Steven Andrews"
						job="CEO"
					/>
					<Member
						src={ SRC && SRC.sun_rodriguez.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Sun Rodriguez"
						job="Human Ressources Manager"
					/>
					<Member
						src={ SRC && SRC.al_capers.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Al Capers"
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.lee_kimzey.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Lee Kimzey"
						job="Machine Learning Engineer"
					/>
					<Member
						src={ SRC && SRC.lester_westervelt.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Lester Westervelt"
						job="Security Specialist"
					/>
					<Member
						src={ SRC && SRC.judi_swoboda.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Judi Swoboda"
						job="Software Engineer"
					/>
					<Member
						src={ SRC && SRC.billy_sprinkle.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Billy G. Sprinkle"
						job="Machine Learning Engineer"
					/>
					<Member
						src={ SRC && SRC.mae_yuan_kao.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Mae Yuan Kao"
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.thomas_elston.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Thomas Elston"
						job="Software Engineer"
					/>
					<Member
						src={ SRC && SRC.chad_mathis.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Chad C. Mathis"
						job="Software Design Engineer"
					/>
					<Member
						src={ SRC && SRC.walter_borges.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Walter Borges"
						job="Digital Marketing Manager"
					/>
					<Member
						src={ SRC && SRC.michael_coats.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Michael Coats"
						job="Full Stack Developper"
					/>
					<Member
						src={ SRC && SRC.bill_cobb.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Bill Cobb"
						job="Director of marketing"
					/>
					<Member
						src={ SRC && SRC.amy_correia.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Amy C. Correia"
						job="Full Stack Developper"
					/>
					<Member
						src={ SRC && SRC.joshua_thomas.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Joshua Thomas"
						job="Machine Learning Engineer"
					/>
				</FlexGrid>
			</MainContainer>

			<ImgContainer>
				<img src={ require("../assets/team/team-bg.jpg") } alt="team-bg" />
			</ImgContainer>

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

			</MainContainer>

		</>
	);
}

function Member({ src, placeholder, name, job }) {

	const img = useLazyImg(src, placeholder);

	return (
		<MemberStyled>

			<div className="img-wrapper">
				<img ref={ img } />
			</div>

			<div className="name">
				{ name }
			</div>

			<div className="job">
				<i>{ job }</i>
			</div>

		</MemberStyled>
	);
}

export default OurTeam;

const FlexGrid = styled.div`
	width: 100%;
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

const MemberStyled = styled.div`
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

const ImgContainer = styled.div`
	height: 450px;
	position: relative;
	transform-style: preserve-3d;
	z-index: -1;

	img {
		position: absolute;
		z-index: -1;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);

		@media screen and (min-width:1200px) and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
			transform: translateX(-50%) translateY(-50%)  translateZ(-1px) scale(2);
		}
		@-moz-document url-prefix() { 
			transform: translateX(-50%) translateY(-50%)  translateZ(-1px) scale(2);
		}
	}
`;