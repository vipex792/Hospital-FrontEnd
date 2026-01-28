function RegisterDoctor() {
  return (
    <div className="container col-md-6 mt-4">
      <div className="card p-4 shadow">
        <h4>Add Doctor</h4>

        <input className="form-control mb-2" placeholder="Username" />
        <input className="form-control mb-2" placeholder="First Name" />
        <input className="form-control mb-2" placeholder="Last Name" />
        <input className="form-control mb-2" placeholder="Specialization" />
        <input className="form-control mb-2" placeholder="Email" />

        <button className="btn btn-success w-100">
          Register Doctor
        </button>
      </div>
    </div>
  );
}

export default RegisterDoctor;
