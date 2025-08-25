import { fetchGitHubContributions } from "@/lib/github";

// Simple in-memory cache with TTL per year
const cache: Record<string, { data: unknown; expiresAt: number }> = {};
const TTL_MS = 1000 * 60 * 60; // 1 hour

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
	try {
		const year = parseInt(req.query.year, 10) || new Date().getFullYear();
		const token = process.env.GITHUB_TOKEN;

		if (!token) {
			return res.status(500).json({ error: "GitHub token is missing" });
		}

		const cacheKey = String(year);
		const now = Date.now();
		const cached = cache[cacheKey];
		if (cached && cached.expiresAt > now) {
			res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=600");
			return res.status(200).json(cached.data);
		}

		const contributions = await fetchGitHubContributions(year, token);
		cache[cacheKey] = { data: contributions, expiresAt: now + TTL_MS };
		res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=600");
		res.status(200).json(contributions);
	} catch (error) {
		console.error("GitHub API Error:", error);
		res.status(500).json({ error: "Failed to fetch GitHub contributions" });
	}
}
