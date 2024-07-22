import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddDoctor() {

    const [doctorname, setDoctorname] = useState('')
    const [docEmail, setdocEmail] = useState('')
    const [password, setPassword] = useState('')
    const [specialisation, setSpecialisation] = useState('')

    function doctorAddSubmit(e) {
        e.preventDefault();

        if (!doctorname || !docEmail || !password || !specialisation) {
            alert('All Filds Required')
        } else {
            console.log(doctorname, docEmail, password, specialisation)
        }
    }


    return (
        <>
            <div className="doctor-panelbody pt-3 mt-5">
                <div className="container-fluid"><br />
                    <div className="">
                        <div className="row">
                            <div className="col-md-3 pt-5">
                                <div className="doctor-appointmentmenus mb-5">
                                    <Link to="/Adminpanel">
                                        <i className="fa-solid fa-house"></i> Dashboard
                                    </Link><br /><br />
                                    <Link to="/AddDoctor"
                                        style={{ background: "linear-gradient(to left, #2daab8 0%, #16bbe5 100%)", color: "#fff", fontWeight: 500, padding: "16px", borderRadius: "8px", textDecoration: "none", display: "inline-block", }}>
                                        <i className="fa-solid fa-user-plus"></i> Add Doctor
                                    </Link><br /><br />
                                    <Link to="/DoctordList">
                                        <i className="fa-solid fa-list-ul"></i> Doctors List
                                    </Link><br /><br />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div>
                                    <div className="text-center mb-4 mt-5">
                                        <h5>Add Doctor</h5>
                                        <form>
                                            <div className="row mt-5">
                                                <div className="col-md-6">
                                                    <div className="mb-3 text-start">
                                                        <label for="basic-url" className="form-label">Doctor Name</label>
                                                        <div className="input-group">
                                                            <input onChange={(e) => setDoctorname(e.target.value) }
                                                                type="text"
                                                                className="form-control"
                                                                id="basic-url"
                                                                placeholder="Doctor Name"
                                                                aria-describedby="basic-addon3 basic-addon4"
                                                                pattern="[A-Za-z ]+"
                                                                title="Enter the Name"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 text-start">
                                                        <label for="basic-url" className="form-label">Doctor Email</label>
                                                        <div className="input-group">
                                                            <input onChange={(e) => setdocEmail(e.target.value) }
                                                                type="email"
                                                                className="form-control"
                                                                id="basic-url"
                                                                placeholder="Email"
                                                                aria-describedby="basic-addon3 basic-addon4"
                                                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                                                title="Please enter a valid email address"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-5 text-start">
                                                        <label for="basic-url" className="form-label">Specialisation</label>
                                                        <div className="input-group">
                                                            <input type="text" onChange={(e) =>  setSpecialisation(e.target.value) } className="form-control" id="basic-url" placeholder="Specialisation" aria-describedby="basic-addon3 basic-addon4" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 text-start">
                                                        <label for="basic-url" className="form-label">Creat Password</label>
                                                        <div className="input-group">
                                                            <input onChange={(e) => setPassword(e.target.value) }
                                                                type="password"
                                                                className="form-control"
                                                                id="basic-url"
                                                                placeholder="Create Password"
                                                                aria-describedby="basic-addon3 basic-addon4"
                                                                pattern=".{8}"
                                                                title="Password Digin only 8 Keywords"
                                                                required
                                                            />

                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="cmnbtn mx-3" onClick={doctorAddSubmit}>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddDoctor;
