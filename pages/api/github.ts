import { fetchGitHubContributions } from "@/lib/github";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
try {
		const year = parseInt(req.query.year, 10) || new Date().getFullYear();
		const token = process.env.GITHUB_TOKEN;

		if (!token) {
			return res.status(500).json({ error: "GitHub token is missing" });
		}

		const contributions = await fetchGitHubContributions(year, token);
		res.status(200).json(contributions);
	} catch (error) {
		console.error("GitHub API Error:", error);
		res.status(500).json({ error: "Failed to fetch GitHub contributions" });
	}
}
