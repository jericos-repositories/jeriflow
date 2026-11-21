# Asset audit and integration

## Discovery and preservation

The current user profile's Downloads folder contained `Flowly_Brand_Asset_Kit.zip` and `Jerico_Studio_JeriFlow_Design_Blueprint.html`. The archive was extracted into a task-owned temporary directory after validating that all entries resolved inside that directory. No arbitrary private folders were searched, and the original archive was not changed or deleted.

Archive SHA-256: `effb0fe5dbc2d47bc166c9b7ef16f8bb694333fb74ae75a2b010161e651cfb6a`.

The archive contains 48 entries and 23,074 total uncompressed bytes: README, asset manifest, tokens, Flowly brand marks/favicon, two named dashboard mockups, 32 SVG icons, and four 560?320 SVG illustrations. No separate license file, fonts, or photographs were bundled. The original README's provenance and rights statements are retained in [the source notice](licenses/asset-kit-readme.md).

## Selected assets

| Asset                            | Action                                                                                                           |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `focus.svg`                      | Reused generic composition; palette adapted to approved tokens                                                   |
| `collaboration.svg`              | Reused generic composition; palette adapted; no old-brand text                                                   |
| `analytics.svg`                  | Reused generic project-progress composition; palette adapted                                                     |
| `teamwork.svg`                   | Reused generic people illustration; palette adapted                                                              |
| Flowly marks, wordmarks, favicon | Not imported; replaced with original JeriFlow and Jerico Studio SVG assets                                       |
| Named desktop/mobile mockups     | Not imported; recreated as responsive interactive React UI with fictional data                                   |
| Candidate archive icons          | Not imported; Lucide React provides a coherent icon system                                                       |
| Inter                            | Latin variable WOFF2 from `@fontsource-variable/inter` 5.3.0, locally hosted with next/font; OFL notice retained |
| Hero editorial art               | Original `creative-flow.svg`, using outlined figures, paper/check motifs, and the approved palette               |
| Social preview                   | Original Next.js ImageResponse composition at `/opengraph-image`, returning PNG                                  |

The generic SVG illustrations were inspected for branding, script elements, and unsuitable external content before import. Palette adaptation uses the approved blue, warm, lavender, soft-blue, and ink tokens. Viewboxes and aspect ratios are preserved. All selected images are local and used with explicit dimensions via `next/image`.

## Attribution and maintenance

The archive README describes its files as original programmatically drawn assets; that is the supplied provenance. Inter's OFL and Lucide's ISC notices are retained in `docs/licenses/`. No Notion graphics, stock imagery, third-party customer marks, or scraped assets were used.

The [asset manifest](asset-manifest.json) records every production asset's source, transformation, and SHA-256. `npm run check:assets` checks hashes, source blueprint integrity, and SVGs for active content or outdated branding. Review and update the manifest after intentional asset changes. License/provenance documents may name the original kit; rendered pages and production assets use JeriFlow/Jerico Studio branding only.
