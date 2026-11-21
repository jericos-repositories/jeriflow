import {
  CheckSquare2,
  Columns3,
  Users,
  ChartNoAxesCombined,
  NotebookPen,
  Focus,
} from "lucide-react";

export const features = [
  {
    slug: "task-management",
    title: "Task management",
    short: "A clear next step.",
    description:
      "Turn a loose idea into a task with a clear owner, a due date, and enough context to get going.",
    useCase: "Plan a client handoff without losing the little details.",
    icon: CheckSquare2,
    tone: "blue",
  },
  {
    slug: "project-boards",
    title: "Project boards",
    short: "See the bigger picture.",
    description:
      "Bring every stage into view. Move work from a first thought to a finished deliverable on one simple board.",
    useCase: "Track a website from discovery through launch.",
    icon: Columns3,
    tone: "lavender",
  },
  {
    slug: "team-collaboration",
    title: "Team collaboration",
    short: "Keep the context close.",
    description:
      "Keep feedback, handoffs, and decisions alongside the work, so the next person knows where to begin.",
    useCase: "Leave a design review beside the task it belongs to.",
    icon: Users,
    tone: "mint",
  },
  {
    slug: "progress-tracking",
    title: "Progress tracking",
    short: "Know where things stand.",
    description:
      "See completed work and upcoming milestones together, with a shared view of what still needs attention.",
    useCase: "Spot an unfinished handoff before the weekly review.",
    icon: ChartNoAxesCombined,
    tone: "warm",
  },
  {
    slug: "project-notes",
    title: "Project notes",
    short: "Give good ideas a home.",
    description:
      "Keep the brief, useful links, and project decisions in a note that stays connected to the work.",
    useCase: "Revisit the original brief when the scope starts to drift.",
    icon: NotebookPen,
    tone: "lavender",
  },
  {
    slug: "focused-workflows",
    title: "Focused workflows",
    short: "Make space to make.",
    description:
      "Choose a view that suits the moment. Keep your next priorities visible and the rest within reach.",
    useCase: "Start the day with a short list instead of a full backlog.",
    icon: Focus,
    tone: "blue",
  },
] as const;

export const audiences = [
  {
    id: "freelancers",
    name: "Freelancers",
    heading: "More making. Less project juggling.",
    problem:
      "Client feedback, delivery dates, and personal to-dos rarely arrive in one place.",
    benefit:
      "Give each client a clear home, keep the next deliverable visible, and take your context with you when you switch projects.",
    scenario:
      "A freelance web designer planning two client handoffs in the same week.",
    tasks: [
      "Confirm the landing page brief",
      "Review the client's feedback",
      "Prepare the final handoff",
    ],
    image: "focus",
    tone: "blue",
  },
  {
    id: "designers",
    name: "Designers",
    heading: "From a rough idea to a thoughtful handoff.",
    problem:
      "Creative work needs room for exploration and a clear record of the decisions that follow.",
    benefit:
      "Keep references near your brief, organize review rounds, and leave a trail of decisions that the next person can follow.",
    scenario:
      "A UI designer moving a dashboard from early wireframes through review.",
    tasks: [
      "Collect visual references",
      "Review dashboard wireframes",
      "Document interaction decisions",
    ],
    image: "collaboration",
    tone: "lavender",
  },
  {
    id: "developers",
    name: "Developers",
    heading: "Keep the build connected to the plan.",
    problem:
      "A ticket alone does not always explain the reasoning behind a feature.",
    benefit:
      "Pair tasks with acceptance notes, arrange work by milestone, and make the next release easier to understand.",
    scenario: "An independent developer preparing a small website release.",
    tasks: [
      "Define the form's acceptance notes",
      "Build and review the interface",
      "Run the release checks",
    ],
    image: "analytics",
    tone: "mint",
  },
  {
    id: "small-teams",
    name: "Small teams",
    heading: "Shared work. A shared sense of direction.",
    problem:
      "When a team is small, everyone needs visibility without another heavy process.",
    benefit:
      "Keep ownership, current work, and handoffs in a workspace that is easy to scan before the next conversation.",
    scenario:
      "A small creative studio coordinating design and development for a client.",
    tasks: [
      "Agree on the week's priorities",
      "Connect design and development",
      "Review the next milestone",
    ],
    image: "teamwork",
    tone: "warm",
  },
] as const;

export const generalFaqs = [
  {
    question: "What is JeriFlow?",
    answer:
      "JeriFlow brings projects, tasks, notes, and progress into one calm workspace, with a clear place for the work and the context around it.",
  },
  {
    question: "Who is it designed for?",
    answer:
      "Freelancers, designers, developers, and small creative teams who want a calmer way to keep projects, tasks, and notes connected.",
  },
  {
    question: "How can I explore the workspace?",
    answer:
      "Open the Product page and explore with sample projects. Switch views, move a task, or add a new one. No account is needed, and your changes reset when you reload.",
  },
  {
    question: "How do the different views fit together?",
    answer:
      "Board shows each stage of the work. Tasks brings the details into a list. Notes keeps the brief and review comments close, while Progress shows what is done and what comes next.",
  },
];

export const pricingFaqs = [
  {
    question: "Which plan fits the way I work?",
    answer:
      "Use Starter as a guide for personal organization, Creator for more involved creative projects, and Team for shared priorities. The comparison brings the differences together so you can explore the right fit.",
  },
  {
    question: "How does the yearly option work?",
    answer:
      "The yearly view applies a 20% discount to the monthly per-person price. Creator is $115.20 per person for the full year, and Team is $230.40. Switch between Monthly and Yearly to compare the totals.",
  },
  {
    question: "What is included in Starter?",
    answer:
      "The Starter comparison covers a personal workspace, basic task boards, project notes, and a progress overview: a focused set of tools for organizing your own projects.",
  },
  {
    question: "Can I explore the workspace before choosing?",
    answer:
      "Yes. Open the workspace on the Product page to try boards, tasks, notes, and progress with sample projects. No account or payment details are needed.",
  },
];
