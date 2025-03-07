import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const ContactSection = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full md:w-2/3 lg:w-2/3 xl:w-2/3 px-6">
			<div className="flex flex-col w-full py-8 ">
				<h1 className="text-2xl font-bold">Contact.</h1>
				<p className="opacity-40 w-full md:w-1/2">
					Feel free to reach out if you want a to build something
					together, have a question, or just want to connect.
				</p>
				<div className="flex flex-col w-full py-2">
					<a
						className="underline font-raleway font-semibold text-lg"
						href="mailto:maxirobles123@gmail.com"
					>
						maxirobles123@gmail.com
					</a>
					<div className="flex flex-row gap-2 mt-4">
						<a
							href="https://github.com/ByteBiteChef"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IoLogoGithub className="text-xl" />
						</a>
						<a
							href="https://www.linkedin.com/in/max-robles-dev/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedinIn className="text-xl" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
