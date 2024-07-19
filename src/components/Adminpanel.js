import React, { useState } from "react";
import '../customCss/doctorPanel.css';

function Adminpanel() {
    const [activeTab, setActiveTab] = useState(() => {
        const savedTab = localStorage.getItem('activeTab');
        return savedTab || 'Dashboard';
    });

    const handleButtonClick = (tabName) => {
        setActiveTab(tabName);
        localStorage.setItem('activeTab', tabName);
    };


    // const [MySpecialitybg, setMySpecialitybg] = useState('')    

    // console.log(MySpecialitybg)

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

    const [rows, setRows] = useState([
        { id: 1, name: 'Pankaj Tiwari' },
        { id: 2, name: 'Anil Shahu' },
        { id: 3, name: 'Gular UlalaUlala' },
        { id: 4, name: 'UlalaUlala' },
        { id: 5, name: 'Manoj UlalaUlala' },
        { id: 6, name: 'Rakesh UlalaUlala' },
        { id: 7, name: 'Chatulal' },
    ]);

    const handleRemoveClick = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
    };


    const [doctorname, setDoctorname] = useState('')
    const [docEmail, setdocEmail] = useState('')
    const [password, setPassword] = useState('')
    const [specialisation, setSpecialisation] = useState('')

    function doctorAddSubmit(e) {
        e.preventDefault();
        
        if (!doctorname || !docEmail || !password || !specialisation) {
            alert('All Filds Required')
        }else{
            console.log(doctorname,docEmail,password,specialisation)
        }
    }

    return (
        <>
            <div className="doctor-panelbody pt-3 mt-5">
                <div className="container-fluid"><br/>                
                {/* <input type="text" onChange={(e) => setMySpecialitybg(e.target.value)}></input> */}
                    <div className="">
                        <div className="row">
                            <div className="col-md-3 pt-5">
                                <div className="doctor-appointmentmenus mb-5">
                                    <button className={activeTab === 'Dashboard' ? 'activebtntwo' : ''} onClick={() => handleButtonClick('Dashboard')}>
                                        <i className="fa-solid fa-house"></i> Dashboard
                                    </button><br />
                                    <button className={activeTab === 'Appointment' ? 'activebtntwo' : ''} onClick={() => handleButtonClick('Appointment')}>
                                        <i className="fa-solid fa-user-plus"></i> Add Doctor
                                    </button><br />
                                    <button className={activeTab === 'Ulala' ? 'activebtntwo' : ''} onClick={() => handleButtonClick('Ulala')}>
                                        <i className="fa-solid fa-list-ul"></i> Doctors List
                                    </button><br />
                                    {/* <button className={activeTab === 'Ulala2' ? 'activebtntwo' : ''} onClick={() => handleButtonClick('Ulala2')}>
                                        <i className="fa-solid fa-wand-magic-sparkles"></i> Cancel Appointments
                                    </button><br /> */}
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className={activeTab === 'Dashboard' ? 'doctor-dashbord active' : 'doctor-dashbord'}>
                                    <div className="text-center mb-4 mt-5">
                                        <h5>Dashboard</h5>
                                    </div>
                                </div>
                                <div className={activeTab === 'Appointment' ? 'doctorappointment-table active' : 'doctorappointment-table'}>
                                    <div className="text-center mb-4 mt-5">
                                        <h5>Add Doctor</h5>
                                        <form>
                                            <div className="row mt-5">
                                                <div className="col-md-6">
                                                    <div className="mb-3 text-start">
                                                        <label for="basic-url" className="form-label">Doctor Name</label>
                                                        <div className="input-group">
                                                            <input onChange={(e) => { setDoctorname(e.target.value) }}
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
                                                            <input onChange={(e) => { setdocEmail(e.target.value) }}
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
                                                            <input type="text" onChange={(e) => { setSpecialisation(e.target.value) }} className="form-control" id="basic-url" placeholder="Specialisation" aria-describedby="basic-addon3 basic-addon4" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 text-start">
                                                        <label for="basic-url" className="form-label">Creat Password</label>
                                                        <div className="input-group">
                                                            <input onChange={(e) => { setPassword(e.target.value) }}
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
                                                <button  className="cmnbtn mx-3" onClick={doctorAddSubmit}>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className={activeTab === 'Ulala' ? 'doctor-ulala active' : 'doctor-ulala'}>
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
                                {/* <div className={activeTab === 'Ulala2' ? 'doctor-Ulala2 active' : 'doctor-Ulala2'}>
                                    <h5 className="text-center mb-4 mt-5">Past Appointments</h5>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Adminpanel;
