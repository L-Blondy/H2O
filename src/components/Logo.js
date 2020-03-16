import React from 'react';
import src_LogoLight from "../assets/logo-light.svg";
import src_LogoDark from "../assets/logo-dark.svg";
import styled from "styled-components";

function Logo( { className } ) {
	return (
		<div className={ className }>
			<Img { ...className } src={ className.indexOf( "logo-light" ) != -1 ? src_LogoLight : src_LogoDark } alt="logo" />
		</div>
	);
}

const Img = styled.img`
	width: 100%;
	object-fit: cover;
`;

export default Logo;