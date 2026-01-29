import React from "react";
import MyNavbar from "../../components/MyNavbar";

function ViewAppointments() {
  // Temporary dummy data
  const appointments = [
    {
      id: 1,
      patient: "Rahul Sharma",
      doctor: "Dr. Amit Verma",
      date: "2024-04-15",
      time: "10:30 AM",
      status: "Upcoming",
    },
    {
      id: 2,
      patient: "Neha Singh",
      doctor: "Dr. Priya Mehta",
      date: "2024-04-10",
      time: "11:00 AM",
      status: "Completed",
    },
  ];

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>All Appointments</h3>

        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr key={a.id}>
                <td>{index + 1}</td>
                <td>{a.patient}</td>
                <td>{a.doctor}</td>
                <td>{a.date}</td>
                <td>{a.time}</td>
                <td>
                  <span className={`badge bg-${a.status === "Upcoming" ? "warning" : "success"}`}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewAppointments;
