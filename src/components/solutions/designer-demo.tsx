"use client";

import { useState } from "react";
import { Check, MessageSquare, PanelsTopLeft } from "lucide-react";
import { Avatar, DemoFrame, type DemoProps } from "./demo-ui";

const comments = [
  { author: "Maya", initials: "MY", location: "Overview cards", text: "Give the summary a little more breathing room. The numbers should be easy to scan." },
  { author: "Noah", initials: "NH", location: "Project activity", text: "Keep the project name next to each update so the context travels with the activity." },
];

export function DesignerDemo({ tasks }: DemoProps) {
  const [selected, setSelected] = useState<number | null>(0);
  const [resolved, setResolved] = useState<number[]>([]);
  const [version, setVersion] = useState("Visual design");
  const comment = selected === null ? null : comments[selected];
  return (
    <DemoFrame name="Design review" hint="Choose a pin. Keep the feedback close to the work." onReset={() => { setSelected(0); setResolved([]); setVersion("Visual design"); }}>
      <div className="sd-body sd-review-body">
        <div className="sd-title-row"><span className="sd-overline"><PanelsTopLeft size={13} aria-hidden="true" />ATELIER DASHBOARD</span><span className={`sd-badge ${resolved.length === 2 ? "mint" : "lavender"}`} role="status">{resolved.length === 2 ? "Review complete" : `${2 - resolved.length} open comments`}</span></div>
        <div className="sd-view-switch" role="group" aria-label="Design version">
          {["Wireframe", "Visual design"].map(view => <button type="button" key={view} aria-pressed={version === view} onClick={() => setVersion(view)}>{view}</button>)}
        </div>
        <div className={`sd-design-canvas ${version === "Wireframe" ? "sd-wireframe" : ""}`}>
          <div className="sd-mockup" aria-label={`${version} dashboard preview`} role="img">
            <div className="sd-mock-sidebar"><PanelsTopLeft size={15} /><i /><i /><i /></div>
            <div className="sd-mock-main"><span className="sd-mock-greeting">A little overview.</span><span className="sd-mock-subtitle">Space for your next good idea.</span>
              <div className="sd-mock-stats"><div><small>Projects</small><strong>06</strong></div><div><small>In review</small><strong>02</strong></div><div><small>Completed</small><strong>12</strong></div></div>
              <div className="sd-mock-chart"><span>Project activity</span><div>{[28, 46, 38, 68, 55, 85, 73, 95].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
            </div>
          </div>
          {comments.map((item, index) => <button type="button" key={item.location} className={`sd-comment-pin sd-pin-${index} ${resolved.includes(index) ? "sd-pin-resolved" : ""}`} aria-label={`Comment ${index + 1}: ${item.location}`} aria-expanded={selected === index} aria-controls="solution-review-feedback" onClick={() => setSelected(current => current === index ? null : index)}>{resolved.includes(index) ? <Check size={15} aria-hidden="true" /> : index + 1}</button>)}
        </div>
        <div className="sd-feedback-slot">
          {comment && selected !== null ? <div className="sd-feedback" id="solution-review-feedback" key={selected}>
            <div className="sd-feedback-author"><Avatar initials={comment.initials} /><strong>{comment.author}<small>{comment.location}</small></strong><MessageSquare size={14} aria-hidden="true" /></div>
            <p>{comment.text}</p>
            <button type="button" className="sd-resolve" aria-pressed={resolved.includes(selected)} onClick={() => setResolved(current => current.includes(selected) ? current.filter(item => item !== selected) : [...current, selected])}><Check size={13} aria-hidden="true" />{resolved.includes(selected) ? "Resolved · reopen" : "Mark as resolved"}</button>
          </div> : <p className="sd-feedback-empty" id="solution-review-feedback"><MessageSquare size={18} aria-hidden="true" />Select a comment pin to see the conversation.</p>}
        </div>
        <ul className="sd-review-checklist">{tasks.map(task => <li key={task}><Check size={12} aria-hidden="true" />{task}</li>)}</ul>
      </div>
    </DemoFrame>
  );
}
