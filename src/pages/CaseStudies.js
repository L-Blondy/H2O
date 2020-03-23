import React from 'react';
import { Banner, MainContainer } from "../components";
import { Text } from "../components/styled-components";
import { clr } from "../styles";
import styled from "styled-components";

function CaseStudies() {
	return (
		<>
			<MainContainer background={ clr.bannerGradient }>
				<Banner
					title="Case studies"
					headLine="What our customers say about us"
				/>
			</MainContainer>

			<MainContainer background={ "clr.lightGradient" }>
				<Case
					src={ require( "../assets/cases/CEO1.jpg" ) }
					name={ CEO1.name }
					job={ CEO1.job }
					quote={ CEO1.quote }
				/>
				<Case
					src={ require( "../assets/cases/CEO2.jpg" ) }
					name={ CEO2.name }
					job={ CEO2.job }
					quote={ CEO2.quote }
					reverse
				/>
				<Case
					src={ require( "../assets/cases/CEO3.jpg" ) }
					name={ CEO3.name }
					job={ CEO3.job }
					quote={ CEO3.quote }
				/>
				<Case
					src={ require( "../assets/cases/CEO4.jpg" ) }
					name={ CEO4.name }
					job={ CEO4.job }
					quote={ CEO4.quote }
					reverse
				/>
			</MainContainer>
		</>
	);
}

function Case( { src, reverse, name, job, quote } ) {
	console.log( reverse );
	return (
		<CaseContainer reverse={ reverse }>

			<div className="picture">
				<img className="img" src={ src } alt="image" />
			</div>

			<div className="presentation">
				<div className="name">
					{ name }
				</div>

				<div className="job">
					{ job }
				</div>

				<Text className="quote">
					<i>{ quote }</i>
				</Text>
			</div>

		</CaseContainer>
	);
}

const CaseContainer = styled.div`
	display: flex;
	flex-direction: ${props => props.reverse ? "row-reverse" : "row" };
	width: 100%;
	text-align: ${props => props.reverse ? "right" : "left" };

	.picture { }
	.img{ }
	.presentation {
		background: lime;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

`;

export default CaseStudies;

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