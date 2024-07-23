import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

import { BACKEND_URL } from "../gloalConstant";
import { useNavigate } from "react-router-dom";

function BookAppointment() {
  const [doctors, setDoctors] = useState("");
  const [docList, setDocList] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disease, setDisease] = useState("");

  const navigate = useNavigate();

  const fetchDoctorList = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
      setIsLoading(true);
      let result = await fetch(`${BACKEND_URL}/user/appointment/new`, {
        method: "post",
        body: JSON.stringify({
          doctorId: doctors,
          appointmentOn: date,
          appointmentAt: time,
          disease: disease,
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
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <HashLoader color="#1D3557" />
        </div>
      )}
      <div className="container book-appointmentwp mb-5">
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
            <div className="col-md-4 mb-3">
              <label htmlFor="basic-url" className="form-label">
                Explain Your Problem
              </label>
              <textarea
                className="disease"
                cols="4"
                rows="12"
                aria-label="Default select example"
                onChange={(e) => setDisease(e.target.value)}
              />
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
