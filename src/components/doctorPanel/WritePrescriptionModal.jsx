import { useState, useEffect } from "react";

import { BACKEND_URL } from "../../gloalConstant";

function WritePrescriptionModal({
  appointments,
  currentApptId,
  setAppointments,
}) {
  const [currentApt, setCurrentApt] = useState(null);
  const [prescription, setPrescription] = useState(null);

  async function onPrescriptionSubmit(e) {
    e.preventDefault();
    const auth = JSON.parse(localStorage.getItem("user"));
    try {
      let result = await fetch(
        `${BACKEND_URL}/doctor/appointment/prescription`,
        {
          method: "put",
          body: JSON.stringify({
            commonId: currentApt.commonId,
            userId: currentApt.userId,
            prescription: prescription,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `${auth.token}`,
          },
        }
      );

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
        alert("Appointment updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (appointments && appointments.length > 0) {
      for (let i = 0; i < appointments.length; i++) {
        const currentApt = appointments[i];
        if (currentApt._id === currentApptId) {
          setCurrentApt(currentApt);
          setPrescription(currentApt.prescription);
          break;
        }
      }
    }
  }, [appointments, currentApptId, currentApt]);
  return (
    <>
      <div
        className="modal fade"
        id="editAppointment"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <form onSubmit={onPrescriptionSubmit}>
                <div className="mb-4">
                  <textarea
                    placeholder="Prescription"
                    className="form-control"
                    aria-label="With textarea"
                    rows="5"
                    value={prescription}
                    onChange={(e) => {
                      setPrescription(e.target.value);
                    }}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="cmnbtn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WritePrescriptionModal;
