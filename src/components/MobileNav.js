import React, { useState } from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { clr, bp, fontFam } from "../styles";
import { Li } from "./styled-components";
import { Burger } from "./";

function MobileNav() {
	const [ isNavOpen, setIsNavOpen ] = useState(false);
	const [ roll, setRoll ] = useState(false);

	const handleLinkClick = () => {
		setRoll(false);
		setTimeout(() => setRoll(true), 17);
		setTimeout(() => setIsNavOpen(false), 500);
	};
	const handleBurgerClick = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<>
			<Nav isNavOpen={ isNavOpen }>
				<LiAnimated className={ isNavOpen && "fadeFromTop" } num={ 6 } >
					<NavLink
						className="navlink"
						onClick={ handleLinkClick }
						to="/" >
						Home
					</NavLink>
				</LiAnimated>
				<LiAnimated className={ isNavOpen && "fadeFromTop" } num={ 5 } >
					<NavLink
						className="navlink"
						onClick={ handleLinkClick }
						to="/solutions" >
						Solutions
					</NavLink>
				</LiAnimated>
				<LiAnimated className={ isNavOpen && "fadeFromTop" } num={ 4 } >
					<NavLink
						className="navlink"
						onClick={ handleLinkClick }
						to="/case-studies" >
						Case Studies
					</NavLink>
				</LiAnimated>
				<LiAnimated className={ isNavOpen && "fadeFromTop" } num={ 3 } >
					<NavLink
						className="navlink"
						onClick={ handleLinkClick }
						to="/our-team" >
						Our Team
					</NavLink>
				</LiAnimated>
				<LiAnimated className={ isNavOpen && "fadeFromTop" } num={ 2 } >
					<NavLink
						className="navlink"
						onClick={ handleLinkClick }
						to="/join" >
						Join us
					</NavLink>
				</LiAnimated>
				<LiAnimated className={ isNavOpen && "fadeFromTop" } num={ 1 } >
					<NavLink
						className="navlink"
						onClick={ handleLinkClick }
						to="/contact" >
						Contact
					</NavLink>
				</LiAnimated>
			</Nav>
			<Burger className={ (isNavOpen ? "open " : "close ") + (roll && " roll") } onClick={ handleBurgerClick } />
		</>
	);
}

export default MobileNav;

const Nav = styled.nav`
	@media screen and (min-width:${bp.burger }){
		display: none;
	}

	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: radial-gradient(50% 50% at 50% 50%,#3d4f4f 0%,#334646 100%);
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
	font-weight: bold;
	transform: ${ props => props.isNavOpen ? "translateY(0)" : "translateY(-115%)" };
	transition: transform 300ms;

	/* navlink */
	.navlink {
		color: #e8e8e8;
		font-family: ${ fontFam.prim };
		font-size: calc(1.2rem  + 3vw);
		letter-spacing: 2px;
		font-weight: bold;
		
		&:hover,
		&:focus {
			color: ${ clr.prim };
		}
	}
`;
const LiAnimated = styled(Li)`
	animation-duration: 700ms;
	padding: 2vw;
`;


