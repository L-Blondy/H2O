import React, { useState, useEffect } from 'react';
import styled from "styled-components";
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
					<button width="1" type="submit" name="submit">{ Submit }</button>
				) }

			</form>
		</Form$>
	);
}

function Input({ width, type, label, name, bindToForm }) {

	const [ value, bindValue ] = useInput("");
	useEffect(() => bindToForm({ [ name ]: value }), [ value ]);

	return (
		<Input$ width={ width }>
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
	padding: 1rem;
	width: 50%;

	form {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
const Input$ = styled.div`
	display: inline-block;
	color: ${ clr.fontLight };
	font-family: ${ fontFam.sec };
	flex-direction: column;
	width: ${ props => props.width === "1" ? "48%" : "100%" };
	padding: 0.7rem 0;

	/* label */
	label {
		width: 100;
		display: flex;
		flex-direction: column;
		line-height: 1.5em;
		font-size: 16px;
	}
	input {
		border : none;
		height: 1.76rem;
	}
`;
