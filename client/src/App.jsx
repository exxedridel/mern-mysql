import React from "react";
import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage.jsx";
import TaskForm from "./pages/TaskForm.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/new" element={<TaskForm />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
