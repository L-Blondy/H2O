import React, { useContext } from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { Logo, MainContainer } from "./";
import { Li } from "./styled-components";
import { fontFam, clr, bp } from "../Global";
import { NavbarHeightCtx } from "../Context";

function Navbar() {

	const navbarHeight = useContext(NavbarHeightCtx);

	return (
		<>
			<MainContainerStyled background={ clr.lightGradient }>
				<Nav navbarHeight={ navbarHeight }>
					<Logo className="logo logo-light" />
					<ul className="navlinks">
						<Li hideMobile={ true }>
							<NavLink className="navlink" to="/">Home</NavLink>
						</Li>
						<Li hideMobile={ true }>
							<NavLink className="navlink" to="/solutions">Solutions</NavLink>
						</Li>
						<Li hideMobile={ true }>
							<NavLink className="navlink" to="/case-studies">Case Studies</NavLink>
						</Li>
						<Li hideMobile={ true }>
							<NavLink className="navlink" to="/our-team">Our Team</NavLink>
						</Li>
						<Li hideMobile={ true }>
							<NavLink className="navlink" to="/join">Join us</NavLink>
						</Li>
						<Li>
							<NavLink className="navlink" to="/contact">Contact</NavLink>
						</Li>
					</ul>
				</Nav>
			</MainContainerStyled>
		</>
	);
}

const MainContainerStyled = styled(MainContainer)`
	position: relative;
	z-index: 1;
`;

const Nav = styled.nav`
	display: flex;
	justify-content:space-between;
	align-items:stretch;
	width: 100%;
	height: ${props => props.navbarHeight };

	/* logo */
	.logo {
		display: flex;
		align-items:center;
		max-width: 80px;

		@media screen and (max-width: ${ bp.burger }){
			max-width: 70px;
		}
	}

	/* navlinks */
	.navlinks {
		display: flex;
		transform: translateX(1em);
	}

	/* navlink */
	.navlink {
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
			font-size: 18px;
			font-weight: bold;
		}
	}
`;

export default Navbar;
