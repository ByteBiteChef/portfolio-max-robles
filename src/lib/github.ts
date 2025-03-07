export const fetchGitHubContributions = async (year: number, token: string) => {
    const GITHUB_API_URL = "https://api.github.com/graphql";

    if (!token) {
        throw new Error("GitHub token is missing");
    }

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

    const response = await fetch(GITHUB_API_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error("GitHub API request failed");
    }

    const { data } = await response.json();
    return data?.user?.contributionsCollection?.contributionCalendar?.weeks.flatMap(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (week: { contributionDays: any[] }) => week.contributionDays
    );
};
