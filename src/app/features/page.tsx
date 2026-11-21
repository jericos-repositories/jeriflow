import { PageIntro } from "@/components/marketing/page-intro";
import { Cta } from "@/components/marketing/cta";
import { ButtonLink } from "@/components/ui/button-link";
import { FeatureDemo } from "@/components/features/feature-demos";
import { features } from "@/lib/content";
import { pageMetadata } from "@/lib/site-config";
import "./features.css";
export const metadata = pageMetadata(
  "Features",
  "Six ways to bring clarity to creative work: tasks, boards, collaboration, progress, notes, and focus.",
  "/features",
);
export default function FeaturesPage() {
  return (
    <div className="jf-feature-page">
      <PageIntro
        eyebrow="THOUGHTFULLY CONNECTED"
        title="Everything your work needs. A little less of everything else."
        description="Six ways to keep the work and its context together. Find a clear next step, a place for your notes, and a view of the bigger picture."
      >
        <nav className="jf-feature-featureNav" aria-label="Explore features">
          {features.map((feature) => (
            <a key={feature.slug} href={`#${feature.slug}`}>
              <feature.icon size={15} aria-hidden="true" />
              {feature.title}
            </a>
          ))}
        </nav>
      </PageIntro>
      <div className={`container jf-feature-stories`}>
        {features.map((feature, index) => (
          <section
            className={`jf-feature-story jf-feature-story${index}`}
            id={feature.slug}
            aria-labelledby={`${feature.slug}-title`}
            data-motion="reveal"
            key={feature.slug}
          >
            <div className="jf-feature-copy">
              <div className="jf-feature-category">
                <span className={`jf-feature-categoryIcon ${feature.tone}`}>
                  <feature.icon size={19} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className="eyebrow">{feature.title}</p>
                <span className="jf-feature-index" aria-hidden="true">0{index + 1}</span>
              </div>
              <h2 id={`${feature.slug}-title`}>{feature.short}</h2>
              <p>{feature.description}</p>
              <span className="jf-feature-useCase">For example: {feature.useCase}</span>
            </div>
            <div className="jf-feature-visual">
              <FeatureDemo feature={feature.slug} />
            </div>
          </section>
        ))}
      </div>
      <section className="container section compact-callout" data-motion="reveal">
        <p>
          See how tasks, notes, and progress come together in one workspace.
        </p>
        <ButtonLink href="/product#demo" variant="outline">
          Explore the workspace
        </ButtonLink>
      </section>
      <Cta />
    </div>
  );
}
