"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");
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

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<div className="raleway flex sticky top-0">
			<div className="flex items-center justify-between w-full m-10">
				<Link href="/" className="text-2xl roboto-slab">
					Max
					<br />
					Robles.
				</Link>
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
		</div>
	);
};

export default Navbar;
