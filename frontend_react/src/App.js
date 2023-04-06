import React from "react";

import {
	About,
	About_cv,
	Footer,
	Header,
	Skills,
	Testimonial,
	Work,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
	<div className='app'>
		<Navbar />
		<Header />
		<About />
		<Work />
		<Skills />
		<About_cv />
		<Footer />
	</div>
);

export default App;
