import React, { useEffect, useState } from "react"; // ✅ Added React
import { getCurrentAppointment } from "../../services/patientApi";
import MyNavbar from "../../components/MyNavbar"; // ✅ Added Navbar

function CurrentAppointment() {
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      getCurrentAppointment(user.userId).then(setAppointment);
    }
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3 className="mb-4">Current Appointment</h3>

        {!appointment ? (
          <div className="alert alert-info">
            No current appointment found
          </div>
        ) : (
          <div className="card p-4 shadow">
            <p><strong>Doctor:</strong> {appointment.doctor}</p>
            <p><strong>Specialization:</strong> {appointment.specialization}</p>
            <p><strong>Date:</strong> {appointment.date}</p>
            <p><strong>Time:</strong> {appointment.time}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="badge bg-primary">
                {appointment.status}
              </span>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default CurrentAppointment;