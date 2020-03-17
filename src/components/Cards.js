import React, { useEffect, useState, useRef } from 'react';
import placeholder from "../assets/cards/card_placeholder_desktop.jpg";
import src_desktop from "../assets/cards/desktop/*.*";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { clr, fontFam, bp } from "../style-variables";
import { useWindowSize, useLazyImg } from "../hooks";

function Cards( { fullHeight } ) {

	const windowSize = useWindowSize();
	const [ minHeight, setMinHeight ] = useState();

	useEffect( () => {
		const container = document.querySelector( ".cards-container" );
		setMinHeight( windowSize.height - container.getBoundingClientRect().top );
	}, [ windowSize ] );

	return (
		<CardsContainer className="cards-container" minHeight={ fullHeight && ( minHeight + "px" ) } >
			<Card
				to="/"
				title="Predicting ICU Transfers"
				src={ src_desktop.predicting_icu_transfers.jpg }
				placeholder={ placeholder }
			/>
			<Card
				to="/"
				title="Medical Testing"
				src={ src_desktop.medical_testing.jpg }
				placeholder={ placeholder }
			/>
			<Card
				to="/"
				title={ `Predicting ${ windowSize.width > 700 || windowSize.width < 576 ? "Hospital" : "" } Readmissions` }
				src={ src_desktop.predicting_hospital_readmissions.jpg }
				placeholder={ placeholder }
			/>
			<Card
				to="/"
				title="Claim Denials Management"
				src={ src_desktop.claim_denials_management.jpg }
				placeholder={ placeholder }
			/>
			<Card
				to="/"
				title="Improving Clinical Workflow"
				src={ src_desktop.improving_clinical_workflow.jpg }
				placeholder={ placeholder }
			/>
			<Card
				to="/"
				title="Sepsis Prevention"
				src={ src_desktop.sepsis_prevention.jpg }
				placeholder={ placeholder }
			/>
		</CardsContainer>
	);
}

function Card( { to, title, src, placeholder } ) {

	const ref = useLazyImg( src, placeholder );

	return (
		<LinkStyled to={ to }>
			<WrapImg>
				<img { ...ref } />
			</WrapImg>
			<Title>{ title }</Title>
		</LinkStyled>
	);
}

const CardsContainer = styled.div`
	width: 100%;
	min-height: ${props => props.minHeight ? props.minHeight : "initial" };
	display: flex;
	justify-content: space-between;
	align-content: flex-start;
	flex-wrap: wrap;
	padding-top: 4rem;

	@media screen and (max-width: ${ bp.tablet }) {
		padding-top: 3rem;
	}
	@media screen and (max-width: ${ bp.phone }) {
		padding-top: 1rem;
	}
`;
const LinkStyled = styled( Link )`
	position: relative;
	display: inline-block;
	font-size: 0;
	margin: 1rem 0;
	width: 31%;
	overflow: hidden;

	@media screen and (max-width: ${ bp.tablet }) {
		width: 48%;
	}
	@media screen and (max-width: ${ bp.phone }) {
		margin: 0;
	}
	@media screen and (max-width: 500px) {
		margin: 2vw 0;
	}
`;
const Title = styled.div`
	position: absolute;
	top: 17%;
	left: 0;
	font-size: 1rem;
	background: ${clr.prim };
	color: ${clr.fontLight };
	font-family: ${fontFam.prim };
	font-weight: bold;
	letter-spacing:0.5px;
	padding: 0.5rem 0.7rem 0.4rem 0.7rem;
	white-space: nowrap;

	@media screen and (max-width: ${ bp.phone }) {
		top: 50%;
		left:50%;
		transform: translate(-50%,-50%);
		background: none;
		white-space: initial;
		text-align: center;
		font-size: calc(3vw + 0.4rem);
	}
`;
const WrapImg = styled.div`
	width: 100%;
	overflow: hidden;

	img {
		max-width: 100%;
	}

	@media screen and (max-width: ${ bp.phone }) {
		padding-top: 100%;

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			max-width: initial;
			max-height: 100%;
			filter: brightness(0.4)
		}
	}
`;

export default Cards;