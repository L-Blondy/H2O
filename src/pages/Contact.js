import React from 'react';
import styled from 'styled-components';
import { Banner, Form, MainContainer, MinHeightWrapper } from "../components";
import { ContactData, Text } from '../components/styled-components';
import { clr, bp } from "../Global";
import src_lock from "../assets/icons/lock.svg";

function Contact() {
	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Contact us"
					headLine="Share your case with us !"
				/>
			</MainContainer>

			<MainContainer background={ clr.lightGradient }>
				<MinHeightWrapper>

					<ContactData>
						<Text as='div' className='text'>
							At H2O.ai we are a very human company and we’d love to hear from you. Let us know how we can be of help.
						</Text>

						<Form$
							Title="Fill out this form to contact us"
							Email
							FirstName
							LastName
							Job
							CompName
							CompIndustry
							Phone
							Country
							Message
							Submit={ {
								text: 'Send This Secure Message',
								iconSRC: src_lock
							} }
						/>

						<Text as='div' className='text'>
							<h4>Our sales team</h4>
							<p>sales@h2o.ai</p>
							<p>+1 (650) 227-4572</p>
						</Text>
						<Text as='div' className='text'>
							<h4>Media Relations</h4>
							<p>press@h2o.ai</p>
							<p>+1 (650) 227-4736</p>
						</Text>
					</ContactData>

				</MinHeightWrapper>
			</MainContainer>
		</>
	);
}

export default Contact;

const Form$ = styled(Form)`
	position: absolute;
	top: -120px;
	left: 50%;
	width: 50%;

	@media screen and (max-width: ${ bp.burger }){
		position: initial;
		width: 100%;
	}
`;
