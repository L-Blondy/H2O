import React from 'react';
import { Banner, Form, MainContainer, MinHeightWrapper } from "../components";
import { clr } from "../Global";
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
					<Form
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
				</MinHeightWrapper>

			</MainContainer>
		</>
	);
}

export default Contact;
