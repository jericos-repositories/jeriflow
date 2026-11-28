"use client";

import { useState } from "react";
import { Check, GitBranch, Rocket } from "lucide-react";
import { Completion, DemoFrame, type DemoProps } from "./demo-ui";

export function DeveloperDemo({ tasks }: DemoProps) {
  const [done, setDone] = useState<number[]>([0]);
  const percentage = Math.round(done.length / tasks.length * 100);
  return (
    <DemoFrame name="Release plan" hint="Complete a milestone. See the release take shape." onReset={() => setDone([0])}>
      <div className="sd-body">
        <div className="sd-title-row"><span className="sd-overline"><GitBranch size={13} aria-hidden="true" />WEBSITE / V1.0</span><span className={`sd-badge ${done.length === tasks.length ? "mint" : "neutral"}`}>{done.length === tasks.length ? "Ready to release" : "Preparing release"}</span></div>
        <div className="sd-release-summary">
          <div><span className="sd-overline">ONE CLEAR NEXT RELEASE</span><h3>Small steps.<br />A solid launch.</h3><span className="sd-date"><Rocket size={13} aria-hidden="true" />Website release</span></div>
          <div className="sd-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle className="sd-ring-track" cx="60" cy="60" r="50" /><circle className="sd-ring-fill" cx="60" cy="60" r="50" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - percentage} /></svg><strong aria-hidden="true">{percentage}<small>%</small></strong></div>
        </div>
        <div className="sd-milestones">
          {tasks.map((task, index) => <label className={`sd-task sd-milestone ${done.includes(index) ? "sd-done" : ""}`} key={task}>
            <span className="sd-checkbox"><input type="checkbox" checked={done.includes(index)} onChange={() => setDone(current => current.includes(index) ? current.filter(item => item !== index) : [...current, index])} /><Check size={12} aria-hidden="true" /></span>
            <span className="sd-task-copy"><small>0{index + 1} / {["PLAN", "BUILD", "SHIP"][index]}</small><span>{task}</span></span>
            <span className={`sd-milestone-status ${done.includes(index) ? "is-complete" : ""}`}>{done.includes(index) ? "Complete" : "To do"}</span>
          </label>)}
        </div>
        <Completion done={done.length} total={tasks.length} label="Release readiness" />
      </div>
    </DemoFrame>
  );
}
