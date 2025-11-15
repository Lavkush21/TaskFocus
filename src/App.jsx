import React, { useState, useEffect } from "react";
import Taskform from "./Taskform.jsx";
import TaskList from "./TaskList.jsx";
import Progresstracker from "./Progresstracker.jsx";
import "./Style.css";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <h1>TaskFocus</h1>
      <p>Your friendly task manager 🤝</p>

      <Taskform addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <Progresstracker tasks={tasks} />

      <button className="clear-btn" onClick={clearTasks}>
        Clear All Tasks
      </button>
    </div>
  );
}
