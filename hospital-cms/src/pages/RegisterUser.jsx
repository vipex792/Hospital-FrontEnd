import React from 'react'; // ✅ Added React import
import MyNavbar from "../components/MyNavbar";

function RegisterUser() {
  return (
    <>
      <MyNavbar />
      <div className="container col-md-6 mt-4">
        <div className="card p-4 shadow">
          <h4>User Registration</h4>
          <input className="form-control mb-2" placeholder="Username" />
          <input className="form-control mb-2" placeholder="First Name" />
          <input className="form-control mb-2" placeholder="Last Name" />
          <input className="form-control mb-2" placeholder="Email" />
          <input className="form-control mb-2" placeholder="Mobile Number"/>
          <input className="form-control mb-2" placeholder="Age"/>
          <input className="form-control mb-2" type="password" placeholder="Password"/>
          <input className="form-control mb-2" type="password" placeholder="Confirm Password" />

          <div className="mb-2">
            <label className="me-3"><input type="radio" name="gender" /> Male</label>
            <label className="me-3"><input type="radio" name="gender" /> Female</label>
          </div>

          <button className="btn btn-success w-100">Register</button>
        </div>
      </div>
    </>
  );
}

export default RegisterUser;