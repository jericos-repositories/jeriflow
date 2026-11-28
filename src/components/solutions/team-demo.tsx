"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, MessageSquare, Users } from "lucide-react";
import { Avatar, DemoFrame, type DemoProps } from "./demo-ui";

const members = [
  { name: "Alex", initials: "AL", role: "Project lead", tone: "blue", responsibility: "Keep the brief clear and the week focused.", update: "The priorities are ready for review. Let’s confirm the handoff order before we start the next milestone." },
  { name: "Maya", initials: "MY", role: "Designer", tone: "lavender", responsibility: "Connect the design decisions to the build.", update: "The review notes are attached to the design handoff. Each interaction now has a clear decision for development." },
  { name: "Noah", initials: "NH", role: "Developer", tone: "mint", responsibility: "Bring the next milestone through release checks.", update: "The build is ready for a shared review. The remaining release checks are listed beside the milestone." },
] as const;

export function TeamDemo({ tasks }: DemoProps) {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const member = members[selected];
  return (
    <DemoFrame name="Team workspace" hint="Meet the team. Explore a priority and its update." onReset={() => { setSelected(0); setExpanded(false); }}>
      <div className="sd-body">
        <div className="sd-title-row"><span className="sd-overline"><Users size={13} aria-hidden="true" />NORTHLINE STUDIO</span><span className="sd-badge warm">3 teammates</span></div>
        <h3 className="sd-project-title">A good week, together.</h3>
        <div className="sd-member-picker" role="group" aria-label="Fictional team members">{members.map((person, index) => <button type="button" key={person.name} aria-pressed={selected === index} onClick={() => { setSelected(index); setExpanded(false); }}><Avatar initials={person.initials} tone={person.tone} /><span>{person.name}<small>{person.role}</small></span></button>)}</div>
        <div className="sd-responsibility" key={member.name}><strong>{member.name}’s focus</strong><p>{member.responsibility}</p></div>
        <div className="sd-priorities"><span className="sd-overline">THIS WEEK’S PRIORITIES</span>
          {tasks.map((task, index) => <button type="button" key={task} className={`sd-priority ${selected === index ? "sd-priority-active" : ""}`} aria-pressed={selected === index} aria-label={`${task} — assigned to ${members[index].name}`} onClick={() => { setSelected(index); setExpanded(false); }}><span className="sd-priority-check" aria-hidden="true">{index === 0 ? <Check size={12} /> : <ArrowUpRight size={12} />}</span><span>{task}</span><Avatar initials={members[index].initials} tone={members[index].tone} /></button>)}
        </div>
        <button type="button" className="sd-update-toggle" aria-expanded={expanded} aria-controls="solution-team-update" onClick={() => setExpanded(current => !current)}><MessageSquare size={14} aria-hidden="true" /><span>{member.name}’s project update<small>Sample activity · this week</small></span><ChevronDown size={15} aria-hidden="true" /></button>
        {expanded && <div id="solution-team-update" className="sd-team-update"><Avatar initials={member.initials} tone={member.tone} /><p>{member.update}</p></div>}
      </div>
    </DemoFrame>
  );
}
