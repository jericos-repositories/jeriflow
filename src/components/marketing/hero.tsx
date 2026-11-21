import { HeroIllustration } from "@/components/marketing/hero-illustration";
import { ButtonLink } from "@/components/ui/button-link";
export function Hero() {
  return (
    <section className="hero container">
      <HeroIllustration />
      <p className="hero-kicker">
        Meet JeriFlow. Built for people who make things.
      </p>
      <h1>
        <span className="hero-line">Make room for</span>
        <br />
        <span className="hero-line">better work.</span>
      </h1>
      <p className="hero-description">
        Projects, tasks, and creative momentum—all in one calm workspace. Less
        time organizing. More time doing your best.
      </p>
      <div className="button-row">
        <ButtonLink href="/product#demo">Explore the workspace</ButtonLink>
        <ButtonLink href="/product" variant="secondary">
          See how it works
        </ButtonLink>
      </div>
      <p className="fine-print">
        A product concept by Jerico Studio. Explore it, no account needed.
      </p>
    </section>
  );
}
