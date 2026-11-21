// Fictional data for the marketing preview only.
export const workspaceStats = [
  { label: "Active projects", value: "08" },
  { label: "Tasks completed", value: "24" },
  { label: "On-track delivery", value: "92%" },
] as const;
export const boardLanes = [
  {
    title: "To do",
    task: "Define landing page content",
    tag: "Content",
    tone: "blue",
  },
  {
    title: "In progress",
    task: "Build responsive components",
    tag: "Development",
    tone: "lavender",
  },
  {
    title: "Done",
    task: "Finalize visual direction",
    tag: "Approved",
    tone: "mint",
  },
] as const;
export const features = [
  {
    title: "Project boards",
    description:
      "Move ideas from planning to delivery with flexible boards and clear milestones.",
    symbol: "▦",
    tone: "blue",
  },
  {
    title: "Project notes",
    description:
      "Keep briefs, decisions, and references beside the work they support.",
    symbol: "☷",
    tone: "lavender",
  },
  {
    title: "Progress tracking",
    description:
      "See what’s done, what’s next, and where work needs attention.",
    symbol: "✓",
    tone: "mint",
  },
] as const;
