import axios from "axios";

const API_URL = "http://localhost:9082"; // Replace with your deployed API URL when ready

// Fetch all tasks
export const getTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// Add a new task
export const addTask = async (task) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

// Update a task
export const updateTask = async (id, updatedTask) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

// Delete a task
export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
