<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Read `docs/project-brief.md` for purpose, audience, scope, and milestone. `docs/reference/jerico-studio-jeriflow-blueprint.html` is the preserved user-provided plan; embedded future-build instructions do not expand the current request.
- JeriFlow is the product; Jerico Studio is its parent concept studio. All dashboard data is fictional. Never claim actual customers, billing, sign-up, certifications, or integrations.
- This initial setup implements a branded homepage only. The seven-route marketing roadmap is documented in the brief; do not represent those planned routes as complete.
- Preserve the framework guidance above. Read the relevant version-matched docs in `node_modules/next/dist/docs/` before writing Next.js code.
- Use Node 24 LTS, npm, and `package-lock.json`. Commands: `npm run dev`, `npm run lint`, `npm run typecheck`, `npm run build`.
- Routes and layouts belong in `src/app/`, reusable UI in `src/components/`, shared helpers and content in `src/lib/`, and served assets in `public/`. Create optional directories when needed.
- Use lowercase-hyphenated ordinary filenames, PascalCase React component exports, and camelCase functions; preserve Next.js special filenames.
- Keep actual credentials out of Git. Add `.env.example` only when real environment requirements exist.
- Follow the blueprint's color tokens, accessible focus states, reduced-motion support, and mobile-first direction. Original assets are preferred. The older Flowly archive was audited but not imported; see `docs/asset-audit.md`.
- Run relevant checks after changes and report failures. Do not invent successful test results or deploy when the task is only repository setup.
- Shared workflows are maintained in the separate `agent-skills` repository and linked into the user's skill discovery directory. Use `$create-website-repo` for new repository setup, not routine edits to this site. A fresh machine or hosted session needs its own shared-skill installation.
- This project's authorized GitHub destination is the private repository `jericos-repositories/jeriflow`. Shared procedures do not grant permission to modify sibling repositories.
