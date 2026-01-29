import React, { useState } from "react";
import MyNavbar from "../components/MyNavbar";
import { registerDoctor } from "../services/adminApi";

function RegisterDoctor() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    specialization: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerDoctor(form);
      alert("Doctor registered successfully");

      setForm({
        name: "",
        email: "",
        specialization: "",
        phone: "",
        password: "",
      });
    } catch (err) {
      alert(err.message || "Failed to register doctor");
    }
  };

  return (
    <>
      <MyNavbar />

      <div className="container mt-4">
        <h3>Register New Doctor</h3>

        <form onSubmit={handleSubmit} className="col-md-6 mt-3">
          <input
            className="form-control mb-2"
            name="name"
            placeholder="Doctor Name"
            value={form.name}
            onChange={handleChange}
            required
          />

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
            name="specialization"
            placeholder="Specialization"
            value={form.specialization}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-2"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            name="password"
            type="password"
            placeholder="Temporary Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100">
            Register Doctor
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterDoctor;
