import { Check, Minus } from "lucide-react";
import { PageIntro } from "@/components/marketing/page-intro";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PricingTable } from "@/components/marketing/pricing-table";
import { Faq } from "@/components/marketing/faq";
import { Cta } from "@/components/marketing/cta";
import { pricingFaqs } from "@/lib/content";
import { pageMetadata } from "@/lib/site-config";
export const metadata = pageMetadata(
  "Pricing",
  "Compare Starter, Creator, and Team plans for JeriFlow. Find the right fit for personal projects, creative work, and shared priorities.",
  "/pricing",
);
const comparison = [
  { name: "Personal task boards", values: [true, true, true] },
  { name: "Project notes", values: [true, true, true] },
  { name: "Progress overview", values: [true, true, true] },
  { name: "Advanced project views", values: [false, true, true] },
  { name: "Milestone tracking", values: [false, true, true] },
  { name: "Client-friendly sharing", values: [false, true, true] },
  { name: "Shared team workspaces", values: [false, false, true] },
  { name: "Team permissions", values: [false, false, true] },
  { name: "Workload overview", values: [false, false, true] },
];
export default function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="ROOM TO GROW"
        title="Start small. Find your flow."
        description="A little structure for your own projects. More room for your creative work. A shared direction for your team. Compare the options and find your fit."
      />
      <section className="container pricing-page">
        <PricingTable />
      </section>
      <section className="container section" id="plan-comparison">
        <SectionHeading
          eyebrow="THE DETAILS, TOGETHER"
          title="A place for every stage."
          description="Compare the tools for each stage of your work, from personal task boards to shared team priorities."
        />
        <div className="table-scroll" data-motion="reveal">
          <table className="comparison-table">
            <caption className="sr-only">
              JeriFlow plan comparison
            </caption>
            <thead>
              <tr>
                <th scope="col">Capability</th>
                <th scope="col">Starter</th>
                <th scope="col">Creator</th>
                <th scope="col">Team</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.name}>
                  <th scope="row">{row.name}</th>
                  {row.values.map((included, index) => (
                    <td key={index}>
                      {included ? (
                        <>
                          <Check size={18} aria-hidden="true" />
                          <span className="sr-only">Included</span>
                        </>
                      ) : (
                        <>
                          <Minus size={17} aria-hidden="true" />
                          <span className="sr-only">
                            Not included in this plan
                          </span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="container section faq-section">
        <SectionHeading
          eyebrow="A LITTLE MORE CLARITY"
          title="Before you choose a direction."
          center
        />
        <Faq items={pricingFaqs} />
      </section>
      <Cta />
    </>
  );
}
