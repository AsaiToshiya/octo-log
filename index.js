#!/usr/bin/env node
import { Octokit } from "@octokit/rest";

const RESET = "\x1b[0m";
const YELLOW = "\x1b[33m";

const COUNT = 30;

const fetchLogs = async (token) => {
  const octokit = new Octokit({
    auth: token,
  });

  return (
    await Promise.all(
      (
        await octokit.repos.listForAuthenticatedUser({
          sort: "pushed",
          direction: "desc",
        })
      ).data.map(async (repo) =>
        (
          await octokit.rest.repos.listCommits({
            owner: repo.owner.login,
            repo: repo.name,
          })
        ).data.map((commit) => ({
          repo: repo.name,
          sha: commit.sha,
          date: commit.commit.author.date,
          message: commit.commit.message,
        }))
      )
    )
  ).flat();
};

const args = process.argv.slice(2);
const [option, token] = args;

if ((option != "-t" && option != "--token") || !token) {
  console.log("octo-log (-t|--token) <token>");
  process.exit();
}

(async () => {
  const logs = (await fetchLogs(token))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, COUNT);

  for (const log of logs) {
    const hash = log.sha.substr(0, 7);
    const message = log.message.split(/\r?\n/)[0];
    console.log(
      `${YELLOW}${hash} (${RESET}${log.repo}${YELLOW})${RESET} ${message}`
    );
  }
})();
