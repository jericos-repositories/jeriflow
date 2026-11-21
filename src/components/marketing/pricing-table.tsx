"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { plans, displayPrice, yearlyDiscount } from "@/lib/pricing";
import { ButtonLink } from "@/components/ui/button-link";
export function PricingTable() {
  const [yearly, setYearly] = useState(false);
  return (
    <div className="pricing-section">
      <div className="pricing-toolbar">
        <div
          className="interval-toggle"
          role="group"
          aria-label="Illustrative billing interval"
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
          Illustrative USD prices. No subscriptions are active.
        </span>
      </div>
      <div className="pricing-grid" aria-live="polite">
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
              <div className="plan-price">
                <strong>{displayPrice(price)}</strong>
                <span>
                  {plan.monthly === 0 ? "/ month" : "/ person / month"}
                </span>
              </div>
              <p className="billing-note">
                {yearly && plan.monthly > 0
                  ? `${displayPrice(price * 12)} per person, billed yearly (proposed).`
                  : plan.monthly === 0
                    ? "Proposed free individual plan."
                    : "Proposed monthly billing."}
              </p>
              <ButtonLink
                href="/contact#contact-form"
                variant={plan.featured ? "primary" : "outline"}
              >
                Discuss {plan.name}
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
        Plans and feature allocations are proposed concepts, not existing
        commercial offers. Yearly pricing assumes 20% off the monthly rate, paid
        for a full year.
      </p>
    </div>
  );
}
