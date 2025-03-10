import React from "react";
import GhCard from "../card/GhCard";
import GitHubContributions from "../githubContributions/GitHubContributions";

const ProjectsSection = () => {
	const ghCard = [
		{
			title: "gymTracker",
			link: "https://github.com/ByteBiteChef/gymTrack",
			description:
				"A PWA to track your gym progress, a weekend hackaton project.",
			language: "TypeScript",
		},
		{
			title: "e-commerce-henry",
			link: "https://github.com/ByteBiteChef/e-commerce-henry",
			description:
				"A full-stack e-commerce app, a project for my bootcamp.",
			language: "TypeScript",
		},
		{
			title: "first-projects",
			link: "https://github.com/ByteBiteChef/first-projects",
			description:
				"A collection of my first projects, a way to show my progress.",
			language: "JavaScript",
		},
	];
	return (
		<div className="flex flex-col items-center justify-center h-screen w-4/5">
			<div className="flex flex-col w-full py-8">
				<h1 className="text-2xl font-bold">Projects.</h1>
				<p className="text-[#999999] w-full lg:w-1/2 ">
					Here are some projects I built during my full-stack training
					and hackathons, along with my GitHub activity. If
					you&apos;re curious, feel free to check out the code.
				</p>
			</div>
			<div className="flex flex-col lg:flex-row xl:flex-row gap-4 mb-6">
				{ghCard.map((ghCard) => (
					<GhCard ghCard={ghCard} key={ghCard.title} />
				))}
			</div>
			<GitHubContributions />
		</div>
	);
};

export default ProjectsSection;
