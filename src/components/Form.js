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
						<textarea type={ type } name={ name } rows="10" { ...bindValue } required />
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
	width: ${ props => props.width === "1" ? "47.5%" : "100%" };
	padding: 0.6rem 0;

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
		font-size: 16px;	
		background: white;
		color: ${ clr.sec };

		&:hover,
		&:focus {
			outline: 1px solid gold;
			outline-offset: 0px;
		}
	}
	input {
		line-height: 1.77rem;
		height: 1.77rem;
		padding: 0 0.5rem;
	}
	textarea {
		padding: 0.35rem 0.5rem;
	}
	.file {
		&-path-display {
			background: white;
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
			width: 0.1px;
			padding: 0;
		}
		&-button {
			border: none;
			height: 30px;
			background: #9D9D9D;
			color: white;
			font-family: inherit;
			font-size: inherit;
			padding: 0 1rem;
			font-weight: 600;
			display: flex;
			align-items: center;
		}
	}
`;

const Submit$ = styled(BtnContained)`
	margin-top: 2rem;
	font-size: 1rem;
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