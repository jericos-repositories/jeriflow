import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
export function Hero() {
  return (
    <section className="hero container">
      <Image
        className="hero-art"
        src="/assets/illustrations/creative-flow.svg"
        width={540}
        height={160}
        priority
        alt=""
      />
      <p className="hero-kicker">
        Meet JeriFlow. Built for people who make things.
      </p>
      <h1>
        Make room for
        <br />
        better work.
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
