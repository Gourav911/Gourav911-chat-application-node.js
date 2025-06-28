const { execSync } = require("child_process");
const fs = require("fs");

const NUM_DAYS = 365;
const MAX_COMMITS_PER_DAY = 2;

const today = new Date();

for (let i = 0; i < NUM_DAYS; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() - i);

  const numCommits = Math.floor(Math.random() * MAX_COMMITS_PER_DAY);

  for (let j = 0; j < numCommits; j++) {
    fs.writeFileSync("file.txt", `${date.toISOString()} - ${j}\n`, { flag: "a" });

    execSync(`git add .`);
    execSync(`GIT_AUTHOR_DATE="${date.toISOString()}" GIT_COMMITTER_DATE="${date.toISOString()}" git commit -m "Commit ${i}-${j}"`);
  }
}

console.log("Done generating commits!");
