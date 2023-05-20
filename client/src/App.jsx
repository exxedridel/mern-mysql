import React from "react";
import { Route, Routes } from "react-router-dom";
import { TasksContextProvider } from "./context/TasksContext";
import Navbar from "./components/Navbar.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import TaskForm from "./pages/TaskForm.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <TasksContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TasksContextProvider>
      </div>
    </div>
  );
}

export default App;
