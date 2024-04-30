import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Post from "./Components/Post";
import ButtonAppBar from "./Components/Navbar";
import ErrorBoundary from "./Components/ErrorBoundary";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import "./App.css";

export const BASE_URL = "http://localhost:3001/users";

function App() {
  return (
    <>
      <ErrorBoundary>
        <ButtonAppBar />
        <Routes>
          <Route path="/Projects" element={<Projects page={"Projects "} />} />
          <Route path="/" element={<Home page={" Home "} />} />
          <Route path="/Post" element={<Post page={" Post "} />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
export default App;
