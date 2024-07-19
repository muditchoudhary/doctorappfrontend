import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../gloalConstant";
import { useNavigate } from "react-router-dom";

function BookAppointment() {
  const [doctors, setDoctors] = useState("");
  const [docList, setDocList] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  const fetchDoctorList = async () => {
    try {
      const auth = JSON.parse(localStorage.getItem("user"));
      if (!auth || !auth.token) {
        throw new Error("No auth token found");
      }

      const response = await fetch(`${BACKEND_URL}/user/doctor/all`, {
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

  useEffect(() => {
    fetchDoctorList();
  }, []);

  async function bookAppoiSubmit(e) {
    e.preventDefault();
    if (!doctors || !date || !time) {
      alert("Please select all fileds");
      return;
    }

    const auth = JSON.parse(localStorage.getItem("user"));
    try {
      let result = await fetch(`${BACKEND_URL}/user/appointment/new`, {
        method: "post",
        body: JSON.stringify({
          doctorId: doctors,
          appointmentOn: date,
          appointmentAt: time,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `${auth.token}`,
        },
      });

      const data = await result.json();

      if (data) {
        alert("Appointment submitted successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container book-appointmentwp">
        <div className="text-center mt-5 mb-3">
          <h3>Book a Appointment</h3>
        </div>
        <form>
          <div className="row mt-5">
            <div className="col-md-4 mb-3">
              <label htmlFor="basic-url" className="form-label">
                Select Doctors
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setDoctors(e.target.value);
                }}
              >
                <option defaultValue>Select Doctors</option>
                {docList.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.fullName} ({item.speciality})
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="basic-url" className="form-label">
                Select Date
              </label>
              <input
                type="date"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              ></input>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="basic-url" className="form-label">
                Select Time
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              >
                <option selected>Select Time</option>
                <option value="9am-11am">9am - 11am</option>
                <option value="1pm-3pm">1pm - 3pm</option>
                <option value="6pm-8pm">6pm - 8pm</option>
              </select>
            </div>
            <div className="mt-3">
              <button className="cmnbtn" onClick={bookAppoiSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BookAppointment;
