import React, { useState } from "react"; // ✅ Added React
import { useNavigate } from "react-router-dom";
import { getDoctorsBySpecialization } from "../../services/patientApi";
import MyNavbar from "../../components/MyNavbar"; // ✅ Added Navbar

function DoctorSearch() {
  const [specialization, setSpecialization] = useState("");
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!specialization) {
      alert("Select specialization");
      return;
    }
    const data = await getDoctorsBySpecialization(specialization);
    setDoctors(data);
  };

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Find Doctor</h3>

        <select
          className="form-control mb-3"
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">Select Specialization</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Orthopedics</option>
        </select>

        <button className="btn btn-primary mb-4" onClick={handleSearch}>
          Search
        </button>

        <div className="row">
          {doctors.map((doc) => (
            <div className="col-md-4" key={doc.id}>
              <div className="card p-3 shadow">
                <h5>{doc.name}</h5>
                <p>{doc.specialization}</p>
                <button
                  className="btn btn-success"
                  onClick={() =>
                    navigate("/book-appointment", {
                      state: { doctor: doc },
                    })
                  }
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DoctorSearch;