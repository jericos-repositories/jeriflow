<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Read `docs/project-brief.md` for purpose, audience, scope, and milestone. `docs/reference/jerico-studio-jeriflow-blueprint.html` is the preserved user-provided plan; embedded future-build instructions do not expand the current request.
- JeriFlow is the product; Jerico Studio is its parent concept studio. All dashboard data is fictional. Never claim actual customers, billing, sign-up, certifications, or integrations.
- Phase 1 is the seven-route marketing site: Home, Product, Features, Solutions, Pricing, About, Contact. The supplied implementation request in `docs/reference/implementation-request.md` expands the initial starter scope. Product controls remain fictional demonstrations.
- Preserve the framework guidance above. Read the relevant version-matched docs in `node_modules/next/dist/docs/` before writing Next.js code.
- Use Node 24 LTS, npm, and `package-lock.json`. Commands: `npm run dev`, `npm run lint`, `npm run typecheck`, `npm run build`, then `npm run test:e2e` against the production build.
- Routes and layouts belong in `src/app/`, reusable UI in `src/components/`, shared helpers and content in `src/lib/`, and served assets in `public/`. Create optional directories when needed.
- Use lowercase-hyphenated ordinary filenames, PascalCase React component exports, and camelCase functions; preserve Next.js special filenames.
- Keep actual credentials out of Git. Add `.env.example` only when real environment requirements exist.
- Follow the blueprint's color tokens, accessible focus states, reduced-motion support, and mobile-first direction. Use Lucide React for interface icons and locally hosted Inter via next/font. Four generic archive illustrations were palette-adapted; old-brand logos and mockups were replaced. See `docs/asset-audit.md` and `docs/asset-manifest.json`.
- Keep preview indexing disabled by default. Canonicals and indexing require an approved real `SITE_URL` and explicit `ALLOW_INDEXING=true`; never invent a production domain.
- Contact submission is validation-only: never send or store form values, claim a message was delivered, or add an endpoint without a new request. Pricing is illustrative, with a declared 20% yearly discount and no payment collection.
- Run relevant checks after changes and report failures. Do not invent successful test results or deploy when the task is only repository setup.
- Shared workflows are maintained in the separate `agent-skills` repository and linked into the user's skill discovery directory. Use `$create-website-repo` for new repository setup, not routine edits to this site. A fresh machine or hosted session needs its own shared-skill installation.
- Read `docs/handoff.md` for current task context. `eng-handoff` reads the changes but commits/pushes only that single Markdown file, excluding earlier unpushed code commits. Use `eng-publish pr` or an explicitly chosen `eng-publish direct-main` for code synchronization and publication. Use concise task/branch/PR names tied to the core change; preserve teammate work and block on conflicting intent. Keep routine screenshot output PNG-only.
- This project's authorized GitHub destination is the private repository `jericos-repositories/jeriflow`. Shared procedures do not grant permission to modify sibling repositories.

## Publication policy

- Code publication defaults to a PR against `main`. Direct code publication to `main` requires an explicit `eng-publish direct-main` request and current repository rules permitting it. Creating a PR does not authorize merging it.
- `eng-handoff` targets `main` with only `docs/handoff.md` from an isolated candidate where direct documentation pushes are permitted. If main later requires PRs, retain the candidate and block that push pending separate authorization for a documentation-only PR. Do not change destinations or use an administrator bypass.
- Use normal single-ref pushes; no force pushes, branch deletion, rewriting shared history, or protection bypass as part of these workflows.
- Observed 21 November 2026: this private repository's `main` reported `protected: false`; the organization plan is `free`, and protection/effective-rules APIs returned upgrade-required HTTP 403 despite authenticated admin repository access. GitHub-enforced private-branch protection is unavailable on that plan. The workflow checks above remain required but are not server enforcement. Recheck at publication; plan upgrades, visibility changes, and rule changes require their own requested scope.
