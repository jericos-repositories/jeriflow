import type { ReactNode } from "react";
import { ArrowUpRight, LayoutGrid, RotateCcw } from "lucide-react";

export type DemoProps = { tasks: readonly string[] };

export function DemoFrame({ name, hint, onReset, children }: {
  name: string; hint: string; onReset: () => void; children: ReactNode;
}) {
  return (
    <div className="solution-demo" role="group" aria-label={`${name} interactive demo`}>
      <div className="sd-toolbar">
        <span className="sd-workspace-mark"><LayoutGrid size={13} aria-hidden="true" /></span>
        <span>JeriFlow <span className="sd-toolbar-divider">/</span> <strong>{name}</strong></span>
        <span className="sd-sample">Sample workspace</span>
      </div>
      {children}
      <div className="sd-footer">
        <span>Fictional demo · resets on reload</span>
        <button type="button" onClick={onReset} aria-label={`Reset ${name} demo`}><RotateCcw size={13} aria-hidden="true" />Reset</button>
      </div>
      <p className="sd-hint"><ArrowUpRight size={14} aria-hidden="true" />{hint}</p>
    </div>
  );
}

export function Completion({ done, total, label }: { done: number; total: number; label: string }) {
  return <div className="sd-completion">
    <div className="sd-completion-label" role="status"><span>{done} of {total} complete</span><strong>{Math.round(done / total * 100)}%</strong></div>
    <div className="sd-progress" role="progressbar" aria-label={label} aria-valuenow={done} aria-valuemin={0} aria-valuemax={total} aria-valuetext={`${Math.round(done / total * 100)}% complete`}>
      <span style={{ width: `${done / total * 100}%` }} />
    </div>
  </div>;
}

export function Avatar({ initials, tone = "lavender" }: { initials: string; tone?: string }) {
  return <span className={`sd-avatar ${tone}`} aria-hidden="true">{initials}</span>;
}
