// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import adminlogin from "./pages/admin/login";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <homepage />
      <Routes>
        <Route path="/" element={<adminlogin />} />
      </Routes>
    </div>
  );
}

export default App;
