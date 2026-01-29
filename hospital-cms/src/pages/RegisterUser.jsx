import React, { useState } from "react";
import MyNavbar from "../components/MyNavbar";

function RegisterUser() {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // This payload now matches Patient model exactly
    console.log("REGISTER PATIENT:", form);

    alert("Patient registered successfully");

    setForm({
      fullName: "",
      age: "",
      gender: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
  };

  return (
    <>
      <MyNavbar />

      <div className="container mt-4">
        <h3>Patient Registration</h3>

        <form onSubmit={handleSubmit} className="col-md-6 mt-3">

          <input
            className="form-control mb-2"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-2"
            name="age"
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
          />

          <select
            className="form-control mb-2"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            className="form-control mb-2"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-2"
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100">
            Register Patient
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterUser;