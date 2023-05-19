import { useTasks } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const toggleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✔" : "✘"}</span>&nbsp;
      <span>{task.createdAt}</span>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => toggleDone(task.done)}>Toggle Task</button>
    </div>
  );
}

export default TaskCard;
