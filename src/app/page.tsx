import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Hero } from "@/components/marketing/hero";
import { WorkspaceDemo } from "@/components/product-preview/workspace-demo";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Workflow } from "@/components/marketing/workflow";
import { PricingTable } from "@/components/marketing/pricing-table";
import { Faq } from "@/components/marketing/faq";
import { Cta } from "@/components/marketing/cta";
import { ButtonLink } from "@/components/ui/button-link";
import { audiences, generalFaqs } from "@/lib/content";
import { pageMetadata } from "@/lib/site-config";
export const metadata = pageMetadata(
  "Make room for better work",
  "Projects, tasks, notes, and creative momentum in one calm workspace. Make room for better work with JeriFlow by Jerico Studio.",
  "/",
);
export default function Home() {
  return (
    <>
      <Hero />
      <section
        className="container hero-demo"
        aria-label="JeriFlow interactive workspace preview"
      >
        <WorkspaceDemo />
      </section>
      <section className="container section">
        <SectionHeading
          eyebrow="EVERYTHING IN ITS PLACE"
          title="One workspace. Less juggling."
          description="Designed around the everyday work of independent makers and small creative teams. The right pieces, thoughtfully connected."
        />
        <FeatureGrid />
      </section>
      <section className="section section-surface">
        <div className="container split-layout" data-motion-stagger>
          <Image
            className="editorial-image"
            src="/assets/illustrations/focus.svg"
            width={560}
            height={320}
            alt="A focused workspace illustration with a completed task"
          />
          <div>
            <p className="eyebrow">A LITTLE LESS FRICTION</p>
            <h2>
              Keep your attention
              <br />
              on the good work.
            </h2>
            <p className="body-copy">
              When the plan, the next task, and the important context have a
              home, you have a little more room to make.
            </p>
            <ul className="benefit-list">
              {[
                "Keep the brief beside the work it guides.",
                "Make ownership and next steps easy to see.",
                "Move between projects without losing the thread.",
              ].map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink href="/product" variant="text">
              Get to know the workspace
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="container section">
        <SectionHeading
          eyebrow="FIND YOUR RHYTHM"
          title="From first thought to final handoff."
          description="A simple workflow for a project with a clear direction and enough space for the unexpected."
          center
        />
        <Workflow />
      </section>
      <section className="section solutions-home">
        <div className="container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="BUILT FOR THE WAY YOU CREATE"
              title="Your kind of work belongs here."
            />
            <ButtonLink href="/solutions" variant="outline">
              Explore solutions
            </ButtonLink>
          </div>
          <div className="audience-grid" data-motion-stagger>
            {audiences.map((a) => (
              <Link
                className={`audience-card ${a.tone}`}
                key={a.id}
                href={`/solutions#${a.id}`}
              >
                <span className="mini-label">FOR {a.name.toUpperCase()}</span>
                <h3>{a.heading}</h3>
                <span>Find your workflow</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container section">
        <SectionHeading
          eyebrow="ROOM FOR YOUR NEXT CHAPTER"
          title="Start small. Grow when you're ready."
          description="From personal projects to shared priorities, find a plan that fits the way you work."
          center
        />
        <PricingTable />
      </section>
      <section className="container section faq-section">
        <SectionHeading
          eyebrow="QUESTIONS, ANSWERED"
          title="A little more clarity."
          center
        />
        <Faq items={generalFaqs} />
      </section>
      <Cta />
    </>
  );
}
