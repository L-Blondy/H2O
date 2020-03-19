import React from 'react';
import placeholder from "../assets/cards/card_placeholder_desktop.jpg";
import src_desktop from "../assets/cards/desktop/*.*";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { clr, fontFam, bp } from "../style-variables";
import { useLazyImg, useFullMinHeight } from "../hooks";

function Cards( { fullHeight } ) {

	const minHeight = useFullMinHeight( ".cards-container", fullHeight );

	return (
		<CardsContainer className="cards-container" minHeight={ minHeight } >
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
				title={ `Predicting ${ window.innerWidth > 700 || window.innerWidth < 576 ? "Hospital" : "" } Readmissions` }
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
			<Title className="title">{ title }</Title>
			<div className="hover">
				<div className="hover__title">{ title }</div>
				<div className="hover__learn-more">Learn more</div>
			</div>
		</LinkStyled>
	);
}

const CardsContainer = styled.div`
	width: 100%;
	min-height: ${props => props.minHeight || "initial" };
	display: flex;
	justify-content: space-between;
	align-content: flex-start;
	flex-wrap: wrap;
	padding-top: 4rem;
	padding-bottom: 4rem;

	@media screen and (max-width: ${ bp.tablet }) {
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
	@media screen and (max-width: ${ bp.phone }) {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
`;
const LinkStyled = styled( Link )`
	position: relative;
	display: inline-block;
	font-size: 0;
	margin: 1rem 0;
	width: 31%;
	overflow: hidden;
	border-radius: 3px;

	.hover {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 2;
		font-size: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: ${ clr.fontLight };
		font-family: ${ fontFam.prim };
		transform: translateY(110%);
		transition: transform 500ms;
		background: rgba(0,0,0,0.4);

		&__title {
			position: relative;
			font-size: 1.2rem;
			text-align: center;
			transform: translateY(-6px);
			letter-spacing: 1px;
			padding: 0 1.5rem;

			&::after {
				position: absolute;
				content: "";
				width: 30px;
				height: 2px;
				background: ${ clr.prim };
				top: 100%;
				left: 50%;
				transform: translateX(-50%);
			}
		}
		&__learn-more {
			font-size: 0.9rem;
			text-decoration: underline rgba(255,255,255,0.6);
		}
	}

	@media screen and (min-width: ${ bp.burger }) {

		&:hover,
		&:focus {
			img {
				transform: scale(1.1);
				filter: brightness(0.6);
			}
			.title {
				transform: translateX(-101%);
			}
			.hover {
				transform: translateY(0);
			}
		}
	}

	@media screen and (max-width: ${ bp.burger }) {
		&:hover,
		&:focus {
			img {
				transform: scale(1.1);
				filter: brightness(0.8);
			}
			.title {
				text-decoration: underline;
			}
		}
	}

	@media screen and (max-width: ${ bp.tablet }) {
		width: 48%;
	}
	@media screen and (max-width: ${ bp.phone }) {
		margin: 0;
		img {
			transform: translate(-50%,-50%);
		}
		&:hover,
		&:focus {
			img {
				transform: translate(-50%,-50%) scale(1.1);
			}
		}
	}
	@media screen and (max-width: 500px) {
		margin: 2vw 0;
	}
`;
const Title = styled.div`
	position: absolute;
	top: 17%;
	left: 0;
	font-size: 1.08rem;
	background: ${clr.prim };
	color: ${clr.fontLight };
	font-family: ${fontFam.prim };
	letter-spacing:0.5px;
	padding: 0.5rem 0.7rem 0.4rem 0.7rem;
	white-space: nowrap;
	pointer-events:none;
	transition: transform 500ms;

	@media screen and (max-width: ${ bp.burger }) {
		top: 50%;
		left:50%;
		transform: translate(-50%,-50%);
		background: none;
		white-space: initial;
		text-align: center;
		font-size: calc(1vw + 1rem);
	}
	@media screen and (max-width: ${ bp.phone }) {
		font-size: 1.15rem;
		font-weight: bold;
		letter-spacing:1px;
	}
`;
const WrapImg = styled.div`
	width: 100%;
	overflow: hidden;

	img {
		max-width: 100%;
		transition-property: transform filter;
		transition-duration: 500ms;
		filter: brightness(0.85);
	}

	@media screen and (max-width: ${ bp.burger }) {
		img{
			filter: brightness(0.45);
		}
	}
	@media screen and (max-width: ${ bp.phone }) {
		padding-top: 100%;

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			max-width: initial;
			max-height: 100%;
		}
	}
`;

export default Cards;