"use client";

import React, { useEffect, useState } from "react";
import ContentSection from "@/components/sections/ContentSection";
import MobileContentSection from "@/components/sections/MobileContentSection";

const Home = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return <>{isMobile ? <MobileContentSection /> : <ContentSection />}</>;
};

export default Home;
