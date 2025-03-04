import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between p-4 m-10">
			<h1 className="text-2xl font-bold">Navbar</h1>
			<div className="flex items-center gap-4">
				<Link href="/">Profile</Link>
				<Link href="/about">Showcases</Link>
				<Link href="/about">Projects</Link>
				<Link href="/contact">Contact</Link>
				<button className="bg-blue-500 text-white px-4 py-2 rounded-md">
					theme toggle
				</button>
			</div>
		</div>
	);
};

export default Navbar;
