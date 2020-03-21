import React from 'react';
import { Banner, MainContainer } from "../components";
import { clr } from "../style-variables";

function Contact() {
	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Contact us"
					headLine="Share your case with us !"
				/>
			</MainContainer>
		</>
	);
}

export default Contact;
