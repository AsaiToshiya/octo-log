#!/usr/bin/env node
import { Octokit } from "@octokit/rest";

const args = process.argv.slice(2);
const [option, token] = args;

if ((option != "-t" && option != "--token") || !token) {
  console.log("octo-log (-t|--token) <token>");
  process.exit();
}

(async () => {
  const octokit = new Octokit({
    auth: token,
  });

  const logs = [];
  const repos = await octokit.repos.listForAuthenticatedUser({
    sort: "pushed",
    direction: "desc",
  });
  for (const repo of repos.data) {
    const commits = await octokit.rest.repos.listCommits({
      owner: repo.owner.login,
      repo: repo.name,
    });
    for (const commit of commits.data) {
      logs.push({
        repo: repo.name,
        sha: commit.sha,
        date: commit.commit.author.date,
        message: commit.commit.message,
      });
    }
  }
  const sortedLogs = logs
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 30);

  for (const log of sortedLogs) {
    const sha = log.sha.substr(0, 7);
    const message = log.message.split(/\r?\n/)[0];
    console.log(`${sha} (${log.repo}) ${message}`);
  }
})();
