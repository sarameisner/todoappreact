// components/ListItem.jsx
import React from "react";

// modtager de samme props
function ListItem({ task, deleteTask, toggleComplete }) {
  return (
    <li>
      <span
        onClick={() => toggleComplete(task.id)}
        // når teksten klikkes, kaldes toggleComplete med task.id
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {/* viser tasken og dens prioritet */}
        {task.text} - {task.priority}
      </span>
      {/* slet knappen til opgaverne */}
      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        🗑️
      </button>
    </li>
  );
}

export default ListItem;
