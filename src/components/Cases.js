
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "../components/styled-components";
import { clr, fontFam, bp } from "../Global";
import { WindowSizeCtx } from "../Context";
import { useLazyImg } from "../hooks";
import { customers } from "../data";
import * as src_desktop from "../assets/cases/desktop/*.*";
import * as src_tablet from "../assets/cases/tablet/*.*";
import * as src_phone from "../assets/cases/phone/*.*";

export default function Cases() {

	const windowSize = useContext(WindowSizeCtx);
	const [ SRC, setSRC ] = useState();

	useEffect(() => {
		if (windowSize.width < bp.phone.slice(0, 3))
			setSRC(src_phone);
		else if (windowSize.width < bp.tablet.slice(0, 4))
			setSRC(src_tablet);
		else
			setSRC(src_desktop);
	}, [ windowSize ]);

	return (
		<>
			{ customers.map((customer, i) => (
				<Case
					src={ SRC && SRC[ customer.src ].jpg }
					placeholder={ SRC && SRC.placeholder.jpg }
					name={ customer.name }
					job={ customer.job }
					quote={ customer.quote }
					reverse={ i % 2 === 1 }
					first={ i === 0 }
					last={ i === customers.length - 1 }
					key={ customer.name }
				/>
			)) }
		</>
	);
}


function Case({ src, placeholder, reverse, name, job, quote, first, last }) {

	const windowSize = useContext(WindowSizeCtx);
	const img = useLazyImg(src, placeholder);

	return (
		<Case$ reverse={ reverse } first={ first } last={ last }>

			<div className="picture">
				<img className="img" ref={ img } alt="image" />
			</div>

			<div className="presentation">
				<div className="name">
					{ name }
				</div>

				<div className="job">
					{ job }
				</div>
				{ windowSize.width >= bp.burger.slice(0, 3) && (
					<Text className="quote">
						<i>{ quote }</i>
					</Text>
				) }

			</div>
			{ windowSize.width < bp.burger.slice(0, 3) && (
				<Text className="quote">
					<i>{ quote }</i>
				</Text>
			) }

		</Case$>
	);
}

const Case$ = styled.div`
	display: flex;
	flex-direction: ${props => props.reverse ? "row-reverse" : "row" };
	flex-wrap: wrap;
	width: 100%;
	text-align: ${props => props.reverse ? "right" : "left" };
	padding-top: ${props => props.first ? "0.5rem" : "3.5rem" };
	padding-bottom: ${props => props.last ? "0.5rem" : "3.5rem" };

	@media screen and (max-width: ${ bp.tablet }) {
		padding-top: ${props => props.first ? "0.5rem" : "3rem" };
		padding-bottom: ${props => props.last ? "0.5rem" : "3rem" };
	}
	@media screen and (max-width: ${ bp.burger }) {
		padding-top: ${props => props.first ? "0.5rem" : "2.5rem" };
		padding-bottom: ${props => props.last ? "0.5rem" : "2.5rem" };
	}
	@media screen and (max-width: ${ bp.phone }) {
		padding-top: ${props => props.first ? "0.5rem" : "2rem" };
		padding-bottom: ${props => props.last ? "0.5rem" : "2rem" };
	}

	.picture { 
		font-size: 0;
		overflow: hidden;

		@media screen and (max-width: ${ bp.tablet }) {
			max-width: 40%;
			border-radius: 3px;
		} 
		@media screen and (max-width: ${ bp.burger }) {
			max-width: initial;
			width: 200px;
		} 
		@media screen and (max-width: ${ bp.phone }) {
			width: auto;
		} 
	}
	.img{ 
		width: 100%;
	}
	.presentation {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-basis: 50%;
		${props => props.reverse ? "padding-right" : "padding-left" }: 4rem;
		font-family: ${ fontFam.prim };
		color: ${ clr.navlinks };

		@media screen and (max-width: ${ bp.tablet }){
			${ props => props.reverse ? "padding-right" : "padding-left" }: 2.5rem;
		}
		@media screen and (max-width: ${ bp.phone }){
			${ props => props.reverse ? "padding-right" : "padding-left" }: 1.5rem;
		}
		
	}
	.name {
		font-weight: bold;
		font-size: 1.48em;

		@media screen and (max-width: ${ bp.phone }) {
			font-size: 1.1em;
		} 
	}
	.job {
		margin-top: -0.1em;
		font-weight: bold;
		font-size: 1.12em;
		padding-bottom: 0.2em;
		white-space: nowrap;

		@media screen and (max-width: ${ bp.burger }) {
			white-space: pre-wrap;
		}
		@media screen and (max-width: ${ bp.phone }) {
			font-size: 1em;
			opacity: 0.9;
		} 
	}
	.quote {
		@media screen and (max-width: ${ bp.burger }) {
			padding-top: 1rem;
		} 
		@media screen and (max-width: ${ bp.phone }) {
			padding-top: 0.7rem;
			font-size: 16px;
		} 
	}
`;


const CEO1 = {
	name: "Richard Young",
	job: "Director,\nRedDoor Health",
	quote: `"H2O has been the driver for building models at scale. We are talking about billions of claims. You can't do this with standard off the shelf open source techniques."`
};
const CEO2 = {
	name: "Mark Coleman",
	job: "Project Lead,\nHealth Data",
	quote: `"The power of making decisions with machine learning is great and AutoML is a great tool for the rapid knowledge discovery. We can make decisions right away and it can be personalized decisions."`
};
const CEO3 = {
	name: "Jason Sullivan",
	job: "CEO,\nHandCare",
	quote: `"With H2O we are building models to improve the patient experience in our hospitals and improve the nursing and doctor workflows as well."`
};
const CEO4 = {
	name: "Douglas McKinney ",
	job: "Data scientist,\nChange Healthcare",
	quote: `"In terms of time savings, it’s a standard practice for our team to use H2O for things like model evaluation, evaluating variable importances, and interpretability of the model. H2O just makes so much of that legwork so easy in our workflow."`
};