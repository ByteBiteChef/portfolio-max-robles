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
		<div className="raleway flex items-center justify-between p-12 sticky top-0">
			<a href="/" className="text-2xl font-bold">
				Max
				<br />
				Robles.
			</a>
			<div className="flex items-center gap-4">
				<a
					href="#profile"
					className={`cursor-pointer ${
						activeSection === "profile"
							? "border-b-2 border-[#A84E4F] opacity-100"
							: "opacity-50"
					}`}
				>
					Profile
				</a>
				<a
					href="#showcases"
					className={`cursor-pointer ${
						activeSection === "showcases"
							? "border-b-2 border-[#A84E4F] opacity-100"
							: "opacity-50"
					}`}
				>
					Showcases
				</a>
				<a
					href="#projects"
					className={`cursor-pointer ${
						activeSection === "projects"
							? "border-b-2 border-[#A84E4F] opacity-100"
							: "opacity-50"
					}`}
				>
					Projects
				</a>
				<a
					href="#contact"
					className={`cursor-pointer ${
						activeSection === "contact"
							? "border-b-2 border-[#A84E4F] opacity-100"
							: "opacity-50"
					}`}
				>
					Contact
				</a>
			</div>
		</div>
	);
};

export default Navbar;
