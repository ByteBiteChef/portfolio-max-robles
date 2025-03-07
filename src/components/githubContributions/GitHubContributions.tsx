"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
	contributionCount: number;
	date: string;
}

const GitHubContributions = () => {
	const [contributions, setContributions] = useState<ContributionDay[]>([]);
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		const fetchContributions = async () => {
			try {
				const response = await fetch(`/api/github?year=${year}`);
				if (!response.ok) {
					throw new Error("Failed to fetch contributions");
				}
				const data = await response.json();
				setContributions(data);
			} catch (error) {
				console.error("Error fetching GitHub contributions:", error);
			}
		};

		fetchContributions();
	}, [year]);

	// Function to determine color intensity
	const getColor = (count: number) => {
		if (count === 0) return "bg-gray-200";
		if (count < 5) return "bg-green-200";
		if (count < 10) return "bg-green-400";
		if (count < 20) return "bg-green-600";
		return "bg-green-800";
	};

	const weeks: ContributionDay[][] = [];
	for (let i = 0; i < contributions.length; i += 7) {
		weeks.push(contributions.slice(i, i + 7));
	}

	const monthLabels: { name: string; index: number }[] = [];
	contributions.forEach((day, index) => {
		const month = new Date(day.date).toLocaleString("default", {
			month: "short",
		});
		if (
			monthLabels.length === 0 ||
			monthLabels[monthLabels.length - 1].name !== month
		) {
			monthLabels.push({ name: month, index });
		}
	});

	const years = Array.from(
		{ length: 3 },
		(_, i) => new Date().getFullYear() - i
	);

	return (
		<div className="flex-col w-full mt-10 hidden xl:block">
			<h2 className="text-xl font-bold mb-4 font-raleway">
				My GitHub Contributions.
			</h2>

			<div className="flex gap-4 w-full justify-between">
				<div className="flex border p-1 rounded-md overflow-x-hidden md:overflow-x-auto custom-scrollbar">
					<div>
						<div className="flex text-xs font-medium text-gray-500 ml-10">
							{monthLabels.map((month) => (
								<div
									key={month.name}
									className="mr-6"
									style={{
										marginLeft: `${month.index * 0.25}px`,
									}}
								>
									{month.name}
								</div>
							))}
						</div>
						<div className="flex gap-1 p-2">
							{weeks.map((week, weekIndex) => (
								<div
									key={weekIndex}
									className="flex flex-col gap-1"
								>
									{week.map((day, dayIndex) => (
										<div
											key={dayIndex}
											className={`w-4 h-4 rounded ${getColor(
												day.contributionCount
											)}`}
											title={`${day.date}: ${day.contributionCount} contributions`}
										></div>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-col p-2 gap-2 text-sm">
					{years.map((yr) => (
						<button
							key={yr}
							onClick={() => setYear(yr)}
							className={`h-8 w-32 ${
								year === yr
									? "bg-blue-500 text-white rounded-sm"
									: ""
							}`}
						>
							{yr}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default GitHubContributions;
