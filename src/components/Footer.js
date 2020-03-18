import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { clr, fontFam, bp } from "../style-variables";
import { Logo, MainContainer } from "./";
import * as iconsSRC from "../assets/icons/*.*";

function Footer() {
	return (
		<FooterStyled>
			<Container>

				<LogoStyled className="logo-dark" />

				<Nav>
					<NavLinks>
						<Li>
							<LinkStyled to="/">Home</LinkStyled>
						</Li>
						<Li>
							<LinkStyled to="/solutions">Solutions</LinkStyled>
						</Li>
						<Li>
							<LinkStyled to="/case-studies">Case Studies</LinkStyled>
						</Li>
						<Li>
							<LinkStyled to="/our-team">Our Team</LinkStyled>
						</Li>
						<Li>
							<LinkStyled to="/join">Join us</LinkStyled>
						</Li>
						<Li>
							<LinkStyled to="/contact">Contact</LinkStyled>
						</Li>
					</NavLinks>
				</Nav>

				<ExternalLinks>
					<Li>
						<a href="https://www.google.com" target="_blank" rel="noreferrer noopener">
							<Icon src={ iconsSRC.github.svg } />
						</a>
					</Li>
					<Li>
						<a href="https://www.google.com" target="_blank" rel="noreferrer noopener">
							<Icon src={ iconsSRC.linkedin.svg } />
						</a>
					</Li>
					<Li>
						<a href="https://www.google.com" target="_blank" rel="noreferrer noopener">
							<Icon src={ iconsSRC.twitter.svg } />
						</a>
					</Li>
				</ExternalLinks>

			</Container>

			<Copyright>
				Copyright © Laurent Blondy 2020.
				All rights reserved.
				</Copyright>
		</FooterStyled>
	);
}

export default Footer;

const FooterStyled = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: ${ clr.sec };
	padding: 10rem 300px;
`;
const Container = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const LogoStyled = styled( Logo )`
	width: 130px;
	flex-shrink: 0;
`;
const Ul = styled.ul`
	display: flex;
	height: 100%;
	flex-shrink: 0;
`;
const Nav = styled.nav`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
`;
const NavLinks = styled( Ul )`
	@media screen and (max-width: 1600px) {
		flex-direction: column;
		align-items: center;
	}
`;
const ExternalLinks = styled( Ul )` 

`;
const Li = styled.li`
	display: flex;
	align-items: center;
	margin: calc(0.5rem + 0.2vw);
`;
const LinkStyled = styled( Link )`
	color: #F0F0F0;
	font-family: ${ fontFam.sec };
	transition: filter 100ms;

	&:hover, 
	&:focus {
		filter: brightness(0.70);
	}
`;
const Icon = styled.div`
	background-image: url(${ props => props.src });
	background-position: center;
	background-repeat:no-repeat;
	background-size: contain;
	height: 50px;
	width: 50px;
	transition: filter 100ms;

	&:hover, &:focus {
		filter: brightness(1.20);
	}
`;
const Copyright = styled.div`
	font-family: ${ fontFam.sec };
	color: #999999;
	font-size: 0.88235rem;
`;