import { useState } from 'react';

function useInput(defaultValue) {
	const [ value, setValue ] = useState(defaultValue);
	const handleChange = (e) => setValue(e.target.value);

	return [
		value,
		{ value, onChange: handleChange }
	];
}

export default useInput;