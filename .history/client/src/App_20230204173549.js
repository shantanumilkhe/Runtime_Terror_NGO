// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/Login";
// import Upload from "./pages/institute/Upload";
import AdminDashboard from "./pages/admin/Dashboard";
// import InstituteDashboard from "./pages/institute/Dashboard";
import VolunteerDashboard from "./pages/volunteer/Dashboard";
import InstituteLogin from "./pages/volunteer/Login";
import InstituteResiter from "./pages/volunteer/Register";
// import AdminLogin from "./pages/admin/login";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/adminauth" element={<AdminLogin />} />
        <Route path="/instituteauth" element={<InstituteLogin />} />
        {/* <Route path="/institute/upload" element={<Upload />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/institute/dashboard" element={<InstituteDashboard />} /> */}
        <Route
          path="/pages/volunteer/Dashboard"
          element={<VolunteerDashboard />}
        />
        <Route path="/instituteregister" element={<InstituteResiter />} />
      </Routes>
    </div>
  );
}

export default App;
