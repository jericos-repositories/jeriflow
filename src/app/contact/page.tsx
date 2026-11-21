import { MessageSquare, Shapes } from "lucide-react";
import { PageIntro } from "@/components/marketing/page-intro";
import { ContactForm } from "@/components/marketing/contact-form";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/site-config";
export const metadata = pageMetadata(
  "Contact",
  "Explore the JeriFlow contact-form concept with accessible validation. Message delivery is not connected.",
  "/contact",
);
export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="LET'S TALK ABOUT THE IDEA"
        title="A little conversation can go a long way."
        description="A question about JeriFlow, a thought on the design, or a workflow worth exploring. Here is how that conversation could begin."
      />
      <section className="container contact-layout section" data-motion-stagger>
        <aside className="contact-aside">
          <span className="icon-tile lavender">
            <MessageSquare size={26} aria-hidden="true" />
          </span>
          <h2>Room for your perspective.</h2>
          <p>
            This is a portfolio demonstration of the contact experience. You can
            try the fields and validation, but messages are not delivered.
          </p>
          <div className="contact-aside-note">
            <Shapes size={22} aria-hidden="true" />
            <div>
              <h3>Still exploring?</h3>
              <p>
                Get a feel for the proposed workspace before trying the form.
              </p>
              <ButtonLink href="/product#demo" variant="text">
                Explore the product demo
              </ButtonLink>
            </div>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
