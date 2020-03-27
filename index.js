import 'element-scroll-polyfill';
import { GlobalStyle } from "./src/Global";
import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";

ReactDOM.render((
	<>
		<GlobalStyle />
		<App />
	</>
), document.getElementById("root"));