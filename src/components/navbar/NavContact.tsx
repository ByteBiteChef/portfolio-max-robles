"use client";

import { useState } from "react";

const NavContact = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const navItems = [
		{ href: "https://github.com/ByteBiteChef", label: "Git" },
		{ href: "https://www.linkedin.com/in/max-robles-dev/", label: "In" },
		{ href: "mailto:maxirobles123@gmail.com", label: "Mail" },
	];

	return (
		<div className="top-1/2 right-0 w-12 -translate-y-1/2 fixed z-20 mr-4 justify-end raleway hidden xl:block text-[#505050]">
			<div className="flex flex-col gap-y-4 relative">
				<div
					className="absolute left-[-14px] top-1/2 -translate-y-1/2 text-4xl transition-all duration-300"
					style={{ transform: `translateY(${activeIndex * 48}px)` }}
				>
					•
				</div>

				{navItems.map((item, index) => (
					<a
						key={index}
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						className="relative px-2 py-1"
						onMouseEnter={() => setActiveIndex(index - 1)} // Change dot position on hover
					>
						{item.label}
					</a>
				))}
			</div>
		</div>
	);
};

export default NavContact;
