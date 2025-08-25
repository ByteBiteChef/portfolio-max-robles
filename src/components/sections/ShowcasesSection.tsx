import React from "react";
import CarouselComponent from "../carousel/Carousel";
import Image from "next/image";

const ShowcasesSection = () => {
	const handleNacClick = () => {
		window.open("https://github.com/ByteBiteChef");
	};
	return (
		<div className="flex flex-col items-center justify-center h-screen w-4/5">
			<div className="flex w-full py-8 gap-6">
				<div className="w-full lg:w-2/3 xl:w-2/3">
					<h1 className="text-2xl font-bold">Showcases.</h1>
					<p className="text-[#999999]  ">
						A selection of projects I&apos;ve worked on, from
						personal builds to collaborations. Some are part of my
						professional experience, while others, like my
						full-stack bootcamp final project, were part of my
						learning process.
					</p>
				</div>
				<button
					onClick={handleNacClick}
					className="hidden xl:flex justify-end items-center w-1/3 gap-4 px-4 cursor-pointer"
				>
					<Image
						src="/profile-photo1.jpg"
						alt="Profile"
						width={64}
						height={64}
						sizes="64px"
						className="rounded-full w-16 h-16 object-cover"
					/>
					<div className="flex flex-col items-start text-[#646464]">
						<p className="roboto-slab">ByteBiteChef</p>
						<p>Max Robles</p>
					</div>
				</button>
			</div>
			<div className="flex flex-col w-full">
				<CarouselComponent />
			</div>
		</div>
	);
};

export default ShowcasesSection;
