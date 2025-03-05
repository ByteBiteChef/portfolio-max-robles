"use client";

import { useEffect, useState } from "react";

const Navside = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");
		// For better highlight logic, let's set an observer threshold,
		// meaning the observer will trigger when the section is at least
		// 50% in view (you can tweak this to your liking).
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5, // 50% in view
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// If 50% of the section is in view, mark it active
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute("id");
					if (id) {
						setActiveSection(id);
					}
				}
			});
		}, observerOptions);

		// Observe each section
		sections.forEach((section) => observer.observe(section));

		// Cleanup
		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<div className="w-12 top-1/2 -translate-y-1/2 fixed z-50 ml-12 hidden xl:block">
			<div className="flex flex-col items-start ">
				<a
					href="#profile"
					className={`cursor-pointer border-b-2 hover:w-8 transition-all duration-300 h-4 mt-2 ${
						activeSection === "profile"
							? "w-9 border-black hover:w-9"
							: "w-7 border-gray-400"
					}`}
				></a>
				<a
					href="#showcases"
					className={`cursor-pointer border-b-2 hover:w-8 transition-all duration-300 h-4 mt-2 ${
						activeSection === "showcases"
							? "w-9 border-black hover:w-9"
							: "w-7 border-gray-400"
					}`}
				></a>
				<a
					href="#projects"
					className={`cursor-pointer border-b-2 hover:w-8 transition-all duration-300 h-4 mt-2 ${
						activeSection === "projects"
							? "w-9 border-black hover:w-9"
							: "w-7 border-gray-400"
					}`}
				></a>
				<a
					href="#contact"
					className={`cursor-pointer border-b-2 hover:w-8 transition-all duration-300 h-4 mt-2 ${
						activeSection === "contact"
							? "w-9 border-black hover:w-9"
							: "w-7 border-gray-400"
					}`}
				></a>
			</div>
		</div>
	);
};

export default Navside;
