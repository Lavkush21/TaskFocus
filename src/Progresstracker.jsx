import React from "react";

export default function Progresstracker({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-box">
      <h3>Progress: {percent}%</h3>
      <p>{completed} of {total} tasks completed ✅</p>
    </div>
  );
}
