import React from "react";
import ProfileSection from "../components/sections/ProfileSection";
import ShowcasesSection from "../components/sections/ShowcasesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import NavButton from "../components/navbar/NavButton";
const Home = () => {
	return (
		<>
			<section
				className="flex flex-col items-center justify-center p-6 overflow-auto"
				id="profile"
			>
				<ProfileSection />
			</section>

			<section
				className="flex flex-col items-center justify-center"
				id="showcases"
			>
				<ShowcasesSection />
			</section>

			<section
				className="flex flex-col items-center justify-center"
				id="projects"
			>
				<ProjectsSection />
			</section>

			<section
				className="flex flex-col items-center justify-center"
				id="contact"
			>
				<ContactSection />
			</section>
			<NavButton />
		</>
	);
};

export default Home;
