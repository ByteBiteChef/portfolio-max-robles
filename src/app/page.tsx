import React from "react";

const Home = () => {
	return (
		<div className="pt-16">
			<section
				id="profile"
				className="h-screen flex flex-col items-center justify-center"
			>
				<h1 className="text-4xl font-bold">Profile Section</h1>
			</section>

			<section
				id="showcases"
				className="h-screen flex flex-col items-center justify-center"
			>
				<h1 className="text-4xl font-bold">Showcases</h1>
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
