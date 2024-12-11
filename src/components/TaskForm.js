import React, { useState } from "react";
import { addTask } from "../utils/api"; // Import the addTask function

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "pending",
  });
  const [error, setError] = useState(null); // State for error handling

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value }); // Update form values
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await addTask(task); // Call the addTask function
      console.log("Task added:", newTask);
      // Optionally, reset the form or trigger a re-fetch of tasks
      setTask({ title: "", description: "", due_date: "", status: "pending" });
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error("Error adding task:", err);
      setError("Failed to add task.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Task</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="date"
        name="due_date"
        value={task.due_date}
        onChange={handleChange}
        required
      />
      <select name="status" value={task.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
