import React, { useState } from "react";

export default function Taskform({ addTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      priority,
      category,
      completed: false,
    };

    addTask(newTask);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="row">
        <input
          type="text"
          placeholder="Enter the Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </div>

      <div className="row">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
    </form>
  );
}
