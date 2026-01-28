import { useState } from "react";
import "../styles/auth.css";
import { fakeLogin } from "../services/dummyApi";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("All fields are required");
    return;
  }

  await fakeLogin(); // dummy call

  if (email.includes("admin")) window.location.href = "/admin-dashboard";
  else if (email.includes("doctor")) window.location.href = "/doctor-dashboard";
  else window.location.href = "/patient-dashboard";
};


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 col-md-4 shadow">
        <h4 className="text-center mb-3">Login</h4>

        <form onSubmit={handleSubmit}>
          <input className="form-control mb-2"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)} />

          <input className="form-control mb-2"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)} />

          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
