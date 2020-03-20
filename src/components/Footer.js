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
					<UlNavLinks>
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
					</UlNavLinks>
				</Nav>

				<UlExternalLinks>
					<li>
						<a href="https://www.google.com" target="_blank" rel="noreferrer noopener">
							<Icon src={ iconsSRC.github.svg } />
						</a>
					</li>
					<li>
						<a href="https://www.google.com" target="_blank" rel="noreferrer noopener">
							<Icon src={ iconsSRC.linkedin.svg } />
						</a>
					</li>
					<li>
						<a href="https://www.google.com" target="_blank" rel="noreferrer noopener">
							<Icon src={ iconsSRC.twitter.svg } />
						</a>
					</li>
				</UlExternalLinks>

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
	padding: 4rem 0;
	transform: translateZ(0);

	@media screen and (max-width: 1100px) {
		padding: 5rem 0;
	}
	@media screen and (max-width: ${ bp.phone }) {
		padding: 3rem 0;
	}
`;
const Container = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1200px;

	@media screen and (max-width: 1400px) {
		align-items: flex-start;
		width: 1000px;
	}
	@media screen and (max-width: 1100px) {
		flex-wrap: wrap;
		justify-content: center;
		width: 500px;
		max-width: 90%;
	}
	@media screen and (max-width: ${ bp.phone }) {
		flex-direction: column;
		align-items: center;
	}
`;
const LogoStyled = styled( Logo )`
	width: 201px;
	flex-shrink: 0;

	img {
		width: 150px;
	}

	@media screen and (max-width: 1100px) {
		order: 1;
		flex-basis: 50%;
	}
	@media screen and (max-width: ${ bp.phone }) {
		width: 150px;
	}
`;
const Ul = styled.ul`
	display: flex;
	height: 100%;
	flex-shrink: 0;
	justify-content: center;
`;
const UlExternalLinks = styled( Ul )` 
	li {
		display: flex;
		align-items: center;
		margin: 0 0.5rem;
	}

	@media screen and (max-width: 1400px) {
		padding-top: 1em;
	}
	@media screen and (max-width: 1100px) {
		order: 3;
		flex-basis: 50%;
		justify-content: flex-end;
	}
`;
const Nav = styled.nav`
	@media screen and (max-width: 1400px) {
		max-width: 18em;
		padding-top: 0.3rem;
	}
	@media screen and (max-width: 1100px) {
		order: 4;
		padding-top: 2rem;
	}
	@media screen and (max-width: ${ bp.phone }) {
		order: 2;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
`;
const UlNavLinks = styled( Ul )`
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Li = styled.li`
	display: flex;
	align-items: center;
	padding: 0 0.5rem;

	@media screen and (max-width: 1400px) {
		flex-basis: 34%;
		min-width: 7em;
		padding: 0.8rem 0;
	}
	@media screen and (max-width: ${ bp.phone }) {
		flex-basis: 100%;
		justify-content: center;
		padding: 0.3rem 0;
	}
`;

const LinkStyled = styled( Link )`
	color: #F0F0F0;
	font-family: ${ fontFam.sec };
	transition: filter 100ms;
	padding: 0.4rem;

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
	margin-top: 3em;

	@media screen and (max-width: ${ bp.phone }) {
		white-space: pre-line;
		width: 17em;
		text-align: center;
		line-height: 1.5em;
	}
`;