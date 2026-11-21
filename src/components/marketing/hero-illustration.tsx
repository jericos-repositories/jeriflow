import type { ReactNode } from "react";

// The existing creative-flow.svg geometry, grouped so each circle can move
// independently. Keep the source asset and its provenance unchanged.
const illustrations: { circle: ReactNode; drawing: ReactNode }[] = [
  {
    circle: <circle cx="85" cy="85" r="46" fill="#fff" />,
    drawing: <><path d="m67 70 30 25-6 8-30-25z" fill="#171717" /><path d="m97 95 6 13-12-5" /></>,
  },
  {
    circle: <circle cx="173" cy="78" r="53" fill="#EAF5FF" />,
    drawing: <><circle cx="173" cy="78" r="20" /><path d="M165 74v1m16-1v1M164 84q9 11 18-1" /></>,
  },
  {
    circle: <circle cx="274" cy="78" r="63" fill="#FFB46E" />,
    drawing: <path d="m274 46 8 23 25 9-25 8-8 24-8-24-24-8 24-9z" fill="#171717" />,
  },
  {
    circle: <circle cx="380" cy="79" r="52" fill="#E9E5FF" />,
    drawing: <path d="M363 63h8m11 0h14m-33 16h8m11 0h14m-33 16h8m11 0h14" />,
  },
  {
    circle: <circle cx="468" cy="84" r="43" fill="#DBF3DF" />,
    drawing: <path d="m453 84 12 13 19-31" />,
  },
];

export function HeroIllustration() {
  return (
    <svg className="hero-art" width="540" height="160" viewBox="0 0 540 160" fill="none" aria-hidden="true" focusable="false">
      {illustrations.map(({ circle, drawing }, index) => (
        <g className="hero-art-entry" key={index}>
          <g className="hero-art-float">
            <g className="hero-art-hover">
              <g stroke="#171717" strokeWidth="2.5">{circle}</g>
              <g stroke="#171717" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">{drawing}</g>
            </g>
          </g>
        </g>
      ))}
      <path d="M60 20v12m-6-6h12M424 134v12m-6-6h12" stroke="#171717" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
