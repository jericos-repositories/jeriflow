import { PageIntro } from "@/components/marketing/page-intro";
import { SectionHeading } from "@/components/marketing/section-heading";
import { WorkspaceDemo } from "@/components/product-preview/workspace-demo";
import {
  NotePreview,
  ProgressPreview,
} from "@/components/product-preview/mini-previews";
import { Workflow } from "@/components/marketing/workflow";
import { Cta } from "@/components/marketing/cta";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/site-config";
export const metadata = pageMetadata(
  "The product",
  "Explore the JeriFlow workspace: project boards, tasks, connected notes, team context, and clear progress.",
  "/product",
);
export default function ProductPage() {
  return (
    <>
      <PageIntro
        eyebrow="THE JERIFLOW WORKSPACE"
        title="A place for the work. And everything around it."
        description="A calm home for your projects, tasks, notes, and team context. Familiar enough to get started. Thoughtful enough to stay out of your way."
      >
        <ButtonLink href="#demo">Explore the workspace</ButtonLink>
      </PageIntro>
      <section
        id="demo"
        className="container demo-section"
        aria-label="Interactive workspace"
      >
        <WorkspaceDemo />
      </section>
      <section className="container section">
        <SectionHeading
          eyebrow="FROM A FIRST IDEA"
          title="A simple rhythm for meaningful work."
          description="Connect a project brief to a board, and the board to the people moving it forward."
        />
        <Workflow />
      </section>
      <section className="section section-surface">
        <div className="container split-layout" data-motion-stagger>
          <div>
            <p className="eyebrow">THE CONTEXT COMES WITH YOU</p>
            <h2>
              A task is better
              <br />
              with the whole story.
            </h2>
            <p className="body-copy">
              Create a project around a clear goal. Add the brief, break it into
              tasks, and keep decisions beside the work they explain.
            </p>
            <p className="body-copy">
              Open Notes to see the brief and review comments. Switch back to
              Board to see the same work in motion.
            </p>
            <ButtonLink href="#demo" variant="text">
              Explore project notes
            </ButtonLink>
          </div>
          <NotePreview />
        </div>
      </section>
      <section className="container section split-layout" data-motion-stagger>
        <ProgressPreview />
        <div>
          <p className="eyebrow">SHARED DIRECTION</p>
          <h2>
            Less “where are we?”
            <br />
            More moving forward.
          </h2>
          <p className="body-copy">
            Clear ownership and visible milestones keep the next step in
            sight. Everyone should be able to pick
            up the thread without another status meeting.
          </p>
          <p className="body-copy">
            Move a task to Done, then open Progress to see your completion
            summary update.
          </p>
          <ButtonLink href="/features" variant="outline">
            Explore all six capabilities
          </ButtonLink>
        </div>
      </section>
      <Cta />
    </>
  );
}
