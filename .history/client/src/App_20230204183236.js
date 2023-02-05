// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/login";
// import Upload from "./pages/institute/Upload";
import AdminDashboard from "./pages/admin/Dashboard";
import VolunteerRegistration from "./pages/volunteer/Register";
// import InstituteDashboard from "./pages/institute/Dashboard";
import VolunteerDashboard from "./pages/volunteer/Dashboard";
import VolunteerLogin from "./pages/volunteer/Login";
import InstituteRegister from "./pages/institute/Register";
import Volunteer_studentTrack from "./pages/volunteer/StudentTrack";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminauth" element={<AdminLogin />} />
        {/* <Route path="/instituteauth" element={<InstituteLogin />} /> */}
        <Route path="/volunteerauth" element={<VolunteerLogin />} />

        {/* <Route path="/institute/upload" element={<Upload />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/institute/dashboard" element={<InstituteDashboard />} /> */}
        <Route path="volunteer/Dashboard" element={<VolunteerDashboard />} />
        <Route
          path="volunteer/Dashboard/StudentTrack"
          element={<Volunteer_studentTrack />}
        />
        <Route path="volunteer/Register" element={<VolunteerRegistration />} />
        <Route path="/instituteregister" element={<InstituteRegister />} />
      </Routes>
    </div>
  );
}

export default App;
