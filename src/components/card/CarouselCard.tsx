"use client";

import React from "react";
import Image from "next/image";

interface CardData {
	bgImage: string;
	title: string;
	stack: string[];
	description: string;
	link: string;
}

const Card = ({ data }: { data: CardData }) => {
	const handleMobileClick = () => {
		// Only handle click on mobile/tablet (screen width < 1024px)
		if (window.innerWidth < 1024) {
			window.open(data.link, "_blank", "noopener,noreferrer");
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		// Handle keyboard navigation for accessibility on mobile
		if (window.innerWidth < 1024 && (e.key === "Enter" || e.key === " ")) {
			e.preventDefault();
			window.open(data.link, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<div className="raleway flex flex-col gap-4 w-full">
			<div
				className="relative min-h-45 max-h-42 border rounded-lg group overflow-hidden lg:cursor-default cursor-pointer"
				onClick={handleMobileClick}
				onKeyDown={handleKeyDown}
				role="button"
				tabIndex={0}
				aria-label={`Open ${data.title} project`}
			>
				<Image
					src={data.bgImage}
					alt={data.title}
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					className="object-cover transition-transform duration-500 group-hover:scale-110"
					priority={false}
				/>

				{/* Overlay - only show on desktop hover */}
				<div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 lg:group-hover:opacity-70"></div>

				{/* Tech stack - only show on desktop hover */}
				<div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
					{data.stack?.map((item, index) => (
						<p key={index} className="text-lg underline">
							{item}
						</p>
					))}
				</div>
			</div>
			<div className="flex flex-col justify-between gap-2 p-2 min-h-[210px]">
				<div>
					<h2 className="text-lg font-bold my-2">{data.title}</h2>
					<p className="text-sm text-[#999999]">{data.description}</p>
				</div>
				<a
					href={data.link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-md w-32 hover:underline focus:underline focus:outline-none"
				>
					VIEW PROJECT
				</a>
			</div>
		</div>
	);
};

export default Card;
