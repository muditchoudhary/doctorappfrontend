import React, { useState } from "react";
import { Link } from "react-router-dom";

function Adminpanel() {

    return (
        <>
            <div className="doctor-panelbody pt-3 mt-5">
                <div className="container-fluid"><br/>
                    <div className="">
                        <div className="row">
                            <div className="col-md-3 pt-5">
                                <div className="doctor-appointmentmenus mb-5">
                                    <Link to="/Adminpanel"
                                        style={{ background: "linear-gradient(to left, #2daab8 0%, #16bbe5 100%)", color: "#fff", fontWeight: 500, padding: "16px", borderRadius: "8px", textDecoration: "none", display: "inline-block", }}>
                                        <i className="fa-solid fa-house"></i> Dashboard
                                    </Link><br /><br/>
                                    <Link to="/AddDoctor">
                                        <i className="fa-solid fa-user-plus"></i> Add Doctor
                                    </Link><br /><br/>
                                    <Link to="/DoctordList">
                                        <i className="fa-solid fa-list-ul"></i> Doctors List
                                    </Link><br /><br/>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div>
                                    <div className="text-center mb-4 mt-5">
                                        <h5>Dashboard</h5>
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

export default Adminpanel;
