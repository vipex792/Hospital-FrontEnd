import React from 'react'; // 👈 THIS WAS MISSING
import { Link } from "react-router-dom";
// Ensure this path is correct, or comment it out if you don't have the CSS file yet
// import "../styles/home.css"; 

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand">Hospital Appointment System</span>
        <div>
          <Link to="/" className="nav-link d-inline text-white me-3">Home</Link>
          <Link to="/login" className="nav-link d-inline text-white">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center" style={{ minHeight: '80vh', background: '#f8f9fa' }}>
        <div className="container text-dark text-center">
          <h1 className="display-4 fw-bold">Welcome to Hospital Appointment System</h1>
          <p className="lead">
            Book medical consultations with specialist doctors in your city.
          </p>

          <div className="mt-4">
            <Link to="/register-user" className="btn btn-success me-2">
              USER SIGN UP
            </Link>

            <Link to="/login" className="btn btn-primary me-2">
              LOGIN
            </Link>

            <Link to="/register-doctor" className="btn btn-warning">
              DOCTOR SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;