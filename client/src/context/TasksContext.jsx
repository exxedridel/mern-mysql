import { createContext, useContext, useState } from "react";
import { getTasksRequest, deleteTaskRequest, createTaskRequest } from "../api/tasks.api";

export const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      // setTasks([...tasks, response.data]) not necessary, since tasks load with useEffect
    } catch (error) {
      console.error(error);
    }
  }

  return (
    // exporting an object that can have multiple properties
    <TasksContext.Provider value={{ tasks, loadTasks, deleteTask, createTask }}>
      {children}
    </TasksContext.Provider>
  );
};
