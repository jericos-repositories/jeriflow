"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Check, CheckCheck, ChevronRight, Circle, Columns3, FileText, Focus, LayoutGrid, List, MessageSquare, RotateCcw } from "lucide-react";
import { boardSamples, members, milestones, notes, stages, taskSamples } from "./demo-data";
import "./feature-demos.css";

type Feature = "task-management" | "project-boards" | "team-collaboration" | "progress-tracking" | "project-notes" | "focused-workflows";

function DemoFrame({ children, name, hint, onReset }: { children: ReactNode; name: string; hint: string; onReset: () => void }) {
  return (
    <div className="jf-demo-frame" role="group" aria-label={`${name} interactive demo`}>
      <div className="jf-demo-projectBar"><span className="jf-demo-projectIcon"><LayoutGrid size={14} aria-hidden="true" /></span><span>Studio workspace</span><ChevronRight size={12} aria-hidden="true" /><strong>Website redesign</strong></div>
      {children}
      <div className="jf-demo-demoFooter"><span><i aria-hidden="true" />Local demo · resets on reload</span><button type="button" onClick={onReset} aria-label={`Reset demo: ${name}`}><RotateCcw size={12} aria-hidden="true" />Reset demo</button></div>
      <p className="jf-demo-hint">{hint}</p>
    </div>
  );
}

function Avatar({ initials, color = "lavender" }: { initials: string; color?: string }) {
  return <span className={`jf-demo-avatar ${color}`} aria-hidden="true">{initials}</span>;
}

function Completion({ value, max, label }: { value: number; max: number; label: string }) {
  return <progress className="jf-demo-progress" value={value} max={max} aria-label={label} />;
}

function TaskDemo() {
  const [done, setDone] = useState<string[]>(["brief"]);
  function toggle(id: string) { setDone(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]); }
  return (
    <DemoFrame name="task management" hint="Try it: check a task and watch your progress update." onReset={() => setDone(["brief"])}>
      <div className="jf-demo-demoBody">
        <div className="jf-demo-titleRow"><div><span className="jf-demo-overline">TODAY&apos;S FOCUS</span><h3>A little progress, every day.</h3></div><span className={`jf-demo-badge blue`}>3 tasks</span></div>
        <div className="jf-demo-taskList">
          {taskSamples.map(task => <label className={`jf-demo-taskRow ${done.includes(task.id) ? "jf-demo-completed" : ""}`} key={task.id}>
            <input type="checkbox" checked={done.includes(task.id)} onChange={() => toggle(task.id)} />
            <span className="jf-demo-taskCopy"><span>{task.title}</span><small>{task.label} <span aria-hidden="true">·</span> {task.due}</small></span>
            <Avatar initials={task.owner} color={task.owner === "AS" ? "mint" : "lavender"} />
          </label>)}
        </div>
        <div className="jf-demo-progressSummary" aria-live="polite"><span><CheckCheck size={14} aria-hidden="true" /> {done.length} of 3 tasks complete</span><strong>{Math.round(done.length / 3 * 100)}%</strong></div>
        <Completion value={done.length} max={3} label="Task completion" />
      </div>
    </DemoFrame>
  );
}

function BoardDemo() {
  const [tasks, setTasks] = useState(boardSamples);
  const [announcement, setAnnouncement] = useState("");
  const moveFocus = useRef<string | null>(null);
  function move(id: string, direction: number) {
    const task = tasks.find(item => item.id === id)!;
    const next = task.stage + direction;
    moveFocus.current = id;
    setTasks(current => current.map(item => item.id === id ? { ...item, stage: next } : item));
    setAnnouncement(`${task.title} moved to ${stages[next]}.`);
  }
  return (
    <DemoFrame name="project boards" hint="Try it: use the arrows to move a task between stages." onReset={() => { setTasks(boardSamples); setAnnouncement("Board reset."); }}>
      <div className="jf-demo-demoBody">
        <div className="jf-demo-titleRow"><div><span className="jf-demo-overline">Creative workflow</span><h3>Room for the whole process.</h3></div><Columns3 size={20} aria-hidden="true" /></div>
        <div className="jf-demo-board">
          {stages.map((stage, index) => <div className="jf-demo-column" key={stage}>
            <div className="jf-demo-columnTitle"><i className={`jf-demo-dot${index}`} aria-hidden="true" />{stage}<span>{tasks.filter(task => task.stage === index).length}</span></div>
            {tasks.filter(task => task.stage === index).map(task => <article className="jf-demo-boardCard" key={task.id}>
              <span className={`jf-demo-tag ${index === 2 ? "mint" : index === 1 ? "lavender" : "blue"}`}>{task.label}</span>
              <h4>{task.title}</h4><small>Creative workflow</small>
              <div className="jf-demo-cardActions"><Avatar initials={task.owner} /><div>
                {[-1, 1].map(direction => <button type="button" key={direction} disabled={task.stage + direction < 0 || task.stage + direction > 2} aria-label={`Move ${task.title} ${direction < 0 ? "back" : "forward"}`} onClick={() => move(task.id, direction)} ref={node => {
                  if (node && moveFocus.current === task.id && direction === (task.stage === 2 ? -1 : 1)) { node.focus({ preventScroll: true }); moveFocus.current = null; }
                }}>{direction < 0 ? <ArrowLeft size={14} aria-hidden="true" /> : <ArrowRight size={14} aria-hidden="true" />}</button>)}
              </div></div>
            </article>)}
            {!tasks.some(task => task.stage === index) && <p className="jf-demo-emptyColumn">A little room for what&apos;s next.</p>}
          </div>)}
        </div>
        <span className="jf-demo-srOnly" role="status">{announcement}</span>
      </div>
    </DemoFrame>
  );
}

function CollaborationDemo() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const member = members[selected];
  return (
    <DemoFrame name="team collaboration" hint="Try it: choose a teammate, then open the conversation." onReset={() => { setSelected(0); setExpanded(false); }}>
      <div className="jf-demo-demoBody">
        <span className="jf-demo-overline">THE PEOPLE BEHIND THE WORK</span>
        <div className="jf-demo-memberPicker" aria-label="Sample teammates">
          {members.map((person, index) => <button type="button" key={person.initials} aria-pressed={selected === index} onClick={() => { setSelected(index); setExpanded(false); }}><Avatar initials={person.initials} color={person.color} /><span>{person.name}<small>{person.role}</small></span></button>)}
        </div>
        <div className="jf-demo-conversation" key={member.initials}>
          <div className="jf-demo-assignedTask"><span><Circle size={13} aria-hidden="true" />{member.task}</span><span className={`jf-demo-tag lavender`}>In review</span></div>
          <div className="jf-demo-message"><Avatar initials={member.initials} color={member.color} /><div><strong>{member.name}<small>Project feedback</small></strong><p>{member.message}</p></div></div>
          <button type="button" className="jf-demo-threadToggle" aria-expanded={expanded} aria-controls="feature-comment-thread" onClick={() => setExpanded(current => !current)}><MessageSquare size={14} aria-hidden="true" />{expanded ? "Close thread" : "Open thread"}<span>1 reply</span><ChevronRight size={14} className={expanded ? "jf-demo-rotated" : ""} aria-hidden="true" /></button>
          {expanded && <div className="jf-demo-reply" id="feature-comment-thread"><Avatar initials={members[(selected + 1) % members.length].initials} color="mint" /><div><strong>{members[(selected + 1) % members.length].name}</strong><p>{member.reply}</p></div></div>}
        </div>
      </div>
    </DemoFrame>
  );
}

function ProgressDemo() {
  const [done, setDone] = useState<string[]>([milestones[0], milestones[1]]);
  const percentage = done.length * 25;
  return (
    <DemoFrame name="progress tracking" hint="Try it: complete a milestone to bring the launch closer." onReset={() => setDone([milestones[0], milestones[1]])}>
      <div className="jf-demo-demoBody">
        <span className="jf-demo-overline">WEBSITE REDESIGN</span><h3>From idea to handoff.</h3>
        <div className="jf-demo-milestoneStats" aria-live="polite"><strong>{percentage}<span>%</span></strong><span>{done.length} completed<br />{4 - done.length} pending</span></div>
        <Completion value={done.length} max={4} label="Milestone completion" />
        <div className="jf-demo-milestones">{milestones.map((milestone, index) => <label key={milestone}><input type="checkbox" checked={done.includes(milestone)} onChange={() => setDone(current => current.includes(milestone) ? current.filter(item => item !== milestone) : [...current, milestone])} /><span>{milestone}<small>Milestone 0{index + 1}</small></span><span className={done.includes(milestone) ? "jf-demo-doneLabel" : "jf-demo-nextLabel"}>{done.includes(milestone) ? "Done" : "Next"}</span></label>)}</div>
        <p className="jf-demo-progressCaption">{done.length === 2 ? "Two milestones down. A clear path ahead." : done.length === 4 ? "Every milestone complete. Ready for handoff." : `${done.length} of 4 milestones complete. A clear path ahead.`}</p>
      </div>
    </DemoFrame>
  );
}

function NotesDemo() {
  const [selected, setSelected] = useState(0);
  const [drafts, setDrafts] = useState<string[]>(notes.map(note => note.editable));
  const note = notes[selected];
  return (
    <DemoFrame name="project notes" hint="Try it: switch notes or edit the scratchpad. Nothing is saved." onReset={() => { setSelected(0); setDrafts(notes.map(item => item.editable)); }}>
      <div className="jf-demo-noteNav" aria-label="Sample notes">{notes.map((item, index) => <button type="button" key={item.id} aria-pressed={index === selected} onClick={() => setSelected(index)}><FileText size={14} aria-hidden="true" />{item.label}</button>)}</div>
      <div className={`jf-demo-demoBody jf-demo-noteEditor`} key={note.id}>
        <span className="jf-demo-overline"><FileText size={13} aria-hidden="true" />PROJECT NOTES</span>
        <h3>{note.title}</h3><p>{note.body}</p>
        <h4>{note.heading}</h4><p>{note.detail}</p>
        <label className="jf-demo-scratchpad">Scratchpad <span>Editable · not saved</span><textarea rows={4} value={drafts[selected]} onChange={event => setDrafts(current => current.map((draft, index) => index === selected ? event.target.value : draft))} aria-label={`${note.label} scratchpad`} /></label>
        <div className="jf-demo-noteContext"><FileText size={12} aria-hidden="true" /><Link href="/product#demo">Website redesign</Link><ChevronRight size={12} aria-hidden="true" /> Project brief</div>
        <div className="jf-demo-noteComment"><Avatar initials="MK" /><span>Ready for the next review.<small>Design review</small></span><MessageSquare size={15} aria-hidden="true" /></div>
      </div>
    </DemoFrame>
  );
}

function WorkflowDemo() {
  const [view, setView] = useState("List");
  const [done, setDone] = useState<string[]>(["brief"]);
  const [focusId, setFocusId] = useState("page");
  const focusTask = taskSamples.find(task => task.id === focusId)!;
  function toggle(id: string) { setDone(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]); }
  const views = [{ name: "List", icon: List }, { name: "Board", icon: Columns3 }, { name: "Focus", icon: Focus }];
  return (
    <DemoFrame name="focused workflows" hint="Try it: switch views. Your tasks stay with you." onReset={() => { setView("List"); setDone(["brief"]); setFocusId("page"); }}>
      <div className="jf-demo-demoBody">
        <div className="jf-demo-titleRow"><div><span className="jf-demo-overline">YOUR WORK, YOUR WAY</span><h3>A view for this moment.</h3></div><span className="jf-demo-taskCount" aria-live="polite">{done.length}/3 done</span></div>
        <div className="jf-demo-viewSwitcher" aria-label="Workspace view">{views.map(item => <button type="button" aria-pressed={view === item.name} key={item.name} onClick={() => setView(item.name)}><item.icon size={14} aria-hidden="true" />{item.name}</button>)}</div>
        <div className="jf-demo-workspaceView" key={view}>
          {view === "List" && <div className="jf-demo-workflowList">{taskSamples.map(task => <label key={task.id}><input type="checkbox" checked={done.includes(task.id)} onChange={() => toggle(task.id)} /><span className={done.includes(task.id) ? "jf-demo-strike" : ""}>{task.title}<small>{task.label} · {task.due}</small></span><Avatar initials={task.owner} /></label>)}</div>}
          {view === "Board" && <div className="jf-demo-workflowBoard">{[false, true].map(completed => <div key={String(completed)}><span className="jf-demo-columnTitle">{completed ? "Done" : "To do"}<span>{taskSamples.filter(task => done.includes(task.id) === completed).length}</span></span>{taskSamples.filter(task => done.includes(task.id) === completed).map(task => <label key={task.id} className="jf-demo-workflowBoardCard"><input type="checkbox" checked={completed} onChange={() => toggle(task.id)} /><span>{task.title}<small>{task.label}</small></span></label>)}</div>)}</div>}
          {view === "Focus" && <div className="jf-demo-focusView"><span className="jf-demo-focusIcon"><Focus size={24} aria-hidden="true" /></span><span className="jf-demo-overline">ONE THING AT A TIME</span><h4>{focusTask.title}</h4><p>{focusTask.label} · {focusTask.due}</p><button type="button" className="jf-demo-focusAction" onClick={() => toggle(focusId)}><Check size={15} aria-hidden="true" />{done.includes(focusId) ? "Completed · undo" : "Mark complete"}</button><div className="jf-demo-focusPagination"><button type="button" aria-label="Previous focus task" onClick={() => setFocusId(taskSamples[(taskSamples.findIndex(task => task.id === focusId) + 2) % 3].id)}><ArrowUp size={14} aria-hidden="true" /></button><span>{taskSamples.findIndex(task => task.id === focusId) + 1} of 3 tasks</span><button type="button" aria-label="Next focus task" onClick={() => setFocusId(taskSamples[(taskSamples.findIndex(task => task.id === focusId) + 1) % 3].id)}><ArrowDown size={14} aria-hidden="true" /></button></div></div>}
        </div>
      </div>
    </DemoFrame>
  );
}

export function FeatureDemo({ feature }: { feature: Feature }) {
  switch (feature) {
    case "task-management": return <TaskDemo />;
    case "project-boards": return <BoardDemo />;
    case "team-collaboration": return <CollaborationDemo />;
    case "progress-tracking": return <ProgressDemo />;
    case "project-notes": return <NotesDemo />;
    case "focused-workflows": return <WorkflowDemo />;
  }
}
