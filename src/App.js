import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, Parallax, MobileNav } from "./components";
import Context from "./Context";
import * as Page from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Context>
				<MobileNav />

				<Parallax>
					<Navbar />

					<Switch>
						<Route exact path="/" render={ () => (
							<Page.Home />
						) } />
						<Route exact path="/solutions" render={ () => (
							<Page.Solutions />
						) } />
						<Route exact path="/case-studies" render={ () => (
							<Page.CaseStudies />
						) } />
						<Route exact path="/our-team" render={ () => (
							<Page.OurTeam />
						) } />
						<Route exact path="/join" render={ () => (
							<Page.Join />
						) } />
						<Route exact path="/contact" render={ () => (
							<Page.Contact />
						) } />
					</Switch>

					<Footer />
				</Parallax>
			</Context>
		</BrowserRouter>
	);
}

export default App;

