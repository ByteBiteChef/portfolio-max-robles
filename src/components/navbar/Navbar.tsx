"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
	const [activeSection, setActiveSection] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

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

	const handleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<div className="raleway hidden md:flex sticky top-0">
				<div className="flex items-center justify-between w-full m-10">
					<Link
						href="/"
						className="text-2xl hidden md:block roboto-slab"
					>
						Max
						<br />
						Robles.
					</Link>
					<div className="flex items-center gap-4">
						<a
							href="#profile"
							className={`cursor-pointer hover:text-gray-500 ${
								activeSection === "profile"
									? "border-b-2 border-[#A84E4F] opacity-100"
									: "text-[#999999]"
							}`}
						>
							Profile
						</a>
						<a
							href="#showcases"
							className={`cursor-pointer hover:text-gray-500 ${
								activeSection === "showcases"
									? "border-b-2 border-[#A84E4F] opacity-100"
									: "text-[#999999]"
							}`}
						>
							Showcases
						</a>
						<a
							href="#projects"
							className={`cursor-pointer hover:text-gray-500 ${
								activeSection === "projects"
									? "border-b-2 border-[#A84E4F] opacity-100"
									: "text-[#999999]"
							}`}
						>
							Projects
						</a>
						<a
							href="#contact"
							className={`cursor-pointer hover:text-gray-500 ${
								activeSection === "contact"
									? "border-b-2 border-[#A84E4F] opacity-100"
									: "text-[#999999]"
							}`}
						>
							Contact
						</a>
					</div>
				</div>
			</div>
			<div className="raleway flex justify-between md:hidden sticky bg-white top-0 pt-10">
				<Link href={"/"} className="text-2xl roboto-slab ml-6">
					MaxRobles.
				</Link>
				<button className="mr-10" onClick={handleModal}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-black"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
				{isModalOpen && (
					<div className="absolute top-0 right-0 w-full h-screen p-10 bg-white">
						<div className="flex justify-end">
							<button onClick={handleModal}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-black"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex flex-col items-center justify-center h-full gap-4 text-2xl">
							<a
								href="#profile"
								className={`cursor-pointer hover:text-gray-500 ${
									activeSection === "profile"
										? "border-b-2 border-[#A84E4F] opacity-100"
										: "text-[#999999]"
								}`}
							>
								Profile
							</a>
							<a
								href="#showcases"
								className={`cursor-pointer hover:text-gray-500 ${
									activeSection === "showcases"
										? "border-b-2 border-[#A84E4F] opacity-100"
										: "text-[#999999]"
								}`}
							>
								Showcases
							</a>
							<a
								href="#projects"
								className={`cursor-pointer hover:text-gray-500 ${
									activeSection === "projects"
										? "border-b-2 border-[#A84E4F] opacity-100"
										: "text-[#999999]"
								}`}
							>
								Projects
							</a>
							<a
								href="#contact"
								className={`cursor-pointer hover:text-gray-500 ${
									activeSection === "contact"
										? "border-b-2 border-[#A84E4F] opacity-100"
										: "text-[#999999]"
								}`}
							>
								Contact
							</a>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Navbar;
