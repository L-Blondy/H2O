import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import { Banner, MainContainer } from "../components";
import { WindowSizeCtx } from "../Context";
import { clr, fontFam } from "../Global";
import { BtnContained } from "../components/styled-components";
import { useLazyImg } from "../hooks";
import * as src_desktop from "../assets/team/desktop/*.*";

function OurTeam() {

	const windowSize = useContext(WindowSizeCtx);
	const [ SRC, setSRC ] = useState();

	useEffect(() => {
		if (windowSize.width > 0)
			setSRC(src_desktop);
		else
			setSRC({});
	}, [ windowSize ]);

	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Our Team"
					headLine="Meet the people that work with us"
					Btn={ () => (
						<BtnContained
							to="/"
							color={ clr.primDark }>
							Join the Team
						</BtnContained>
					) }
				/>
			</MainContainer>

			<MainContainer
				className="stand-alone"
				background={ clr.lightGradient }>

				<FlexGrid>
					<Member
						src={ SRC && SRC.jamar_harris.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Jamar Harris"
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.steven_andrews.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Steven Andrews"
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.sun_rodriguez.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Sun Rodriguez"
						job="Front-End Developper"
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
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.lester_westervelt.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Lester B. Westervelt"
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.judi_swoboda.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Judi Swoboda"
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.billy_sprinkle.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Billy G. Sprinkle"
						job="Front-End Developper"
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
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.chad_mathis.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Chad C. Mathis"
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.walter_borges.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Walter Borges"
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.michael_coats.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Michael Coats"
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.bill_cobb.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Bill Cobb"
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.amy_correia.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Amy C. Correia"
						job="Front-End Developper"
					/>
					<Member
						src={ SRC && SRC.joshua_thomas.jpg }
						placeholder={ SRC && SRC.placeholder.jpg }
						name="Joshua Thomas"
						job="Front-End Developper"
					/>
				</FlexGrid>
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
`;

const MemberStyled = styled.div`
	text-align: center;
	font-family: ${ fontFam.sec };
	color: ${ clr.sec };
	margin-bottom: 4rem;

	/* img-wrapper  */
	.img-wrapper {
		font-size: 0;
	}

	/* name */
	.name {
		font-weight: bold;
		padding-top: 0.7rem;
		padding-bottom: 0.2rem;
	}

	/* job */
	.job{
		font-size: 0.9rem;
	}
`;