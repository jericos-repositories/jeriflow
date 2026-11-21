# JeriFlow by Jerico Studio

A seven-page Next.js marketing website for a fictional, calm project and workflow workspace. Private source repository: [jericos-repositories/jeriflow](https://github.com/jericos-repositories/jeriflow).

## What works

- Seven routes: `/`, `/product`, `/features`, `/solutions`, `/pricing`, `/about`, `/contact`.
- Shared responsive navigation, active page states, keyboard-friendly mobile disclosure with focus handling and Escape closing, and footer.
- Interactive fictional workspace: switch projects, use Board/Tasks/Notes/Progress tabs, add sample tasks, move them through statuses, and see progress update. State is in memory and resets on reload.
- Monthly/yearly proposed pricing with a declared 20% annual discount, annual totals, comparison, and native FAQ disclosures.
- Accessible demo contact form with required-field validation, inline errors, first-error focus, and an explicit no-delivery result. No submission request is made.
- Original branding, locally hosted Inter via `next/font/local`, Lucide icons, four adapted local illustrations, page metadata, a generated social-preview PNG, robots, and environment-driven sitemap.

This is a portfolio/product concept. It has no real accounts, payments, team collaboration, message delivery, or backend. There are no fabricated customers, testimonials, contact addresses, or legal policies. No public deployment has been performed.

## Local setup

Use Node **24 LTS** and npm. If using the existing nvm-windows installation:

```powershell
nvm use 24.22.3
cd websites/jeriflow
npm ci
npm run dev
```

If the terminal is already in this project, omit the `cd` line. On another machine, install/select an available Node 24 LTS patch version. `.nvmrc` records the major version; nvm-windows may need the explicit installed version.

Open the Local URL printed by Next.js, normally `http://localhost:3000`. VS Code Live Preview is for standalone HTML and does not run the Next.js application.

## Validation

```powershell
npm run lint
npm run typecheck
npm run check:assets
npm run build
npm run test:e2e
```

The typecheck command generates Next.js route types before TypeScript. Browser tests start the production server on port 3011. On Windows they use installed Google Chrome; on other platforms install Chromium with `npx playwright install chromium` first. Keep port 3011 available for the test server.

The browser suite covers all routes at 360/390/768/1024/1440px, local image responses, page metadata, automated WCAG-tagged axe checks, mobile focus/Escape/navigation, pricing arithmetic, FAQ keyboard behavior, workspace interactions, contact validation without POST requests, reduced motion, preview robots/sitemap, social-image rendering, and the 404 page. Screenshots and JSON results are generated under ignored `test-results/`.

Automated accessibility checks are not a complete manual audit. No Lighthouse or Core Web Vitals score is claimed.

To run the production build yourself:

```powershell
npm run build
npm run start
```

## Preview indexing and metadata

No environment variables are required for local use. `.env.example` describes two optional values:

- `SITE_URL`: the actual approved http(s) origin, with no path or query. There is no invented production domain.
- `ALLOW_INDEXING`: default false. Enable only for an approved public launch with `SITE_URL` configured.

Without both values, pages are `noindex, nofollow`, robots disallows crawling, and the sitemap has no fabricated URL entries. Next.js may use its localhost fallback for generated social-image URLs during local builds; set the real origin and rebuild before launch. The original design and implementation documents live in `docs/`, not `public/`, so they are not served as site routes.

## Organization

```text
src/app/                     Seven routes, layout, error/404, font, metadata
src/components/layout/       Shared navigation and footer
src/components/marketing/    Hero, features, workflow, pricing, FAQ, contact
src/components/product-preview/ Interactive workspace and supporting UI
src/components/ui/           Shared link button variants
src/lib/                     Typed content, navigation, pricing, site config
public/assets/               Original SVG branding, adapted art, Inter font
scripts/                     Reproducible asset integrity check
tests/e2e/                  Browser interaction and accessibility checks
docs/                       Brief, provenance, requirements, license notices
```

## Design sources and assets

Read [the project brief](docs/project-brief.md), [asset audit](docs/asset-audit.md), and [manifest](docs/asset-manifest.json). The supplied [blueprint](docs/reference/jerico-studio-jeriflow-blueprint.html) remains byte-for-byte preserved. The [master prompt](docs/reference/implementation-request.md) records the Phase 1 request.

The Flowly ZIP remains unchanged in Downloads. Generic illustrations were palette-adapted; original JeriFlow/Jerico Studio marks and the live React workspace replace old-brand graphics and mockups. The manifest records provenance and hashes. Font and icon notices are retained in `docs/licenses/`.

## Shared AI skills

The project `AGENTS.md` contains portable project instructions and generated, version-matched Next.js guidance. Reusable workflows live separately in [agent-skills](https://github.com/jericos-repositories/agent-skills), linked into this user's `.agents/skills/` directory. On a new Windows machine, clone that private repository and run its `scripts/link-skill.ps1`; cloud sessions need their own installation. Skill discovery does not grant additional permissions.

## Task handoff

`docs/handoff.md` is the designated context file for teammates and AI agents, including local/in-progress work and actual validation status. It is published separately through `eng-handoff`. Request `jeriflow $eng-handoff` to read the changes and commit/push only that Markdown file. The workflow excludes code and earlier unpushed code commits by publishing from a separate worktree based on the latest verified remote destination.

Use `jeriflow $eng-publish pr` for code synchronization, validation, a short task branch, and a concise PR with relevant PNGs. Use `jeriflow $eng-publish direct-main` only for explicitly requested direct code publication permitted by repository rules. These workflows preserve unrelated work and stop for conflicts requiring a product decision. Creating/installing them does not publish the current changes. Routine screenshot folders remain PNG-only.

The dated branch-policy observations are in [AGENTS.md](AGENTS.md). The current private-repository setup has no GitHub-enforced main protection on the organization's Free plan; the skills apply the documented workflow checks. If main later requires PRs, the Markdown-only handoff also stops for separate documentation-PR authorization.

## Future release decisions

Choose a real contact endpoint, decide whether any real product should follow this concept, verify brand/domain availability, and approve hosting/indexing before a public launch. Treat any future authentication, database, billing, or collaboration as a separate phase.

Read the [Phase 1 implementation and validation report](docs/implementation-report.md) for results and deliberate limitations.
