import React from "react";
import CarouselComponent from "../carousel/Carousel";

const ShowcasesSection = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-full md:w-2/3 lg:w-2/3 xl:w-2/3 px-6">
			<div className="flex flex-col w-full py-8">
				<h1 className="text-2xl font-bold">Showcases.</h1>
				<p className="opacity-40 w-full md:w-1/2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pulvinar et consectetur quam integer sit blandit nulla.
					Metus magna erat pretium a, tincidunt vitae.
				</p>
			</div>
			<div className="flex flex-col w-full">
				<CarouselComponent />
			</div>
		</div>
	);
};

export default ShowcasesSection;
