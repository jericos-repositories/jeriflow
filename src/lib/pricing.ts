export const yearlyDiscount = 0.2;
export const plans = [
  {
    id: "starter",
    name: "Starter",
    monthly: 0,
    description: "A little clarity for your own projects.",
    features: [
      "Personal workspace",
      "Basic task boards",
      "Project notes",
      "Progress overview",
    ],
    featured: false,
  },
  {
    id: "creator",
    name: "Creator",
    monthly: 12,
    description: "Room for your work to grow.",
    features: [
      "Everything in Starter",
      "Advanced project views",
      "Milestone tracking",
      "Client-friendly sharing",
    ],
    featured: true,
  },
  {
    id: "team",
    name: "Team",
    monthly: 24,
    description: "A shared home for a small team.",
    features: [
      "Everything in Creator",
      "Shared team workspaces",
      "Team permissions",
      "Workload overview",
    ],
    featured: false,
  },
] as const;
export function displayPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}
