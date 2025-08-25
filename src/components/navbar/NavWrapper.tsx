"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Navside from "./Navside";

const NavWrapper = () => {
	const pathname = usePathname();
	const hideNav = pathname?.toLowerCase().startsWith("/sisfed");

	if (hideNav) return null;

	return (
		<>
			<Navbar />
			<Navside />
		</>
	);
};

export default NavWrapper;
