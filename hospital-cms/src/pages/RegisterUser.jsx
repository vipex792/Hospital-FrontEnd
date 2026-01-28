function RegisterUser() {
  return (
    <div className="container col-md-6 mt-4">
      <div className="card p-4 shadow">
        <h4>User Registration</h4>

        <input className="form-control mb-2" placeholder="Username" />
        <input className="form-control mb-2" placeholder="First Name" />
        <input className="form-control mb-2" placeholder="Last Name" />
        <input className="form-control mb-2" placeholder="Email" />
        <input className="form-control mb-2" placeholder="Mobile-Number"/>
        <input className="form-control mb-2" placeholder="age"/>
        <input className="form-control mb-2" type="password" placeholder="Password"/>
        <input className="form-control mb-2" type="Password" placeholder="Confirm Password" />

        <div className="mb-2">
          <label className="me-3"><input type="radio" /> Male</label>
          <label className="me-3"><input type="radio" /> Female</label>
        </div>

        <button className="btn btn-success">Register</button>
      </div>
    </div>
  );
}

export default RegisterUser;
