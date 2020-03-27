import React from 'react';
import { Banner, Form, MainContainer } from "../components";
import { clr } from "../Global";

function Join() {
	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Join us"
					headLine="The right place to apply !"
				/>
			</MainContainer>
			<MainContainer>
				<Form
					Email
					FirstName
					LastName
					Job
					CompName
					CompIndustry
					Phone
					Country
					Message
					Submit="Submit button text"
				/>
			</MainContainer>
		</>
	);
}

export default Join;