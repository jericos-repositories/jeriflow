import { boardLanes, workspaceStats } from "@/lib/content";

export function DashboardPreview() {
  return (
    <div
      className="dashboard"
      aria-label="Fictional JeriFlow workspace preview"
    >
      <div className="browser-bar" aria-hidden="true">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-label">JeriFlow / Studio workspace</span>
      </div>
      <div className="dashboard-layout">
        <aside
          className="dashboard-sidebar"
          aria-label="Example workspace sections"
        >
          <strong>Studio workspace</strong>
          <div className="sidebar-item active">Overview</div>
          <div className="sidebar-item">My tasks</div>
          <div className="sidebar-item">Projects</div>
          <div className="sidebar-item">Calendar</div>
          <p className="sidebar-label">YOUR PROJECTS</p>
          <div className="sidebar-item">Website redesign</div>
          <div className="sidebar-item">Brand refresh</div>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-heading">
            <h3>Good morning, creator.</h3>
            <span>This week · sample data</span>
          </div>
          <p className="dashboard-description">
            Here&apos;s what your team is moving forward.
          </p>
          <div className="dashboard-stats">
            {workspaceStats.map((stat) => (
              <div className="dashboard-stat" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
          <div className="board">
            {boardLanes.map((lane) => (
              <section
                className="board-lane"
                key={lane.title}
                aria-label={lane.title}
              >
                <h4>{lane.title}</h4>
                <div className="task-card">
                  {lane.task}
                  <br />
                  <span className={`task-tag ${lane.tone}`}>{lane.tag}</span>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
