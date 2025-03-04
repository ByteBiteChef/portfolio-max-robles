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
		bgImage:
			"https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		stack1: "React",
		stack2: "Next.js",
		stack3: "Tailwind CSS",
		stack4: "TypeScript",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et consectetur quam integer sit blandit nulla. Metus magna erat pretium a, tincidunt vitae.",
		link: "https://algos.es",
	},
	{
		title: "Algos.es",
		bgImage:
			"https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		stack1: "React",
		stack2: "Next.js",
		stack3: "Tailwind CSS",
		stack4: "TypeScript",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et consectetur quam integer sit blandit nulla. Metus magna erat pretium a, tincidunt vitae.",
		link: "https://algos.es",
	},
	{
		title: "Algos.es",
		bgImage:
			"https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		stack1: "React",
		stack2: "Next.js",
		stack3: "Tailwind CSS",
		stack4: "TypeScript",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et consectetur quam integer sit blandit nulla. Metus magna erat pretium a, tincidunt vitae.",
		link: "https://algos.es",
	},
	{
		title: "Algos.es",
		bgImage:
			"https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		stack1: "React",
		stack2: "Next.js",
		stack3: "Tailwind CSS",
		stack4: "TypeScript",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et consectetur quam integer sit blandit nulla. Metus magna erat pretium a, tincidunt vitae.",
		link: "https://algos.es",
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
