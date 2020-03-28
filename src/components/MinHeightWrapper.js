import React, { useRef, useEffect, useState } from 'react';
import styled from "styled-components";
import { getMinHeight } from "../utils";

function MinHeightWrapper({ children }) {

	const self = useRef();
	const [ minHeight, setMinHeight ] = useState();

	useEffect(() => {
		setMinHeight(getMinHeight(self.current));
	}, [ self ]);

	return (
		<MinHeightWrapper$ minHeight={ minHeight } ref={ self }>
			{ children }
		</MinHeightWrapper$>
	);
}

export default MinHeightWrapper;

/*****************
 * STYLING
 */

const MinHeightWrapper$ = styled.div`
	min-height: 90vh;
	min-height: ${ props => props.minHeight }px;
`;
