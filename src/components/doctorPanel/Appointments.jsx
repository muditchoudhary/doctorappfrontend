import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

import { BACKEND_URL } from "../../gloalConstant";
import Appointment from "./Appointment";

function Appointments() {
  const [appointments, setAppointments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchAppointments = async () => {
    try {
      setIsLoading(true);
      const auth = JSON.parse(localStorage.getItem("user"));
      console.log(auth);
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
      console.log(results);

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
        <div>
          <Spinner />
        </div>
      ) : (
        <Appointment appointments={appointments} />
      )}
    </>
  );
}

export default Appointments;
