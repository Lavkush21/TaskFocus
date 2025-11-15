import React from "react";

export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (task) => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task)}
          />

          <span>{task.text}</span>

          <button className="delete-btn" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
