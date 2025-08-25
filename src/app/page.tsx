"use client";

import React, { useEffect, useState } from "react";
import ContentSection from "@/components/sections/ContentSection";
import MobileContentSection from "@/components/sections/MobileContentSection";

const MOBILE_QUERY = "(max-width: 767px)";

const Home = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined" || !window.matchMedia) return;
		const mediaQuery = window.matchMedia(MOBILE_QUERY);
		const onChange = (event: MediaQueryListEvent | MediaQueryList) => {
			setIsMobile(
				"matches" in event
					? event.matches
					: (event as MediaQueryList).matches
			);
		};

		// Initialize
		onChange(mediaQuery);

		// Subscribe
		if ("addEventListener" in mediaQuery) {
			mediaQuery.addEventListener(
				"change",
				onChange as (e: Event) => void
			);
		} else {
			// Safari
			// @ts-expect-error old API for Safari
			mediaQuery.addListener(onChange);
		}

		return () => {
			if ("removeEventListener" in mediaQuery) {
				mediaQuery.removeEventListener(
					"change",
					onChange as (e: Event) => void
				);
			} else {
				// Safari
				// @ts-expect-error old API for Safari
				mediaQuery.removeListener(onChange);
			}
		};
	}, []);

	return <>{isMobile ? <MobileContentSection /> : <ContentSection />}</>;
};

export default Home;
