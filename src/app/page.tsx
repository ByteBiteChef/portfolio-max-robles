import React from "react";
import CarouselComponent from "../components/carousel/Carousel";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import GhCard from "../components/card/GhCard";
import GitHubContributions from "../components/githubContributions/GitHubContributions";
const Home = () => {
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
		<div>
			<section id="profile" className="h-screen flex justify-center">
				<div className="raleway flex justify-center items-center h-screen w-full lg:flex-row flex-col">
					<div className="flex max-w-[500px] flex-col gap-4 p-6">
						<h1 className="font-raleway font-bold text-2xl">
							Hello, <span className="block">My name is Max</span>
						</h1>

						<p className="opacity-40">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Pulvinar et consectetur quam integer sit
							blandit nulla. Metus magna erat pretium a, tincidunt
							vitae.
						</p>
						<p className="opacity-40">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Pulvinar et consectetur quam integer sit
							blandit nulla. Metus magna erat pretium a, tincidunt
							vitae.
						</p>
						<a
							className="cursor-pointer font-raleway font-semibold text-lg underline"
							href="https://standardresume.co/r/SpAGtFrFekhSH_J73gpfF"
						>
							Get My Resume
						</a>
					</div>
					<div className="relative">
						<div className="absolute top-30 left-30 w-120 h-120 bg-[#E8E6E6] hidden xl:block"></div>
						<div className="w-80 h-80 sm:w-100 sm:h-100 md:w-125 md:h-125 lg:w-125 lg:h-125 xl:w-125 xl:h-125 bg-gray-400 flex justify-center items-center relative">
							Profile image
						</div>
					</div>
				</div>
			</section>

			<section
				id="showcases"
				className="raleway h-screen flex justify-center"
			>
				<div className="flex flex-col items-center justify-center w-full md:w-2/3 lg:w-2/3 xl:w-2/3 px-6">
					<div className="flex flex-col w-full py-8">
						<h1 className="text-2xl font-bold">Showcases.</h1>
						<p className="opacity-40 w-full md:w-1/2">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Pulvinar et consectetur quam integer sit
							blandit nulla. Metus magna erat pretium a, tincidunt
							vitae.
						</p>
					</div>
					<div className="flex flex-col w-full">
						<CarouselComponent />
					</div>
				</div>
			</section>

			<section
				id="projects"
				className="raleway h-screen flex justify-center"
			>
				<div className="flex flex-col items-center justify-center w-full md:w-2/3 lg:w-2/3 xl:w-2/3 px-6">
					<div className="flex flex-col w-full py-8">
						<h1 className="text-2xl font-bold">Projects.</h1>
						<p className="opacity-40 w-full md:w-1/2">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Pulvinar et consectetur quam integer sit
							blandit nulla. Metus magna erat pretium a, tincidunt
							vitae.
						</p>
					</div>
					<div className="flex flex-col lg:flex-row xl:flex-row gap-4">
						{ghCard.map((ghCard) => (
							<GhCard ghCard={ghCard} key={ghCard.title} />
						))}
					</div>
					<GitHubContributions />
				</div>
			</section>

			<section
				id="contact"
				className="raleway h-screen flex justify-center"
			>
				<div className="flex flex-col items-center justify-center w-full md:w-2/3 lg:w-2/3 xl:w-2/3 px-6">
					<div className="flex flex-col w-full py-8 ">
						<h1 className="text-2xl font-bold">Contact.</h1>
						<p className="opacity-40 w-full md:w-1/2">
							Feel free to reach out if you want a to build
							something together, have a question, or just want to
							connect.
						</p>
						<div className="flex flex-col w-full py-2">
							<a
								className="underline font-raleway font-semibold text-lg"
								href="mailto:maxirobles123@gmail.com"
							>
								maxirobles123@gmail.com
							</a>
							<div className="flex flex-row gap-2 mt-4">
								<a href="https://github.com/ByteBiteChef">
									<IoLogoGithub className="text-xl" />
								</a>
								<a href="https://www.linkedin.com/in/max-robles-dev/">
									<FaLinkedinIn className="text-xl" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
