import React, { useState } from "react";
import { Link } from "react-router-dom";

function Adminpanel() {

    const handleRemoveClick = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
    };

    const [rows, setRows] = useState([
        { id: 1, name: 'Pankaj Tiwari' },
        { id: 2, name: 'Anil Shahu' },
        { id: 3, name: 'Gular UlalaUlala' },
        { id: 4, name: 'UlalaUlala' },
        { id: 5, name: 'Manoj UlalaUlala' },
        { id: 6, name: 'Rakesh UlalaUlala' },
        { id: 7, name: 'Chatulal' },
    ]);

    const getSpeciality = (id) => {
        switch (id) {
            case 1:
                return 'Speciality 1';
            case 2:
                return 'Speciality 2';
            case 3:
                return 'Speciality 3';
            case 4:
                return 'Speciality 4';
            case 5:
                return 'Speciality 5';
            case 6:
                return 'Speciality 6';
            case 7:
                return 'Speciality 7';
            default:
                return 'Unknown Speciality';
        }
    };

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
                                    <Link to="/AddDoctor">
                                        <i className="fa-solid fa-user-plus"></i> Add Doctor
                                    </Link><br /><br />
                                    <Link to="/DoctordList"
                                        style={{ background: "linear-gradient(to left, #2daab8 0%, #16bbe5 100%)", color: "#fff", fontWeight: 500, padding: "16px", borderRadius: "8px", textDecoration: "none", display: "inline-block", }}>
                                        <i className="fa-solid fa-list-ul"></i> Doctors List
                                    </Link><br /><br />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div>
                                    <h5 className="text-center mb-4 mt-5">
                                        Doctors Appointments
                                    </h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Doctors Name</th>
                                                <th scope="col">Speciality</th>
                                                <th scope="col">Doctors Status</th>
                                                <th scope="col">Remove Doctors</th>
                                                {/* speciality */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map(row => (
                                                <tr key={row.id}>
                                                    <td>{row.name}</td>
                                                    <td>{getSpeciality(row.id)}</td>
                                                    <td>
                                                        <div className="form-check form-switch">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                role="switch"
                                                                id={`doctor${row.id}`}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary removebtn"
                                                            onClick={() => handleRemoveClick(row.id)}
                                                        >
                                                            Remove
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
