import React from 'react'
import Home from './pages/Home/Home'
import LayOut from './components/LayOut/LayOut'
import { Route, Routes } from 'react-router-dom'
import Cursor from './components/crusor/Crusor'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";





const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#0b0f19] text-white min-h-screen">
      <Cursor />
      <Routes>
        {/* Public Layout Routes */}
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
        </Route>

        {/* Admin Panel Routes under AdminLayout */}
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashBoard />} />
          <Route path="profile" element={<ManageProfile />} />
          <Route path="staff" element={<ManageStaff />} />
          <Route path="events" element={<ManageEvent />} />
          <Route path="news" element={<ManageNewsNotification />} />
          <Route path="gallery" element={<ManageGallery />} />
          <Route path="help" element={<Help />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Route> */}
      </Routes>
    </div>
  )
}

export default App