# JeriFlow ? Phase 1 marketing site

## Product and audience

JeriFlow is the proposed workspace product by Jerico Studio, a fictional founder-led independent digital product studio. Tagline: **Make room for better work.** Audience: freelancers, UI/UX designers, developers, and small creative teams.

## Approved sources and scope

- [Original design blueprint](reference/jerico-studio-jeriflow-blueprint.html), preserved byte-for-byte. SHA-256: `e1dfdc4b12babc788f68b82faa3d94bce3f398d8183a4013506e0bda66e14619`.
- [User's implementation request](reference/implementation-request.md), authorizing the full Phase 1 marketing experience beyond the original starter.
- Private source destination: `jericos-repositories/jeriflow`. Public deployment is not authorized by this implementation request.

## Implemented routes

| Route        | Experience                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `/`          | Illustrated hero, interactive workspace, six capabilities, benefits, workflow, audience solutions, proposed pricing, FAQ, CTA |
| `/product`   | Product overview, interactive Board/Tasks/Notes/Progress demo, project workflow, notes/collaboration context, progress        |
| `/features`  | Six proposed capabilities with varied checklist, board, illustration, notes, and milestone visuals; practical use cases       |
| `/solutions` | Four audience scenarios with problems, intended benefits, sample tasks, and illustrations                                     |
| `/pricing`   | Three proposed tiers, monthly/yearly switch, 20% annual assumption, annual totals, comparison, pricing FAQ                    |
| `/about`     | Jerico Studio concept, mission, product vision, design principles, long-term direction; no invented biography                 |
| `/contact`   | Accessible validation-only form for name, email, subject, and message; no delivery or data storage                            |

Shared header/footer, active navigation, mobile disclosure menu, original marks, local Inter font, metadata, social image, robots/sitemap, 404, and error boundary support the pages.

## Interaction boundaries

The workspace uses fictional sample data in component state. Switching projects, views, adding a sample task, and moving tasks update the demonstration. Reloading resets it. Contact only validates fields and explicitly reports that nothing was sent or stored. The proposed prices are not live offers. There are no sign-up, billing, authentication, database, actual collaboration, or production integration services.

## Design system

White `#FFFFFF`, ink `#171717`, primary blue `#087FE7`, soft blue `#EAF5FF`, surface `#F7F7F5`, border `#E7E7E4`, lavender `#E9E5FF`, mint `#DBF3DF`, warm accent `#FFB46E`. A darker blue provides sufficient contrast on filled action buttons. Inter is self-hosted with `next/font/local`; Lucide React supplies interface icons. The layout uses a 1160px content width, fluid headings, restrained borders/shadows, clear focus states, and reduced-motion support.

Assets were extracted and audited before UI implementation. Four generic illustrations were palette-adapted. Old-brand marks and named mockups were replaced with original branding and an interactive React preview. See the [audit](asset-audit.md), [manifest](asset-manifest.json), and retained notices in `docs/licenses/`.

## Quality checks

Use the actual commands documented in the README: lint, typecheck, build, asset integrity, and Playwright browser/accessibility tests. The browser suite covers all seven routes at 360/390/768/1024/1440px and the meaningful interactions. Do not infer a Lighthouse score or a complete accessibility certification from automated checks.

## Decisions before a future release

- Verify brand/domain availability and choose the actual production origin.
- Obtain explicit public-hosting approval and enable indexing only for that launch.
- Choose a real contact endpoint if delivery is needed.
- Revisit proposed pricing and features if a real product is developed.
- Treat authentication, billing, data storage, and live collaboration as a separate phase.

No fabricated legal policies or social accounts are exposed. Internal design and implementation documents are kept outside `public/`.
