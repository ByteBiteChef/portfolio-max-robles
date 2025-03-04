"use client";

import React, { useEffect, useState } from "react";

const Navbar = () => {
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
		<div className="raleway flex items-center justify-between p-4 mx-10 sticky top-6">
			<h1 className="text-2xl font-bold">Navbar</h1>
			<div className="flex items-center gap-4">
				<a
					href="#profile"
					className={`cursor-pointer ${
						activeSection === "profile"
							? "border-b-2 border-[#A84E4F]"
							: ""
					}`}
				>
					Profile
				</a>
				<a
					href="#showcases"
					className={`cursor-pointer ${
						activeSection === "showcases"
							? "border-b-2 border-[#A84E4F]"
							: ""
					}`}
				>
					Showcases
				</a>
				<a
					href="#projects"
					className={`cursor-pointer ${
						activeSection === "projects"
							? "border-b-2 border-[#A84E4F]"
							: ""
					}`}
				>
					Projects
				</a>
				<a
					href="#contact"
					className={`cursor-pointer ${
						activeSection === "contact"
							? "border-b-2 border-[#A84E4F]"
							: ""
					}`}
				>
					Contact
				</a>
			</div>
		</div>
	);
};

export default Navbar;
