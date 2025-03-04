import React from "react";

interface CardData {
	bgImage: string;
	title: string;
	stack1: string;
	stack2: string;
	stack3: string;
	stack4: string;
	description: string;
	link: string;
}

const Card = ({ data }: { data: CardData }) => {
	return (
		<div className="raleway flex flex-col gap-4 w-90">
			<div className="relative w-90 h-60 overflow-hidden rounded-lg group">
				<div
					className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
					style={{ backgroundImage: `url(${data.bgImage})` }}
				></div>

				<div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-70"></div>

				<div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<p className="text-lg">{data.stack1}</p>
					<p className="text-lg">{data.stack2}</p>
					<p className="text-lg">{data.stack3}</p>
					<p className="text-lg">{data.stack4}</p>
				</div>
			</div>
			<div>
				<h2 className="text-lg font-bold">{data.title}</h2>
				<p className="text-sm">{data.description}</p>
			</div>
			<a href={data.link} className="text-md">
				View project
			</a>
		</div>
	);
};

export default Card;
