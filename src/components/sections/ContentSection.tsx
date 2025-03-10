import React from "react";
import NavButton from "../navbar/NavButton";
import ContactSection from "./ContactSection";
import ProfileSection from "./ProfileSection";
import ProjectsSection from "./ProjectsSection";
import ShowcasesSection from "./ShowcasesSection";

const ContentSection = () => {
	return (
		<>
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
		</>
	);
};

export default ContentSection;
