// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/Login";
import Upload from "./pages/institute/Upload";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/adminauth" element={<AdminLogin />} />
        <Route path="/institute/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
