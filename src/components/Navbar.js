import React, { useEffect, useContext } from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { Logo, MainContainer } from "./";
import { fontFam, clr, bp } from "../style-variables";
import { NavbarHeightCtx } from "../Context";

function Navbar() {

	const navbarHeight = useContext( NavbarHeightCtx );

	return (
		<>
			<MainContainer background={ clr.lightGradient }>
				<Nav navbarHeight={ navbarHeight }>
					<LogoStyled className="logo-light" />
					<NavLinks>
						<Li hideMobile={ true }>
							<NavLinkStyled to="/">Home</NavLinkStyled>
						</Li>
						<Li hideMobile={ true }>
							<NavLinkStyled to="/solutions">Solutions</NavLinkStyled>
						</Li>
						<Li hideMobile={ true }>
							<NavLinkStyled to="/case-studies">Case Studies</NavLinkStyled>
						</Li>
						<Li hideMobile={ true }>
							<NavLinkStyled to="/our-team">Our Team</NavLinkStyled>
						</Li>
						<Li hideMobile={ true }>
							<NavLinkStyled to="/join">Join us</NavLinkStyled>
						</Li>
						<Li>
							<NavLinkStyled to="/contact">Contact</NavLinkStyled>
						</Li>
					</NavLinks>
				</Nav>
			</MainContainer>
		</>
	);
}

const Nav = styled.nav`
	display: flex;
	justify-content:space-between;
	align-items:stretch;
	width: 100%;
	height: ${props => props.navbarHeight };
`;
const NavLinks = styled.ul`
	display: flex;
	transform: translateX(1em);
`;
export const Li = styled.li`
	display: flex;
	position: relative;

	&::after,&::before {
		content:"";
		width: 100%;
		height: 3px;
		position: absolute;
		left: 0;
		background: ${ clr.prim };
		transform: scaleX(0);
		opacity: 0.7;
		transform-origin: bottom;
		transition: transform 150ms 30ms;
	}
	&::after {
		bottom:0;
	}
	&::before {
		top:0;
	}

	&:hover::after,
	&:focus::after,
	&:hover::before,
	&:focus::before{
		transform: scaleX(1);
	}
	@media screen and (max-width: ${ bp.burger }){
		display: ${ props => props.hideMobile ? "none" : "flex" };
	}
`;
const NavLinkStyled = styled( NavLink )`
	font-family: ${ fontFam.prim };
	color: ${ clr.navlinks };
	padding: 0 1em;
	display: flex;
	align-items: center;

	&:hover,
	&:focus {
		color: ${clr.prim };
	}
	@media screen and (max-width: ${ bp.burger }){
		font-family: ${ fontFam.prim };
		font-size: 1.05rem;
		font-weight: bold;
	}
`;
const LogoStyled = styled( Logo )`
	display: flex;
	align-items:center;
	max-width: 80px;

	@media screen and (max-width: ${ bp.burger }){
		max-width: 70px;
	}
`;

export default Navbar;
