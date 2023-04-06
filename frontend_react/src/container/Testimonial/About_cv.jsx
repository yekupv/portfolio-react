import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import cv from "../../assets/Yakupov_cv.pdf";
import "./About_cv.scss";

const About_cv = () => {
	const [about, setAbout] = useState({});

	useEffect(() => {
		const query = '*[_type == "about_cv"]';

		client.fetch(query).then((data) => {
			setAbout(data[0]);
		});
	}, []);

	return (
		<>
			<div className='app__flex'>
				<button className='primary-button'>
					<a
						className='p-text'
						href={
							"https://docs.google.com/document/d/16IylNvEa5SDfHMSyXSfWKu8kldN0ce4bRp76HH3cMPo/edit?usp=sharing"
						}
						target='_blank'
					>
						CV
					</a>
				</button>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(About_cv, "app__testimonial"),
	"CV",
	"app__primarybg"
);
