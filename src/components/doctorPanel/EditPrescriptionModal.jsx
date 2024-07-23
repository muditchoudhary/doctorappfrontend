import { useEffect, useState } from "react";

import { BACKEND_URL } from "../../gloalConstant";

function EditPrescriptionModal({
  appointments,
  currentApptId,
  setAppointments,
}) {
  const [currentApt, setCurrentApt] = useState(null);
  const [appointmentAt, setAppointmentAt] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onEditSubmit(e) {
    e.preventDefault();
    const auth = JSON.parse(localStorage.getItem("user"));
    try {
      setIsLoading(true);
      let result = await fetch(`${BACKEND_URL}/doctor/appointment/edit`, {
        method: "put",
        body: JSON.stringify({
          commonId: currentApt.commonId,
          userId: currentApt.userId,
          appointmentAt: appointmentAt,
          appointmentOn: currentApt.appointmentOn,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `${auth.token}`,
        },
      });

      const data = await result.json();

      // console.log("data is: ", data);

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
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (appointments && appointments.length > 0) {
      for (let i = 0; i < appointments.length; i++) {
        const currentApt = appointments[i];
        if (currentApt._id === currentApptId) {
          setCurrentApt(currentApt);
          setAppointmentAt(currentApt.appointmentAt);
          break;
        }
      }
    }
    // console.log("current apt is: ", currentApt);
  }, [appointments, currentApptId, currentApt]);
  return (
    <>
      <div
        className="modal fade"
        id="prescriptionId"
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
              <div className="text-start">
                <form onSubmit={onEditSubmit}>
                  <h6>Name</h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Patient Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    disabled
                    value={currentApt?.userName}
                  />
                  <br />
                  <h6>Date</h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="12/07/2024"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    disabled
                    value={currentApt?.appointmentOn}
                  />
                  <br />
                  <h6>Time</h6>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={appointmentAt}
                    onChange={(e) => setAppointmentAt(e.target.value)}
                  >
                    <option value={currentApt?.appointmentAt}>
                      {currentApt?.appointmentAt}
                    </option>
                    <option value="1pm-2pm">1pm to 2pm</option>
                    <option value="3pm-4pm">3pm to 4pm</option>
                    <option value="6pm-7pm">6pm to 7pm</option>
                  </select>
                  <br />
                  <button className="cmnbtn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPrescriptionModal;
