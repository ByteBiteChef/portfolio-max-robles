import React from "react";
import ProfileSection from "./ProfileSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";
import ShowcasesSection from "./ShowcasesSection";

const MobileContentSection = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-40 max-[400px]:mt-20">
			<ProfileSection />
			<ShowcasesSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
};

export default MobileContentSection;
