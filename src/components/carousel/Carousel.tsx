"use client";

import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "../card/CarouselCard";

const cardData = [
	{
		title: "Algos.es",
		bgImage: "/algos.png",
		stack1: "React",
		stack2: "Next.js",
		stack3: "Tailwind CSS",
		stack4: "TypeScript",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et consectetur quam integer sit blandit nulla. Metus magna erat pretium a, tincidunt vitae.",
		link: "https://algos.es",
	},
	{
		title: "Argentometro",
		bgImage: "/argentometro.png",
		stack1: "React Native",
		stack2: "",
		stack3: "CSS",
		stack4: "JavaScript",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et consectetur quam integer sit blandit nulla. Metus magna erat pretium a, tincidunt vitae.",
		link: "https://play.google.com/store/apps/details?id=com.nunyvega.argentometro&pcampaignid=web_share",
	},
	{
		title: "Administrtor sistem",
		bgImage: "/SisFed.png",
		stack1: "React",
		stack2: "Next.js",
		stack3: "Tailwind CSS",
		stack4: "TypeScript",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et consectetur quam integer sit blandit nulla. Metus magna erat pretium a, tincidunt vitae.",
		link: "https://sis-fed.vercel.app/",
	},
	{
		title: "AgroManager",
		bgImage: "/agromanager.png",
		stack1: "React",
		stack2: "Next.js",
		stack3: "Tailwind CSS",
		stack4: "TypeScript",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et consectetur quam integer sit blandit nulla. Metus magna erat pretium a, tincidunt vitae.",
		link: "https://agromanager.vercel.app/",
	},
];

const CarouselComponent = () => {
	return (
		<Carousel className="w-full items-center">
			<CarouselContent>
				{cardData.map((data, index) => (
					<CarouselItem className="basis-1/4" key={index}>
						<CarouselCard data={data} />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default CarouselComponent;
