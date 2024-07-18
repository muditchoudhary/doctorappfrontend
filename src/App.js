import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserSignUp from './components/UserSignUp';
import About from './components/About';
import BookAppointment from './components/BookAppointment';
import Login from './components/Login';
import DoctorPanel from './components/doctorPanel';


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
                <Route path="/DoctorPanel" element={<DoctorPanel />} /> {/* Use correct component name */}
            </Routes>
        </Router>
    );
}

export default App;
