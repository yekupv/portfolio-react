import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		document.querySelectorAll("*").forEach((el) => {
			if (el.offsetWidth > document.documentElement.offsetWidth) {
				console.log(el);
			}
		});
		return (
			<div id={idName} className={`app__container ${classNames}`} style={{}}>
				<SocialMedia />
				<div className="app__wrapper app__flex">
					<Component />
				</div>
				<NavigationDots active={idName} />
			</div>
		);
	};

export default AppWrap;
