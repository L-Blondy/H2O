import React from 'react';
import { BtnContained, BtnOutlined, SectionTitle } from "./styled-components";

function LearnMore() {
	return (
		<>
			<SectionTitle>
				Want to <b>Learn More ?</b>
			</SectionTitle>
			<BtnContained to="/" color="#005A5A">Join the Team</BtnContained>
			<div>.</div>
			<BtnOutlined to="/" color="#005A5A">Contact us</BtnOutlined>
		</>
	);
}

export default LearnMore;;