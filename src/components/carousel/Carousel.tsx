"use client";

import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "../card/CarouselCard";

const cardData = [
	{
		title: "Algos.es",
		bgImage: "/algos.png",
		stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
		description:
			"Algos.es is a web platform to learn algorithms and data structures in Spanish. It offers selected exercises to help users prepare for technical interviews, starting from warm-up challenges to more difficult levels. It also includes a built-in code editor, allowing users to practice and test their solutions directly on the site.",
		link: "https://algos.es",
	},
	{
		title: "FoodExpiry Reminder",
		bgImage: "/FoodExpireReminder.png",
		stack: ["React Native", "Expo", "Tailwind CSS", "TypeScript"],
		description:
			"FoodExpireReminder is a mobile app that helps users manage their food expiration dates and avoid food waste. It allows users to add food items, set expiration dates, and receive notifications when the food is about to expire.",
		link: "https://apps.apple.com/us/app/foodexpiryreminder/id6749718643",
	},
	{
		title: "Strong5x5-lite",
		bgImage: "/5x5ScreenLogo.png",
		stack: ["React Native", "CSS", "Expo", "TypeScript"],
		description:
			"Strong5x5 Lite is the easiest way to follow the classic 5x5 strength training program. Whether you’re just starting out or looking to get stronger, this app helps you log your workouts, track your progress, and stay consistent with your training.",
		link: "https://apps.apple.com/fr/app/strong5x5-lite/id6751298926?l=en-GB",
	},
	{
		title: "Administrative system",
		bgImage: "/SisFed.png",
		stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
		description:
			"A management system designed for the Volleyball Federation of Tucumán, Argentina. This ongoing project aims to streamline the administration of federated members, including players, referees, and club officials, improving organization and efficiency.",
		link: "https://sis-fed2.vercel.app/",
	},
	{
		title: "AgroManager",
		bgImage: "/agromanager.png",
		stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
		description:
			"Agromanager is a final bootcamp project designed to manage agricultural plots. It helps organize tasks, apply inputs, and track inventory, all in one platform to improve productivity.",
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
			<CarouselDots />
		</Carousel>
	);
};

export default CarouselComponent;
