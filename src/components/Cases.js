
import React, { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Text } from "../components/styled-components";
import { clr, fontFam, bp } from "../styles";
import * as src_desktop from "../assets/cases/desktop/*.*";
import * as src_tablet from "../assets/cases/tablet/*.*";
import { WindowSizeCtx } from "../Context";
import { getLazyImg } from "../utils";

export default function Cases() {

	const windowSize = useContext( WindowSizeCtx );
	const [ SRC, setSRC ] = useState( src_desktop );

	useEffect( () => {
		if ( windowSize < bp.tablet.slice( 0, 4 ) )
			setSRC( src_tablet );
		else
			setSRC( src_desktop );
	}, [ windowSize ] );

	return (
		<>
			<Case
				src={ SRC.CEO1.jpg }
				placeholder={ SRC.placeholder.jpg }
				name={ CEO1.name }
				job={ CEO1.job }
				quote={ CEO1.quote }
			/>
			<Case
				src={ SRC.CEO2.jpg }
				placeholder={ SRC.placeholder.jpg }
				name={ CEO2.name }
				job={ CEO2.job }
				quote={ CEO2.quote }
				reverse
			/>
			<Case
				src={ SRC.CEO3.jpg }
				placeholder={ SRC.placeholder.jpg }
				name={ CEO3.name }
				job={ CEO3.job }
				quote={ CEO3.quote }
			/>
			<Case
				src={ SRC.CEO4.jpg }
				placeholder={ SRC.placeholder.jpg }
				name={ CEO4.name }
				job={ CEO4.job }
				quote={ CEO4.quote }
				reverse
			/>
		</>
	);
}


function Case( { src, placeholder, reverse, name, job, quote } ) {

	const img = useRef();

	useEffect( () => {
		getLazyImg( img, src, placeholder );
	}, [ src ] );

	return (
		<CaseStyled reverse={ reverse }>

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

				<Text className="quote">
					{ quote }
				</Text>
			</div>

		</CaseStyled>
	);
}

const CaseStyled = styled.div`
	display: flex;
	flex-direction: ${props => props.reverse ? "row-reverse" : "row" };
	width: 100%;
	text-align: ${props => props.reverse ? "right" : "left" };

	.picture { 
		font-size: 0;
		display: flex;
		justify-content: center;
		overflow: hidden;

		@media screen and (max-width: ${ bp.tablet }) {
			width: 260px;
			height: 260px;
		}
	}
	.img{ 
		/* width: 100%; */
		/* height: 100%; */
	}
	.presentation {
		background: lime;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-basis: 50%;
		${props => props.reverse ? "padding-right" : "padding-left" }: 4rem;
		font-family: ${ fontFam.prim };
		color: ${ clr.navlinks };
		
	}
	.name {
		font-weight: bold;
		font-size: 1.48em;
	}
	.job {
		margin-top: -0.1em;
		font-weight: bold;
		font-size: 1.12em;
		padding-bottom: 0.2em;
	}
`;


const CEO1 = {
	name: "Richard Young",
	job: "Director, RedDoor Health",
	quote: `"H2O has been the driver for building models at scale. We are talking about billions of claims. You can't do this with standard off the shelf open source techniques."`
};
const CEO2 = {
	name: "Mark Coleman",
	job: "Health Data Project Lead",
	quote: `"The power of making decisions with machine learning is great and AutoML is a great tool for the rapid knowledge discovery. We can make decisions right away and it can be personalized decisions."`
};
const CEO3 = {
	name: "Jason Sullivan",
	job: "CEO, HandCare",
	quote: `"With H2O we are building models to improve the patient experience in our hospitals and improve the nursing and doctor workflows as well."`
};
const CEO4 = {
	name: "Douglas McKinney ",
	job: "Data scientist, Change Healthcare",
	quote: `"In terms of time savings, it’s a standard practice for our team to use H2O for things like model evaluation, evaluating variable importances, and interpretability of the model. H2O just makes so much of that legwork so easy in our workflow."`
};