"use client";

import { useEffect, useState } from "react";

const Navside = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["profile", "showcases", "projects", "contact"];
			let currentSection = "";

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 150 && rect.bottom >= 150) {
						currentSection = section;
						break;
					}
				}
			}

			setActiveSection(currentSection);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="flex top-1/2 -translate-y-1/2 sticky z-50 ml-4">
			<div className="flex flex-col items-start">
				<a
					href="#profile"
					className={`cursor-pointer border-b-2 hover:w-8 transition-all duration-300 h-4 mt-2 ${
						activeSection === "profile"
							? "w-9 border-black hover:w-9"
							: "w-6 border-gray-400"
					}`}
				></a>
				<a
					href="#showcases"
					className={`cursor-pointer border-b-2 hover:w-8 transition-all duration-300 h-4 mt-2 ${
						activeSection === "showcases"
							? "w-10 border-black hover:w-9"
							: "w-6 border-gray-400"
					}`}
				></a>
				<a
					href="#projects"
					className={`cursor-pointer border-b-2 hover:w-8 transition-all duration-300 h-4 mt-2 ${
						activeSection === "projects"
							? "w-9 border-black hover:w-9"
							: "w-6 border-gray-400"
					}`}
				></a>
				<a
					href="#contact"
					className={`cursor-pointer border-b-2 hover:w-8 transition-all duration-300 h-4 mt-2 ${
						activeSection === "contact"
							? "w-9 border-black hover:w-9"
							: "w-6  border-gray-400"
					}`}
				></a>
			</div>
		</div>
	);
};

export default Navside;
