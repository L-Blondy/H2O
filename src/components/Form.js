import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { BtnContained } from "./styled-components";
import { clr, fontFam, bp } from "../Global";
import { useInput } from "../hooks";
import src_lock from "../assets/icons/lock.svg";

function Form({
	Title,
	Email,
	FirstName,
	LastName,
	Position,
	Job,
	CompName,
	CompIndustry,
	Phone,
	Country,
	Message,
	Curriculum,
	Submit
}) {

	const [ state, setState ] = useState({});

	const bindToForm = (value) => setState({
		...state,
		...value
	});

	useEffect(() => console.log(state), [ state ]);

	return (
		<Form$>
			<form>
				{ Title && (
					<h3 className="title">{ Title }</h3>
				) }
				{ Email && (
					<Input bindToForm={ bindToForm } width="2" type="email" name="email" label="Email address :" />
				) }
				{ FirstName && (
					<Input bindToForm={ bindToForm } width="1" type="text" name="firstname" label="First Name :" />
				) }
				{ LastName && (
					<Input bindToForm={ bindToForm } width="1" type="text" name="lastname" label="Last Name :" />
				) }
				{ Position && (
					<Input bindToForm={ bindToForm } width="2" type="text" name="position" label="Position you apply to :" />
				) }
				{ CompName && (
					<Input bindToForm={ bindToForm } width="1" type="text" name="compname" label="Company Name :" />
				) }
				{ CompIndustry && (
					<Input bindToForm={ bindToForm } width="1" type="text" name="compindustry" label="Company Industry :" />
				) }
				{ Job && (
					<Input bindToForm={ bindToForm } width="2" type="text" name="job" label="Position you apply to :" />
				) }
				{ Phone && (
					<Input bindToForm={ bindToForm } width="1" type="text" name="phone" label="Phone Number :" />
				) }
				{ Country && (
					<Input bindToForm={ bindToForm } width="1" type="text" name="country" label="Country :" />
				) }
				{ Curriculum && (
					<Input bindToForm={ bindToForm } width="2" type="text" name="curriculum" label="Upload your curriculum :" />
				) }
				{ Message && (
					<Input bindToForm={ bindToForm } width="2" type="textarea" name="message" label="Contact Form Message :" />
				) }
				{ Submit && (
					<Submit$
						as="button"
						color={ clr.prim }
						iconSRC={ Submit.iconSRC }
						width="1"
						type="submit"
						name="submit">

						{ Submit.text }
					</Submit$>
				) }
			</form>
		</Form$>
	);
}

function Input({ width, type, label, name, bindToForm }) {

	const [ value, bindValue ] = useInput("");
	useEffect(() => bindToForm({ [ name ]: value }), [ value ]);

	return (
		<Input$ className="input-wrapper" width={ width }>
			<label>
				{ label }
				{ type === "textarea" ?
					(
						<textarea type={ type } name={ name } rows="10" { ...bindValue } required />
					)
					: (
						<input type={ type } name={ name } { ...bindValue } required />
					)
				}
			</label>
		</Input$>
	);
}

export default Form;

const Form$ = styled.div`
	background: ${ clr.sec };
	padding: 2rem 3rem;
	width: 50%;
	color: ${ clr.formFont };
	font-size: 16px;
	font-family: ${ fontFam.sec };
	line-height: 1.5em;

	form {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		font-family: ${ fontFam.sec };
		font-weight: 600;
		font-size: 1.05rem;
		letter-spacing: 0.01em;

		&::after {
			content:"";
			width:35%;
			height: 1px;
			border-radius: 20px;
			background: ${ clr.primLight };
			margin: 0.7rem;
		}
	}
`;

const Input$ = styled.div`
	display: inline-block;
	flex-direction: column;
	width: ${ props => props.width === "1" ? "48%" : "100%" };
	padding: 0.6rem 0;

	/* label */
	label {
		width: 100;
		display: flex;
		flex-direction: column;
		
	}
	input, 
	textarea {
		border : none;
		resize: none;
	}
	input {
		height: 1.76rem;
	}
`;

const Submit$ = styled(BtnContained)`
	margin-top: 2rem;
	font-size: inherit;
	border-radius: inherit;
	padding:  0.65em 1.3em;

	&::after {
		content: '';
		padding-left: 0.9rem;
		margin-left: 0.8rem;
		background-image: url(${ props => props.iconSRC });
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		flex-shrink: 0;
	}
`;