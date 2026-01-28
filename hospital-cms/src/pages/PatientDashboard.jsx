function PatientDashboard() {
  return (
    <div className="container mt-4">
      <h3>Hello, User</h3>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-3 shadow text-center">
            <h5>Book Appointment</h5>
            <button className="btn btn-primary">BOOK</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow text-center">
            <h5>Current Appointment</h5>
            <button className="btn btn-warning">VIEW</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow text-center">
            <h5>Appointment History</h5>
            <button className="btn btn-info">VIEW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
