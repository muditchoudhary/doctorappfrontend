import React, { useState } from "react";
import { Link } from "react-router-dom";

function CancelAppointments() {


    return (
        <>
            <div className="doctor-panelbody pt-3 mt-5">
                <div className="container-fluid">
                    <div className="pt-5">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="doctor-appointmentmenus">
                                    <Link
                                        to="/DoctorDashboard">
                                        <i className="fa-solid fa-house"></i> Dashboard
                                    </Link><br /><br />
                                    <Link to="/Appointments"><i className="fa-solid fa-calendar-check"></i> Appointments</Link><br /><br />
                                    <Link to="/PastAppointments"><i className="fa-solid fa-wand-magic-sparkles"></i> Past Appointments</Link><br /><br />
                                    <Link to="/CancelAppointments"
                                        style={{ background: "linear-gradient(to left, #2daab8 0%, #16bbe5 100%)", color: "#fff", fontWeight: 500, padding: "16px", borderRadius: "8px", textDecoration: "none", display: "inline-block", }}><i className="fa-solid fa-wand-magic-sparkles"></i> Cancel Appointments</Link><br /><br />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="text-center">
                                    <h4>Cancel Appointments</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default CancelAppointments;