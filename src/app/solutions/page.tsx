import { ArrowRight, BriefcaseBusiness, Code2, PenTool, Users } from "lucide-react";
import { audiences } from "@/lib/content";
import { Cta } from "@/components/marketing/cta";
import { ButtonLink } from "@/components/ui/button-link";
import { AudienceNavigation } from "@/components/solutions/audience-navigation";
import { FreelancerDemo } from "@/components/solutions/freelancer-demo";
import { DesignerDemo } from "@/components/solutions/designer-demo";
import { DeveloperDemo } from "@/components/solutions/developer-demo";
import { TeamDemo } from "@/components/solutions/team-demo";
import { pageMetadata } from "@/lib/site-config";
import "./solutions.css";

const workflows = [
  { icon: BriefcaseBusiness, Demo: FreelancerDemo },
  { icon: PenTool, Demo: DesignerDemo },
  { icon: Code2, Demo: DeveloperDemo },
  { icon: Users, Demo: TeamDemo },
] as const;

export const metadata = pageMetadata(
  "Solutions",
  "Explore JeriFlow use cases for freelancers, designers, developers, and small creative teams.",
  "/solutions",
);
export default function SolutionsPage() {
  return (
    <div className="solutions-page">
      <section className="solutions-intro container" aria-labelledby="solutions-title">
        <p className="eyebrow">YOUR WORK. YOUR WAY.</p>
        <h1 id="solutions-title">
          <span>Different kinds of makers.</span>{" "}
          <span>A shared need for clarity.</span>
        </h1>
        <p className="intro-description">
          A client handoff, a design review, a small release. Give the work that moves your day forward a calmer place to live.
        </p>
      </section>
      <AudienceNavigation audiences={audiences.map(({ id, name }) => ({ id, name }))} />
      <div className="container solutions-stories">
        {audiences.map((audience, index) => {
          const { icon: Icon, Demo } = workflows[index];
          return (
          <section
            id={audience.id}
            className={`solutions-story solutions-${audience.tone}`}
            aria-labelledby={`${audience.id}-title`}
            tabIndex={-1}
            key={audience.id}
          >
            <div className="solutions-copy" data-motion-stagger>
              <div className="solutions-category">
                <span className={`solutions-icon ${audience.tone}`}><Icon size={19} strokeWidth={1.75} aria-hidden="true" /></span>
                <p className="eyebrow">FOR {audience.name.toUpperCase()}</p>
                <span className="solutions-number" aria-hidden="true">0{index + 1}</span>
              </div>
              <h2 id={`${audience.id}-title`}>{audience.heading}</h2>
              <p className="body-copy">{audience.problem}</p>
              <p className="body-copy">{audience.benefit}</p>
              <ButtonLink href="/product#demo" variant="text">
                Explore the workflow <ArrowRight size={16} aria-hidden="true" />
              </ButtonLink>
              <div className="solutions-scenario">
                <span className="mini-label">A DAY IN YOUR FLOW</span>
                <p>{audience.scenario}</p>
              </div>
            </div>
            <div className={`solutions-preview ${audience.tone}`} data-motion="dashboard">
              <Demo tasks={audience.tasks} />
            </div>
          </section>
          );
        })}
      </div>
      <Cta />
    </div>
  );
}
