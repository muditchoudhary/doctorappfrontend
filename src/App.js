import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserSignUp from './components/UserSignUp';
import About from './components/About';
import BookAppointment from './components/BookAppointment';
import Login from './components/Login';
import DoctorPanel from './components/doctorPanel'; 
import doctoslist from './components/doctoslist'; 

import Adminpanel from './components/Adminpanel';
import Afterlogin from './components/Afterlogin';
import Doctorregistration from './components/Doctorregistration';
import Prescriptions from './components/Prescriptions';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/UserSignUp" element={<UserSignUp />} />
                <Route path="/BookAppointment" element={<BookAppointment />} />
                <Route path="/Login" element={<Login />} />
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
