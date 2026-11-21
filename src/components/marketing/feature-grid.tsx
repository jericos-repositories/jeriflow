import Link from "next/link";
import { features } from "@/lib/content";
export function FeatureGrid() {
  return (
    <div className="feature-grid">
      {features.map((feature) => (
        <Link
          href={`/features#${feature.slug}`}
          key={feature.slug}
          className="feature-card"
        >
          <span className={`icon-tile ${feature.tone}`}>
            <feature.icon size={24} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <span className="feature-link">
            Explore {feature.title.toLowerCase()}
          </span>
        </Link>
      ))}
    </div>
  );
}
