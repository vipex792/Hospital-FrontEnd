function DoctorDashboard() {
  return (
    <div className="container mt-4">
      <h3>Hello, Doctor</h3>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card p-3 shadow">
            <h5>Active Appointments</h5>
            <button className="btn btn-primary">View</button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3 shadow">
            <h5>Create Slots</h5>
            <button className="btn btn-success">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
