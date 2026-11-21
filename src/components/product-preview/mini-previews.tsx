import { Check, Circle, FileText, MessageSquare } from "lucide-react";

export function NotePreview() {
  return (
    <div className="mini-note">
      <span className="mini-label">
        <FileText size={16} />
        PROJECT NOTES
      </span>
      <h3>A good place to begin.</h3>
      <p>
        The brief, the references, the decisions. One home for the things that
        give your work direction.
      </p>
      <div className="note-lines" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="comment-row">
        <span className="avatar lavender">MK</span>
        <span>
          Ready for the next review.<small>Fictional teammate comment</small>
        </span>
        <MessageSquare size={17} />
      </div>
    </div>
  );
}
export function ProgressPreview() {
  return (
    <div className="mini-progress">
      <span className="mini-label">WEBSITE REDESIGN · SAMPLE</span>
      <h3>From idea to handoff.</h3>
      {[
        { name: "Discovery & direction", done: true },
        { name: "Interface design", done: true },
        { name: "Frontend build", done: false },
        { name: "Launch checklist", done: false },
      ].map((item) => (
        <div className="milestone" key={item.name}>
          {item.done ? <Check size={17} /> : <Circle size={16} />}
          <span>{item.name}</span>
          <small>{item.done ? "Done" : "Next"}</small>
        </div>
      ))}
      <p>Illustrative project progress</p>
      <progress
        aria-label="Illustrative milestone completion"
        value={2}
        max={4}
      />
    </div>
  );
}
