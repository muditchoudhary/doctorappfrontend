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

import Prescriptions from "./components/Prescriptions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/registration" element={<UserSignUp />} />
        <Route path="/user/book-appointment" element={<BookAppointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor-panel" element={<DoctorPanel />} />
        <Route path="/admin-panel" element={<p>hello</p>} />
        {/* Use correct component name */}
        <Route
          path="/doctor/registration-form"
          element={<Doctorregistration />}
        />
        <Route path="/doctoslist" element={<doctoslist />} />
        <Route path="/Adminpanel" element={<Adminpanel />} />
        <Route path="/Afterlogin" element={<Afterlogin />} />
        <Route path="/Doctorregistration" element={<Doctorregistration />} />
        <Route path="/Prescriptions" element={<Prescriptions />} />
        <Route path="/DoctorPanel" element={<DoctorPanel />} />
      </Routes>
    </Router>
  );
}

// admin

export default App;
