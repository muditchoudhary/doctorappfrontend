import React, { useState, useEffect } from "react";
import "../customCss/doctorPanel.css";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../gloalConstant";

function Adminpanel() {
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab || "Dashboard";
  });

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
    localStorage.setItem("activeTab", tabName);
  };

  // const [MySpecialitybg, setMySpecialitybg] = useState('')

  // console.log(MySpecialitybg)

  const [rows, setRows] = useState([
    { id: 1, name: "Pankaj Tiwari" },
    { id: 2, name: "Anil Shahu" },
    { id: 3, name: "Gular UlalaUlala" },
    { id: 4, name: "UlalaUlala" },
    { id: 5, name: "Manoj UlalaUlala" },
    { id: 6, name: "Rakesh UlalaUlala" },
    { id: 7, name: "Chatulal" },
  ]);

  const handleRemoveClick = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const [doctorname, setDoctorname] = useState("");
  const [docEmail, setdocEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [docList, setDocList] = useState([]);
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDoctorList();
  }, []);

  async function doctorAddSubmit(e) {
    e.preventDefault();

    if (!doctorname || !docEmail || !password || !specialisation) {
      alert("All Filds Required");
      return;
    }
    const auth = JSON.parse(localStorage.getItem("user"));
    console.log(auth.token);
    try {
      let result = await fetch(`${BACKEND_URL}/admin/doctor/register`, {
        method: "post",
        body: JSON.stringify({
          fullName: doctorname,
          email: docEmail,
          password: password,
          speciality: specialisation,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `${auth.token}`,
        },
      });

      const data = await result.json();

      if (data) {
        alert("Doctor Registered Successfully");
        navigate("/admin-panel");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const fetchDoctorList = async () => {
    try {
      const auth = JSON.parse(localStorage.getItem("user"));
      if (!auth || !auth.token) {
        throw new Error("No auth token found");
      }

      const response = await fetch(`${BACKEND_URL}/admin/doctor/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${auth.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const results = await response.json();

      setDocList(results.doctors);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const deleteDoctor = async (id) => {
    const auth = JSON.parse(localStorage.getItem("user"));
    if (!auth || !auth.token) {
      alert("No auth token found");
      return;
    }

    try {
      let result = await fetch(`${BACKEND_URL}/admin/doctor/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${auth.token}`,
        },
      });

      if (result.status === 401) {
        alert("Unauthorized access - invalid token or not logged in");
        return;
      }

      result = await result.json();
      console.log(result);

      if (result) {
        alert("Record is deleted");
        // Update your state or fetch the updated list of doctors here
        // e.g., getProducts();
        fetchDoctorList();
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const toggleDoctorStatus = async (id, currentStatus) => {
    console.log("one");
    console.log(id);
    const auth = JSON.parse(localStorage.getItem("user"));

    try {
      let result = await fetch(
        `${BACKEND_URL}/admin/doctor/toggle/disable/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            disable: !currentStatus, // Toggle the current status
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `${auth.token}`,
          },
        }
      );
      if (result.ok) {
        const updatedDoctor = await result.json();
        fetchDoctorList();
        // Update the local state to reflect the change
        setRows((prevRows) =>
          prevRows.map((row) => (row._id === id ? updatedDoctor : row))
        );
        console.log("Status toggled successfully:", updatedDoctor);
      } else {
        console.error("Failed to toggle status:", await result.text());
      }
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  };

  return (
    <>
      <div className="doctor-panelbody pt-3 mt-5">
        <div className="container-fluid">
          <br />
          {/* <input type="text" onChange={(e) => setMySpecialitybg(e.target.value)}></input> */}
          <div className="">
            <div className="row">
              <div className="col-md-3 pt-5">
                <div className="doctor-appointmentmenus mb-5">
                  <button
                    className={activeTab === "Dashboard" ? "activebtntwo" : ""}
                    onClick={() => handleButtonClick("Dashboard")}
                  >
                    <i className="fa-solid fa-house"></i> Dashboard
                  </button>
                  <br />
                  <button
                    className={
                      activeTab === "Appointment" ? "activebtntwo" : ""
                    }
                    onClick={() => handleButtonClick("Appointment")}
                  >
                    <i className="fa-solid fa-user-plus"></i> Add Doctor
                  </button>
                  <br />
                  <button
                    className={activeTab === "Ulala" ? "activebtntwo" : ""}
                    onClick={() => handleButtonClick("Ulala")}
                  >
                    <i className="fa-solid fa-list-ul"></i> Doctors List
                  </button>
                  <br />
                  <button
                    className={activeTab === "Ulala2" ? "activebtntwo" : ""}
                    onClick={logout}
                  >
                    <i className="fa fa-sign-out"></i> Logout
                  </button>
                  <br />
                </div>
              </div>
              <div className="col-md-9">
                <div
                  className={
                    activeTab === "Dashboard"
                      ? "doctor-dashbord active"
                      : "doctor-dashbord"
                  }
                  id="dashboard"
                >
                  <div className="text-center mb-4 mt-5">
                    <h5>Dashboard</h5>
                  </div>
                </div>
                <div
                  className={
                    activeTab === "Appointment"
                      ? "doctorappointment-table active"
                      : "doctorappointment-table"
                  }
                >
                  <div className="text-center mb-4 mt-5">
                    <h5>Add Doctor</h5>
                    <form>
                      <div className="row mt-5">
                        <div className="col-md-6">
                          <div className="mb-3 text-start">
                            <label for="basic-url" className="form-label">
                              Doctor Name
                            </label>
                            <div className="input-group">
                              <input
                                onChange={(e) => {
                                  setDoctorname(e.target.value);
                                }}
                                type="text"
                                className="form-control"
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
                            <label for="basic-url" className="form-label">
                              Doctor Email
                            </label>
                            <div className="input-group">
                              <input
                                onChange={(e) => {
                                  setdocEmail(e.target.value);
                                }}
                                type="email"
                                className="form-control"
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
                            <label for="basic-url" className="form-label">
                              Specialisation
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                onChange={(e) => {
                                  setSpecialisation(e.target.value);
                                }}
                                className="form-control"
                                placeholder="Specialisation"
                                aria-describedby="basic-addon3 basic-addon4"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3 text-start">
                            <label for="basic-url" className="form-label">
                              Creat Password
                            </label>
                            <div className="input-group">
                              <input
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                                type="password"
                                className="form-control"
                                placeholder="Create Password"
                                aria-describedby="basic-addon3 basic-addon4"
                                pattern=".{8}"
                                title="Password Digin only 8 Keywords"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          className="cmnbtn mx-3"
                          onClick={doctorAddSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className={
                    activeTab === "Ulala"
                      ? "doctor-ulala active"
                      : "doctor-ulala"
                  }
                >
                  <h5 className="text-center mb-4 mt-5">Doctors List</h5>
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
                      {docList.map((item, index) => (
                        <tr key={item._id}>
                          <td>{item.fullName}</td>
                          <td>{item.speciality}</td>
                          <td>
                            <div className="form-check form-switch">
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() =>
                                  toggleDoctorStatus(item._id, item.disable)
                                }
                              >
                                {item.disable ? "Enable" : "Disable"}
                              </button>
                            </div>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-secondary removebtn"
                              onClick={() => deleteDoctor(item._id)}
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
