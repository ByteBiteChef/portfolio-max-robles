import ScrollDown from "../scrollsown";
import Image from "next/image";
const ProfileSection = () => {
	return (
		<div className="raleway flex justify-center items-center h-screen w-full">
			<div className="flex flex-col md:flex-row lg:flex-row w-full h-full justify-center items-center">
				<div className="flex flex-col gap-4 max-w-[500px]">
					<h1 className="font-bold text-2xl">
						Hello, <span className="block">My name is Max</span>
					</h1>

					<p className="text-[#999999]">
						I&apos;ve been a software developer for almost two
						years. Before that, I spent 15 years as a chef de
						cuisine, where I learned leadership, teamwork, and
						problem-solving, while also making great friends and
						memories.
					</p>
					<p className="text-[#999999]">
						My focus has been learning React, TypeScript,
						Next.js,and other technologies. I love building things
						from scratch, which is something I find exciting about
						both cooking and programming. Another similarity is
						finding simple solutions to problems that aren&apos;t
						always so simple.
					</p>
					<a
						className="cursor-pointer font-semibold text-lg underline w-fit"
						target="_blank"
						rel="noopener noreferrer"
						href="https://standardresume.co/r/SpAGtFrFekhSH_J73gpfF"
					>
						Get My Resume
					</a>
				</div>
				<div className="flex justify-end items-end w-full md:w-auto lg:w-auto xl:w-auto">
					<div className="flex flex-col justify-end items-end w-full">
						<Image
							src="/profile-photo.jpg"
							alt="Profile"
							width={500}
							height={500}
							className="w-full h-full md:px-0 lg:px-0 xl:px-0 md:w-80 md:h-80 lg:w-120 lg:h-120 xl:w-120 xl:h-120"
						/>
						<div className=" w-105 h-16 bg-[#E8E6E6] hidden lg:block"></div>
					</div>
					<div className=" w-16 h-105 bg-[#E8E6E6] hidden lg:block"></div>
				</div>
			</div>
			<ScrollDown />
		</div>
	);
};

export default ProfileSection;
