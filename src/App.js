import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserSignUp from './components/UserSignUp';
import About from './components/About';
import BookAppointment from './components/BookAppointment';
import Login from './components/Login';
import DoctorDashboard from './components/doctordashbord/doctorPanel'; 
import Appointments from './components/doctordashbord/appointments';
import PastAppointments from './components/doctordashbord/past_appointments'
import CancelAppointments from './components/doctordashbord/cancel_appointments'
import AddDoctor from './components/adminpanel/AddDoctor'
import DoctordList from './components/adminpanel/DoctordList'
import Footer from './components/Footer';
// import CallIcon from "./components/callicon"

import Adminpanel from './components/adminpanel/Adminpanel';
import Afterlogin from './components/Afterlogin';
import Doctorregistration from './components/Doctorregistration';
import Prescriptions from './components/Prescriptions';

function App() {
    return (
        <Router>
            <Navbar />
            {/* <CallIcon/> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/UserSignUp" element={<UserSignUp />} />
                <Route path="/BookAppointment" element={<BookAppointment />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/DoctorDashboard" element={<DoctorDashboard />} /> 
                <Route path="/Adminpanel" element={<Adminpanel />} />
                <Route path="/Afterlogin" element={<Afterlogin />} />
                <Route path="/Doctorregistration" element={<Doctorregistration />} />
                <Route path="/Prescriptions" element={<Prescriptions />} />
                <Route path="/Appointments" element={<Appointments />} />
                <Route path="/PastAppointments" element={<PastAppointments />} />
                <Route path="/CancelAppointments" element={<CancelAppointments />} />
                <Route path="/AddDoctor" element={<AddDoctor />} />
                <Route path="/DoctordList" element={<DoctordList />} />
            </Routes>
            <Footer></Footer>
        </Router>
    );
}
// DoctordList

export default App;
