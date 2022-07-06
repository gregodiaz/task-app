import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Main from "./components/Main.js";
import Task from "./components/Task.js";
import Statistics from "./components/Statistics.js";
import Admin from "./components/Admin.js";
import NavBar from "./components/NavBar.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/task-app" element={
	<div>Hello World!</div>
	}></Route>
        <Route exact path="/" element={<Main />}></Route>
        <Route
          exact path="/tasks"
          element={
            <div>
              <NavBar />
              <Task />
            </div>
          }
        ></Route>
        <Route
          exact path="/statistics"
          element={
            <div>
              <NavBar />
              <Statistics />
            </div>
          }
        ></Route>
        <Route
          exact path="/admin"
          element={
            <div>
              <NavBar />
              <Admin />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
