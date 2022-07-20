import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// components
import Main from "./components/Main";
import TaskList from "./components/TaskList";
import Statistics from "./components/Statistics";
import Admin from "./components/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/task-app" element={<Main />} />
        <Route exact path="/task-app/Tasks" element={<TaskList />} />
        <Route exact path="/task-app/Statistics" element={<Statistics />} />
        <Route exact path="/task-app/Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
