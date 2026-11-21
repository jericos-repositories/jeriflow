"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { plans, displayPrice, yearlyDiscount } from "@/lib/pricing";
import { ButtonLink } from "@/components/ui/button-link";
export function PricingTable() {
  const [yearly, setYearly] = useState(false);
  return (
    <div className="pricing-section" data-interval={yearly ? "yearly" : "monthly"}>
      <div className="pricing-toolbar">
        <div
          className="interval-toggle"
          role="group"
          aria-label="Pricing interval"
        >
          <button
            type="button"
            aria-pressed={!yearly}
            onClick={() => setYearly(false)}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={yearly}
            onClick={() => setYearly(true)}
          >
            Yearly <span>−20%</span>
          </button>
        </div>
        <span className="fine-print">
          Prices in USD. Find the right fit for your work.
        </span>
      </div>
      <div className="pricing-grid" aria-live="polite" data-motion-stagger>
        {plans.map((plan) => {
          const price = yearly
            ? plan.monthly * (1 - yearlyDiscount)
            : plan.monthly;
          return (
            <article
              key={plan.id}
              className={`price-card ${plan.featured ? "featured" : ""}`}
            >
              <div className="plan-title">
                <h3>{plan.name}</h3>
                {plan.featured && <span>Made for makers</span>}
              </div>
              <p>{plan.description}</p>
              <div className="plan-price" key={yearly ? "yearly" : "monthly"}>
                <strong>{displayPrice(price)}</strong>
                <span>
                  {plan.monthly === 0 ? "/ month" : "/ person / month"}
                </span>
              </div>
              <p className="billing-note">
                {yearly && plan.monthly > 0
                  ? `${displayPrice(price * 12)} per person for the full year.`
                  : plan.monthly === 0
                    ? "For your personal projects."
                    : "Per person, one month at a time."}
              </p>
              <ButtonLink
                href="/pricing#plan-comparison"
                variant={plan.featured ? "primary" : "outline"}
              >
                Explore {plan.name}
              </ButtonLink>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      <p className="pricing-disclaimer">
        A pricing guide for comparing plans. Yearly totals include 20% off the
        monthly rate. This site does not take payments.
      </p>
    </div>
  );
}
