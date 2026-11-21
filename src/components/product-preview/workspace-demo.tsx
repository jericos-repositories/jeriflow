"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import {
  CalendarDays,
  Check,
  CheckCheck,
  Circle,
  CircleCheck,
  Columns3,
  FileText,
  LayoutDashboard,
  ListTodo,
  MessageSquare,
  Plus,
  Sparkles,
  TrendingUp,
} from "lucide-react";

type Status = "To do" | "In progress" | "Done";
type Task = {
  id: number;
  name: string;
  category: string;
  status: Status;
  owner: string;
  due: string;
};
const initial: Record<string, Task[]> = {
  "Website redesign": [
    {
      id: 1,
      name: "Define landing page content",
      category: "Content",
      status: "To do",
      owner: "AL",
      due: "Nov 24",
    },
    {
      id: 2,
      name: "Review brand illustrations",
      category: "Design",
      status: "To do",
      owner: "MK",
      due: "Nov 25",
    },
    {
      id: 3,
      name: "Build responsive components",
      category: "Development",
      status: "In progress",
      owner: "JR",
      due: "Nov 26",
    },
    {
      id: 4,
      name: "Review mobile navigation",
      category: "Review",
      status: "In progress",
      owner: "AL",
      due: "Nov 26",
    },
    {
      id: 5,
      name: "Finalize visual direction",
      category: "Approved",
      status: "Done",
      owner: "MK",
      due: "Nov 20",
    },
    {
      id: 6,
      name: "Create project roadmap",
      category: "Planning",
      status: "Done",
      owner: "JR",
      due: "Nov 20",
    },
  ],
  "Brand refresh": [
    {
      id: 11,
      name: "Collect visual references",
      category: "Research",
      status: "To do",
      owner: "MK",
      due: "Nov 24",
    },
    {
      id: 12,
      name: "Explore the color palette",
      category: "Design",
      status: "In progress",
      owner: "AL",
      due: "Nov 25",
    },
    {
      id: 13,
      name: "Write the creative brief",
      category: "Notes",
      status: "Done",
      owner: "JR",
      due: "Nov 20",
    },
  ],
};
const views = [
  { name: "Board", icon: Columns3 },
  { name: "Tasks", icon: ListTodo },
  { name: "Notes", icon: FileText },
  { name: "Progress", icon: TrendingUp },
] as const;
const statuses: Status[] = ["To do", "In progress", "Done"];

export function WorkspaceDemo() {
  const [project, setProject] = useState("Website redesign");
  const [allTasks, setAllTasks] = useState(initial);
  const [view, setView] = useState<(typeof views)[number]["name"]>("Board");
  const [notice, setNotice] = useState(
    "Switch views, organize tasks, and keep your next step in sight.",
  );
  const nextId = useRef(20);
  const tasks = allTasks[project];
  const done = tasks.filter((task) => task.status === "Done").length;
  const progress = Math.round((done / tasks.length) * 100);
  function moveTask(task: Task) {
    const status =
      statuses[(statuses.indexOf(task.status) + 1) % statuses.length];
    setAllTasks((current) => ({
      ...current,
      [project]: current[project].map((item) =>
        item.id === task.id ? { ...item, status } : item,
      ),
    }));
    setNotice(`“${task.name}” moved to ${status}.`);
  }
  function addTask() {
    const id = nextId.current++;
    setAllTasks((current) => ({
      ...current,
      [project]: [
        ...current[project],
        {
          id,
          name: `New task ${id - 19}`,
          category: "Planning",
          status: "To do",
          owner: "YOU",
          due: "No date",
        },
      ],
    }));
    setView("Board");
    setNotice(
      "Your new task is ready in To do.",
    );
  }
  function tabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % views.length;
    else if (event.key === "ArrowLeft")
      next = (index + views.length - 1) % views.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = views.length - 1;
    else return;
    event.preventDefault();
    setView(views[next].name);
    event.currentTarget.parentElement
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [next]?.focus();
  }
  function taskControl(task: Task) {
    return (
      <button
        type="button"
        className={`task-status ${task.status === "Done" ? "done" : ""}`}
        aria-label={`Move ${task.name} to ${statuses[(statuses.indexOf(task.status) + 1) % 3]}`}
        onClick={() => moveTask(task)}
      >
        {task.status === "Done" ? (
          <CircleCheck size={18} />
        ) : task.status === "In progress" ? (
          <Circle size={18} className="in-progress" />
        ) : (
          <Circle size={18} />
        )}
      </button>
    );
  }
  return (
    <div className="workspace-demo" data-motion="dashboard">
      <div className="browser-bar">
        <div className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>JeriFlow / Studio workspace</span>
        <span className="demo-label">Interactive workspace</span>
      </div>
      <div className="workspace-layout">
        <aside className="workspace-sidebar">
          <div className="workspace-brand">
            <Sparkles size={17} />
            Studio workspace
          </div>
          <div className="sidebar-static">
            <LayoutDashboard size={16} />
            Overview
          </div>
          <div className="sidebar-caption">PROJECTS</div>
          {Object.keys(initial).map((name) => (
            <button
              type="button"
              key={name}
              className={`sidebar-project ${name === project ? "active" : ""}`}
              aria-pressed={name === project}
              onClick={() => {
                setProject(name);
                setNotice(`${name} selected.`);
              }}
            >
              <span
                className={`project-swatch ${name === "Brand refresh" ? "lavender" : ""}`}
              />
              {name}
            </button>
          ))}
          <div className="sidebar-note">
            <span className="avatar">JR</span>
            <div>
              Jerico Studio<small>Creative workspace</small>
            </div>
          </div>
        </aside>
        <div className="workspace-main">
          <div className="workspace-top">
            <div>
              <p className="workspace-eyebrow">STUDIO OVERVIEW</p>
              <h3>Good morning, creator.</h3>
              <p>Here&apos;s what your team is moving forward.</p>
            </div>
            <div
              className="avatar-stack"
              aria-label="Project collaborators"
            >
              <span className="avatar">JR</span>
              <span className="avatar lavender">MK</span>
              <span className="avatar mint">AL</span>
            </div>
          </div>
          <div className="mobile-projects" aria-label="Projects">
            {Object.keys(initial).map((name) => (
              <button
                type="button"
                key={name}
                aria-pressed={name === project}
                onClick={() => setProject(name)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="workspace-stats">
            <div>
              <span>
                <Columns3 size={15} />
                Project
              </span>
              <strong>{project}</strong>
            </div>
            <div>
              <span>
                <CheckCheck size={15} />
                Completed tasks
              </span>
              <strong>
                {done}
                <small> / {tasks.length}</small>
              </strong>
            </div>
            <div>
              <span>
                <TrendingUp size={15} />
                Project progress
              </span>
              <strong>{progress}%</strong>
            </div>
          </div>
          <div className="workspace-toolbar">
            <div
              className="workspace-tabs"
              role="tablist"
              aria-label="Workspace views"
            >
              {views.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  id={`view-${item.name.toLowerCase()}`}
                  role="tab"
                  aria-selected={view === item.name}
                  aria-controls="workspace-panel"
                  tabIndex={view === item.name ? 0 : -1}
                  onKeyDown={(event) => tabKey(event, index)}
                  onClick={() => setView(item.name)}
                >
                  <item.icon size={15} />
                  {item.name}
                </button>
              ))}
            </div>
            <button type="button" className="add-task" onClick={addTask}>
              <Plus size={16} />
              Add task
            </button>
          </div>
          <div
            id="workspace-panel"
            className="workspace-panel"
            key={`${project}-${view}`}
            role="tabpanel"
            aria-labelledby={`view-${view.toLowerCase()}`}
          >
            {view === "Board" && (
              <div className="kanban-board">
                {statuses.map((status) => (
                  <section
                    key={status}
                    className="kanban-lane"
                    aria-label={status}
                  >
                    <h4>
                      <span
                        className={`status-indicator ${status === "Done" ? "mint" : status === "In progress" ? "blue" : "neutral"}`}
                      />
                      {status}
                      <span className="lane-count">
                        {tasks.filter((task) => task.status === status).length}
                      </span>
                    </h4>
                    {tasks
                      .filter((task) => task.status === status)
                      .map((task) => (
                        <article key={task.id} className="task-card">
                          <div className="task-heading">
                            {taskControl(task)}
                            <span>{task.name}</span>
                          </div>
                          <span
                            className={`task-tag ${task.status === "Done" ? "mint" : task.category === "Design" ? "lavender" : "blue"}`}
                          >
                            {task.category}
                          </span>
                          <div className="task-meta">
                            <span>
                              <CalendarDays size={12} />
                              {task.due}
                            </span>
                            <span className="avatar small">{task.owner}</span>
                          </div>
                        </article>
                      ))}
                    {tasks.every((task) => task.status !== status) && (
                      <p className="empty-lane">
                        Ready for the next step. Move a task into this stage.
                      </p>
                    )}
                  </section>
                ))}
              </div>
            )}
            {view === "Tasks" && (
              <div className="sample-task-list">
                {tasks.map((task) => (
                  <div key={task.id}>
                    {taskControl(task)}
                    <span>
                      {task.name}
                      <small>
                        {task.category} · {task.due}
                      </small>
                    </span>
                    <span className="task-list-status">{task.status}</span>
                    <span className="avatar small">{task.owner}</span>
                  </div>
                ))}
              </div>
            )}
            {view === "Notes" && (
              <article className="sample-note">
                <span className="note-label">
                  <FileText size={16} />
                  PROJECT BRIEF
                </span>
                <h4>{project}</h4>
                <p>
                  A clear, approachable direction for the next chapter. Keep the
                  work calm, the content useful, and the handoff easy to follow.
                </p>
                <h5>What we&apos;re working toward</h5>
                <ul>
                  <li>A mobile-first experience with clear navigation.</li>
                  <li>A visual language that feels friendly and focused.</li>
                  <li>A shared checklist for the final review.</li>
                </ul>
                <div className="sample-comment">
                  <span className="avatar lavender">MK</span>
                  <p>
                    Let&apos;s review the mobile flow before the next handoff.
                    <small>Design review</small>
                  </p>
                  <MessageSquare size={16} />
                </div>
              </article>
            )}
            {view === "Progress" && (
              <div className="sample-progress">
                <div className="progress-head">
                  <span>Project completion</span>
                  <strong>{progress}%</strong>
                </div>
                <progress
                  max={tasks.length}
                  value={done}
                  aria-label="Project completion"
                />
                {statuses.map((status) => (
                  <div className="progress-row" key={status}>
                    <span>{status}</span>
                    <span>
                      {tasks.filter((task) => task.status === status).length}{" "}
                      tasks
                    </span>
                  </div>
                ))}
                <p>
                  <Check size={16} />
                  Progress updates as tasks move forward.
                </p>
              </div>
            )}
          </div>
          <p className="demo-status" role="status">
            {notice}
          </p>
        </div>
      </div>
      <p className="demo-disclaimer">
        Explore with sample projects. Your changes reset when you reload.
      </p>
    </div>
  );
}
