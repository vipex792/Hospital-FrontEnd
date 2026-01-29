import React from "react";
import MyNavbar from "../../components/MyNavbar";

function ViewPatients() {
  // Temporary dummy data
  const patients = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Neha Singh",
      email: "neha@gmail.com",
      phone: "9123456789",
    },
  ];

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Registered Patients</h3>

        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewPatients;
