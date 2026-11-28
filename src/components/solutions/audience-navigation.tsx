"use client";

import { useEffect, useState } from "react";
import { BriefcaseBusiness, Code2, PenTool, Users } from "lucide-react";

const icons = [BriefcaseBusiness, PenTool, Code2, Users];

export function AudienceNavigation({ audiences }: { audiences: { id: string; name: string }[] }) {
  const [active, setActive] = useState(audiences[0].id);

  useEffect(() => {
    let frame = 0;
    const sections = audiences.map(({ id }) => document.getElementById(id));
    function update() {
      frame = 0;
      const line = Math.max(190, window.innerHeight * 0.35);
      let current = audiences[0].id;
      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= line) current = audiences[index].id;
      });
      setActive(current);
    }
    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [audiences]);

  return (
    <nav className="solutions-nav" aria-label="Audience sections">
      <div className="solutions-pills container">
        {audiences.map(({ id, name }, index) => {
          const Icon = icons[index];
          return <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
            <Icon size={16} strokeWidth={1.75} aria-hidden="true" />{name}
            <span className="solutions-pill-dot" aria-hidden="true" />
          </a>;
        })}
      </div>
    </nav>
  );
}
