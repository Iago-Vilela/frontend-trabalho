import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const TaskManager = () => {
  const [refresh, setRefresh] = useState(false); // To trigger re-fetch of tasks

  const handleRefresh = () => setRefresh(!refresh); // Toggle refresh state

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={handleRefresh} />
      <TaskList refresh={refresh} />
    </div>
  );
};

export default TaskManager;
