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
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AuthGuard from "./components/auth/AuthGuard";
import DoctoreProtected from "./components/auth/DoctoreProtected";
import AdminProtected from "./components/auth/AdminProtected";
import UserProtected from "./components/auth/UserProtected";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route
          path="/doctor-panel"
          element={
            <ProtectedRoute>
              <DoctorPanel />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/user/book-appointment"
          element={
            <ProtectedRoute>
              <UserProtected>
                <BookAppointment />
              </UserProtected>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-panel"
          element={
            <ProtectedRoute>
              <AdminProtected>
                <Adminpanel />
              </AdminProtected>
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor-panel"
          element={
            <ProtectedRoute>
              <DoctoreProtected>
                <DoctorPanel />
              </DoctoreProtected>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/prescription"
          element={
            <ProtectedRoute>
              <Prescription />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor/registration-form"
          element={
            <ProtectedRoute>
              <AdminProtected>
                <Doctorregistration />
              </AdminProtected>
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/user/registration"
          element={
            <AuthGuard>
              <UserSignUp />\
            </AuthGuard>
          }
        />

        <Route
          path="/login"
          element={
            <AuthGuard>
              <Login />
            </AuthGuard>
          }
        />

        {/* Use correct component name */}
      </Routes>
    </Router>
  );
}

// admin

export default App;
