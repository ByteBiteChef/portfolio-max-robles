"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
	contributionCount: number;
	date: string;
}

const GitHubContributions = () => {
	const [contributions, setContributions] = useState<ContributionDay[]>([]);
	const [year, setYear] = useState(new Date().getFullYear()); // Default to current year

	useEffect(() => {
		const fetchContributions = async () => {
			const GITHUB_API_URL = "https://api.github.com/graphql";
			const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

			// Define start and end date for the selected year
			const from = `${year}-01-01T00:00:00Z`;
			const to = `${year}-12-31T23:59:59Z`;

			const query = `
        query {
          user(login: "ByteBiteChef") {
            contributionsCollection(from: "${from}", to: "${to}") {
              contributionCalendar {
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;

			try {
				const response = await fetch(GITHUB_API_URL, {
					method: "POST",
					headers: {
						"Authorization": `Bearer ${TOKEN}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ query }),
				});

				const { data } = await response.json();
				const contributionDays =
					data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
						(week: { contributionDays: ContributionDay[] }) =>
							week.contributionDays
					);

				setContributions(contributionDays);
			} catch (error) {
				console.error("Error fetching GitHub contributions:", error);
			}
		};

		fetchContributions();
	}, [year]); // Fetch data when `year` changes

	// Function to determine color intensity
	const getColor = (count: number) => {
		if (count === 0) return "bg-gray-200"; // No contributions
		if (count < 5) return "bg-green-200";
		if (count < 10) return "bg-green-400";
		if (count < 20) return "bg-green-600";
		return "bg-green-800"; // Most active
	};

	// Format data into a 7-day per row structure
	const weeks: ContributionDay[][] = [];
	for (let i = 0; i < contributions.length; i += 7) {
		weeks.push(contributions.slice(i, i + 7));
	}

	const years = Array.from(
		{ length: 3 },
		(_, i) => new Date().getFullYear() - i
	);

	return (
		<div className="flex flex-col gap-4 w-full mt-10">
			<h2 className="text-xl font-bold mb-4">My GitHub Contributions</h2>

			<div className="flex gap-4 w-full justify-between">
				<div className="flex gap-1 border p-2 rounded-md items-center">
					{weeks.map((week, weekIndex) => (
						<div key={weekIndex} className="flex flex-col gap-1">
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

				<div className="flex flex-col gap-2 text-sm w-1/2">
					{years.map((yr) => (
						<button
							key={yr}
							onClick={() => setYear(yr)}
							className={`px-4 transition py-2 ${
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
