import { Lightbulb, Columns3, CircleCheck } from "lucide-react";
const steps = [
  {
    title: "Give the idea a home",
    text: "Start with a project and a short brief. Bring the goal, references, and next steps together.",
    icon: Lightbulb,
    tone: "warm",
  },
  {
    title: "Find your flow",
    text: "Break the work into tasks, choose a view, and make ownership and priorities clear.",
    icon: Columns3,
    tone: "blue",
  },
  {
    title: "Move it forward",
    text: "Keep notes close, review progress, and make the next handoff a little easier.",
    icon: CircleCheck,
    tone: "mint",
  },
];
export function Workflow() {
  return (
    <div className="workflow-grid">
      {steps.map((step) => (
        <article key={step.title}>
          <span className={`icon-tile ${step.tone}`}>
            <step.icon size={25} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
      ))}
    </div>
  );
}
