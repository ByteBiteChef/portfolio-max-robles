"use client";

import { useState, useEffect, useRef } from "react";

const ScrollDown = () => {
	const [activeSection, setActiveSection] = useState("");
	const [shouldRender, setShouldRender] = useState(false);
	const [animateExit, setAnimateExit] = useState(false);
	const [prevSection, setPrevSection] = useState("");

	// We'll store the timer ID so we can clear it if needed
	const exitTimerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const sectionElements = document.querySelectorAll("section[id]");
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.3, // or lower if needed
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute("id");
					if (id) {
						setActiveSection(id);
					}
				}
			});
		}, observerOptions);

		sectionElements.forEach((section) => observer.observe(section));

		return () => {
			sectionElements.forEach((section) => observer.unobserve(section));
		};
	}, []);

	useEffect(() => {
		// If we are leaving "profile":
		if (prevSection === "profile" && activeSection !== "profile") {
			setAnimateExit(true);
			// Start the 2s timer to unmount after the exit animation
			exitTimerRef.current = setTimeout(() => {
				setShouldRender(false);
				setAnimateExit(false);
				exitTimerRef.current = null;
			}, 2000);
		}

		// If we are entering "profile":
		if (activeSection === "profile") {
			// If we had a timer pending, clear it so we DON'T unmount
			if (exitTimerRef.current) {
				clearTimeout(exitTimerRef.current);
				exitTimerRef.current = null;
			}
			// Show the component (again)
			setShouldRender(true);
			// Ensure we're not stuck in exit mode
			setAnimateExit(false);
		}

		setPrevSection(activeSection);
	}, [activeSection, prevSection]);

	if (!shouldRender) {
		return null;
	}

	return (
		<div
			className="hidden sm:block"
			style={{
				position: "absolute",
				left: "40px",
				// If animateExit is true, bottom => -200px; else bottom => 0
				bottom: animateExit ? "-200px" : "0",
				transition: "bottom 2s linear",
			}}
		>
			<span className="vertical-text">SCROLLDOWN</span>
			<span className="vertical2-line mt-5 ml-2"></span>
		</div>
	);
};

export default ScrollDown;
