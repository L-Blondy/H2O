import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Context from "./Context";
import { Footer, MobileNav, Navbar, Parallax, ScrollToTop } from "./components";
import * as Page from "./pages";
import { loadPlaceholders } from "./utils";

function App() {

	loadPlaceholders();

	return (
		<BrowserRouter>
			<Context>
				<MobileNav />

				<Parallax className="parallax">
					<Navbar />

					<Switch>
						<Route exact path="/" render={ () => (
							<Page.Home />
						) } />
						<Route exact path="/solutions" render={ () => (
							<Page.Solutions />
						) } />
						<Route exact path="/solutions/:sol" render={ () => (
							<Page.SolutionPresentation />
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
				<ScrollToTop />
			</Context>
		</BrowserRouter>
	);
}

export default App;

