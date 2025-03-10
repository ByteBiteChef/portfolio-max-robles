"use client";

import React, { useState, useEffect } from "react";

const sections = ["profile", "showcases", "projects", "contact"];

const NavButton = () => {
	const [activeSection, setActiveSection] = useState("");
	const [fade, setFade] = useState(false);

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
						setFade(true);

						setTimeout(() => {
							setActiveSection(id);
							setFade(false);
						}, 500);
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
		<div className="absolute bottom-0 left-1/2 min-w-48 flex-col items-center justify-center hidden sm:flex hover:text-[#999999]">
			{activeSection === "contact" ? null : (
				<>
					<a
						href={`#${nextSection}`}
						className={`raleway uppercase transition-opacity duration-1000transition-opacity duration-1000 ${
							fade ? "opacity-0" : "opacity-100"
						}`}
					>
						{nextSection.charAt(0).toUpperCase() +
							nextSection.slice(1)}
					</a>
					<div className="vertical-line"></div>
				</>
			)}
		</div>
	);
};

export default NavButton;
