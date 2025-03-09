import React from "react";
import ProfileSection from "../components/sections/ProfileSection";
import ShowcasesSection from "../components/sections/ShowcasesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import NavButton from "../components/navbar/NavButton";
const Home = () => {
	return (
		<>
			<div className="hidden md:block lg:block xl:block">
				<section
					className="flex flex-col items-center justify-center"
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
			</div>
			<div className="md:hidden ">
				<ProfileSection />
				<ShowcasesSection />
				<ProjectsSection />
				<div className="mt-10">
					<ContactSection />
				</div>
			</div>
		</>
	);
};

export default Home;
