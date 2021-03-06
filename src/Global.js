import { createGlobalStyle } from "styled-components";

export const fontFam = {
	prim: "'Mina', sans-serif",
	sec: "'Montserrat', sans-serif"
};
export const clr = {
	prim: "#0C8890",
	sec: "#434747",
	primLight: "#00CACA",
	primDark: "#005A5A",
	sectionTitle: "#6F8181",
	navlinks: "#5A6060",
	bigSize: "#6a7b7b",
	fontLight: "#f1f1f1",
	formFont: "#eeeeee",
	lightGradient: "linear-gradient(90deg, #f0f0f0 0%, #fefefe 50%, #f0f0f0 100%)",
	bannerGradient: "linear-gradient(90deg, #0B757C 0%, #0C8891 51.04%, #0B757C 100%)"
};
export const bp = {
	phone: "576px",
	tablet: "1100px",
	burger: "767.8px"
};

export const GlobalStyle = createGlobalStyle`
	:root {
		font-size: 106.25%;
	}

	*,
	*::after,
	*::before {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body,
	html {
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	button:hover {
		cursor: pointer;
	}

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
		white-space: nowrap;
	}

	b {
		color: ${ clr.prim };
	}
	
	.parallax {
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;

		@media screen  and (min-width:1200px) and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
			perspective: 1px;
		}
		@-moz-document url-prefix() { 
			perspective: 1px;
		}
	}

	.min-height {
		min-height: 90vh;
		min-height: ${ props => props.minHeight }px;
	}
		
	.fadeFromTop {
		opacity: 0;
		animation: fadeFromTop 500ms forwards;
	}

	@keyframes fadeFromTop {
		from {
			opacity: 0;
			transform: translateY(-100px);
		}

		to {
			opacity: 1;
			transform: translateY(0)
		}
	}
`;