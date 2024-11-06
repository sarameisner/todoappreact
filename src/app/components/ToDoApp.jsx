"use client";
import React, { useState } from "react";
import List from "./List";

function ToDoApp() {
  // tasks holder opgaverne og setTasks bruges til at opdatere tasks
  const [tasks, setTasks] = useState([]); // tomt array

  // funktion til at tilføje en ny opgave
  function addTask(event) {
    // så siden ikke laver et refresh
    event.preventDefault();

    // opretter et FormDataobjekt for at hente input-data fra formularen
    const formData = new FormData(event.target);

    // henter værdien af input feltet "task"
    const taskText = formData.get("task");

    // henter værdien af select feltet
    const priority = formData.get("priority");

    // opretter en ny opgave
    const newTask = {
      // unikt id
      id: crypto.randomUUID(),
      // teksten for opgaven
      text: taskText,
      // prioriteten for opgaven
      priority: priority,
      // færdig-status er false
      completed: false,
    };
    // også opdateres statet ved at tilføje den nye task til arrayet
    setTasks([...tasks, newTask]);
    // nulstiller formularen så input tømmes efter den nye opgave er blevet tilføjet
    event.target.reset();
  }

  // funktion til at slette en opgave
  function deleteTask(id) {
    // opdaterer tasks state med filter for at finde det rigtige id
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // funktionen til at markere en opgave som færdig
  function toggleComplete(id) {
    // opdaterer tasks state ved at ændre completed status for den valgte opgave
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }

  return (
    <div className="todo-app">
      <h1>ToDo App</h1>
      {/* formularen */}
      <form onSubmit={addTask}>
        <input type="text" name="task" placeholder="New task" required />
        {/* dropdown til prioritett */}
        <select name="priority" required>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      {/* liste komponenten der modtager props */}
      <List tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
}

export default ToDoApp;
