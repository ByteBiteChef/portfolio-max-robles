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
			"Algos.es is a web platform to learn algorithms and data structures in Spanish. It offers selected exercises to help users prepare for technical interviews, starting from warm-up challenges to more difficult levels. It also includes a built-in code editor, allowing users to practice and test their solutions directly on the site.",
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
			"Argentometro is an engaging and interactive quiz game. This app offers a variety of questions across multiple categories of Argentinian culture, challenging players with timed questions, levels, and rewards.",
		link: "https://play.google.com/store/apps/details?id=com.nunyvega.argentometro&pcampaignid=web_share",
	},
	{
		title: "Administrative system",
		bgImage: "/SisFed.png",
		stack1: "React",
		stack2: "Next.js",
		stack3: "Tailwind CSS",
		stack4: "TypeScript",
		description:
			"A management system designed for the Volleyball Federation of Tucumán, Argentina. This ongoing project aims to streamline the administration of federated members, including players, referees, and club officials, improving organization and efficiency.",
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
			"Agromanager is a final bootcamp project designed to manage agricultural plots. It helps organize tasks, apply inputs, and track inventory, all in one platform to improve productivity",
		link: "https://agromanager.vercel.app/",
	},
];

const CarouselComponent = () => {
	return (
		<Carousel className="w-full items-center">
			<CarouselContent>
				{cardData.map((data, index) => (
					<CarouselItem
						className="sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
						key={index}
					>
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
