import { MessageSquare, Shapes } from "lucide-react";
import { PageIntro } from "@/components/marketing/page-intro";
import { ContactForm } from "@/components/marketing/contact-form";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/site-config";
export const metadata = pageMetadata(
  "Contact",
  "A question about JeriFlow or a workflow worth exploring? Organize your thoughts and review your message with clear, accessible guidance.",
  "/contact",
);
export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="ROOM FOR A CONVERSATION"
        title="A little conversation can go a long way."
        description="A question about JeriFlow, a thought on the design, or a workflow worth exploring. Start with what matters to you."
      />
      <section className="container contact-layout section" data-motion-stagger>
        <aside className="contact-aside">
          <span className="icon-tile lavender">
            <MessageSquare size={26} aria-hidden="true" />
          </span>
          <h2>Room for your perspective.</h2>
          <p>
            What are you working on? Where does the process get in your way?
            Put the details into words and give your next conversation a clear
            starting point.
          </p>
          <div className="contact-aside-note">
            <Shapes size={22} aria-hidden="true" />
            <div>
              <h3>Still exploring?</h3>
              <p>
                See how projects, tasks, and notes fit together in the workspace.
              </p>
              <ButtonLink href="/product#demo" variant="text">
                Explore the workspace
              </ButtonLink>
            </div>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
