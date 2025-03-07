import ScrollDown from "../scrollsown";
import Image from "next/image";
const ProfileSection = () => {
	return (
		<div className="raleway flex justify-center items-center h-screen w-full lg:flex-row flex-col mt-15">
			<div className="flex max-w-[500px] flex-col gap-4 p-6">
				<h1 className="font-raleway font-bold text-2xl">
					Hello, <span className="block">My name is Max</span>
				</h1>

				<p className="text-[#999999]">
					I&apos;ve been a software developer for almost two years.
					Before that, I spent 15 years as a chef de cuisine, where I
					learned leadership, teamwork, and problem-solving, while
					also making great friends and memories.
				</p>
				<p className="text-[#999999]">
					My focus has been learning React, TypeScript, Next.js,and
					other technologies. I love building things from scratch,
					which is something I find exciting about both cooking and
					programming. Another similarity is finding simple solutions
					to problems that aren&apos;t always so simple.
				</p>
				<a
					className="cursor-pointer font-raleway font-semibold text-lg underline"
					target="_blank"
					rel="noopener noreferrer"
					href="https://standardresume.co/r/SpAGtFrFekhSH_J73gpfF"
				>
					Get My Resume
				</a>
			</div>
			<div className="relative isolate">
				<div className="absolute top-30 left-30 w-120 h-120 bg-[#E8E6E6] hidden xl:block"></div>
				<div className="w-80 h-80 lg:w-125 lg:h-125 xl:w-125 xl:h-125 bg-gray-400 flex justify-center items-center relative">
					<Image src="/profile-photo.jpg" alt="Profile" fill />
				</div>
			</div>
			<ScrollDown />
		</div>
	);
};

export default ProfileSection;
