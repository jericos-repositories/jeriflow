import { Check, Minus } from "lucide-react";
import { PageIntro } from "@/components/marketing/page-intro";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PricingTable } from "@/components/marketing/pricing-table";
import { Faq } from "@/components/marketing/faq";
import { Cta } from "@/components/marketing/cta";
import { pricingFaqs } from "@/lib/content";
import { pageMetadata } from "@/lib/site-config";
export const metadata = pageMetadata(
  "Proposed pricing",
  "Explore illustrative Starter, Creator, and Team plans for JeriFlow. No active subscriptions or payments.",
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
        description="A proposed pricing direction for individuals and small teams. Explore the idea, with every assumption out in the open."
      />
      <section className="container pricing-page">
        <PricingTable />
      </section>
      <section className="container section">
        <SectionHeading
          eyebrow="THE PROPOSED DETAILS"
          title="A place for every stage."
          description="This comparison describes the concept's intended plan structure. Features and limits are not finalized."
        />
        <div className="table-scroll">
          <table className="comparison-table">
            <caption className="sr-only">
              Illustrative JeriFlow plan features
            </caption>
            <thead>
              <tr>
                <th scope="col">Proposed capability</th>
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
                          <span className="sr-only">Proposed inclusion</span>
                        </>
                      ) : (
                        <>
                          <Minus size={17} aria-hidden="true" />
                          <span className="sr-only">
                            Not proposed in this plan
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
