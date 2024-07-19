import React from "react";
import { Link } from "react-router-dom";


function NavBAr() {
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
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/UserSignUp">User Singup</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/BookAppointment">Book a Appointment</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/DoctorPanel">Doctor Dashbord</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Adminpanel">Admin panel</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Afterlogin">After login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Doctorregistration">Doctor Reg</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Prescriptions">Prescriptions</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/doctosSidual">Doctos Sidual</Link>
                  </li>
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