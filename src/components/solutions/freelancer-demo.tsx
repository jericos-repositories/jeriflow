"use client";

import { useState } from "react";
import { CalendarDays, Check, FolderOpen } from "lucide-react";
import { Avatar, Completion, DemoFrame, type DemoProps } from "./demo-ui";

const clients = [
  { name: "Olive Studio", initials: "OS", project: "A fresh home for Olive.", due: "Due Thursday", tone: "mint" },
  { name: "Forma Goods", initials: "FG", project: "A thoughtful shop launch.", due: "Due Friday", tone: "warm" },
] as const;

export function FreelancerDemo({ tasks }: DemoProps) {
  const [selected, setSelected] = useState(0);
  const [completed, setCompleted] = useState<number[][]>([[0], []]);
  const client = clients[selected];
  const done = completed[selected];

  function toggle(index: number) {
    setCompleted(current => current.map((items, project) => project !== selected ? items :
      items.includes(index) ? items.filter(item => item !== index) : [...items, index]));
  }

  return (
    <DemoFrame name="Client projects" hint="Check a task. Make a little room for what’s next." onReset={() => { setSelected(0); setCompleted([[0], []]); }}>
      <div className="sd-client-picker" role="group" aria-label="Client projects">
        {clients.map((item, index) => <button type="button" key={item.name} aria-pressed={selected === index} onClick={() => setSelected(index)}>
          <Avatar initials={item.initials} tone={item.tone} /><span>{item.name}<small>Website handoff</small></span>
          {selected === index && <span className="sd-selected-dot" aria-hidden="true" />}
        </button>)}
      </div>
      <div className="sd-body">
        <div className="sd-title-row"><span className="sd-overline"><FolderOpen size={13} aria-hidden="true" />CLIENT HANDOFF</span><span className="sd-date"><CalendarDays size={12} aria-hidden="true" />{client.due}</span></div>
        <h3 className="sd-project-title">{client.project}</h3>
        <span className={`sd-badge ${done.length === tasks.length ? "mint" : "blue"}`}>{done.length === tasks.length ? "Ready for handoff" : "In progress"}</span>
        <div className="sd-task-list">
          {tasks.map((task, index) => <label key={task} className={`sd-task ${done.includes(index) ? "sd-done" : ""}`}>
            <span className="sd-checkbox"><input type="checkbox" checked={done.includes(index)} onChange={() => toggle(index)} /><Check size={12} aria-hidden="true" /></span>
            <span className="sd-task-copy"><span>{task}</span><small>{["Planning", "Review", "Delivery"][index]}</small></span>
            <span className="sd-task-date">{["Tue", "Wed", "Thu"][index]}</span>
          </label>)}
        </div>
        <Completion done={done.length} total={tasks.length} label={`${client.name} project completion`} />
      </div>
    </DemoFrame>
  );
}
