import React from "react";
import dynamic from "next/dynamic";
import NavButton from "../navbar/NavButton";
import ProfileSection from "./ProfileSection";

// Lazy load below-the-fold sections to improve initial render
const ShowcasesSection = dynamic(() => import("./ShowcasesSection"), {
	ssr: false,
	loading: () => (
		<div className="w-full h-[60vh] flex items-center justify-center">
			Loading…
		</div>
	),
});

const ProjectsSection = dynamic(() => import("./ProjectsSection"), {
	ssr: false,
	loading: () => (
		<div className="w-full h-[60vh] flex items-center justify-center">
			Loading…
		</div>
	),
});

const ContactSection = dynamic(() => import("./ContactSection"), {
	ssr: false,
	loading: () => (
		<div className="w-full h-[60vh] flex items-center justify-center">
			Loading…
		</div>
	),
});

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
