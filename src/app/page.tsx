import React from "react";
import CarouselComponent from "../components/carousel/Carousel";

const Home = () => {
	return (
		<div>
			<section id="profile" className="h-screen flex justify-center">
				<div className="raleway flex justify-center items-center">
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
						<div className="absolute top-30 left-30 w-120 h-120 bg-[#E8E6E6] -z-10"></div>

						<div className="w-125 h-125 bg-gray-400 flex justify-center items-center relative z-10">
							Profile image
						</div>
					</div>
				</div>
			</section>

			<section id="showcases" className="h-screen flex justify-center">
				<div className="flex flex-col items-center justify-center">
					<div className="flex w-full p-8">
						<h1 className="text-4xl font-bold">Showcases</h1>
					</div>
					<CarouselComponent />
				</div>
			</section>

			<section
				id="projects"
				className="h-screen flex flex-col items-center justify-center"
			>
				<h1 className="text-4xl font-bold">Projects</h1>
			</section>

			<section
				id="contact"
				className="h-screen flex flex-col items-center justify-center"
			>
				<h1 className="text-4xl font-bold">Contact</h1>
			</section>
		</div>
	);
};

export default Home;
