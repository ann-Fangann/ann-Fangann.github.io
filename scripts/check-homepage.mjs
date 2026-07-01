import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const root = process.cwd();
const indexPath = path.join(root, "index.html");
const html = fs.readFileSync(indexPath, "utf8");

const requiredSnippets = [
  "AI Agent",
  "LLM 应用开发",
  "Agentic Workflow",
  "Tool Calling",
  "Function Calling",
  "RAG",
  "LangChain",
  "LangGraph",
  "MCP",
  "向量数据库",
  "Agent 评测",
  "FastAPI",
  "OpenAI API",
  "ann20030329@gmail.com",
  "https://www.linkedin.com/in/fang-an-3a39853ba",
  "https://github.com/ann-Fangann",
  "api.github.com/users/ann-Fangann/repos?sort=updated&per_page=8",
  "正在从 GitHub 同步公开项目",
  "项目同步暂时不可用",
  "暂时没有可展示的公开项目",
  "renderProjects",
  "formatRepoDate",
  "ann-Fangann.github.io"
];

for (const snippet of requiredSnippets) {
  assert.ok(
    html.includes(snippet),
    `Expected index.html to include: ${snippet}`
  );
}

const forbiddenSnippets = [
  "your.email@u.nus.edu",
  "https://linkedin.com/in/",
  "A/B 实验",
  "用户流失预测",
  "CUPED",
  "LightGBM",
  "工作之外，我喜欢 ______",
  "20XX",
  "你的专业",
  "你的本科学校"
];

for (const snippet of forbiddenSnippets) {
  assert.ok(
    !html.includes(snippet),
    `Expected index.html to remove old placeholder/content: ${snippet}`
  );
}

assert.match(
  html,
  /fetch\(\s*GITHUB_REPOS_ENDPOINT\s*\)/,
  "Expected project sync to fetch the GitHub endpoint constant"
);

assert.match(
  html,
  /repo\.archived/,
  "Expected archived repositories to be filtered out"
);

assert.match(
  html,
  /repo\.name\s*!==\s*(HOMEPAGE_REPO|["']ann-Fangann\.github\.io["'])/,
  "Expected the homepage repository to be filtered out"
);

console.log("Homepage static checks passed.");
