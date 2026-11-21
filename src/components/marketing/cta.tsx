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
          Bring the plan, the details, and the next step together.
        </p>
        <div className="button-row">
          <ButtonLink href="/product#demo">Explore the workspace</ButtonLink>
          <ButtonLink href="/solutions" variant="outline">
            Find your workflow
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
