import React, { useEffect, useState } from "react";
import { getTasks } from "../utils/api"; // Import the getTasks function

const TaskList = () => {
  const [tasks, setTasks] = useState([]); // State for storing tasks
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks(); // Call the getTasks function
        setTasks(data); // Update tasks state
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setError("Failed to fetch tasks.");
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.due_date}</p>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
