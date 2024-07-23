import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

import { BACKEND_URL } from "../../gloalConstant";
import Appointment from "./Appointment";

function Appointments({ appointments, setAppointments, setCurrentApptId }) {
  const [isLoading, setIsLoading] = useState(false);
  const fetchAppointments = async () => {
    try {
      setIsLoading(true);
      const auth = JSON.parse(localStorage.getItem("user"));
      // console.log(auth);
      if (!auth || !auth.token) {
        throw new Error("No auth token found");
      }

      const response = await fetch(`${BACKEND_URL}/doctor/appointments/`, {
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
      // console.log(results);

      setAppointments(results.appointments);
    } catch (error) {
      console.error("Fetch error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <HashLoader color="#1D3557" />
        </div>
      ) : (
        <Appointment
          appointments={appointments}
          setCurrentApptId={setCurrentApptId}
          setAppointments={setAppointments}
        />
      )}
    </>
  );
}

export default Appointments;
