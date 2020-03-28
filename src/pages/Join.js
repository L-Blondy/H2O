import React from 'react';
import { Banner, Form, MainContainer, MinHeightWrapper } from "../components";
import { clr } from "../Global";
import src_arrowRight from '../assets/icons/arrow-right.svg';


function Join() {

	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Join us"
					headLine="The right place to apply !"
				/>
			</MainContainer>

			<MainContainer background={ clr.lightGradient }>
				<MinHeightWrapper>
					<Form
						Title="Fill out this form to candidate for a job"
						Email
						FirstName
						LastName
						Position
						Phone
						Country
						Curriculum
						Message
						Submit={ {
							text: 'Send your candidature',
							iconSRC: src_arrowRight
						} }
					/>
				</MinHeightWrapper>
			</MainContainer>
		</>
	);
}

export default Join;
