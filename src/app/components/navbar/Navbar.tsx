import React from "react";

const Navbar = () => {
	return (
		<div className="raleway flex items-center justify-between p-4 mx-10 sticky top-6">
			<h1 className="text-2xl font-bold">Navbar</h1>
			<div className="flex items-center gap-4">
				<a href="#profile" className="cursor-pointer">
					Profile
				</a>
				<a href="#showcases" className=" cursor-pointer">
					Showcases
				</a>
				<a href="#projects" className="cursor-pointer">
					Projects
				</a>
				<a href="#contact" className="cursor-pointer">
					Contact
				</a>
				<button className="bg-blue-500 text-white px-4 py-2 rounded-md">
					theme toggle
				</button>
			</div>
		</div>
	);
};

export default Navbar;
