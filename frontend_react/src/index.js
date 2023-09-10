import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

document.querySelectorAll("*").forEach((el) => {
	if (el.offsetWidth > document.documentElement.offsetWidth) {
		console.log(el);
	}
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
