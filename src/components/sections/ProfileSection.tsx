const ProfileSection = () => {
	return (
		<div className="raleway flex justify-center items-center h-screen w-full lg:flex-row flex-col">
			<div className="flex max-w-[500px] flex-col gap-4 p-6">
				<h1 className="font-raleway font-bold text-2xl">
					Hello, <span className="block">My name is Max</span>
				</h1>

				<p className="opacity-40">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pulvinar et consectetur quam integer sit blandit nulla.
					Metus magna erat pretium a, tincidunt vitae.
				</p>
				<p className="opacity-40">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pulvinar et consectetur quam integer sit blandit nulla.
					Metus magna erat pretium a, tincidunt vitae.
				</p>
				<a
					className="cursor-pointer font-raleway font-semibold text-lg underline"
					href="https://standardresume.co/r/SpAGtFrFekhSH_J73gpfF"
				>
					Get My Resume
				</a>
			</div>
			<div className="relative isolate">
				<div className="absolute top-30 left-30 w-120 h-120 bg-[#E8E6E6] hidden xl:block"></div>
				<div className="w-80 h-80 sm:w-100 md:w-125 lg:w-125 lg:h-125 xl:w-125 xl:h-125 bg-gray-400 flex justify-center items-center relative">
					Profile image
				</div>
			</div>
		</div>
	);
};

export default ProfileSection;
