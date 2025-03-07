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
				className="flex flex-col items-center justify-center"
				id="profile"
			>
				<ProfileSection />
				<NavButton />
			</section>

			<section
				className="flex flex-col items-center justify-center"
				id="showcases"
			>
				<ShowcasesSection />
				<NavButton />
			</section>

			<section
				className="flex flex-col items-center justify-center"
				id="projects"
			>
				<ProjectsSection />
				<NavButton />
			</section>

			<section
				className="flex flex-col items-center justify-center"
				id="contact"
			>
				<ContactSection />
			</section>
		</>
	);
};

export default Home;
