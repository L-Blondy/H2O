import React from 'react';
import styled from 'styled-components';
import { Banner, Form, MainContainer, MinHeightWrapper } from '../components';
import { ContactData, Text } from '../components/styled-components';
import { clr, bp } from '../Global';
import src_arrowRight from '../assets/icons/arrow-right.svg';


function Join() {

	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title='Join us'
					headLine='The right place to apply !'
				/>
			</MainContainer>

			<MainContainer background={ clr.lightGradient }>
				<MinHeightWrapper>

					<ContactData>
						<Text as='div' className='text'>
							At H2O.ai we are always looking for passionate and dedicated people. Let us know why you would like to work with us.
						</Text>

						<Form$
							Title={ `Fill out this form to\ncandidate for a job` }
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

						<Text as='div' className='text'>
							<h4>HR departement</h4>
							<p>hr@h2o.ai</p>
							<p>+1 (650) 227-4912</p>
						</Text>
					</ContactData>

				</MinHeightWrapper>
			</MainContainer>
		</>
	);
}

export default Join;

const Form$ = styled(Form)`
	position: absolute;
	top: -120px;
	left: 50%;
	width: 50%;

	@media screen and (max-width: ${ bp.burger }){
		position: initial;
		width: 100%;
	}

	@media screen and (max-width: ${ bp.phone }){
		position: initial;
		width: calc(100% + 2rem);
		transform: translateX(-1rem)
	}
`;