import React from "react";

import { Link, useLocation } from 'react-router-dom';

function NavBAr() {
  const location = useLocation();

  const menuItems = [
    { path: '/', name: 'Home' },
    { path: '/About', name: 'About us' },
    { path: '/UserSignUp', name: 'User Signup' },
    { path: '/BookAppointment', name: 'Book an Appointment' },
    { path: '/DoctorDashboard', name: 'Doctor Dashboard' },
    { path: '/Adminpanel', name: 'Admin panel' },
    { path: '/Afterlogin', name: 'After login' },
    { path: '/Doctorregistration', name: 'Doctor Reg' },
    { path: '/Prescriptions', name: 'Prescriptions' },
    { path: '/doctosSidual', name: 'Doctors Sidual' },
  ];
  return (
    <>

      <header>

        <div className='header-wp'>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Navbar</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {menuItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <Link
                        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                        to={item.path}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <form className="d-flex" role="search">
                  <div className='text-end'>
                    <Link className='signinbtn' to="/Login">Sign in</Link>
                    <button className='cmnbtn'>Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>

      </header>

    </>
  );
}

export default NavBAr;