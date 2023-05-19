import { useEffect, useState } from "react";
import { useTasks } from "../context/TasksContext";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const loadedTask = await getTask(params.id);
        setTask({
          title: loadedTask.title,
          description: loadedTask.description,
        });
      }
    }
    loadTask();
  }, []);

  return (
    <div>
      <h1>{params.id ? "Edit task" : "Create new task"}</h1>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.id) {
            await updateTask(params.id, values);
            navigate("/");
          } else {
            await createTask(values);
            actions.resetForm();
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />

            <label htmlFor="description">description</label>
            <textarea
              name="description"
              id="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
