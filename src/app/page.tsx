import { BrandMark } from "@/components/brand-mark";
import { DashboardPreview } from "@/components/dashboard-preview";
import { features } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#main" aria-label="JeriFlow home">
            <BrandMark />
            <span>
              JeriFlow<small>by Jerico Studio</small>
            </span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#workspace">Workspace</a>
            <a href="#features">Features</a>
            <a href="#studio">The studio</a>
          </nav>
          <span className="concept-badge">A product concept</span>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-illustration" aria-hidden="true">
            <span className="paper blue">✳</span>
            <span className="paper orange">◡</span>
            <span className="paper lavender">✓</span>
          </div>
          <p className="eyebrow">For people who make things</p>
          <h1 id="hero-title">
            Make room for
            <br />
            <span>better work.</span>
          </h1>
          <p className="hero-description">{siteConfig.description}</p>
          <div className="hero-actions">
            <a className="button primary" href="#workspace">
              Explore the workspace
            </a>
            <a className="button secondary" href="#features">
              See the idea
            </a>
          </div>
          <p className="concept-note">
            A calm workspace, imagined. Sign-up is not available yet.
          </p>
        </section>
        <section
          id="workspace"
          className="container"
          aria-labelledby="workspace-title"
        >
          <h2 id="workspace-title" className="sr-only">
            JeriFlow workspace concept
          </h2>
          <DashboardPreview />
          <p className="preview-caption">
            Illustrative workspace · fictional sample data · not a live
            application
          </p>
        </section>
        <section
          id="features"
          className="container features-section"
          aria-labelledby="features-title"
        >
          <p className="eyebrow">Everything in its place</p>
          <div className="section-heading">
            <h2 id="features-title">
              One workspace.
              <br />
              Less juggling.
            </h2>
            <p>
              For freelancers, designers, developers, and small creative teams.
              A little more clarity from the first idea to the final handoff.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span
                  className={`feature-symbol ${feature.tone}`}
                  aria-hidden="true"
                >
                  {feature.symbol}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          id="studio"
          className="container studio-section"
          aria-labelledby="studio-title"
        >
          <div className="studio-panel">
            <p className="eyebrow">Jerico Studio presents</p>
            <h2 id="studio-title">
              Good ideas need
              <br />
              room to grow.
            </h2>
            <p>
              JeriFlow is a portfolio concept exploring a friendlier way to
              organize creative work. This is the beginning of that idea.
            </p>
            <a className="button primary" href="#workspace">
              Take another look
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <a className="brand" href="#main">
          <BrandMark />
          <span>JeriFlow</span>
        </a>
        <p>By Jerico Studio · Concept / portfolio showcase</p>
        <a href="#main">Back to top</a>
      </footer>
    </>
  );
}
