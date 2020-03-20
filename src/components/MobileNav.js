import React, { useContext } from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { navigationContext } from "../Context";
import { clr, bp, fontFam } from "../style-variables";
import { Li as Li1 } from "./Navbar";

function MobileNav() {
	const [ isNavOpen, setIsNavOpen ] = useContext( navigationContext );

	const handleClick = () => {
		const burger = document.querySelector( "#roll" );
		burger.classList.contains( "roll" ) && burger.classList.remove( "roll" );
		setTimeout( () => burger.classList.add( "roll" ), 17 );
		setTimeout( () => setIsNavOpen( false ), 500 );
	};

	return (
		<Nav isNavOpen={ isNavOpen }>
			<Li className={ isNavOpen && "fadeFromTop" } num={ 6 } >
				<NavLinkStyled onClick={ handleClick } to="/">Home</NavLinkStyled>
			</Li>
			<Li className={ isNavOpen && "fadeFromTop" } num={ 5 } >
				<NavLinkStyled onClick={ handleClick } to="/solutions">Solutions</NavLinkStyled>
			</Li>
			<Li className={ isNavOpen && "fadeFromTop" } num={ 4 } >
				<NavLinkStyled onClick={ handleClick } to="/case-studies">Case Studies</NavLinkStyled>
			</Li>
			<Li className={ isNavOpen && "fadeFromTop" } num={ 3 } >
				<NavLinkStyled onClick={ handleClick } to="/our-team">Our Team</NavLinkStyled>
			</Li>
			<Li className={ isNavOpen && "fadeFromTop" } num={ 2 } >
				<NavLinkStyled onClick={ handleClick } to="/join">Join us</NavLinkStyled>
			</Li>
			<Li className={ isNavOpen && "fadeFromTop" } num={ 1 } >
				<NavLinkStyled onClick={ handleClick } to="/contact">Contact</NavLinkStyled>
			</Li>
		</Nav>
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
	background: radial-gradient( 50% 50% at 50% 50%, #595E5E 0%, #434747 100% );
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
	font-weight: bold;
	transform: ${ props => props.isNavOpen ? "translateY(0)" : "translateY(-102%)" };
	transition: transform 300ms;
`;
const Li = styled( Li1 )`
	animation-duration: 700ms;
	animation-delay: ${props => props.num * 50 }ms;
	padding: 2vw;
`;
const NavLinkStyled = styled( NavLink )`
	color: #e8e8e8;
	font-family: ${ fontFam.prim };
	font-size: calc(1rem  + 4vw);
	letter-spacing: 2px;
	font-weight: bold;
	
	&:hover,
	&:focus {
		color: ${ clr.prim };
	}
	// transform: translateY(-200px)
`;