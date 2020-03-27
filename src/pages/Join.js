import React from 'react';
import styled from "styled-components";
import { Banner, Form, MainContainer, MinHeightWrapper } from "../components";
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

			<MainContainer background={ clr.lightGradient }>
				<MinHeightWrapper>
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
				</MinHeightWrapper>
			</MainContainer>
		</>
	);
}

export default Join;
