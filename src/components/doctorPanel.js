import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import "../customCss/doctorPanel.css";
import Appointments from "./doctorPanel/Appointments";
import EditPrescriptionModal from "./doctorPanel/EditPrescriptionModal";
import WritePrescriptionModal from "./doctorPanel/WritePrescriptionModal";
import { useAuthContext } from "../hooks/useAuthContext";

function DoctorPanel() {
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab || "Dashboard";
  });
  const [appointments, setAppointments] = useState(null);
  const [currentApptId, setCurrentApptId] = useState(null);

  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
    localStorage.setItem("activeTab", tabName);
  };

  const [textarea, setTextarea] = useState("");

  function prescriptionSubmit() {
    if (!textarea) {
      alert("Please Fill this Textarea");
    }
  }

  function appointmentCancel() {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this Appointment?"
    );
    if (confirmed) {
      console.log("Appointment canceled successfully.");
      const appointmentElement = document.querySelector("#firstAppointment");
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

  function onDoctorLogout() {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT", payload: false });
    navigate("/login");
  }

  return (
    <>
      <div className="doctor-panelbody pt-3 mt-5">
        <div className="container-fluid">
          <div className="pt-5">
            <div className="row">
              <div className="col-md-3">
                <div className="doctor-appointmentmenus">
                  {/* <button
                    className={activeTab === "Dashboard" ? "activebtn" : ""}
                    onClick={() => handleButtonClick("Dashboard")}
                  >
                    <i className="fa-solid fa-house"></i> Dashboard
                  </button> */}
                  <br />
                  <button
                    className={activeTab === "Appointment" ? "activebtn" : ""}
                    onClick={() => handleButtonClick("Appointment")}
                  >
                    <i className="fa-solid fa-calendar-check"></i> Appointments
                  </button>
                  <br />
                  <br />
                  <Button onClick={() => onDoctorLogout()}>Log out</Button>
                </div>
              </div>
              <div className="col-md-9">
                {/* <div
                  className={
                    activeTab === "Dashboard"
                      ? "doctor-dashbord active"
                      : "doctor-dashbord"
                  }
                >
                  <h4>Dashboard</h4>
                </div> */}
                <div
                  className={
                    activeTab === "Appointment"
                      ? "doctorappointment-table active"
                      : "doctorappointment-table"
                  }
                >
                  <div className="text-center mb-4">
                    <h5>All Appointment</h5>
                  </div>
                  <Appointments
                    appointments={appointments}
                    setAppointments={setAppointments}
                    setCurrentApptId={setCurrentApptId}
                  />
                </div>
                <div
                  className={
                    activeTab === "Ulala"
                      ? "doctor-ulala active"
                      : "doctor-ulala"
                  }
                >
                  <h4>Cancel Appointments</h4>
                </div>
                <div
                  className={
                    activeTab === "Ulala2"
                      ? "doctor-Ulala2 active"
                      : "doctor-Ulala2"
                  }
                >
                  <h4>Past Appointments</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WritePrescriptionModal
        appointments={appointments}
        currentApptId={currentApptId}
        setAppointments={setAppointments}
      />

      <EditPrescriptionModal
        appointments={appointments}
        currentApptId={currentApptId}
        setAppointments={setAppointments}
      />
    </>
  );
}

export default DoctorPanel;
