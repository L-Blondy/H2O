import 'element-scroll-polyfill';
import { GlobalStyle } from "#/Global";
import React from "react";
import ReactDOM from "react-dom";
import App from "#/App";

ReactDOM.render((
	<>
		<GlobalStyle />
		<App />
	</>
), document.getElementById("root"));