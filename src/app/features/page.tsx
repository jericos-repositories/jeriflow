import Image from "next/image";
import { PageIntro } from "@/components/marketing/page-intro";
import { Cta } from "@/components/marketing/cta";
import { ButtonLink } from "@/components/ui/button-link";
import {
  NotePreview,
  ProgressPreview,
} from "@/components/product-preview/mini-previews";
import { features } from "@/lib/content";
import { pageMetadata } from "@/lib/site-config";
export const metadata = pageMetadata(
  "Features",
  "Six proposed capabilities for calmer creative work: tasks, boards, collaboration, progress, notes, and focus.",
  "/features",
);
export default function FeaturesPage() {
  return (
    <>
      <PageIntro
        eyebrow="THOUGHTFULLY CONNECTED"
        title="Everything your work needs. A little less of everything else."
        description="Six proposed capabilities, one clear idea: keep the work and its context together. Explore the pieces of the JeriFlow product concept."
      />
      <div className="container feature-story-grid">
        {features.map((feature, index) => (
          <section
            className={`feature-story feature-story-${index}`}
            id={feature.slug}
            data-motion="reveal"
            key={feature.slug}
          >
            <div className="feature-story-copy">
              <span className={`icon-tile ${feature.tone}`}>
                <feature.icon size={25} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <p className="eyebrow">{feature.title}</p>
              <h2>{feature.short}</h2>
              <p>{feature.description}</p>
              <span className="use-case">For example: {feature.useCase}</span>
            </div>
            <div className="feature-story-visual">
              {index === 0 ? (
                <div className="sample-checklist">
                  <span className="mini-label">
                    TODAY&apos;S FOCUS · SAMPLE
                  </span>
                  {[
                    "Review the creative brief",
                    "Build the first page",
                    "Prepare the handoff notes",
                  ].map((task, i) => (
                    <div key={task}>
                      <span
                        className={
                          i === 0 ? "sample-check checked" : "sample-check"
                        }
                      >
                        {i === 0 ? "✓" : ""}
                      </span>
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              ) : index === 1 ? (
                <div className="mini-board">
                  {["To do", "In progress", "Done"].map((label, i) => (
                    <div key={label}>
                      <span>{label}</span>
                      <article>
                        {
                          [
                            "Shape the idea",
                            "Design the details",
                            "Share the direction",
                          ][i]
                        }
                        <small>Sample task</small>
                      </article>
                    </div>
                  ))}
                </div>
              ) : index === 2 ? (
                <Image
                  src="/assets/illustrations/collaboration.svg"
                  width={560}
                  height={320}
                  alt="Illustration of shared project notes and a team conversation"
                />
              ) : index === 3 ? (
                <ProgressPreview />
              ) : index === 4 ? (
                <NotePreview />
              ) : (
                <Image
                  src="/assets/illustrations/focus.svg"
                  width={560}
                  height={320}
                  alt="Illustration of a focused task list with a completed action"
                />
              )}
            </div>
          </section>
        ))}
      </div>
      <section className="container section compact-callout" data-motion="reveal">
        <p>
          These capabilities are a product direction, not a claim of a live
          service.
        </p>
        <ButtonLink href="/product#demo" variant="outline">
          See the interactive concept
        </ButtonLink>
      </section>
      <Cta />
    </>
  );
}
