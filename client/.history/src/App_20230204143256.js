// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/login";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/adminauth" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
