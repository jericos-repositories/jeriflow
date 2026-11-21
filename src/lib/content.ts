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
      "JeriFlow is a proposed project and workflow workspace by Jerico Studio. This portfolio website explores its brand, intended capabilities, and interaction design.",
  },
  {
    question: "Who is it designed for?",
    answer:
      "Freelancers, designers, developers, and small creative teams who want a calmer way to keep projects, tasks, and notes connected.",
  },
  {
    question: "Can I create an account today?",
    answer:
      "Not yet. The workspace on this site is an interactive demonstration with fictional data. It does not create accounts or save real team work.",
  },
  {
    question: "Can I try the product idea?",
    answer:
      "Yes. On the Product page, switch views, change the sample project, add a sample task, and move cards through the board. Changes stay in the preview and reset when it reloads.",
  },
];

export const pricingFaqs = [
  {
    question: "Are these plans available to purchase?",
    answer:
      "No. All plans, feature allocations, and prices are illustrative product proposals. No subscription or payment is collected on this website.",
  },
  {
    question: "How does the yearly option work?",
    answer:
      "The yearly illustration applies a 20% discount to the monthly per-person price. Creator is $115.20 per person per year and Team is $230.40 per person per year. These are assumptions for this concept, not live offers.",
  },
  {
    question: "What does the Starter plan represent?",
    answer:
      "A proposed free starting point for an individual workspace with basic task organization and project notes. Its limits have not been finalized.",
  },
  {
    question: "Can I ask about the concept?",
    answer:
      "The Contact page lets you explore a validated demo form. Message delivery is not connected yet, and the form clearly reports that nothing is sent.",
  },
];
