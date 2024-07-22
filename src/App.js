import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UserSignUp from "./components/UserSignUp";
import About from "./components/About";
import BookAppointment from "./components/BookAppointment";
import Login from "./components/Login";
import DoctorPanel from "./components/doctorPanel";
import Doctorregistration from "./components/Doctorregistration";

import doctoslist from "./components/doctoslist";

import Adminpanel from "./components/Adminpanel";
import Afterlogin from "./components/Afterlogin";

import Prescription from "./components/Prescription";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/doctor-panel" element={<DoctorPanel />} />
        <Route path="/user/book-appointment" element={<BookAppointment />} />
        <Route path="/doctoslist" element={<doctoslist />} />
        <Route path="/admin-panel" element={<Adminpanel />} />
        <Route path="/doctor-panel" element={<DoctorPanel />} />
        <Route path="/user/prescription" element={<Prescription />} />
        <Route
          path="/doctor/registration-form"
          element={<Doctorregistration />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/registration" element={<UserSignUp />} />

        <Route path="/login" element={<Login />} />

        {/* Use correct component name */}
      </Routes>
    </Router>
  );
}

// admin

export default App;
