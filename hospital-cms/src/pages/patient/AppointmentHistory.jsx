import React, { useEffect, useState } from "react"; // ✅ Added React
import { getPatientAppointments } from "../../services/patientApi";
import MyNavbar from "../../components/MyNavbar"; // ✅ Added Navbar

function AppointmentHistory() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      // Assuming dummy API doesn't actually filter by ID yet, but this is good structure
      getPatientAppointments(user.userId).then(setAppointments);
    }
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3 className="mb-4">My Appointments</h3>

        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Doctor</th>
              <th>Specialization</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No appointments found
                </td>
              </tr>
            ) : (
              appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.doctor}</td>
                  <td>{appt.specialization}</td>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td>
                    <span
                      className={`badge ${
                        appt.status === "Completed"
                          ? "bg-success"
                          : appt.status === "Upcoming"
                          ? "bg-primary"
                          : "bg-danger"
                      }`}
                    >
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AppointmentHistory;