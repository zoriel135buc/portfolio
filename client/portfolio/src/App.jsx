import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Post from "./Components/Post";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import "./App.css";

export const BASE_URL = "http://localhost:3001/users";

function App() {
  return (
    <>
      <div>
        <h1>portfolio</h1>
        <Home />
        <Projects />
        <Post />
      </div>
    </>
  );
}

export default App;
