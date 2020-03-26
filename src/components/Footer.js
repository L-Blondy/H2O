import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { clr, fontFam, bp } from "../Global";
import { Logo } from "./";
import * as iconsSRC from "../assets/icons/*.*";

function Footer() {
	return (
		<FooterStyled>
			<div className="container">

				<Logo className="logo logo-dark" />

				<nav>
					<ul className="navlinks">
						<li>
							<Link className="link"
								to="/">
								Home
							</Link>
						</li>
						<li>
							<Link className="link"
								to="/solutions">
								Solutions
							</Link>
						</li>
						<li>
							<Link className="link"
								to="/case-studies">
								Case Studies
							</Link>
						</li>
						<li>
							<Link className="link"
								to="/our-team">
								Our Team
							</Link>
						</li>
						<li>
							<Link className="link"
								to="/join">
								Join us
							</Link>
						</li>
						<li>
							<Link className="link"
								to="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				<ul className="external-links">
					<li>
						<a
							href="https://www.google.com"
							target="_blank"
							rel="noreferrer noopener">
							<Icon src={ iconsSRC.github.svg } />
						</a>
					</li>
					<li>
						<a
							href="https://www.google.com"
							target="_blank"
							rel="noreferrer noopener">
							<Icon src={ iconsSRC.linkedin.svg } />
						</a>
					</li>
					<li>
						<a
							href="https://www.google.com"
							target="_blank"
							rel="noreferrer noopener">
							<Icon src={ iconsSRC.twitter.svg } />
						</a>
					</li>
				</ul>

			</div>

			<div className="copyright">
				Copyright © Laurent Blondy 2020.
				All rights reserved.
			</div>
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

	/* container */
	.container {
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
	}

	/* logo */
	.logo {
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
	}

	/* nav */
	nav {
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
	}

	/* ul */
	ul {
		display: flex;
		height: 100%;
		flex-shrink: 0;
		justify-content: center;
	}

	/* li */
	li {
		display: flex;
		align-items: center;
		padding: 0 0.5rem;
	}

	/* link */
	.link {
		color: #F0F0F0;
		font-family: ${ fontFam.sec };
		transition: filter 100ms;
		padding: 0.4rem;

		&:hover, 
		&:focus {
			filter: brightness(0.70);
		}
	}

	/* navlinks */
	.navlinks {
		flex-wrap: wrap;
		justify-content: space-between;

		li {
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
		}
	}

	/* external-links */
	.external-links {
		@media screen and (max-width: 1400px) {
			padding-top: 1em;
		}
		@media screen and (max-width: 1100px) {
			order: 3;
			flex-basis: 50%;
			justify-content: flex-end;
		}
	}

	/* copyright */
	.copyright {
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