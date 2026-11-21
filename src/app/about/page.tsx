import Image from "next/image";
import { Compass, Heart, PencilRuler } from "lucide-react";
import { PageIntro } from "@/components/marketing/page-intro";
import { Cta } from "@/components/marketing/cta";
import { pageMetadata } from "@/lib/site-config";
export const metadata = pageMetadata(
  "About Jerico Studio",
  "Meet the concept studio behind JeriFlow and the thoughtful, human-centered design philosophy shaping it.",
  "/about",
);
export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="THE STUDIO BEHIND THE FLOW"
        title="Thoughtful software. A little more human."
        description="Jerico Studio is a founder-led independent digital product studio concept. JeriFlow is our exploration of what happens when work gets a calmer place to live."
      />
      <section className="container about-statement">
        <div className="studio-signature">
          <Image
            src="/assets/brand/jerico-studio-logo.svg"
            width={290}
            height={60}
            alt="Jerico Studio"
          />
          <span>INDEPENDENT PRODUCT STUDIO · CONCEPT</span>
        </div>
        <p>
          Good tools should help you think.
          <br />
          Not give you more to think about.
        </p>
      </section>
      <section className="container section split-layout">
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
            JeriFlow was conceptualized to bring those pieces closer. It
            explores a workspace that is structured enough to create clarity and
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
          <div className="principle-grid">
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
            ].map((item) => (
              <article key={item.title}>
                <item.icon size={27} strokeWidth={1.75} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section studio-direction">
        <p className="eyebrow">A DIRECTION, NOT A FINISHED STORY</p>
        <h2>
          Build carefully.
          <br />
          Learn from the details.
        </h2>
        <p>
          Our mission for this concept is to make creative work easier to
          organize without making it feel mechanical. The longer-term direction
          is thoughtful, focused digital tools—developed one useful idea at a
          time.
        </p>
        <p>
          Jerico Studio and JeriFlow are portfolio concepts. This site does not
          represent a registered company, an operating SaaS service, or a
          verified business history.
        </p>
      </section>
      <Cta />
    </>
  );
}
