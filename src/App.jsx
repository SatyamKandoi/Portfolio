import React from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
const App = () => {
	return (
		<div style={{ marginBottom: "100px", padding: "5px" }}>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Portfolio />
			<Contact />
		</div>
	);
};

export default App;
