import React from "react";
import ListItem from "./ListItem";

// komponenten modtager tasks, deleteTask, og toggleComplete som props
function List({ tasks, deleteTask, toggleComplete }) {
  return (
    <div>
      <h2>To Do</h2>
      <ul>
        {/* filtrer opgaver der ikke er færdige og mapper dem til ListItem komponentet */}
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <ListItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
          ))}
      </ul>

      <h2>Done</h2>
      <ul>
        {/* filtrer opgaver der er færdige og mapper dem */}
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <ListItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
          ))}
      </ul>
    </div>
  );
}

export default List;
