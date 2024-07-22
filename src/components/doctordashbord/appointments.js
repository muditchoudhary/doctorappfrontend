import React, {useState} from "react";
import { Link } from "react-router-dom";

function DoctorDashboard() {

    const [textarea, setTextarea] = useState('')

    function prescriptionSubmit() {
        if (!textarea) {
            alert('Please Fill this Textarea')
        }
    }

    function appointmentCancel() {
        const confirmed = window.confirm("Are you sure you want to cancel this Appointment?");
        if (confirmed) {
            console.log("Appointment canceled successfully.");
            const appointmentElement = document.querySelector('#firstAppointment');
            if (appointmentElement) {
                appointmentElement.remove();
                console.log("Appointment element deleted.");
            } else {
                console.log("Appointment element not found.");
            }
        } else {
            console.log("Appointment cancellation aborted.");
        }
    }
    
    
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
                                    <Link to="/Appointments"
                                        style={{ background: "linear-gradient(to left, #2daab8 0%, #16bbe5 100%)", color: "#fff", fontWeight: 500, padding: "16px", borderRadius: "8px", textDecoration: "none", display: "inline-block", }}><i className="fa-solid fa-calendar-check"></i> Appointments</Link><br /><br />
                                    <Link to="/PastAppointments"><i className="fa-solid fa-wand-magic-sparkles"></i> Past Appointments</Link><br /><br />
                                    <Link to="/CancelAppointments"><i className="fa-solid fa-wand-magic-sparkles"></i> Cancel Appointments</Link><br /><br />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="text-center">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Appointment</th>
                                                <th scope="col">Prescription</th>
                                                <th scope="col">Edit Appointment</th>
                                                <th scope="col">Cancel Appointment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="firstAppointment">
                                                <td scope="row">Appointment Name</td>
                                                <td>
                                                    <span className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#editAppointment">
                                                        Prescription
                                                    </span>
                                                </td>
                                                <td className="editbtn">
                                                    <span data-bs-toggle="modal" data-bs-target="#prescriptionId">
                                                        <i class="fa-regular fa-pen-to-square"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <button className="btn btn-light" onClick={appointmentCancel}>Cancel</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr id="firstAppointment">
                                                <td scope="row">Appointment Name</td>
                                                <td>
                                                    <span className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#editAppointment">
                                                        Prescription
                                                    </span>
                                                </td>
                                                <td className="editbtn">
                                                    <span data-bs-toggle="modal" data-bs-target="#prescriptionId">
                                                        <i class="fa-regular fa-pen-to-square"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <button className="btn btn-light" onClick={appointmentCancel}>Cancel</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr id="firstAppointment">
                                                <td scope="row">Appointment Name</td>
                                                <td>
                                                    <span className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#editAppointment">
                                                        Prescription
                                                    </span>
                                                </td>
                                                <td className="editbtn">
                                                    <span data-bs-toggle="modal" data-bs-target="#prescriptionId">
                                                        <i class="fa-regular fa-pen-to-square"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <button className="btn btn-light" onClick={appointmentCancel}>Cancel</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr id="firstAppointment">
                                                <td scope="row">Appointment Name</td>
                                                <td>
                                                    <span className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#editAppointment">
                                                        Prescription
                                                    </span>
                                                </td>
                                                <td className="editbtn">
                                                    <span data-bs-toggle="modal" data-bs-target="#prescriptionId">
                                                        <i class="fa-regular fa-pen-to-square"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <button className="btn btn-light" onClick={appointmentCancel}>Cancel</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr id="firstAppointment">
                                                <td scope="row">Appointment Name</td>
                                                <td>
                                                    <span className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#editAppointment">
                                                        Prescription
                                                    </span>
                                                </td>
                                                <td className="editbtn">
                                                    <span data-bs-toggle="modal" data-bs-target="#prescriptionId">
                                                        <i class="fa-regular fa-pen-to-square"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <button className="btn btn-light" onClick={appointmentCancel}>Cancel</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* Modals */}
            {/* Modals */}
            {/* Modals */}
            {/* Modals */}


            {/* edit_appointment_modal */}

            <div className="modal fade" id="editAppointment" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            <form>
                                <div className="mb-4">
                                    <textarea placeholder="Prescription" className="form-control" aria-label="With textarea" rows="5" onChange={(e) => setTextarea(e.target.value) } required></textarea>
                                </div>
                                <button type="submit" onClick={prescriptionSubmit} className="cmnbtn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* edit_modal */}

            <div className="modal fade" id="prescriptionId" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            <div className="text-start">
                                <form>
                                    <h6>Name</h6>
                                    <input type="text" class="form-control" placeholder="Rahul Shukla" aria-label="Username" aria-describedby="basic-addon1" disabled />
                                    <br />
                                    <h6>Date</h6>
                                    <input type="text" class="form-control" placeholder="12/07/2024" aria-label="Username" aria-describedby="basic-addon1" disabled />
                                    <br />
                                    <h6>Time</h6>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Edit Time</option>
                                        <option value="1pm to 2pm">1pm to 2pm</option>
                                        <option value="3pm to 4pm">3pm to 4pm</option>
                                        <option value="4.30pm to 5.30pm">4.30pm to 5.30pm</option>
                                    </select>
                                    <br />
                                    <button className="cmnbtn" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default DoctorDashboard;
