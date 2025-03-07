import React from "react";
import CarouselComponent from "../carousel/Carousel";

const ShowcasesSection = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-full md:w-2/3 lg:w-2/3 xl:w-2/3 px-6">
			<div className="flex flex-col w-full py-8">
				<h1 className="text-2xl font-bold">Showcases.</h1>
				<p className="text-[#999999] w-full lg:w-1/2 ">
					A selection of projects I&apos;ve worked on, from personal
					builds to collaborations. Some are part of my professional
					experience, while others, like my full-stack bootcamp final
					project, were part of my learning process.
				</p>
			</div>
			<div className="flex flex-col w-full">
				<CarouselComponent />
			</div>
		</div>
	);
};

export default ShowcasesSection;
