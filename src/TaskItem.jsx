import React from "react";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-info">
        <p className="task-title">{task.title}</p>
        <p className="task-subject">{task.subject}</p>
      </div>
      <div className="task-buttons">
        <button onClick={() => toggleTask(task.id)}>
          {task.completed ? "Undo" : "Done"}
        </button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
