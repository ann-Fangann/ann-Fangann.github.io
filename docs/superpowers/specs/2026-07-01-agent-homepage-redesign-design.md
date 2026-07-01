# Agent Homepage Redesign Design

## Goal

Update Fang An's personal GitHub Pages site from a data-science internship profile into a clear Chinese-language profile for AI Agent / LLM application development roles.

The page should stay lightweight and information-first. It should not introduce a build system, heavy visual effects, or manually maintained project cards.

## Audience

The primary audience is recruiters, hiring managers, and engineers evaluating Fang An for Agent development, LLM application engineering, or related AI product engineering roles.

## Content Direction

The homepage will be written mainly in Chinese, with English technical terms where they are standard in hiring contexts.

Core positioning:

- AI Agent / LLM application developer.
- Focus on production-oriented Agent systems, not only prompt demos.
- Strengths include Agentic Workflow, tool/function calling, RAG, MCP, LangChain/LangGraph, vector databases, evaluation/observability, Python, FastAPI, and OpenAI API.
- Keep NUS CS graduate-study context.
- Preserve the national mathematical modeling award as evidence of analytical and modeling ability.

## Information Architecture

The single-page site will contain:

1. Hero
   - Chinese headline focused on building practical AI Agent applications.
   - Short summary mentioning NUS CS and Agent engineering interests.
   - Links to email, GitHub, and LinkedIn.

2. About
   - Replace the old data science / experimentation narrative with Agent development.
   - Emphasize turning LLM capability into usable workflows connected to tools, data, and product constraints.

3. Skills
   - Present grouped skill areas:
     - Agent Engineering
     - LLM Stack
     - Backend & Data
   - Avoid overstating experience; use "关注 / 熟悉 / 正在构建" style wording where appropriate.

4. Projects
   - Remove static data-science project cards.
   - Fetch public GitHub repositories from `https://api.github.com/users/ann-Fangann/repos?sort=updated&per_page=8`.
   - Show repository name, description, main language, stars, last updated date, and direct repository link.
   - Exclude archived repositories and the homepage repository itself if possible.
   - Provide loading, empty, and failure states.
   - On failure, keep a direct GitHub profile link so visitors can still inspect projects.

5. Education
   - Keep NUS entry.
   - Remove placeholder undergraduate entry unless real details are available.

6. Notes
   - Keep a minimal placeholder for future Agent/LLM notes, but do not make it central.

7. Contact
   - Replace placeholders with:
     - `ann20030329@gmail.com`
     - `https://www.linkedin.com/in/fang-an-3a39853ba`
     - `https://github.com/ann-Fangann`
   - Update job-search direction to Agent / LLM application development.

## Technical Design

The repository currently contains a static `index.html` and `README.md`. The redesign will keep this model.

Implementation details:

- Edit `index.html` only unless README cleanup is needed.
- Use plain HTML, CSS, and JavaScript.
- Use the browser `fetch` API to call the GitHub REST API from the client.
- No API token will be used, so only public repositories are shown.
- The page must remain deployable directly through GitHub Pages.
- The page should work if JavaScript is disabled enough to still show contact, skills, and profile content.

## Error Handling

GitHub project loading states:

- Loading: "正在从 GitHub 同步公开项目..."
- Empty: "暂时没有可展示的公开项目。"
- Failure: "项目同步暂时不可用，可直接访问 GitHub 查看最新项目。"

The failure state should not block the rest of the page.

## Testing

Because this is a static single-page site:

- Validate the HTML renders locally in a browser.
- Check responsive layout at desktop and mobile widths.
- Verify the GitHub API request succeeds when network is available.
- Verify failure handling by simulating a rejected fetch or invalid endpoint if practical.

## Out of Scope

- Private repository display.
- GitHub token or server-side proxy.
- Blog system.
- Complex animations, generated images, or portfolio screenshots.
- Rewriting the site into React/Vite/Jekyll.
