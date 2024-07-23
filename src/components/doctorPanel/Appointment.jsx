import { useState } from "react";

import { BACKEND_URL } from "../../gloalConstant";

function Appointment({ appointments, setCurrentApptId, setAppointments }) {
  const [isLoading, setIsLoading] = useState(false);

  async function onCancelAppt(commonId, userId) {
    const auth = JSON.parse(localStorage.getItem("user"));
    try {
      setIsLoading(true);
      let result = await fetch(`${BACKEND_URL}/doctor/appointment`, {
        method: "delete",
        body: JSON.stringify({
          commonId: commonId,
          userId: userId,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `${auth.token}`,
        },
      });

      const data = await result.json();

      console.log("data is: ", data);

      if (data) {
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
        // alert("Appointment canceled successfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">User Name</th>
          <th scope="col">Prescription</th>
          <th scope="col">Edit Appointment</th>
          <th scope="col">Cancel Appointment</th>
        </tr>
      </thead>
      {appointments && appointments.length > 0 ? (
        <>
          <tbody>
            {appointments.map((appt) => (
              <tr id="firstAppointment" key={appt._id}>
                <td>{appt.userName}</td>
                <td>
                  <span
                    className="btn btn-outline-info"
                    data-bs-toggle="modal"
                    data-bs-target="#editAppointment"
                    onClick={() => setCurrentApptId(appt._id)}
                  >
                    {appt.prescription ? appt.prescription : "Null"}
                  </span>
                </td>
                <td className="editbtn">
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#prescriptionId"
                    onClick={() => setCurrentApptId(appt._id)}
                  >
                    <i class="fa-regular fa-pen-to-square"></i>
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-light"
                    onClick={() => {
                      onCancelAppt(appt.commonId, appt.userId);
                    }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      ) : (
        <p>Currently there no appointments</p>
      )}
    </table>
  );
}

export default Appointment;
