interface GhCardProps {
	ghCard: {
		title: string;
		link: string;
		description: string;
		language: string;
	};
}

const GhCard = ({ ghCard }: GhCardProps) => {
	return (
		<div className="flex flex-col w-full h-36 border rounded-sm p-4 justify-between text-sm">
			<div className="flex gap-2">
				<div className="flex items-center gap-2">
					{repoIcon}
					<a
						className="underline text-blue-500 font-semibold"
						href={`${ghCard.link}`}
					>
						{`${ghCard.title}`}
					</a>
				</div>
			</div>
			<p className="text-[#999999]">{`${ghCard.description}`}</p>
			<div className="flex items-center gap-2">
				<div
					className={`w-2 h-2  rounded-full ${
						ghCard.language === "TypeScript"
							? "bg-blue-500"
							: ghCard.language === "Python"
							? "bg-yellow-500"
							: ghCard.language === "JavaScript"
							? "bg-yellow-500"
							: ghCard.language === "HTML"
							? "bg-red-500"
							: "bg-gray-500"
					}`}
				></div>
				<p>{`${ghCard.language}`}</p>
			</div>
		</div>
	);
};

export default GhCard;

const repoIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="18"
		viewBox="0 0 16 16"
		fill="currentColor"
	>
		<path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
	</svg>
);
