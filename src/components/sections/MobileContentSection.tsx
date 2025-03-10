import React from "react";
import ProfileSection from "./ProfileSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";
import ShowcasesSection from "./ShowcasesSection";

const MobileContentSection = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-20 max-[400px]:mt-20">
			<section
				id="MobileProfile"
				className="max-w-screen flex justify-center"
			>
				<ProfileSection />
			</section>
			<section
				id="MobileShowcases"
				className="max-w-screen flex justify-center"
			>
				<ShowcasesSection />
			</section>
			<section
				id="MobileProjects"
				className="max-w-screen flex justify-center max-[400px]:mt-20"
			>
				<ProjectsSection />
			</section>
			<section
				id="MobileContact"
				className="max-w-screen flex justify-center h-auto mt-40"
			>
				<ContactSection />
			</section>
		</div>
	);
};

export default MobileContentSection;
