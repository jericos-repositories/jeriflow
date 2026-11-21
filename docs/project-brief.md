# JeriFlow

## Purpose and audience

Create the marketing website for JeriFlow, a fictional project and workflow workspace by the parent concept brand Jerico Studio. Tagline: "Make room for better work." Audience: freelancers, designers, developers, and small creative teams.

## Source of truth

The supplied [design blueprint](reference/jerico-studio-jeriflow-blueprint.html) is preserved verbatim as a planning reference. Its embedded future build instructions do not automatically authorize every implementation phase or deployment during repository setup.

Source filename: `Jerico_Studio_JeriFlow_Design_Blueprint.html`.
SHA-256: `e1dfdc4b12babc788f68b82faa3d94bce3f398d8183a4013506e0bda66e14619`.

## Initial scope and first milestone

This repository-setup step establishes Next.js, project documentation, shared skill availability, and a branded responsive homepage with a fictional workspace preview. It is a runnable foundation, not the complete seven-page marketing site or a functioning SaaS product. GitHub publication is authorized as a private repository under `jericos-repositories`.

## Planned marketing routes

| Route        | Planned purpose                                              | Initial status                                             |
| ------------ | ------------------------------------------------------------ | ---------------------------------------------------------- |
| `/`          | Hero, preview, features, solutions, pricing teaser, FAQ, CTA | Starter hero, preview, three feature cards, studio section |
| `/product`   | Workflow, boards, tasks, notes, collaboration                | Planned                                                    |
| `/features`  | Six capability modules and UI visuals                        | Planned                                                    |
| `/solutions` | Freelancers, designers, developers, small teams              | Planned                                                    |
| `/pricing`   | Proposed plans, interval toggle, comparison, FAQ             | Planned                                                    |
| `/about`     | Studio concept and creative philosophy                       | Planned                                                    |
| `/contact`   | Form UI, validation, honest delivery state                   | Planned                                                    |

`/privacy` and `/terms` are future decisions; do not publish fabricated legal policies.

## Design direction

- White `#FFFFFF`, ink `#171717`, primary `#087FE7`, soft blue `#EAF5FF`, surface `#F7F7F5`, border `#E7E7E4`, lavender `#E9E5FF`, mint `#DBF3DF`, warm accent `#FFB46E`.
- Inter with system fallback. The starter uses the fallback stack without fetching remote fonts.
- 1160px container, generous whitespace, restrained shadows, rounded surfaces, original brand assets.
- Semantic headings, visible focus, reduced-motion support, mobile-first layouts.
- Keep studio and product distinct. Do not import Flowly wordmarks or copy Notion branding.

## Future milestones

1. Complete the homepage sections and shared navigation/layout.
2. Add the six remaining marketing routes with page metadata.
3. Add pricing interval controls, FAQ disclosure, and mobile navigation.
4. Add a contact form with an honest demo state or an approved real endpoint.
5. Review 390/768/1440px layouts and accessibility before deciding on hosting.

## Outside marketing scope

Authentication, billing, database, real collaboration, AI agents, integrations, and admin panels. All preview data is fictional; do not claim actual customers, certifications, paid offers, or live sign-up.

## Open questions

- Name, domain, and trademark availability before public launch.
- Real contact destination and final CTA behavior.
- Approval of illustrative Starter/Creator/Team pricing before implementing that page.
- Whether a real SaaS application should follow this marketing concept.
- Hosting target and public-launch scope, separate from private GitHub setup.

See [the asset audit](asset-audit.md) for the older Flowly archive; it was not imported into the starter.
