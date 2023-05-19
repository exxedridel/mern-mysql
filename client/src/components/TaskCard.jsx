function TaskCard({task}) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✔" : "✘"}</span>&nbsp;
      <span>{task.createdAt}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default TaskCard;
