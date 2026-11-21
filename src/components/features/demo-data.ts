export const taskSamples = [
  { id: "brief", title: "Review the creative brief", owner: "MK", due: "Today", label: "Planning" },
  { id: "page", title: "Build the first page", owner: "JL", due: "Today", label: "Design" },
  { id: "handoff", title: "Prepare the handoff notes", owner: "AS", due: "Tomorrow", label: "Delivery" },
] as const;

export const boardSamples = [
  { id: "idea", title: "Shape the idea", stage: 0, label: "Discovery", owner: "AS" },
  { id: "design", title: "Design the details", stage: 1, label: "Design", owner: "MK" },
  { id: "share", title: "Share the direction", stage: 2, label: "Review", owner: "JL" },
];

export const stages = ["To do", "In progress", "Done"] as const;

export const milestones = ["Discovery & direction", "Interface design", "Frontend build", "Launch checklist"] as const;

export const members = [
  { initials: "MK", name: "Maya Kim", role: "Design", color: "lavender", task: "Design the details", message: "The new layout gives the work room to breathe. Ready for your review.", reply: "Agreed. Let’s keep the project context beside each task." },
  { initials: "JL", name: "Jules Lee", role: "Development", color: "blue", task: "Build the first page", message: "The responsive layout is ready. I’ve linked the implementation notes here.", reply: "Thanks, Jules. I’ll check the smaller screens before handoff." },
  { initials: "AS", name: "Alex Santos", role: "Project lead", color: "mint", task: "Prepare the handoff notes", message: "The launch checklist is in place. Please add your final review notes to the task.", reply: "The design decisions are documented and ready to share." },
] as const;

export const notes = [
  { id: "brief", label: "Creative brief", title: "A good place to begin.", body: "The brief, the references, the decisions. One home for the things that give your work direction.", heading: "The direction", detail: "A calm, considered website for a small creative studio. Make the next step clear, from the first idea to the final handoff.", editable: "Keep the layout spacious. Bring the project story forward. Review the mobile experience before handoff." },
  { id: "review", label: "Design review", title: "Ready for the next review.", body: "Website redesign · Design decisions", heading: "What we agreed", detail: "Use one clear action per section. Keep feedback alongside the work and document the reasons behind each decision.", editable: "Check contrast and keyboard focus. Confirm the final content with the project team." },
] as const;
