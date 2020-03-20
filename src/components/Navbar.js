import React, { useState } from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { Logo, Burger, MainContainer } from "./";
import { fontFam, clr, bp } from "../style-variables";

function Navbar() {
	const [ isOpen, setIsOpen ] = useState( false );

	const handleBurgerClick = () => {
		setIsOpen( !isOpen );
	};
	const handleLinkClick = ( e ) => {
		if ( !e.target.classList.contains( "fadeFromTop" ) )
			return;
		const burger = document.querySelector( "#roll" );
		burger.classList.contains( "roll" ) && burger.classList.remove( "roll" );
		setTimeout( () => burger.classList.add( "roll" ), 17 );
		setTimeout( () => setIsOpen( false ), 500 );
	};

	return (
		<MainContainer2 background={ clr.lightGradient }>
			<Nav>
				<LogoStyled className="logo-light" />
				<BurgerStyled onClick={ handleBurgerClick } isOpen={ isOpen } />
				<NavLinks isOpen={ isOpen } onClick={ handleLinkClick }>
					<Li>
						<NavLinkStyled className={ isOpen && "fadeFromTop" } num={ 6 } to="/">Home</NavLinkStyled>
					</Li>
					<Li>
						<NavLinkStyled className={ isOpen && "fadeFromTop" } num={ 5 } to="/solutions">Solutions</NavLinkStyled>
					</Li>
					<Li>
						<NavLinkStyled className={ isOpen && "fadeFromTop" } num={ 4 } to="/case-studies">Case Studies</NavLinkStyled>
					</Li>
					<Li>
						<NavLinkStyled className={ isOpen && "fadeFromTop" } num={ 3 } to="/our-team">Our Team</NavLinkStyled>
					</Li>
					<Li>
						<NavLinkStyled className={ isOpen && "fadeFromTop" } num={ 2 } to="/join">Join us</NavLinkStyled>
					</Li>
					<Li>
						<NavLinkStyled className={ isOpen && "fadeFromTop" } num={ 1 } to="/contact">Contact</NavLinkStyled>
					</Li>
				</NavLinks>
				<Contact to="/contact">Contact us</Contact>
			</Nav>
		</MainContainer2>

	);
}
const MainContainer2 = styled( MainContainer )`
	@media screen and (max-width: ${ bp.burger }){
		transform: none;
	}
`;
const Nav = styled.nav`
	display: flex;
	justify-content:space-between;
	align-items:stretch;
	width: 100%;
	height: 90px;

	@media screen and (max-width: ${ bp.burger }){
		height: 60px;
	}
`;
const NavLinks = styled.ul`
	display: flex;
	transition: transform 300ms;
	transform: translateX(1em);

	@media screen and (max-width: ${ bp.burger }){
		position: fixed;
		flex-direction: column;
		align-items:center;
		justify-content:center;
		top: 50%;
		left: 50%;
		transform: ${ props => props.isOpen ? "translate(-50%,-50%)" : "translate(-50%,-152%)" };
		background: radial-gradient( 50% 50% at 50% 50%, #595E5E 0%, #434747 100% );
		z-index: 1000;
		height: 100vh;
		width: 100%;
		font-weight: bold;
	}
`;
const Li = styled.li`
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
		padding: 0.5rem;
	}
`;
const NavLinkStyled = styled( NavLink )`
	font-family: ${ fontFam.prim };
	color: ${ clr.navlinks };
	padding: 0 1em;
	display: flex;
	align-items: center;
	animation-duration: 700ms;
	animation-delay: ${props => props.num * 50 }ms;

	&:hover,
	&:focus {
		color: ${clr.prim };
	}

	@media screen and (max-width: ${ bp.burger }){
		color: #e8e8e8;
		font-size: calc(1rem  + 2vw);
		letter-spacing: 2px;
	}
`;
const Contact = styled( NavLinkStyled )`
	display: none;

	@media screen and (max-width: ${ bp.burger }){
			display: flex;
			color: ${ clr.navlinks };
			font-weight: bold;
			padding-right: 0;
			font-size: 1.05rem;
			letter-spacing: 0;
	}
`;
const BurgerStyled = styled( Burger )`
	position: fixed;
	bottom: 1.6rem;
	right: 0.8rem;
	height: calc(4vw + 45px);
	width: calc(4vw + 45px);
	border-radius: 50%;
	background: ${ clr.prim };
	z-index: 1001;
	display: none;

	@media screen and (max-width: ${ bp.burger }){
		display: initial;
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