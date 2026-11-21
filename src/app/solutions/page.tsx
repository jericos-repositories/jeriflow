import Image from "next/image";
import { Check } from "lucide-react";
import { audiences } from "@/lib/content";
import { PageIntro } from "@/components/marketing/page-intro";
import { Cta } from "@/components/marketing/cta";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/site-config";
export const metadata = pageMetadata(
  "Solutions",
  "Explore JeriFlow use cases for freelancers, designers, developers, and small creative teams.",
  "/solutions",
);
export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="YOUR WORK. YOUR WAY."
        title="Different kinds of makers. A shared need for clarity."
        description="A client handoff, a design review, a small release. JeriFlow imagines a calmer home for the work that moves your day forward."
      />
      <nav className="audience-jumps container" aria-label="Audience sections">
        {audiences.map((a) => (
          <a href={`#${a.id}`} key={a.id}>
            {a.name}
          </a>
        ))}
      </nav>
      <div className="container audience-stories">
        {audiences.map((audience) => (
          <section
            id={audience.id}
            className="audience-story"
            data-motion-stagger
            key={audience.id}
          >
            <div>
              <p className="eyebrow">FOR {audience.name.toUpperCase()}</p>
              <h2>{audience.heading}</h2>
              <p className="body-copy">{audience.problem}</p>
              <p className="body-copy">{audience.benefit}</p>
              <ButtonLink href="/product#demo" variant="text">
                Explore a sample workflow
              </ButtonLink>
            </div>
            <div className={`scenario-panel ${audience.tone}`}>
              <Image
                src={`/assets/illustrations/${audience.image}.svg`}
                width={560}
                height={320}
                alt={`${audience.name} workflow illustration`}
              />
              <div className="scenario-copy">
                <span className="mini-label">AN ILLUSTRATIVE DAY AT WORK</span>
                <h3>{audience.scenario}</h3>
                <ul>
                  {audience.tasks.map((task) => (
                    <li key={task}>
                      <Check size={16} aria-hidden="true" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Cta />
    </>
  );
}
