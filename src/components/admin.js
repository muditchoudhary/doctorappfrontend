import React, { useState } from "react";

import '../customCss/doctorPanel.css';

function Admin() {

    const [activeTab, setActiveTab] = useState(() => {
        const savedTab = localStorage.getItem('activeTab');
        return savedTab || 'Dashboard';
    });

    const handleButtonClick = (tabName) => {
        setActiveTab(tabName);
        localStorage.setItem('activeTab', tabName);
    };

    
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
                                    <button className={activeTab === 'Dashboard' ? 'activebtn' : ''} onClick={() => handleButtonClick('Dashboard')}>
                                        <i className="fa-solid fa-house"></i> Dashboard
                                    </button><br />
                                    <button className={activeTab === 'Appointment' ? 'activebtn' : ''} onClick={() => handleButtonClick('Appointment')}>
                                        <i className="fa-solid fa-calendar-check"></i> Appointments
                                    </button><br />
                                    <button className={activeTab === 'Ulala' ? 'activebtn' : ''} onClick={() => handleButtonClick('Ulala')}>
                                        <i className="fa-solid fa-wand-magic-sparkles"></i> Past Appointments
                                    </button><br />
                                    <button className={activeTab === 'Ulala2' ? 'activebtn' : ''} onClick={() => handleButtonClick('Ulala2')}>
                                        <i className="fa-solid fa-wand-magic-sparkles"></i> Cancel Appointments
                                    </button><br />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className={activeTab === 'Dashboard' ? 'doctor-dashbord active' : 'doctor-dashbord'}>
                                    <h4>Dashboard</h4>
                                </div>
                                <div className={activeTab === 'Appointment' ? 'doctorappointment-table active' : 'doctorappointment-table'}>
                                    <div className="text-center mb-4">
                                        <h5>All Appointment</h5>
                                    </div>
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
                                <div className={activeTab === 'Ulala' ? 'doctor-ulala active' : 'doctor-ulala'}>
                                    <h4>Cancel Appointments</h4>
                                </div>
                                <div className={activeTab === 'Ulala2' ? 'doctor-Ulala2 active' : 'doctor-Ulala2'}>
                                    <h4>Past Appointments</h4>
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
                                    <textarea placeholder="Prescription" className="form-control" aria-label="With textarea" rows="5" onChange={(e) => { setTextarea(e.target.value) }} required></textarea>
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

export default Admin;