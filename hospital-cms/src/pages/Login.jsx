import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { login } from "../services/authApi";
// import MyNavbar from "../components/MyNavbar";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      // 🔐 Call backend API
      const response = await login({
        email: email,
        password: password,
      });

      /*
        Expected backend response (example):
        {
          token: "...",
          role: "Admin" | "Doctor" | "Patient",
          email: "user@mail.com"
        }
      */

      const { token, role } = response.data;

      // ✅ Store token (used by Axios interceptor)
      localStorage.setItem("token", token);

      // ✅ Store user info (optional but useful)
      localStorage.setItem(
        "user",
        JSON.stringify({ email, role })
      );

      // 🔀 Redirect based on role
      if (role === "Admin") {
        navigate("/admin-dashboard");
      } else if (role === "Doctor") {
        navigate("/doctor-dashboard");
      } else {
        navigate("/patient-dashboard");
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Optional: <MyNavbar /> */}

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 col-md-4 shadow">
          <h4 className="text-center mb-3">Login</h4>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-2"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="form-control mb-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
