import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { fakeLogin } from "../services/dummyApi";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    // Dummy API call
    await fakeLogin();

    // 🔐 Decide role
    let role = "patient";
    let redirect = "/patient-dashboard";

    if (email.includes("admin")) {
      role = "admin";
      redirect = "/admin-dashboard";
    } else if (email.includes("doctor")) {
      role = "doctor";
      redirect = "/doctor-dashboard";
    }

    // ✅ Save login info (IMPORTANT)
    localStorage.setItem(
      "user",
      JSON.stringify({ email, role })
    );

    // ✅ React Router navigation
    navigate(redirect);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 col-md-4 shadow">
        <h4 className="text-center mb-3">Login</h4>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="form-control mb-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
