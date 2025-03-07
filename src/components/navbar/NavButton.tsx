"use client";

import React, { useState, useEffect } from "react";

const sections = ["profile", "showcases", "projects", "contact"];

const NavButton = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const sectionElements = document.querySelectorAll("section[id]");
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute("id");
					if (id) {
						setActiveSection(id);
					}
				}
			});
		}, observerOptions);

		sectionElements.forEach((section) => observer.observe(section));

		return () => {
			sectionElements.forEach((section) => observer.unobserve(section));
		};
	}, []);

	const currentIndex = sections.indexOf(activeSection);
	const nextSection =
		currentIndex !== -1 && currentIndex < sections.length - 1
			? sections[currentIndex + 1]
			: sections[0];

	return (
		<>
			<a href={`#${nextSection}`} className="raleway uppercase">
				{nextSection.charAt(0).toUpperCase() + nextSection.slice(1)}
			</a>
			<div className="vertical-line"></div>
		</>
	);
};

export default NavButton;
