import axios from "axios";

export const getTasksRequest = async () => {
  return await axios.get("http://localhost:4000/tasks");
};

// removing curly brackets and return since it's only 1 resulting action
export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const updateTaskRequest = async (id, updatedTask) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, updatedTask);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, {
    done,
  });
