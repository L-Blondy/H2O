import React from 'react';
import { Banner, MainContainer, LearnMore } from "../components";
import { clr } from "../Global";

function Contact() {
	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Contact us"
					headLine="Share your case with us !"
				/>
			</MainContainer>

			<MainContainer className="section-container" background={ clr.lightGradient }>

				<LearnMore />

			</MainContainer>
		</>
	);
}

export default Contact;
