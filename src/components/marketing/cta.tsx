import { ButtonLink } from "@/components/ui/button-link";
export function Cta() {
  return (
    <section className="container section cta-section">
      <div className="cta-panel" data-motion="reveal">
        <p className="eyebrow">Jerico Studio presents</p>
        <h2>
          Better work starts
          <br />
          with a little clarity.
        </h2>
        <p>
          A calm workspace for creative people.
          <br />
          See the idea. Try the details. Make it your kind of work.
        </p>
        <div className="button-row">
          <ButtonLink href="/product#demo">Explore the demo</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Talk about the concept
          </ButtonLink>
        </div>
        <span className="fine-print">
          A portfolio concept. No live accounts or subscriptions.
        </span>
      </div>
    </section>
  );
}
