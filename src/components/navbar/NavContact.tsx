const NavContact = () => {
	const hoverClass =
		"hover:after:content-['•'] hover:after:absolute hover:after:left-[-14px] hover:after:top-1/2 hover:after:-translate-y-1/3 hover:after:animate-bounce hover:after:text-3xl";

	return (
		<div className="flex top-1/2 -translate-y-1/2 sticky z-50 mr-4 justify-end raleway opacity-50">
			<div className="flex flex-col gap-y-4">
				<a
					href="https://github.com/ByteBiteChef"
					className={`${hoverClass} relative`}
				>
					Git
				</a>
				<a
					href="https://www.linkedin.com/in/max-robles-dev/"
					className={`${hoverClass} relative`}
				>
					In
				</a>
				<a
					href="mailto:maxirobles123@gmail.com"
					className={`${hoverClass} relative`}
				>
					Mail
				</a>
			</div>
		</div>
	);
};

export default NavContact;
