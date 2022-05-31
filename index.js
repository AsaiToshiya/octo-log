#!/usr/bin/env node
import { Octokit } from "@octokit/rest";

const RESET = "\x1b[0m";
const YELLOW = "\x1b[33m";

const COUNT = 30;

const fetchLogs = async (token, author) => {
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
      ).data.map(async ({ owner, name }) =>
        (
          await octokit.rest.repos.listCommits({
            owner: owner.login,
            repo: name,
            author: author ? author : undefined,
          })
        ).data.map(({ sha, commit }) => ({
          repo: name,
          sha,
          date: commit.author.date,
          message: commit.message,
        }))
      )
    )
  ).flat();
};

const args = process.argv.slice(2);
const [option1, value1, option2, value2] = args;
const token =
  option1 == "-t" || option1 == "--token"
    ? value1
    : option2 == "-t" || option2 == "--token"
    ? value2
    : null;
const author =
  option1 == "--author" ? value1 : option2 == "--author" ? value2 : null;

if (!token || (args.includes("--author") && !author)) {
  console.log("octo-log (-t|--token) <token> [--author <author>]");
  process.exit();
}

(async () => {
  const logs = (await fetchLogs(token, author))
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
