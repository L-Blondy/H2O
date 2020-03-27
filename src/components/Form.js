import React from 'react';
import styled from "styled-components";
import { clr, fontFam, bp } from "../Global";

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
	return (
		<FormContainer>
			<form>

				{ Email && (
					<Input width="2" type="email" name="email" label="Email address :" />
				) }
				{ FirstName && (
					<Input width="1" type="text" name="firstname" label="First Name :" />
				) }
				{ LastName && (
					<Input width="1" type="text" name="lastname" label="Last Name :" />
				) }
				{ Position && (
					<Input width="2" type="text" name="position" label="Position you apply to :" />
				) }
				{ CompName && (
					<Input width="1" type="text" name="compname" label="Company Name :" />
				) }
				{ CompIndustry && (
					<Input width="1" type="text" name="compindustry" label="Company Industry :" />
				) }
				{ Job && (
					<Input width="2" type="text" name="job" label="Position you apply to :" />
				) }
				{ Phone && (
					<Input width="1" type="text" name="phone" label="Phone Number :" />
				) }
				{ Country && (
					<Input width="1" type="text" name="country" label="Country :" />
				) }
				{ Curriculum && (
					<Input width="2" type="text" name="curriculum" label="Upload your curriculum :" />
				) }
				{ Message && (
					<Input width="1" type="text" name="message" label="Contact Form Message :" />
				) }
				{ Submit && (
					<button width="1" type="submit" name="submit">{ Submit }</button>
				) }

			</form>
		</FormContainer>
	);
}

function Input({ width, type, label, name }) {
	return (
		<InputContainer width={ width }>
			<label>
				{ label }
				<input type={ type } name={ name } />
			</label>
		</InputContainer>
	);
}

export default Form;

const FormContainer = styled.div`
	background: ${ clr.sec };
	padding: 1rem;

	form {
		width: 100%;
	}
`;
const InputContainer = styled.div`
	display: inline-block;
	color: ${ clr.fontLight };
	font-family: ${ fontFam.sec };
	flex-direction: column;
	width: ${ props => props.width === "1" ? "calc(50% - 1rem)" : "100%" };

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
