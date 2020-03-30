import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { BtnContained } from "./styled-components";
import { clr, fontFam, bp } from "../Global";
import { useInput } from "../hooks";

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
	Submit,
	className
}) {

	const [ state, setState ] = useState({});

	const bindToForm = (value) => setState({
		...state,
		...value
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Message sent with success !");
		console.log(state);
		window.location.reload(false);
	};

	return (
		<Form$ className={ className } onSubmit={ handleSubmit }>
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
				{ Job && (
					<Input bindToForm={ bindToForm } width="2" type="text" name="job" label="Job Title :" />
				) }
				{ CompName && (
					<Input bindToForm={ bindToForm } width="1" type="text" name="compname" label="Company Name :" />
				) }
				{ CompIndustry && (
					<Input bindToForm={ bindToForm } width="1" type="text" name="compindustry" label="Company Industry :" />
				) }
				{ Phone && (
					<Input bindToForm={ bindToForm } width="1" type="tel" name="phone" label="Phone Number :" />
				) }
				{ Country && (
					<Input bindToForm={ bindToForm } width="1" type="text" name="country" label="Country :" />
				) }
				{ Curriculum && (
					<FileInput bindToForm={ bindToForm } width="2" name="curriculum" label="Upload your curriculum :" />
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
						<textarea type={ type } name={ name } rows="8" { ...bindValue } required />
					) : (
						<input type={ type } name={ name } { ...bindValue } required />
					) }

			</label>
		</Input$>
	);
}

function FileInput({ width, label, name, bindToForm }) {

	const [ value, bindValue ] = useInput("");
	const [ displayVal, setDisplayVal ] = useState("");

	useEffect(() => {
		const splitted = value.split("\\");
		setDisplayVal(splitted[ splitted.length - 1 ]);
	}, [ value ]);

	useEffect(() => bindToForm({ [ name ]: displayVal }), [ displayVal ]);

	return (
		<Input$ className="input-wrapper" width={ width }>

			<div>
				{ label }
			</div>
			<label className="file-path-display">
				<input type="file" name={ name } id="file" className="file-input" { ...bindValue } required />
				{ displayVal }
				<div className="file-button"> Browse</div>
			</label>

		</Input$>
	);
}

export default Form;

/*****************
 * STYLING
 */

const Form$ = styled.div`
	background: ${ clr.sec };
	padding: 2.7em 3.2em;
	color: ${ clr.formFont };
	font-size: 15px;
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
		text-align: center;
		width: 100%;
		font-family: ${ fontFam.sec };
		font-weight: 600;
		font-size: 1.1em;
		letter-spacing: 0.01em;

		&::after {
			content:"";
			width:35%;
			height: 1px;
			border-radius: 20px;
			background: ${ clr.primLight };
			margin: 0.8em;
		}
	}

	@media screen and (max-width: ${ bp.tablet }){
		padding: 2em 3.5%;

		.title {
			white-space: pre;
		}
	}
	@media screen and (max-width: ${ bp.burger }){
		padding: 2.7em 2.5em;
		margin: 2rem 0;

		.title {
			white-space: normal;
		}
	}
	@media screen and (max-width: ${ bp.phone }){
		font-size: 15px;
		padding: 1.8em 5.5%;
		
		.title {
			white-space: pre;
		}
	}
`;

const Input$ = styled.div`
	display: inline-block;
	flex-direction: column;
	padding: 0.45em 0;
	width: ${ props => props.width === "1" ? "47.5%" : "100%" };

	@media screen and (max-width: ${ bp.phone }){
		width: ${ props => props.width === "1" ? "48.5%" : "100%" };
	}

	/* label */
	label {
		width: 100%;
		display: flex;
		flex-direction: column;		
	}
	input, 
	textarea {
		border : none;
		resize: none;
		font-family: ${ fontFam.sec };
		font-size: 1.05em;	
		background: #f0f0f0;
		color: ${ clr.sec };

		&:hover,
		&:focus {
			outline: 1px solid gold;
			outline-offset: 0px;
		}
	}
	input {
		line-height: 1.8em;
		height: 1.8em;
		padding: 0 0.5rem;
	}
	textarea {
		padding: 0.3em 0.5em;
	}
	.file {
		&-path-display {
			position: relative;
			background: #f0f0f0;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			color: ${ clr.sec };

			&:hover {
				outline: 1px solid gold;
				outline-offset: 0px;
			}
		}
		&-input {
			position: absolute;
			height: 100%;
			width: 100%;
			opacity: 0;
			padding: 0;
		}
		&-button {
			border: none;
			height: 1.8em;
			background: #9D9D9D;
			color: white;
			font-family: inherit;
			font-size: inherit;
			padding: 0 1em;
			font-weight: 600;
			display: flex;
			align-items: center;
			font-size: 1.1em;
			margin-left: auto;
		}
	}
`;

const Submit$ = styled(BtnContained)`
	margin-top: 1.55em;
	font-size: 1.05em;
	border-radius: inherit;
	padding:  0.5em 1.3em;

	&::after {
		content: '';
		padding-left: 0.9em;
		margin-left: 0.8em;
		background-image: url(${ props => props.iconSRC });
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		flex-shrink: 0;
	}
`;