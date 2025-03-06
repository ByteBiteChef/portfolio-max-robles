import React from "react";
import GhCard from "../card/GhCard";
import GitHubContributions from "../githubContributions/GitHubContributions";

const ProjectsSection = () => {
	const ghCard = [
		{
			title: "algos.es",
			link: "https://github.com/ByteBiteChef/algos.es",
			description:
				"A website to learn algorithms and data structures in Spanish.",
			language: "TypeScript",
		},
		{
			title: "sisFed",
			link: "https://github.com/ByteBiteChef/sisFed",
			description:
				"A web app to administrate Voleyball Tucuman's Federation league.",
			language: "TypeScript",
		},
		{
			title: "gymTracker",
			link: "https://github.com/ByteBiteChef/gymTrack",
			description:
				"A PWA to track your gym progress, a weekend hackaton project.",
			language: "TypeScript",
		},
	];
	return (
		<div className="flex flex-col items-center justify-center w-full md:w-2/3 lg:w-2/3 xl:w-2/3 px-6">
			<div className="flex flex-col w-full py-8">
				<h1 className="text-2xl font-bold">Projects.</h1>
				<p className="opacity-40 w-full md:w-1/2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pulvinar et consectetur quam integer sit blandit nulla.
					Metus magna erat pretium a, tincidunt vitae.
				</p>
			</div>
			<div className="flex flex-col lg:flex-row xl:flex-row gap-4">
				{ghCard.map((ghCard) => (
					<GhCard ghCard={ghCard} key={ghCard.title} />
				))}
			</div>
			<GitHubContributions />
		</div>
	);
};

export default ProjectsSection;
