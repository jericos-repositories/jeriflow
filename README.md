# JeriFlow

The Next.js marketing-site foundation for **JeriFlow**, a fictional project and workflow workspace by **Jerico Studio**.

Private GitHub destination: [jericos-repositories/jeriflow](https://github.com/jericos-repositories/jeriflow).

## Current scope

The repository contains a branded responsive homepage, a static fictional dashboard preview, reusable components, shared content definitions, and metadata. All navigation links point to real homepage sections. It has no live sign-up, backend, contact delivery, subscriptions, or collaboration features.

The full seven-route marketing site is planned, not implemented in this setup. Read [the project brief and roadmap](docs/project-brief.md). The [original blueprint](docs/reference/jerico-studio-jeriflow-blueprint.html) is preserved as documentation and is not deployed as the Next.js application.

## Requirements

- Node.js **24 LTS** (`.nvmrc` selects major version 24).
- npm and Git.

Node 24 was installed alongside the existing Node 20 during setup. The globally active version was not changed. If using nvm-windows, select the installed Node 24 version before running this project's commands:

```powershell
nvm list
nvm use 24.22.3
node --version
```

On another computer, install a current Node 24 LTS release and select that installed version. Do not assume this machine's exact patch version is already available there.

## Run locally

From this directory:

```powershell
npm ci
npm run dev
```

Open the Local URL printed in the terminal, normally `http://localhost:3000`. Next.js requires its development server; Live Preview is intended for standalone HTML files and does not run this application.

## Verify and build

```powershell
npm run lint
npm run typecheck
npm run build
```

`typecheck` generates Next.js route types before running TypeScript. To preview a successful production build:

```powershell
npm run start
```

No automated application test suite has been added to this initial scaffold. Linting, type checking, a production build, and local page checks are the setup checks.

## Organization

```text
src/app/             Routes, root layout, global design tokens, icon
src/components/      Original brand mark and dashboard preview
src/lib/             Site configuration and fictional preview data
docs/                Brief, roadmap, asset audit, original blueprint
public/              Future directly served project assets
```

The generator configured App Router, TypeScript, Tailwind CSS, ESLint, npm, `src/`, and the `@/*` import alias. No environment variables are currently required. Keep dependencies, generated output, local logs, and secrets out of commits; retain `package-lock.json`.

## Shared AI skills

`AGENTS.md` records this project's own instructions and the generated Next.js guidance. The shared `create-website-repo` workflow is maintained in [jericos-repositories/agent-skills](https://github.com/jericos-repositories/agent-skills).

In the existing local workspace, the skill is already linked into the user's `.agents/skills/create-website-repo` directory. Its source and supporting files were checked from this project. It remains one maintained copy, not a duplicated skills repository inside JeriFlow.

On a new Windows machine, clone the private `agent-skills` repository with an authorized account, then run its `scripts/link-skill.ps1`. Check the Codex skill picker on the next turn or restart the client. Cloud/CI sessions need their own skill installation. Skill discovery does not grant additional filesystem or GitHub permissions.

## Design and assets

The blueprint's colors and whitespace guide this starter. Inter is the intended font; the system fallback stack is used without remote font downloads. The J mark and decorative illustration are original code-native assets. The old Flowly archive was inspected but not imported; see [the asset audit](docs/asset-audit.md).

Hosting and public launch are separate decisions. No production deployment is configured by this repository setup.
