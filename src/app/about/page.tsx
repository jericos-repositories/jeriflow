import Image from "next/image";
import { Compass, Heart, PencilRuler } from "lucide-react";
import { PageIntro } from "@/components/marketing/page-intro";
import { Cta } from "@/components/marketing/cta";
import { pageMetadata } from "@/lib/site-config";
export const metadata = pageMetadata(
  "About Jerico Studio",
  "Meet the design thinking behind JeriFlow and Jerico Studio: thoughtful tools, clear details, and a more human approach to creative work.",
  "/about",
);
export default function AboutPage() {
  return (
    <div className="about-page">
      <PageIntro
        eyebrow="THE STUDIO BEHIND THE FLOW"
        title="Thoughtful software. A little more human."
        description="JeriFlow brings Jerico Studio's approach to creative work into focus: clear structure, thoughtful details, and room for the way you think."
      />
      <section className="container about-statement" data-motion="reveal">
        <div className="studio-signature">
          <Image
            src="/assets/brand/jerico-studio-logo.svg"
            width={290}
            height={60}
            alt="Jerico Studio"
          />
          <span>THOUGHTFUL DIGITAL DESIGN</span>
        </div>
        <p>
          Good tools should help you think.
          <br />
          Not give you more to think about.
        </p>
      </section>
      <section className="container section split-layout about-story" data-motion-stagger>
        <div>
          <p className="eyebrow">WHY JERIFLOW</p>
          <h2>
            The space between
            <br />
            an idea and done.
          </h2>
          <p className="body-copy">
            A project is more than a list of tasks. It is a brief, a
            conversation, a decision, and the small next step that follows.
          </p>
          <p className="body-copy">
            JeriFlow brings those pieces closer, with a workspace
            structured enough to create clarity and
            simple enough to leave room for creative work.
          </p>
        </div>
        <Image
          className="editorial-image"
          src="/assets/illustrations/teamwork.svg"
          width={560}
          height={320}
          alt="Two illustrated creative collaborators sharing a project idea"
        />
      </section>
      <section className="section section-surface">
        <div className="container">
          <p className="eyebrow">WHAT GUIDES THE DESIGN</p>
          <h2>
            Useful by intention.
            <br />
            Considered in the details.
          </h2>
          <div className="principle-grid" data-motion-stagger>
            {[
              {
                icon: Compass,
                title: "Clarity before complexity",
                text: "Start with what people need to understand. Let the interface make the next step easier to see.",
              },
              {
                icon: Heart,
                title: "A human pace",
                text: "Respect attention. Use calm visuals and purposeful interactions instead of constant urgency.",
              },
              {
                icon: PencilRuler,
                title: "Craft that serves the work",
                text: "Make the small details consistent, accessible, and useful. Good design should earn its place.",
              },
            ].map((item, index) => (
              <article key={item.title}>
                <div className="principle-top"><item.icon size={27} strokeWidth={1.75} /><span>0{index + 1}</span></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section studio-direction" data-motion="reveal">
        <p className="eyebrow">OUR DESIGN PHILOSOPHY</p><div className="about-path" aria-label="From idea to delivery"><span>01 / Imagine</span><span>02 / Make</span><span>03 / Refine</span></div>
        <h2>
          Build carefully.
          <br />
          Learn from the details.
        </h2>
        <p>
          Creative work should be easier to organize without feeling
          mechanical. That means thoughtful, focused tools and a clear place
          for every useful idea.
        </p>
        <p>
          From the first brief to the final handoff, every detail should help
          you understand the work and feel ready for the next step.
        </p>
      </section>
      <Cta />
    </div>
  );
}
