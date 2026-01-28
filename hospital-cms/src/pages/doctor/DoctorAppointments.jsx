import React, { useEffect, useState } from "react";
import MyNavbar from "../../components/MyNavbar";
import { getDoctorAppointments } from "../../services/doctorApi";

export default function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      getDoctorAppointments(user.userId).then(setAppointments);
    }
  }, []);

  return (
    <>
      <MyNavbar />

      <div className="container mt-4">
        <h3>Active Appointments</h3>

        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((a) => (
                <tr key={a.id}>
                  <td>{a.patient}</td>
                  <td>{a.date}</td>
                  <td>{a.time}</td>
                  <td>{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
