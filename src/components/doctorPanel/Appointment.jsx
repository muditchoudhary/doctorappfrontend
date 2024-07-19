function Appointment({ appointments }) {
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
      {appointments && appointments.length > 0 && (
        <tbody>
          {appointments.map((appt) => (
            <tr id="firstAppointment">
              <td>{appt.userName}</td>
              <td>
                <span
                  className="btn btn-outline-info"
                  data-bs-toggle="modal"
                  data-bs-target="#editAppointment"
                >
                  {appt.prescription}
                </span>
              </td>
              <td className="editbtn">
                <span data-bs-toggle="modal" data-bs-target="#prescriptionId">
                  <i class="fa-regular fa-pen-to-square"></i>
                </span>
              </td>
              <td>
                <button className="btn btn-light" onClick={() => {}}>
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

export default Appointment;
