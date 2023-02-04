// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/Login";
// import Upload from "./pages/institute/Upload";
import AdminDashboard from "./pages/admin/Dashboard";
import StudentList from "./pages/institute/StudentList";
import VolunteerRegistration from "./pages/volunteer/Register";
// import InstituteDashboard from "./pages/institute/Dashboard";
import VolunteerDashboard from "./pages/volunteer/Dashboard";
import VolunteerLogin from "./pages/volunteer/Login";
import InstituteRegister from "./pages/institute/Register";
import Volunteer_studentTrack from "./pages/volunteer/StudentTrack";
import VolunteerUpload from "./pages/volunteer/DragnDrop";

import InstituteLogin from "./pages/institute/Login";
import Admin from "./pages/admin/Admin";
import InstituteDashboard from "./pages/institute/Dashboard";

function App() {
  return (
    <div className="App" width="100%">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminauth" element={<AdminLogin />} />
        {/* <Route path="/instituteauth" element={<InstituteLogin />} /> */}
        <Route path="/volunteerauth" element={<VolunteerLogin />} />

        {/* <Route path="/institute/upload" element={<Upload />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/institute/dashboard" element={<InstituteDashboard />} /> */}
        <Route
          path="/volunteer/Dashboard/StudentTrack"
          element={<Volunteer_studentTrack />}
        />
        <Route path="/volunteer/Register" element={<VolunteerRegistration />} />
        <Route
          path="/volunteer/dashboard/dragndrop"
          element={<VolunteerUpload />}
        />
        <Route path="/institute/studentlist/:id" element={<StudentList />} />
        <Route path="/institute/register" element={<InstituteRegister />} />
        <Route path="/volunteer/Dashboard" element={<VolunteerDashboard />} />
        <Route path="/institute/Dashboard" element={<InstituteDashboard />} />
        <Route path="/instituteregister" element={<InstituteRegister />} />
        <Route path="/instituteauth" element={<InstituteLogin />} />
      </Routes>
    </div>
  );
}

export default App;
