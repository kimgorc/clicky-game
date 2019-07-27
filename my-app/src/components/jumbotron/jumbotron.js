//sets up the reusable Jumbotron component
import React from "react";
import "./jumbotron.css";

const jumbotron = () => (
	<header className = "header">
		<h1>Bob's Burgers Clicky Game!</h1>
		<h2>Click on any character to earn a point, but don't click on the same character twice. Click all 12 pics, and you win.</h2>
	</header>
);
export default jumbotron;
