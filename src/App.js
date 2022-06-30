import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Main from './components/Main.js';
import Task from './components/Task.js';
import Statistics from './components/Statistics.js';
import Admin from './components/Admin.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
	<Route exact path="/" element={ <Main/> } ></Route>
	<Route exact path="/tasks" element={ <Task/> } ></Route>
	<Route exact path="/statistics" element={ <Statistics/> } ></Route>
	<Route exact path="/admin" element={ <Admin/> } ></Route>
      </Routes>
    </BrowserRouter>
  )
}
